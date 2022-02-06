import { NotesEntity } from './notes.models';
import { notesAdapter, NotesPartialState, initialState } from './notes.reducer';
import * as NotesSelectors from './notes.selectors';

describe('Notes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getNotesId = (it: NotesEntity) => it.id;
  const createNotesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as NotesEntity);

  let state: NotesPartialState;

  beforeEach(() => {
    state = {
      notes: notesAdapter.setAll(
        [
          createNotesEntity('PRODUCT-AAA'),
          createNotesEntity('PRODUCT-BBB'),
          createNotesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Notes Selectors', () => {
    it('getAllNotes() should return the list of Notes', () => {
      const results = NotesSelectors.getAllNotes(state);
      const selId = getNotesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = NotesSelectors.getSelected(state) as NotesEntity;
      const selId = getNotesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getNotesLoaded() should return the current "loaded" status', () => {
      const result = NotesSelectors.getNotesLoaded(state);

      expect(result).toBe(true);
    });

    it('getNotesError() should return the current "error" state', () => {
      const result = NotesSelectors.getNotesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
