import styled from "styled-components/native";
import { ChevronIcon } from "../components/icons/Chevron";
import { MoreVertIcon } from "../components/icons/MoreVert";
import { LinearGradient } from "expo-linear-gradient";

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={["#365796", "#F0AEA3"]}
      style={{ flex: 1, paddingTop: 50 }}
    >
      {children}
    </LinearGradient>
  );
};

const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;
TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;
TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;
TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

export default function Player() {
  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <ChevronIcon />
        </TopBar.Left>
        <TopBar.Middle>
          <TopBar.Title>Tocando Podcast</TopBar.Title>

          <TopBar.SubTitle>BtCast</TopBar.SubTitle>
        </TopBar.Middle>

        <TopBar.Right>
          <MoreVertIcon />
        </TopBar.Right>
      </TopBar>
    </Background>
  );
}
