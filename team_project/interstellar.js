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
      async: false,
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
      async: false,
      success: function (data) {
        const title = data.title;
        const subTitle = data.original_title;
        const releaseDate = data.release_date;
        const genre = data.genres[0].name;
        const genre1 = data.genres[1].name;
        const genre2 = data.genres[2].name;
        const runtime = data.runtime;
        const voteAverage = data.vote_average;
        const tagline = data.tagline;
        const overview = data.overview.split(". ");

        tempMovie.title = title;
        tempMovie.subTitle = subTitle;
        tempMovie.releaseDate = releaseDate;
        tempMovie.genre = genre;
        tempMovie.genre1 = genre1;
        tempMovie.genre2 = genre2;
        tempMovie.runtime = runtime;
        tempMovie.voteAverage = voteAverage.toFixed(1);
        tempMovie.tagline = tagline;
        tempMovie.overview = overview;
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      },
    });
    return tempMovie;
  }

  //추천 영화 함수 선언
  function getRecommend() {
    var recommendAPI =
      "https://api.themoviedb.org/3/movie/157336/recommendations?api_key=bb51d3adf7f25504f29f4b4426a7ccbe&language=ko-KR&page=1";

    $.ajax({
      type: "GET",
      url: recommendAPI,
      dataType: "json",
      async: false,
      success: function (data) {
        const recommendMovies = data.results;
        let i = 0;

        for (const recommendMovie of recommendMovies) {
          let movieImageURL = `https://image.tmdb.org/t/p/original${recommendMovie.poster_path}`;

          if (recommendMovie.title.length > 10) {
            continue;
          }

          if (i === 6) {
            break;
          }
          i++;

          //데이터 바인딩
          $(".main__bottom").append(`
          <div class="col-md-2">
            <div class="card h-100">
              <img src="${movieImageURL}" class="card-img-top h-100" alt="추천 영화">
              <div class="card-body">
                <h5 class="card-title">${recommendMovie.title}</h5>
              </div>
            </div>
          </div>`);
        }
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      },
    });
  }

  //출연진 함수 선언
  function getCast() {
    var castAPI =
      "https://api.themoviedb.org/3/movie/157336/credits?api_key=bb51d3adf7f25504f29f4b4426a7ccbe&language=ko-KR";

    $.ajax({
      type: "GET",
      url: castAPI,
      dataType: "json",
      async: false,
      success: function (data) {
        const castList = data.cast;
        let i = 0;

        for (const cast of castList) {
          let castImageURL = `https://image.tmdb.org/t/p/original${cast.profile_path}`;

          if (i === 6) {
            break;
          }
          i++;

          //데이터 바인딩
          $(".cast-list").append(`<div class="col-md-2">
          <div class="card h-100">
            <img src="${castImageURL}" class="card-img-top" alt="배우사진" />
            <div class="card-body">
              <h5 class="card-title">${cast.name}</h5>
              <p class="card-text">${cast.character}</p>
            </div>
          </div>
        </div>`);
        }
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      },
    });
  }

  // 데이터 바인딩

  // 포스터
  let tempPoster = getPoster();
  let posterURL = "https://image.tmdb.org/t/p/original" + tempPoster.poster;
  $(".poster > img").attr("src", posterURL);

  // 영화 정보
  let tempMovie = getMovie();
  $("#title").text(tempMovie.title);
  $("#sub_title").text(tempMovie.subTitle);
  $("#release_year").text(tempMovie.releaseDate.substr(0, 4));
  $("#release_date").text(tempMovie.releaseDate);
  $("#genre").text(
    `${tempMovie.genre}/${tempMovie.genre1}/${tempMovie.genre2}`
  );
  $("#runtime").text(`${tempMovie.runtime}분`);
  $("#vote_average").text(tempMovie.voteAverage);
  $("#overview").append(
    `<br><b>${tempMovie.tagline}</b><br><br>${tempMovie.overview[0]}.<br>${tempMovie.overview[1]}.
    <br>${tempMovie.overview[2]}.<br>${tempMovie.overview[3]}.<br>${tempMovie.overview[4]}`
  );

  //추천 영화
  getRecommend();

  //출연진
  getCast();
})();
