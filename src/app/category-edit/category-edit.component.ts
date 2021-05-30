import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService, Categorie, Movie } from 'app/rest.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  category: Categorie;
  movies: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {
    this.category = { id: 0, label: '', description: '', movies: []};
    this.movies = {id: 0, title: '', content:'', rating: 0, image:'', category_id: 0};
   }

  ngOnInit(): void {
    this.rest.getCategorie(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.category = data;
      }
    )
    this.movies = this.category.movies ;
  }

  updateCategory(){
    this.rest.updateCategory(this.category).subscribe(
      (result) => {
        this.router.navigate(['/categories']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteCategory(id:any){
    this.rest.deleteCategory(id).subscribe(
      (result) => {
        console.log("Catégory " + id + " deleted")
        this.router.navigate(['/categories']);
      }
    )
  }

  addForm(id:any) {
    this.router.navigate(['/movie-add/' + id]);
  }
  

}
