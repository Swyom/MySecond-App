import { images, offers } from "@/constants";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View className="my-2 mx-4">
              <Pressable
                className={`offer-card ${isEven ? "flex-row-reverse" : "flex-row"}`}
                style={{ backgroundColor: item.color, borderRadius:12 ,}}
              >
              
                  {/* Image Section */}
                  <View className="h-full w-1/2">
                    <Image
                      source={item.image}
                      className="w-full h-full"
                      resizeMode="contain"
                    />
                  </View>

                  {/* Text Section */}
                  <View className="offer-card_info w-2/5 ">
                    <Text className="h1-bold text-white "style={{ fontFamily: "QuickSand-Bold", fontSize: 32 }}>
                      {item.title}
                    </Text>
                    <Image
                    source={images.arrowRight}
                    className= "size-12"
                    resizeMode="contain"
                    tintColor="white"
                    />

                  </View>
                
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
