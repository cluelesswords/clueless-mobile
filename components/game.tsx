import { StyleSheet, Text, View } from "react-native";

const Game = () => {
  return (
    <View style={styles.container}>
      <Text>Clueless Words</Text>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 1,
  },
});
