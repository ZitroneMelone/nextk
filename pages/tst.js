import {useState} from "react";

const Tst = () => {
    const [datenLogin, setDatenLogin] = useState({nameLogin: "", passwordLogin: ""})

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
                <input placeholder={"name"} name={"nameLogin"} onChange={handleChangeLogin}/>
                <input placeholder={"password"} name={"passwordLogin"} onChange={handleChangeLogin}/>
                <button onClick={handleLogin}>Anmelden</button>
            </div>
        );
    }

    export default Tst;