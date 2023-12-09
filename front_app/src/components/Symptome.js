import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../../assets/Shared/Colors'

export default function Symptome() {
    const sympList = [
        {
            id:1, 
        name: 'Slider 1',
        imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
        },
        {
            id: 2,
            name: 'Slider 2',
            imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
        },
        {
            id: 2,
            name: 'Slider 2',
            imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
        },
        {
            id: 2,
            name: 'Slider 2',
            imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
        },
        {
            id: 2,
            name: 'Slider 2',
            imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
        },
        {
            id: 2,
            name: 'Slider 2',
            imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Dental-tooth-logo-vector-by-Mansel-Brist.jpg'
        }
    ]
  return (
    <View style={{marginTop:10}}>
        <View style={{display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal:10
        }}>
            <Text style={{fontSize:20}}>Symptômes</Text>
            <Text style={{color:Colors.PRIMARY}}>See All</Text>
        </View>
        
        <FlatList 
            data={sympList}
            numColumns={5}
            style={{marginTop:10}}
            columnWrapperStyle={{
                flex:1,
                justifyContent:'space-between'
            }}
            renderItem={({item, index})=>index<4&&(
                <View style={{marginBottom:10}}>
                    <View style={{backgroundColor:Colors.bg, padding:15,
                        borderRadius:99, margin:5}}>
                        {/* <Image source={{uri:item.imageUrl}}
                        style={{
                            width:30, height:30
                        }} 

                        /> */}
                        <Text>{item.name}</Text>
                    </View>
                </View>
            )}
        />
    </View>
  )
}