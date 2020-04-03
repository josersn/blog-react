import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1420px;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 71%;
`;
export const Principal = styled.div`
  background: red;
  width: calc(50% - 5px);
  height:100%;
  
`;
export const Second = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(50% - 5px);
    height:100%;
  
`;
export const Frame = styled.div`
  background: yellow;
  height: calc(50% - 5px);
`;
