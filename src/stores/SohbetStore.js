import { observable, action } from 'mobx';

class SohbetStore {
    @observable seciliSohbet = null
    @observable playerState = null

    @action setSeciliSohbet(val) {
        this.seciliSohbet = val
    }
    @action setPlayerState(val) {
        this.playerState = val
    }
}

export default new SohbetStore()