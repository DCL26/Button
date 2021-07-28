import React from"react";
import styled from"styled-components";

const Button2 = styled.button`
	background: #B8E3F6;
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
        <a href="https://github.com/DCL26/Button">
          Git
        </a> 
      </Button2>
    )
}

export default SimpleButton2;