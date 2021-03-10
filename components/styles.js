import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  header: {
    backgroundColor: "#1DB954",
    marginTop: 37,
    width: "100%",
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderTopColor: "white",
    borderBottomColor: "white",
  },
  headerTxt: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  table: {
    flexDirection: "row",
    padding: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  tableTxt: {
    width: "50%",
    color: "rgb(200,200,200)",
  },
  opacityBtn: {
    width: "100%",
    flexDirection: "row",
  },
  opacityBtnTxt: {
    width: "50%",
    color: "white",
  },
  opacityBtnTxtPlay: {
    width: "50%",
    color: "#1DB954",
  },
  playerView: {
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 999, //this will make the player always on top of the other elements
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  opacityPlayer: {
    marginRight: 20,
    marginLeft: 20,
  },
});

export default styles;
