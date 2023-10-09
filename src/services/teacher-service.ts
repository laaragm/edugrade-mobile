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
    // const route = "/teachers";
    // const defaultErrorMessage = "Não foi possível recuperar os dados. Tente novamente mais tarde.";
    // const result = await Get<ITeacher[]>({ route, defaultErrorMessage });

    // return result;

    // TODO: Remove mocked data
    const mockedTeachers: ITeacher[] = [
        {
            id: 1,
            name: "John Doe",
            cpf: "123.456.789-01",
            expertiseAreas: "Mathematics, Physics",
            subjects: [
                { id: 1, name: "Calculus" },
                { id: 2, name: "Algebra" },
                { id: 3, name: "Quantum Physics" },
            ],
        },
        {
            id: 2,
            name: "Jane Smith",
            cpf: "987.654.321-09",
            expertiseAreas: "Literature & History",
            subjects: [
                { id: 4, name: "English Literature" },
                { id: 5, name: "World History" },
            ],
        },
        {
            id: 3,
            name: "Lucas Green",
            cpf: "456.789.123-65",
            expertiseAreas: "Biology & Chemistry",
            subjects: [
                { id: 6, name: "Organic Chemistry" },
                { id: 7, name: "Cell Biology" },
            ],
        },
        {
            id: 4,
            name: "Emily Clark",
            cpf: "789.123.456-78",
            expertiseAreas: "Computer Science",
            subjects: [
                { id: 8, name: "Programming 101" },
                { id: 9, name: "Data Structures" },
            ],
        },
        {
            id: 5,
            name: "Robert Brown",
            cpf: "321.654.987-23",
            expertiseAreas: "Languages",
            subjects: [
                { id: 10, name: "Spanish" },
                { id: 11, name: "French" },
            ],
        },
        {
            id: 6,
            name: "Isabella Johnson",
            cpf: "654.987.321-45",
            expertiseAreas: "Music, Arts",
            subjects: [
                { id: 12, name: "Piano Basics" },
                { id: 13, name: "Art History" },
            ],
        },
        {
            id: 7,
            name: "William Davis",
            cpf: "234.567.890-12",
            expertiseAreas: "Geography, Environment",
            subjects: [
                { id: 14, name: "Physical Geography" },
                { id: 15, name: "Environmental Science" },
            ],
        },
        {
            id: 8,
            name: "Olivia Wilson",
            cpf: "567.890.123-34",
            expertiseAreas: "Psychology, Sociology",
            subjects: [
                { id: 16, name: "Cognitive Psychology" },
                { id: 17, name: "Sociology Basics" },
            ],
        },
        {
            id: 9,
            name: "James Taylor",
            cpf: "890.123.456-56",
            expertiseAreas: "Philosophy, Ethics",
            subjects: [
                { id: 18, name: "Ethics 101" },
                { id: 19, name: "Ancient Philosophers" },
            ],
        },
        {
            id: 10,
            name: "Sophia Lee",
            cpf: "012.345.678-90",
            expertiseAreas: "Physical Education",
            subjects: [
                { id: 20, name: "Yoga for Beginners" },
                { id: 21, name: "Sports Science" },
            ],
        },
        {
            id: 11,
            name: "John Doe",
            cpf: "111.222.333-43",
            expertiseAreas: "Spanish",
            subjects: [
                { id: 22, name: "Intermediate Spanish" },
                { id: 23, name: "Advanced Spanish" },
            ],
        },
    ];

    return {
        result: mockedTeachers,
        error: false,
        errorMessage: "",
    };
}

export async function UpdateTeacher(teacher: ITeacher): Promise<IServiceResponse<string>> {
    const route = `/teachers/${teacher.id}`;
    const body = JSON.stringify(teacher);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
