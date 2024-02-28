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
                        <Image source={require('../assets/actor/ator-1.jpg')}
                            style={{ height: height * 0.43, width: width * 0.74 }} />
                    </View>
                </View>
                <View className='mt-6'>
                    <Text className='text-3xl text-white font-bold text-center'>
                        Tom Holland
                    </Text>
                    <Text className='text-base text-neutral-500 font-bold text-center'>
                        Surrey, United Kingdom
                    </Text>
                </View>
                <View className='mx-3 p-4 mt-6 flex-row justify-evenly items-center bg-neutral-700 rounded-full'>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Gender</Text>
                        <Text className='text-neutral-300 font-sm'>Male</Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className='text-white font-semibold'>Birthday</Text>
                        <Text className='text-neutral-300 font-sm'>1996-06-01</Text>
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
                        Thomas "Tom" Holland is an English actor and dancer, best known for playing the lead role in Billy Elliot the Musical at the Victoria Palace Theatre, London, as well as for starring in the 2012 film The Impossible. Lastly, he became a winner of the Hollywood Spotlight Award, as well as the National Board of Review’s award in the “Breakthrough Actor” category at the 2012 London Film Critics Circle Awards in “Young British Performer of the Year”. He was featured in Screen International’s “UK Stars of Tomorrow – 2012” and in Variety’s “Youth Impact Report 2012”.
                    </Text>
                </View>

                { /* movies */}
                <MovieList title={'Movies'} data={personMovies} />
            </View>
        </ScrollView>
    );
}