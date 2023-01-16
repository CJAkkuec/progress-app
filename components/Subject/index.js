import styled from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  color: ${({ checked }) => (checked ? "green" : "red")};
`;

export default function Subject({ onClick, session }) {
  return (
    <li>
      {session.name}{" "}
      <StyledButton
        onClick={() => {
          onClick(session.id);
        }}
        checked={session.checked}
      >
        {session.checked ? "✔︎" : "✘"}
      </StyledButton>
    </li>
  );
}
