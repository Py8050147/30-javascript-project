const productList = document.querySelector('.productlist')

const products = [
    {
        id: 1,
        name: 'iphone',
        description: 'this is product 1',
        price: '$19.99',
        category: 'mobile'
    },
    {
        id: 2,
        name: 'iphone',
        description: 'this is product 2',
        price: '$17.99',
        category: 'mobile'
    },
    {
        id: 3,
        name: 'samsung',
        description: 'this is product 3',
        price: '$9.99',
        category: 'mobile'
    },
    {
        id: 4,
        name: 'redmi',
        description: 'this is product 4',
        price: '$7.99',
        category: 'mobile'
    },
    {
        id: 5,
        name: 'realmi',
        description: 'this is product 5',
        price: '$8.99',
        category: 'mobile'
    },
    {
        id: 6,
        name: 'jeans',
        description: 'this is product 6',
        price: '$2.99',
        category: 'cloth'
    },
    {
        id: 7,
        name: 't-shirt',
        description: 'this is product 7',
        price: '$1.99',
        category: 'cloth'
    },
    {
        id: 8,
        name: 'shirt',
        description: 'this is product 8',
        price: '$1.99',
        category: 'cloth'
    },
    {
        id: 9,
        name: 'guchhi shirt',
        description: 'this is product 9',
        price: '$2.99',
        category: 'cloth'
    },
]



products.map(product => {
    const cardbox = document.createElement('div')
    cardbox.classList.add('card')
    cardbox.innerHTML = ` <h1>${product.name}</h1>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                    <p>${product.category}</p>`
    
    productList.append(cardbox)
})

   const input = document.querySelector('input')
document.querySelector('button').addEventListener('click', () => {
    const inputValue = input.value
    const filterProducts = products.filter(product => product.category === inputValue || inputValue === '')

        productList.innerHTML = '';
        
        filterProducts.forEach((product) => {
            const productElement = document.createElement('div')
            productElement.classList.add('card')
            productElement.innerHTML = `<h1>${product.name}</h1>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                    <p>${product.category}</p>
                    `
            productList.appendChild(productElement)
            // console.log(productElement)
        })

    console.log(inputValue)
     })

    // const categoryFilter = document.createElement('select')
    // categoryFilter.innerHTML = `  <option value="">all category</option>
    //             <option value="cloth">cloth</option>
    //             <option value="mobile">mobile</option>
    // `

    // document.querySelector('.box').append(categoryFilter)

    // categoryFilter.addEventListener('change', (e) => {
    //     const selectCategory = e.target.value
    //     const filterProducts = products.filter(product => product.category === selectCategory || selectCategory === '' )
    //     // console.log(filterProducts)

    //     productList.innerHTML = '';
        
    //     filterProducts.forEach((product) => {
    //         const productElement = document.createElement('div')
    //         productElement.classList.add('card')
    //         productElement.innerHTML = `<h1>${product.name}</h1>
    //                 <p>${product.description}</p>
    //                 <p>${product.price}</p>
    //                 <p>${product.category}</p>
    //                 `
    //         productList.appendChild(productElement)
    //         // console.log(productElement)
    //     })
    // })


