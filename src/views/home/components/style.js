import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;


`
export const Item = styled.div`
  &:nth-child(even) {
    margin-left: 30px;
  }

  box-sizing: border-box;
  flex: 0 0 calc(50% - 15px);
  max-width: 50%;
  display: flex;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0 5px 40px -1px rgba(2, 10, 18, .1);
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0;
  height: 100px;
  justify-content: space-between;
`