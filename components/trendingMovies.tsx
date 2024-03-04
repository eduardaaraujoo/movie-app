import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Dimensions, Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import Carousel from 'react-native-snap-carousel-v4'
import { image500 } from '../api/moviedb';

interface trending {
    data: any,
}

var { width, height } = Dimensions.get('window');

export const TrendingMovies: React.FC<trending> = ({ data }) => {
    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('Movie', item)
    }
    return (
        <View className='mb-8'>
            <Text className='text-white text-xl mx-4 mb-5'>Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{ display: 'flex', alignItems: 'center' }}
            />
        </View>
    )
}

interface Props {
    item: any,
    handleClick: any,
}

const MovieCard: React.FC<Props> = ({ item, handleClick }) => {
    console.log('item.poster_path: ', item.poster_path);

    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image
                //source={require('../assets/poster/hp-1.jpg')}
                source={{uri: image500(item.poster_path)}}
                style={{
                    width: width * 0.6,
                    height: height * 0.4
                }}
                className='rounded-3xl'
            />
        </TouchableWithoutFeedback>
    )
}