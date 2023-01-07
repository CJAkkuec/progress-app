import subjectList from "../src/data/sessions.json";
import { v4 as uuidv4 } from "uuid";
import SubjectField from "./components/SubjectField";
import { useState } from "react";

const initialSubjects = subjectList;

function App() {
  const [subjects, setSubjects] = useState(initialSubjects);

  const sessionCountGlobal = Object.values(subjects)
    .map((array) => array.length)
    .reduce((a, b) => a + b);

  const checkedCountGlobal = Object.values(subjects)
    .flatMap((sessions) => sessions.map((session) => session.checked))
    .filter((value) => value === true).length;

  function handleClick(id) {
    setSubjects((prevSubjects) => {
      const newSubjects = { ...prevSubjects };
      for (const category in newSubjects) {
        newSubjects[category] = newSubjects[category].map((subject) => {
          if (subject.id === id) {
            return {
              ...subject,
              checked: !subject.checked,
            };
          }
          return subject;
        });
      }
      return newSubjects;
    });
  }

  return (
    <>
      <h1>SuperCoach</h1>
      <h2>Track your achievements</h2>
      <h3>Your overall progress</h3>
      <p>You're doing great!</p>
      <progress min={0} max={sessionCountGlobal} value={checkedCountGlobal} />
      {Object.keys(subjects).map((title) => (
        <div key={uuidv4()}>
          <h3>{title.toUpperCase()}</h3>
          <SubjectField subjects={subjects[title]} handleClick={handleClick} />
        </div>
      ))}
    </>
  );
}

export default App;
