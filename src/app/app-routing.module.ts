import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryModule } from './directory/directory.module';
import { DirectoryComponent } from './directory/directory/directory.component';


const routes: Routes = [
  {
    path: '',
    component: DirectoryComponent
  },
  // {
  //   path: '',
  //   component: 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
