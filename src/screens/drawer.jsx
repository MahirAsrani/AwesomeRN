import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './home';
import SettingsScreen from './Settings';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
