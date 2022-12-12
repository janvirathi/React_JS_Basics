import React from "react";


function App(){

  const mycss = {
    color: 'blue',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'sans-serif',
    margin: '80px'
}

const myc = { }

let curDate= new Date();
curDate =curDate.getHours();
let greet='';

if(curDate>=1 && curDate<12){
    greet='Good Morning';
    myc.color='Green';
}else if(curDate>=12 && curDate<19){
    greet =' Good Afternoon';
    myc.color='Orange';
}else{
    greet='Good Night';
    myc.color='Black';
}
return(
  <>
        {/* <h1 style={mycss}>Hey Beautiful {helloto}!</h1>
        <h1>Hi I am { fname + ' '+ lname } </h1>
        <h2>Today's Date is {curr} </h2>
        <h3>Current Time is {time} </h3> */}
        <div>
            <h1>Hellowww Gorgeous, <sapn style ={myc}>{greet}</sapn>
            </h1>
        </div>
    </>
);

}

export default App;























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
