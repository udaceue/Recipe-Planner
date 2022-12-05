import styled from 'styled-components';

interface CustomDivProps {
  height?: string;
  width?: string;
  margin?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
  display?: string;
  flexDirection?: string;
}

const CustomDiv = styled.div`
  width: ${({ width }: CustomDivProps) => width};
  height: ${({ height }: CustomDivProps) => height};
  margin: ${({ margin }: CustomDivProps) => margin};
  margin-left: ${({ ml }: CustomDivProps) => ml};
  margin-right: ${({ mr }: CustomDivProps) => mr};
  margin-top: ${({ mt }: CustomDivProps) => mt};
  margin-bottom: ${({ mb }: CustomDivProps) => mb};
  display: ${({ display }: CustomDivProps) => display};
  flex-direction: ${({ flexDirection }: CustomDivProps) => flexDirection};
`;

export default CustomDiv;
