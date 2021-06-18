import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent {
  @Input() public name: string = '';
  @Input() public country: string | null = null;
  constructor() {}
}
