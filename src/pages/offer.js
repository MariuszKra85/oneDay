import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Image from '../components/image';
import Layout from '../components/layout';

const StyledWrapper = styled.section`
width: 90%;
margin: 0px auto 0;
position: relative;
padding: 20px 0 20px;

h4{
  margin: 30px 0 10px;
}
p{
  margin-bottom: 30px;
}

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

const StyledList = styled.ul`
width: 200px;
margin: 10px 0 35px 20px;
text-align: left;
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
        <Layout>
          <Image/>
        <StyledWrapper id="offer" bg={file.childImageSharp.fluid.src}>
            <h2>Oferta:</h2>
            <p>
            Pracujemy zarówno w studiu jak i plenerze.  Uwiecznimy dla Ciebue wyjątkowe momenty w dowolnie wybranym przez Ciebie miejscu. W naszej ofercie znajdziesz profesjonalne sesje zdjęciowe oraz filmowanie z ziemi i z drona. Zapraszamy do zapoznania się z naszą ofertą:
            </p>
            <h4>Fotografia:</h4>
            <StyledList>
                <li>portretowa</li>
                <li>dla par</li>
                <li>rodzinna</li>
                <li>dziecięca</li>
                <li>lifestyle </li>
                <li>kulinarna</li>
                <li>krajobrazowa</li>
                <li>produktowa </li>
                <li>mody</li>
                <li>architektoniczna /wnętrz</li>
                <li>obróbka zdjęć z korekcją kolorów </li>
            </StyledList>
            <h4>Filmowanie:</h4>
            <StyledList>
                <li>relacje ze ślubów/ komuni</li>
                <li>eventy</li>
                <li>teledyski, klipy</li>
                <li>reklanowe</li>
                <li>promocyjne</li>
                <li>projekty komercyjne</li>
                <li>filmy z lotu ptaka</li>
                <li>montaż filmów </li>
            </StyledList>
            <p>Prowadzimy kompleksowe usługi zdjęciowe oraz video z możliwością zapisu w 4K lub Full HD. Filmy z drona to świetny dodatek do filmów ślubnych, eventow, klipów, teledysków. Dron pozwala uzyskać ujęcie z innej perspektywy, gdzie zwykły człowiek nie jest w stanie wykonać ujęcia. Takie dodatki doskonale urozmaicają filmy.  </p>
            <p>Studio jest wyposażone w najnowsze sprzęty. Cały czas staramy się dorównać obowiązującym trendom, aby zapewnić Ci usługi na najwyższym poziome. Do każdego projekty podchodzimy profesjonalnie. Dopracowujemy każdy detal z wyjątkowa dbałością, tak aby efekt końcowy przerósł Twoje oczekiwania. 
Jesteśmy tu dla Ciebie! </p>
        </StyledWrapper>
        </Layout>

    );
}

export default Offer;