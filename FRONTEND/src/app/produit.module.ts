import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompCatalogueComponent } from './comp-catalogue/comp-catalogue.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { PanierComponent } from './panier/panier.component';


const appRoutes: Routes = [
  { path: 'catalogue', component:CompCatalogueComponent},
  { path: 'Detail produit', component:DetailProduitComponent},
  { path: 'panier', component:PanierComponent},
  { path: ':id', component: DetailProduitComponent },
];

@NgModule({
  declarations: [
    CompCatalogueComponent,
    SearchBarComponent,
    DetailProduitComponent,
    PanierComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes),
    //NgbModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class ProduitModule { }
