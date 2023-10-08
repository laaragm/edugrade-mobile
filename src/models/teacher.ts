import { ISimplifiedSubject } from "./subject";

export interface ITeacher {
    id: number;
    name: string;
    cpf: string;
    expertiseAreas: string;
    subjects: ISimplifiedSubject[];
}

export interface ITeachers {
    data: ITeacher[];
}

export interface IDataTableTeacher {
    id: number;
    name: string;
    cpf: string;
    expertiseAreas: string;
}

export interface ISimplifiedTeacher {
    id: number;
    name: string;
}
