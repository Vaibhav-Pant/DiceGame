import styled from "styled-components";

function gameHeader(props) {

    const diceValue = [1, 2, 3, 4, 5, 6];

    return (
        <HEADER>

            <div className="score">
                <h1>{props.score}</h1>
                <div>Total Score</div>
            </div>
            <div className="diceNum">
                <div className="warning">{props.error}</div>
                <div className="btns">
                    {
                        diceValue.map((value, index) => (
                            <BOX
                                key={index}
                                onClick={() => props.setSelectedNumber(value)}
                                isselected={(value == props.selectedNumber) ? true : undefined}
                            >
                                {value}
                            </BOX>
                        ))
                    }
                </div>
                <div>Select Number</div>

            </div>

        </HEADER>
    )
}

export default gameHeader;



const HEADER = styled.div`
    /* background-color: aqua; */
    padding: 20px 100px;
    /* max-height: fit-content; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    .score{
        /* background-color: pink; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .score h1{
        /* background-color: red; */
        font-size: 80px;
        margin: 0px;
    }
    .score div{
        /* position: absolute;
        bottom: 0px; */
        white-space: nowrap;
        font-weight: 600;
    }


    
    .diceNum{
        /* background-color: green; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 10px;
        font-weight: 600;
        /* width: 40%; */
    }

    .btns{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    

    .warning{
        color: lightcoral;
        font-size: 18px;
        /* visibility: ${(props) => props.isselected ? "false" : "true"}; */
    }

`

const BOX = styled.div`
     font-weight: 600;
        padding: 13px 13px;
        border: 1px solid black;
        cursor: pointer;
        color: ${(props) => (props.isselected ? "white" : "black")};
        background-color: ${(props) => (props.isselected ? "black" : "white")};
`