import styled from "styled-components"
import { theme } from "../../../../styles/Theme"

const Contacts =styled.section`
position:relative;
`
const Form =styled.form`
max-width:540px;
width:100%;
display:flex;
flex-direction:column;
gap:16px;
margin: 0 auto;
align-items:center;

textarea {
  resize:none;
  height:150px;
}

`
const Field = styled.input`
width:100%;
background-color:${theme.colors.secondaryBg};
border:1px solid ${theme.colors.accent};
padding:7px 15px;

font-family:'Poppins',sans-serif;
font-wight:400;
font-size:12px;
letter-spacing:0.05em;

color:${theme.colors.font};
&::palaceholder{
  color:${theme.colors.font};
  text-transform:capitalize;
}

&:focus-visible{
  outline:1px solid ${theme.colors.accent}
}
`

export const S = {
  Contacts,
  Form,
  Field
}