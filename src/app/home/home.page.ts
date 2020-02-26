import { Component } from '@angular/core';
import { AllService } from '../service/all.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movies: any[] = null;
  constructor(private all: AllService) { }

  fetchMovies() {
    this.all.http.fetchMovies().subscribe((res: any) => {
      console.log("Movies", res);
      this.movies = res.data;
    })
  }
}
