import styled from "styled-components/macro";

const StyledTaskCard = styled.div`
  background-color: var(--white);
  padding: 16px 23px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.09);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 6px 2px rgba(54, 78, 126, 0.1);
  }

  .task-card__subtask-counter {
    color: var(--medium-grey);
  }
`;
export default StyledTaskCard;
