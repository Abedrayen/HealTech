import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Slider() {
    const sliderList = [
        {
            id:1, 
        name: 'Slider 1',
        imageUrl: 'https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/6007/453920/0170678001639425089.jpg'
        },
        {
            id: 2,
            name: 'Slider 2',
            imageUrl: 'https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/6007/453920/0170678001639425089.jpg'
        },
        {
            id: 2,
            name: 'Slider 2',
            imageUrl: 'https://smb.ibsrv.net/imageresizer/image/blog_images/1200x1200/6007/453920/0170678001639425089.jpg'
        }
    ]
  return (
    <View style={{}}>
      <FlatList 
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <Image source={{uri:item.imageUrl}} 
               style={{
                width:Dimensions.get('screen').width*1,
                height:170,
                borderRadius:10,
                margin:2
               }} 
            />
        )}
      />
    </View>
  )
}