import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNotes from './+state/notes/notes.reducer';
import { NotesEffects } from './+state/notes/notes.effects';
import { NotesFacade } from './+state/notes/notes.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromNotes.NOTES_FEATURE_KEY, fromNotes.reducer),
    EffectsModule.forFeature([NotesEffects]),
  ],
  providers: [NotesFacade],
})
export class DataAccessNotesModule {}
