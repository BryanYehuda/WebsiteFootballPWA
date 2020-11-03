var dataPertandingan;
var dataTim;

var elKlasemen = () => {
  showLoader();
  var standings = getKlasemen()
  standings.then(data => {

    var str = JSON.stringify(data).replace(/http:/g, 'https:');
    data = JSON.parse(str);

    var html = '<center><h2>Standings Right Now</h2></center>'
    data.standings.forEach(klass => {
      var detail = ''
      klass.table.forEach(dataTim => {
        detail += `<tr>
            <td>${dataTim.position}</td>
            <td><img class="responsive-img" width="30" height="30" src="${ dataTim.team.crestUrl}"></td>
            <td>${dataTim.team.name}</td>
            <td>${dataTim.playedGames}</td>
            <td>${dataTim.won}</td>
            <td>${dataTim.draw}</td>
            <td>${dataTim.lost}</td>
            <td>${dataTim.goalsFor}</td>
            <td>${dataTim.goalsAgainst}</td>
            <td>${dataTim.goalDifference}</td>
            <td>${dataTim.points}</td>
          </tr>`
      })

      html += `
        <div class="col s12 m12">
          <div class="card">
            <div class="card-content">
              <table class="responsive-table highlight centered">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Team Logo</th>
                    <th>Team Name</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Draw</th>
                    <th>Lost</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>` + detail + `</tbody>
              </table>
            </div>
          </div>
        </div>
      `
    });
    let doc = document.getElementById('main-content');
    doc.innerHTML = html;
    hideLoader()
  })
}

var elPertandingan = () => {
  showLoader()
  var matches = getPertandingan()
  matches.then(data => {
    dataPertandingan = data;
    var matchdays = groupBy(data.matches, 'matchday');

    html = '<center><h2>Matches</h2></center>'
    for (const key in matchdays) {
      if (key != 'null') {
        html += `
              <h5>Group stage - ${key} of 38</h5>
              <div class="row">
            `
        matchdays[key].forEach(tanding => {
          html += `

            <div class="col s12 m6">
              <div class="card indigo darken-3">
                <div class="card-content white-text">
                  <span class="card-title center">Match date: ${dateToDMY(new Date(tanding.utcDate))}</span>
                  <table class="responsive-table centered">
                    <thead>
                      <tr>
                        <th>Home Team</th>
                        <th>Score</th>
                        <th>Away Team</th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${tanding.homeTeam.name}</td>
                        <td>${tanding.score.fullTime.homeTeam}</td>
                        <td>${tanding.awayTeam.name}</td>
                        <td>${tanding.score.fullTime.awayTeam}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            `
        });
        html += `
        </div>`
      }

    }
    let doc = document.getElementById('main-content');
    doc.innerHTML = html;
    hideLoader()
  })
}

var elTim = () => {
  showLoader()
  var teams = getTim()

  teams.then(data => {
    var str = JSON.stringify(data).replace(/http:/g, 'https:');
    data = JSON.parse(str);
    
    dataTim = data
    var html = '<center><h2>Teams Available</h2></center>'
    html += '<div class="row">'
    data.teams.forEach(tim => {
      html += `
      <div class="col s12 m6 l6">
        <div class="card">
          <div class="card-content">
            <div class="center"><img width="64" height="64" src="${tim.crestUrl}"></div>
            <div class="center flow-text">${tim.name}</div>
            <div class="center">${tim.area.name}</div>
          </div>
          <div class="card-action right-align">
              <a class="waves-effect waves-light btn-small indigo darken-4" onclick="insertTeamListener(${tim.id})">Add to Favorites</a>
          </div>
        </div>
      </div>
    `
    })
    html += "</div>"
    let doc = document.getElementById('main-content');
    doc.innerHTML = html;
    hideLoader()
  })
}



var elTimFavorit = () => {
  showLoader()
  var teams = getTimfav()

  teams.then(data => {
    dataTim = data;
    var html = '<center><h2>My Favorite Teams</h2></center>'
    html += '<div class="row">'
    data.forEach(tim => {
      html += `
      <div class="col s12 m6 l6">
        <div class="card">
          <div class="card-content">
            <div class="center"><img width="64" height="64" src="${tim.crestUrl}"></div>
            <div class="center flow-text">${tim.name}</div>
            <div class="center">${tim.area.name}</div>
          </div>
          <div class="card-action right-align">
              <a class="waves-effect waves-light btn-small red" onclick="deleteTeamListener(${tim.id})">Delete</a>
          </div>
        </div>
      </div>
    `
    })

    if(data.length == 0) html += '<h6 class="You have not choose a favorite team yet!</6>'

    html += "</div>"
    let doc = document.getElementById('main-content');
    doc.innerHTML = html;
    hideLoader()
  })
}

// database operations
var dbx = idb.open('football', 1, upgradeDb => {
  switch (upgradeDb.oldVersion) {
    case 0:
      upgradeDb.createObjectStore('tim', { 'keyPath': 'id' })
  }
});



var insertTeam = (tim) => {
  dbx.then(db => {
    var tx = db.transaction('tim', 'readwrite');
    var store = tx.objectStore('tim')
    tim.createdAt = new Date().getTime()
    store.put(tim)
    return tx.complete;
  }).then(() => {
    M.toast({ html: `${tim.name} is added to favorite!` })
    console.log('Match is added to favorite!');
  }).catch(err => {
    console.error('Match failed to be added to favorite', err);
  });
}

var deleteTeam = (idTim) => {
  dbx.then(db => {
    var tx = db.transaction('tim', 'readwrite');
    var store = tx.objectStore('tim');
    store.delete(idTim);
    return tx.complete;
  }).then(() => {
    M.toast({ html: 'This team has been deleted!' });
    elTimFavorit();
  }).catch(err => {
    console.error('Error: ', err);
  });
}

var getTimfav = () => {
  return dbx.then(db => {
    var tx = db.transaction('tim', 'readonly');
    var store = tx.objectStore('tim');
    return store.getAll();
  })
}



var insertTeamListener = idTim => {
  var tim = dataTim.teams.filter(el => el.id == idTim)[0]
  insertTeam(tim);
}

var deleteTeamListener = idTim => {
  var c = confirm("Are you sure you want to delete this team?")
  if (c == true) {
    deleteTeam(idTim);
  }
}

var showLoader = () => {
  var html = `<div class="preloader-wrapper medium active">
              <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
              </div>`
    let doc = document.getElementById('loader');          
    doc.innerHTML = html;
}

var hideLoader = () => {
  let doc = document.getElementById('loader');
  doc.innerHTML = '';
}

var groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var dateToDMY = date => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}
