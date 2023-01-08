import styled from "styled-components";

const StyledProgressBar = styled.progress`
  width: ${({ width }) => width};
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-progress-bar {
    background: white;
  }

  &::-webkit-progress-value {
    background: ${({ percentage }) => {
      if (!percentage) {
        return "var(--neon)";
      } else if (percentage < 30) {
        return "red";
      } else if (percentage > 30 && percentage < 60) {
        return "orange";
      } else {
        return "green";
      }
    }};
  }
`;

export default function CustomProgress({ max, value, width, percentage }) {
  return (
    <StyledProgressBar
      percentage={percentage}
      width={width}
      min={0}
      max={max}
      value={value}
    />
  );
}
