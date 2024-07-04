import {Status} from "../../../utils/enums";

export interface HealthcareProfessional {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  speciality: string;
  status: Status;
}
