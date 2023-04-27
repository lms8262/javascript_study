// Team 5 Project index js

// 이미지 슬라이드 시작 =================================================
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
});

// 이미지 슬라이드 끝 ==================================================

// 현재 상영작 ajax 시작 ------------------------------------
const now_movieURL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=c8509b8f85db6c465df670fd3eb60def&language=ko-KR&region=KR";

$.ajax({
  type: "GET",
  url: now_movieURL,
  dataType: "json",
  async: false,
  success: function (data) {
    const results = data.results;

    for (const result of results) {
      let imgURL = "https://image.tmdb.org/t/p/w500" + result.poster_path;
      $(".now__body").append(
        `<li class="now_list">
           <a href="./detail.html?id=${result.id}">
           <img class="now-img" src="${imgURL}" alt="현재상영작">
           <span class="now-title">${result.title}</span>
           </a>
         </li>`
      );
    }
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});
//현재상영작 ajax 끝----------------------------------

//영화랭킹 ajax 시작 ---------------------------------
(function () {
  const rank_movieURL =
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=4cb53f1391db2b7155f3fdd51d5a894d&targetDt=20230421&weekGb=0";

  $.ajax({
    type: "GET",
    url: rank_movieURL, // 선언한 주소 변수
    dataType: "json",
    async: false,
    success: function (data) {
      const lists = data.boxOfficeResult.weeklyBoxOfficeList;
      console.log(lists);

      let i = 1;
      for (const list of lists) {
        if (i <= 10) {
          $(".table_content").append(`
          <ul class="table_content_list">
            <li class="c_ranking col-md-2">${list.rank}</li>
            <li class="c_movie_title col-md-4">${list.movieNm}</li>
            <li class="c_movie_share col-md-3">${list.salesShare}</li>
            <li class="c_movie_audience col-md-3">${list.audiCnt}</li>
          </ul>`);
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
})();
//영화랭킹 ajax 끝----------------------------------
