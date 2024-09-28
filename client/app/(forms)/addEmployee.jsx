import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	ToastAndroid,
} from "react-native";
import { useRouter } from "expo-router";
import { apiCalls } from "../../serverfuncs";

const addEmployee = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [cnic, setCnic] = useState("");
	const [salary, setSalary] = useState("");
	const [designation, setDesignation] = useState("");
	const [dutyType, setDutyType] = useState("");

	const router = useRouter();

	const handleRegisterEmployee = async () => {};

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Add Employee</Text>
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
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				value={salary}
				onChangeText={(text) => setSalary(text)}
				placeholder="Salary"
			/>
			<TextInput
				style={styles.input}
				value={designation}
				onChangeText={(text) => setDesignation(text)}
				placeholder="Designation"
			/>
			<TextInput
				style={styles.input}
				value={dutyType}
				onChangeText={(text) => setDutyType(text)}
				placeholder="Duty Type"
			/>

			<TouchableOpacity
				style={styles.createAccountButton}
				onPress={handleRegisterEmployee}
			>
				<Text style={styles.createAccountButtonText}>
					Create account
				</Text>
			</TouchableOpacity>
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
		marginBottom: 40,
	},
	createAccountButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default addEmployee;
