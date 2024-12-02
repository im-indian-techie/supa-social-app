import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import BackButton from '../components/BackButton'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { wp, hp } from '../helpers/common'
import { theme } from '../constants/theme'
import Icon from '../assets/icons/Icon'
import InputSection from '../components/InputSection'
import Button from '../components/Button'
const login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    if(!emailRef.current || !passRef.current)
    {
      Alert.alert('Login',"please fill all the fields");
      return;
    }
  }
  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <BackButton router={router} />
        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please login to continue
          </Text>
          <InputSection icon={
            <Icon name="mail" size={26} strokeWidth={1.6} />
          } placeHolder='Enter your email' onChangeText={value => { emailRef.current = value }}
          />
          <InputSection icon={
            <Icon name="lock" size={26} strokeWidth={1.6} />

          } placeHolder='Enter your password' onChangeText={value => { passRef.current = value }}
            secureTextEntry />
          <Text style={styles.forgotPassword}>Forgot Password</Text>
          <Button title='Login' loading={isLoading} onPress={onSubmit} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?
          </Text>
          <Pressable onPress={()=>router.push('signUp')}>
            <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5)
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text

  },
  form: {
    gap: 25
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extrabold
  },
  punchline: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  }
})