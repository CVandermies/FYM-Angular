import { Component, OnInit } from '@angular/core';
import { RestService, Categorie, Movie } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})

export class MovieAddComponent implements OnInit {

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
  }

  movie = { id: 0, title:'', content: '' , rating: 0.0, image:'', category_id:0};

  ngOnInit(): void {
  }

  addMovie(){
    this.rest.addMovie(this.route.snapshot.params.id, this.movie ).subscribe(
      (result) => {
        console.log(this.movie)
        this.router.navigate(['/category-edit/'+ this.route.snapshot.params.id]);}
    )
  }
}
