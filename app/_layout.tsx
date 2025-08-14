import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuthStore } from '../store/auth.store';
import AuthLayout from './auth/_layout';
import TabsLayout from './tabs/_layout';

export default function RootLayout() {
  const { isAuthenticated, isLoading, fetchAuthenticatedUser } = useAuthStore();

  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return isAuthenticated ? <TabsLayout /> : <AuthLayout />;
}
