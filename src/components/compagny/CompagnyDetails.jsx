import { IoIosArrowBack } from 'react-icons/io'

function CompagnyDetails({ compagny, onBack }) {
    return (
      <div>
        <button className='btn btn-sm btn-danger' onClick={onBack}><IoIosArrowBack /> Retour</button>
        <h2>Nom commercial : <span>{compagny.nomCommercial} </span></h2>
        <h2>Ridet : <span>{compagny.ridet} </span></h2>
     
      </div>
    );
  }
  
  export default CompagnyDetails;
  