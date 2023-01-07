import Subject from "./Subject";

export default function SubjectField({ subjects, handleClick }) {
  const sessionCount = subjects.length;
  const checkedCount = subjects
    .map((item) => item.checked)
    .filter((c) => c === true).length;

  return (
    <ul>
      <progress min={0} max={sessionCount} value={checkedCount} />
      {subjects.map((session) => (
        <Subject key={session.id} session={session} onClick={handleClick} />
      ))}
    </ul>
  );
}
