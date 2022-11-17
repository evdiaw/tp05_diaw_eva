import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierState } from '../state/panier-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Select(PanierState.getTaillePanier)
  taille$!: Observable<number>;

}
