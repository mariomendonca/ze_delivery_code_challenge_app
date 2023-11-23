import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import MapView, { Marker, Polygon } from 'react-native-maps'

import { Box } from '@gluestack-ui/themed'
import { Store, findAllStores } from '../../services/storesService'


export function Home() {
  const [stores, setStores] = useState<Store[]>([])

  async function handleFindAllStores() {
    try {
      const response = await findAllStores()
      setStores(response.data)
    } catch {
      Alert.alert("erro")
    }
  }

  useEffect(() => {
    handleFindAllStores()
  }, [])

  return (
    <Box flex={1}>
      <MapView
        style={{ width: '100%', height: '100%' }}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={{
          latitude: -8.0458346,
          longitude: -34.8949036,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}

        onPress={e => console.log(e.nativeEvent.coordinate)}
      >
        {stores.map(store => (
          <Box key={store.id}>
            <Polygon
              coordinates={store.coverageArea.points?.map(coordinate => {
                return { latitude: coordinate.x, longitude: coordinate.y }
              })}
            />
            <Marker
              coordinate={{
                latitude: store.address.x,
                longitude: store.address.y
              }}

            />
          </Box>
        ))}
      </MapView>
    </Box>
  )
}
