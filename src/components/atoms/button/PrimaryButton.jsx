import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SbButton>{children}</SbButton>;
};

const SbButton = styled(BaseButton)`
  background-color: #40514e;
`;
