import React from 'react';
import styled from 'styled-components';
import facebook from "../images/social/facebook.svg"
import linkedin from "../images/social/linkedin.svg"
import twitter from "../images/social/twitter.svg"
import Map from '../components/map'
import Layout from '../components/layout';

const SocialIcon = styled.div`
width: 50px;
height: 50px;
background-color: orange;
mask: ${({icon}) => {if(icon === 'facebook'){
    return( `url(${facebook}) no-repeat center `)
}
if(icon=== 'linkedin'){
    return(`url(${linkedin}) no-repeat center`)
}else{
    return(`url(${twitter}) no-repeat center`) 
} 
}};
`
const StyledSection = styled.section`
width: 90%;
margin: 0 auto;
text-align: center;
h2{
    margin-bottom: 40px;
}
`

const StyledSocial = styled.div`
display: flex;
margin: 20px 0;
justify-content: center;

a{
    margin: 0 15px;
    color: ${({theme})=> theme.coloros.fontColor}
}

`


const Contact = () => {
    return (
        <Layout>
        <StyledSection id="contact">
            <div>
                <h2>Kontakt</h2>
                <h3>Studio One Day</h3>
                <p>Norbert Sokolowski</p>
            </div>
            <div>
                <p>Street: Queensway 87 </p>
                <p>post code: WF61NB</p>
                <p>tel: 07368424514</p>
                <p>email: Oneday.studio.uk@gmail.com</p>
            </div>
            <StyledSocial>
                <a href="https://www.facebook.com/norbert.sokolowski.104" aria-label="facebook icon"><SocialIcon icon='facebook'/></a>
                <a href="https://www.facebook.com/norbert.sokolowski.104" aria-label="LinkedIn icon"><SocialIcon icon='linkedin'/></a>
                <a href="https://www.facebook.com/norbert.sokolowski.104" aria-label=" twitter Label"><SocialIcon/></a>
            </StyledSocial>
            <Map/>
        </StyledSection>
        </Layout>
    );
}

export default Contact;