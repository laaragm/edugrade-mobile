import { useTeacher } from "@/hooks";
import { PageTemplate } from "@/components";
import { PATHS } from "@/routes";
import { useIonRouter } from "@ionic/react";

const ViewTeacher: React.FC = () => {
    const router = useIonRouter();
    const idParam = router.routeInfo?.params?.id;
    const pathname = router.routeInfo.pathname;
    const id = pathname.split("/")[pathname.split("/").length - 1];
    const { data } = useTeacher(+id);

    return (
        <PageTemplate title="Professores" goBackRoute={PATHS.teachers.route} showGoBackButton={true}>
            <div>
                <p>View/Edit details page</p>
                {data?.result && (
                    <p>
                        {data.result.id} - {data.result.name}
                    </p>
                )}
            </div>
        </PageTemplate>
    );
};

export default ViewTeacher;
