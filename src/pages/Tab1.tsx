import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
 
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="center">Scan The QR Code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">vinay</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton expand="full" shape="round" href="#" className="sc_btn" >
        <IonIcon slot="end" icon={camera} />Open Scanner</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
