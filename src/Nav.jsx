import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const Wrapper = styled.section`

div{
width: 100%;
margin: 0 auto;
color: green;
background: blue;
}
`;
const Nav = () => {

    useState
    const [num, setNum] = useState(0);
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    const [species, setSpecies] = useState();

    useEffect(() => {

        // alert('You choose ' + num +' '+ name+ ' ' + moves + ' value');
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);     
            console.log(res.data);
            setName(res.data.name);
            setMoves(res.data.moves.length);
            setSpecies(res.data.weight);
        }
        getData(); 
    });
    
    return (
        <Wrapper>
            <h1>You Choose <span style={{ color: "red" }}>{num}</span>  value</h1>
            <h1>The name is <span style={{ color: "red" }}> {name}</span> </h1>
            <h1> The moves are <span style={{ color: "red" }}>{moves}</span> </h1>
            <h1> The species is <span style={{ color: "red" }}>{species}</span> </h1>
            <select name="" id="" value={num} onChange={(e) => setNum(e.target.value)}>
                <option value="">Select an option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="25">25</option>

            </select>
        </ Wrapper>
    );
};

export default Nav;