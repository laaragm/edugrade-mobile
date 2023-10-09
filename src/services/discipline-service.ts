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
    // const route = "/subjects";
    // const defaultErrorMessage = "Não foi possível recuperar os dados. Tente novamente mais tarde.";
    // const result = await Get<ISubject[]>({ route, defaultErrorMessage });

    // return result;

    // TODO: Remove mocked data
    const mockedData: ISubject[] = [
        {
            id: 1,
            name: "Mathematics",
            teacher: {
                id: 1,
                name: "John Doe",
            },
            grades: [
                { id: 1, value: 85, subject: { id: 1, name: "Mathematics" } },
                { id: 2, value: 90, subject: { id: 1, name: "Mathematics" } },
            ],
        },
        {
            id: 2,
            name: "History",
            teacher: {
                id: 2,
                name: "Jane Smith",
            },
            grades: [
                { id: 3, value: 88, subject: { id: 2, name: "History" } },
                { id: 4, value: 92, subject: { id: 2, name: "History" } },
            ],
        },
        {
            id: 3,
            name: "Biology",
            teacher: {
                id: 3,
                name: "Lucas Green",
            },
            grades: [
                { id: 5, value: 78, subject: { id: 3, name: "Biology" } },
                { id: 6, value: 82, subject: { id: 3, name: "Biology" } },
            ],
        },
        {
            id: 4,
            name: "Chemistry",
            teacher: {
                id: 4,
                name: "Sarah White",
            },
            grades: [
                { id: 7, value: 80, subject: { id: 4, name: "Chemistry" } },
                { id: 8, value: 89, subject: { id: 4, name: "Chemistry" } },
            ],
        },
        {
            id: 5,
            name: "Physics",
            teacher: {
                id: 5,
                name: "Brian Gray",
            },
            grades: [
                { id: 9, value: 93, subject: { id: 5, name: "Physics" } },
                { id: 10, value: 86, subject: { id: 5, name: "Physics" } },
            ],
        },
        {
            id: 6,
            name: "English Literature",
            teacher: {
                id: 6,
                name: "Emily Clark",
            },
            grades: [
                { id: 11, value: 91, subject: { id: 6, name: "English Literature" } },
                { id: 12, value: 87, subject: { id: 6, name: "English Literature" } },
            ],
        },
        {
            id: 7,
            name: "Geography",
            teacher: {
                id: 7,
                name: "Robert Brown",
            },
            grades: [
                { id: 13, value: 84, subject: { id: 7, name: "Geography" } },
                { id: 14, value: 88, subject: { id: 7, name: "Geography" } },
            ],
        },
    ];

    return {
        result: mockedData,
        error: false,
        errorMessage: "",
    };
}

export async function UpdateSubject(subject: ISubject): Promise<IServiceResponse<string>> {
    const route = `/subjects/${subject.id}`;
    const body = JSON.stringify(subject);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
