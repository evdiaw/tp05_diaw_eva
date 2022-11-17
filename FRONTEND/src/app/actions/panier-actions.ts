import { Produit } from "../core/Produit";

export class AjoutPanier {
    static readonly type = '[Panier] Add';
  
    constructor(public payload: Produit) {}
  }
  
  export class SuppressionPanier {
    static readonly type = '[Panier] Del';
  
    constructor(public payload: Produit) {}
  }