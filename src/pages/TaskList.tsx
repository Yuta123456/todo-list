import { IonBackButton, IonButton, IonButtons,
     IonContent, IonFab, IonFabButton, IonFooter, IonHeader,
      IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import CreateTaskButton from '../components/CreateTaskButton';
import ExploreContainer from '../components/ExploreContainer';
import TaskItem from '../components/TaskItem'
type TaskListType = {
  id:number,
  body:string
}[];
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState(
    [
      {
        "id": 1,
        "body": "進捗を生む"
      },
      {
        "id": 2,
        "body": "とにかくやる"
      }
    ]
  );
  function fetchTask(){
    fetch("http://localhost:3001/tasks")
    .then( (response) => response.json())
    .then((data) => setTasks(data))
  }

  useIonViewDidEnter(() => {
    fetchTask();
  });
  return (
    <div>
        <IonList>
          {tasks.map((task) => <TaskItem id={task.id} body={task.body} fetchTasks={fetchTask}/>)}
        </IonList>
        <CreateTaskButton fetchTask={fetchTask}/>
    </div>
  );
};
export default TaskList;