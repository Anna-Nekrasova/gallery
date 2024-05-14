const API_URL = 'https://pixabay.com/api/?key=43769018-b68caf342b846a2b08e806ded&q=kitten&image_type=photo';

const App = {
  data() {
    return {
      cards: [],
      isPopupOpen: false,
      imageForPopup: ''
    }
  },
  async mounted() {
    const obj = await fetch(API_URL)
    const result = await obj.json()
    this.cards = result.hits
  },
  methods: {
    openPopup(item) {
      const objectToOpen = this.cards.find(object => object.id === item)
      this.imageForPopup = objectToOpen.webformatURL
      this.isPopupOpen = true
      this.$forceUpdate()
    },
    closePopup() {
      this.isPopupOpen = false
    }
  }
};

const app = new Vue(App);

app.$mount("#app");