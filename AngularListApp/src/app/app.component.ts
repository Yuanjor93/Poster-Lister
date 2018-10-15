import { Component } from '@angular/core';
import { MovieData } from './movieData';
import { ajax, AjaxResponse } from 'rxjs/ajax';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public FilmArray: MovieData[] = []; // MovieData [];
  public FinalMovie: MovieData[];

  movieResponse;
  title = 'Poster Search';

  // Sets the url for Ajax
  apiKey = '&apikey=e3781513';
  apiUrl = 'https://www.omdbapi.com/?s=';

  constructor() {
  }


// grabs the ajax data.
/**
 * @param text passes in the url to retrive the json data
 * todo: handle invalid Json reponses/ errors.
 * Currently behavior displays all retived infomation
 */
  getAjaxData( text: string) {
    this.movieResponse = ajax(this.apiUrl + text + this.apiKey);
    this.movieResponse.subscribe((res: AjaxResponse) => this.FilmArray = res.response.Search);
    this.FinalMovie = this.FilmArray;
   return this.FilmArray;
  }

// sort ajax movie data by title to be displayed
  getMovieByTitle() {
      this.FinalMovie.sort(function (a, b) {
      const textA = a.Title.toUpperCase();
      const textB = b.Title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return this.FinalMovie;
    }

// sort ajax movie data by year to be displayed
    getMovieByYear() {
      this.FinalMovie.sort(function (a, b) {
        const textA = a.Year;
        const textB = b.Year;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      return this.FinalMovie;
    }

}
