import styled from "styled-components";

export const StyleHomePage = styled.div`
width: 100%;
    margin: 0 auto;
    padding-bottom: 112px; 
    background-color: #2e2f42;
    background-image: linear-gradient(rgba(46, 47, 66, 0.4),
    rgba(46, 47, 66, 0.4)),
    url('/src/Img/car.jpg');
    background-repeat: no-repeat;
    background-size: cover ;
    background-position: center;
    

.titleHP {
    display: flex;
    justify-content: center;
    /* margin-left: auto;
    margin-right: auto; */
    font-size: 70px;
    color: rgb(245, 245, 220);
    text-shadow: 4px 4px 6px #00006a;
}
.textHP_h {
    justify-content: center;
    align-items:center;
    width: 100%;
    font-size: 30px;
    display: flex;
    margin-left: 50px;
    
    color: rgb(245, 245, 220);
    text-shadow: 4px 4px 6px #00006a;
  }
.textHP {
    width: 1350px;
    font-size: 30px;
    display: flex;
    margin-left: 50px;
    color: #000000;
    text-shadow: 2px 2px 4px #ffffff;
  }
`;