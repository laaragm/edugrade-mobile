import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { IUser } from "../models/user";
import { IServiceResponse } from "../models/serviceResponse";
import { QueryKeys } from "../models/queryKeys";
import { GetUser } from "../services/userService";

export function useUser(id: number) {
    const { data, isLoading, isFetching, error } = useQuery([QueryKeys.Users, id], () => GetUser(id), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<IUser>, unknown>;

    return { data, isLoading, isFetching, error };
}
