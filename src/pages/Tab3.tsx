import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid,IonRow,IonCol, IonRouterOutlet, IonNav, IonItem, IonModal, IonButton, IonItemDivider, IonInput } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  const[name,setName] = useState('');
    const[Aadhar,setAadhar] = useState('');
  const[cnumber,setNumber] = useState('');

  function data(){
    console.log(name+Aadhar+cnumber);
  }
 return(
 <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <br />
          <IonItem>
            <IonInput placeholder="Enter Full Name" onIonChange={e => setName(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <br></br>
        <IonItem>
          <IonInput type="number" placeholder="Enter Contact Number" onIonChange={e => setAadhar(e.detail.value!)}></IonInput>
        </IonItem><br />
        <IonItem>
          <IonInput type="number" placeholder="Enter Aadhar Number" onIonChange={e => setNumber(e.detail.value!)}></IonInput>
        </IonItem><br/>
        <IonButton color="success" expand="block" shape="round" onClick={data}>Submit</IonButton>
      </IonContent>
    </IonPage>
  )
}
export default Tab3;

function setNumber(arg0: number): void {
  throw new Error('Function not implemented.');
}

function setText(arg0: string): void {
  throw new Error('Function not implemented.');
}

function setName(arg0: string): void {
  throw new Error('Function not implemented.');
}

function setAadhar(arg0: number): void {
  throw new Error('Function not implemented.');
}

