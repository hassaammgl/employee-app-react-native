import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { callOnPhoneNumber } from "../utils";
import axios from "axios";

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
				params: { _id: data._id },
			}}
			asChild
		>
			<TouchableOpacity style={styles.EmployeeListCardContainer}>
				<View
					style={{
						width: 50,
						height: 50,
						borderRadius: 25,
						backgroundColor: getRGBfromString(data.firstName),
						justifyContent: "center",
						alignItems: "center",
						marginRight: 10,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={styles.EmployeeListCardAvatarText}>
						{data.firstName.substring(0, 1)}
					</Text>
				</View>
				<View style={styles.EmployeeListCardTextContainer}>
					<Text style={styles.EmployeeListCardText}>
						{data.firstName} {data.lastName}
					</Text>
				</View>
				<View style={styles.EmployeeListCardIcon}>
					<Entypo name="chevron-right" size={24} color="white" />
				</View>
			</TouchableOpacity>
		</Link>
	);
};

// [TODO:] fix attendace

const MarkAttendanceCard = ({ data }) => {
	const handlePressAttendance = async () => {
		console.log("marking attendance", data.firstName);
		const response = await axios.post(
			"http://192.168.100.40:3000/api/add-attendance",
			{
				ownerID:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGZjMTA1YTVhNjY4NjgzMGEyYzA2ZSIsImlhdCI6MTcyOTE3NTM4MCwiZXhwIjoxNzI5MjYxNzgwfQ.kdE3pRgjR8CGltt2QlPW5eDvj7fQ7egqh2qxRoq2P7A",
				employeeId: data._id,
			}
		);
		console.log(response);
	};

	return (
		<TouchableOpacity
			onPress={handlePressAttendance}
			style={styles.EmployeeListCardContainer}
		>
			<View
				style={{
					width: 50,
					height: 50,
					borderRadius: 25,
					backgroundColor: getRGBfromString(data.firstName),
					justifyContent: "center",
					alignItems: "center",
					marginRight: 10,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={styles.EmployeeListCardAvatarText}>
					{data.firstName.substring(0, 1)}
				</Text>
			</View>
			<View style={styles.EmployeeListCardTextContainer}>
				<Text style={styles.EmployeeListCardText}>
					{`${data.firstName} ${data.lastName}`}
				</Text>
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
	const callEmployee = (phoneNumber) => {
		callOnPhoneNumber(phoneNumber);
	};

	return (
		<TouchableOpacity
			onPress={() => callEmployee(data.phoneNumber)}
			style={styles.EmployeeListCardContainer}
		>
			<View
				style={{
					width: 50,
					height: 50,
					borderRadius: 25,
					backgroundColor: getRGBfromString(`${data.firstName}`),
					justifyContent: "center",
					alignItems: "center",
					marginRight: 10,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={styles.EmployeeListCardAvatarText}>
					{data.firstName.substring(0, 1)}
				</Text>
			</View>
			<View style={styles.EmployeeListCardTextContainer}>
				<Text
					style={styles.EmployeeListCardText}
				>{`${data.firstName} ${data.lastName}`}</Text>
			</View>
			<View style={styles.EmployeeListCardIcon}>
				<Feather name="phone-call" size={24} color="white" />
			</View>
		</TouchableOpacity>
	);
};

const AttendanceEmployeeListCard = ({ data }) => {
	return (
		<View style={styles.EmployeeListCardContainer}>
			<View
				style={{
					width: 50,
					height: 50,
					borderRadius: 25,
					backgroundColor: getRGBfromString(data.firstName),
					justifyContent: "center",
					alignItems: "center",
					marginRight: 10,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={styles.EmployeeListCardAvatarText}>
					{data.firstName.substring(0, 1)}
				</Text>
			</View>
			<View style={styles.EmployeeListCardTextContainer}>
				<Text style={styles.EmployeeListCardText}>
					{data.firstName} {data.lastName}
				</Text>
			</View>
			<Link
				href={{
					pathname: `/(info)/PresentDays`,
					params: { _id: data._id },
				}}
				asChild
			>
				<TouchableOpacity style={styles.EmployeeListCardIcon}>
					<MaterialCommunityIcons
						name="information"
						size={24}
						color="white"
					/>
				</TouchableOpacity>
			</Link>
		</View>
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
	EmployeeListCardBtn: {
		backgroundColor: "black",
		height: 40,
		color: "#fff",
		alignItems: "center",
		borderRadius: 10,
		justifyContent: "center",
		margin: 5,
		marginRight: 10,
	},
	EmployeeListCardBtnText: {
		margin: 5,
		color: "#fff",
	},
});

export {
	CallEmployeeListCard,
	EmployeeListCard,
	MarkAttendanceCard,
	EditEmployeeListCard,
	AttendanceEmployeeListCard,
};
