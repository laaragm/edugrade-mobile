import { useState } from "react";
import { IonButton, IonInput, IonItem, IonList, IonLoading } from "@ionic/react";

import { ITeacher } from "@/models";

import "./index.css";

interface TeacherFormProps {
    data?: ITeacher;
    isLoading?: boolean;
    onCancel: () => void;
    onSave: (data: ITeacher) => void;
}

export function TeacherForm({ data, isLoading = false, onCancel, onSave }: TeacherFormProps) {
    const [name, setName] = useState(!!data ? data.name : "");
    const [cpf, setCpf] = useState(!!data ? data.cpf : "");
    const [expertiseAreas, setExpertiseAreas] = useState(!!data ? data.expertiseAreas : "");

    const handleSaveClick = () => {
        const dataToSave: ITeacher = {
            id: data?.id ?? 0,
            name,
            cpf,
            expertiseAreas,
            subjects: data?.subjects ?? [],
        };
        console.log("dataToSave: ", dataToSave);
        onSave(dataToSave);
    };

    return (
        <div className="wrapper">
            <IonList>
                {isLoading && <IonLoading isOpen={isLoading} message="Saving data..." />}
                <IonItem>
                    <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)} label="Nome:" />
                </IonItem>
                <IonItem>
                    <IonInput value={cpf} onIonChange={(e) => setCpf(e.detail.value!)} label="CPF:" />
                </IonItem>
                <IonItem>
                    <IonInput
                        value={expertiseAreas}
                        onIonChange={(e) => setExpertiseAreas(e.detail.value!)}
                        label="Áreas:"
                    />
                </IonItem>
            </IonList>
            <div className="control-buttons">
                <IonButton color="tertiary" onClick={onCancel}>
                    Cancelar
                </IonButton>
                <IonButton color="primary" onClick={handleSaveClick}>
                    Salvar
                </IonButton>
            </div>
        </div>
    );
}
