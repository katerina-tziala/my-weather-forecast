export interface Volume {
  '1h': Number;
  '3h': Number;
}

export interface PartOfTheDay {
  pod: string;
}

export interface Wind {
  speed: Number;
  deg: Number;
  gust?: Number;
}

export interface Coordinates {
  lon: Number;
  lat: Number;
}

export interface Clouds {
  all: Number;
}

export interface Weather {
  temp: Number;
  feels_like: Number;
  temp_min: Number;
  temp_max: Number;
  humidity: Number;
  pressure: Number;
  grnd_level?: Number;
  temp_kf?: Number;
  sea_level?: Number;
}

export interface WeatherCondition {
  id: Number;
  description: string;
  main: string;
  icon: string;
}

export interface Region {
  country: string;
  sunrise: Number;
  sunset: Number;
  timezone: Number;
}

export interface City extends Region {
  id: Number;
  name: string;
  population: Number;
  coord: Coordinates;
}

export interface WeatherForecast {
  dt: Number;
  visibility: Number;
  main: Weather;
  wind: Wind;
  clouds: Clouds;
  rain?: Volume;
  snow?: Volume;
  weather: WeatherCondition[];
}

export interface CityListItemForecast extends WeatherForecast {
  dt_txt: String;
  pop: Number;
  sys: PartOfTheDay;
}

export interface LocationWeather extends WeatherForecast {
  id: Number;
  name: string;
  coord: Coordinates;
  sys: Region;
}

export interface CityForecast {
  city: City;
  list: CityListItemForecast[];
}
