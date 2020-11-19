import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <React.Fragment>
   <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

 <h1 className="title red">Wael</h1>

 <br />
    <div className="title red"> Inside SRC</div>
    <br/>
 <img src={logo} />

 <br />
 <div className="title red"> Inside Public</div>
 <br/>
 <img src="/logo192.png" />

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
</React.Fragment>
  );
}

export default App;
