import styled from 'styled-components';

interface HeaderProps {
  height: string;
}

const StyledHeader = styled.header`
  height: ${({ height }: HeaderProps) => height || '300px'};
  width: 100vw;
  border: 2px solid #2d2d2d;
  font-family: Arial Helvetica, sans-serif;
  display: flex;
  color: #f082ac;
`;

export default StyledHeader;
