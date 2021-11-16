<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
    <PlayerOffCanvas>
      <template #offcanvas-header>
        <h1>My Team</h1>
      </template>
      <template #offcanvas-body>

      </template>
    </PlayerOffCanvas>
  </footer>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import Pop from "./utils/Pop";
export default {
  name: "App",
  setup() {
    onMounted(() => {
      try {
        playersService.getTeamPlayers();
      } catch (error) {
        Pop.toast(error.message, "error");
      }
    });
    return {
      appState: computed(() => AppState),
      myPlayers: computed(() => AppState.myPlayers)
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
