import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as NotesActions from './notes.actions';
import * as NotesFeature from './notes.reducer';
import * as NotesSelectors from './notes.selectors';

@Injectable()
export class NotesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(NotesSelectors.getNotesLoaded));
  allNotes$ = this.store.pipe(select(NotesSelectors.getAllNotes));
  selectedNotes$ = this.store.pipe(select(NotesSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(NotesActions.init());
  }
}
