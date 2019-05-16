import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'A great film title';
  imageSrc = 'https://via.placeholder.com/240x360';
  num = [1, 2, 3];

  constructor(
    private movieService: MovieService
  ){
    this.movieService.getMovies()
    .subscribe(data => {
      console.log(data);
    });
  }
}
