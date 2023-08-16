import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Clueless Words</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
