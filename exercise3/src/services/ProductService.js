const getProducts = () => {
    const productsObj = [
      {
        id: 1,
        name: 'Motherboard',
        rating: 3.5,
        reviews: 80,
        price: 108.99
      },
      {
        id: 2,
        name: 'CPU',
        rating: 5,
        reviews: 51,
        price: 235.00
      },
      {
        id: 3,
        name: 'Amazing HDD this is the fastest HDD in the world trust me',
        rating: 1.5,
        reviews: 2,
        price: 59.99
      },
      {
        id: 4,
        name: 'SSD',
        rating: null,
        reviews: 0,
        price: 82.55
      },
      {
        id: 5,
        name: 'Mechanical Keyboard',
        rating: 4.5,
        reviews: 8,
        price: 165.00
      },
      {
        id: 6,
        name: 'Headset',
        rating: 2.3,
        reviews: 241,
        price: 24.50
      },
      {
        id: 7,
        name: 'Mousepad',
        rating: 3.8,
        reviews: 24,
        price: 9.98
      },
      {
        id: 8,
        name: 'PC Case',
        rating: 4.0,
        reviews: 2,
        price: 35.25
      },
    ]

    return productsObj
}


const exportedObjects = {
  getProducts
}

export default exportedObjects