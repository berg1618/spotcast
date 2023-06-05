import styled from "styled-components/native";
import { ChevronIcon } from "../components/icons/Chevron";
import { MoreVertIcon } from "../components/icons/MoreVert";
import { PlayIcon } from "../components/icons/Play";
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

const ScreenArea = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;

const CoverArea = styled.View`
  flex: 4;
`;
CoverArea.Image = styled.Image`
  width: 100%;
  flex: 1;
`;

const PlayerArea = styled.View`
  flex: 2;
  background: blue;
  justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
  color: white;
  font-size: 20px;
`;

PlayerArea.Author = styled.Text`
  color: #bbbbbb;
  font-size: 14px;
`;

const Controls = styled.View`
`;

Controls.Play = styled.Text``;

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

      <ScreenArea>
        <CoverArea>
          <CoverArea.Image
            resizeMode="contain"
            source={{
              uri: "https://placehold.it/750x750",
            }}
          />
        </CoverArea>

        <PlayerArea>
          <PlayerArea.Title>
            POR QUE ALGUMAS IGREJAS REJEITAM A PSICOLOGIA?
          </PlayerArea.Title>
          <PlayerArea.Author>BTPapo</PlayerArea.Author>
        </PlayerArea>

        <Controls>
          <Controls.Play>
            <PlayIcon width={88} height={88} />
          </Controls.Play>
        </Controls>
      </ScreenArea>
    </Background>
  );
}
