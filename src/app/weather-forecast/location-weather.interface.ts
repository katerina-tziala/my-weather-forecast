export interface Volume {
  '1h': number;
  '3h': number;
}

export interface PartOfTheDay {
  pod: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Clouds {
  all: number;
}

export interface Weather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: number;
  grnd_level?: number;
  temp_kf?: number;
  sea_level?: number;
}

export interface WeatherDescription {
  id: number;
  description: string;
  main: string;
  icon: string;
}

export interface Region {
  country: string;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface City extends Region {
  id: number;
  name: string;
  population: number;
  coord: Coordinates;
}

export interface WeatherForecast {
  dt: number;
  visibility: number;
  main: Weather;
  wind: Wind;
  clouds: Clouds;
  rain?: Volume;
  snow?: Volume;
  weather: WeatherDescription[];
}

export interface CityListItemForecast extends WeatherForecast {
  dt_txt: String;
  pop: number;
  sys: PartOfTheDay;
  time?: String;
}

export interface LocationWeather extends WeatherForecast {
  id: number;
  name: string;
  coord: Coordinates;
  sys: Region;
}

export interface CityForecast {
  city: City;
  list?: CityListItemForecast[];
  weatherForecast?: DailyForecast[];
}

export interface DailyForecast {
  date: Date;
  forecast: CityListItemForecast[];
}
