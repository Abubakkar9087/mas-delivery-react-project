import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
/* banner start */
.pagebanner{
  width: 100%;
  height: 35vh;
  background:linear-gradient(180deg, #cbcbcb 50%, #afafaf 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(0 0 75);
  position: relative;
  background-image: url("./pagebanner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow:inset 0px 0px 0px 100rem #0000008a;


  p{
    padding: 10px;
    font-weight: 700;
    font-size: 2em;
    letter-spacing: 2px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: white;
    text-shadow: 2px 2px 2px black;
  }

}

/* banner end */`;


function PageBanner() {
  return (
    <Wrapper>
        <div className="pagebanner">
            <p>{`Home / ${window.location.pathname.split('/')[1]}`}</p>
        </div>
    </Wrapper>
  )
}

export default PageBanner;