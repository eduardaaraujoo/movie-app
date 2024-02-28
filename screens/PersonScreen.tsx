import { View, Text, Dimensions, Platform, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

export const PersonScreen = () => {
    return (
        <ScrollView className='flex-1 bg-neutral-900' contentContainerStyle={{paddingBottom: 20}}> 

        {/* back button */}
        <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-3" + verticalMargin}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className='rounded-xl p-1'>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity >
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size="35" color={isFavourite ? 'red' : "white"} />
                </TouchableOpacity >
            </SafeAreaView>

        </ScrollView>
    )
}