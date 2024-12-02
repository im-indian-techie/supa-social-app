import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '../components/ScreenWrapper';

const index = () => {
    const router= useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button color="#000" title="welcome" onPress={()=>
        router.push('welcome')
      }/>
    </ScreenWrapper>
  )
}

export default index

const styles = StyleSheet.create({})