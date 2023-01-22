import { useState } from "react";
import styled from "styled-components";
import CustomProgress from "../CustomProgress";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  margin: 0;
  position: fixed;
  z-index: 1;
  background: var(--blue);
  gap: 2rem;
`;

const StyledHeadline = styled.h1`
  font-size: 4rem;
  color: white;
  font-family: "HVDComic";
  margin: 0;
`;

const StyledSubline = styled.h2`
  margin: 0;
  color: white;
`;

const StyledText = styled.p`
  margin: 0;
  color: white;
`;

const Button = styled.button`
  position: absolute;
  right: 2rem;
  top: 3rem;
  padding: 3rem 1rem;
  border: none;
  background-color: var(--neon);
  border-radius: 1rem;
`;

const ButtonClose = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  padding: 3rem 1rem;
  border: none;
  background-color: var(--neon);
  border-radius: 1rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  top: 100px;
  min-height: 400px;
  max-height: 600px;
  width: 90%;
  background-color: white;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  z-index: 1;
`;

export default function Header({
  sessionCountGlobal,
  checkedCountGlobal,
  uncheckedGlobal,
}) {
  const [seeUnchecked, setSeeUnchecked] = useState(false);

  const topics = Object.keys(uncheckedGlobal);

  return (
    <>
      <StyledHeader>
        <Button onClick={() => setSeeUnchecked(!seeUnchecked)}>chances</Button>
        <div>
          <StyledHeadline>SuperCoach</StyledHeadline>
          <StyledSubline>Track your achievements!</StyledSubline>
        </div>
        <div>
          <StyledText>Your overall progress</StyledText>
          <CustomProgress
            width="100%"
            max={sessionCountGlobal}
            value={checkedCountGlobal}
          />
        </div>
      </StyledHeader>
      {seeUnchecked && (
        <Section>
          <h3>that are your chances</h3>
          {topics.map((topic) => {
            return (
              <ul>
                {uncheckedGlobal[topic].map((session) => (
                  <li>{session.name}</li>
                ))}
              </ul>
            );
          })}
          <ButtonClose onClick={() => setSeeUnchecked(false)}>
            CLOSE
          </ButtonClose>
        </Section>
      )}
    </>
  );
}
