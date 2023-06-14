import { ChevronIcon } from "../components/icons/Chevron";
import { MoreVertIcon } from "../components/icons/MoreVert";
import { PlayIcon } from "../components/icons/Play";
import styles from "./styles";
import { useState } from "react";
export default function Player() {
  const [segundos, setSegundos] = useState(0);

  return (
    <styles.Background>
      <styles.TopBar>
        <styles.TopBar.Left>
          <ChevronIcon />
        </styles.TopBar.Left>
        <styles.TopBar.Middle>
          <styles.TopBar.Title>Tocando Podcast</styles.TopBar.Title>

          <styles.TopBar.SubTitle>BtCast</styles.TopBar.SubTitle>
        </styles.TopBar.Middle>

        <styles.TopBar.Right>
          <MoreVertIcon />
        </styles.TopBar.Right>
      </styles.TopBar>

      <styles.ScreenArea>
        <styles.CoverArea>
          <styles.CoverArea.Image
            resizeMode="contain"
            source={require("./../assets/btcast.png")}
          />
        </styles.CoverArea>

        <styles.PlayerArea>
          <styles.PlayerArea.Title>
            POR QUE ALGUMAS IGREJAS REJEITAM A PSICOLOGIA?
          </styles.PlayerArea.Title>
          <styles.PlayerArea.Author>BTPapo</styles.PlayerArea.Author>
        </styles.PlayerArea>

        <styles.Controls>
          <styles.Controls.Slider>
            <styles.AudioSlider
              thumbTintColor="#FFFFFF"
              minimumTrackTintColor="#1DD65F"
              maximumTrackTintColor="#777777"
              minimumValue={0}
              maximumValue={100}
              value={segundos}
              onValueChange={(value) => {
                setSegundos(value);
              }}
            />
            <styles.Controls.Slider.CurrentTime>
              0:{segundos}
            </styles.Controls.Slider.CurrentTime>
            <styles.Controls.Slider.TotalTime>
              52:07
            </styles.Controls.Slider.TotalTime>
          </styles.Controls.Slider>
          <styles.Controls.Play>
            <PlayIcon width={88} height={88} />
          </styles.Controls.Play>
        </styles.Controls>
      </styles.ScreenArea>
    </styles.Background>
  );
}
