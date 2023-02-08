import styled from "styled-components";

const ButtonClose = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1.5rem;
  border: none;
  font-size: 1rem;
  background-color: var(--neon);
  color: var(--blue);
  border-bottom-right-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 3px;

  &:hover {
    color: #fff;
  }

  &:active {
    box-shadow: inset rgba(0, 0, 0, 0.2) 3px 3px 3px;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 80px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  background-color: white;
  padding: 0.5rem;
  border-bottom-right-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0px 30px 20px;
  z-index: 1;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: repeat(200px, auto);
  max-height: 60vh;
  overflow-y: auto;
`;

const TrainingHeadline = styled.h2`
  width: fit-content;
  margin: 0;
  padding-block: 1rem;
  margin-inline-start: 2rem;
`;

const StyledList = styled.ul`
  margin: 0;
  list-style-type: none;
  padding-inline-start: 2rem;
`;

const StyledListItem = styled.li`
  padding: 0.2rem;
`;

const Topic = styled.p`
  background: var(--neon);
  padding-inline-start: 0.4rem;
`;

export default function Training({ uncheckedGlobal, onClose }) {
  const filteredUncheckedGlobal = Object.fromEntries(
    Object.entries(uncheckedGlobal).filter(([key, value]) => value.length > 0)
  );
  const topics = Object.keys(filteredUncheckedGlobal);

  return (
    <Wrapper>
      <TrainingHeadline>Your Training Opportunities</TrainingHeadline>
      <Section>
        {topics.map((topic) => {
          return (
            <StyledList>
              <Topic>{topic.toUpperCase()}</Topic>
              {filteredUncheckedGlobal[topic].map((session) => {
                return <StyledListItem>{session.name}</StyledListItem>;
              })}
            </StyledList>
          );
        })}
        <ButtonClose onClick={onClose}>✕</ButtonClose>
      </Section>
    </Wrapper>
  );
}
