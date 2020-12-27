import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BackendSharedModule } from 'app/shared/shared.module';
import { PlanningComponent } from './planning.component';
import { PlanningDetailComponent } from './planning-detail.component';
import { PlanningUpdateComponent } from './planning-update.component';
import { PlanningDeleteDialogComponent } from './planning-delete-dialog.component';
import { planningRoute } from './planning.route';

@NgModule({
  imports: [BackendSharedModule, RouterModule.forChild(planningRoute)],
  declarations: [PlanningComponent, PlanningDetailComponent, PlanningUpdateComponent, PlanningDeleteDialogComponent],
  entryComponents: [PlanningDeleteDialogComponent],
})
export class BackendPlanningModule {}
