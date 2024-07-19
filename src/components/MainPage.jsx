import styled from "styled-components"

function startGame({toggle}) {
    return (
        <Container>
            <img src="./public/images/dices1.png" alt="main_img" />
            <div className="box">
                <h1>DICE GAME</h1>
                <div>
                    <Button onClick={toggle}>Play Now</Button>
                </div>
            </div>
        </Container>
    );
}

export default startGame;

const Container = styled.div`

margin: auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 50px;
margin: 100px 40px;

img{
    width: 500px;
    height: 450px;
}

.box div{
    display: flex;
    justify-content: flex-end;
}

.box h1{

    font-size: 80px;
    font-weight: 600;
    white-space: nowrap;
    text-decoration: underline;
}

`

const Button = styled.button`
background-color: black;
padding: 5px 50px;
color: white;
font-weight: 600;
border: 2px solid black;
border-radius: 5px;
cursor: pointer;

`
