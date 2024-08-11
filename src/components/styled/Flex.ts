import styled, { css } from 'styled-components';

interface FlexProps {
  $dir?: 'column' | 'row';
  $align?: 'center' | 'flex-end' | 'flex-start';
  $jc?: 'space-between' | 'center'  | 'flex-start';
  $gap?: number;
  $wrap?: 'wrap';
}

export const Flex = styled.div<FlexProps>`
  display: flex;

  ${({ $jc, $align, $dir, $wrap }) =>
    css`
      justify-content: ${$jc};
      align-items: ${$align};
      flex-direction: ${$dir};
      flex-wrap: ${$wrap};
    `}

  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap + 'px'};
    `}
`;
