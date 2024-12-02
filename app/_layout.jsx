import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Text>_layout</Text>
        </Stack>

    )
}

export default _layout

const styles = StyleSheet.create({})