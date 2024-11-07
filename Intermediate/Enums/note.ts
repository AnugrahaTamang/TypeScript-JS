/* Enums: Enum is a way to define a set of named constants. Enums allow you to
define a collection of related values that can be used interchangeably in your code */
enum WeatherConditions{
    sunny = "sunny environment",
    cloudy = "cloudy environment",
    rainy = "raniny environment"
}
console.log(WeatherConditions.sunny);
console.log(`Today is ${WeatherConditions.rainy}`)
