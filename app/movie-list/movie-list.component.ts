import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  appName = "Scannez votre  produit ";  
  filtredMovies:Movie[];

  movies:Movie[] = [
    new Movie(1,"Nutella b ready",10.60,"03/25/2020","https://www.cdiscount.com/pdt2/0/3/5/1/700x700/nut8000500142035/rw/nutella-b-ready-x8.jpg"),
    new Movie(2,"Jus de pomme Bissardon",12.09,"4/24/2020","https://app.eatself.com/img/27589_DSC_7543.jpg"),

  

    
     
    
  ]
  
  selectedMovie:Movie;
  
  below9dollars = (movie:Movie)=>{return movie.price<9};
  above9dollars = (movie:Movie)=>{return movie.price>9};
  
  filterMovies(filterFunction):void{
    this.filtredMovies=this.movies.filter(filterFunction);
    this.selectedMovie=null;
    
  }
onSelectedMovie(movie:Movie){
this.selectedMovie = movie;
console.log(movie)
}
  constructor() { }

  ngOnInit() {
  }

}