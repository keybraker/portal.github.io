import React from "react";
import styled from "styled-components";
// import loadable from '@loadable/component';
import { HiOutlineReply } from "@react-icons/all-files/hi/HiOutlineReply";

import Layout from "./../components/Layout";
import dayjs from "dayjs";
// const HeadScene = loadable(() => import('./../components/HeadScene'));

import Confetti from "react-confetti";

const StyledContainer = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px;

  @media (min-width: 520px) {
    // height: 400px;
  }

  @media (min-width: 1400px) {
    // height: 500px;
  }
`;

const StyledHorizontalLine = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border-top: 1px dashed gray;
`;

const StyleHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledReplyWrapper = styled.div`
  font-family: "Archivo", sans-serif;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-top: 18px;
`;

const StyledReplyButton = styled.a`
  font-family: "Archivo", sans-serif;
  font-size: 18px;
  border: none;
  background: transparent;
  border: 1px solid black;
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
  padding: 6px 10px;
  margin-top: 4px;
  color: black;

  &:hover {
    background-color: #e8e3e3;
    color: black;
  }
`;

const StyledSectionHeading = styled.span`
  font-family: "Archivo", sans-serif;
  font-style: italic;
  font-size: 20px;
  margin-bottom: 0;
  color: #000;
  text-decoration: none;
`;

const StyleHeaderFlexCol = styled.div`
  font-family: "Archivo", sans-serif;
  // font-style: italic;
  font-size: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0;
  color: black;
  text-decoration: none;
`;

const StyleHeaderFlexRow = styled.div`
  font-family: "Archivo", sans-serif;
  // font-style: italic;
  font-size: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 0;
  color: #9a9797;
  text-decoration: none;
`;

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  return {
    width: 1920,
    height: 1080,
  };
}

const { height, width } = getWindowDimensions();

const mail = "mailto:" + "iantsiakkas@gmail.com";
const subject = "?subject=" + "Email%20Subject";
const body = "&body=" + "Email%20Body";

const date = dayjs().format("MMM DD, YYYY, HH:mm A");

const Index = () => (
  <Layout>
    {/* <Confetti
      width={width}
      height={height}
      gravity={0.02}
      numberOfPieces={50}
      tweenDuration={500}
    /> */}
    <StyledContainer>
      {/* <HeadScene /> */}
      <StyleHeader>
        <StyleHeaderFlexCol>
          <span>Ioannis Tsiakkas </span>
          <span>to you</span>
        </StyleHeaderFlexCol>
        <StyleHeaderFlexRow>{date}</StyleHeaderFlexRow>
      </StyleHeader>
      <StyledHorizontalLine></StyledHorizontalLine>
      <StyledSectionHeading>
        Hello,<br></br>
        <br></br>
        I'm a Software Engineer with experience in building web application. I
        have experience in both the backend infrustructure and the frontend.
        <br></br>
        Currently working as a backend developer at{" "}
        <a href="https://fairlo.se/" rel="noopener noreferrer" target="_blank">
          Fairlo
        </a>
        .<br></br>
        <br></br>
        Kindly,<br></br>
        Ioannis Tsiakkas<br></br>
      </StyledSectionHeading>
    </StyledContainer>
    <StyledReplyWrapper>
      <StyledReplyButton href={`${mail}${subject}${body}`}>
        <HiOutlineReply /> Reply
      </StyledReplyButton>
    </StyledReplyWrapper>
  </Layout>
);

export default Index;
