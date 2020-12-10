<template>
  <div>
    <!-- <b-table :data="dogs" :columns="columns" hoverable striped></b-table> -->
    <b-table :data="dogs">
      <b-table-column field="name" label="Name" numeric v-slot="props">
        <router-link :to="`/pets/${props.row.id}`">{{ props.row.name }}</router-link>
      </b-table-column>
      <b-table-column field="breed" label="Breed" numeric v-slot="props" centered>
                {{ props.row.breed }}
      </b-table-column>
      <b-table-column field="gender" label="Gender" numeric v-slot="props" centered>
                {{ props.row.gender }}
      </b-table-column>
      <b-table-column field="age" label="Age" numeric v-slot="props" centered>
                {{ props.row.age }}
      </b-table-column>
      <b-table-column field="color" label="Color" numeric v-slot="props" centered>
                {{ props.row.color }}
      </b-table-column>
      <b-table-column field="weight" label="Weight" numeric v-slot="props" centered>
                {{ props.row.weight }}
      </b-table-column>
     </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dogs',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['dogs'])
  }
}
</script>

<style lang="scss" scoped></style>
