import { useState } from "react";
import { IonButton, IonInput, IonItem, IonList } from "@ionic/react";

import { ITeacher } from "@/models";

import "./index.css";

interface TeacherFormProps {
    data?: ITeacher;
    onCancel: () => void;
    onSave: (data: ITeacher) => void;
}

export function TeacherForm({ data, onCancel, onSave }: TeacherFormProps) {
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
        onSave(dataToSave);
    };

    return (
        <div className="wrapper">
            <IonList>
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
