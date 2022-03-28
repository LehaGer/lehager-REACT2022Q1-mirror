const fakeLocalStorage = (function () {
  let store: { [key: string]: string } = {};

  return {
    getItem: function (key: string | number) {
      return store[key] || null;
    },
    setItem: function (key: string | number, value: string | number) {
      store[key] = value.toString();
    },
    removeItem: function (key: string | number) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

export default fakeLocalStorage;
