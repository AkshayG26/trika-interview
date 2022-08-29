import axios from "axios";
import { useState } from "react";

export const Users = () => {
  const link = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((out) => setData(out))
    }).catch((err) => {
      console.log(err)
    })
    console.log(data)
  };

  return (
      <>
      <button onClick={getData}>Get data</button>
      {/* {data.map((user) => (
        <ul key={user.id}>
              <li>{user.name}</li>
              
        </ul>
      ))} */}
    </>
  );
};
