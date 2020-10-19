if (process.client) {
  setTimeout(() => {
    App.isDev = location.host.includes('localhost');
  });
}

const App = {
  showNav: false,
  previewMarkup: '',
  isDev: false,
};

export default App;
