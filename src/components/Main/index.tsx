import * as Styled from './styles';

export type Props = {
  title?: string;
  description?: string;
};

export default function Main({
  title = 'Next.js Template',
  description = 'Start your new project from here...',
}: Props) {
  return (
    <Styled.Wrapper data-testid="main">
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Wrapper>
  );
}
