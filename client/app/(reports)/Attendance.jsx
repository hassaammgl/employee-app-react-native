import { StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { AttendanceEmployeeListCard } from "../../components/Cards";

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Attendance = () => {
	return (
		<LinearGradient
			colors={["rgb(0,0,0)", "transparent"]}
			style={styles.container}
		>
			<Header text={"Attendance Report"} />
			<ScrollView>
				{a.map((item, index) => (
					<AttendanceEmployeeListCard key={index} />
				))}
			</ScrollView>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
});

export default Attendance;
