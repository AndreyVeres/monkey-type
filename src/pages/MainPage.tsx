import styled from 'styled-components';
import { Flex } from '../components/styled/Flex';
import { TextDisplay } from '../components/ui/TextDisplay';
import { ResetButton } from '../components/ui/ResetButton';
import { useAppSelector } from '../providers/StoreProvider/config/config';
import { selectIsFinished } from '../store/keyboard.selectors';
import { Result } from '../components/ui/Result';

export const MainPage = () => {
  const isFinished = useAppSelector(selectIsFinished);

  return (
    <StyledPage $gap={30} as={'main'} $jc='center' $align='center' $dir='column'>
      {isFinished ? <Result /> : <TextDisplay />}
      <ResetButton />
    </StyledPage>
  );
};

const StyledPage = styled(Flex)`
  height: 100vh;
`;
