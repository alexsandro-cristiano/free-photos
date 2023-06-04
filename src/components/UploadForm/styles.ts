import styled from "styled-components";

export const FormContainer = styled.form``;
export const Label = styled.label`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px auto;
  line-height: 30px;
  border: 1px solid ${(props) => props.theme["blueviolet-600"]};
  color: ${(props) => props.theme["orange-500"]};
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;
export const OutputContainer = styled.div`
  height: 60px;
  font-size: 0.8rem;
  text-align: center;
`;

export const FileName = styled.div`
  font-size: 1rem;
`;
export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: #dc2626;
`;
