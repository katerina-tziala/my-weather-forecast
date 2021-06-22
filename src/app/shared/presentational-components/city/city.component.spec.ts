import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityComponent } from './city.component';
import { CityModule } from './city.module';

describe('Presentational Component: CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CityModule],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(CityComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the city background', () => {
    component.name = 'Amsterdam';
    fixture.detectChanges();
    const cityBackground = el.query(By.css('.city-background'));
    expect(cityBackground).toBeTruthy(
      'Could not find the weather image element'
    );
    expect(
      getComputedStyle(cityBackground.nativeElement).backgroundImage
    ).toMatch('assets/img/Amsterdam.jpg');
  });

  it('should display the city name', () => {
    component.name = 'Amsterdam';
    fixture.detectChanges();

    const citName = el.query(By.css('.city-name'));
    expect(citName).toBeTruthy('Could not find the city header element');
    expect(citName.nativeElement.textContent.trim()).toBe(`${component.name}`);
  });

  it('should display the country if country defined', () => {
    component.name = 'Amsterdam';
    component.country = 'NL';
    fixture.detectChanges();

    const country = el.query(By.css('.city-country'));
    expect(country).toBeTruthy('Could not find the country element');
    expect(country.nativeElement.textContent.trim()).toBe(
      `, ${component.country}`
    );
  });

  it('should not display the country if country undefined', () => {
    component.name = 'Amsterdam';
    component.country = null;
    fixture.detectChanges();

    const country = el.query(By.css('.city-country'));
    expect(country).toBeNull('wrong country displayed');
  });
});
