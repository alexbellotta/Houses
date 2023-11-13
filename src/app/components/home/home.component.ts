import { HousingService } from './../../services/housing.service';
import { Component, inject } from '@angular/core';
import { Housinglocation } from 'src/app/interfaces/housinglocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
  
}
