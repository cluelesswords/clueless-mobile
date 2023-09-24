import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";

const Game = () => {
  const [userGuess, setUserGuess] = useState<string>("");
  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        <View style={styles.GuessesView}>
          <Text>S</Text>
        </View>
        <Text style={styles.textPrmy}>Enter a word</Text>
        <TextInput
          style={styles.textInput}
          value={userGuess}
          onChangeText={(newText) => setUserGuess(newText)}
        />
        <Pressable style={styles.hintsBtn}>
          <Text style={styles.textPrmy}>New Hint</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 1,
    paddingHorizontal: 20,
  },
  gameContainer: {
    height: 400,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 50,
    justifyContent: "flex-end",
  },
  GuessesView: {
    alignSelf: "flex-end",
  },
  textPrmy: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
  },
  hintsBtn: {
    borderRadius: 5,
    paddingVertical: 4,
    borderWidth: 2,
    backgroundColor: "rgb(233, 233, 237)",
    borderColor: "rgb(233, 233, 237)",
  },
});
