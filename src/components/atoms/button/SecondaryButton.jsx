import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SbButton onClick={onClick}>{children}</SbButton>;
};

const SbButton = styled(BaseButton)`
  background-color: #19999e;
`;
