<template>
  <div class="cards">
    <card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="click(pokemon)"
      :class="{ opace: pokemon.id !== selectedID }"
      class="card"
    >
      <template v-slot:title>
        {{ pokemon.name }}
      </template>

      <template v-slot:content>
        <img :src="pokemon.sprite">
      </template>

      <template v-slot:description>
        <div 
          v-for="type in pokemon.types" 
          :key="type"
        >
          {{ type }}
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
    Card,
  },

  props: {
    pokemons: {
      type: Array,
      default: [],
    },
    selectedID: {
      type: Number,
    }
  },

  methods: {
    click(pokemon) {
      this.$emit('chosen', pokemon)
    }
  }
}
</script>

<style scoped>
.opace {
  opacity: 0.5;
}
.cards {
  display: flex;
}
img {
  width: 100%;
}
</style>
