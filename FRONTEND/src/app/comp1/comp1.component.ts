import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../core/Client';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(public clientService: ClientService) { }

  client: Client = new Client();

  FormClient = new FormGroup({
    prenom: new FormControl('',[Validators.required]),
    nom: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('',[Validators.required]),
    password_conf: new FormControl('',[Validators.required]),
    adresse: new FormControl('',[Validators.required]),
    ville: new FormControl('',[Validators.required]),
    code_postal: new FormControl('',[Validators.required, Validators.pattern('[0-9]{5}')]),
    telephone: new FormControl('',[Validators.required]),
    login: new FormControl('',[Validators.required]),
    civilite: new FormControl('',[Validators.required]),
  });
  

  ngOnInit(): void {
  }

  clic(): void {
    console.log("clic activé");
  }

}
