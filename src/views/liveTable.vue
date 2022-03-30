<template>
  <table id="liveDataTable">
    <tr id="tableHeader">
      <th><b>Amount</b></th>
      <th><b>Price</b></th>
    </tr>
    <tr style= "background-color: colour;" v-for="(data, index) in dataList" :key="index">
      <td>{{ data.amount }}</td>
      <td>{{ data.price }}</td>
      
    </tr>
  </table>
</template>

<script>
export default {
name: 'liveTable',
props:['amount','price','colour','dataList'],
data() {
  return {
    
  }
}
};

</script>

<style>
#liveDataTable{
  display: inline-block;
  
  border-collapse: separate;
  background-color: rgb(245, 245, 245);
  border-style: solid;
  height: 580px;
  margin-top: 50px;  
 
}

tr {
  width: 750px;
}

td{
  
}

</style>