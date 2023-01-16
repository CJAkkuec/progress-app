import subjectList from "../data/sessions.json";
import useLocalStorageState from "use-local-storage-state";
import Header from "../components/Header";
import SubjectWrapper from "../components/SubjectWrapper";

const initialSubjects = subjectList;

function App() {
  const [subjects, setSubjects] = useLocalStorageState("progress", {
    defaultValue: initialSubjects,
  });

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
      <Header
        sessionCountGlobal={sessionCountGlobal}
        checkedCountGlobal={checkedCountGlobal}
      />
      <SubjectWrapper subjects={subjects} handleClick={handleClick} />
    </>
  );
}

export default App;
