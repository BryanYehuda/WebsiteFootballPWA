const API_KEY = 'a65c4ce8fc964aa6ab9618a0da2629db'
const LEAGUE_ID = 2021

var base_url = "https://api.football-data.org/v2/";
var urlKlasemen = `${base_url}competitions/${LEAGUE_ID}/standings?standingType=TOTAL`
var urlPertandingan = `${base_url}competitions/${LEAGUE_ID}/matches`
var urlTim = `${base_url}competitions/${LEAGUE_ID}/teams`

const fetchApi = url => {
  return fetch(url, {
    headers: {
      'X-Auth-Token': API_KEY
    }
  });
}

var status = response => {
  if (response.status !== 200) {
    console.log("Error : " + response.status);

    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

function getAllStandings() {
    if ("caches" in window) {
        caches.match(urlKlasemen).then(function (response) {
            if (response) {
                response.clone();
                response.json().then(function (data) {
                    console.log("Competition Data: " + data);
                    return response.data;
                })
            }
        })
    }

    fetchApi(urlKlasemen)
        .then(data => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}

function getAllMatches() {
    if ("caches" in window) {
        caches.match(urlTim).then(function (response) {
            if (response) {
                response.clone();
                response.json().then(function (data) {
                    console.log("Competition Data: " + data);
                    return response.data;
                })
            }
        })
    }

    fetchApi(urlTim)
        .then(data => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}

function getAllTeams() {
    if ("caches" in window) {
        caches.match(urlPertandingan).then(function (response) {
            if (response) {
                response.clone();
                response.json().then(function (data) {
                    console.log("Competition Data: " + data);
                    return response.data;
                })
            }
        })
    }

    fetchApi(urlPertandingan)
        .then(data => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}


//var json = response => {
//  return response.json();
//}

var error = error => {
  console.log("Error: " + error);
}

var getKlasemen = () => {
  var fetK = fetchApi(urlKlasemen)
    .then(status)
    .then(getAllStandings)
    //.then(json);
  return fetK;
}

var getPertandingan = () => {
  var fetP = fetchApi(urlPertandingan)
    .then(status)
    .then(getAllMatches)
    //.then(json);
  return fetP;
}

var getTim = () => {
  var fetT = fetchApi(urlTim)
    .then(status)
    .then(getAllTeams)
    //.then(json);
  return fetT;
}