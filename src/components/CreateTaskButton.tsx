import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, IonFabButton, IonIcon, IonFab, IonItem, IonInput, useIonViewDidLeave } from '@ionic/react';
import { trashOutline,  createOutline} from "ionicons/icons"

type Props = {
  fetchTask:any,
}

const CreateTaskButton: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState<string>();
  function ClickModal(modal_state:boolean){
    setShowModal(modal_state);
  }
  function submitTask(){
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body: text })
    }).then(()=>props.fetchTask())
    setText("");
    setShowModal(false);
  }
  return (
    <div>
      <IonModal isOpen={showModal} cssClass='my-custom-class' onDidDismiss={() => {setShowModal(false)}}>
        <p>input task name</p>
        <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonItem>
        <IonButton onClick={() => submitTask()}>submit task</IonButton>
      </IonModal>
      <IonFab horizontal="center" vertical="bottom" slot="fixed">
        <IonFabButton color="primary" onClick={() => ClickModal(true)}>
            <IonIcon icon={createOutline} size="midium"></IonIcon>
        </IonFabButton>
    　</IonFab>
    </div>
  );
};
export default CreateTaskButton;