import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WindComponent } from './wind.component';
import { WindModule } from './wind.module';

describe('Presentational Component: Wind', () => {
  let component: WindComponent;
  let fixture: ComponentFixture<WindComponent>;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [WindModule],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(WindComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load the wind icon from assets', () => {
    const container = el.query(By.css('.wind-icon')),
      image = container.query(By.css('img'));
    fixture.detectChanges();
    expect(image).toBeTruthy('Could not find the wind image element');
    expect(image.nativeElement.src).toMatch('assets/svg/wind.svg');
  });

  it('should not display wind speed when input not defined', () => {
    component.wind = null;
    fixture.detectChanges();

    const p = el.query(By.css('.wind-speed'));
    expect(p).toBeNull();
  });

  it('should display wind speed when input defined', () => {
    component.wind =  {
      speed: 3.6,
      deg: 20,
    };
    fixture.detectChanges();

    const p = el.query(By.css('.wind-speed'));

    expect(p).toBeTruthy('Could not find the wind-speed element');
    expect(p.nativeElement.textContent.trim()).toBe(`${component.wind.speed} m/s`);
  });
});
