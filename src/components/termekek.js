import React, { useContext } from 'react';
import Termek from './termek';
import { ApiContext } from '../contexts/ApiContext';

export default function Termekek() {

    const {tLista}=useContext(ApiContext);
  return (
    <div className="row">
      <Termek/>
      <Termek/>
      <Termek/>
      <Termek/>
      <Termek/>
      <Termek/>
      <Termek/>
      <Termek/>
      <Termek/>
    </div>
  )
}
