
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 

@Injectable({

  providedIn: 'root'

})

export class WeatherService {

  private apiKey = 'dbe45f2f8d18d729fd19b0a99df471e0';

  private apiUrl =  'https://api.openweathermap.org/data/2.5/weather';

 

  constructor(private http: HttpClient) {}

 

  getWeatherData(cityName: string): Observable<any> {

    const url = `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}&units=metric`;

    return this.http.get(url);

  }

}
