<template>
  <div class="card rounded shadow mb-2">
    <div class="card-body rounded p-1">
      <div class="row pb-1">
        <div class="col-md-12">
          <i
            class="mdi mdi-plus-circle p-0 float-right btn text-success"
            v-if="player.id == null"
            @click="addPlayer()"
          ></i>
          <i
            class="mdi mdi-minus-circle p-0 float-right btn text-danger"
            v-else
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
</template>



<script>
import { playersService } from "../services/PlayersService";
import Pop from "../utils/Pop";
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
  setup(props) {
    return {
      async addPlayer() {
        try {
          await playersService.addPlayer(props.player.playerId);
          Pop.toast("Player Added", "success");
        } catch (error) {
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
