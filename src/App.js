
import React, { Component } from 'react';
import FormularioRegistro from './Components/FormRegister/FormRegister.js';
import ListadeNotas from './Components/NoteList/NotesList.js';
import "./assets/app.css";
import './assets/index.css';
class App extends Component{

  createNote(title,text){
    console.log('parent property');
  }
  render(){
    return (
      <div className="conteudo">
        <FormularioRegistro createNote={this.createNote} />
        <ListadeNotas />
      </div>
    );
  }
}

export default App;
