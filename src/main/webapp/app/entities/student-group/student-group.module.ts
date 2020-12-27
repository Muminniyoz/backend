import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BackendSharedModule } from 'app/shared/shared.module';
import { StudentGroupComponent } from './student-group.component';
import { StudentGroupDetailComponent } from './student-group-detail.component';
import { StudentGroupUpdateComponent } from './student-group-update.component';
import { StudentGroupDeleteDialogComponent } from './student-group-delete-dialog.component';
import { studentGroupRoute } from './student-group.route';

@NgModule({
  imports: [BackendSharedModule, RouterModule.forChild(studentGroupRoute)],
  declarations: [StudentGroupComponent, StudentGroupDetailComponent, StudentGroupUpdateComponent, StudentGroupDeleteDialogComponent],
  entryComponents: [StudentGroupDeleteDialogComponent],
})
export class BackendStudentGroupModule {}
