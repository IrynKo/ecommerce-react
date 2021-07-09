import styled from "styled-components";

const AdminOrdersListStyled = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  border: 1px solid gray;
  margin-bottom: 20px;
  .admin-list__user-info {
    display: flex;
    flex-direction: column;
  }
`;

export default AdminOrdersListStyled;
