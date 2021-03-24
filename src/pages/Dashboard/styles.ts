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
width:100%;
`

export const UserInfoStyles = styled.div `
${mixins.flexCenter};
flex-direction:column;
margin-bottom:30px;
text-align:center;

${media.bp600`
padding-top:4rem;`}


.avatar {
    ${mixins.flexCenter}
    margin-top:1.5rem;
    border:0.5rem solid ${colors.blue};
    border-radius:100%;
    width:150px;
    height:150px;
    
    img {
    border-radius:100%;
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  
    }
}


h1 {
    font-size: 2.5rem;
 
    color: ${colors.offWhite};
    ${media.bp400`
      font-size: 2rem;
     
    `};
  }

  h2 {
    font-family: ${fonts.mono};
    font-size: 1.5rem;
    margin-top:15px;

    a {
      color: ${colors.blue};
      text-decoration:none;
    }
  }
  h3 {
    color: ${colors.lightblue};
   
  }
  a {
    color: ${colors.lightestBlue};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  
  .info {
    ${mixins.flexCenter};
    color:${colors.lightblue};
    ${media.bp600`
      display: block;
      
    `};
  
  &__item {
    ${mixins.flexCenter};
    margin: 0 0.8rem 0.5rem;
    white-space:nowrap;
  }
  }

  .icon {
    margin: 0 0.25rem 0.25rem;

  }


.stats{

  display:grid;
  grid-template-columns:repeat(3,minmax(100px,150px));
  grid-gap:0.5rem;
  justify-content:center;
  margin-top:2rem;
  
  &__item {
    ${mixins.flexCenter};
    flex-direction:column;
    background-color:${colors.darkGrey};
    padding:1rem;
    border-radius:0.25rem;
    text-align:center;
    ${media.bp400`
    padding:1rem 0.5rem
    `}
  }

};
.num {
        color: ${colors.offWhite};
        font-size: 1.5rem;
        ${media.bp400`
          font-size: 1rem;
        `};
      }

      .num-label {
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 1px;
        margin-top: 0.75rem;
        color: rgba(200, 225, 255, 0.7);
        ${media.bp400`
          font-size: 0.5rem;
        `};
      }
`

export const UserRepo = styled.div `

`
export const Graphs = styled.div `

`
