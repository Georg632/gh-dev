import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutModule } from '@gh-dev/nn-notes/ui-layout';
import { NodeNoteRoutingModule } from './node-note-routing.module';

@NgModule({
  imports: [CommonModule, UiLayoutModule, NodeNoteRoutingModule],
  declarations: [],
  exports: [NodeNoteRoutingModule],
})
export class NodeNoteFeatureShellModule {}
