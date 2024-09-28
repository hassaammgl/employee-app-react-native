import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Redirect, useRouter } from "expo-router";

const index = () => {
	const router = useRouter();

	const handleSignIn = () => {
		router.push("/(auth)/login");
	};

	const handleCreateAccount = () => {
		router.push("/(auth)/register");
	};

	return (
		<Redirect href="/(forms)/addEmployee" />
		// <View style={styles.container}>
		// 	<View style={styles.imageContainer}>
		// 		<Image
		// 			source={require("../assets/welcome.png")}
		// 			style={styles.image}
		// 		/>
		// 	</View>

		// 	<Text style={styles.title}>Welcome to the KaamWala</Text>

		// 	{/* Subtitle Text */}
		// 	<Text style={styles.subtitle}>
		// 		Manage your workforce efficiently, all in one place
		// 	</Text>
		// 	<View>
		// 		<TouchableOpacity
		// 			onPress={handleCreateAccount}
		// 			style={styles.createAccountButton}
		// 		>
		// 			<Text style={styles.createAccountText}>Create account</Text>
		// 		</TouchableOpacity>
		// 		<TouchableOpacity
		// 			onPress={handleSignIn}
		// 			style={styles.loginButton}
		// 		>
		// 			<Text style={styles.loginText}>Log In</Text>
		// 		</TouchableOpacity>
		// 	</View>
		// </View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#ffffff",
	},
	imageContainer: {
		marginBottom: 30,
	},
	image: {
		width: 250,
		height: 250,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		color: "#6e6e6e",
		textAlign: "center",
		marginBottom: 40,
		paddingHorizontal: 30,
	},
	loginButton: {
		backgroundColor: "#000",
		paddingVertical: 15,
		paddingHorizontal: 100,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	loginText: {
		color: "#ffffff",
		fontWeight: "bold",
		fontSize: 16,
	},
	createAccountButton: {
		marginBottom: 15,
		borderColor: "#000",
		borderWidth: 2,
		paddingVertical: 15,
		paddingHorizontal: 90,
		borderRadius: 8,
	},
	createAccountText: {
		color: "#000",
		fontWeight: "bold",
		fontSize: 16,
	},
});

export default index;
