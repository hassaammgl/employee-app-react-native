import { StyleSheet, ScrollView } from "react-native";
import React, { useState, useCallback, useMemo } from "react";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { EmployeeListCard } from "../../components/Cards";

import { useFocusEffect } from "expo-router";
import axios from "axios";

const api = "http://192.168.100.40:3000/api";

const Employes = () => {
	const [list, setlist] = useState([]);

	const fetchEmployees = useCallback(async () => {
		try {
			const response = await axios.post(`${api}/get-all-employees`, {
				ownerID:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGZjMTA1YTVhNjY4NjgzMGEyYzA2ZSIsImlhdCI6MTcyOTE3NTM4MCwiZXhwIjoxNzI5MjYxNzgwfQ.kdE3pRgjR8CGltt2QlPW5eDvj7fQ7egqh2qxRoq2P7A",
			});

			console.log("response:", response.data.data);
			setlist(response.data.data);
		} catch (error) {
			console.log(error);
		}
	}, [api]);

	const memoizedFetchEmployees = useMemo(
		() => fetchEmployees,
		[fetchEmployees]
	);

	useFocusEffect(
		useCallback(() => {
			memoizedFetchEmployees();
		}, [memoizedFetchEmployees])
	);
	return (
		<LinearGradient
			colors={["rgb(0,0,0)", "transparent"]}
			style={styles.container}
		>
			<Header text={"Employee's List"} />
			<ScrollView>
				{list?.map((item, index) => (
					<EmployeeListCard data={item} key={index} />
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

export default Employes;
