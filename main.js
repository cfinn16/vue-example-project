var app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
    link: 'https://www.google.com/',
    inventory: 100,
    onSale: false,
    details: ["80 cotton", "20% polyester", "Gender-neutral"],
    sizes: ["Small", "Medium", "Large"]
  }
})
