import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
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
import { supabase } from '../lib/supabase'
const signUp = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passRef = useRef("");
  const nameRef = useRef("");

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    console.log("start", "statt");
    if (!emailRef.current || !passRef.current ||!nameRef.current) {
      Alert.alert("SignUp","Fields can't be empty");
      return;
    }
    else
    {
      let name = nameRef.current.trim();
      let email = emailRef.current.trim();
      let password = emailRef.current.trim();
      setIsLoading(true);
      const { data: { session }, error } =await supabase.auth.signUp({
        email,
         password,
         options:{
          data:{
            name
          }
         }
      });
      // if (session) {
      //   // Insert into your custom users table
      //   const { error: insertError } = await supabase
      //     .from('users')
      //     .upsert([
      //       { id: session.user.id, email, name }, // Map fields appropriately
      //     ]);
      
      //   if (insertError) {
      //     console.error('Error inserting into users table:', insertError);
      //   }
      // }
      setIsLoading(false);
      console.log("session", session);
      console.log("error", error);
      if (error) {
        Alert.alert('SignUp', error.message);
      }
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
            Please fill the details to create an account
          </Text>
          <InputSection icon={
            <Icon name="user" size={26} strokeWidth={1.6} />
          } placeHolder='Enter your name' onChangeText={value => { nameRef.current = value }}
          />
          <InputSection icon={
            <Icon name="mail" size={26} strokeWidth={1.6} />
          } placeHolder='Enter your email' onChangeText={value => { emailRef.current = value }}
          />
          <InputSection icon={
            <Icon name="lock" size={26} strokeWidth={1.6} />

          } placeHolder='Enter your password' onChangeText={value => { passRef.current = value }}
            secureTextEntry />
          <Button title='SignUp' loading={isLoading} onPress={onSubmit} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>
          <Pressable onPress={() => router.push('login')}>
            <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default signUp

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