import React, { ReactNode } from "react";
import styled from "@emotion/styled/macro";

const Base = styled.ul`
  list-style: none;
  margin: 0;
  padding: 36px 0 64px 0;
`;

interface Props {
  children?: ReactNode | ReactNode[];
}

export default function ChatRoomList({ children }: Props) {
  return <Base>{children}</Base>;
}
