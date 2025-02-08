import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';

export default function Groups() {
  return (
    <Container>
      <Header showBackButton/>
      <Highlight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />
    </Container>
  );
}