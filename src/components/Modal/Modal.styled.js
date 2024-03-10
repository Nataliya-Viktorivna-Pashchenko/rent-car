import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props =>
    props.specialLook ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
  width: 100vw;
     height: 100vh;
  &:hover {
    cursor: pointer;
  }
  .modal {
    padding: 40px;
    max-width: 461px;
    width: 100%;
    min-height: 1px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: auto;
    }
  }

  .closeBtn {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
  }
  .imgModal{
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    border-radius: 14px;
width: 461px;
height: 248px;
background: #f3f3f2;
justify-content: center;
  };
  .itemStylePrice{
  display: flex;
  justify-content: space-between;
       align-items: center;
      font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #121417;
}
    .itemStyleYear{
      width: 275px;
      align-items: center;
      gap: 5px;
font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 133%;
color: #121417;
margin-bottom: 8px;}
p {
  margin: 0;
}

    .modelStyle{
      color: #3470ff;
    }
  
.btnLeanMore {
     border-radius: 12px;
padding: 12px 50px;
width: 168px;
margin-top: 24px;
height: 44px;
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;
  background-color: #3470ff;
cursor: pointer;
  transition: border-color 0.25s;
}

.itemStyleDiscr{
      align-items: center;
      gap: 5px;
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: rgba(18, 20, 23, 0.5);
margin-bottom: 8px;
}
.itemStyle_Discr{
      align-items: center;
      gap: 5px;
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: rgba(18, 20, 23, 0.5);
margin-bottom: 8px;
}
.titleDiscr{
  margin-bottom:14px;
  font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 143%;
color: #121417;
}
 
    
    .discrStyle {
      margin-top: 14px;
      margin-bottom: 24px;
      font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 143%;
color: #121417;
    }
    .rentalConditional{
      border-radius: 35px;
padding: 7px 14px;
width: 133px;
height: 32px;
background: #f9f9f9;
margin-right:8px;

font-family: "Montserrat", sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 150%;
letter-spacing: -0.02em;
color: #363535;
    }
  .rental_Conditional{
    margin-bottom: 8px;
  }
  .modelStyle{
    font-weight: 600;
color: #3470ff;
  }
  .btnRental{
    border-radius: 12px;
padding: 12px 50px;
width: 168px;
height: 44px;
background: #3470ff;
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;
  }
   .btn_Rental{
    border-radius: 12px;
padding: 12px 50px;
background: #3470ff;
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;
  text-decoration: none;
  }
  .a{
    height: 24px;
  }
`;