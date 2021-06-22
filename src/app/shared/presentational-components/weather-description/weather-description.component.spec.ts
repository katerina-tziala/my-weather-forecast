import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeatherDescriptionComponent } from './weather-description.component';
import { WeatherDescriptionModule } from './weather-description.module';

describe('Presentational Component: WeatherDescriptionComponent', () => {
  let component: WeatherDescriptionComponent;
  let fixture: ComponentFixture<WeatherDescriptionComponent>;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [WeatherDescriptionModule],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(WeatherDescriptionComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not display anything when weather description not defined', () => {
    component.weatherDescription = null;
    fixture.detectChanges();

    const items = el.nativeElement.children;
    expect(items.length).toEqual(0);
  });

  it('should display the weather icon', () => {
    component.weatherDescription = {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    };
    fixture.detectChanges();
    const image = el.query(By.css('.weather-icon'));
    expect(image).toBeTruthy('Could not find the weather image element');
    expect(getComputedStyle(image.nativeElement).backgroundImage).toEqual(
      `url("https://openweathermap.org/img/wn/${component.weatherDescription.icon}@4x.png")`
    );
  });

  it('should display the weather title', () => {
    component.weatherDescription = {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03n',
    };
    fixture.detectChanges();
    const p = el.query(By.css('.weather-title'));

    expect(p).toBeTruthy('Could not find the wind-speed element');
    expect(p.nativeElement.textContent.trim()).toBe(
      `${component.weatherDescription.main}`
    );
  });
});
