import styles from '../styles/Home.module.css'
import {useState} from "react";

export default function Home() {
  const [state, setState] = useState([])
  const [daten, setDaten] = useState({name: "", password: ""})
  const [datenLogin, setDatenLogin] = useState({nameLogin: "", passwordLogin: ""})

  function handleList() {
    fetch('http://localhost:3000/api/hello')
        .then(response => response.json())
        .then(data => setState(data));
  }

  async function handleAdd() {
    const rawResponse = await fetch('http://192.168.178.28:3000/api/hello', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(daten)
    });
    const content = await rawResponse.json();

    console.log(content);
  }

  function handleChange(e) {
    setDaten({...daten, [e.target.name]: e.target.value})
    //setDaten(e.target.value)
  }

    function handleChangeLogin(e) {
        setDatenLogin({...datenLogin, [e.target.name]: e.target.value})
        console.log(datenLogin)
    }

    async function handleLogin() {
        const rawResponse = await fetch('http://192.168.178.28:3000/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datenLogin)
        });
        const content = await rawResponse.json();

        console.log(content);
    }

    return (
      <div>
        <button onClick={handleList}>Copy</button>
        <ul>{state.map((ele, key) => {
          return <li key={key}>{ele.name + " " + ele.password}</li>
        })}</ul>
        <input placeholder={"name"} name={"name"} onChange={handleChange}/>
        <input placeholder={"password"} name={"password"} onChange={handleChange}/>
        <button onClick={handleAdd}>Register</button><br/><br/>
          <input placeholder={"name"} name={"nameLogin"} onChange={handleChangeLogin}/>
          <input placeholder={"password"} name={"passwordLogin"} onChange={handleChangeLogin}/>
          <button onClick={handleLogin}>Anmelden</button>
      </div>)
}
