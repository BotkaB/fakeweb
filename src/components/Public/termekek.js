import React, { useContext } from 'react';
import Termek from './termek';
import { ApiContext } from '../../contexts/ApiContext';

export default function Termekek() {

    const {tLista}=useContext(ApiContext);
  return (
    <div className="row">
      {tLista.map((termek)=>{
     return <Termek termek={termek} key={termek.id}/>
    })}
    </div>
    
  )
}
