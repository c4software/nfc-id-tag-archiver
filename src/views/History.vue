<template>
    <v-container grid-list-md>

        <v-flex xs12>
            <v-data-table :headers="headers" :items="value" hide-actions class="elevation-1">
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.date }}</td>
                    <td>{{ props.item.date }}</td>
                </template>
            </v-data-table>
        </v-flex>

    </v-container>
</template>
<script>
export default {
  name: "History",
  data() {
    return {
      headers: [
        { text: "Date", value: "date", sortable: false },
        { text: "Tag", value: "tag", sortable: false }
      ],
      value: []
    };
  }
};
</script>
