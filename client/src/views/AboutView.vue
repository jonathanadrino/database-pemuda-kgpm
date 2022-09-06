<script>
import axios from "axios";

export default {
  data() {
    return {
      allData: [],
      query: ''
    };
  },
  methods: {
    filter () {
      const arr = []
      for (const e of this.allData) {
        console.log(e.name.includes(this.query));
      }
    }
  },
  async mounted() {
    // GET request using axios with async/await
    const response = await axios.get("http://localhost:3000/data");
    this.allData = response.data;
    console.log(this.allData);
  },
  computed: {
    filtered() {
      return this.allData.filter(e => e.name.toLowerCase().includes(this.query.toLowerCase()))
    }
  }
};
</script>

<template>
  <div class="mt-5 pt-2">
    <h1>JUMLAH ({{allData.length}})</h1>

    <div>
       <input type="text" v-model="query">
      <table class="table table-striped table-bordered align-items-center mt-1">
        <thead>
          <tr>
            <th scope="col">NAMA</th>
            <th scope="col">SIDANG</th>
            <th scope="col">Tanggal Lahir</th>
            <th scope="col">Tempat Lahir</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in filtered" :key="data.id" scope="row">
            <td>{{ data.name }}</td>
            <td>{{ data.Sidang.name }}</td>
            <td>{{ data.birthDate }}</td>
            <td>{{ data.birthPlace }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
</template>

<style></style>
