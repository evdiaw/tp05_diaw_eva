import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../core/Client';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }
  @Input() client = new Client();
  @Output() change: EventEmitter<Client> = new EventEmitter<Client>();


  ngOnInit(): void {
  }

  // clic () {
  //   this.change.emit( 'Bonjour ' + this.client.prenom + ' ' + this.client.nom + ' alias ' + this.client.login + '. Votre addresse : ' + this.client.adresse + ' ' + this.client.code_postal
  //   + ' ' + this.client.ville + ". Email : " + this.client.email + '. Telephone : ' + this.client.telephone);
  // }

}
