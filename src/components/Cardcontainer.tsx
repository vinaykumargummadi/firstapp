import './Cardcontainer.css';


const Cardcontainer = (props:any) => {
 return(
     <section className="card-section">
         <div className="card">
             <a href="{props.link}" className="title" target="_blank">
                <h6>{props.name}</h6>
             </a>
         </div>
     </section> 
 );
};

export default Cardcontainer;