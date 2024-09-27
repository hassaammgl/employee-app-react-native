import React, { useState } from "react";
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

const index = () => {
	// State to store employee count (this can be fetched from an API)
	const [presentEmployees, setPresentEmployees] = useState(270); // Dummy count

	return (
		<LinearGradient
			colors={["rgb(0,0,0)", "transparent"]}
			style={styles.container}
		>
			<ScrollView>
				<Header />
				<PresentEmployeesCard presentEmployees={presentEmployees} />
				<AttenListCard />
				<ReportsCard />
				<AddEmployees />
			</ScrollView>
		</LinearGradient>
	);
};

export default index;
