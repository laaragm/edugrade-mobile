import { IServiceResponse, IStudent, IStudents } from "@/models";
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

export async function GetAllStudents(): Promise<IServiceResponse<IStudent[]>> {
    // const route = "/students";
    // const defaultErrorMessage = "Não foi possível recuperar os dados. Tente novamente mais tarde.";
    // const result = await Get<IStudents>({ route, defaultErrorMessage });

    // return result;

    // TODO: Remove mocked data
    const mockedData: IStudent[] = [
        {
            id: 1,
            name: "Alice Johnson",
            address: "123 Main St, Springfield",
            email: "alice.johnson@example.com",
            phoneNumber: "123-456-7890",
            registrationNumber: "REG001",
            grades: [
                { id: 1, value: 85, subject: { id: 1, name: "Mathematics" } },
                { id: 2, value: 78, subject: { id: 2, name: "History" } },
            ],
        },
        {
            id: 2,
            name: "Bob Smith",
            address: "456 Elm St, Shelbyville",
            email: "bob.smith@example.com",
            phoneNumber: "234-567-8901",
            registrationNumber: "REG002",
            grades: [
                { id: 3, value: 88, subject: { id: 3, name: "Biology" } },
                { id: 4, value: 90, subject: { id: 4, name: "Chemistry" } },
            ],
        },
        {
            id: 3,
            name: "Charlie Brown",
            address: "789 Maple St, Capital City",
            email: "charlie.brown@example.com",
            phoneNumber: "345-678-9012",
            registrationNumber: "REG003",
            grades: [
                { id: 5, value: 72, subject: { id: 5, name: "Physics" } },
                { id: 6, value: 95, subject: { id: 6, name: "English Literature" } },
            ],
        },
        {
            id: 4,
            name: "David Wilson",
            address: "101 Pine St, Ogdenville",
            email: "david.wilson@example.com",
            phoneNumber: "456-789-0123",
            registrationNumber: "REG004",
            grades: [
                { id: 7, value: 92, subject: { id: 7, name: "Geography" } },
                { id: 8, value: 85, subject: { id: 1, name: "Mathematics" } },
            ],
        },
        {
            id: 5,
            name: "Ella Davis",
            address: "202 Oak St, North Haverbrook",
            email: "ella.davis@example.com",
            phoneNumber: "567-890-1234",
            registrationNumber: "REG005",
            grades: [
                { id: 9, value: 89, subject: { id: 2, name: "History" } },
                { id: 10, value: 76, subject: { id: 5, name: "Physics" } },
            ],
        },
        {
            id: 6,
            name: "Fiona Gray",
            address: "303 Birch St, Cypress Creek",
            email: "fiona.gray@example.com",
            phoneNumber: "678-901-2345",
            registrationNumber: "REG006",
            grades: [
                { id: 11, value: 91, subject: { id: 4, name: "Chemistry" } },
                { id: 12, value: 87, subject: { id: 6, name: "English Literature" } },
            ],
        },
        {
            id: 7,
            name: "George Clarke",
            address: "404 Spruce St, Sprooklyn",
            email: "george.clarke@example.com",
            phoneNumber: "789-012-3456",
            registrationNumber: "REG007",
            grades: [
                { id: 13, value: 80, subject: { id: 7, name: "Geography" } },
                { id: 14, value: 86, subject: { id: 3, name: "Biology" } },
            ],
        },
        {
            id: 8,
            name: "Hannah Baker",
            address: "505 Pine St, Gotham",
            email: "hannah.baker@example.com",
            phoneNumber: "890-123-4567",
            registrationNumber: "REG008",
            grades: [
                { id: 15, value: 93, subject: { id: 5, name: "Physics" } },
                { id: 16, value: 78, subject: { id: 1, name: "Mathematics" } },
            ],
        },
        {
            id: 9,
            name: "Ian Fox",
            address: "606 Cedar St, Emerald City",
            email: "ian.fox@example.com",
            phoneNumber: "901-234-5678",
            registrationNumber: "REG009",
            grades: [
                { id: 17, value: 70, subject: { id: 2, name: "History" } },
                { id: 18, value: 95, subject: { id: 6, name: "English Literature" } },
            ],
        },
        {
            id: 10,
            name: "Jill Mason",
            address: "707 Redwood St, Metropolis",
            email: "jill.mason@example.com",
            phoneNumber: "012-345-6789",
            registrationNumber: "REG010",
            grades: [
                { id: 19, value: 85, subject: { id: 7, name: "Geography" } },
                { id: 20, value: 89, subject: { id: 4, name: "Chemistry" } },
            ],
        },
    ];

    return {
        result: mockedData,
        error: false,
        errorMessage: "",
    };
}

export async function UpdateStudent(student: IStudent): Promise<IServiceResponse<string>> {
    const route = `/students/${student.id}`;
    const body = JSON.stringify(student);
    const defaultErrorMessage = "Não foi possível atualizar os dados. Tente novamente mais tarde.";
    const result = await Update<string>({ route, defaultErrorMessage, body });

    return result;
}
