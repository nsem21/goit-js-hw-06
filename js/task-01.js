const allInformation = document.querySelectorAll('.item');

const categoriesQuantity = allInformation.length;
console.log(`Number of categories: ${categoriesQuantity} `);

allInformation.forEach((value, index) => {
    const category = allInformation[index].querySelector('h2').textContent;
    const itemsQuantity = allInformation[index].querySelectorAll('li').length;
    console.log(`Category: ${category} \nElements: ${itemsQuantity}`)
})