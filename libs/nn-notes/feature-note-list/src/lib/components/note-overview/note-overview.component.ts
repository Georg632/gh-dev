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
  loaded$!: Observable<boolean>;
  notesList$!: Observable<NotesEntity[]>;
  notesError$!: Observable<string | null | undefined>;

  constructor(private notesFacade: NotesFacade) {}

  ngOnInit() {
    this.notesFacade.init();
    this.loaded$ = this.notesFacade.loaded$;
    this.notesList$ = this.notesFacade.allNotes$;
    this.notesError$ = this.notesFacade.notesError$;
  }

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
