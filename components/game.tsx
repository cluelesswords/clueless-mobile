import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

const Game = () => {
  const [userGuess, setUserGuess] = useState<string>("");

  const lst = ["boychick", "stripling", "swain", "old man", "man", "tad"];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.testContainer}
    >
      <View style={styles.container}>
        <View style={styles.synonymsContainer}>
          {lst.map((item) => (
            <Text key={item} style={styles.synonymText}>
              {item}
            </Text>
          ))}
        </View>

        <View style={styles.synonymsContainer}>
          {lst.map((item) => (
            <Text key={item} style={styles.synonymText}>
              {item}
            </Text>
          ))}
        </View>

        <View style={styles.GuessesView}>
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
    </KeyboardAvoidingView>
  );
};

export default Game;

const styles = StyleSheet.create({
  testContainer: { flex: 1 },
  container: {
    justifyContent: "space-between",
    gap: 100,
    paddingHorizontal: 20,
  },
  synonymsContainer: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",

    justifyContent: "center",
  },
  synonymText: {
    padding: 15,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "hsl(0, 0%, 100%)",
    fontSize: 24,
    fontWeight: "600",
  },
  guessContainer: {
    // padding: 50,
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
