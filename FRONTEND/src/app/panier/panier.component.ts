import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SuppressionPanier } from '../actions/panier-actions';
import { Produit } from '../core/Produit';
import { PanierState } from '../state/panier-state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private store : Store) { }

  ngOnInit(): void {
  }

  @Select(PanierState.getPanier)
  panier$!: Observable<Produit[]>;

  produits = this.store.selectSnapshot(PanierState.getPanier);

  supprimerPanier(produit: Produit): void{
    this.store.dispatch(new SuppressionPanier(produit));
  }


}
