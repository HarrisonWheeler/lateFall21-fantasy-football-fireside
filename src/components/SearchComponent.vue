<template>
  <form class="d-flex flex-row" @submit.prevent="searchPlayer()">
    <input
      class="form-control m-1"
      type="text"
      name="searchTerm"
      v-model="editable"
      id="searchTerm"
      aria-label="Search For Players...."
      placeholder="Search For Players...."
      minlength="1"
      maxlength="50"
      required
    />
    <button type="submit" class="btn btn-success m-1">Search</button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
export default {
  setup() {
    const editable = ref("");
    return {
      editable,
      async searchPlayer() {
        const reg = new RegExp(editable.value, "ig");
        const foundPlayers = AppState.players.filter(
          (p) => reg.test(p.fullname) || reg.test(p.position)
        );
        AppState.searchedPlayers = foundPlayers;
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
