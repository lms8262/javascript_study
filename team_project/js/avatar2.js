const movieURL =
  "https://api.themoviedb.org/3/movie/76600?api_key=38dd880c562e1f720e47f2b4a33ce753&language=ko-KR";

$.ajax({
  type: "GET",
  url: movieURL,
  dataType: "json",
  async: false, //동기상태 => ajax는 기본적으로 비동기다.
  success: function (data) {
    const title = data.title;
    console.log(`한국이름:${title}`);
    const original_title = data.original_title;
    console.log(`영화이름:${original_title}`);

    const genres = data.genres[0].name;
    const genres1 = data.genres[1].name;
    const genres2 = data.genres[2].name;

    console.log(genres);
    console.log(genres1);
    console.log(genres2);

    const runtime = data.runtime;

    const release_date = data.release_date;

    const vote_average = data.vote_average.toFixed(1);
    console.log(`평점${vote_average}`);

    const revenue = data.revenue;
    console.log(revenue);

    const tagline = data.tagline;
    console.log(tagline);

    let imgURL = "https://image.tmdb.org/t/p/original" + data.poster_path;

    $(".poster").append(
      `<a href="./index.html?id=${data.id}"><img src="${imgURL}" alt="poster"></a>`
    );
    $(".poster img ").height(400);

    $(".poster img ").css("border-radius", "10px");
    $(".main_view_title").text(`${title}`);
    $(".info_text1").text(`${original_title}`);
    $(".info_text2").text(`${tagline}`);
    $(".info_text3").text(`장르 ${genres} / ${genres1} / ${genres2}`);
    $(".info_text4").text(`개봉날짜 ${release_date}`);
    $(".info_text5").text(`러닝타임 ${runtime}분`);
    $(".info_text6").text(`평점 ${vote_average}`);
    $(".info_text7").text(`수익 $${revenue}`);
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});

const movieURL2 =
  "https://api.themoviedb.org/3/movie/76600/credits?api_key=38dd880c562e1f720e47f2b4a33ce753&language=ko-KR";

$.ajax({
  type: "GET",
  url: movieURL2,
  dataType: "json",
  async: false, //동기상태 => ajax는 기본적으로 비동기다.
  success: function (data) {
    const actor1 = data.cast[0].name;
    const actor2 = data.cast[1].name;
    const actor3 = data.cast[2].name;
    const actor4 = data.cast[3].name;

    const character1 = data.cast[0].character;
    const character2 = data.cast[1].character;
    const character3 = data.cast[2].character;
    const character4 = data.cast[3].character;

    $(".actor1-text1").text(`${actor1}`);
    $(".actor1-text2").text(`(${character1})`);

    $(".actor2-text1").text(`${actor2}`);
    $(".actor2-text2").text(`(${character2})`);

    $(".actor3-text1").text(`${actor3}`);
    $(".actor3-text2").text(`(${character3})`);

    $(".actor4-text1").text(`${actor4}`);
    $(".actor4-text2").text(`(${character4})`);

    let imgURL2 = "https://image.tmdb.org/t/p/w300" + data.cast[0].profile_path;
    let imgURL3 = "https://image.tmdb.org/t/p/w300" + data.cast[1].profile_path;
    let imgURL4 = "https://image.tmdb.org/t/p/w300" + data.cast[2].profile_path;
    let imgURL5 = "https://image.tmdb.org/t/p/w300" + data.cast[3].profile_path;

    $(".actor1-img").append(
      `<a href="./index.html?id=${data.id}"><img src="${imgURL2}" alt="Sam Worthington"></a>`
    );

    $(".actor2-img").append(
      `<a href="./index.html?id=${data.id}"><img src="${imgURL3}" alt="Zoe Saldaña"></a>`
    );
    $(".actor3-img").append(
      `<a href="./index.html?id=${data.id}"><img src="${imgURL4}" alt="Sigourney Weaver"></a>`
    );
    $(".actor4-img").append(
      `<a href="./index.html?id=${data.id}"><img src="${imgURL5}" alt="Sigourney Weaver"></a>`
    );
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});
