import { Component, OnInit } from '@angular/core';
import { RestService, Categorie, Movie } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  
  categories: Categorie[] = [];
  movie: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
    this.movie = { id: 0, title:'', content: '' , rating: 0, image:''};
   }

  ngOnInit(): void {
    this.getCategories();
    this.rest.getMovie(this.route.snapshot.params.id).subscribe(
      (data) => {
        console.log(data);
        this.movie = data;
      }
    )
  }

  getCategories() {
    this.rest.getCategories().subscribe(
      (resp) => {
        console.log(resp);
        this.categories = resp;
      }
    )
  }

  updateMovie(){
    this.rest.updateMovie(this.movie).subscribe(
      (result) => {
        this.router.navigate(['/categories']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteMovie(id : any){
    this.rest.deleteMovie(id).subscribe(
      (result) => {
        console.log("Movie " + id + " deleted")
        window.location.reload();
      }
    )
  }

}
