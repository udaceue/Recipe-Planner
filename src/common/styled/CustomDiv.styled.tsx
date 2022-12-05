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
  padding?: string;
  maxWidth?: string;
}

const CustomDiv = styled.div`
  max-width: ${({ width }: CustomDivProps) => width};
  min-height: ${({ height }: CustomDivProps) => height};
  padding: ${({ padding }: CustomDivProps) => padding};
  margin: ${({ margin }: CustomDivProps) => margin};
  margin-left: ${({ ml }: CustomDivProps) => ml};
  margin-right: ${({ mr }: CustomDivProps) => mr};
  margin-top: ${({ mt }: CustomDivProps) => mt};
  margin-bottom: ${({ mb }: CustomDivProps) => mb};
  display: ${({ display }: CustomDivProps) => display};
  flex-direction: ${({ flexDirection }: CustomDivProps) => flexDirection};
`;

export default CustomDiv;
