import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
import assets from "../constants/assets";
import { CircleButton, RectButton } from "./Buttons";
import { SubInfo, EthPrice, NftTitle } from "./SubInfo";

const NftCard = (data: any) => {
	const navigation = useNavigation();

	return (
		<View
			style={{
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				margin: SIZES.base,
				...SHADOWS.dark,
			}}
		>
			<View style={{ width: "100%", height: 250 }}>
				<Image
					source={data.image}
					resizeMode="cover"
					style={{
						width: "100%",
						height: "100%",
						borderTopLeftRadius: SIZES.font,
						borderBottomRightRadius: SIZES.font,
					}}
				/>
				<CircleButton imgUrl={assets.heart} right={10} top={10} />
				<SubInfo />
			</View>
		</View>
	);
};

export default NftCard;
