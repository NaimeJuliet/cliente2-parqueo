import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CeldasComponent } from './celdas/celdas.component';
import { HomeComponent } from './home/home.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'celdas',component:CeldasComponent},
  {path:'vehiculos',component:VehiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
