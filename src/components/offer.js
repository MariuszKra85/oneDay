import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
width: 90%;
margin: 20px auto 0;
position: relative;
padding: 20px 0 20px;
text-align: center;

&::after{
    width: 100vw;
    content: "";
  background: url(${({bg})=> bg}) center;
  opacity: 0.2;
  top: 0;
  left: -5%;
  bottom: 0;
  right: 0;

  position: absolute;
  z-index: -1;

}
`


const Offer = () => {
    const {file} = useStaticQuery(
        graphql`
        {
            file(name: {eq: "1"}) {
    childImageSharp{
      fluid{
        src
      }
    }
  }
        }
        `
    )
    return (
        <StyledWrapper id="offer" bg={file.childImageSharp.fluid.src}>
            <h1>Kompleksowa realizacja sesji zdjęciowych od A do Z</h1>
            <p>
                Oprócz wynajmu przestrzeni również realizujemy sesję zdjęciowe. Wykonamy dla Ciebie zdjęcia biznesowe i wizerunkowe, lookbooka, portrety, zdjęcia beauty. Za fotografie odpowiada nasz fotograf Wojciech Buczyński.
                Sesję realizujemy kompleksowo. Zadbamy o każdy szczegół, aby dzień zdjęciowy trwał jak najkrócej i był przeprowadzony w możliwie najszybszym czasie.
                Produkcja sesji fotograficznych w Bajce to przede wszystkim wygoda i komfort. Zajmiemy się znalezieniem odpowiedniej modelki do Twojego projektu. Naszymi partnerami jest wiele wizażystek, fryzjerów oraz stylistek. Pomożemy wybrać osoby, które zadbają o odpowiedni makijaż i uczesanie a w przypadku sesji prywatnej również ciekawe stylizacje. Stworzymy coś niebanalnego. Nasz zespół wybuduje scenografię, dobierze odpowiednie rekwizyty oraz zadba o cały plan zdjęciowy. W przypadku lookbooka wcale nie trzeba osobiście przyjeżdżać na sesję. Produkty można do nas przesłać. A my zajmiemy się całą resztą. W trakcie sesji prześlemy poglądowe zdjęcia aby było można wdrożyć ewentualne poprawki. A przy sesjach prywatnych i wizerunkowych przygotujemy dobrą kawę, zadbamy o odpowiednią atmosferę i wykonamy niepowtarzalne ujęcia. Mamy duże doświadczenie w produkcjach sesji odzieżowych, fotografii reklamowej, produktowej (packshotach) oraz wizerunkowej. Wykonujemy również polaroidy i testy modelek dla agencji.
            </p>
        </StyledWrapper>
    );
}

export default Offer;
