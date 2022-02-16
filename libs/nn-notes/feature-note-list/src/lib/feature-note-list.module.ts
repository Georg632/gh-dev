import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteOverviewComponent } from './components/note-overview/note-overview.component';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [NoteOverviewComponent],
})
export class FeatureNoteListModule {}
