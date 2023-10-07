import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Grades.css";

const Grades: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Grades</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 4</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Tab 4 page" />
            </IonContent>
        </IonPage>
    );
};

export default Grades;
