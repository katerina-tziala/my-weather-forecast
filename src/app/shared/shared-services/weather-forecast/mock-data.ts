import { CityForecast, LocationWeather } from './location-weather.interface';

export const CITIES_WEATHER: any = {
  cnt: 5,
  list: [
    {
      coord: {
        lon: 4.8897,
        lat: 52.374,
      },
      sys: {
        country: 'NL',
        timezone: 7200,
        sunrise: 1624245483,
        sunset: 1624305982,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      main: {
        temp: 13.86,
        feels_like: 13.31,
        temp_min: 13.33,
        temp_max: 14.44,
        pressure: 1014,
        humidity: 77,
      },
      visibility: 10000,
      wind: {
        speed: 3.6,
        deg: 20,
      },
      clouds: {
        all: 20,
      },
      dt: 1624306173,
      id: 2759794,
      name: 'Amsterdam',
    },
    {
      coord: {
        lon: 22.9537,
        lat: 40.6233,
      },
      sys: {
        country: 'GR',
        timezone: 10800,
        sunrise: 1624244247,
        sunset: 1624298547,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      main: {
        temp: 24.49,
        feels_like: 24.8,
        temp_min: 22.78,
        temp_max: 25.56,
        pressure: 1012,
        humidity: 69,
      },
      visibility: 10000,
      wind: {
        speed: 2.57,
        deg: 130,
      },
      clouds: {
        all: 20,
      },
      dt: 1624306492,
      id: 8133841,
      name: 'Thessaloniki',
    },
    {
      coord: {
        lon: 16.3721,
        lat: 48.2085,
      },
      sys: {
        country: 'AT',
        timezone: 7200,
        sunrise: 1624244037,
        sunset: 1624301916,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      main: {
        temp: 23.51,
        feels_like: 23.59,
        temp_min: 22.78,
        temp_max: 24.44,
        pressure: 1008,
        humidity: 64,
      },
      visibility: 10000,
      wind: {
        speed: 5.14,
        deg: 40,
      },
      clouds: {
        all: 20,
      },
      dt: 1624306146,
      id: 2761369,
      name: 'Vienna',
    },
    {
      coord: {
        lon: -9.1333,
        lat: 38.7167,
      },
      sys: {
        country: 'PT',
        timezone: 3600,
        sunrise: 1624252319,
        sunset: 1624305878,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      main: {
        temp: 17.16,
        feels_like: 16.81,
        temp_min: 16.11,
        temp_max: 18.33,
        pressure: 1017,
        humidity: 72,
      },
      visibility: 10000,
      wind: {
        speed: 4.63,
        deg: 300,
      },
      clouds: {
        all: 20,
      },
      dt: 1624306166,
      id: 2267057,
      name: 'Lisbon',
    },
    {
      coord: {
        lon: 9.192,
        lat: 45.4642,
      },
      sys: {
        country: 'IT',
        timezone: 7200,
        sunrise: 1624246478,
        sunset: 1624302922,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      main: {
        temp: 24.85,
        feels_like: 24.98,
        temp_min: 24.44,
        temp_max: 25.56,
        pressure: 1008,
        humidity: 61,
      },
      visibility: 10000,
      wind: {
        speed: 3.09,
        deg: 270,
      },
      clouds: {
        all: 20,
      },
      dt: 1624306447,
      id: 6542283,
      name: 'Milan',
    },
  ],
};

export const CITY_FORECAST: any = {
  Amsterdam: {
    list: [
      {
        dt: 1624309200,
        main: {
          temp: 12.97,
          feels_like: 12.54,
          temp_min: 10.94,
          temp_max: 12.97,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1015,
          humidity: 85,
          temp_kf: 2.03,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
        clouds: {
          all: 47,
        },
        wind: {
          speed: 2.49,
          deg: 28,
          gust: 5.38,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2021-06-21 21:00:00',
      },
      {
        dt: 1624320000,
        main: {
          temp: 11.69,
          feels_like: 11.21,
          temp_min: 10.54,
          temp_max: 11.69,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1015,
          humidity: 88,
          temp_kf: 1.15,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
        clouds: {
          all: 50,
        },
        wind: {
          speed: 1.98,
          deg: 14,
          gust: 3.36,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2021-06-22 00:00:00',
      },
      {
        dt: 1624330800,
        main: {
          temp: 11.07,
          feels_like: 10.61,
          temp_min: 11.07,
          temp_max: 11.07,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1015,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.46,
          deg: 26,
          gust: 5.29,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2021-06-22 03:00:00',
      },
    ],
    city: {
      id: 2759794,
      name: 'Amsterdam',
      coord: {
        lat: 52.374,
        lon: 4.8897,
      },
      country: 'NL',
      population: 0,
      timezone: 7200,
      sunrise: 1624245483,
      sunset: 1624305982,
    },
  },
};

export function findWeatherForCities(citiesIds: number[]): LocationWeather[] {
  return CITIES_WEATHER.list.filter((city: LocationWeather) =>
    citiesIds.includes(city.id)
  );
}

export function findCityForecastByName(cityName: string): CityForecast {
  return CITY_FORECAST[cityName];
}
