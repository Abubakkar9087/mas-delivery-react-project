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


  p{
    padding: 10px;
    font-weight: 700;
    font-size: 20px;
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