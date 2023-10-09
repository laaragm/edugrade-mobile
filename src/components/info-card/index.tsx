import { IonIcon, useIonRouter } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";

import "./index.css";

interface InfoCardProps {
    title: string;
    onClick: () => void;
}

export function InfoCard({ title, onClick }: InfoCardProps) {
    return (
        <div className="info-card-wrapper">
            <p className="info-card-title">{title}</p>
            <div className="chevron-icon-wrapper">
                <IonIcon icon={chevronForwardOutline} className="chevron-icon" onClick={onClick}></IonIcon>
            </div>
        </div>
    );
}
