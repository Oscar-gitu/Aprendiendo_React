import React from 'react';
import './App.css';


function HelloWorld(props){
  console.log(props)
  return(
    
    <div id='border'>
      {props.mytext}
    </div>
  )
}

const App2 = () => <div><HelloWorld/> </div>

function App() {
  return (
    <div >
      Este es mi componente 
      <HelloWorld mytext = "hola"/>
      <HelloWorld mytext = "hola2"/> 
    </div>
  );
}



export default App;
