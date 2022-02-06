import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NOTES_FEATURE_KEY, State, notesAdapter } from './notes.reducer';

// Lookup the 'Notes' feature state managed by NgRx
export const getNotesState = createFeatureSelector<State>(NOTES_FEATURE_KEY);

const { selectAll, selectEntities } = notesAdapter.getSelectors();

export const getNotesLoaded = createSelector(
  getNotesState,
  (state: State) => state.loaded
);

export const getNotesError = createSelector(
  getNotesState,
  (state: State) => state.error
);

export const getAllNotes = createSelector(getNotesState, (state: State) =>
  selectAll(state)
);

export const getNotesEntities = createSelector(getNotesState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getNotesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getNotesEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
