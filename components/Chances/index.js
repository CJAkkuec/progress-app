import styled from "styled-components";

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

const CahncesHeadline = styled.h2`
  margin-left: 2rem;
`;

export default function Chances({ uncheckedGlobal, onClose }) {
  const topics = Object.keys(uncheckedGlobal);
  return (
    <Section>
      <CahncesHeadline> your chances</CahncesHeadline>
      {topics.map((topic) => {
        return (
          <ul>
            {uncheckedGlobal[topic].map((session) => (
              <li>{session.name}</li>
            ))}
          </ul>
        );
      })}
      <ButtonClose onClick={onClose}>CLOSE</ButtonClose>
    </Section>
  );
}
