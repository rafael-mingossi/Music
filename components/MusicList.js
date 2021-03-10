import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const MusicList = (props) => {
  //this func will select the music and artist when clicked
  const changeMusic = async (id) => {
    let currentFile = null;
    let newMusics = props.music.filter((val, k) => {
      id == k
        ? ((props.music[k].playing = true), //change the status playing to true
          (currentFile = props.music[k].file), //set the current file to the mp3 file inside the object
          props.setPlaying(true), //this props is from Player component
          props.setAudioIndex(id)) //this will make the current song continue selected after being paused and resumed
        : (props.music[k].playing = false);

      return props.music[k];
    });

    //this will prevent one audio play on top od the other
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
  };

  return (
    <View>
      {/* using map function to get the values from the object music */}
      {props.music.map((val, k) => {
        if (val.playing) {
          return (
            <View style={styles.table}>
              <TouchableOpacity
                onPress={() => changeMusic(k)}
                style={styles.opacityBtn}
              >
                <Text style={styles.opacityBtnTxtPlay}>
                  {" "}
                  <AntDesign name="play" size={15} color="#1DB954" /> {val.name}
                </Text>
                <Text style={styles.opacityBtnTxtPlay}>{val.artist}</Text>
              </TouchableOpacity>
            </View>
          );
        } else {
          return (
            <View style={styles.table}>
              <TouchableOpacity
                onPress={() => changeMusic(k)}
                style={styles.opacityBtn}
              >
                <Text style={styles.opacityBtnTxt}>
                  {" "}
                  <AntDesign name="play" size={15} color="white" /> {val.name}
                </Text>
                <Text style={styles.opacityBtnTxt}>{val.artist}</Text>
              </TouchableOpacity>
            </View>
          );
        }
      })}
    </View>
  );
};

export default MusicList;
