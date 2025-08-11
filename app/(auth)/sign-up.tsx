import { Button, View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { createUser } from '@/lib/appwrite';


const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const submit = async () => {
    const { name, email, password } = form;

    if (!name || !email || !password) return Alert.alert('Error', 'Please enter valid email address & password.');

    setIsSubmitting(true)

    try {
      await createUser({ email,password,name });

      router.replace('/');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  }


  return (
    <View className="gap-8 round-lg p-5 mt-2 " >

      <CustomInput
        placeholder="Enter your Name"
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        label="Name"
        keyboardType="default"
      />

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
        title="Sign Up"
        isLoading={isSubmitting}
        onPress={submit} />

      <View className='self-center mt-6'>
        <Text className='base-regular  text-gray-100'>
          Already have an Account ?
          <Link href="/sign-in" className='base-bold text-primary'> Sign In</Link>
        </Text>
      </View>

    </View>


  );
};

export default SignUp;
