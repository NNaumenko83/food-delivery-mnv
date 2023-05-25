import styled from "@emotion/styled";

export const FormCart = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  overflow: auto;
`;

export const FormInput = styled.input`
  width: 100%;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 25px;

  padding: 10px 30px;
  border: 1px solid #020024;
  border-radius: 5px;
  :hover {
    background-color: #047ad6;
    color: #c2e3ff;
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 1);
  }
  :active {
    background-color: #005de9;
    color: #c2e3ff;
  }
`;

export const ErrorText = styled.span`
  color: #e42c01;
`;
