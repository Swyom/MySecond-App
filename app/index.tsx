import { images, offers } from "@/constants";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function Index() {

const [loadesFonts] = useFonts({
    "Quicksand-Bold": require("@/assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("@/assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular": require("@/assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-SemiBold": require("@/assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Light": require("@/assets/fonts/Quicksand-Light.ttf"),
    "Rubik-Medium": require("@/assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("@/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("@/assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Light": require("@/assets/fonts/Rubik-Light.ttf"),
    "Rubik-SemiBold": require("@/assets/fonts/Rubik-SemiBold.ttf"), 

})

if (!loadesFonts) {
    return null; 
}

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View className="my-2 mx-4 ">
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
                    <Text className="h1-bold text-white "style={{ fontFamily:"Rubik-Bold", fontSize: 32,fontWeight: "bold" }}>
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
