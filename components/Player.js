import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const Player = (props) => {
  const handleBack = async () => {
    //get the current song index and return 1
    let newIndex = props.audioIndex - 1;
    //validate to never get negative index
    if (newIndex < 0) {
      //this will always return a valid index
      newIndex = props.music.length - 1;
    }
    //set the state to the new audio index
    props.setAudioIndex(newIndex);
    //retrieve the current file
    let currentFile = props.music[newIndex].file;
    //select the music and artist clicked
    let newMusics = props.music.filter((val, k) => {
      newIndex == k
        ? ((props.music[k].playing = true), //change the status playing to true
          (currentFile = props.music[k].file)) //set the current file to the mp3 file inside the object
        : (props.music[k].playing = false);

      return props.music[k];
    });
    //this will prevent one audio play on top od the other, audio != null means there is a song playing
    props.audio != null ? props.audio.unloadAsync() : "";

    //instantiate the Audio imported above
    let currentAudio = new Audio.Sound();

    //this will load the current file to the current audio and play
    try {
      await currentAudio.loadAsync(currentFile);
      await currentAudio.playAsync();
    } catch (error) {}

    //setting Audio to the current audio clicked
    props.setAudio(currentAudio);
    //setting the state to true when clicked
    props.setMusic(newMusics);
    //bottom controller
    props.setPlaying(true);
  };

  const handleNext = async () => {
    //get the current song index and add 1
    let newIndex = props.audioIndex + 1;
    //validate to never get over the max index
    if (newIndex >= props.music.length) {
      //this will always return a valid index
      newIndex = 0;
    }
    //set the state to the new audio index
    props.setAudioIndex(newIndex);
    //retrieve the current file
    let currentFile = props.music[newIndex].file;
    //select the music and artist clicked
    let newMusics = props.music.filter((val, k) => {
      newIndex == k
        ? ((props.music[k].playing = true), //change the status playing to true
          (currentFile = props.music[k].file)) //set the current file to the mp3 file inside the object
        : (props.music[k].playing = false);

      return props.music[k];
    });
    //this will prevent one audio play on top od the other, audio != null means there is a song playing
    props.audio != null ? props.audio.unloadAsync() : "";

    //instantiate the Audio imported above
    let currentAudio = new Audio.Sound();

    //this will load the current file to the current audio and play
    try {
      await currentAudio.loadAsync(currentFile);
      await currentAudio.playAsync();
    } catch (error) {}

    //setting Audio to the current audio clicked
    props.setAudio(currentAudio);
    //setting the state to true when clicked
    props.setMusic(newMusics);
    //bottom controller
    props.setPlaying(true);
  };

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
      <TouchableOpacity
        onPress={() => handleBack()}
        style={styles.opacityPlayer}
      >
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

      <TouchableOpacity
        onPress={() => handleNext()}
        style={styles.opacityPlayer}
      >
        <AntDesign name="forward" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Player;
