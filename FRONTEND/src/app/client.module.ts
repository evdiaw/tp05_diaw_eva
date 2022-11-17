import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnlyLettersDirective } from './only-letters.directive';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { TelephonePipe } from './telephone.pipe';

const appRoutes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'creation_compte', component: Comp1Component },
];


@NgModule({
  declarations: [
    LoginComponent,
    Comp1Component,
    Comp2Component,
    OnlyLettersDirective,
    OnlyNumbersDirective,
    TelephonePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class ClientModule { }
