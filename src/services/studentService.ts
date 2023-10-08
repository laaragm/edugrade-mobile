import { IServiceResponse } from "../models/serviceResponse";
import { IStudent, IStudents } from "../models/student";
import { Create, Delete, Get, Update } from "./base";

export async function CreateStudent(student: IStudent): Promise<IServiceResponse<string>> {
    const route = "/students";
    const body = JSON.stringify(student);
    const defaultErrorMessage = "Não foi possível realizar o cadastro. Tente novamente mais tarde.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}

export async function DeleteStudent(id: number): Promise<IServiceResponse<string>> {
    const route = `/students/${id}`;
    const defaultErrorMessage = "Não foi possível realizar a exclusão. Tente novamente mais tarde.";
    const result = await Delete<string>({ route, defaultErrorMessage });

    return result;
}

export async function GetAllStudents(): Promise<IServiceResponse<IStudents>> {
    const route = "/students";
    const defaultErrorMessage = "Não foi possível recuperar os dados. Tente novamente mais tarde.";
    const result = await Get<IStudents>({ route, defaultErrorMessage });

    return result;
}

export async function UpdateStudent(student: IStudent): Promise<IServiceResponse<string>> {
    const route = `/students/${student.id}`;
    const body = JSON.stringify(student);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
