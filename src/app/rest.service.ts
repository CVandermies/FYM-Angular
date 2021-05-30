import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};

const endpoint = "http://localhost:8000/api/";

export interface Categorie {
  id: number;
  label : string;
  description: string;
  movies: Movie[];
}

export interface Movie {
  id: number;
  title : string;
  content: string;
  rating: number;
  image:string;
  category_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  
  ///////////////////////////
  //___partie categories___//
  ///////////////////////////
  getCategories(): Observable<any>{
    return this.http.get<Categorie>(endpoint + 'cat');
  }

  getCategorie(id: number): Observable<any>{
    return this.http.get<Categorie>(endpoint + 'cat/' + id);
  }

  addCategory(category: Categorie): Observable<any>{
    return this.http.post(endpoint + 'cat/add', category);
  }

  updateCategory(category: Categorie): Observable<any>{
    return this.http.put<Categorie>(endpoint + 'cat/' + category.id, category);
  }

  deleteCategory(id: number): Observable<any>{
    return this.http.delete(endpoint+ 'cat/' + id);
  }

  //////////////////////
  //___partie films___//
  //////////////////////
  getMovies(): Observable<any>{
    return this.http.get<Movie>(endpoint + 'fym');
  }

  getMovie(id: number): Observable<any>{
    return this.http.get<Movie>(endpoint + 'fym/' + id);
  }

  addMovie(id: number, movie: Movie): Observable<any>{
    return this.http.post(endpoint + 'fym/' + id, movie);
  }

  updateMovie(movie: Movie): Observable<any>{
    return this.http.put<Movie>(endpoint+ 'fym/' + movie.id, movie);
  }

  deleteMovie(id: number): Observable<any>{
    return this.http.delete(endpoint + 'fym/' + id);
  }
}
