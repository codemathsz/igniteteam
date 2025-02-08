import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native'
import { DefaultTheme } from "styled-components/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Container = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({theme}:{theme: DefaultTheme}) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))`
`;