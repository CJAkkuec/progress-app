import Subject from "../Subject";
import CustomProgress from "../CustomProgress";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export default function SubjectField({ subjects, handleClick }) {
  const sessionCount = subjects.length;
  const checkedCount = subjects
    .map((item) => item.checked)
    .filter((c) => c === true).length;

  const percentage = checkedCount / (sessionCount / 100);

  return (
    <StyledList>
      <CustomProgress
        percentage={percentage}
        width="100%"
        max={sessionCount}
        value={checkedCount}
      />
      {subjects.map((session) => (
        <Subject key={session.id} session={session} onClick={handleClick} />
      ))}
    </StyledList>
  );
}
