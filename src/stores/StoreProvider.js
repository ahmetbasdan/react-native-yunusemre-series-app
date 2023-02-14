import React from 'react'
import { Provider } from 'mobx-react';

import SohbetStore from './SohbetStore'

export default function StoreProvider({ children }) {
    return (
        <Provider
            sohbetStore={SohbetStore}
        >
            {children}
        </Provider>
    )
}
