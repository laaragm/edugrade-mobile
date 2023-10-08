import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../services/queryClient";
import { CreateGrade, DeleteGrade, GetAllGrades, UpdateGrade } from "../services/gradeService";
import { IGrade, IGrades } from "../models/grade";
import { QueryKeys } from "../models/queryKeys";
import { IServiceResponse } from "../models/serviceResponse";

export function useCreateGrade() {
    const mutation = useMutation({
        mutationFn: async (grade: IGrade) => CreateGrade(grade),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Grades] }),
    });

    return { mutation };
}

export function useDeleteGrade() {
    const mutation = useMutation({
        mutationFn: async (id: number) => DeleteGrade(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Grades] }),
    });

    return { mutation };
}

export function useUpdateGrade() {
    const mutation = useMutation({
        mutationFn: async (grade: IGrade) => UpdateGrade(grade),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [QueryKeys.Grades] }),
    });

    return { mutation };
}

export function useGrades() {
    const { data, isLoading, isFetching, error } = useQuery([QueryKeys.Grades], () => GetAllGrades(), {
        staleTime: 1000 * 60, // 1 minute
    }) as UseQueryResult<IServiceResponse<IGrades>, unknown>;

    return { data, isLoading, isFetching, error };
}
