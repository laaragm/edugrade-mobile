import { IServiceResponse, ISubject } from "@/models";
import { Create, Delete, Get, Update } from "./base";

export async function CreateSubject(subject: ISubject): Promise<IServiceResponse<string>> {
    const route = "/subjects";
    const body = JSON.stringify(subject);
    const defaultErrorMessage = "Não foi possível realizar o cadastro. Tente novamente mais tarde.";
    const result = await Create<string>({ route, defaultErrorMessage, body });

    return result;
}

export async function DeleteSubject(id: number): Promise<IServiceResponse<string>> {
    const route = `/subjects/${id}`;
    const defaultErrorMessage = "Não foi possível realizar a exclusão. Tente novamente mais tarde.";
    const result = await Delete<string>({ route, defaultErrorMessage });

    return result;
}

export async function GetAllSubjects(): Promise<IServiceResponse<ISubject[]>> {
    const route = "/subjects";
    const defaultErrorMessage = "Não foi possível recuperar os dados. Tente novamente mais tarde.";
    const result = await Get<ISubject[]>({ route, defaultErrorMessage });

    return result;
}

export async function UpdateSubject(subject: ISubject): Promise<IServiceResponse<string>> {
    const route = `/subjects/${subject.id}`;
    const body = JSON.stringify(subject);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
