import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import "./index.css";

interface PageTemplateProps {
    title: string;
    showGoBackButton?: boolean;
    goBackRoute?: string;
    children: React.ReactNode;
}

export function PageTemplate({ title, goBackRoute, showGoBackButton = false, children }: PageTemplateProps) {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {showGoBackButton && !!goBackRoute && (
                        <IonButtons slot="start">
                            <IonBackButton defaultHref={goBackRoute} />
                        </IonButtons>
                    )}
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {children}
            </IonContent>
        </IonPage>
    );
}
