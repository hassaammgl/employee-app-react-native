import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { callOnPhoneNumber } from "../utils";
import { useFocusEffect } from "expo-router";
import axios from "axios";
import moment from "moment";

const api = "http://192.168.100.40:3000/api";

const Profile = ({ data }) => {
	const [profileData, setProfileData] = React.useState({});

	const fetchEmployeeData = useCallback(async () => {
		try {
			const response = await axios.post(`${api}/get-employee-data`, {
				ownerID:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGZjMTA1YTVhNjY4NjgzMGEyYzA2ZSIsImlhdCI6MTcyOTE3NTM4MCwiZXhwIjoxNzI5MjYxNzgwfQ.kdE3pRgjR8CGltt2QlPW5eDvj7fQ7egqh2qxRoq2P7A",
				employeeId: data,
			});

			console.log("response:", response.data.employeeData);
			setProfileData(response.data.employeeData);
		} catch (error) {
			console.log(error);
		}
	}, [api]);

	const memoizedfetchEmployeeData = useMemo(
		() => fetchEmployeeData,
		[fetchEmployeeData]
	);

	useFocusEffect(
		useCallback(() => {
			memoizedfetchEmployeeData();
		}, [memoizedfetchEmployeeData])
	);

	const handleCallPress = (phoneNumber) => {
		callOnPhoneNumber(phoneNumber);
	};

	return (
		<ScrollView style={styles.container}>
			<Avatar name={`${profileData.firstName}`} />
			<View style={styles.detailsContainer}>
				<DetailsTextFeilds
					title={"Name"}
					value={`${profileData.firstName} ${profileData.lastName}`}
				/>
				<DetailsTextFeilds
					title={"Phone"}
					value={profileData.phoneNumber}
				/>
				<DetailsTextFeilds
					title={"Address"}
					value={profileData.address}
				/>
				<DetailsTextFeilds title={"City"} value={profileData.city} />
				<DetailsTextFeilds title={"CNIC"} value={profileData.cnic} />
				<DetailsTextFeilds
					title={"Salary"}
					value={profileData.salary}
				/>
				<DetailsTextFeilds
					title={"Designation"}
					value={profileData.designation}
				/>
				<DetailsTextFeilds
					title={"Work Type"}
					value={profileData.workType}
				/>
				<DetailsTextFeilds
					title={"Date of Joining"}
					value={moment(profileData.dateOfJoining).format(
						"MMMM Do YYYY, h:mm:ss a"
					)}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Link
					href={{
						pathname: "/(forms)/editEmployee",
						params: { _id: profileData._id },
					}}
					asChild
				>
					<TouchableOpacity style={styles.button}>
						<FontAwesome name="edit" size={24} color="white" />
						<Text style={styles.buttonText}>Edit</Text>
					</TouchableOpacity>
				</Link>
				<TouchableOpacity
					onPress={() => handleCallPress(profileData.phoneNumber)}
					style={styles.button}
				>
					<FontAwesome name="phone" size={20} color="white" />
					<Text style={styles.buttonText}>Call</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const Avatar = ({ name }) => {
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
	return (
		<View style={styles.AvatarContainer}>
			<View
				style={{
					backgroundColor: getRGBfromString(name),
					height: 150,
					width: 150,
					borderRadius: 100,
					alignItems: "center",
					justifyContent: "center",
					margin: 20,
				}}
			>
				<Text style={styles.AvatarText}>{name.substring(0, 1)}</Text>
			</View>
		</View>
	);
};

const DetailsTextFeilds = ({ title, value }) => {
	return (
		<View style={styles.detailsTextFields}>
			<Text style={styles.detailsText}>{title}:</Text>
			<Text style={styles.detailsTextValue}>{value}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	AvatarContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	AvatarText: {
		color: "white",
		fontSize: 50,
		fontWeight: "bold",
	},
	detailsContainer: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
		margin: 20,
		borderRadius: 10,
	},
	detailsTextFields: {
		flexDirection: "row",
		alignItems: "center",
		borderBottomColor: "gray",
		borderBottomWidth: 1,
		marginBottom: 10,
	},

	detailsText: {
		fontWeight: "bold",
		fontSize: 20,
	},

	detailsTextValue: {
		fontSize: 16,
		marginLeft: 10,
		flex: 1,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-evenly",
		margin: 20,
	},
	button: {
		backgroundColor: "rgb(0, 0, 0)",
		padding: 10,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: "30%",
	},
	buttonText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default Profile;
