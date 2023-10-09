import { IServiceResponse } from "../models/serviceResponse";
import { IUser } from "../models/user";

// TODO: Remove mocked data
export async function GetUser(id: number): Promise<IServiceResponse<IUser>> {
    const result: IServiceResponse<IUser> = {
        result: {
            id: 1,
            name: "John Doe",
            role: "Admin",
            dateOfBirth: new Date("1990-05-15"),
            cpf: "123.456.789-10",
            phone: "(123) 456-7890",
            town: "Springfield",
            email: "johndoe@example.com",
        },
        error: false,
        errorMessage: "",
    };

    return result;
}
