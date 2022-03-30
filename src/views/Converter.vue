<template>
  <div id="converter">
    <div id="calc">
      <section id="inputSection">
        <input
          v-model="dollar"
          class="input"
          placeholder="Dollar"
          type="number"
          name="dollar"
          id="coin_input"
        />
        <input
          v-model="coinvalue"
          class="input"
          v-bind:placeholder="coinSymbol"
          type="number"
          name="coin"
          id="dollar_input"
        />

        <section></section>
      </section>
      <select v-model="coinSymbol" class="dropMenu">
        <option value="btc">btc</option>
        <option value="eth">eth</option>
        <option value="ltc">ltc</option>
        <option value="doge">doge</option>
      </select>
      <section id="convertSection">
        <input
          id="convertButton"
          type="button"
          v-on:click="add()"
          value="Convert"
          v-bind:disabled="buttonOff"
          poin
        />
      </section>
    </div>

    <table id="convertData">
      <tr id="tableHeader">
        <td><b>Coin</b> </td>
        <td><b>Quantity</b> </td>
        <td><b>Price</b> </td>
        <td><b>Date</b> </td>
      </tr>
      <tr v-for="(conversion, index) in conversions" :key="index">
        <td>{{ conversion.currencyName }}</td>
        <td>{{ conversion.coinvalue }}</td>
        <td>{{ conversion.usdvalue }}</td>
        <td>{{ conversion.date }}</td>
      </tr>
    </table>

    <input
      class="input"
      v-on:click="deleteAll()"
      type="button"
      value="Delete Table"
      id="deleteTable"
    />
  </div>
</template>

<script>
import axios from "axios";

const convBaseURL = "http://localhost:8081";

export default {
  name: "Home",
  components: {},

  data() {
    return {
      dollar: "",
      coinvalue: "",
      coinSymbol: "btc",
      currentPrice: "",
      conversions: [],
      buttonOff: false,
    };
  },
  methods: {
    add: async function () {
      if (this.dollar == 0 && this.coinvalue == 0) {
        alert("Both values are empty!")
        return;
      }
      this.buttonOff = true;
      let date = new Date();
      const res = await axios
        .post(convBaseURL+ "/conversions/insert", {
          email: localStorage.getItem("email"),
          date: date.toDateString(),
          currencyName: this.coinSymbol,
          usdvalue: this.dollar,
          coinvalue: this.coinvalue,
        })
        .catch(function () {
          console.log("error");
        });

      this.buttonOff = false;

      console.log(res);

      this.updateConversions()
    },
    updateConversions: async function () {
      const res = await axios.get(convBaseURL + "/conversions/findConversionsOfUser", {params: {email: localStorage.getItem("email")}});
      this.conversions = res.data;
    },
    deleteAll: async function () {
      const res = await axios.delete(convBaseURL + "/conversions/deleteAllUserConversions", {params: {email: localStorage.getItem("email")}});
      this.conversions = res.data;
    },
  },

  mounted() {
    this.updateConversions();
  },
  Update() {
    this.$nextTick(function () {
      this.updateConversions();
    });
  },
  watch: {
    dollar: function () {
      this.coinvalue = "";
    },
    coinvalue: function () {
      this.dollar = "";
    },
  },
  computed: {},
};
</script>

<style>
#app {
  color: #2c3e50;
}

div {
}

#converter {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: auto;
}
#calc {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;

  width: 70vw;
  height: 40vh;
  margin-top: 20px;
}

#inputSection {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#convertSection {
}

table {
  border-collapse: separate;
  border-spacing: 150px 0;
  border-style: solid;
  background-color: rgb(245, 245, 245);
  width: 70vw;
  height: auto;
  margin-top: 50px;
}
#tableContainer {
  height: 200px;
  border-style: solid;
}
table {
  border-collapse: separate;
  border-spacing: 100% 0;
 
}

table tr td {
  font-weight: 100px;
  padding-bottom: 15px;
}



td {
  padding: 5px 0;
}
.input {
  font-size: 130%;
  padding: 0px;
  width: 500px;
  height: 60px;
  margin-left: 120px;
 
}
.input::placeholder {
  transition: color 0.3s ease;
  size: 30px;
}
.input:focus::placeholder {
  color: transparent;
  size: 30px;
}

.dropMenu {
  position: absolute;
  right: 563px;
  top: 255px;
  width: 50px;
  height: 60px;
  border-style: none;
  outline: none;
  background-color: transparent;
}
.dropMenu:focus {
  width: 50px;
  height: 60px;
  margin-left: 988px;
  border-style: none;
}
#convertButton {
  width: 20%;
  height: 60px;
  border-style: none;
  border-radius: 7px;

  background: rgba(3, 161, 3);
}
#convertButton:hover {
  background: rgb(4, 175, 4);
  cursor: pointer;
}

#deleteTable {
  margin: 70px 100px;
  width: 20%;
  height: 60px;
  border-style: none;
  border-radius: 7px;

  background: rgb(231, 66, 66);
}

#deleteTable:hover {
  margin: 70px 100px;
  width: 20%;
  height: 60px;
  border-style: none;
  border-radius: 7px;

  background: rgb(230, 78, 78);
  cursor: pointer;
}

body {
}
</style>
