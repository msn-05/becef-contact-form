import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className='main'>
      <Title />
      <br />
      <br />
      <br />
      <Row>
        <Input id='fname' name='fname' label='First name' type='text' />
        <Input inp2={true} id='lname' name='lname' label='Last name' type='text' />
      </Row>
      <br />
      <br />
      <Row>
        <Input id='email' name='email' label='E-mail' type='email' />
        <Input inp2={true} id='subject' name='subject' label='Subject' type='text' />
      </Row>
      <br />
      <br />
      <Message id='msg' name='msg' label='Message' />
      <br />
      <br />
      <Submit />
      <br />
      <br />
      <br />
      <div className='row' style={{justifyContent:'space-between'}}>
        <div className='social'>
          <h2>OR HERE</h2><br />
          <h3>Email:</h3><br />
          <div>example@mail.com</div><br />
          <div>example@mail.com</div><br />
          <div>example@mail.com</div><br />
        </div>
        <div className='social'>
          <h2>Get Social</h2>
          <a href='#' className='fa fa-twitter' style={{marginLeft:'0'}}></a>
          <a href='#' className='fa fa-instagram'></a>
          <a href='#' className='fa fa-linkedin'></a>
        </div>
        <div className='social'>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=302&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="302" height="500" style={{"border":"none","overflow":"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </div>
  );
}
function Title(){
  const style = {
    'text-transform': 'uppercase',
    'text-align': 'center',
    'margin-top': '50px',
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
  return (
    <div className='col'>
      <input className={props.inp2?'inp inp2':'inp'} type={props.type} id={props.id} name={props.name} placeholder={props.label.toUpperCase()} />
    </div>
  );
}
function Message(props){
  return (
    <div>
      <textarea className='inp msg' id={props.id} name={props.name} placeholder={props.label.toUpperCase()} rows='4' />
    </div>
  );
}
function Submit(){
  const style = {
    display: 'block',
    margin: 'auto',
    color: 'white',
    backgroundColor: 'darkblue',
    border: 'none',
    borderRadius: '10%',
    padding: '10px'
  };
  return (
    <button style={style} type='submit'>Submit</button>
  );
}