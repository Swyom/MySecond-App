import { Button, View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import {signIn} from "@/lib/appwrite";
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';


const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });

    const submit = async () => {
        const { email, password } = form;

        if(!email || !password) return Alert.alert('Error', 'Please enter valid email address & password.');

        setIsSubmitting(true)

        try {
           await signIn({email,password }); 
            router.replace('/');
        } catch(error: any) {
            Alert.alert('Error', error.message);
            // Sentry.captureEvent(error);
        } finally {
            setIsSubmitting(false);
        }
    }


  return (
    <View className="gap-10 round-lg p-5 mt-5" >

      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />

      <CustomInput
        placeholder="Enter your Password"
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        label="Password"
        keyboardType="default"
        secureTextEntry={true}
      />
      <CustomButton
        title="Sign In"
        isLoading={isSubmitting}
        onPress={submit} />

      <View className='self-center mt-6'>
        <Text className='base-regular  text-gray-100'>
          Don't have account ?
          <Link href="/sign-up" className='base-bold text-primary'> Sign Up</Link>
        </Text>
      </View>

    </View>


  );
};

export default SignIn;
