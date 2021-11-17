import { AuthPlugin } from "@bcwdev/auth0provider-client"
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

  async addPlayer(playerId) {
    let foundPlayer = AppState.players.find(p => p.playerId == playerId)
    const res = await api.post('api/players', foundPlayer)
    logger.log('add player res', res)
    AppState.myPlayers.unshift(new Player(res.data))
    return foundPlayer
    // REVIEW below is bad above is good!
    // this.getTeamPlayers()
  }

  async getTeamPlayers() {
    const res = await api.get('api/players')
    logger.log('get my players res', res)
    AppState.myPlayers = res.data.map(p => new Player(p))
  }

  async removePlayer(playerId) {
    const res = await api.delete(`api/players/${playerId}`)
    logger.log('remove player res', res)
    AppState.myPlayers = AppState.myPlayers.filter(p => p.id !== playerId)
    return new Player(res.data)
  }
}

export const playersService = new PlayersService()
