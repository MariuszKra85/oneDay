import { graphql, StaticQuery, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Image from '../components/image';
import Layout from '../components/layout';

const StyledWrapper = styled.section`
width: 90%;
margin: 20px auto 0;
text-align: center;

`
const StyledImg = styled(Img)`
border-radius:50%;
width: 200px;
height: 200px;
margin: 20px auto 10px;
`

const AboutUs = () => {
    const photos = useStaticQuery(graphql`
    {
        allFile(filter: {relativePath: {regex: "/aboutus/"}}) {
    edges {
      node {
        childImageSharp{
            fluid(maxWidth:400){
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
      }
    }
  }
    }
    `)
    return (
        <Layout>
            {console.log(photos)}
            <Image/>
        <StyledWrapper id="aboutMe">
            <h2>Cześć, tu studio One Day!</h2>
            <p>Fotografia i filmowanie to nasza pasja i energia. 
            Jesteśmy od tego aby uchwycić i uwiecznić ten jeden, wyjątkowy moment z twojego życia. Każdy czlowiek ma do przekazania inną wyjątkowa historię. A my możemy opowiedzieć ja w jedyny i niepowtarzalny sposób. Zatrzymując czas... Ukazując więzi, emocje... 
            Sprawia nam to dużo frajdy i zabawy. My poprostu kochamy to co robimy, dlatego każdy projekt jest dla nas unikatowy i wkładamy w niego całe serce. 
            </p>
            <StyledImg fluid={photos.allFile.edges[0].node.childImageSharp.fluid}imgStyle={{objectPosition: "10% 50%"}}/>
            <h2>Norbert</h2>
            <p>Swoją przygode z fotografią rozpocząłem w wieku 8 lat, kiedy to na komunie dostałem swój pierwszy aparat. Zabierałem go ze sobą za każdym razem, gdy jechałem w nowe miejsce. Na szkolnych wycieczkach skupiałem się na robieniu zdjec kolegów i koleżanek. Niestety w tamtym momencie ograniczała mnie klisza 36 klatkowa. To był zalążek zdjęć portretowych i już wtedy czułem ogromną przyjemność płynąca z robienia zdjęć. Później kiedy dorosłem swojej pierwsze zarobione pieniądze przeznaczyłem na zakup aparatu cyfrowego, aby móc rozwijać pasję. Później pojawił się już profesjonalny aparat oraz dron, który umożliwił mi filmowanie niezwykłych miejsc z perspektywy, której normalnie nikt nie jest w stanie zobaczyć. 
A co wyróżnia mnie od innych? 
Uwielbiam kontakt z ludźmi, dzięki czemu współpraca z klientami jest dla mnie przyjemnością i powstaje między nami przyjazna wieź. Do każdego projektu podchodze indywidualnie i zawsze z takim samym zangażowaniem.</p>
<StyledImg fluid={photos.allFile.edges[1].node.childImageSharp.fluid}imgStyle={{objectPosition: "30% 50%"}}/>
<h2>Monika</h2>
<p>Zdecydowanie częście stoję po przeciwnej stronie aparatu niż Norbert, dlatego potrafie zrozumiec Twoje emocje i wątpliwości podczas sesji. Udzielam porad jak przygotować się do sesji oraz organizacji atelier. 
Kiedy już chwycę aparat w swoje ręce skupiam się na pokazaniu uczuć i emocji. Na zatrzymaniu czasu i stworzeniu wyjątkowej pamiątki na całe życie. Uwielbiam fotografować dzieci oraz jedzenie 🙂 Wspolpraca z dziećmi jest niezwykła, ponieważ są one naturalne i nieprzewidywalne. Dzięki nim mogę odnaleźć w sobie beztroskość i radość z małych rzeczy. Myślę, że każdy z nas powinien przyjrzeć się dzieciom i cieszyć się z drobnostek. </p>
        </StyledWrapper>
        </Layout>

    );
}

export default AboutUs;
