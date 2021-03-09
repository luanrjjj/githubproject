import styled from 'styled-components'
import  mixins from '../../styles/mixins';
import  media from '../../styles/media';
import  theme from '../../styles/theme';


const { colors, fonts } = theme;



export const Section = styled.section `
background:rgb(26,30,34);
background-color:rgb(26,30,34);
margin-left:0;
margin-right:0;
width:1360px;

`

export const UserInfoStyles = styled.div `

.avatar {
    ${mixins.flexCenter}
    margin-top:8rem;
    border:0.5rem solid ${colors.blue};
    border-radius:100%;
    width:150px;
    height:150px;
    img {
        border-radius:100%
    }
}
${mixins.flexCenter};
flex-direction:column;
margin-bottom:30px;
text-align:center;

${media.bp600`
padding-top:4rem;`}

h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${colors.offWhite};
    ${media.bp400`
      font-size: 2rem;
    `};
  }
  h2 {
    font-family: ${fonts.mono};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    a {
      color: ${colors.blue};
    }
  }
  h3 {
    color: ${colors.lightblue};
    margin-top:8rem;
  }
  a {
    color: ${colors.lightestBlue};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }


`
export const Graphs = styled.div `
margin-top:150px;
`