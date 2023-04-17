(function () {
  //1. 전체 url 가져오기
  const currentURL = location.href;
  console.log(currentURL);

  //2. 쿼리스트링 파라메터 가져오기
  const urlObj = new URL(currentURL);

  //파라메터에 대한 정보가 들어있다.
  const params = urlObj.searchParams;
  console.log(params);

  // 파라메터의 값을 구한다. params.get("변수명");
  const q = params.get("q");
  const krcity = params.get("krcity");

  console.log(q, krcity);

  //3. ajax 이용해 전체 날씨 정보 얻어오기
  function getCityWeather(q) {
    var temp = {};
    var urlAPI =
      "https://api.openweathermap.org/data/2.5/weather?appid=7ba5be1502e294a8b00fb31fadb4d9a9&units=metric&lang=kr";
    urlAPI += "&q=" + q;
    console.log(urlAPI);

    $.ajax({
      type: "GET",
      url: urlAPI,
      dataType: "json",
      async: false, // 동기상태 => ajax는 기본적으로 비동기다.
      success: function (data) {
        const celsius = data.main.temp;
        const icon = data.weather[0].icon;
        const description = data.weather[0].description;
        const windChill = data.main.feels_like;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const cloud = data.clouds.all;

        temp.celsius = celsius.toFixed(0);
        temp.icon = icon;
        temp.description = description;
        temp.windChill = windChill.toFixed(0);
        temp.humidity = humidity;
        temp.windSpeed = windSpeed.toFixed(1);
        temp.cloud = cloud;
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      },
    });
    return temp;
  }

  //4. 데이터 바인딩 작업
  let temp = getCityWeather(q);
  console.log(temp);
  let iconURL = "https://openweathermap.org/img/wn/" + temp.icon + ".png";
  $(".icon > img").attr("src", iconURL);
  $(".region-title").text(`${krcity} 상세날씨`);
  $(".title").text(`현재 ${krcity} 날씨`);
  $("#description").text(`${temp.description}`);
  $("#celsius").text(`${temp.celsius} ℃`);
  $("#windChill").text(`${temp.windChill} ℃`);
  $("#humidity").text(`${temp.humidity} %`);
  $("#windSpeed").text(`${temp.windSpeed} m/s`);
  $("#cloud").text(`${temp.cloud} %`);
})();
