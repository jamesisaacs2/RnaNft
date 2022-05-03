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
							renderItem={({ item }) => <NftCard data={item} />}
							keyExtractor={(item) => item.id}
							showsVerticalScrollIndicator={false}
							ListHeaderComponent={<HomeHeader />}
						/>
					</View>
					<View
						style={{
							position: "absolute",
							top: 0,
							bottom: 0,
							right: 0,
							left: 0,
							zIndex: -1,
						}}
					>
						<View style={{ height: 300, backgroundColor: COLORS.primary }} />
						<View style={{ flex: 1, backgroundColor: COLORS.white }} />
					</View>
				</View>
			</SafeAreaView>
		</>
	);
};

export default Home;

/* Notes:

paused at 1:00:10

https://youtu.be/_ivIUCSOZ78?t=3610

*/
