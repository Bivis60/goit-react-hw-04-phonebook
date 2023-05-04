import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  border: solid 2px ${p => p.theme.colors.text};
  border-radius: 8px;
  background-color: ${p => p.theme.colors.background};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;
