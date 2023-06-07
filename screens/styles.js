import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Slider from "@react-native-community/slider";

const styles = {
  Background: ({ children }) => {
    return (
      <LinearGradient
        colors={["#365796", "black"]}
        style={{ flex: 1, paddingTop: 50 }}
      >
        {children}
      </LinearGradient>
    );
  },
  TopBar: styled.View`
    flex-direction: row;
  `,
  ScreenArea: styled.View`
    flex: 1;
    padding: 32px;
  `,
  CoverArea: styled.View`
    flex: 4;
  `,
  PlayerArea: styled.View`
    flex: 2;
    justify-content: flex-end;
  `,
  Controls: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `,
  AudioSlider: styled(Slider)`
    flex-basis: 100%;
  `,
};

styles.TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;

styles.TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;

styles.TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

styles.TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;

styles.TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

styles.CoverArea.Image = styled.Image`
  width: 100%;
  flex: 1;
`;

styles.PlayerArea.Title = styled.Text`
  color: white;
  font-size: 20px;
`;

styles.PlayerArea.Author = styled.Text`
  color: #bbbbbb;
  font-size: 14px;
`;

styles.Controls.Play = styled.TouchableOpacity``;

styles.Controls.Slider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

styles.Controls.Slider.CurrentTime = styled.View`
  color: #bbbbbb;
`;

styles.Controls.Slider.TotalTime = styled.View`
  color: #bbbbbb;
`;

export default styles;
