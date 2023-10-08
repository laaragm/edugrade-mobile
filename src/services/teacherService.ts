import { IServiceResponse } from "../models/serviceResponse";
import { ITeacher } from "../models/teacher";
import { Create, Delete, Get, Update } from "./base";

export async function CreateTeacher(teacher: ITeacher): Promise<IServiceResponse<string>> {
    const route = "/teachers";
    const body = JSON.stringify(teacher);
    const defaultErrorMessage = "Não foi possível realizar o cadastro. Tente novamente mais tarde.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}

export async function DeleteTeacher(id: number): Promise<IServiceResponse<string>> {
    const route = `/teachers/${id}`;
    const defaultErrorMessage = "Não foi possível realizar a exclusão. Tente novamente mais tarde.";
    const result = await Delete<string>({ route, defaultErrorMessage });

    return result;
}

export async function GetAllTeachers(): Promise<IServiceResponse<ITeacher[]>> {
    const route = "/teachers";
    const defaultErrorMessage = "Não foi possível recuperar os dados. Tente novamente mais tarde.";
    const result = await Get<ITeacher[]>({ route, defaultErrorMessage });

    return result;
}

export async function UpdateTeacher(teacher: ITeacher): Promise<IServiceResponse<string>> {
    const route = `/teachers/${teacher.id}`;
    const body = JSON.stringify(teacher);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
