import {useState} from "react";

export default function Home() {

    const [state, setState] = useState([])
    const [daten, setDaten] = useState({name: "", password: ""})

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
        console.log(daten)
        //setDaten(e.target.value)
    }

    return (
        <div>
            <button onClick={handleList}>Copy</button>
            <ul>{state.map((ele, key) => {
                return <li key={key}>{ele.name + " " + ele.password}</li>
            })}</ul>
            <input placeholder={"name"} name={"name"} onChange={handleChange}/>
            <input placeholder={"password"} name={"password"} onChange={handleChange}/>
            <button onClick={handleAdd}>Add</button>
        </div>)
}