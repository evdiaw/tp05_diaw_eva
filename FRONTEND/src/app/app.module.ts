import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitModule } from './produit.module';
import { ClientModule } from './client.module';
import { HeaderComponent } from './header/header.component';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from './state/panier-state';
import { ApiHttpInterceptor } from './apiHttpInterceptor';
import { CatalogueService } from './catalogue.service';
import { ClientService } from './client.service';
import { LoginService } from './login.service';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'client', loadChildren: () => import('./client.module').then(m => m.ClientModule) },
  { path: 'catalogue', loadChildren: () => import('./produit.module').then(m => m.ProduitModule) },


];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ProduitModule,
    ClientModule,
    NgxsModule.forRoot([PanierState])

  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true,
      deps: [LoginService, CatalogueService, ClientService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
