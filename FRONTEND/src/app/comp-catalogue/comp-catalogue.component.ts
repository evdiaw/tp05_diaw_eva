import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { AjoutPanier } from '../actions/panier-actions';
import { CatalogueService } from '../catalogue.service';
import { Produit } from '../core/Produit';

@Component({
  selector: 'app-comp-catalogue',
  templateUrl: './comp-catalogue.component.html',
  styleUrls: ['./comp-catalogue.component.css']
})
export class CompCatalogueComponent implements OnInit {

  search = new FormControl('');

  constructor(private catalogueService: CatalogueService, private store: Store) { }

  @Input() filtre: string = '';
  tabProduits: Array<Produit> = [];
  sub: Subscription = new Subscription;

  ngOnInit(): void {
    this.getCatalogue();
  }

  getCatalogue() {
    this.catalogueService.getProduits().subscribe({
      next: (data) => {
        this.tabProduits = data;
      }
    });
    console.log(this.tabProduits.length);
  }

  updateCatalogue(event: Produit[]) {
    this.tabProduits = event;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onChange(event: any) {
    switch(event.target.value) {
      case 'color':
        this.tabProduits.sort((a, b) => a.color.localeCompare(b.color));
        break;
      case 'type':
        this.tabProduits.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        break;
    }
  } 

  ajouterPanier(produit: Produit): void{
    this.store.dispatch(new AjoutPanier(produit));
  }

}
