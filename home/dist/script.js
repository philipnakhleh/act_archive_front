//const base_url = 'http://127.0.0.1:8000'
// const base_url = 'https://saturn-back.cozmos-space.com'
//const base_url = 'https://saturn-back-stg.cozmos-space.com'
const dataContainer = document.getElementById('data-container');

function createAddInvoice() {
    const mainDiv = document.createElement('div');
    
    const url = '../cards/index.html'
    
    mainDiv.classList.add('ag-courses_item');
    path =url 
    const link = document.createElement('a');
    link.setAttribute('href', path);
    link.classList.add('ag-courses-item_link');
    mainDiv.appendChild(link);

    const bgDiv = document.createElement('div');
    bgDiv.classList.add('ag-courses-item_bg');
    link.appendChild(bgDiv);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('ag-courses-item_title');
    titleDiv.textContent = 'عرض جميع الانشطة'; // Replace 'title' with the appropriate property name
    link.appendChild(titleDiv);

    return mainDiv;
}

function createAddInvoice2() {
    const mainDiv = document.createElement('div');
    
    const url = '../items/index.html'
    
    mainDiv.classList.add('ag-courses_item');
    path =url 
    const link = document.createElement('a');
    link.setAttribute('href', path);
    link.classList.add('ag-courses-item_link');
    mainDiv.appendChild(link);

    const bgDiv = document.createElement('div');
    bgDiv.classList.add('ag-courses-item_bg');
    link.appendChild(bgDiv);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('ag-courses-item_title');
    titleDiv.textContent = 'عرض أغراض النشاط'; // Replace 'title' with the appropriate property name
    link.appendChild(titleDiv);

    return mainDiv;
}


const courseItem = createAddInvoice();
dataContainer.appendChild(courseItem);

const courseItem2 = createAddInvoice2();
dataContainer.appendChild(courseItem2);
