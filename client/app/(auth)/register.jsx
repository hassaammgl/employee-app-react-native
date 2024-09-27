import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Alert,
	ToastAndroid,
} from "react-native";
import { useRouter } from "expo-router";
import { apiCalls } from "../../serverfuncs";

const RegisterScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [cnic, setCnic] = useState("");

	const router = useRouter();

	const handleRegister = async () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (
			password === "" ||
			confirmPassword === "" ||
			firstName === "" ||
			lastName === "" ||
			phoneNumber === "" ||
			address === "" ||
			city === "" ||
			cnic === ""
		) {
			ToastAndroid.show(
				"Please fill out all fields.",
				ToastAndroid.SHORT
			);
			return;
		} else if (password.length < 8) {
			ToastAndroid.show(
				"Password must be at least 8 characters long.",
				ToastAndroid.SHORT
			);
			return;
		} else if (cnic.length !== 13) {
			ToastAndroid.show(
				"CNIC must be 13 digits long.",
				ToastAndroid.SHORT
			);
			return;
		} else if (!emailRegex.test(email)) {
			ToastAndroid.show("Invalid Email", ToastAndroid.SHORT);
			return;
		} else if (isNaN(phoneNumber)) {
			ToastAndroid.show(
				"Phone number must be a number.",
				ToastAndroid.SHORT
			);
			return;
		} else if (password !== confirmPassword) {
			ToastAndroid.show("Passwords do not match.", ToastAndroid.SHORT);
			return;
		} else {
			const res = await apiCalls.registerUser({
				email,
				password,
				firstName,
				lastName,
				phoneNumber,
				address,
				city,
				cnic,
			});
			console.log(res.data);
			if (res.status === 201) {
				ToastAndroid.show(
					"Account created successfully.",
					ToastAndroid.SHORT
				);
				router.push("/(auth)/login");
			} else if (res.status === 409) {
				ToastAndroid.show("Email already exists.", ToastAndroid.SHORT);
			} else {
				ToastAndroid.show("Something went wrong.", ToastAndroid.SHORT);
			}
		}
	};

	const handlePressLogin = () => {
		router.push("/(auth)/login");
	};

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Create account</Text>
			<TextInput
				style={styles.input}
				value={firstName}
				onChangeText={(text) => setFirstName(text)}
				placeholder="First name"
			/>
			<TextInput
				style={styles.input}
				value={lastName}
				onChangeText={(text) => setLastName(text)}
				placeholder="Last name"
			/>
			<TextInput
				style={styles.input}
				placeholder="Email address"
				value={email}
				onChangeText={(text) => setEmail(text)}
				keyboardType="email-address"
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry
			/>
			<TextInput
				style={styles.input}
				placeholder="Confirm password"
				value={confirmPassword}
				onChangeText={(text) => setConfirmPassword(text)}
				secureTextEntry
			/>
			<TextInput
				style={styles.input}
				value={phoneNumber}
				onChangeText={(text) => setPhoneNumber(text)}
				keyboardType="phone-pad"
				placeholder="Phone number"
			/>
			<TextInput
				style={styles.input}
				value={address}
				onChangeText={(text) => setAddress(text)}
				placeholder="Address"
			/>
			<TextInput
				style={styles.input}
				value={city}
				onChangeText={(text) => setCity(text)}
				placeholder="City"
			/>
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				value={cnic}
				onChangeText={(text) => setCnic(text)}
				placeholder="CNIC (XXXXXXXXXXXXX)"
			/>

			<TouchableOpacity
				style={styles.createAccountButton}
				onPress={handleRegister}
			>
				<Text style={styles.createAccountButtonText}>
					Create account
				</Text>
			</TouchableOpacity>

			<View style={styles.loginContainer}>
				<Text style={styles.loginText}>Already have an account?</Text>
				<TouchableOpacity onPress={handlePressLogin}>
					<Text style={styles.loginLink}>Log in</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	createAccountButton: {
		backgroundColor: "#000",
		paddingVertical: 15,
		borderRadius: 8,
		marginTop: 10,
	},
	createAccountButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	loginContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
		marginBottom: 40,
	},
	loginText: {
		fontSize: 14,
		color: "#333",
	},
	loginLink: {
		fontSize: 14,
		color: "#000",
		fontWeight: "bold",
	},
});

export default RegisterScreen;
