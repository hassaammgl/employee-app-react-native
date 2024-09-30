import { Linking } from "react-native";

export const callOnPhoneNumber = (phoneNumber) => {
	let phoneNumberUrl = `tel:${phoneNumber}`;
	// Check if the app can handle the call request
	Linking.canOpenURL(phoneNumberUrl)
		.then((supported) => {
			if (!supported) {
				Alert.alert(
					"Error",
					`Phone number is not available: ${phoneNumber}`
				);
			} else {
				// Open the phone call screen
				return Linking.openURL(phoneNumberUrl);
			}
		})
		.catch((err) => console.error("An error occurred", err));
};
