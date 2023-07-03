import axios from "axios";
import React, { useState } from "react";

const Api = () => {
  const [users, setusers] = useState([]);
  const [users2, setusers2] = useState([]);
  const [city, setcity] = useState("Lagos");
  const [users3, setusers3] = useState([]);
  // let info = []
  let key = "67fe3dbd6f28d657f591dc7e70e1bc94";
  let endpoint = `http://jsonplaceholder.typicode.com/users`;
  let endpoint4 = `http://jsonplaceholder.typicode.com/posts`;
  let endpoint2 = `http://api.github.com/users`;
  let endpoint3 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  const getDataFour = () => {
    axios
      .get(endpoint4)
      .then((response) => {
        // console.log(response.data);
        setusers3(response.data)
      
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = () => {
    axios
      .get(endpoint)
      .then((response) => {
        // console.log(response.data);
        setusers(response.data);
        console.log(users);
        // info = response.data
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataTwo = () => {
    axios
      .get(endpoint2)
      .then((response) => {
        console.log(response.data);
        setusers2(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataThree = () => {
    axios
      .get(endpoint3)
      .then((response) => {
        console.log(response.data);
        setcity("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={getData}>Get Data</button>
      <button onClick={getDataTwo}>Get Data 2</button>
      <button onClick={getDataFour}> Get Data 4</button>
      <input
        type="text"
        placeholder="city name"
        onChange={(e) => setcity(e.target.value)}
        value={city}
      />
      <button onClick={getDataThree}>Get weather</button>
      {users.map((item) => (
        <div key={item.id}>
          <small>{item.id}</small>
          <p>
            <b>Name:</b> {item.name}
          </p>
          <address>
            <b>Address:</b> {item.address.street}; {item.address.city}
          </address>
          <p>
            <b>Phone:</b> {item.phone}
          </p>
          <p>
            <b>Website:</b> {item.website}
          </p>
        </div>
      ))}
      {users2.map((item) => (
        <div key={item.id}>
          <small>{item.id}</small>
          <p>
            <b>Name:</b> {item.login}
          </p>
          <p>
            <b>Image:</b> <br />{" "}
            <img src={item.avatar_url} width={100} alt="" />
          </p>
        </div>
      ))}
     
        <table border={"1"}>
            <tr>
    <th>S/N</th>
    <th>Title</th>
    <th>Body</th>
            </tr>

        </table>
        
          
       
     
    </>
  );
};

export default Api;
