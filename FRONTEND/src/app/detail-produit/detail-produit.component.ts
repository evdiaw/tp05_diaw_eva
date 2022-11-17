import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalogueService } from '../catalogue.service';
import { Produit } from '../core/Produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  prod: Produit = new Produit;
  tabProduits: Array<Produit> = [];
  sub: Subscription = new Subscription;
  id: number = 0;
  constructor(private route: ActivatedRoute, private service: CatalogueService) {
    this.id = this.route.snapshot.params['id'];
  }


  ngOnInit() {
    this.getCatalogue();
    this.prod = this.getProduit(this.id);
  }

  getProduit(id: number): Produit {
    return this.tabProduits.find(p => p.id == id) as Produit
  }

  getCatalogue() {
    this.service.getProduits().subscribe({
      next: (data) => {
        this.tabProduits = data;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
