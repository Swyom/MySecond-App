import { images, offers } from "@/constants";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartButton from "../../components/CartButton";

// import {Fragement} from "react"
import cn from 'clsx';
// import { Quicksand-Bold } from "@/assets/fonts/Quicksand-Bold.ttf";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">

      <View className="flex-between flex-row w-full my-5 px-5">
        <View className="flex-start">
          <Text className="small-bold text-primary">DELIVER TO</Text>
         
         <TouchableOpacity className="flex-row flex-center gap-x-1 mt-0.5">
          <Text className="paragraph-bold">Odisha</Text>
          <Image source={images.arrowDown} className="size-3" resizeMode="contain"></Image>
         </TouchableOpacity>
          
        </View>

       <CartButton/>

      </View>


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
                    <Text className="h1-bold text-white "style={{ fontFamily:"QuickSand-Bold", fontSize: 32,fontWeight: "bold" }}>
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
