import { AppState } from "../AppState"
import { Player } from "../models/Player"
import { logger } from "../utils/Logger"
import { api, footballApi } from "./AxiosService"


class PlayersService {

  async getPlayers() {
    try {
      const localData = JSON.parse(localStorage.getItem('playerData'))
      if (localData) {
        AppState.players = localData.players.map(p => new Player(p))
      } else {
        const res = await footballApi.get('')
        debugger
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

  async getTeamPlayers() {
    const res = await api.get('api/players')
    logger.log('get my players res', res)
    AppState.myPlayers = res.data.map(p => new Player(p))
  }

  async addPlayer(playerId) {
    let foundPlayer = AppState.players.find(p => p.playerId === playerId)
    const res = await api.post('api/players', foundPlayer)
    AppState.myPlayers.unshift(new Player(res.data))
  }

  async removePlayer(playerId) {
    const res = await api.delete(`api/players/${playerId}`)
    logger.log('remove player res', res)
    AppState.myPlayers = AppState.myPlayers.filter(p => p.id !== playerId)
  }


}

export const playersService = new PlayersService()
