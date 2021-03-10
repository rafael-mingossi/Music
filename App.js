import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import styles from "./components/styles";
import Header from "./components/Header";
import MusicList from "./components/MusicList";
import Player from "./components/Player";

const App = (props) => {
  const [playing, setPlaying] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [audio, setAudio] = useState(null);

  const [music, setMusic] = useState([
    {
      name: "Blackened",
      artist: "Metallica",
      playing: false,
      file: require("./assets/sample1.mp3"),
    },
    {
      name: "Battery",
      artist: "Metallica",
      playing: false,
      file: {
        uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
    },
    {
      name: "Isolation",
      artist: "Sepultura",
      playing: false,
      file: require("./assets/sample1.mp3"),
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Header />
        </View>

        <View style={styles.table}>
          <Text style={styles.tableTxt}>Music</Text>
          <Text style={styles.tableTxt}>Artist</Text>
        </View>

        <MusicList
          playing={playing}
          setPlaying={setPlaying}
          audioIndex={audioIndex}
          setAudioIndex={setAudioIndex}
          audio={audio}
          setAudio={setAudio}
          music={music}
          setMusic={setMusic}
        />

        <View style={{ paddingBottom: 200 }}></View>
      </ScrollView>
      <Player
        playing={playing}
        setPlaying={setPlaying}
        audioIndex={audioIndex}
        setAudioIndex={setAudioIndex}
        audio={audio}
        setAudio={setAudio}
        music={music}
        setMusic={setMusic}
      />
    </View>
  );
};

export default App;
