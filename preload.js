const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  fetchTransactions: () => ipcRenderer.invoke('fetch-transactions')
});
