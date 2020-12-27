import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'system-files',
        loadChildren: () => import('./system-files/system-files.module').then(m => m.BackendSystemFilesModule),
      },
      {
        path: 'courses',
        loadChildren: () => import('./courses/courses.module').then(m => m.BackendCoursesModule),
      },
      {
        path: 'skill',
        loadChildren: () => import('./skill/skill.module').then(m => m.BackendSkillModule),
      },
      {
        path: 'teacher',
        loadChildren: () => import('./teacher/teacher.module').then(m => m.BackendTeacherModule),
      },
      {
        path: 'planning',
        loadChildren: () => import('./planning/planning.module').then(m => m.BackendPlanningModule),
      },
      {
        path: 'course-group',
        loadChildren: () => import('./course-group/course-group.module').then(m => m.BackendCourseGroupModule),
      },
      {
        path: 'theme',
        loadChildren: () => import('./theme/theme.module').then(m => m.BackendThemeModule),
      },
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.BackendStudentModule),
      },
      {
        path: 'student-group',
        loadChildren: () => import('./student-group/student-group.module').then(m => m.BackendStudentGroupModule),
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.BackendProjectsModule),
      },
      {
        path: 'ability-student',
        loadChildren: () => import('./ability-student/ability-student.module').then(m => m.BackendAbilityStudentModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class BackendEntityModule {}
