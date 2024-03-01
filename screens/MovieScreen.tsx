import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Platform, ScrollView, Text, Pressable, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, themeColors } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import { MovieList } from '../components/movieList';
import { Loading } from '../components/loading';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-3';

export const MovieScreen = () => {
  const { params: item } = useRoute()
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);

  let movieName = 'Harry Potter and Prisoner of Azkaban '

  useEffect(() => {
    //call the movie details api
  }, [item])

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      {/* back bytton and movie poster */}
      <View className='w-full'>
        <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-3" + topMargin}>
          <Pressable onPress={() => navigation.goBack()} style={styles.background} className='rounded-xl p-1'>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </Pressable >
          <Pressable onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon size="35" color={isFavourite ? themeColors.background : "white"} />
          </Pressable >
        </SafeAreaView>

          {
              loading? (
                <Loading />
              ): (
                <View>
                <Image
                  source={require('../assets/poster/hp-1.jpg')}
                  style={{ width: width, height: height * 0.55 }}
                />
                <LinearGradient
                  colors={['transparent', 'rgba(23,23,23, 0.8)', 'rgba(23,23,23, 1)']}
                  style={{ width, height: height * 0.40 }}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  className='absolute bottom-0'
                />
              </View>
              )
          }

      </View>

      {/* movie details */}

      <View style={{ marginTop: -(height * 0.09) }} className='space-y-3'>
        {/* title */}
        <Text className='text-white text-center text-3xl font-bold tracking-wider'>
          {movieName}
        </Text>
        {/* status, release, runtime */}
        <Text className='text-neutral-400 font-semibold text-base text-center'>
          RELEASED • 2004 • 141min
        </Text>

        {/* genre */}
        <View className='flex-row justify-center mx-4 space-x-2'>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Adventure •
          </Text>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Fantasy
          </Text>
        </View>

        {/* description */}
        <Text className='text-neutral-400 mx-4 tracking-wide'>
        The 3rd year of teaching at Hogwarts School of Witchcraft and Wizardry approaches. However, a great danger surrounds the school: the murderer Sirius Black (Gary Oldman) escaped from Azkaban prison, considered until then to be escape-proof. Dementors are sent to protect the school, strange beings that suck the vital energy of anyone who approaches them, which can either defend the school or make the situation even worse.
        </Text>
      </View>

      {/* cast */}
      <Cast navigation={navigation} cast={cast} />

      {/* similar movies */}
      <MovieList title="Similiar Movies" hideSeeAll={true} data={similarMovies} />
    </ScrollView>
  )
}
