import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { WeatherForecastService } from 'src/app/shared/shared-services/weather-forecast/weather-forecast.service';

import {
  findCityForecastByName,
} from 'src/app/shared/shared-services/weather-forecast/mock-data';
import { RouterTestingModule } from '@angular/router/testing';
import { CityForecastComponent } from './city-forecast.component';
import { CityForecastModule } from './city-forecast.module';
import { ActivatedRoute } from '@angular/router';
import { CityComponent } from 'src/app/shared/presentational-components/city/city.component';

describe('CityForecastComponent', () => {
  let fixture: ComponentFixture<CityForecastComponent>;
  let component: CityForecastComponent;
  let el: DebugElement;
  let weatherService: any;
  let activatedRoute: ActivatedRoute;

  beforeEach(
    waitForAsync(() => {
      weatherService = jasmine.createSpyObj('WeatherForecastService', [
        'getWeatherForecastForCity',
      ]);
      weatherService.getWeatherForecastForCity.and.returnValue(of(findCityForecastByName('Amsterdam')));

      TestBed.configureTestingModule({
        imports: [
          CityForecastModule,
          RouterTestingModule,
          RouterTestingModule.withRoutes([]),
        ],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                params: {
                  property: 'name',
                  name: 'Amsterdam',
                }
              },
            },
          },
          { provide: WeatherForecastService, useValue: weatherService },
        ],
      })
        .compileComponents()
        .then(() => {
          activatedRoute = TestBed.inject(ActivatedRoute);
          weatherService = TestBed.inject(WeatherForecastService);

          fixture = TestBed.createComponent(CityForecastComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });

    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load the data of the selected city', () => {
    fixture.detectChanges();

    const cityComponent = fixture.debugElement.query(
      By.directive(CityComponent)
    );

    expect(cityComponent.nativeElement.innerHTML).toMatch('Amsterdam');
  });
});
