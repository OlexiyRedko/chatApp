import React, { useEffect, useRef, useState} from 'react';
import {Animated, TouchableOpacity, Text, Image} from 'react-native';
import { FlashList } from '@shopify/flash-list';
const styles = require('./styles.js');


function Chatlist({bgColor, width, position, data, renderer, opener}) {
  
    const itemwidth = {
        transform: [{ translateX: width }], 
      }
      const itemwidth3 = {
        transform: [{ translateX: position }],
      }
      

      const Item = ({ item }) => (
        <TouchableOpacity  style={styles.item} onPress={() => opener(item.id)} >
          <Text style={styles.label}numberOfLines={1} >{item.title} </Text>
          <Animated.View style={[styles.container3, itemwidth3]}>
          <Image source={item.img} style={styles.image1} resizeMode="stretch"></Image>
          </Animated.View>
          
          
        </TouchableOpacity >
      );
      
      const renderItem = ({ item }) => (
        <Item item={item} />
      );
    return(<Animated.View style={[styles.container1, itemwidth, {backgroundColor: bgColor}]}>
        <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={renderer}
        onEndReachedThreshold={3}
        estimatedItemSize={20}
        keyboardShouldPersistTaps='always' 
        />
      </Animated.View>)
     
}

export default Chatlist;