<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      name: "",
      wilayah: "",
      allData: [],
      query: "",
      cityOrRegency: "",
    };
  },
  async mounted() {
    console.log(this.$route.params);

    const responseSidang = await axios.get(
      `http://localhost:3000/sidang/${this.$route.params.id}`
    );

    const response = await axios.get(
      `http://localhost:3000/data/sidang/${this.$route.params.id}`
    );
    this.allData = response.data;

    console.log(responseSidang);

    this.name = responseSidang.data.name;
    this.wilayah = responseSidang.data.wilayah;
    this.cityOrRegency = responseSidang.data.cityOrRegency;
    console.log(this.allData);
  },
  computed: {
    filtered() {
      return this.allData.filter((e) =>
        e.name.toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },
  methods: {
    clickDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
    clickEdit(id) {
      this.$router.push(`/edit/${id}`);
    },
    clickAdd() {
      this.$router.push(`/add/${this.id}`);
    },
  },
};
</script>

<template>
  <div class="container pt-1 mt-3">
    <div class="mt-5 pt-3 justify-content-center">
      <h2>{{ name.toLocaleUpperCase() }}</h2>
      <h4>{{ cityOrRegency }}</h4>
      <h5>Wilayah {{ wilayah }}</h5>
    </div>
    <div>
      <h5>Jumlah data: {{ this.allData.length }}</h5>
      <button class="btn btn-success btn-sm" @click="clickAdd">
        Tambah data
      </button>
      <div>
        <input
          type="text"
          v-model="query"
          placeholder="Cari Nama"
          class="mt-2"
          id="search"
        />
      </div>

      <center>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">NAMA</th>
              <th scope="col">SIDANG</th>
              <th scope="col">Tanggal Lahir</th>
              <th scope="col">Tempat Lahir</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in filtered" :key="data.id" scope="row">
              <td class="name">
                <a @click="clickDetail(data.id)">
                  {{ data.name }}
                </a>
              </td>
              <td>{{ name }}</td>
              <td>{{ data.formattedBirthDate }}</td>
              <td>{{ data.birthPlace }}</td>
              <td>{{ data.status }}</td>
              <td>
                <button
                  class="btn btn-success btn-sm"
                  @click="clickEdit(data.id)"
                >
                  Edit data
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  </div>
</template>
<style scoped>
.name {
  cursor: pointer;
}

#search {
  border-radius: 5px;
}
</style>
