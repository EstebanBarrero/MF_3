import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";

import "./styles/Counter.css";

const Success = styled.span`
    color: #09fd11;
`;

const Error = styled.span`
    color: #a31837;
`;

const HomePage = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{ 
            border: '10px solid #DDC07C', 
            margin: 100, 
            padding: 50, 
            height: '30vh'
        }} className="Counter-container">
            <h1>
                Counter:{" "}
                {counter < 0 ? <Error>{counter}</Error> : <Success>{counter}</Success>}
            </h1>
            <Button onClick={() => setCounter(counter + 1)} text = "+1"/>
            <Button onClick={() => setCounter(counter - 1)} text = "-1"/>
        </div>
    );
};

export default HomePage;