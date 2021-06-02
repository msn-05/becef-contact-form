import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <Title />
      <Row>
        <Input id='fname' name='fname' label='First name' type='text' />
        <Input id='lname' name='lname' label='Last name' type='text' />
      </Row>
    </div>
  );
}
function Title(){
  const style = {
    'text-transform': 'uppercase',
    'text-align': 'center',
    'margin-top': '40px',
    'font-weight': 'bolder'
  };
  return (
    <h1 style={style}>Get in touch with us</h1>
  );
}
function Row(props){
  return (
    <div className='row'>
      {props.children}
    </div>
  );
}
function Input(props){
  const inputStyle = {
    'width': '70%'
  }
  return (
    <div className='col'>
      <label for={props.id}>{props.label.toUpperCase()}:</label>
      <input style={inputStyle} type={props.type} id={props.id} name={props.name} />
    </div>
  );
}