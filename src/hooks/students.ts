import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";

import { IServiceResponse, IStudent, IStudents, QueryKeys } from "@/models";
import { CreateStudent, DeleteStudent, GetAllStudents, UpdateStudent, queryClient } from "@/services";

export function useCreateStudent() {
    const mutation = useMutation({
        mutationFn: async (student: IStudent) => CreateStudent(student),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Students] }),
    });

    return { mutation };
}

export function useDeleteStudent() {
    const mutation = useMutation({
        mutationFn: async (id: number) => DeleteStudent(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Students] }),
    });

    return { mutation };
}

export function useUpdateStudent() {
    const mutation = useMutation({
        mutationFn: async (student: IStudent) => UpdateStudent(student),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Students] }),
    });

    return { mutation };
}

export function useStudents() {
    const { data, isLoading, isFetching, error, refetch } = useQuery([QueryKeys.Students], () => GetAllStudents(), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<IStudents>, unknown>;

    return { data, isLoading, isFetching, error, refetch };
}
