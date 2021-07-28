import React from"react";
import styled from"styled-components";

const Button2 = styled.button`
	background: #F5534E;
	color: white;
	border: none;
	padding: 15px;
	border-radius: 5px;
  font-size: 20px;
  a{text-decoration: none;}
`;

const SimpleButton2 = () => {
    return (
    <Button2>
        <a href="https://www.youtube.com/channel/UCMRR_C7n2fx7eies_SJisng">
          Git
        </a> 
      </Button2>
    )
}

export default SimpleButton2;