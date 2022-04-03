import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from '@gh-dev/nn-notes/ui-layout';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'notelist',
        loadChildren: () =>
          import('@gh-dev/nn-notes/feature-note-list').then(
            (m) => m.FeatureNoteListModule
          ),
      },
      // {
      //   path: 'auth',
      //   loadChildren: () =>
      //     import('@gh-dev/gh-auth/feature-login-user').then(
      //       (m) => m.FeatureLoginUserModule
      //     ),
      // },
      { path: '**', redirectTo: 'notelist' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class NodeNoteRoutingModule {}
