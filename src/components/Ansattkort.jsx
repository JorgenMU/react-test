import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Ansattkort(ansattinfo) {
    return (
      <div className="ansattkort p-5 m-10 rounded border-2 border-black bg-blue-100">
        <strong className="text-lg font-bold text-blue-700">Navn: {ansattinfo.navn} </strong>
        <p> <FontAwesomeIcon icon={ faPhone } /> {ansattinfo.tlf} </p>
        <p>Epost: {ansattinfo.epost}</p>
      </div>
    );
  }