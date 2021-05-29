import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  category = {  id: 0, label : '', description: '', movies : [] };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  addCategory(){
    this.rest.addCategory(this.category).subscribe(
      (result) => {this.router.navigate(['/categories']);}
    )
  }
}

