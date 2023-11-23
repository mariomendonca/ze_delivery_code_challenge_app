import { config } from '@gluestack-ui/config'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { StatusBar } from 'expo-status-bar'
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar style="auto" />
      <Home />
    </GluestackUIProvider>
  )
}

