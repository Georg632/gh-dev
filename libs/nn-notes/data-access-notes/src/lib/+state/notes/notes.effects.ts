import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as NotesActions from './notes.actions';
import * as NotesFeature from './notes.reducer';

@Injectable()
export class NotesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return NotesActions.loadNotesSuccess({ notes: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return NotesActions.loadNotesFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
