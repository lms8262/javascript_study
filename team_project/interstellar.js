(function () {
  // 영화 포스터 함수 선언
  function getPoster() {
    var tempPoster = {};
    var posterAPI =
      "https://api.themoviedb.org/3/movie/157336/images?api_key=bb51d3adf7f25504f29f4b4426a7ccbe&language=ko";

    $.ajax({
      type: "GET",
      url: posterAPI,
      dataType: "json",
      async: false, // 동기상태 => ajax는 기본적으로 비동기다.
      success: function (data) {
        const poster = data.posters[0].file_path;

        tempPoster.poster = poster;
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      },
    });
    return tempPoster;
  }

  // 영화 정보 함수 선언
  function getMovie() {
    var tempMovie = {};
    var movieAPI =
      "https://api.themoviedb.org/3/movie/157336?api_key=bb51d3adf7f25504f29f4b4426a7ccbe&language=ko-KR";

    $.ajax({
      type: "GET",
      url: movieAPI,
      dataType: "json",
      async: false, // 동기상태 => ajax는 기본적으로 비동기다.
      success: function (data) {
        const title = data.title;
        const subTitle = data.original_title;
        const releaseDate = data.release_date;
        const genre = data.genres[0].name;
        const genre1 = data.genres[1].name;
        const genre2 = data.genres[2].name;
        const runtime = data.runtime;
        const voteAverage = data.vote_average;

        tempMovie.title = title;
        tempMovie.subTitle = subTitle;
        tempMovie.releaseDate = releaseDate;
        tempMovie.genre = genre;
        tempMovie.genre1 = genre1;
        tempMovie.genre2 = genre2;
        tempMovie.runtime = runtime;
        tempMovie.voteAverage = voteAverage.toFixed(1);
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      },
    });
    return tempMovie;
  }

  // 데이터 바인딩

  // 포스터
  let tempPoster = getPoster();
  let posterURL = "https://image.tmdb.org/t/p/original" + tempPoster.poster;
  $(".poster > img").attr("src", posterURL);

  // 영화 정보
  let tempMovie = getMovie();
  $("#title").text(`${tempMovie.title}`);
  $("#sub_title").text(`${tempMovie.subTitle}`);
  $("#release_date").text(`${tempMovie.releaseDate}`);
  $("#genre").text(
    `${tempMovie.genre}/${tempMovie.genre1}/${tempMovie.genre2}`
  );
  $("#runtime").text(`${tempMovie.runtime}분`);
  $("#vote_average").text(`${tempMovie.voteAverage}`);
})();
