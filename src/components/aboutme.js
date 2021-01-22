import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
width: 90%;
margin: 20px auto 0;
`

const AboutMe = () => {
    return (
        <StyledWrapper>
            <h2>Norbert Sokołowski</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque expedita, nam suscipit, illo totam quibusdam soluta, enim consequuntur repudiandae saepe ipsam aspernatur? Voluptatibus non nostrum, excepturi amet voluptas odit esse.</p>
        </StyledWrapper>
    );
}

export default AboutMe;
