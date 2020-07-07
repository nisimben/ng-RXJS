import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1ExampleComponent } from './comps/c1-example/c1-example.component';
import { C2OperatorComponent } from './comps/c2-operator/c2-operator.component';


const routes: Routes = [
  {
    path: '', component: C1ExampleComponent ,
    children: [
      {path: 'c1', component:C1ExampleComponent},
      {path: 'c2',component :C2OperatorComponent},
      { path:''  ,          redirectTo:'', pathMatch: 'full'},
      { path:'**',        redirectTo:'', pathMatch: 'full'},
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
