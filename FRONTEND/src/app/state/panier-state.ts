import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
  Select,
} from '@ngxs/store';
import { Observable } from 'rxjs';
import { AjoutPanier, SuppressionPanier } from '../actions/panier-actions';
import { PanierStateModel } from './panier-state-model';

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    panier: [],
  },
})

@Injectable()
export class PanierState {
  @Selector()
  static getTaillePanier(state: PanierStateModel) {
    return state.panier.length;
  }

  @Selector()
  static getPanier(state: PanierStateModel) {
    return state.panier;
  }

  

  @Action(AjoutPanier)
  add(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: AjoutPanier
  ) {
    const state = getState();
    patchState({
      panier: [...state.panier, payload],
    });
  }

  @Action(SuppressionPanier)
  del(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: SuppressionPanier
  ) {
    const state = getState();
    patchState({
      panier: state.panier.filter(
        (p) => !(payload.id == p.id)
      ),
    });
  }
}
