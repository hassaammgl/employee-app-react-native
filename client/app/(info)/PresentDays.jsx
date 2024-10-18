import { ScrollView, View, Text, StyleSheet } from "react-native";
import React, { useState, useCallback, useMemo } from "react";
import { useLocalSearchParams, useFocusEffect } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Header";
import { styles } from "../../components/Dashboard";

const PresentDays = () => {
	const { _id } = useLocalSearchParams();

	return (
		<LinearGradient
			colors={["rgb(0,0,0)", "transparent"]}
			style={styles.container}
		>
			<Header text={"Attendance Report"} />
			<ScrollView>
				<Text>PresentDays {_id}</Text>
			</ScrollView>
		</LinearGradient>
	);
};

const MonthSelector = () => {
	return (
		<View>
			<Text>MonthSelector</Text>
		</View>
	);
};
const DateSelector = () => {
	return (
		<View>
			<Text>MonthSelector</Text>
		</View>
	);
};

export default PresentDays;
