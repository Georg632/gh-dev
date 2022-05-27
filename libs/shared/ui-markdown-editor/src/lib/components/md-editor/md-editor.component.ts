import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-dev-md-editor',
  templateUrl: './md-editor.component.html',
  styleUrls: ['./md-editor.component.scss'],
})
export class MdEditorComponent implements OnInit {
  markdownText: string = '# hello';

  constructor() {}

  ngOnInit(): void {}
}
