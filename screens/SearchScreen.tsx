import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import { debounce } from 'lodash';
import { Loading } from '../components/loading';
import { fallbackMoviePoster, image185, searchMovies } from '../api/moviedb';

const { width, height } = Dimensions.get('window')

export const SearchScreen: React.FC = () => {
    const navigation = useNavigation();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    let movieName = 'Harry Potter and Prisoner of Azkaban'
    const handleSearch = (value: string) =>{
        if (value && value.length > 2) {
            setLoading(true);
            searchMovies({
                query: value,
                include_adult: 'false',
                language: 'en-US',
                page: '1'
            }).then((data: string) => {
                setLoading(false);
                // console.log('got movies: ', data)
                if (data && data.results) setResults(data.results)
            })
        } else {
            setLoading(false);
            setResults([])
        }
    }

    const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

    return (
        <SafeAreaView className='bg-neutral-800 flex-1'>
            <View
                className='mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full'
            >
                <TextInput
                    onChangeText={handleSearch}
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    className='pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider'
                />
                <TouchableOpacity onPress={() => navigation.navigate('Home')}
                    className='rounded-full p-3 m-1 bg-neutral-500'
                >
                    <XMarkIcon size="25" color="white" />
                </TouchableOpacity>
            </View>
            {/* results */}
            {
                loading ? (
                    <Loading />
                ) : (
                    results.length > 0 ? (
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                            className='space-y-3'
                        >
                            <Text className='text-white font-semibold ml-1'>Results ({results.length})</Text>
                            <View className='flex-row justify-between flex-wrap'>
                                {
                                    results.map((item: any, index: any) => {
                                        return (
                                            <TouchableWithoutFeedback
                                                key={index}
                                                onPress={() => navigation.push("Movie", item)}
                                            >
                                                <View className='space-y-2 mb-4'>
                                                    <Image className='rounded-3xl'
                                                        //source={require('../assets/poster/hp-1.jpg')}
                                                        source={{ uri: image185(item?.poster_path) || fallbackMoviePoster}}
                                                        style={{ width: width * 0.44, height: height * 0.3 }}
                                                    />
                                                    <Text className='text-neutral-400 ml-1'>
                                                        {
                                                             item?.title.length > 22 ? item?.title.slice(0, 22) + '...' : item?.title
                                                        }
                                                    </Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    ) : (
                        <View className='flex-row justify-center'>
                            <Image 
                            source={require('../assets/time/movie-time.png')}
                                className='h-96 w-96'
                            />
                        </View>
                    )
                )
            }

        </SafeAreaView>
    );
}