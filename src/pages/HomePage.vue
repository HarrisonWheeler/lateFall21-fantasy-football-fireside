<template>
  <div class="container-fluid">
    <div class="row">
      <Player v-for="p in players" :key="p.id" :player="p" class="col-md-4" />
    </div>
  </div>

  <!-- My Team off-canvas -->
  <PlayerOffCanvas :class="myPlayers.length >= 8 ? 'bg-success' : 'bg-danger'">
    <template #offcanvas-header>
      <h1>My Team</h1>
    </template>
    <template #offcanvas-body>
      <div class="row">
        <Player
          v-for="p in myPlayers"
          :key="p.id"
          :player="p"
          class="col-12 m-0"
        />
      </div>
    </template>
  </PlayerOffCanvas>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { playersService } from "../services/PlayersService";
import Pop from "../utils/Pop";
export default {
  name: "Home",
  setup() {
    onMounted(() => {
      try {
        playersService.getTeamPlayers();
      } catch (error) {
        Pop.toast(error.message, "error");
      }
    });
    return {
      players: computed(() => AppState.searchedPlayers),
      myPlayers: computed(() => AppState.myPlayers),
    };
  },
};
</script>

<style scoped lang="scss">
</style>
