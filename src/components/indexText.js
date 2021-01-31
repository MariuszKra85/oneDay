import React from 'react';
import styled from 'styled-components';
import { colors } from '../utility/colors';

const StyledHeder = styled.h3`
margin: 30px 20px;
letter-spacing: 1.5px;
background-color: ${({desktop})=> desktop ? `colors: black`: null}

`

const IndexText = ({desktop}) => {
    return (
        <StyledHeder>„Zdarzają się chwile, gdy nie masz przy sobie aparatu i wówczas widzisz najwspanialszy zachód słońca lub najpiękniejszą scenę, jaką zawsze chciałeś zobaczyć. Nie przejmuj się tym, że nie możesz go sfotografować. Usiądź i rozkoszuj się tym widokiem" - DeGriff.

        </StyledHeder>
    );
}

export default IndexText;
