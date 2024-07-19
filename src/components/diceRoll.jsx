import styled from 'styled-components'

function diceRoll(props) {

    return (
        <>
            <FRAME>
                <div className="first">
                    <button onClick={props.RollDice}>
                        <img src={`./public/images/dice_${props.currentDice}.png`} alt="dice" />
                    </button>
                    <div>Click on Dice to Roll</div>
                </div>
                <div className="btns">
                    <button onClick={props.reset}>Reset Score</button>
                    <button
                        style={{ backgroundColor: "#14121392", color: "white" }}
                        onClick={props.toggle}>
                        {props.showRules ? "Hide" : "Show"} Rules
                    </button>
                </div>
            </FRAME>

        </>
    )
}

export default diceRoll;


const FRAME = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .first{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: black;
        font-size: 20px;
    }

    .first button{
        position: relative;
        background-color: white;
        border: 0;
        width: 200px;
        height: 200px;
        cursor: pointer;
    }
    .first img{
        width: 200px;
        height: 200px;        
    }

    .btns{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .btns button{
        padding: 10px 50px;
        border: 2px solid #1690e7;
        background-color: white;
        border-radius: 3px;
        font-size: 14px;
        cursor: pointer;
    }

`
