import { Injectable } from '@angular/core';
import { Client } from './core/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientsList: Array<Client> = [];

  constructor() { }

  postClient(c: Client): void {
    this.clientsList.push(c);
  }

  getClient(): Array<Client> {
    return this.clientsList;
  }

  postLogin(): void {
    console.log("postLogin activé");
  }
}
