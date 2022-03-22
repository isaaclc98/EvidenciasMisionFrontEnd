<template>
  <div class="pokedex-screen">
    <img
      v-if="error"
      src="../assets/error.gif"
      alt="Hubo un error buscando tu pokemon"
      class="pokedex-no-screen"
    />
    <img
      v-else-if="loading"
      src="../assets/loading.gif"
      alt="Estamos buscando tu pokemon"
      class="pokedex-no-screen"
    />
    <div class="pokemon-info" v-else>
      <h2 class="pokemon-name">{{ pokemon.name }}</h2>
      <img
        class="pokemon-img"
        v-bind:src="pokemon.sprites.front_default"
        v-bind:alt="pokemon.name"
      />
      <ul class="pokemon-stats">
        <Stat
          v-bind:item="item"
          v-for="item in pokemon.stats"
          v-bind:key="item.stat.name"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Stat from "./Stat.vue";
export default {
  name: "PokedexScreen",
  components: {
    Stat,
  },
  props: {
    // PropTypes on Vue
    pokemon: {
      type: Object,
      default: () => {},
    },
    error: {
      type: Boolean,
      default: () => false,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
