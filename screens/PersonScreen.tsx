import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, Platform, Text, ScrollView, Pressable, View, Image, TouchableOpacity } from 'react-native';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, themeColors } from '../theme';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { MovieList } from '../components/movieList';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const verticalMargin = ios ? '' : 'my-3';

export const PersonScreen: React.FC = () => {
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1, 2, 3, 4])

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900"
        >

            {/* back button */}
            <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-3" + verticalMargin}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className='rounded-xl p-1'>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity >
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size="35" color={isFavourite ? 'red' : "white"} />
                </TouchableOpacity >
            </SafeAreaView>

            {/* person details */}
            <View>
                <View className='flex-row justify-center'
                    style={{ shadowColor: 'gray', shadowRadius: 40, shadowOffset: { width: 0, height: 5 }, shadowOpacity: 1 }}
                >
                    <View className='items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500'>
                        <Image source={require('../assets/actor/daniel.jpg')}
                            style={{ height: height * 0.43, width: width * 0.74 }} />
                    </View>
                </View>
                <View className='mt-6'>
                    <Text className='text-3xl text-white font-bold text-center'>
                        Daniel Radcliffe
                    </Text>
                    <Text className='text-base text-neutral-500 font-bold text-center'>
                        London, England
                    </Text>
                </View>
                <View className='mx-3 p-4 mt-6 flex-row justify-evenly items-center bg-neutral-700 rounded-full'>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Gender</Text>
                        <Text className='text-neutral-300 font-sm'>Male</Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Birthday</Text>
                        <Text className='text-neutral-300 font-sm'>1989-07-23</Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Known for</Text>
                        <Text className='text-neutral-300 font-sm'>Acting</Text>
                    </View>
                    <View className='px-2 items-center'>
                        <Text className='text-white font-semibold'>Popularity</Text>
                        <Text className='text-neutral-300 font-sm'>64.23</Text>
                    </View>
                </View>
                <View className='my-6 mx-4 space-y-2'>
                    <Text className='text-white text-lg'>Biography</Text>
                    <Text className='text-neutral-400 tracking-wide'>
                    Daniel Radcliffe (1989) is an English actor who gained fame playing the wizard Harry Potter - the protagonist of the Harry Potter films adapted from the stories by English writer J. K. Rowling.

                    Daniel Jacob Radcliffe (1989) was born in London, England, on July 23, 1989. Born into an upper-class family in London, he enjoyed acting from an early age.

                    In 1999, at the age of 10, he won his first role in the film “David Copperfield” when he played David himself. In 2000 he starred as Mark Pendel in “The Tailor of Panama”
                    </Text>
                </View>

                { /* movies */}
                <MovieList title={'Movies'} data={personMovies} />
            </View>
        </ScrollView>
    );
}