import { PageTemplate } from "@/components";
import { PATHS } from "@/routes";

const AddTeacher: React.FC = () => {
    return (
        <PageTemplate title="Professores" goBackRoute={PATHS.teachers.route} showGoBackButton={true}>
            <div>
                <p>Add teacher</p>
            </div>
        </PageTemplate>
    );
};

export default AddTeacher;
