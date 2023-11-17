//const base_url = 'http://127.0.0.1:8000'
// const base_url = 'https://saturn-back.cozmos-space.com'
//const base_url = 'https://saturn-back-stg.cozmos-space.com'
const apiUrl = 'https://acts-3obh.onrender.com/get_all_games'; // Replace with the actual API URL
const dataContainer = document.getElementById('data-container');


logoutButton.addEventListener('click', function() {
    var loader = document.getElementById('lds-dual-ring');
    loader.style.display = 'inline-block';
    window.open('../index.html','_self')
});


function createCourseItem(item) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('ag-courses_item');
  path ='../game_details/index.html?id='+item.id;
  const link = document.createElement('a');
  link.setAttribute('href', path);
  link.classList.add('ag-courses-item_link');
  mainDiv.appendChild(link);

  const bgDiv = document.createElement('div');
  bgDiv.classList.add('ag-courses-item_bg');
  link.appendChild(bgDiv);

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('ag-courses-item_title');
  titleDiv.textContent = item.name; // Replace 'title' with the appropriate property name
  link.appendChild(titleDiv);

  const numberBoxDiv = document.createElement('div');
  numberBoxDiv.classList.add('ag-courses-item_date-box');
  numberBoxDiv.textContent = 'العمر: ';
  link.appendChild(numberBoxDiv);

  const dateSpan = document.createElement('span');
  dateSpan.classList.add('ag-courses-item_date');
  dateSpan.textContent = item.age; // Replace 'date' with the appropriate property name
  numberBoxDiv.appendChild(dateSpan);
  
  const goalBoxDiv = document.createElement('div');
  goalBoxDiv.classList.add('ag-courses-item_date-box');
  goalBoxDiv.textContent = 'الهدف: ';
  link.appendChild(goalBoxDiv);

  const goalSpan = document.createElement('span');
  goalSpan.classList.add('ag-courses-item_date');
  goalSpan.textContent = item.goal; // Replace 'date' with the appropriate property name
  goalBoxDiv.appendChild(goalSpan);


  return mainDiv;
}

function createAddInvoice() {
    const mainDiv = document.createElement('div');
    
    const url = '../'
    
    mainDiv.classList.add('ag-add');
    path =url + 'add_invoice/index.html?access_token=' + token;
    const link = document.createElement('a');
    link.setAttribute('href', path);
    link.classList.add('ag-add_link');
    mainDiv.appendChild(link);

    const bgDiv = document.createElement('div');
    bgDiv.classList.add('ag-add_bg');
    link.appendChild(bgDiv);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('ag-add_title');
    titleDiv.textContent = 'Add New Invoice'; // Replace 'title' with the appropriate property name
    link.appendChild(titleDiv);

    return mainDiv;
}

fetch(apiUrl,{
method: 'GET',
headers: {
    'accept': 'application/json',
}
}
      )
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Process and display the data
        // Assuming the API returns an array of objects
        var list_of_games = data.data
        list_of_games.forEach(item => {
            const courseItem = createCourseItem(item);
            dataContainer.appendChild(courseItem);
        });
        // const courseItem = createAddInvoice();
        dataContainer.appendChild(courseItem);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


