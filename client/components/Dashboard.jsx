import {
	AntDesign,
	FontAwesome5,
	FontAwesome,
	FontAwesome6,
	Fontisto,
	Octicons,
	Entypo,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<TouchableOpacity>
				<View style={styles.headerContainerIcon}>
					<AntDesign name="barschart" size={24} color="black" />
				</View>
			</TouchableOpacity>
			<Text style={styles.headerText}>Dashboard</Text>
			<TouchableOpacity>
				<View style={styles.headerContainerIcon}>
					<AntDesign name="logout" size={24} color="black" />
				</View>
			</TouchableOpacity>
		</View>
	);
};

const PresentEmployeesCard = ({ presentEmployees }) => {
	return (
		<View style={styles.presentEmployeeCard}>
			<View style={styles.employeeContainerIcon}>
				<FontAwesome5 name="users" size={24} color="white" />
			</View>
			<Text style={styles.presentEmployeeText}>Present Employees </Text>
			<Text style={styles.employeeCount}>{presentEmployees}</Text>
		</View>
	);
};

const AttenListCard = () => {
	const handlePress = () => {};
	return (
		<View style={styles.AttenListCardContainer}>
			<TouchableOpacity
				onPress={handlePress}
				style={styles.AttenListCards}
			>
				<View style={styles.AttenListCardsIcon}>
					<FontAwesome name="list-ul" size={24} color="black" />
				</View>
				<Text style={styles.AttenListCardsText}>Empoloyee List</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.AttenListCards}>
				<View style={styles.AttenListCardsIcon}>
					<FontAwesome6 name="user-check" size={24} color="black" />
				</View>
				<Text style={styles.AttenListCardsText}>Mark Attendance</Text>
			</TouchableOpacity>
		</View>
	);
};

const ReportsCard = () => {
	return (
		<View style={styles.ReportsCardContainer}>
			<TouchableOpacity style={styles.ReportsCards}>
				<View style={styles.ReportsCardsIcon}>
					<Octicons name="repo" size={24} color="white" />
				</View>
				<Text style={styles.ReportsCardsText}>Attendance Report</Text>
				<View style={styles.ReportsCardsIcon}>
					<Entypo name="chevron-right" size={24} color="white" />
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.ReportsCards}>
				<View style={styles.ReportsCardsIcon}>
					<Fontisto name="persons" size={24} color="white" />
				</View>
				<Text style={styles.ReportsCardsText}>All Designations</Text>
				<View style={styles.ReportsCardsIcon}>
					<Entypo name="chevron-right" size={24} color="white" />
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.ReportsCards}>
				<View style={styles.ReportsCardsIcon}>
					<FontAwesome5
						name="money-bill-wave-alt"
						size={24}
						color="white"
					/>
				</View>
				<Text style={styles.ReportsCardsText}>Workers Saleries</Text>
				<View style={styles.ReportsCardsIcon}>
					<Entypo name="chevron-right" size={24} color="white" />
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.ReportsCards}>
				<View style={styles.ReportsCardsIcon}>
					<Ionicons name="time-sharp" size={24} color="white" />
				</View>
				<Text style={styles.ReportsCardsText}>Overtime Reports</Text>
				<View style={styles.ReportsCardsIcon}>
					<Entypo name="chevron-right" size={24} color="white" />
				</View>
			</TouchableOpacity>
		</View>
	);
};

const AddEmployees = () => {
	const router = useRouter();
	return (
		<View style={styles.EmployeesCardContainer}>
			<View>
				<TouchableOpacity
					onPress={() => router.replace("/(forms)/addEmployee")}
					style={styles.EmployeesCards}
				>
					<View style={styles.EmployeesCardsIcon}>
						<Ionicons
							name="person-add-sharp"
							size={24}
							color="black"
						/>
					</View>
					<Text style={styles.EmployeesCardsText}>Add Employee</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.EmployeesCards}>
					<View style={styles.EmployeesCardsIcon}>
						<MaterialCommunityIcons
							name="account-details"
							size={24}
							color="black"
						/>
					</View>
					<Text style={styles.EmployeesCardsText}>
						Employee Details
					</Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style={styles.EmployeesCards}>
					<View style={styles.EmployeesCardsIcon}>
						<AntDesign name="edit" size={24} color="black" />
					</View>
					<Text style={styles.EmployeesCardsText}>Edit Employee</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.EmployeesCards}>
					<View style={styles.EmployeesCardsIcon}>
						<MaterialCommunityIcons
							name="account-details"
							size={24}
							color="black"
						/>
					</View>
					<Text style={styles.EmployeesCardsText}>
						Make Phone Calls
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	headerContainer: {
		backgroundColor: "rgba(0,0,0,0.2)",
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
	presentEmployeeCard: {
		backgroundColor: "#fff",
		padding: 15,
		flexDirection: "row",
		height: 70,
		margin: 15,
		borderRadius: 10,
		alignItems: "center",
	},
	employeeContainerIcon: {
		backgroundColor: "#000",
		width: 40,
		height: 40,
		borderRadius: 7,
		alignItems: "center",
		justifyContent: "center",
	},
	presentEmployeeText: {
		color: "#000",
		fontSize: 18,
		marginLeft: 10,
	},
	employeeCount: {
		color: "#fff",
		fontSize: 18,
		marginLeft: "auto",
		fontWeight: "bold",
		backgroundColor: "rgba(0,0,0,0.7)",
		padding: 5,
		borderRadius: 5,
	},
	AttenListCardContainer: {
		flexDirection: "row",
		height: 80,
		margin: 15,
		marginTop: 5,
		borderRadius: 10,
		justifyContent: "space-between",
		alignItems: "center",
	},
	AttenListCards: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		width: 160,
		height: 100,
		borderRadius: 10,
	},
	AttenListCardsIcon: {
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		width: 50,
		height: 50,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		margin: 5,
	},
	AttenListCardsText: {
		fontSize: 16,
		color: "#000",
		fontWeight: "bold",
	},
	ReportsCardContainer: {
		margin: 15,
		marginTop: 5,
		borderRadius: 10,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "gray",
		padding: 10,
		paddingTop: 5,
		paddingBottom: 15,
	},
	ReportsCards: {
		width: "100%",
		backgroundColor: "#fff",
		padding: 5,
		flexDirection: "row",
		marginTop: 10,
		height: 60,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "space-between",
	},
	ReportsCardsIcon: {
		backgroundColor: "black",
		width: 40,
		height: 40,
		alignItems: "center",
		borderRadius: 10,
		justifyContent: "center",
		margin: 5,
		marginRight: 10,
	},
	ReportsCardsText: {
		fontSize: 16,
		color: "#000",
		marginRight: "auto",
		fontWeight: "bold",
	},
	EmployeesCardContainer: {
		margin: 15,
		marginTop: 5,
		borderRadius: 10,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "gray",
		padding: 10,
		paddingTop: 5,
		paddingBottom: 15,
		flexWrap: "wrap",
		flexDirection: "row",
	},
	EmployeesCards: {
		backgroundColor: "#fff",
		padding: 5,
		margin: 10,
		flex: 1,
		height: 100,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	EmployeesCardsIcon: {
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		width: 50,
		height: 50,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		margin: 5,
	},
	EmployeesCardsText: {
		fontSize: 15,
		color: "#000",
		fontWeight: "bold",
		marginTop: 5,
	},
});

export {
	Header,
	PresentEmployeesCard,
	AttenListCard,
	ReportsCard,
	AddEmployees,
	styles,
};
