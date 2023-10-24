import styled from 'styled-components';

type FlexProps = {
  direction: 'row' | 'column';
  gap: string;
  justify: string;
  align: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};
  gap: ${props => props.gap};
`;
