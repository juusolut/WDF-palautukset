const getProducts = () => {
    const productsObj = [
      {
        id: 1,
        name: 'Motherboard',
        rating: 3.5,
        reviews: 80,
        price: 108.99,
        image: 'motherboard.png'
      },
      {
        id: 2,
        name: 'CPU',
        rating: 5,
        reviews: 51,
        price: 235.00,
        image: 'cpu.png'
      },
      {
        id: 3,
        name: 'Amazing HDD this is the fastest HDD in the world trust me',
        rating: 1.5,
        reviews: 2,
        price: 59.99,
        image: 'hdd.png'
      },
      {
        id: 4,
        name: 'SSD',
        rating: null,
        reviews: 0,
        price: 82.55,
        image: 'ssd.png'
      },
      {
        id: 5,
        name: 'Mechanical Keyboard',
        rating: 4.5,
        reviews: 8,
        price: 165.00,
        image: 'keyboard.png'
      },
      {
        id: 6,
        name: 'Headset',
        rating: 2.3,
        reviews: 241,
        price: 24.50,
        image: 'headset.png'
      },
      {
        id: 7,
        name: 'Mousepad',
        rating: 3.8,
        reviews: 24,
        price: 9.98,
        image: 'mousepad.png'
      },
      {
        id: 8,
        name: 'PC Case',
        rating: 4.0,
        reviews: 2,
        price: 35.25,
        image: 'case.png'
      },
    ]

    return productsObj
}


const exportedObjects = {
  getProducts
}

export default exportedObjects