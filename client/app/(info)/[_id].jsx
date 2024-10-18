import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { Suspense, lazy } from "react";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";

const Profile = lazy(() => import("../../components/Profile"));

const page = () => {
	const { _id } = useLocalSearchParams();
	return (
		<LinearGradient
			colors={["rgb(0,0,0)", "transparent"]}
			style={styles.container}
		>
			<Header text={"Employee Details"} />
			<Suspense fallback={<Text>Loading...</Text>}>
				<Profile data={_id} />
			</Suspense>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
});

export default page;
