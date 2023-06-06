import styled from "styled-components/native";
import { ChevronIcon } from "../components/icons/Chevron";
import { MoreVertIcon } from "../components/icons/MoreVert";
import { PlayIcon } from "../components/icons/Play";
import { LinearGradient } from "expo-linear-gradient";
import { Slider } from "react-native";

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={["#365796", "black"]}
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
  padding: 32px;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

Controls.Play = styled.TouchableOpacity``;

Controls.Slider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

Controls.Slider.CurrentTime = styled.View`
  color: #bbbbbb;
`;

Controls.Slider.TotalTime = styled.View`
  color: #bbbbbb;
`;

// const AudioSlider = '';
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
          <Controls.Slider>
            {/* <AudioSlider
              thumbTintColor="#FFFFFF"
              minimumTrackTintColor="#1DD65F"
              maximumTrackTintColor="#777777"
              minimumValue={0}
              maximumValue={100}
              value={segundos}
              onValueChange={(value) => {
                setSegundos(value);
              }}
            /> */}
            <Controls.Slider.CurrentTime>0:00</Controls.Slider.CurrentTime>
            <Controls.Slider.TotalTime>52:07</Controls.Slider.TotalTime>
          </Controls.Slider>
          <Controls.Play>
            <PlayIcon width={88} height={88} />
          </Controls.Play>
        </Controls>
      </ScreenArea>
    </Background>
  );
}
