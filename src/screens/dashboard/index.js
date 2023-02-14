import React from 'react'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Header, TitleContent, Content, MiniPlayer } from './components'
import { veryDark, dark } from '../../helpers/colorHelper'
import { parallaxHeaderHeight } from './variables'

export default function index() {
    return (
        <>
            <ParallaxScrollView
                backgroundColor={dark}
                contentBackgroundColor={veryDark}
                parallaxHeaderHeight={parallaxHeaderHeight}
                renderFixedHeader={() => <Header />}
                renderBackground={() => <TitleContent />}
                renderContentBackground={() => <Content />}
            />
            <MiniPlayer />
        </>
    )
}
