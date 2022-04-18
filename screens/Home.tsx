import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

import { COLORS, NftData } from "../constants/indexAssets";
import { HomeHeader, FocusedStatusBar, NftCard } from "../components/indexComponents";

const Home = () => {
	return (
		<>
			<SafeAreaView style={{ flex: 1 }}>
				<Text>Home</Text>
				<FocusedStatusBar background={COLORS.primary} />
				<View style={{ flex: 1 }}>
					<View style={{ zIndex: 0 }}>
						<FlatList
							data={NftData}
							renderItem={({ item }) => <Text>{item.name}</Text>}
							keyExtractor={(item) => item.id}
							showsVerticalScrollIndicator={false}
							ListHeaderComponent={<HomeHeader />}
						/>
					</View>
				</View>
			</SafeAreaView>
		</>
	);
};

export default Home;
