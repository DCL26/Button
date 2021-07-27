import React from"react";
import styled from"styled-components";

const Button = styled.button`
	background: #FAA998;
	color: white;
	border: none;
	padding: 15px;
	border-radius: 5px;
  font-size: 20px;
  a{text-decoration: none;}
`;

const SimpleButton = () => {
    return (
    <Button>
        <a href="https://app.karbook.com/">
          karbook
        </a> 
      </Button>
    )
}

export default SimpleButton;