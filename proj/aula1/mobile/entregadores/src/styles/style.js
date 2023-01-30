import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#333",
    },
    input: {
      justifyContent: "left",
      alignItems: "left",
      backgroundColor: "#fff",
      margin: "10px",
      padding: "10px",
    },
    button: {
      height: "50px",
      borderRadius: "10px",
      justifyContent: "center",
      alignItems: "center",
      margin: "15px",
      padding: "10px",
      backgroundColor: 'red',
    },
    txtButton: {
      fontWeight: "bold",
      fontSize: "17px",
      color: "#FFF",
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    headerTxt: {
      fontSize: '30px',
      fontFamily: 'Verdana',
      color: '#FFF',
      padding: '10px',
      fontWeight: 'bold',
    },
    divInput: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
  