import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Task5';
  city = '';
  weatherData: any;
  lat:any;
  lon:any;
  weather:any;
  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'Wellington';

  ngOnInit(): void {
  //this.getLocation();
  }

    search() {
      this.weatherService.getWeatherData(this.city).subscribe(
        (data) => {
          this.weatherData = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
}
