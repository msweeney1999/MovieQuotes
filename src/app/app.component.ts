import { Component } from '@angular/core';

interface MovieQuote {
  movie: string;
  quote: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  movieQuote: MovieQuote = {
    movie : 'The Movie',
    quote : '?????'
  };


  onSubmit() {
    console.log('submit', this.movieQuote)
    this.movieQuote.movie = '';
    this.movieQuote.quote = '';
  }

}
