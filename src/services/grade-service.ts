import { IGrade } from "../models/grade";
import { IServiceResponse } from "../models/serviceResponse";
import { Create, Delete, Get, Update } from "./base";

export async function CreateGrade(grade: IGrade): Promise<IServiceResponse<string>> {
    const route = "/grades";
    const body = JSON.stringify(grade);
    const defaultErrorMessage = "Não foi possível realizar o cadastro. Tente novamente mais tarde.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}

export async function DeleteGrade(id: number): Promise<IServiceResponse<string>> {
    const route = `/grades/${id}`;
    const defaultErrorMessage = "Não foi possível realizar a exclusão. Tente novamente mais tarde.";
    const result = await Delete<string>({ route, defaultErrorMessage });

    return result;
}

export async function GetAllGrades(): Promise<IServiceResponse<IGrade[]>> {
    const route = "/grades";
    const defaultErrorMessage = "Não foi possível recuperar os dados. Tente novamente mais tarde.";
    const result = await Get<IGrade[]>({ route, defaultErrorMessage });

    return result;
}

export async function UpdateGrade(grade: IGrade): Promise<IServiceResponse<string>> {
    const route = `/grades/${grade.id}`;
    const body = JSON.stringify(grade);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
