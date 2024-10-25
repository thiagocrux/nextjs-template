import * as Styled from './styles';

export default function Main({
  title = 'Next.js Template',
  description = 'Start your new project from here...',
}) {
  return (
    <Styled.Wrapper data-testid="main">
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Wrapper>
  );
}
