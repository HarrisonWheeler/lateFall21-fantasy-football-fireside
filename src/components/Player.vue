<template>
  <div class="col-md-3 mb-1">
    <div class="card mb-3 rounded shadow">
      <div class="card-body rounded p-1">
        <div class="row pb-1">
          <div class="col-md-12">
            <i
              class="
                mdi mdi-plus-circle
                p-0
                float-right
                btn
                text-success
                ${this.id
                ?
                'visually-hidden'
                :
                ''}
              "
              onclick="app.playersController.addPlayer('${this.playerId}')"
            ></i>
            <i
              class="
                mdi mdi-minus-circle
                p-0
                float-right
                btn
                text-danger
                ${!this.id
                ?
                'visually-hidden'
                :
                ''}
              "
              onclick="app.playersController.removePlayer('${this.id}')"
            ></i>
          </div>
          <div class="col-md-6">
            <h6 class="card-text">Name: {{ player.fullname }}</h6>
            <h6 class="card-text">Pos: {{ player.position }}</h6>
          </div>
          <div class="col-md-6">
            <h6 class="card-text"># {{ player.jerseyNumber }}</h6>
            <h6 class="card-text">{{ player.team }}</h6>
          </div>
        </div>
      </div>
      <img
        :src="player.imgURL"
        class="card-img-bottom rounded"
        alt="http://placehold.it/300x300"
      />
    </div>
  </div>
</template>



<script>
// TODO
// 1 - show an off canvas with slots - mainly how to pop, instantiate, and send through slots
// 2 - show how to locally update data, and have the data be reactive

export default {
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>
