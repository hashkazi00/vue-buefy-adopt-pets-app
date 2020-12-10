<template>
  <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{animal.name}} ({{$route.params.species}})
      </h1>
      <h2 class="subtitle">
        Breed: {{animal.breed}}
      </h2>
      <p> Age: {{animal.age}}</p>
    </div>
  </div>
</section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Pet',
  data () {
    return {
      animal: { }
    }
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id - 1]
    this.animal = animal
  }
}
</script>

<style lang="scss" scoped></style>
