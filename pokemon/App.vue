<template>
  <pokemon-cards 
    :pokemons="pokemons"
    @chosen="fetchEvolutions"
    :selectedID="selectedID"
  />

  <pokemon-cards 
    :pokemons="evolutions"
  />
</template>

<script>
import PokemonCards from './PokemonCards.vue';

const api = 'https://pokeapi.co/api/v2/pokemon';
const IDS = [1, 4, 7]
export default {
    components: {
      PokemonCards,
    },

    data() {
      return {
        pokemons: [],
        evolutions: [],
        selectedID: null,
      }
    },

    // fetches the API data on page load
    async created() {
      this.pokemons = await this.fetchData(IDS);
    },

    methods: {
        async fetchEvolutions(pokemon) {
          this.evolutions = await this.fetchData(
            [pokemon.id + 1, pokemon.id + 2]
          )
          this.selectedID = pokemon.id;
        },

        async fetchData(ids) {
            const responses = await Promise.all(
              ids.map( id => window.fetch(`${api}/${id}`) )
            );

            const json = await Promise.all(
              responses.map( data => data.json() )
            );

            return json.map(datum => ({
              id: datum.id,
              name: datum.name,
              sprite: datum.sprites.other['official-artwork'].front_default,
              types: datum.types.map( type => type.type.name ),
            }));
        },
    },
}
</script>

<style scoped>

</style>
