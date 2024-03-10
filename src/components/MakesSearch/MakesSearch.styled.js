import styled from 'styled-components';

export const StyleSearch = styled.form`
display: flex;
justify-content: center;
margin: 50px 0 50px 0;
gap: 18px;
.labelStyle{
    display: flex;
    flex-direction: row;
    font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
color: #8a8a89;
}

 /* & .react-select {
    margin-left: auto;
    width: 200px;
    background-color: transparent;
    color: #fff;
    &__control {
      cursor: pointer;
      background-color: transparent;
      width: 200px;
      border: none;
      color: white !important;
    }
    &--menu-is-open {
      background-color: transparent;
    }
    &__indicator-separator {
      display: none;
    }
    &__menu {
      background-color: rgba(22, 31, 55, 1);
      border-radius: 20px;
    }
    &__option {
      cursor: pointer;
      &--is-focused {
        color: white;
        background-color: transparent;
      }
    }
    &__single-value {
      color: white;
    } */
  /* } */

.selectStyle{
    border-radius: 14px;
padding: 14px 89px 14px 18px;
width: 224px;
height: 48px;
background: #f7f7fb;
}
.btnSearch{
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
 
`;