import {Status, TreatmentStatus} from "../../../utils/enums";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  speciality: string;
  status: Status;
}

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  severity: string;
  injuryTime: Date;
  injuryDescription: string;
}

export interface Room {
  id: number;
  roomNumber: string;
  status: string;
}

export interface Treatment {
  id: number;
  residingHealthCareProfessional: User;
  patient: Patient;
  room: Room;
  createdAt: Date;
  treatmentStatus: TreatmentStatus;
}
