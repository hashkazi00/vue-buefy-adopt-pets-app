<template>
  <div>
    <!-- <b-table :data="cats" :columns="columns" hoverable striped @select="selected"> -->
    <b-table :data="cats" hoverable>
      <b-table-column field="name" label="Name" numeric v-slot="props">
        <router-link :to="`/pets/${props.row.id}`">{{ props.row.name }}</router-link>
      </b-table-column>
      <b-table-column field="name" label="Name" numeric v-slot="props">
                {{ props.row.name }}
      </b-table-column>
      <b-table-column field="breed" label="Breed" numeric v-slot="props">
                {{ props.row.breed }}
      </b-table-column>
      <b-table-column field="species" label="Species" numeric v-slot="props">
                {{ props.row.species }}
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
import cats from '@/data/cats'

export default {
  name: 'Cats',
  data () {
    return {
      cats,
      columns: [
        {
          field: 'name',
          label: 'Name',
          width: '40'
        },
        {
          field: 'breed',
          label: 'Breed',
          centered: true
        },
        {
          field: 'species',
          label: 'Species',
          centered: true
        },
        {
          field: 'gender',
          label: 'Gender',
          centered: true
        },
        {
          field: 'age',
          label: 'Age',
          centered: true
        },
        {
          field: 'color',
          label: 'Color',
          centered: true
        },
        {
          field: 'weight',
          label: 'Weight',
          centered: true
        },
        {
          field: 'location',
          label: 'Location',
          centered: true
        }
      ]
    }
  },
  methods: {
    selected (item) {
      console.log(item.index)
    }
  }
}
</script>

<style lang="scss" scoped></style>
