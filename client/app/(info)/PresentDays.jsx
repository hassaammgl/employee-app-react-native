import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	Modal,
	TouchableOpacity,
} from "react-native";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useLocalSearchParams, useFocusEffect } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Header";
import moment from "moment";
import { calender } from "../../utils/Calender";

const PresentDays = () => {
	const { _id } = useLocalSearchParams();
	const [month, setMonth] = useState(
		moment().format("MMMM Do YYYY").split(" ")[0]
	);

	useEffect(() => {
		
	}, [month]);

	return (
		<LinearGradient
			colors={["rgb(0,0,0)", "transparent"]}
			style={styles.container}
		>
			<Header text={"Attendance Report"} />
			<ScrollView>
				<View style={styles.selectionBtnsContainer}>
					<MonthSelector month={month} setMonth={setMonth} />
				</View>
			</ScrollView>
		</LinearGradient>
	);
};

const MonthSelector = ({ month, setMonth }) => {
	return (
		<View style={styles.selectionBtnsContainerMain}>
			<View style={{ marginRight: 10 }}>
				<TouchableOpacity style={styles.selectionBtns}>
					<Text style={styles.selectionBtnsText}>
						Month:
						<Text style={{ color: "blue", fontWeight: "bold" }}>
							{" " + month}
						</Text>
					</Text>
				</TouchableOpacity>
			</View>
			<ScrollView horizontal style={styles.innerSelectionBtns}>
				{calender.map((mnth) => (
					<TouchableOpacity
						onPress={() => setMonth(mnth)}
						style={styles.selectionBtns}
					>
						<Text style={styles.selectionBtnsText}>
							<Text>{mnth}</Text>
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	selectionBtnsContainer: {
		backgroundColor: "#f5f5f5",
		padding: 10,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		margin: "auto",
		marginTop: 20,
		borderRadius: 10,
		flex: 1,
	},
	selectionBtnsContainerMain: {
		flexDirection: "row",
	},
	innerSelectionBtns: {
		flexDirection: "row",
		width: "100%",
	},
	selectionBtns: {
		flex: 1,
		backgroundColor: "gray",
		padding: 10,
		borderRadius: 10,
		margin: 5,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	selectionBtnsText: {
		color: "white",
		fontWeight: "bold",
	},
});

export default PresentDays;
