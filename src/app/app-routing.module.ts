import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { FirstComponent } from './first/first.component';


const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'example', component: ExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
