import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as NotesActions from './notes.actions';
import { NotesEntity } from './notes.models';

export const NOTES_FEATURE_KEY = 'notes';

export interface State extends EntityState<NotesEntity> {
  selectedId?: string | number; // which Notes record has been selected
  loaded: boolean; // has the Notes list been loaded
  error?: string | null; // last known error (if any)
}

export interface NotesPartialState {
  readonly [NOTES_FEATURE_KEY]: State;
}

export const notesAdapter: EntityAdapter<NotesEntity> =
  createEntityAdapter<NotesEntity>();

export const initialState: State = notesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const notesReducer = createReducer(
  initialState,
  on(NotesActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(NotesActions.loadNotesSuccess, (state, { notes }) =>
    notesAdapter.setAll(notes, { ...state, loaded: true })
  ),
  on(NotesActions.loadNotesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(NotesActions.addNoteSuccess, (state, { note }) =>
    notesAdapter.addOne(note, { ...state })
  ),
  on(NotesActions.addNoteFailure, (state, { error }) => {
    return { ...state, error: error.message };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return notesReducer(state, action);
}
