<template>
  <form class="pokemon-form" on:submit="{handleSubmit}">
    <input
      class="pokemon-input"
      type="text"
      name="pokemon"
      v-model="pokemonName"
      placeholder="Busca tu pokemon"
      autocomplete="off"
    />
    <input type="submit" class="pokemon-btn" value="" v-on:click="search" />
  </form>
</template>

<script>
export default {
  name: "PokedexForm",
  data() {
    return {
      pokemonName: "",
    };
  },
  methods: {
    search(e) {
      e.preventDefault();
      const pokemonName = this.pokemonName;
      const pokemonId = window.isNaN(parseInt(pokemonName))
        ? pokemonName.toLowerCase()
        : pokemonName;
      this.$emit("submit", pokemonId);
    },
  },
};
</script>
