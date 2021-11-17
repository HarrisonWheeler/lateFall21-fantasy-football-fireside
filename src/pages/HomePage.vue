<template>
  <div class="container-fluid">
    <div class="row">
      <Player v-for="p in players" :key="p.id" :player="p" class="col-md-4" />
    </div>
  </div>
  <TeamOffCanvas
    :class="myPlayers.length >= 8 ? 'bg-success' : 'bg-danger'"
    id="team-offCanvas"
  >
    <template #offcanvas-header>
      <h1>hi dad</h1>
    </template>
    <template #offcanvas-body>
      <Player v-for="p in myPlayers" :key="p.id" :player="p" />
    </template>
  </TeamOffCanvas>
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
