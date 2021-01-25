import React from 'react';
import styled from 'styled-components';
import facebook from "../images/social/facebook.svg"
import linkedin from "../images/social/linkedin.svg"
import twitter from "../images/social/twitter.svg"

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
`
/*

to odnosi sie do ikonek socialnych

*/
const StyledSocial = styled.div`
display: flex;
margin: 20px 0;

a{
    margin: 0 10px;
}

`


const Contact = () => {
    return (
        <StyledSection id="contact">
            <div>
                <h2>Contact</h2>
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
                <a href="https://www.facebook.com/norbert.sokolowski.104"><SocialIcon icon='facebook'/></a>
                <a href="https://www.facebook.com/norbert.sokolowski.104"><SocialIcon icon='linkedin'/></a>
                <a href="https://www.facebook.com/norbert.sokolowski.104"><SocialIcon/></a>
            </StyledSocial>
        </StyledSection>
    );
}

export default Contact;
