import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdEditorComponent } from './components/md-editor/md-editor.component';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MarkdownModule.forChild(), FormsModule],
  declarations: [MdEditorComponent],
})
export class UiMarkdownEditorModule {}
