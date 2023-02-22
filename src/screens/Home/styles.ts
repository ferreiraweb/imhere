import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },

  title: {
    fontSize: 24,
    color: "#fdfcfe",
    fontWeight: "bold",
    marginTop: 48,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b6b6b",
  },
  textInput: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  formGroup: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
