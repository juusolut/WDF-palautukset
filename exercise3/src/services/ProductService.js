const products = [
  {
    id: 1,
    name: 'MSI B450 Tomahawk',
    rating: 3.5,
    reviews: 80,
    price: 108.99,
    image: 'motherboard.png',
    stock: 0
  },
  {
    id: 2,
    name: 'Intel Core i9-9900K Desktop Processor 8 Cores up to 5.0GHz Unlocked LGA1151 300 Series 95W (BX806849900K)',
    rating: 5,
    reviews: 51,
    price: 235.00,
    image: 'cpu.png',
    stock: 2
  },
  {
    id: 3,
    name: 'Western Digital 1TB WD Blue PC Hard Drive HDD - 7200 RPM, SATA 6 Gb/s, 64 MB Cache, 3.5" - WD10EZEX',
    rating: 1.5,
    reviews: 2,
    price: 59.99,
    image: 'hdd.png',
    stock: 999
  },
  {
    id: 4,
    name: 'Samsung Evo 1Tb SSD',
    rating: null,
    reviews: 0,
    price: 82.55,
    image: 'ssd.png',
    stock: 101
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    rating: 4.5,
    reviews: 8,
    price: 165.00,
    image: 'keyboard.png',
    stock: 22
  },
  {
    id: 6,
    name: 'Headset',
    rating: 2.3,
    reviews: 241,
    price: 24.50,
    image: 'headset.png',
    stock: 69
  },
  {
    id: 7,
    name: 'Mousepad Best In the World Durable and High Speed Fabric For Best Performance',
    rating: 3.8,
    reviews: 24,
    price: 9.98,
    image: 'mousepad.png',
    stock: 1100
  },
  {
    id: 8,
    name: 'PC Case',
    rating: 4.0,
    reviews: 2,
    price: 35.25,
    image: 'case.png',
    stock: 5
  },
]

const getProducts = () => {
    return products
}


const exportedObjects = {
  getProducts
}

export default exportedObjects