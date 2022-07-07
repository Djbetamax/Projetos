import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 4px;
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      backgroun-color: #2c5282;
      box-shadrow: 3px 2px 10px rgba{0, 0, 0, 0.3);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }

`;