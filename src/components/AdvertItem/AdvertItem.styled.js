import styled from "styled-components";
export const AdvertItemStyle = styled.li`
display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  position: relative;

  & img {
    border-radius: 14px;
    width: 274px;
    height: 268px;
    margin-bottom: 14px;
    object-fit: cover;}

.itemStylePrice{
  display: flex;
  justify-content: space-between;
         align-items: center;
      font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #121417;
margin-bottom: 14px;
}
    .itemStyleYear{
      display: flex;
      align-items: center;
      gap: 5px;
      font-family: var(--font-family);
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #121417;
    }

    .blueStyle{
      color: #3470ff;
    }

.itemStyleDiscr{
justify-content: -between;
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: rgba(18, 20, 23, 0.5);
margin-bottom: 4px;
    };

    /* .itemNone{
      display: none;
    } */

    .btnLeanMore {
      border-radius: 12px;
padding: 12px 99px;
margin-top: 28px;
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
.btnLeanMore:hover {
  border-color:  #0b44cd;
}
.btnLeanMore:focus,
.btnLeanMore:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
.heart{
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border-radius: none;
  color: #fff;
}
.heart:hover{
  border-radius: none;
}
/* .heartBlue{
  background-color: #3470ff;
} */

`;