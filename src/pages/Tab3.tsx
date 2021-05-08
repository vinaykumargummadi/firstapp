import { IonContent, 
  IonHeader,
   IonPage, 
   IonTitle, 
   IonToolbar,
  IonGrid,
IonRow,
IonCol } from '@ionic/react';
import Cardcontainer from '../components/Cardcontainer';
import './css/tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol size="6" className="card-overlay">
                  <Cardcontainer name="User Info" link="www.google.com"></Cardcontainer>
              </IonCol>
              <IonCol size="6" className="card-overlay">
                  <Cardcontainer name="Renewal Passbook" link="google"></Cardcontainer>
              </IonCol>
              <IonCol size="6" className="card-overlay">
                  <Cardcontainer name="Apply for new Passbook" link="google"></Cardcontainer>
              </IonCol>
              <IonCol size="6" className="card-overlay">
                  <Cardcontainer name="More..." link="google"></Cardcontainer>
              </IonCol>
            </IonRow>
          </IonGrid>
          
      </IonContent>
    </IonPage>
  );
};
export default Tab3;
