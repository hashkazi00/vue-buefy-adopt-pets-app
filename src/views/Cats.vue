<template>
  <div>
    <!-- <b-table :data="cats" :columns="columns" hoverable striped @select="selected"> -->
    <b-table :data="cats" hoverable>
      <b-table-column field="name" label="Name" numeric v-slot="props">
        <router-link :to="`/pets/${props.row.species}/${props.row.id}`">{{ props.row.name }}</router-link>
      </b-table-column>
      <b-table-column field="name" label="Name" numeric v-slot="props">
                {{ props.row.name }}
      </b-table-column>
      <b-table-column field="breed" label="Breed" numeric v-slot="props">
                {{ props.row.breed }}
      </b-table-column>
      <b-table-column field="gender" label="Gender" numeric v-slot="props">
                {{ props.row.gender }}
      </b-table-column>
      <b-table-column field="age" label="Age" numeric v-slot="props">
                {{ props.row.age }}
      </b-table-column>
      <b-table-column field="color" label="Color" numeric v-slot="props">
                {{ props.row.color }}
      </b-table-column>
     </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cats',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['cats'])
  }
}
</script>

<style lang="scss" scoped></style>
