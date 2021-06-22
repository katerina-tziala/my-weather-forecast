import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TemperatureComponent } from './temperature.component';
import { TemperatureModule } from './temperature.module';

describe('Presentational Component: TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TemperatureModule],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(TemperatureComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display zero when input not defined', () => {
    fixture.detectChanges();

    const temp = el.query(By.css('.temp-value'));
    expect(temp).toBeTruthy('Could not find the temp-value element');
    expect(temp.nativeElement.textContent.trim()).toBe('0');
  });

  it('should display integer when input defined', () => {
    component.temperature = 3.2;
    fixture.detectChanges();

    const temp = el.query(By.css('.temp-value'));
    expect(temp).toBeTruthy('Could not find the temp-value element');
    expect(temp.nativeElement.textContent.trim()).toBe('3');
  });

});
