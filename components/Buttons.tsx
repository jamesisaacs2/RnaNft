import { TouchableOpacity, Image, View, Text } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants/theme";

export const CircleButton = ({ imgUrl, handlePress, ...props }: any) => {
	return (
		<>
			<TouchableOpacity
				style={{
					width: 40,
					height: 40,
					backgroundColor: COLORS.white,
					position: "absolute",
					borderRadius: SIZES.extraLarge,
					alignItems: "center",
					justifyContent: "center",
					...SHADOWS.light,
				}}
				onPress={handlePress}
			>
				<Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />
			</TouchableOpacity>
			<View></View>
		</>
	);
};

export const RectButton = () => {
	return (
		<View>
			<Text>RectButton</Text>
		</View>
	);
};
