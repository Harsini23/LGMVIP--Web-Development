import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./Loading";
import './mycomponents/Footer.css';
import logo from "./mylogo.jpg";

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
           
            style={{height:"150px",width:"150px"}}
          /><br/><br/>
          <h4>{myuser.first_name}</h4>
          <h4>{myuser.last_name}</h4>
          <h4>{myuser.email}</h4>
          </div><br/>
          <button 
          
          style={{padding:"20px",backgroundColor:"#2C394B",color:"white"}}>
            Get to know more</button>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <nav className="navbar " style={{ backgroundColor: "#11324D",padding:"30px",margin:"30px" }}>
        <img src={logo} style={{width:"100px",height:"100px"}} ></img>
        <h1 style={{color:"white"}}>Harsini</h1>
        <input style={{padding:"10px"}}
            type="text"
            id="header-search"
            placeholder="Search Here"
        />
        <button
          className="btn "
          style={{ backgroundColor: "#D5EEBB" }}
          onClick={display}>
          Get Users</button>
      </nav>
      <body style={{backgroundColor:"#87A8A4",height:"2000px",margin:"20px"}}>
        <div>
          <h1 style={{padding:"35px"}}>Welcome to Home Page</h1><hr style={{width:"2px"}} ></hr>

      {loading ? <Loading /> : null}
      <div className="container" style={userStyle}>
        {loading ? null : cardData.map(Card)}
      </div>
        </div>
      </body>

    </div>
  );
};


const userStyle = {
  display: "grid",
  gridGap: "2rem",
  gridTemplateColumns: "repeat(3,1fr)",
  marginTop:"30px",
  marginBottom: "30px",
};


export default App;