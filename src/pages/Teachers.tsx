import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Teachers.css";

const Teachers: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle slot="center">Teachers</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Teachers</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Tab 1 page" />
            </IonContent>
        </IonPage>
    );
};

export default Teachers;
