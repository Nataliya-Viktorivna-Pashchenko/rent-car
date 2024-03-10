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

.selectStyle{
    border-radius: 14px;
width: 224px;
height: 48px;
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