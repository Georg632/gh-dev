import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-dev-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss'],
})
export class QuillEditorComponent implements OnInit {
  editorContent: string = '';

  constructor() {}

  ngOnInit(): void {}
}
