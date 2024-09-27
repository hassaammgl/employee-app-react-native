import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Alert,
} from "react-native";
import { useRouter } from "expo-router";

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleLogin = () => {
		if (email === "" || password === "") {
			Alert.alert("Missing Fields", "Please fill out all fields.");
			return;
		}
		Alert.alert("Success", "Login Successful!");
		// Handle login logic here (e.g., API call)
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Log in</Text>

			{/* Email Input */}
			<TextInput
				style={styles.input}
				placeholder="Email address"
				value={email}
				onChangeText={(text) => setEmail(text)}
				keyboardType="email-address"
			/>

			{/* Password Input */}
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry
			/>

			{/* Login Button */}
			<TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
				<Text style={styles.loginButtonText}>Log in</Text>
			</TouchableOpacity>

			{/* Create Account Button */}
			<View style={styles.registerContainer}>
				<Text style={styles.registerText}>Don't have an account?</Text>
				<TouchableOpacity
					onPress={() => router.push("/(auth)/register")}
				>
					<Text style={styles.registerLink}> Create account</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 24,
		backgroundColor: "#F8F8F8",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 32,
	},
	input: {
		height: 50,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 10,
		marginBottom: 20,
		backgroundColor: "#fff",
	},
	loginButton: {
		backgroundColor: "#000",
		paddingVertical: 15,
		borderRadius: 8,
		marginTop: 20,
	},
	loginButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	registerContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 20,
	},
	registerText: {
		fontSize: 14,
		color: "#333",
	},
	registerLink: {
		fontSize: 14,
		color: "#000",
		fontWeight: "bold",
	},
});

export default LoginScreen;
