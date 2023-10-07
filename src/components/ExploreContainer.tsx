import { IonButton } from "@ionic/react";

import "./ExploreContainer.css";

interface ContainerProps {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <strong>{name}</strong>
            <IonButton expand="block" color="primary">
                Test primary
            </IonButton>
            <IonButton expand="block" color="secondary">
                Test secondary
            </IonButton>
            <IonButton expand="block" color="tertiary">
                Test tertiary
            </IonButton>
        </div>
    );
};

export default ExploreContainer;
