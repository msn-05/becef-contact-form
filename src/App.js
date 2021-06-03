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
      <Row>
        <Input id='email' name='email' label='E-mail' type='email' />
        <Input id='subject' name='subject' label='Subject' type='text' />
      </Row>
      <Message id='msg' name='msg' label='Message' />
      <br />
      <div className='row' style={{width:'90%',margin:'auto',justifyContent:'flex-start'}}>
        <div className='social'>
          <h2>OR HERE</h2><br />
          <h3>Email:</h3><br />
          <div>example@mail.com</div><br />
          <div>example@mail.com</div><br />
          <div>example@mail.com</div><br />
        </div>
        <div className='social'>
          <h2>Get Social</h2>
          <a href='#' className='fa fa-twitter'></a>
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
  return (
    <div className='col'>
      <label for={props.id}>{props.label.toUpperCase()}:</label>
      <input className='inp' type={props.type} id={props.id} name={props.name} />
    </div>
  );
}
function Message(props){
  const style = {
    'margin': '40px auto',
    'width': '90%'
  };
  return (
    <div style={style}>
      <label for={props.id}>{props.label.toUpperCase()}:</label>
      <textarea className='inp msg' id={props.id} name={props.name} rows='3' />
    </div>
  );
}