import React from "react";
import styled from "styled-components";
import BgImg from "../assets/singular-bg.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Section = styled.section`
  background-image: url(${BgImg});
  height: 645px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 200px;
`;

const Title = styled.p`
  font-size: 55px;
  color: #ffffff;
  font-weight: 400;
  text-align: center;
  padding: 0px;
`;

const Desc = styled.p`
  width: 100%;
  height: 100%;
  display: block;
  font-size: 30px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  line-height: 30px;
  margin-top: 30px;
  padding-bottom: 80px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin: auto;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 40px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Title>Mais perto. Mais rápido. Mais seguro.</Title>
        <Desc>
          Aceleramos e entregamos o seu conteúdo <br /> com qualidade em
          qualquer lugar.
        </Desc>
        <Button href="https://www.singularcdn.com.br/" target="_blank">
          <span>singular CDN</span>
          <MdKeyboardArrowRight />
        </Button>
      </Content>
    </Section>
  );
};

export default Hero;
