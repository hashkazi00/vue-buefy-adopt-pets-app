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
     </b-table>
  </div>
</template>

<script>
import dogs from '@/data/dogs'

export default {
  name: 'Dogs',
  data () {
    return {
      dogs,
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
  }
}
</script>

<style lang="scss" scoped></style>
