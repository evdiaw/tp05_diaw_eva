import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from './core/Produit';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  constructor(private http: HttpClient) {}
  env = environment;

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.env.catalogue);
  }

}

