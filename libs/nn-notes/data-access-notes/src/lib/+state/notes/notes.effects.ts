import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import {
  catchError,
  map,
  of,
  switchMap,
  throwError,
  withLatestFrom,
} from 'rxjs';

import * as NotesActions from './notes.actions';
import { State } from './notes.reducer';
import * as NotesSelectors from './notes.selectors';

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

  addNote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotesActions.addNote),
      withLatestFrom(this.store$.select(NotesSelectors.getAllNotes)),
      switchMap(([action, latestAllNotes]) => {
        if (
          latestAllNotes &&
          latestAllNotes.find((n) => n.id == action.note.id)
        )
          return throwError(() => new Error('Duplicate ID'));

        return of(NotesActions.addNoteSuccess(action));
      }),
      catchError((error) => {
        return of(NotesActions.addNoteFailure({ error }));
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private store$: Store<State>
  ) {}
}
