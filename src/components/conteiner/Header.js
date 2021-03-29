import React from 'react';

// export const Header1 = () => {

//     return (

//         <div className="jumbotron text-center" style={{ "marginBottom": 0 }}>
//             <h1> {titulo} </h1>
//             <p> {parrafo} </p>
//         </div>

//     );
// }

function Header1 ({titulo, parrafo}) {

    return (
        
    <div className="jumbotron text-center" style={{"marginBottom":0, "background":"#023B6D", "color":"white"}}>

    <h1> {titulo} </h1>
    <p> {parrafo} </p> 
   </div>
   
    );
}

export default Header1;