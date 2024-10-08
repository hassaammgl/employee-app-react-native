import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Entypo, Feather } from "@expo/vector-icons";

const getRGBfromString = (text) => {
	let hash = 0;
	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}
	const r = (hash & 0xff0000) >> 16;
	const g = (hash & 0x00ff00) >> 8;
	const b = hash & 0x0000ff;
	return `rgb(${r}, ${g}, ${b})`;
};

const EmployeeListCard = ({ data }) => {
	return (
		<Link
			href={{
				pathname: "/(info)/[_id]",
				params: { _id: "sfdsgsdgshgsdgsdfshgbv cbhdfhd" },
			}}
			asChild
		>
			<TouchableOpacity style={styles.EmployeeListCardContainer}>
				<View
					style={{
						width: 50,
						height: 50,
						borderRadius: 25,
						backgroundColor: getRGBfromString("HAsasasfa"),
						justifyContent: "center",
						alignItems: "center",
						marginRight: 10,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={styles.EmployeeListCardAvatarText}>A</Text>
				</View>
				<View style={styles.EmployeeListCardTextContainer}>
					<Text style={styles.EmployeeListCardText}>
						{"data.name"}
					</Text>
				</View>
				<View style={styles.EmployeeListCardIcon}>
					<Entypo name="chevron-right" size={24} color="white" />
				</View>
			</TouchableOpacity>
		</Link>
	);
};

const MarkAttendanceCard = () => {
	return (
		<TouchableOpacity
			onPress={() => {}}
			style={styles.EmployeeListCardContainer}
		>
			<View
				style={{
					width: 50,
					height: 50,
					borderRadius: 25,
					backgroundColor: getRGBfromString("HAsasasfa"),
					justifyContent: "center",
					alignItems: "center",
					marginRight: 10,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={styles.EmployeeListCardAvatarText}>A</Text>
			</View>
			<View style={styles.EmployeeListCardTextContainer}>
				<Text style={styles.EmployeeListCardText}>Name</Text>
			</View>
			<View style={styles.EmployeeListCardIcon}>
				<Entypo name="check" size={24} color="white" />
			</View>
		</TouchableOpacity>
	);
};

const EditEmployeeListCard = ({ data }) => {
	return (
		<Link
			href={{
				pathname: "/(forms)/editEmployee",
				params: { _id: "sfdsgsdgshgsdgsdfshgbv cbhdfhd" },
			}}
			asChild
		>
			<TouchableOpacity style={styles.EmployeeListCardContainer}>
				<View
					style={{
						width: 50,
						height: 50,
						borderRadius: 25,
						backgroundColor: getRGBfromString("HAsasasfa"),
						justifyContent: "center",
						alignItems: "center",
						marginRight: 10,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={styles.EmployeeListCardAvatarText}>A</Text>
				</View>
				<View style={styles.EmployeeListCardTextContainer}>
					<Text style={styles.EmployeeListCardText}>
						{"data.name"}
					</Text>
				</View>
				<View style={styles.EmployeeListCardIcon}>
					<Entypo name="chevron-right" size={24} color="white" />
				</View>
			</TouchableOpacity>
		</Link>
	);
};

const CallEmployeeListCard = ({ data }) => {
	const callEmployee = () => {};
	return (
		<TouchableOpacity
			onPress={callEmployee}
			style={styles.EmployeeListCardContainer}
		>
			<View
				style={{
					width: 50,
					height: 50,
					borderRadius: 25,
					backgroundColor: getRGBfromString("HAsasasfa"),
					justifyContent: "center",
					alignItems: "center",
					marginRight: 10,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={styles.EmployeeListCardAvatarText}>A</Text>
			</View>
			<View style={styles.EmployeeListCardTextContainer}>
				<Text style={styles.EmployeeListCardText}>{"data.name"}</Text>
			</View>
			<View style={styles.EmployeeListCardIcon}>
				<Feather name="phone-call" size={24} color="white" />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	EmployeeListCardContainer: {
		flex: 1,
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 10,
		flexDirection: "row",
		margin: 10,
		alignItems: "center",
		justifyContent: "space-between",
	},
	EmployeeListCardAvatarText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000",
	},
	EmployeeListCardTextContainer: {
		flex: 1,
		justifyContent: "center",
	},
	EmployeeListCardText: {
		fontSize: 20,
		color: "#000",
	},
	EmployeeListCardIcon: {
		backgroundColor: "black",
		width: 40,
		height: 40,
		alignItems: "center",
		borderRadius: 10,
		justifyContent: "center",
		margin: 5,
		marginRight: 10,
	},
});

export {
	CallEmployeeListCard,
	EmployeeListCard,
	MarkAttendanceCard,
	EditEmployeeListCard,
};
