import React, { useState, useCallback, useMemo } from "react";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
	Header,
	PresentEmployeesCard,
	AttenListCard,
	ReportsCard,
	AddEmployees,
	styles,
} from "../../components/Dashboard";
import { useFocusEffect } from "expo-router";
import axios from "axios";
import moment from "moment";

const api = "http://192.168.100.40:3000/api";

const index = () => {
	const [presentCount, setPresentCount] = useState(0);

	const fetchEmployees = useCallback(async () => {
		try {
			const response = await axios.post(
				`${api}/get-all-present-employees`,
				{
					month: moment().format("MMMM Do YYYY").split(" ")[0],
					date: moment().format("MMMM Do YYYY").split(" ")[1],
					ownerID:
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MGZjMTA1YTVhNjY4NjgzMGEyYzA2ZSIsImlhdCI6MTcyOTE3NTM4MCwiZXhwIjoxNzI5MjYxNzgwfQ.kdE3pRgjR8CGltt2QlPW5eDvj7fQ7egqh2qxRoq2P7A",
				}
			);

			console.log("response:", response.data.data);
			setPresentCount(response.data.data);
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
			<ScrollView>
				<Header />
				<PresentEmployeesCard presentEmployees={presentCount} />
				<AttenListCard />
				<ReportsCard />
				<AddEmployees />
			</ScrollView>
		</LinearGradient>
	);
};

export default index;
