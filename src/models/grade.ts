import { ISimplifiedStudent } from "./student";
import { ISimplifiedSubject } from "./subject";

export interface IGrade {
    id: number;
    value: number;
    subject: ISimplifiedSubject;
    student: ISimplifiedStudent;
}

export interface IGrades {
    data: IGrade[];
}

export interface IDataTableGrade {
    id: number;
    value: number;
    subjectName: string;
    studentName: string;
}

export interface ISimplifiedGrade {
    id: number;
    value: number;
    subject: ISimplifiedSubject;
}
