import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol, IonImg } from '@ionic/react';
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
            <IonCol size="12" class="title">Scan the Below QR Code</IonCol>
            <IonCol size="12" class="qr-container">
              <img src="../assets/images/qrcode.png"></img>
            </IonCol>
            <IonCol size="12" class="title">To check the validity of the Bus Pass.</IonCol>
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
