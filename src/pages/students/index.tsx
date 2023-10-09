import { useStudents } from "@/hooks";
import { ItemsListPage } from "@/components";

const Students: React.FC = () => {
    const { data } = useStudents();
    const isLoading = false;

    // TODO: Implement functionality
    const handleClick = (id: number) => {
        console.log("Clicked: ", id);
    };

    // TODO: Implement functionality
    const handleAdd = () => {
        console.log("Add new discipline");
    };

    return (
        <ItemsListPage title="Estudantes" data={data} isLoading={isLoading} onClick={handleClick} onAdd={handleAdd} />
    );
};

export default Students;
