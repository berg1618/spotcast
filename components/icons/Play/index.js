import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { Button, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export const PlayIcon = ({ ...props }) => {
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./../../../assets/btpapo018_keller.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Button onPress={playSound}>
      <View>
        <Svg
          {...props}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M10 1.66669C5.4 1.66669 1.66666 5.40002 1.66666 10C1.66666 14.6 5.4 18.3334 10 18.3334C14.6 18.3334 18.3333 14.6 18.3333 10C18.3333 5.40002 14.6 1.66669 10 1.66669ZM8.33333 13.75V6.25002L13.3333 10L8.33333 13.75Z"
            fill="white"
          />
        </Svg>
      </View>
    </Button>
  );
};
