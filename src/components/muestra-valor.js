import React from 'react';

const MuestraValor = (props) => {
    return (  
        <>
<h2 style={{color:'red', fontSize:'8rem', textAlign:'center', border: '1px solid red', borderRadius: '15px', width:'40%', margin:'auto'}}>{props.MuestraElValorAnda}</h2>
        </>
    );
}
 
export default MuestraValor;