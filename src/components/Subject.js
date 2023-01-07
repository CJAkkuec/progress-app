export default function Subject({ onClick, session }) {
  return (
    <li>
      {session.name}{" "}
      <button
        onClick={() => {
          onClick(session.id);
        }}
      >
        {session.checked ? "checked" : "unchecked"}
      </button>
    </li>
  );
}
