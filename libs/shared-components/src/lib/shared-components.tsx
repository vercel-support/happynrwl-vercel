import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedComponentsProps {}

const SharedComponent = styled.div`
  color: pink;
`;

export function SharedComponents(props: HomeProps) {
  return (
    <SharedComponent>
      <h1>Welcome to shared-components!</h1>
    </SharedComponent>
  );
}

export default SharedComponents;
