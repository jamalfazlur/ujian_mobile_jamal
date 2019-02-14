import { createBottomTabNavigator } from 'react-navigation';
import Homepage from './Homepage';
import Profile from './Profile';

export default createBottomTabNavigator(
    {
        Homepage: {
            screen: Homepage
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Homepage',
        headerMode: 'none', 

        tabBarOptions: {
            activeTintColor: '#FFF',
            inactiveTintColor: '#8e8d8d',
            labelStyle: {
              fontSize: 15,
            },
            style: {
              backgroundColor: '#db0202'
            },
        }

    }
);