import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard.js';
import './style.css';
class NotesList extends Component{
  render(){
    return(
      <ul className="lista-notas">
        {Array.of("Trabalho","Trabalho","Estudo").map((categories, index) =>{
          return (
            <li className="lista-notas_item" key={index}>              
              <NoteCard/>
            </li>
            )
          }
        )}
      </ul>
    )
  }
}

export default NotesList;