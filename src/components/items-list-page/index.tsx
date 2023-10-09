import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import { ItemsList } from "@/components";
import { IServiceResponse } from "@/models";

import "./index.css";

interface ItemsListPageProps<T> {
    title: string;
    data: IServiceResponse<T[]> | undefined;
    isLoading: boolean;
    onClick: (id: number) => void;
    onAdd: () => void;
}

export function ItemsListPage<T extends { id: number; name: string }>({
    title,
    data,
    isLoading,
    onClick,
    onAdd,
}: ItemsListPageProps<T>) {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {/* TODO: Remove this */}
                    {/* <IonButtons slot="start">
                        <IonBackButton defaultHref="/teachers" />
                    </IonButtons> */}
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ItemsList data={data} isLoading={isLoading} onAdd={onAdd} onClick={onClick} />
            </IonContent>
        </IonPage>
    );
}
