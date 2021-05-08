import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>E - Passbook</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12" class="title">This is the E - Passbook</IonCol>
            <IonCol size="12" class="valid">
              <p> Valid till : </p><h2> "25-NOV-2021"</h2>
            </IonCol>
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
