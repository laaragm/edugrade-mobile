import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { GetUser } from "@/services";
import { IUser, IServiceResponse, QueryKeys } from "@/models";

export function useUser(id: number) {
    const { data, isLoading, isFetching, error } = useQuery([QueryKeys.Users, id], () => GetUser(id), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<IUser>, unknown>;

    return { data, isLoading, isFetching, error };
}
