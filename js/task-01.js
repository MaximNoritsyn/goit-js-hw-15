const items = document.querySelector('#categories');
console.log(`Number of categories: ${items.children.length}`);

[...items.children].forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelector('ul').children.length}`);
}
);