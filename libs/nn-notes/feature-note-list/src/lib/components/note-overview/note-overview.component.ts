import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NotesEntity, NotesFacade } from '@gh-dev/nn-notes/data-access-notes';
import { lastValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'gh-dev-note-overview',
  templateUrl: './note-overview.component.html',
  styleUrls: ['./note-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteOverviewComponent implements OnInit {
  loaded$: Observable<boolean> = this.notesFacade.loaded$;
  notesList$: Observable<NotesEntity[]> = this.notesFacade.allNotes$;
  notesError$: Observable<string | null | undefined> =
    this.notesFacade.notesError$;

  constructor(private notesFacade: NotesFacade) {
    this.notesFacade.init();
  }

  ngOnInit() {}

  check() {
    this.notesList$.subscribe((n) => console.log(n));
  }

  add(id: string, text: string) {
    this.notesFacade.addNode({
      id: id,
      text: text,
    });
  }
}
