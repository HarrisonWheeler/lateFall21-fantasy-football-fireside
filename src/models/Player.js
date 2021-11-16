
export class Player {
  constructor(data) {
    this.id = data._id || null
    this.firstname = data.firstname || 'N/A'
    this.lastname = data.lastname || 'N/A'
    this.fullname = data.fullname || 'N/A'
    this.age = data.age || 'N/A'
    this.position = data.position
    this.jerseyNumber = data.jersey || 'N/A'
    this.team = data.pro_team || data.team
    this.byeweek = data.bye_week || data.byeweek
    this.imgURL = data.photo || data.imgURL
    this.playerId = data.id
  }
}
