import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const Player = (props) => {
  const handlePlay = async () => {
    //the line below wil check which music is playing, if there is any, it will get the 0 index position
    let currentFile = props.music[props.audioIndex].file;

    let newMusics = props.music.filter((val, k) => {
      props.audioIndex == k
        ? ((props.music[k].playing = true), //change the status playing to true
          (currentFile = props.music[k].file)) //set the current file to the mp3 file inside the object
        : (props.music[k].playing = false);

      return props.music[k];
    });

    try {
      if (props.audio != null) {
        props.setPlaying(true);
        props.setMusic(newMusics);
        await props.audio.playAsync();
      } else {
        let currentAudio = new Audio.Sound();
        try {
          await currentAudio.loadAsync(currentFile);
          await currentAudio.playAsync();
        } catch (error) {}

        //setting the new states
        props.setAudio(currentAudio);
        props.setMusic(newMusics);
        props.setPlaying(true);
      }
    } catch (error) {}
  };

  const handlePause = async () => {
    if (props.audio != null) {
      props.audio.pauseAsync();
    }
    props.setPlaying(false);
  };

  return (
    <View style={styles.playerView}>
      <TouchableOpacity style={styles.opacityPlayer}>
        <AntDesign name="banckward" size={28} color="white" />
      </TouchableOpacity>
      {/* verifying the status of the music, then show pause or play btn */}
      {!props.playing ? (
        <TouchableOpacity
          onPress={() => handlePlay()}
          style={styles.opacityPlayer}
        >
          <AntDesign name="play" size={28} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => handlePause()}
          style={styles.opacityPlayer}
        >
          <AntDesign name="pause" size={28} color="white" />
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.opacityPlayer}>
        <AntDesign name="forward" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Player;
