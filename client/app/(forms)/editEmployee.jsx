import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const editEmployee = () => {
	const { _id } = useLocalSearchParams();

	return (
		<View>
			<Text>editEmployee {_id}</Text>
		</View>
	);
};

export default editEmployee;
