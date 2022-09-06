<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      allData: [],
      query: "",
    };
  },
  methods: {
    filter() {
      const arr = [];
      for (const e of this.allData) {
        console.log(e.name.includes(this.query));
      }
    },
    clickSidang(id) {
      console.log(id);
      this.$router.push(`/sidang/${id}`);
    },
    clickAdd() {
      this.$router.push(`/sidang/add`);
    },
    clickEdit(id) {
      this.$router.push(`sidang/edit/${id}`);
    },
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/sidang");
    this.allData = response.data;
    console.log(this.allData);
  },
  computed: {
    filtered() {
      return this.allData.filter(
        (e) =>
          e.name.toLowerCase().includes(this.query.toLowerCase()) ||
          e.cityOrRegency.toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },
};
</script>

<template>
  <div class="container pt-5 mt-5">
    <div>
      <input
        type="text"
        v-model="query"
        placeholder="Cari sidang/Kab/Kota/wilayah"
        class="cariSidang"
      />
      <button class="d-flex mt-4 btn btn-success buttonadd" @click="clickAdd">
        Tambah Sidang
      </button>
      <table class="table mt-4">
        <thead class="thead-dark">
          <tr>
            <th scope="col">NAMA</th>
            <th scope="col">KOTA / KABUPATEN</th>
            <th scope="col">WILAYAH</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in filtered" :key="data.id" scope="row">
            <td class="nama" @click="clickSidang(data.id)">
              <a>
                {{ data.name }}
              </a>
            </td>
            <td>{{ data.cityOrRegency }}</td>
            <td>{{ data.wilayah }}</td>
            <td>
              <button
                class="btn btn-success btn-sm"
                @click="clickEdit(data.id)"
              >
                Edit sidang
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.nama {
  cursor: pointer;
}

.cariSidang {
  border-radius: 7px;
  border-width: 1px;
  width: 20%;
  padding-top: 5px;
  padding-bottom: 5px;
}

.buttonadd {
  border-radius: 7px;
}

.buttonadd:hover {
  background-color: rgb(255, 255, 255);
  color: black;
}
</style>
