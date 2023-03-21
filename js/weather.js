navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon)
}

function onGeoError() {
    alert("날씨를 제공할 위치를 찾을 수 없습니다.")
}
function getWeather(lat, lon){
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c2d0e5bbe716ac60f8541d884dda4c9c`,
        type: "GET",
        data: {units:"metric"}, // 섭씨로 변환
        success: function (data) {
            weatherInfo(data.main)// temp, weather, name
        },
        error: function (arg) {
            alert("통신실패시에만 실행");
        }
    });
}
    function weatherInfo(data) {
    let temp = ''
    let weather = ''
    let tempUp = Math.ceil(data.temp * 10) / 10; // 반올림
    temp += `<span>현재온도는 ${tempUp}°C 입니다</span>`
    $('.weatherInfo').append(temp)
}