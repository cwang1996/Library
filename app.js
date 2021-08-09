const add_book = document.querySelector('.add');
const modal = document.querySelector('.modal');
const wrapper = document.querySelector('.wrap');
// buttons
const close_btn = document.querySelector('.close');
const read_btn = document.querySelectorAll('.read');
const not_read_btn = document.querySelectorAll('.notread');
const remove_btn = document.querySelectorAll('.remove');
const submit_btn = document.querySelector('.submit');
// modal
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const container = document.querySelector('.container');
const books = document.querySelector('.book');
const check = document.querySelector('.readornot');

let bookArr = [];

const addBook = () => {
    let titlebook = title.value;
    let authorbook = author.value;
    let pagesbook = pages.value;

    bookArr.push({
        title: titlebook, 
        author: authorbook, 
        pages: pagesbook
    });
    
    modal.classList.remove('show');
    wrapper.classList.remove('opacity');

    if(titlebook === ''){
        alert('Enter in a title');
        modal.classList.add('show');
        wrapper.classList.add('opacity');
        return false;
    } else if(authorbook === ''){
        alert('Enter in a author');
        modal.classList.add('show');
        wrapper.classList.add('opacity');
        return false;
    } else if(pagesbook === ''){
        alert('Enter in number of pages');
        modal.classList.add('show');
        wrapper.classList.add('opacity');
        return false;
    }
    newBook();
}

const newBook = () => {
    let newBook = document.createElement('div');
    newBook.className ='book';
    container.appendChild(newBook);
    bookArr.forEach((item) => {
        console.log(item);
        if(check.checked){
        newBook.innerHTML = `
            <h2>${item.title}</h2>
            <h2>${item.author}</h2>
            <h2>${item.pages}</h2>
            <button class='book-btn read'>Read</button>
            <button class='book-btn remove' onclick='removeNewBtn(event)'>Remove</button>`
        } else {
            newBook.innerHTML = `
            <h2>${item.title}</h2>
            <h2>${item.author}</h2>
            <h2>${item.pages}</h2>
            <button class='book-btn notread'>Not Read</button>
            <button class='book-btn remove' onclick='removeNewBtn(event)'>Remove</button>`
        }
    })
}

function removeNewBtn(event) {
    event.target.parentNode.remove();
}

function removeBtn(event) {
    event.target.parentNode.parentNode.remove();
}

add_book.addEventListener('click', () => {
    modal.classList.add('show');
    wrapper.classList.add('opacity');
    check.checked = false;
});

close_btn.addEventListener('click', () => {
    modal.classList.remove('show');
    wrapper.classList.remove('opacity');
})

remove_btn.forEach((item)=>{
    item.addEventListener('click', removeBtn)
});

submit_btn.addEventListener('click', addBook);