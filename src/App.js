import React, {useRef, useState} from 'react';
import MuestraValor from './components/muestra-valor'

function App() {

const largo = useRef(null);
const ancho = useRef(null);
const [res, setResultado] = useState(null);
// const [res, modificaResultado] = useState(null);

const calcular = (operacion)=>{
  if(operacion ==='suma'){
  setResultado(largo.current.value+ancho.current.value);
  }else if(operacion ==='resta'){
  setResultado(largo.current.value-ancho.current.value);
  }else if(operacion === 'multi'){
  setResultado(largo.current.value*ancho.current.value);
  }else{
  setResultado(largo.current.value/ancho.current.value);
  }
  console.log(calcular)
  }

// const suma = _ => {
//   modificaResultado(largo.current.value + ancho.current.value)
//   console.log(res)
// }

// const resta = _ => {
//   modificaResultado(largo.current.value - ancho.current.value)
//   console.log(res)
// }

// const multi = _ => {
//   modificaResultado(largo.current.value * ancho.current.value)
//   console.log(res)
// }

// const divide = _ => {
//   modificaResultado(largo.current.value / ancho.current.value)
//   console.log(res)
// }

  return (
    <div>
     
      <div className="container">
      <input type="text" ref={largo} style={{marginLeft: '6rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'20%', textAlign:'center'}}/>
      <h2 style={{color:'red', fontSize:'4rem', textAlign:'center', border: '1px solid red', borderRadius: '15px', width:'10%', margin:'auto'}}>+</h2>
      <input type="text" ref={ancho} style={{margin: '1rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'20%', textAlign:'center'}}/>

      <button onClick={calcular.suma} style={{margin: '1rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'30%'}}>Calcular</button>
      
      </div>

      <div className="container">
      <input type="text" ref={largo} style={{marginLeft: '6rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'20%', textAlign:'center'}}/>
      <h2 style={{color:'red', fontSize:'4rem', textAlign:'center', border: '1px solid red', borderRadius: '15px', width:'10%', margin:'auto'}}>-</h2>
      <input type="text" ref={ancho} style={{margin: '1rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'20%', textAlign:'center'}}/>

      <button onClick={calcular.resta} style={{margin: '1rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'30%'}}>Calcular</button>
      
      </div>

      <div className="container">
      <input type="text" ref={largo} style={{marginLeft: '6rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'20%', textAlign:'center'}}/>
      <h2 style={{color:'red', fontSize:'4rem', textAlign:'center', border: '1px solid red', borderRadius: '15px', width:'10%', margin:'auto'}}>*</h2>
      <input type="text" ref={ancho} style={{margin: '1rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'20%', textAlign:'center'}}/>

      <button onClick={calcular.multi} style={{margin: '1rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'30%'}}>Calcular</button>
      
      </div>

      <div className="container">
      <input type="text" ref={largo} style={{marginLeft: '6rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'20%', textAlign:'center'}}/>
      <h2 style={{color:'red', fontSize:'4rem', textAlign:'center', border: '1px solid red', borderRadius: '15px', width:'10%', margin:'auto'}}>/</h2>
      <input type="text" ref={ancho} style={{margin: '1rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'20%', textAlign:'center'}}/>

      <button onClick={calcular.divide} style={{margin: '1rem', padding: '1rem', fontSize: '4rem', borderRadius: '15px', width:'30%'}}>Calcular</button>
      
      </div>

      <MuestraValor MuestraElValorAnda={res}/>
    </div>
  );
}

export default App;
