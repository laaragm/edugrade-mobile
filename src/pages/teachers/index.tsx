import { useTeachers } from "@/hooks";
import { ItemsListPage } from "@/components";

const Teachers: React.FC = () => {
    const { data } = useTeachers();
    const isLoading = false;

    // TODO: Implement functionality
    const handleClick = (id: number) => {
        console.log("Clicked: ", id);
    };

    // TODO: Implement functionality
    const handleAdd = () => {
        console.log("Add new teacher");
    };

    return (
        <ItemsListPage title="Professores" data={data} isLoading={isLoading} onClick={handleClick} onAdd={handleAdd} />
    );
};

export default Teachers;
