
const products = [
    {
      name: 'Eco-friendly T-Shirts',
      category: 'Fashion',
      description: 'A 100% organic cotton t-shirt.',
      image: 'https://i.pinimg.com/474x/a4/6a/bb/a46abbaf15440e5daf83e9350fc4e9b7.jpg',
      ecoRating: '🌱🌱🌱',
    },
    {
      name: 'Organic Avocados',
      category: 'food and health',
      description: 'Fresh, organic avocados grown with sustainable practices.',
      image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=640&q=80',
      ecoRating: '🌱🌱🌱🌱🌱',
    },
    {
      name: 'Biodegradable Detergent',
      category: 'Grocery',
      description: 'Eco-friendly and biodegradable laundry detergent.',
      image: 'https://th.bing.com/th/id/OIP.BavCwNLWudeSWogcuIArIAHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      ecoRating: '🌱🌱🌱',
    },
    {
      name: 'Eco-friendly Toothbrush',
      category: 'personal-care',
      description: 'A bamboo toothbrush with natural bristles.',
      image: 'https://th.bing.com/th/id/OIP.7SwOphDfypdsgM5SbkvNgAHaHa?w=187&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      ecoRating: '🌱🌱🌱🌱',
    }
  ];

  const displayProducts = (filteredProducts) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing content
  
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Eco Rating: ${product.ecoRating}</p>
      `;
      productList.appendChild(productCard);
    });
  };
  

  document.getElementById('all').addEventListener('click', () => displayProducts(products));
  document.getElementById('Fashion').addEventListener('click', () => {
    const filtered = products.filter(product => product.category === 'Fashion');
    displayProducts(filtered);
  });
  document.getElementById('food and health').addEventListener('click', () => {
    const filtered = products.filter(product => product.category === 'food and health');
    displayProducts(filtered);
  });
  document.getElementById('Grocery').addEventListener('click', () => {
    const filtered = products.filter(product => product.category === 'Grocery');
    displayProducts(filtered);
  });
  document.getElementById('personal-care').addEventListener('click', () => {
    const filtered = products.filter(product => product.category === 'personal-care');
    displayProducts(filtered);
  });
  

  displayProducts(products);
  