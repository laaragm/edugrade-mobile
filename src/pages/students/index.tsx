import { useIonRouter } from "@ionic/react";

import { IStudent } from "@/models";
import { useStudents } from "@/hooks";
import { ItemsList, PageTemplate } from "@/components";

const Students: React.FC = () => {
    const router = useIonRouter();
    const { data, isLoading } = useStudents();

    // TODO: Implement functionality
    const handleClick = (item: IStudent) => {
        console.log("Clicked: ", item.id);
    };

    // TODO: Implement functionality
    const handleAdd = () => {
        console.log("Add new student");
    };

    return (
        <PageTemplate title="Estudantes">
            <ItemsList data={data?.result?.data} isLoading={isLoading} onAdd={handleAdd} onClick={handleClick} />
        </PageTemplate>
    );
};

export default Students;
