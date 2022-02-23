import { createAction, props } from '@ngrx/store';
import { NotesEntity } from './notes.models';

export const init = createAction('[Notes Page] Init');

export const loadNotesSuccess = createAction(
  '[Notes/API] Load Notes Success',
  props<{ notes: NotesEntity[] }>()
);

export const loadNotesFailure = createAction(
  '[Notes/API] Load Notes Failure',
  props<{ error: any }>()
);

export const addNote = createAction(
  '[Notes/API] Add Note',
  props<{ note: NotesEntity }>()
);

export const addNoteSuccess = createAction(
  '[Notes/API] Add Note Success',
  props<{ note: NotesEntity }>()
);

export const addNoteFailure = createAction(
  '[Notes/API] Add Note Failure',
  props<{ error: Error }>()
);
