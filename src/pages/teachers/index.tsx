import { ITeacher } from "@/models";
import { useTeachers } from "@/hooks";
import { ItemsList, PageTemplate } from "@/components";
import { PATHS } from "@/routes";
import { useIonRouter } from "@ionic/react";

const Teachers: React.FC = () => {
    const router = useIonRouter();
    const { data } = useTeachers();
    const isLoading = false;

    const handleSelectItem = (item: ITeacher) => {
        router.push(PATHS.viewTeacher.route.replace(":id", item.id.toString()));
    };

    const handleAdd = () => {
        router.push(PATHS.addTeacher.route);
    };

    return (
        <PageTemplate title="Professores">
            <ItemsList data={data} isLoading={isLoading} onAdd={handleAdd} onClick={handleSelectItem} />
        </PageTemplate>
    );
};

export default Teachers;
