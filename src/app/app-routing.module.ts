import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

const routes: Routes = [

{
  path: 'categories',
  component : CategoryComponent
},

{
  path: 'category-add',
  component: CategoryAddComponent,
},

{
  path: 'category-edit/:id',
  component: CategoryEditComponent,
},

//on met pathmatch sur full pour ne pas créer d'endless loop 
//avec un path vide qui serait parent de tous les URL
{
  path: '',
  redirectTo: 'categories',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
