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

export default function Header({ sessionCountGlobal, checkedCountGlobal }) {
  return (
    <StyledHeader>
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
  );
}
