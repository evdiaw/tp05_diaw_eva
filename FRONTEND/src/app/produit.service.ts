import { Injectable } from '@angular/core';
import { Produit } from './core/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }

  produits: Produit[] = [];

  get(id: number): Produit {
    return this.produits.find(produit => produit.id == id) as Produit;
  }
}
