import { IonContent, IonHeader, IonIcon, IonLoading, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

import { ITeacher } from "@/models";
import { useTeachers } from "@/hooks";
import { InfoCard } from "@/components";

import "./index.css";

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
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {/* <IonButtons slot="start">
                        <IonBackButton defaultHref="/teachers" />
                    </IonButtons> */}
                    <IonTitle>Teachers</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Teachers</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div className="container">
                    {/* <IonButton expand="block" color="primary">
                Test primary
            </IonButton> */}

                    {isLoading && <IonLoading isOpen={isLoading} message="Loading" />}
                    {!isLoading && (
                        <>
                            <IonIcon icon={addCircleOutline} className="icon" onClick={handleAdd} />
                            {!!data?.result &&
                                data.result.length > 0 &&
                                data.result.map((teacher: ITeacher) => (
                                    <InfoCard
                                        key={teacher.id}
                                        title={teacher.name}
                                        onClick={() => handleClick(teacher.id)}
                                    />
                                ))}
                        </>
                    )}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Teachers;
