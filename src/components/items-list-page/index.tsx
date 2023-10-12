import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import { ItemsList } from "@/components";

import "./index.css";

interface ItemsListPageProps<T> {
    title: string;
    data: T[] | undefined;
    isLoading: boolean;
    showGoBackButton?: boolean;
    children?: React.ReactNode;
    onClick: (item: T) => void;
    onAdd: () => void;
    onGoBack?: () => void;
}

export function ItemsListPage<T extends { id: number; name: string }>({
    title,
    data,
    isLoading,
    showGoBackButton = false,
    children,
    onClick,
    onAdd,
    onGoBack,
}: ItemsListPageProps<T>) {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {showGoBackButton && (
                        <IonButtons slot="start" onClick={onGoBack}>
                            <IonBackButton />
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
                {!!children ? (
                    <>{children}</>
                ) : (
                    <ItemsList data={data} isLoading={isLoading} onAdd={onAdd} onClick={onClick} />
                )}
            </IonContent>
        </IonPage>
    );
}
