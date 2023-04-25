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
        const poster = data.posters[4].file_path;

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
        const budget = String(data.budget);
        const revenue = String(data.revenue);

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
        tempMovie.budget = budget;
        tempMovie.revenue = revenue;
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      },
    });
    return tempMovie;
  }

  // 추천 영화 함수 선언
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
          let recommendMovieImageURL = `https://image.tmdb.org/t/p/w500${recommendMovie.poster_path}`;

          if (recommendMovie.title.length > 10) {
            continue;
          }

          if (i == 6) {
            break;
          }
          i++;

          // 추천 영화 데이터 바인딩
          $(".main__bottom").append(`
          <div class="col-md-2">
            <div class="card h-100">
              <img src="${recommendMovieImageURL}" class="card-img-top h-100 img" alt="추천 영화">
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
        const directorImageURL = `https://image.tmdb.org/t/p/w500${data.crew[1].profile_path}`;

        // 감독 데이터 바인딩
        $("#director").prepend(`<div class="col-md-3">
        <div class="card" style="border: none">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${directorImageURL}"
                class="img-fluid rounded-start img"
                alt="감독 이미지"
                style="border-radius: 10px"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${data.crew[1].name}</h5>
                <p class="card-text">${data.crew[1].job}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`);
        for (const cast of castList) {
          let castImageURL = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;

          // 상세 출연진 데이터 바인딩
          if (cast.profile_path) {
            $("#actor").append(`<div class="col-md-3 mb-5">
            <div class="card" style="border: none">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="${castImageURL}"
                    class="img-fluid rounded-start img"
                    alt="출연진 이미지"
                    style="border-radius: 10px"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${cast.name}</h5>
                    <p class="card-text">${cast.character}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`);
          } else {
            if (cast.gender == 1) {
              $("#actor").append(`<div class="col-md-3 mb-5">
              <div class="card" style="border: none">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="./images/female.svg"
                      class="img-fluid rounded-start"
                      alt="출연진 이미지"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${cast.name}</h5>
                      <p class="card-text">${cast.character}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>`);
            } else {
              $("#actor").append(`<div class="col-md-3 mb-5">
            <div class="card" style="border: none">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="./images/male.svg"
                    class="img-fluid rounded-start"
                    alt="출연진 이미지"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${cast.name}</h5>
                    <p class="card-text">${cast.character}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`);
            }
          }

          if (i <= 5) {
            // 간단 출연진 데이터 바인딩
            $(".cast-list").append(`<div class="col-md-2">
            <div class="card h-100">
              <img src="${castImageURL}" class="card-img-top img" alt="배우사진" />
              <div class="card-body">
                <h5 class="card-title">${cast.name}</h5>
                <p class="card-text">${cast.character}</p>
              </div>
            </div>
          </div>`);
          }
          i++;
        }
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      },
    });
  }

  // 예고편 영상 함수 선언
  function getTrailer() {
    var tempTrailer = {};
    var trailerAPI =
      "https://api.themoviedb.org/3/movie/157336/videos?api_key=bb51d3adf7f25504f29f4b4426a7ccbe&language=ko-KR";

    $.ajax({
      type: "GET",
      url: trailerAPI,
      dataType: "json",
      async: false,
      success: function (data) {
        const trailer = data.results[3].key;
        const trailer2 = data.results[4].key;

        tempTrailer.trailer = trailer;
        tempTrailer.trailer2 = trailer2;

        const detailTrailers = data.results;
        let i = 0;
        for (const detailTrailer of detailTrailers) {
          let trailerURL = `https://www.youtube.com/embed/${detailTrailer.key}`;
          if (!(i == 0)) {
            //상세 영상 데이터 바인딩
            $(".detail-trailer").append(`<div class="col-md-6">
              <div>
                <iframe
                  width="100%"
                  height="350"
                  src="${trailerURL}"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  style="border-radius: 10px"
                ></iframe>
              </div>
            </div>`);
          }
          i++;
        }
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      },
    });
    return tempTrailer;
  }

  // 이미지 함수 선언
  function getImage() {
    var imageAPI =
      "https://api.themoviedb.org/3/movie/157336/images?api_key=bb51d3adf7f25504f29f4b4426a7ccbe&include_image_language=ko%2Cnull";

    $.ajax({
      type: "GET",
      url: imageAPI,
      dataType: "json",
      async: false,
      success: function (data) {
        const images = data.backdrops;
        let i = 0;

        for (const image of images) {
          let imageURL = `https://image.tmdb.org/t/p/original${image.file_path}`;

          // 상세 이미지 데이터 바인딩
          $(".detail-photo").append(
            `<div class="col-md-3 mb-5"><img src="${imageURL}" alt="영화 이미지" width="100%" height="100%" class="img" style="border-radius: 10px"></div>`
          );

          if (i <= 3) {
            // 간단 이미지 데이터 바인딩
            $(".simple-image").append(
              `<div class="col-md-3"><img src="${imageURL}" alt="영화 이미지" width="100%" height="100%" class="img" style="border-radius: 10px"></div>`
            );
          }
          i++;
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
  let posterURL = "https://image.tmdb.org/t/p/w500" + tempPoster.poster;
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
  $("#vote_average").text(`★${tempMovie.voteAverage}`);
  $("#overview").append(
    `<br><b>${tempMovie.tagline}</b><br><br>${tempMovie.overview[0]}.<br>${tempMovie.overview[1]}.
    <br>${tempMovie.overview[2]}.<br>${tempMovie.overview[3]}.<br>${tempMovie.overview[4]}`
  );
  $("#budget").append(
    `$${tempMovie.budget.substr(0, 3)},${tempMovie.budget.substr(
      3,
      3
    )},${tempMovie.budget.substr(6)}`
  );
  $("#revenue").text(
    `$${tempMovie.revenue.substr(0, 3)},${tempMovie.revenue.substr(
      3,
      3
    )},${tempMovie.revenue.substr(6)}`
  );

  // 추천 영화
  getRecommend();

  // 출연진
  getCast();

  // 예고편 영상
  let tempTrailer = getTrailer();
  $(".simple-trailer").append(`<div class="col-md-6">
    <div>
      <iframe
        width="100%"
        height="350"
        src="https://www.youtube.com/embed/${tempTrailer.trailer}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="border-radius: 10px"
      ></iframe>
    </div>
  </div>`);
  $(".simple-trailer").append(`<div class="col-md-6">
    <div>
      <iframe
        width="100%"
        height="350"
        src="https://www.youtube.com/embed/${tempTrailer.trailer2}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="border-radius: 10px"
      ></iframe>
    </div>
  </div>`);

  //이미지
  getImage();

  // 모달 이벤트
  let modal_img = document.querySelector(".modal_content");

  $(".img").click(function () {
    let img = new Image();
    img.src = $(this).attr("src");
    modal_img.src = img.src;
    document.body.style.overflow = "hidden";
    $(".modal").fadeIn();
  });
  $(".modal").click(function () {
    document.body.style.overflow = "unset";
    $(".modal").fadeOut();
  });
})();
