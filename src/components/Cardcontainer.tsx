import './Cardcontainer.css';

const Cardcontainer = (props:any) => {
 return(
     <section className="card-section">
         <div className="card">
            <h6>{props.name}</h6>
         </div>
     </section> 
 );
};

export default Cardcontainer;