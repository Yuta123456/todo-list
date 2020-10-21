import React, { Component, useState } from 'react';
import { IonAlert, IonBackButton, IonButton, IonButtons,
    IonContent, IonFab, IonFabButton, IonFooter, IonHeader,
     IonIcon, IonInput, IonItem, IonLabel, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';

type Props = {
    id:number,
    body:string,
    fetchTasks:any,
}
const ToDoListItem : React.FC<Props> = (props) =>{
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newText, setNewText] = useState(props.body);
    function updateTask(taskId:number){
        fetch("http://localhost:3001/tasks/"+taskId, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ body: newText })
        })
        .then( ()=>props.fetchTasks())
        .then(()=>setShowModal(false))
    }
    function deleteTask(taskId:number){
        fetch("http://localhost:3001/tasks/"+taskId, {
            method: "DELETE"
        })
        .then( ()=>props.fetchTasks() )
    }
    return (
        <div>
            <IonModal isOpen={showModal} cssClass='my-custom-class' onDidDismiss={() => {setShowModal(false)}}>
                <p>input task name</p>
                <IonItem>
                    <IonInput value={newText} onIonChange={e => setNewText(e.detail.value!)}></IonInput>
                </IonItem>
                <IonButton onClick={() => updateTask(props.id)}>update task</IonButton>
            </IonModal>
            <IonItem>
                <IonAlert
                    isOpen={deleteAlert}
                    onDidDismiss={() => setDeleteAlert(false)}
                    header={'確認'}
                    message={'このタスクを本当に消しますか？'}
                    buttons={[
                        {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            setDeleteAlert(false);
                            }
                        },
                        {
                        text: 'OK',
                        handler: () => {
                            deleteTask(props.id);
                            setDeleteAlert(false);
                            }
                        }
                    ]}
                />
                <IonLabel>{props.id} : {props.body}</IonLabel>
                <IonButton color={"success"} onClick={()=>setShowModal(true)}>update</IonButton>
                <IonButton color={"danger"} onClick={()=>setDeleteAlert(true)}>delete</IonButton>
            </IonItem>
        </div>
        
    );
}

export default ToDoListItem;