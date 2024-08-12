<template>
  <div>
    <h1>Finance Dashboard</h1>
    <button @click="loadTransactions">Load Transactions</button>
    <ul>
      <li v-for="transaction in transactions" :key="transaction.id">
        {{ transaction.name }}: ${{ transaction.amount }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: []
    };
  },
  methods: {
    async loadTransactions() {
      console.log(window.electronAPI);
      // this.transactions = await window.electronAPI.fetchTransactions();
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
