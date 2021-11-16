import { AppState } from "../AppState"
import { Player } from "../models/Player"
import { logger } from "../utils/Logger"


class PlayersService {

  async getPlayers() {
    try {
      const localData = JSON.parse(localStorage.getItem('playerData'))
      if (localData) {
        AppState.players = localData.players.map(p => new Player(p))
      } else {
        const res = await footballApi.get('')
        localStorage.setItem('playerData', JSON.stringify({
          players: res.data.body.players
        }))
        AppState.players = res.data.body.map(p => new Player(p))
      }
      logger.log('Players array after localstorage', AppState.players)
    } catch (error) {
      logger.log(error)
    }
  }
}

export const playersService = new PlayersService()
