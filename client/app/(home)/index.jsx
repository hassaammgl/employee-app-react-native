import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";

const index = () => {
	// State to store employee count (this can be fetched from an API)
	const [presentEmployees, setPresentEmployees] = useState(27); // Dummy count

	return (
		<ScrollView style={styles.container}>
			{/* Header Section */}
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>
					Employee Management Dashboard
				</Text>
			</View>

			{/* Present Employee Section */}
			<View style={styles.presentEmployeeCard}>
				<Text style={styles.presentEmployeeText}>
					Present Employees
				</Text>
				<Text style={styles.employeeCount}>{presentEmployees}</Text>
			</View>

			{/* Buttons Section */}
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => alert("Info button pressed")}
				>
					<Text style={styles.buttonText}>Info</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => alert("Reports button pressed")}
				>
					<Text style={styles.buttonText}>Reports</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => alert("Employee List pressed")}
				>
					<Text style={styles.buttonText}>Employee List</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => alert("Attendance pressed")}
				>
					<Text style={styles.buttonText}>Attendance</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => alert("Payroll pressed")}
				>
					<Text style={styles.buttonText}>Payroll</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => alert("Settings pressed")}
				>
					<Text style={styles.buttonText}>Settings</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	headerContainer: {
		backgroundColor: "#6200ee",
		paddingVertical: 20,
		paddingHorizontal: 15,
	},
	headerText: {
		fontSize: 24,
		color: "#ffffff",
		textAlign: "center",
	},
	presentEmployeeCard: {
		backgroundColor: "#ffffff",
		margin: 20,
		borderRadius: 10,
		padding: 20,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	presentEmployeeText: {
		fontSize: 18,
		color: "#333",
	},
	employeeCount: {
		fontSize: 40,
		fontWeight: "bold",
		color: "#6200ee",
		marginTop: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		marginTop: 10,
	},
	button: {
		backgroundColor: "#6200ee",
		borderRadius: 10,
		paddingVertical: 15,
		paddingHorizontal: 20,
		margin: 10,
		width: "40%",
	},
	buttonText: {
		color: "#ffffff",
		textAlign: "center",
		fontSize: 16,
		fontWeight: "600",
	},
});
