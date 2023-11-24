import 'react-native-gesture-handler'

import { config } from '@gluestack-ui/config'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { StatusBar } from 'expo-status-bar'
import { Routes } from './src/routes'

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar style="auto" />
      <Routes />
    </GluestackUIProvider>
  )
}

