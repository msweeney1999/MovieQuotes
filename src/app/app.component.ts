import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
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

  movieQuotes: Array<MovieQuote> = [];

  movieQuote: MovieQuote = {
    movie: 'The Movie',
    quote: '?????'
  };

  constructor(private db: AngularFireDatabase ) {
    this.movieQuotes.push(this.movieQuote);

  }
  onSubmit() {
    console.log('submit', this.movieQuote);
    this.movieQuotes.unshift(this.movieQuote);
    this.movieQuote = {
      movie: '',
      quote: ''
    }
    //this.movieQuote.movie = '';
    //this.movieQuote.quote = '';
  }

}
