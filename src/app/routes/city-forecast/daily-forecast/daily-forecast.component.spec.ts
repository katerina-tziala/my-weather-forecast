import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { DailyForecastComponent } from './daily-forecast.component';
import { getDailyForecastSample } from 'src/app/shared/shared-services/weather-forecast/mock-data';
import { WeatherOverviewModule } from 'src/app/shared/presentational-components/weather-overview/weather-overview.module';

describe('Presentational Component: DailyPredictionComponent', () => {
  let component: DailyForecastComponent;
  let fixture: ComponentFixture<DailyForecastComponent>;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [WeatherOverviewModule],
        declarations: [DailyForecastComponent],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(DailyForecastComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT display content, when dailyForecast NOT defined', () => {
    component.dailyForecast = null;
    fixture.detectChanges();

    const title = el.query(By.css('.daily-forecast-title'));
    const forecastList = el.query(By.css('.daily-forecast-title'));

    expect(title).toBeNull();
    expect(forecastList).toBeNull();
  });

  it('should display correct date format, when dailyForecast defined', () => {
    component.dailyForecast = getDailyForecastSample();
    fixture.detectChanges();

    const formattedDate = component.dailyForecast.date.toLocaleDateString(
      'en-GB',
      { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }
    );
    const title = el.query(By.css('.daily-forecast-title'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent.trim()).toBe(formattedDate);
  });

  it('should display the forecast list', () => {
    component.dailyForecast = getDailyForecastSample();
    fixture.detectChanges();

    const predictions = el.queryAll(By.css('.daily-forecast-prediction'));

    expect(predictions).toBeTruthy('Could not find daily predictions');
    expect(predictions.length).toBe(
      component.dailyForecast.forecast.length,
      'Unexpected number of forecast prediction'
    );
  });

  it('should display the daily prediction correctly', () => {
    component.dailyForecast = getDailyForecastSample();
    fixture.detectChanges();

    const prediction = component.dailyForecast.forecast[0];
    const formattedDate = component.dailyForecast.date.toLocaleDateString(
      'en-GB',
      { year: 'numeric', month: '2-digit', day: '2-digit' }
    );
    const predictionElement = el.query(By.css('.daily-forecast-prediction'));
    const predictionDate = el.query(By.css('.daily-prediction-date'));
    const predictionTime = el.query(By.css('.daily-prediction-time'));
    const weatherOverview = el.query(
      By.css('.daily-forecast-weather-overview')
    );

    expect(predictionElement).toBeTruthy(
      'Could not find the prediction list item'
    );
    expect(predictionTime.nativeElement.textContent.trim()).toBe(
      `, ${prediction.time}`
    );
    expect(predictionDate.nativeElement.textContent.trim()).toBe(formattedDate);
    expect(weatherOverview).toBeTruthy(
      'Could not find the weather overview of the prediction prediction list item'
    );
  });
});
