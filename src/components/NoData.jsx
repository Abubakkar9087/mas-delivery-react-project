import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import noData from './no-data.json'; // Adjust the path as needed
import styled from 'styled-components';

const Wrapper = styled.section`
.no-data{
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
`;
const NoData = () => {
  return (
    <Wrapper>
    <div>
    <div className="no-data">
      <Player
        autoplay
        loop
        src={noData}
        style={{ height: '300px', width: '300px' }}
      />
          <h2>No Data Found</h2>
        </div>

    </div>
    </Wrapper>
  );
};

export default NoData;
