import React, { Component } from 'react';
import './style.css';

class FormRegister extends Component{

  constructor(props){
    super(props)
    this.title="";
    this.text="";
  }

  _handleTitleChange(event) {
    this.title = event.target.value;
    console.log(this.title);
  }

  _handleTextChange(event) {
    this.text = event.target.value;
    console.log(this.text);
  }

  _handleSubmit(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title,this.text)
  }

  render(){
    return(
      <form className="form-cadastro"
      onSubmit={this._handleSubmit.bind(this)}
      >
        <input 
        className="form-cadastro_input" 
        type="text" 
        placeholder="Título"
        onChange={this._handleTitleChange.bind(this)}
        >
        </input>
        <textarea 
        className="form-cadastro_input" 
        placeholder="Escreva a nota"
        onChange={this._handleTextChange.bind(this)}>          
        </textarea>
        <button 
        className="form-cadastro_input form-cadastro_submit">
        Salvar
        </button>
      </form>
    )
  }
}

export default FormRegister;