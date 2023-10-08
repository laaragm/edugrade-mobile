import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { IStudent, IStudents } from "../models/student";
import { CreateStudent, UpdateStudent, DeleteStudent, GetAllStudents } from "../services/studentService";
import { queryClient } from "../services/queryClient";
import { QueryKeys } from "../models/queryKeys";
import { IServiceResponse } from "../models/serviceResponse";

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
