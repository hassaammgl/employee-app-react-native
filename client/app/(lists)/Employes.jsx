import { StyleSheet, ScrollView, Button } from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { EmployeeListCard } from "../../components/Cards";
import { Link } from "expo-router";

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Employes = () => {
	useEffect(() => {
		console.log("Employes 3");
	}, []);
	return (
		<LinearGradient
			colors={["rgb(0,0,0)", "transparent"]}
			style={styles.container}
		>
			<Header text={"Employee's List"} />
			<ScrollView>
				{a.map((item, index) => (
					<EmployeeListCard key={index} />
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

// <Link
// 	href={{
// 		pathname: "/(info)/[_id]",
// 		params: { _id: "XXX-XXX-XXX-XXX" },
// 	}}
// 	asChild
// >
// 	<Button title="Go to Login" />
// </Link>;
