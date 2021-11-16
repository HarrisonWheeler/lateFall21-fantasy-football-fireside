<template>
  <div class="container-fluid">
    <div class="row">
      <Player v-for="p in players" :key="p.id" :player="p" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    return {
      players: computed(() => AppState.searchedPlayers),
    };
  },
};
</script>

<style scoped lang="scss">
</style>
