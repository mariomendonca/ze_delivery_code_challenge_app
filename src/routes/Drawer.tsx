import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home } from '../screens/Home'
import { SearchNearestStore } from '../screens/SearchNearestStore'

const { Navigator, Screen } = createDrawerNavigator()

export function Drawer() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="SearchNearestStore" component={SearchNearestStore} />
    </Navigator>
  )
}
