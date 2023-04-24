import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const Base = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 64px 0;
  box-sizing: border-box;
`;

interface Props {
  children?: ReactNode | ReactNode[];
}

export default function FriendList({ children }: Props) {
  return <Base>{children}</Base>;
}
