import { IoIosArrowBack } from 'react-icons/io'
import Map from '../shared/Map/Map';

function CompagnyDetails({ compagny, onBack }) {
  console.log(compagny);
    return (
      <div>
        <button className='btn btn-sm btn-danger' onClick={onBack}><IoIosArrowBack /> Retour</button>
        <h2>Nom commercial : <span>{compagny.nomCommercial} </span></h2>
        <h2>Ridet : <span>{compagny.ridet} </span></h2>
       
        <Map coordinates={compagny.location.coordinates} formattedAddress={compagny.location.formattedAddress}/>
      </div>
    );
  }
  
  export default CompagnyDetails;
  