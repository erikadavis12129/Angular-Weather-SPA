// SERVICES

weatherApp.service('cityService', function() {

    this.city = "Austin, TX";

});

weatherApp.service('weatherService', ['$resource', function($resource) {

        this.getWeather = function(city, days) {
            
            var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=11f0ccb99ffbb304724416a1bb821e65", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
            
            return weatherResult = weatherAPI.get({ q: city, cnt: days });

        };
}]);