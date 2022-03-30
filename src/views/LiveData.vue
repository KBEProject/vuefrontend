<template>
  <h1>Live Transactions</h1>

  <div id="mainFrame">
    <div id="dataContainer">
      <liveTable :dataList="btcList" :colour="btcColour"></liveTable>
    
      <liveTable :dataList="ethList" :colour="ltcColour"> </liveTable>

      <liveTable :dataList="ltcList" :colour="ethColour"></liveTable>

      <liveTable :dataList="dogeList" :colour="dogeColour"></liveTable>
    </div>
  </div>
  <div id="titleContainer">
      <p>Bitcoin</p>
      <p>Etherum</p>
      <p>Litecoin</p>
      <p>Dogecoin</p>
    </div>
</template>
<script>
import liveTable from "./liveTable.vue";

export default {
  components: { liveTable },
  data() {
    return {
      btcList: [],
      ltcList: [],
      ethList: [],
      dogeList: [],

      btcColour: "",
      ethColour: "",
      ltcColour: "",
      dogeColour: "",

      data: [2, 3, 5, 2, 8, 1],
      connection: null,
      amount: "",
      price: ""
    };
  },
  methods: {
    sendDataRequest: function (message) {
      this.connection.send(message);
    },
    addToList: function (list, item) {
      if (list.length > 13) {
        list.shift();
      }
      list.push(item);
    },
  },
  created: function () {
    console.log("connecting to WebSocket Server..");
    this.connection = new WebSocket("ws://localhost:8085/socket/server");

    this.connection.onmessage = (event) => {
      if (String(JSON.parse(event.data).param.businessType).includes("btc")) {
        console.log(JSON.parse(event.data).data[0]);

        if (JSON.parse(event.data).data[0].direction == "1"){
            this.btcColour = "green"
        } else {
            this.btcColour = "red"
        }

        this.addToList(this.btcList, JSON.parse(event.data).data[0]);
      } else if (
        String(JSON.parse(event.data).param.businessType).includes("eth")
      ) {
        if (JSON.parse(event.data).data[0].direction == "1"){
            this.btcColour = "green"
        } else {
            this.btcColour = "red"
        }
        this.addToList(this.ethList, JSON.parse(event.data).data[0]);
      } else if (
        String(JSON.parse(event.data).param.businessType).includes("ltc")
      ) {
        if (JSON.parse(event.data).data[0].direction == "1"){
            this.btcColour = "green"
        } else {
            this.btcColour = "red"
        }
        this.addToList(this.ltcList, JSON.parse(event.data).data[0]);
      } else if (
        String(JSON.parse(event.data).param.businessType).includes("doge")
      ) {
        if (JSON.parse(event.data).data[0].direction == "1"){
            this.btcColour = "green"
        } else {
            this.btcColour = "red"
        }
        this.addToList(this.dogeList, JSON.parse(event.data).data[0]);
      }
    };

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Successfully connected");
    };
  },
  updated: function () {},
};
</script>
<style>
#app {
  height: 100vh;
}
h1 {
  position: relative;
  top: 45px;
}
#mainFrame {
  display: flex;

  position: relative;
  justify-content: center;
  top: 50px;
}
#titleContainer{
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  background-color: red;
  height: 0%;
}

#dataContainer {
  display: flex;
  align-content: space-between;
  justify-content: space-around;
  flex-direction: row;
  width: 700px;
  height: 700px;
  margin: auto;
}

section {

}
section p {
  
}
</style>

