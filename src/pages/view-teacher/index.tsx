import { useState } from "react";
import { useIonRouter } from "@ionic/react";

import { PATHS } from "@/routes";
import { ITeacher } from "@/models";
import { useTeacher, useUpdateTeacher } from "@/hooks";
import { PageTemplate, TeacherForm } from "@/components";

const ViewTeacher: React.FC = () => {
    const router = useIonRouter();
    const { mutation: update } = useUpdateTeacher();
    const pathname = router.routeInfo.pathname;
    const id = pathname.split("/")[pathname.split("/").length - 1];
    const { data } = useTeacher(+id);
    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = () => {
        router.push(PATHS.teachers.route);
    };

    const handleUpdate = async (formData: ITeacher) => {
        setIsLoading(true);
        const response = await update.mutateAsync(formData);
        console.log(response);
        setIsLoading(false);
        if (!response.error) {
            router.push(PATHS.teachers.route);
        }
        // handleResponse(response);
    };

    return (
        <PageTemplate title="Professores" goBackRoute={PATHS.teachers.route} showGoBackButton={true}>
            {data?.result && (
                <TeacherForm
                    data={data?.result.data}
                    mode="update"
                    isLoading={isLoading}
                    onCancel={handleCancel}
                    onSave={handleUpdate}
                />
            )}
        </PageTemplate>
    );
};

export default ViewTeacher;
