import React, {useEffect, useState} from "react";
import styles from "../../styles/Games.module.css"


export default function Tiktaktoe() {
    const [player, setPlayer] = useState(true);
    const [score, setScore] = useState([])
    const [turn, setTurn] = useState(0)
    const [state, setState] = useState([])


    function handleClick(event) {
        if (player) {
            event.target.innerHTML = "x"
            addScore(event.target.id)
            checkWin(event)
        } else {
            event.target.innerHTML = "o"
            addScore(event.target.id)
            checkWin(event)
        }
        setTurn(turn+1)
        setPlayer(!player)
    }

    function addScore(e) {
        setScore([...score, {"turn": turn, "feld": e, "player": player}])
    }

    function checkWin(e) {
        const STREAKS = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < STREAKS.length; i++) {
            if (document.getElementById(STREAKS[i][0]).innerHTML !== "" &&
                document.getElementById(STREAKS[i][0]).innerHTML === document.getElementById(STREAKS[i][1]).innerHTML &&
                document.getElementById(STREAKS[i][1]).innerHTML === document.getElementById(STREAKS[i][2]).innerHTML) {
                handleWin(document.getElementById(STREAKS[i][0]).innerText)
            }
        }
    }

    function handleWin(winner) {
        console.log(winner)
        // feld disablen
        // Meldung über sieger
        document.getElementById("row1").className = styles.rowWin
        document.getElementById("row2").className = styles.rowWin
        document.getElementById("row3").className = styles.rowWin
    }

    function handleReturn(event) {
        console.log(score)

        for (let i = 0; i < score.length; i++) {
            if (score[i][0] !== undefined && score[i][0] > event.target.innerHTML - 1) {
                document.getElementById(score[i][1]).innerHTML = ""
                score[i][0] = undefined
                score[i][1] = undefined
                score[i][2] = undefined
            }
        }
        document.getElementById("row1").className = styles.row
        document.getElementById("row2").className = styles.row
        document.getElementById("row3").className = styles.row
    }

    return (
        <>
            <h1>TIK TAK TOE</h1>
            <div id="spieler">{player ? "Player X, ur Turn" : "Player O, ur Turn"}</div>
            <div className={styles.field} id="field">
                <div className={styles.row} id="row1">
                    <div onClick={handleClick} className={styles.colum} id="0"></div>
                    <div onClick={handleClick} className={styles.colum} id="1"></div>
                    <div onClick={handleClick} className={styles.colum} id="2"></div>
                </div>
                <div className={styles.row} id="row2">
                    <div onClick={handleClick} className={styles.colum} id="3"></div>
                    <div onClick={handleClick} className={styles.colum} id="4"></div>
                    <div onClick={handleClick} className={styles.colum} id="5"></div>
                </div>
                <div className={styles.row} id="row3">
                    <div onClick={handleClick} className={styles.colum} id="6"></div>
                    <div onClick={handleClick} className={styles.colum} id="7"></div>
                    <div onClick={handleClick} className={styles.colum} id="8"></div>
                </div>
            </div>
            <br/>
            <button id="button1" disabled={!state[0]} onClick={handleReturn}>1</button>
            <button id="button2" disabled={!state[1]} onClick={handleReturn}>2</button>
            <button id="button3" disabled={!state[2]} onClick={handleReturn}>3</button>
            <button id="button4" disabled={!state[3]} onClick={handleReturn}>4</button>
            <button id="button5" disabled={!state[4]} onClick={handleReturn}>5</button>
            <button id="button6" disabled={!state[5]} onClick={handleReturn}>6</button>
            <button id="button7" disabled={!state[6]} onClick={handleReturn}>7</button>
            <button id="button8" disabled={!state[7]} onClick={handleReturn}>8</button>
            <button id="button9" disabled={!state[8]} onClick={handleReturn}>9</button>
            <button id="win" onClick="checkWin()">win</button>
            <button onClick="handleServer()">s</button>
            <img src="" id="fetch"/>
            <button onClick={()=> console.log(score)}>www</button>
        </>
    )
}