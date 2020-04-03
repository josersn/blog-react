import styled from 'styled-components';

const color = {
    primary: "#024959",
    second: "#398CBF"
}

export const Container = styled.div`
  width: 100%;
  max-width: 1420px;
  margin: 0 auto;
  height: 28%;
`;
export const Top = styled.div`
    background: ${color.primary};
    height: 40px;
    color: #cecece;
    display: flex;
    align-items: center;
    padding: 0 60px;
    justify-content: space-between;
   
   @media (max-width: 768px) {
    display: none;
  }
`;
export const Middle = styled.div`
    /* background: ${color.second}; */
    height: 120px;
    padding: 0 60px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Bottom = styled.header`
    background: ${color.primary};
    height: 40px;
    padding: 0 60px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    nav{
        ul{
            display: flex;
            li{
                margin-left: 6px;
                a{
                color: ${props => props.colored ? "#000000" : "#fff"};
                font-weight: bold;
                }
            }
        }
    }
    
    nav{
        svg{
            margin-right: 5px;
        }
    }
  
`;
export const Search = styled.div`
    display: flex;
    justify-content:center;

    input{
        margin-left: 8px;
        background: transparent;
        border: 0;
        color: #fff;
    }

`