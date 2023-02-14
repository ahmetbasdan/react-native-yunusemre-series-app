import React, { useEffect } from 'react'
import { Dimensions, BackHandler } from 'react-native'
import { Router, Stack, Scene, Drawer, Actions } from 'react-native-router-flux'
import { veryDark } from './helpers/colorHelper'

import Dashboard from './screens/dashboard'
import SideMenu from './screens/sideMenu'
import MusicPlayer from './screens/musicPlayer'
import AboutUs from './screens/aboutus'
import TurbeAdress from './screens/turbeAdress'
import Test from './screens/Test'

const navBarStyle = {
    navigationBarStyle: {
        backgroundColor: veryDark,
        elevation: 0,
    },
    titleStyle: {
        color: '#fff',
    },
    backButtonTextStyle: {
        color: '#fff'
    },
    backButtonTintColor: "#fff",
}

const { width } = Dimensions.get('window')
export default function Routes() {

    useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)
        return () => backHandler.remove()
    }, [])

    const backAction = () => Actions.currentScene == "Dashboard" ? BackHandler.exitApp() : false

    return (
        <Router {...navBarStyle}>
            <Stack>
                <Drawer
                    hideNavBar
                    initial
                    key="Drawer"
                    contentComponent={() => <SideMenu />}
                    drawerWidth={width * 0.7}
                >
                    <Stack>
                        <Scene key="Dashboard" component={Dashboard} initial hideNavBar />
                    </Stack>
                </Drawer>
                <Scene key="MusicPlayer" component={MusicPlayer} hideNavBar />
                <Scene key="AboutUs" component={AboutUs} title="Hakkımızda" />
                <Scene key="TurbeAdress" component={TurbeAdress} title="Türbe Adresi" />
                <Scene key="Test" component={Test} title="Test" />
            </Stack>
        </Router>
    )
}
