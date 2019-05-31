import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    TableModule,
    DataTableModule,],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
