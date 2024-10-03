import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

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
				<View style={styles.EmployeeListCardAvatar}>
					<Text style={styles.EmployeeListCardAvatarText}>A</Text>
				</View>
				<View style={styles.EmployeeListCardTextContainer}>
					<Text style={styles.EmployeeListCardText}>
						{"data.name"}
					</Text>
				</View>
			</TouchableOpacity>
		</Link>
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
	EmployeeListCardAvatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#e3e3e3",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
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
});

export { EmployeeListCard };
