import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, EditorModule, FormsModule],
  declarations: [QuillEditorComponent],
})
export class UiQuillEditorModule {}
