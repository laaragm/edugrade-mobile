import { useRef } from "react";
import { IonButton, IonInput, IonItem, IonList, IonLoading } from "@ionic/react";

import { ITeacher, Mode } from "@/models";

import "./index.css";

interface TeacherFormProps {
    data?: ITeacher;
    mode: Mode;
    isLoading?: boolean;
    onSave: (data: ITeacher) => void;
    onDelete?: (id: number) => void;
}

export function TeacherForm({ data, mode, isLoading = false, onDelete, onSave }: TeacherFormProps) {
    const nameRef = useRef<HTMLIonInputElement>(null);
    const cpfRef = useRef<HTMLIonInputElement>(null);
    const expertiseAreasRef = useRef<HTMLIonInputElement>(null);

    const handleSave = () => {
        const dataToSave: ITeacher = {
            id: data?.id ?? 0,
            name: nameRef.current?.value?.toString() || "",
            cpf: cpfRef.current?.value?.toString() || "",
            expertiseAreas: expertiseAreasRef.current?.value?.toString() || "",
            subjects: data?.subjects ?? [],
        };
        onSave(dataToSave);
    };

    const handleDelete = () => {
        if (!!data && !!onDelete) {
            onDelete(data.id);
        }
    };

    return (
        <div className="wrapper">
            <IonList>
                {isLoading && <IonLoading isOpen={isLoading} message="Processando solicitação..." />}
                <IonItem>
                    <IonInput label="Nome:" value={data?.name} ref={nameRef} />
                </IonItem>
                <IonItem>
                    <IonInput label="CPF:" value={data?.cpf} ref={cpfRef} />
                </IonItem>
                <IonItem>
                    <IonInput label="Áreas:" value={data?.expertiseAreas} ref={expertiseAreasRef} />
                </IonItem>
            </IonList>
            <div className="control-buttons">
                <IonButton color="tertiary" disabled={mode === "create"} onClick={handleDelete}>
                    Excluir
                </IonButton>
                <IonButton color="primary" onClick={handleSave}>
                    Salvar
                </IonButton>
            </div>
        </div>
    );
}
