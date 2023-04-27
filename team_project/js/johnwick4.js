function getWeatherWithCity() {
  var temp = {};
  var urlAPI =
    "https://api.themoviedb.org/3/movie/603692?api_key=e74f2fabec48e6b98245dd14c36dd56e&language=ko-KR";
  console.log(urlAPI);

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태=>ajax는 기본적으로 비동기다.
    success: function (data) {
      const title = data.title;
      const tagline = data.tagline;
      const overview = data.overview;
      const voteaverage = data.vote_average;
      const poster_path = data.poster_path;

      temp.title = title;
      temp.tagline = tagline;
      temp.overview = overview;
      temp.voteaverage = voteaverage.toFixed(1);
      temp.poster_path = poster_path;
      console.log(title);
      console.log(tagline);
      console.log(overview);
      console.log(voteaverage.toFixed(1));
      console.log(poster_path);
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp;
}
let temp = getWeatherWithCity();
let movieicon = "https://image.tmdb.org/t/p/w500/" + temp.poster_path;
$(".movie-name").text(`${temp.title}`);
$(".sec2-sub1__movie").text(`${temp.overview}`);
$(".sec2-sub2__movie").text(`${temp.tagline}`);
$(".movie-1").text(`${temp.voteaverage}점`);
$(".movie-poster > a > img").attr("src", movieicon);
console.log(temp);

// 2 ) 출연자

function getWeatherWithCity1() {
  var temp1 = {};
  var urlAPI =
    "https://api.themoviedb.org/3/movie/603692/credits?api_key=e74f2fabec48e6b98245dd14c36dd56e&language=ko-KR";
  console.log(urlAPI);

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태=>ajax는 기본적으로 비동기다.
    success: function (data) {
      const name1 = data.cast[0].name;
      const name2 = data.cast[1].name;
      const name3 = data.cast[2].name;
      const name4 = data.cast[3].name;
      const name5 = data.cast[6].name;
      const name6 = data.cast[5].name;
      const actor1 = data.cast[0].profile_path;
      const actor2 = data.cast[1].profile_path;
      const actor3 = data.cast[2].profile_path;
      const actor4 = data.cast[3].profile_path;
      const actor5 = data.cast[6].profile_path;
      const actor6 = data.cast[5].profile_path;
      const actorname1 = data.cast[0].character;
      const actorname2 = data.cast[1].character;
      const actorname3 = data.cast[2].character;
      const actorname4 = data.cast[3].character;
      const actorname5 = data.cast[6].character;
      const actorname6 = data.cast[5].character;

      temp1.name1 = name1;
      temp1.name2 = name2;
      temp1.name3 = name3;
      temp1.name4 = name4;
      temp1.name5 = name5;
      temp1.name6 = name6;
      temp1.actor1 = actor1;
      temp1.actor2 = actor2;
      temp1.actor3 = actor3;
      temp1.actor4 = actor4;
      temp1.actor5 = actor5;
      temp1.actor6 = actor6;
      temp1.actorname1 = actorname1;
      temp1.actorname2 = actorname2;
      temp1.actorname3 = actorname3;
      temp1.actorname4 = actorname4;
      temp1.actorname5 = actorname5;
      temp1.actorname6 = actorname6;
      console.log(name1);
      console.log(actor1);
      console.log(actorname1);
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp1;
}
let temp1 = getWeatherWithCity1();
let movieactor1 = "https://image.tmdb.org/t/p/w500/" + temp1.actor1;
let movieactor2 = "https://image.tmdb.org/t/p/w500/" + temp1.actor2;
let movieactor3 = "https://image.tmdb.org/t/p/w500/" + temp1.actor3;
let movieactor4 = "https://image.tmdb.org/t/p/w500/" + temp1.actor4;
let movieactor5 = "https://image.tmdb.org/t/p/w500/" + temp1.actor5;
let movieactor6 = "https://image.tmdb.org/t/p/w500/" + temp1.actor6;
$(".staff-name1").text(`${temp1.name1}`);
$(".staff-name2").text(`${temp1.name2}`);
$(".staff-name3").text(`${temp1.name3}`);
$(".staff-name4").text(`${temp1.name4}`);
$(".staff-name5").text(`${temp1.name5}`);
$(".staff-name6").text(`${temp1.name6}`);
$(".staff-img1").attr("src", movieactor1);
$(".staff-img2").attr("src", movieactor2);
$(".staff-img3").attr("src", movieactor3);
$(".staff-img4").attr("src", movieactor4);
$(".staff-img5").attr("src", movieactor5);
$(".staff-img6").attr("src", movieactor6);
$(".actor-name1").text(`${temp1.actorname1}`);
$(".actor-name2").text(`${temp1.actorname2}`);
$(".actor-name3").text(`${temp1.actorname3}`);
$(".actor-name4").text(`${temp1.actorname4}`);
$(".actor-name5").text(`${temp1.actorname5}`);
$(".actor-name6").text(`${temp1.actorname6}`);
console.log(temp1);

// 추천영화//

function getWeatherWithCity2() {
  var temp2 = {};
  var urlAPI =
    "https://api.themoviedb.org/3/movie/603692/recommendations?api_key=e74f2fabec48e6b98245dd14c36dd56e&language=ko-KR&page=1";
  console.log(urlAPI);

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태=>ajax는 기본적으로 비동기다.
    success: function (data) {
      const moviename1 = data.results[1].title;
      const moviename2 = data.results[2].title;
      const moviename3 = data.results[3].title;
      const moviename4 = data.results[4].title;
      const moviebest1 = data.results[1].poster_path;
      const moviebest2 = data.results[2].poster_path;
      const moviebest3 = data.results[3].poster_path;
      const moviebest4 = data.results[4].poster_path;

      temp2.moviename1 = moviename1;
      temp2.moviename2 = moviename2;
      temp2.moviename3 = moviename3;
      temp2.moviename4 = moviename4;
      temp2.moviebest1 = moviebest1;
      temp2.moviebest2 = moviebest2;
      temp2.moviebest3 = moviebest3;
      temp2.moviebest4 = moviebest4;
      console.log(moviename1);
      console.log(moviebest1);
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp2;
}
let temp2 = getWeatherWithCity2();
let moviebestbest1 = "https://image.tmdb.org/t/p/w500/" + temp2.moviebest1;
let moviebestbest2 = "https://image.tmdb.org/t/p/w500/" + temp2.moviebest2;
let moviebestbest3 = "https://image.tmdb.org/t/p/w500/" + temp2.moviebest3;
let moviebestbest4 = "https://image.tmdb.org/t/p/w500/" + temp2.moviebest4;
console.log(temp2);
$(".goodmovie-name1").text(`${temp2.moviename1}`);
$(".goodmovie-name2").text(`${temp2.moviename2}`);
$(".goodmovie-name3").text(`${temp2.moviename3}`);
$(".goodmovie-name4").text(`${temp2.moviename4}`);
$(".goodmovie-img1").attr("src", moviebestbest1);
$(".goodmovie-img2").attr("src", moviebestbest2);
$(".goodmovie-img3").attr("src", moviebestbest3);
$(".goodmovie-img4").attr("src", moviebestbest4);

//개봉일,상영시간,장르

function getWeatherWithCity3() {
  var temp3 = {};
  var urlAPI =
    "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=20231089";
  console.log(urlAPI);

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태=>ajax는 기본적으로 비동기다.
    success: function (data) {
      const runtime1 = data.movieInfoResult.movieInfo.showTm[0];
      const runtime2 = data.movieInfoResult.movieInfo.showTm[1];
      const runtime3 = data.movieInfoResult.movieInfo.showTm[2];
      const movieday = data.movieInfoResult.movieInfo.openDt;
      const movievalue = data.movieInfoResult.movieInfo.genres[0].genreNm;

      temp3.runtime1 = runtime1;
      temp3.runtime2 = runtime2;
      temp3.runtime3 = runtime3;
      temp3.movieday = movieday;
      temp3.movievalue = movievalue;

      console.log(runtime1);
      console.log(runtime2);
      console.log(movieday);
      console.log(movievalue);
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp3;
}
let temp3 = getWeatherWithCity3();
$(".movie-time").text(`${temp3.runtime1}h ${temp3.runtime2}${temp3.runtime3}m`);
$(".movie-day").text(`${temp3.movieday}`);
$(".movie-value").text(`${temp3.movievalue}`);
console.log(temp3);

function getWeatherWithCity4() {
  var temp4 = {};
  var urlAPI =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230420";
  console.log(urlAPI);

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태=>ajax는 기본적으로 비동기다.
    success: function (data) {
      const movie1 = data.boxOfficeResult.dailyBoxOfficeList[0].audiAcc;

      temp4.movie1 = movie1;
      console.log(movie1);
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp4;
}
let temp4 = getWeatherWithCity4();
$(".movie-3").text(`${temp4.movie1}명`);
console.log(temp4);

// ==============스와이프

function getWeatherWithCity5() {
  var temp5 = {};
  var urlAPI =
    "https://api.themoviedb.org/3/movie/603692/images?api_key=e74f2fabec48e6b98245dd14c36dd56e";
  console.log(urlAPI);

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태=>ajax는 기본적으로 비동기다.
    success: function (data) {
      const movieposter1 = data.backdrops[5].file_path;
      const movieposter2 = data.backdrops[10].file_path;
      const movieposter3 = data.backdrops[12].file_path;
      const movieposter4 = data.backdrops[15].file_path;

      temp5.movieposter1 = movieposter1;
      temp5.movieposter2 = movieposter2;
      temp5.movieposter3 = movieposter3;
      temp5.movieposter4 = movieposter4;
      console.log(movieposter1);
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp5;
}
let temp5 = getWeatherWithCity5();
let poster1 = "https://image.tmdb.org/t/p/w500/" + temp5.movieposter1;
let poster2 = "https://image.tmdb.org/t/p/w500/" + temp5.movieposter2;
let poster3 = "https://image.tmdb.org/t/p/w500/" + temp5.movieposter3;
let poster4 = "https://image.tmdb.org/t/p/w500/" + temp5.movieposter4;
$(".poster1").attr("src", poster1);
$(".poster2").attr("src", poster2);
$(".poster3").attr("src", poster3);
$(".poster4").attr("src", poster4);
console.log(temp5);
