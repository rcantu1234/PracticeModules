var WeatherService = (function () {
    function WeatherService(city) {
        this.city = city;
    }
    WeatherService.prototype.getWeather = function (callback) {
        var _this = this;
        var url = "http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q=" + this.city;
        var request = new XMLHttpRequest();
        var self = this;
        console.log(self);
        request.addEventListener('load', function () {
            _this.weatherData = JSON.parse(request.responseText);
            callback();
        });
        request.open('GET', url);
        request.send();
    };
    return WeatherService;
}());
var service = new WeatherService('Seattle');
service.getWeather(function () {
    console.log(service.weatherData);
});
