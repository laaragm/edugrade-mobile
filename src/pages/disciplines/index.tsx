import { ISubject } from "@/models";
import { useSubjects } from "@/hooks";
import { ItemsListPage } from "@/components";

const Disciplines: React.FC = () => {
    const { data } = useSubjects();
    const isLoading = false;

    // TODO: Implement functionality
    const handleClick = (item: ISubject) => {
        console.log("Clicked: ", item.id);
    };

    // TODO: Implement functionality
    const handleAdd = () => {
        console.log("Add new discipline");
    };

    return (
        <ItemsListPage
            title="Disciplinas"
            data={data?.result?.data}
            isLoading={isLoading}
            onClick={handleClick}
            onAdd={handleAdd}
        />
    );
};

export default Disciplines;
