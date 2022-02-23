import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteOverviewComponent } from './components/note-overview/note-overview.component';
import { RouterModule, Routes } from '@angular/router';
import { DataAccessNotesModule } from '@gh-dev/nn-notes/data-access-notes';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'overview',
    component: NoteOverviewComponent,
  },
  {
    path: '**',
    redirectTo: 'overview',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataAccessNotesModule,
    FormsModule,
  ],
  declarations: [NoteOverviewComponent],
})
export class FeatureNoteListModule {}
