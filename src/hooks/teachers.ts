import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { ITeacher, ITeachers } from "../models/teacher";
import { CreateTeacher, UpdateTeacher, DeleteTeacher, GetAllTeachers } from "../services/teacherService";
import { queryClient } from "../services/queryClient";
import { QueryKeys } from "../models/queryKeys";
import { IServiceResponse } from "../models/serviceResponse";

export function useCreateTeacher() {
    const mutation = useMutation({
        mutationFn: async (teacher: ITeacher) => CreateTeacher(teacher),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Teachers] }),
    });

    return { mutation };
}

export function useDeleteTeacher() {
    const mutation = useMutation({
        mutationFn: async (id: number) => DeleteTeacher(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Teachers] }),
    });

    return { mutation };
}

export function useUpdateTeacher() {
    const mutation = useMutation({
        mutationFn: async (teacher: ITeacher) => UpdateTeacher(teacher),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Teachers] }),
    });

    return { mutation };
}

export function useTeachers() {
    const { data, isLoading, isFetching, error } = useQuery([QueryKeys.Teachers], () => GetAllTeachers(), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<ITeachers>, unknown>;

    return { data, isLoading, isFetching, error };
}
