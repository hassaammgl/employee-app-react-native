import {
	ScrollView,
	View,
	Text,
	Linking,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter, Link } from "expo-router";

const Profile = ({ data }) => {
	const router = useRouter();

	const handleCallPress = (phoneNumber) => {
		let phoneNumberUrl = `tel:${phoneNumber}`;
		Linking.canOpenURL(phoneNumberUrl)
			.then((supported) => {
				if (!supported) {
					Alert.alert(
						"Error",
						`Phone Call is not available: ${phoneNumber}`
					);
				} else {
					return Linking.openURL(phoneNumberUrl);
				}
			})
			.catch((err) => console.error("An error occurred", err));
	};

	const handleEditPress = () => {
		router.push("/(forms)/editEmployee");
	};

	return (
		<ScrollView style={styles.container}>
			<Avatar name={"Hassaam"} />
			<View style={styles.detailsContainer}>
				<DetailsTextFeilds title={"Name"} value={"Hassaam Mughal"} />
				<DetailsTextFeilds title={"Phone"} value={"0300-123456"} />
				<DetailsTextFeilds title={"Address"} value={"Nankana Sahib"} />
				<DetailsTextFeilds title={"City"} value={"bhatian chack"} />
				<DetailsTextFeilds title={"CNIC"} value={"1232345177113"} />
				<DetailsTextFeilds title={"Salary"} value={"5674"} />
				<DetailsTextFeilds title={"Designation"} value={"Fighter"} />
				<DetailsTextFeilds title={"Work Type"} value={"day by day"} />
				<DetailsTextFeilds
					title={"Date of Joining"}
					value={"12-jun-2022"}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Link
					href={{
						pathname: "/(forms)/editEmployee",
						params: { _id: "sfafs dfg ergd fgy htry54r" },
					}}
					asChild
				>
					<TouchableOpacity
						onPress={() => router.push("/(forms)/editEmployee")}
						style={styles.button}
					>
						<FontAwesome name="edit" size={24} color="white" />
						<Text style={styles.buttonText}>Edit</Text>
					</TouchableOpacity>
				</Link>
				<TouchableOpacity
					onPress={() => handleCallPress("12345678901")}
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
		fontSize: 20,
		marginLeft: 10,
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
