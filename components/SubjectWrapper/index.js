import { v4 as uuidv4 } from "uuid";
import SubjectField from "../SubjectField";
import styled from "styled-components";

const FieldWrapper = styled.div`
  position: relative;
  background: var(--neon);
  padding: 2.5rem 1rem 1rem 1rem;

  & h3 {
    position: absolute;
    background: white;
    padding: 0rem 0.5rem 0.3rem 0.3rem;
    border-bottom-right-radius: 10px;
    top: -1.2rem;
    left: 0;
  }
`;

const ContentWrapper = styled.div`
  margin-block-start: 16rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

export default function SubjectWrapper({ subjects, handleClick }) {
  return (
    <ContentWrapper>
      {Object.keys(subjects).map((title) => (
        <FieldWrapper key={uuidv4()}>
          <h3>{title.toUpperCase()}</h3>
          <SubjectField subjects={subjects[title]} handleClick={handleClick} />
        </FieldWrapper>
      ))}
    </ContentWrapper>
  );
}
