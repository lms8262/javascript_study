const movieURL =
  "https://api.themoviedb.org/3/movie/783675?api_key=159f2c588b7f854752d419211bdea484&language=ko-KR";
$.ajax({
  type: "GET",
  url: movieURL,
  dataType: "json",
  async: false,
  success: function (data) {
    const genres = data.genres;
    let i = 0;
    for (const genre of genres) {
      let name = genre.name;
      console.log(name);
      if (i <= 1) {
        $(".genre").append(`<span>${name}, </span>`);
      } else {
        $(".genre").append(`<span>${name}</span>`);
      }
      i++;
    }
    console.log("전체 data:", data);
    $(".title").append(data.title);
    $(".date").append(data.release_date);
    $(".content_content").append(data.overview);
    $(".company").append(data.production_companies[0].name);
    $(".score").append(data.vote_average);
    let imgURL = "https://image.tmdb.org/t/p/w500" + data.poster_path;
    $(".img").append(
      `<a href="./detail.html?id=${data.id}"><img src="${imgURL}" alt="포스터"></a>`
    );
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});

const movieURL2 =
  "https://api.themoviedb.org/3/movie/783675/similar?api_key=159f2c588b7f854752d419211bdea484&language=ko-KR&page=4";
$.ajax({
  type: "GET",
  url: movieURL2,
  dataType: "json",
  async: false,
  success: function (data) {
    const movies = data.results;
    console.log("전체 data:", data);
    let j = 0;
    for (const movie of movies) {
      j++;
      let poster = movie.poster_path;
      let title__title = movie.title;
      let address = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
      if (j == 6) {
        break;
      }
      $("#movie")
        .append(`<div class="col" style="margin-left:50px; margin-top:30px">
    <div class="card" style="height:450px; width:280px; border-radius:10px">
      <img src="${address}" style="height:380px; width:280px; border-radius:10px 10px 0 0" alt="포스터"></img>
      <div class="card-body">
        <h5 class="movie1__title" style="font-size:20px; text-align:center; ">${title__title}</h5>
        
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
