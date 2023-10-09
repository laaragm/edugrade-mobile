import { IonIcon, IonLoading } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

import { IServiceResponse } from "@/models";
import { InfoCard } from "../info-card";

import "./index.css";

interface ItemsListProps<T> {
    data: IServiceResponse<T[]> | undefined;
    isLoading: boolean;
    onClick: (id: number) => void;
    onAdd: () => void;
}

export function ItemsList<T extends { id: number; name: string }>({
    data,
    isLoading,
    onClick,
    onAdd,
}: ItemsListProps<T>) {
    return (
        <div className="container">
            {isLoading && <IonLoading isOpen={isLoading} message="Loading..." />}
            {!isLoading && (
                <>
                    <IonIcon icon={addCircleOutline} className="add-icon" onClick={onAdd} />
                    {!!data?.result &&
                        data.result.length > 0 &&
                        data.result.map((item) => (
                            <InfoCard key={item.id} title={item.name} onClick={() => onClick(item.id)} />
                        ))}
                </>
            )}
        </div>
    );
}
