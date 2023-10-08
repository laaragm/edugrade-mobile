import { ISimplifiedGrade } from "./grade";
import { ISimplifiedTeacher } from "./teacher";

export interface ISubject {
    id: number;
    name: string;
    teacher: ISimplifiedTeacher;
    grades: ISimplifiedGrade[];
}

export interface ISubjects {
    data: ISubject[];
}

export interface IDataTableSubject {
    id: number;
    name: string;
    teacherName: string;
}

export interface ISimplifiedSubject {
    id: number;
    name: string;
}
