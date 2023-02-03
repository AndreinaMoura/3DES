import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    headerText: {
        fontSize: '30px',
        fontFamily: 'Verdana',
        color: '#FFF',
        padding: '10px',
        fontWeight: 'bold',
    },
    boxOrder: {
        flexDirection: 'flex-start',
        padding: '15px',
        margin: '20px',
        borderRadius: '10px',
        backgroundColor: '#000'
    },
    orderData: {
        fontSize: '20px',
        fontFamily: 'Verdana',
        color: '#fff',
        fontWeight: "bold",
        padding: '4px'
    },    
    btn1: {
        height: "50px",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "center",
        margin: "15px",
        backgroundColor: 'red',
    },
    textBtn1: {
        fontWeight: "bold",
        fontSize: "17px",
        color: "#FFF",
    },
});