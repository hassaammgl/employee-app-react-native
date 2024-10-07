import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Header = ({ text }) => {
	const router = useRouter();
	return (
		<View style={styles.headerContainer}>
			<TouchableOpacity onPress={() => router.back()}>
				<View style={styles.headerContainerIcon}>
					<AntDesign name="leftcircle" size={24} color="black" />
				</View>
			</TouchableOpacity>
			<Text style={styles.headerText}>{text}</Text>
			<TouchableOpacity>
				<View style={styles.headerContainerIcon}>
					<AntDesign name="logout" size={24} color="black" />
				</View>
			</TouchableOpacity>
		</View>
	);
};
const FormsHeader = ({ text }) => {
	const router = useRouter();
	return (
		<View style={styles.headerContainer2}>
			<TouchableOpacity onPress={() => router.back()}>
				<View style={styles.headerContainerIcon}>
					<AntDesign name="leftcircle" size={24} color="black" />
				</View>
			</TouchableOpacity>
			<Text style={styles.headerText}>{text}</Text>
			<TouchableOpacity>
				<View style={styles.headerContainerIcon}>
					<AntDesign name="logout" size={24} color="black" />
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: "rgba(0,0,0,0.2)",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	headerContainer2: {
		backgroundColor: "rgb(0,0,0)",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	headerContainerIcon: {
		backgroundColor: "#f5f5f5",
		width: 40,
		height: 40,
		borderRadius: 7,
		alignItems: "center",
		justifyContent: "center",
		margin: 3,
	},
	headerText: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default Header;
export { FormsHeader };
