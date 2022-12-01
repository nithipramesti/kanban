import styled from "styled-components/macro";

const StyledTaskDetail = styled.div`
  background-color: var(--white);
  padding: 32px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  .task-detail__subtask-counter {
    font-weight: 600;
    margin-bottom: 16px;
  }

  .task-detail__subtask {
    font-weight: 600;
    padding: 12px 16px;
    background-color: var(--light-grey);
  }

  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    background-color: beige;
    z-index: -1;
  }
`;
export default StyledTaskDetail;
