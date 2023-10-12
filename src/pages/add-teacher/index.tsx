import { useState } from "react";
import { useIonRouter } from "@ionic/react";

import { PATHS } from "@/routes";
import { ITeacher } from "@/models";
import { useCreateTeacher } from "@/hooks";
import { PageTemplate, TeacherForm } from "@/components";

const AddTeacher: React.FC = () => {
    const router = useIonRouter();
    const { mutation: create } = useCreateTeacher();
    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = () => {
        router.push(PATHS.teachers.route);
    };

    const handleSave = async (formData: ITeacher) => {
        setIsLoading(true);
        const response = await create.mutateAsync(formData);
        setIsLoading(false);
        if (!response.error) {
            router.push(PATHS.teachers.route);
        }
        // handleResponse(response);
    };

    return (
        <PageTemplate title="Professores" goBackRoute={PATHS.teachers.route} showGoBackButton={true}>
            <TeacherForm mode="create" isLoading={isLoading} onCancel={handleCancel} onSave={handleSave} />
        </PageTemplate>
    );
};

export default AddTeacher;
