import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BackendSharedModule } from 'app/shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CoursesDetailComponent } from './courses-detail.component';
import { CoursesUpdateComponent } from './courses-update.component';
import { CoursesDeleteDialogComponent } from './courses-delete-dialog.component';
import { coursesRoute } from './courses.route';

@NgModule({
  imports: [BackendSharedModule, RouterModule.forChild(coursesRoute)],
  declarations: [CoursesComponent, CoursesDetailComponent, CoursesUpdateComponent, CoursesDeleteDialogComponent],
  entryComponents: [CoursesDeleteDialogComponent],
})
export class BackendCoursesModule {}
