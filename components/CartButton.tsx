import { View, Text, TouchableOpacity, Image } from 'react-native'
import {images} from "@/constants"
import React from 'react'

const CartButton = () => {

    const totalItems = 16;

  return (
    <TouchableOpacity className='cart-btn'  onPress={() => {}}>
      <Image source={images.bag} className='size-6' resizeMode='contain'/>

      {totalItems > 0 && (
        <View className='cart-badge'>
            <Text className='small-bold text-white'>{totalItems}</Text> 
        </View>
      ) }
    </TouchableOpacity>
  )
}

export default CartButton