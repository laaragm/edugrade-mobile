import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { ISubject, ISubjects } from "../models/subject";
import { CreateSubject, UpdateSubject, DeleteSubject, GetAllSubjects } from "../services/disciplineService";
import { queryClient } from "../services/queryClient";
import { QueryKeys } from "../models/queryKeys";
import { IServiceResponse } from "../models/serviceResponse";

export function useCreateSubject() {
    const mutation = useMutation({
        mutationFn: async (subject: ISubject) => CreateSubject(subject),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Subjects] }),
    });

    return { mutation };
}

export function useDeleteSubject() {
    const mutation = useMutation({
        mutationFn: async (id: number) => DeleteSubject(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Subjects] }),
    });

    return { mutation };
}

export function useUpdateSubject() {
    const mutation = useMutation({
        mutationFn: async (subject: ISubject) => UpdateSubject(subject),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Subjects] }),
    });

    return { mutation };
}

export function useSubjects() {
    const { data, isLoading, isFetching, error } = useQuery([QueryKeys.Subjects], () => GetAllSubjects(), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<ISubjects>, unknown>;

    return { data, isLoading, isFetching, error };
}
