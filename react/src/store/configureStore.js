if(process.env.NODE_ENV === 'development') {
  var configureStore = require('./configureStore.dev.js');
} else {
  var configureStore = require('./configureStore.prod.js');
}

module.exports = configureStore;
