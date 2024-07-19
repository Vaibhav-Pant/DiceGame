import React from 'react'
import styled from 'styled-components'

function rules() {
  return (
    <>
        <BOX>
            <h2>How to play dice game :-</h2>
            <div>
                <div>1. Select any number</div>
                <div>2. Click on dice image</div>
                <div>3. After clicking on dice if selected number is equal to dice number, you will get same point as displayed on dice and if you get wrong guess then 2 point will be deducted.</div>
            </div>

        </BOX>
      
    </>
  )
}

export default rules


const BOX = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #FBF1F1;
    min-width: 20%;
    max-width: 50%;
    padding: 10px 30px;
    margin: 40px auto 30px auto;
    white-space: pre-line;
    border: 2px solid black;
    line-height: 25px;



`