import React, { Component } from 'react';
import './style.css';
class NoteCard extends Component {
    state = {  }
    render() { 
      return ( 
        <section className="card-nota">
          <header className="card-nota_cabecalho">
            <h3 className="card-nota_titulo">Titulo</h3>
          </header>
          <p className="card-nota_texto">Escreva sua nota</p>
        </section>
      );
    }
}
 
export default NoteCard;