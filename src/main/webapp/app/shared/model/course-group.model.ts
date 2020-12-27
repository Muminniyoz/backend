import { Moment } from 'moment';
import { GroupStatus } from 'app/shared/model/enumerations/group-status.model';

export interface ICourseGroup {
  id?: number;
  name?: string;
  startDate?: Moment;
  status?: GroupStatus;
  teacherId?: number;
  teacherId?: number;
}

export class CourseGroup implements ICourseGroup {
  constructor(
    public id?: number,
    public name?: string,
    public startDate?: Moment,
    public status?: GroupStatus,
    public teacherId?: number,
    public teacherId?: number
  ) {}
}
