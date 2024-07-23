// Создаем объект для работы с приложением
const Counter = {
  data() {
    return {
      title: "",
      price: "",
      count: "",

      order: [
        {
          id: 1,
          title: 'Масло',
          price: 200,
          count: 2
        },
        {
          id: 2,
          title: 'Сыр',
          price: 890,
          count: 1
        },
      ]
    }
  },
  methods: {
    addProduct(evt) {
      evt.preventDefault();
      console.log("TEST");

      this.order.push({
        id: Date.now(),
        title: this.title,
        price: Number(this.price),
        count: Number(this.count)
      })
      this.title = '';
      this.price = '';
      this.count = '';
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (const product of this.order) {
        totalPrice += product.price * product.count;
      }
      return totalPrice;
    },
    sortOrder() {
      return this.order.sort((a, b) => b.price - a.price)
    }
  }
}

Vue.createApp(Counter).mount('#app');