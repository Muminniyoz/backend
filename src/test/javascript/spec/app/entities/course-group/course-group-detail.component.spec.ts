import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BackendTestModule } from '../../../test.module';
import { CourseGroupDetailComponent } from 'app/entities/course-group/course-group-detail.component';
import { CourseGroup } from 'app/shared/model/course-group.model';

describe('Component Tests', () => {
  describe('CourseGroup Management Detail Component', () => {
    let comp: CourseGroupDetailComponent;
    let fixture: ComponentFixture<CourseGroupDetailComponent>;
    const route = ({ data: of({ courseGroup: new CourseGroup(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BackendTestModule],
        declarations: [CourseGroupDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CourseGroupDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CourseGroupDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load courseGroup on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.courseGroup).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
