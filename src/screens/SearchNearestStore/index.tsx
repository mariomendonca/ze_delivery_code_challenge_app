import { Box, Button, ButtonText, Center, Spinner } from '@gluestack-ui/themed'
import { useState } from 'react'
import { Alert } from 'react-native'
import MapView, { LatLng, Marker, Polygon } from 'react-native-maps'
import { Store, findNearestStores } from '../../services/storesService'

export function SearchNearestStore() {
  const [coordinate, setCoordinate] = useState<LatLng>()
  const [loading, setLoading] = useState<boolean>(false)

  const [store, setStore] = useState<Store>()

  async function handleFindNearestStore() {
    if (!coordinate) {
      return Alert.alert('Error', 'You must choose a point')
    }

    setLoading(true)
    const response = await findNearestStores(coordinate.latitude, coordinate.longitude)
    console.log(response)
    setStore(response.data)
    setLoading(false)
  }

  return (
    <Box flex={1}>
      <MapView
        style={{ width: '100%', height: '80%' }}
        onPress={e => setCoordinate(e.nativeEvent.coordinate)}
      >
        {!!coordinate && (
          <Marker coordinate={coordinate} />
        )}

        {!!store && (
          <Polygon
            coordinates={store.coverageArea.points?.map(coordinate => {
              return { latitude: coordinate.x, longitude: coordinate.y }
            })}
          />
        )}

      </MapView>
      <Center flex={1}>
        <Button onPress={handleFindNearestStore}>
          {loading ? (
            <Spinner size="small" />
          ) : (
            <ButtonText>
              Search store
            </ButtonText>
          )}
        </Button>
      </Center>
    </Box>
  )
}