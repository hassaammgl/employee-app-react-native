import { StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";

const Employes = () => {
	return (
		<LinearGradient
			colors={["rgb(0,0,0)", "transparent"]}
			style={styles.container}
		>
			<Header text={"Employee's List"} />
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
});

export default Employes;
