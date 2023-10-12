import { useIonRouter } from "@ionic/react";

import { ISubject } from "@/models";
import { useSubjects } from "@/hooks";
import { ItemsList, PageTemplate } from "@/components";

const Disciplines: React.FC = () => {
    const router = useIonRouter();
    const { data, isLoading } = useSubjects();

    // TODO: Implement functionality
    const handleClick = (item: ISubject) => {
        console.log("Clicked: ", item.id);
    };

    // TODO: Implement functionality
    const handleAdd = () => {
        console.log("Add new discipline");
    };

    return (
        <PageTemplate title="Disciplinas">
            <ItemsList data={data?.result?.data} isLoading={isLoading} onAdd={handleAdd} onClick={handleClick} />
        </PageTemplate>
    );
};

export default Disciplines;
