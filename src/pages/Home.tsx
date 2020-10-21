import { IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { createOutline, trashOutline } from 'ionicons/icons';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import CreateTaskButton from '../components/CreateTaskButton';
import TaskList from './TaskList';

const Home: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TaskList</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <TaskList/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
