import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./Loading";
import './mycomponents/Footer.css';
import logo from "./images.jpeg";


const App = () => {
  const [cardData, setData] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);


  const Data = async () => {
    if (visibility) {
      const res = await axios.get("https://reqres.in/api/users?page=1");
      const delaytime = 5000;
      await new Promise((resolve) => setTimeout(resolve, delaytime));
      setData(res.data.data);
    }
    setLoading(false);
  };

  const display = () => {
    setVisibility(true);
    setLoading(true);
  };


  useEffect(() => {
    if (visibility) {
      Data();
    }
  }, [loading]);


  const Card = (myuser) => {
    if (loading) return Loading;
    else {
      return (
       
        <div className="displaybox"><br/><br/>
        <div>
          
          <img
            src={myuser.avatar}
           
            style={{height:"150px",width:"150px",border:"2px solid black"}}
          /><br/><br/>
          <h4 style={{backgroundColor: "#FFDEDE",margin:"15px",padding:"4px",borderRadius:"30px"}}>{myuser.first_name}</h4>
          <h4 style={{backgroundColor: "#FFDEDE",margin:"15px",padding:"4px",borderRadius:"30px"}}>{myuser.last_name}</h4>
          <h4 style={{backgroundColor: "#FFDEDE",margin:"15px",padding:"4px",borderRadius:"30px"}}>{myuser.email}</h4>
          </div><br/>
          <button 
          className="btn "
          style={{padding:"20px",backgroundColor:"#2C394B",color:"white",border:"2px solid black",borderRadius:"30px"}}>
            Get to know more</button>
        </div>
      );
    }
  };

  return (
    <div className="App" >
      <nav className="navbar " style={{ backgroundColor: "#11324D",padding:"30px",margin:"30px" }}>
        <img src={logo} style={{width:"150px",height:"150px",padding:"20px"}} ></img>
        <h1 style={{color:"white"}}>Harsini</h1>
        <input style={{padding:"10px"}}
            type="text"
            id="header-search"
            placeholder="Search Here"
        />
        <button
          className="btn"
          style={{ backgroundColor: "#FDF5CA" }}
          onClick={display}>
          Get Users</button>
      </nav>
      <body className="background" style={{padding:"50px",margin:"20px"}}>
        <div>
          <h1 style={{padding:"35px",color:"white",backgroundColor:"#2C394B"}}>Welcome to Home Page</h1><hr style={{width:"2px"}} ></hr>

      {loading ? <Loading /> : null}
      <div className="container" id="userStyle">
        {loading ? null : cardData.map(Card)}
      </div>
        </div>
      </body>

    </div>
  );
};






export default App;