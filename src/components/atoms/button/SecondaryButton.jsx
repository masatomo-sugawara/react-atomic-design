import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SbButton>{children}</SbButton>;
};

const SbButton = styled(BaseButton)`
  background-color: #19999e;
`;
