import styled from 'styled-components';
import { Flex } from './Flex';

type FormFieldProps = {
  gap: string;
  children: React.ReactNode;
}

const Container = styled.div`
  width: 300px !important;
  & > div {
    padding: 3px 20px !important;
  }
`;

export const FormField = (props: FormFieldProps) => {
  return (
    <Container className={"Ok"}>
      <Flex direction={'row'} gap={props.gap} align={'center'} justify={'center'}> 
        {props.children}
      </Flex>
    </Container>
  )
}
