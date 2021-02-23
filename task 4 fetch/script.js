const messageList = document.querySelector('#message_list');
const showMoreButton = document.querySelector('#show_more_button');

let currentPage = 0;
let allDogs = [];
const dogsPerPage = 5;
let dogsTotal = 30;
const fetchDogs = async () => {

    try {
        //  throw "Text error";
        $("#dvloader").show();
        const fetchedDogs = await fetch('https://dog.ceo/api/breed/hound/images');
        const fetchedDogsJSON = await fetchedDogs.json();
        allDogs = fetchedDogsJSON.message.slice(0, dogsTotal);
        // debugger;
        $("#dvloader").hide();
    } catch (error) {
        console.error(error);
        // do smth
    }
}

const addDogs = async () => {
    const dogsToAdd = allDogs.slice(currentPage * dogsPerPage, (currentPage * dogsPerPage)+dogsPerPage);
    dogsToAdd.forEach(image => {
        let img = document.createElement('img');
        let div = document.createElement('div')
        div.className = 'card';
        img.src = image;

        div.appendChild(img);
        messageList.append(div);
            
    });

    if (++currentPage * dogsPerPage >= dogsTotal) {
        showMoreButton.remove();
    }
}


const startApp = async () => {
    try {
        // throw "Text error";
        await fetchDogs();
        await addDogs();
        showMoreButton.style = 'display: inline-block';
    } catch (err) {
        var errorElem = document.getElementById('error-block-id');
        errorElem.innerHTML = err;
        // do smth
    }

}

showMoreButton.addEventListener('click', addDogs);


// start();
startApp();


// function addLoader() {
//     $("#dvloader").show();
//     $(".message_list").load("index.html", function () {
//         $("#dvloader").hide();
//     });
//     return false;
// };

// const start = () => {
//     addLoader();
//     fetchDogs().then(() => {
//         addDogs();
//         showMoreButton.style = 'display: block;'

//     });

//     console.log(2);
// }


/*

fetch('https://dog.ceo/api/breed/hound/images')
    .then(response => response.json())
    .then(responseResult => {

        let arr = responseResult.message;
        arr.length = 100;
        console.log(responseResult);
        let containerJS = document.querySelector('.message_list');

        arr.forEach(image => {
            let img = document.createElement('img');
            let li = document.createElement('li');
            img.style = 'margin:10px';
            img.src = image;

            li.appendChild(img);
            containerJS.append(li);
        });
        funAfterFetch()
    })

let counter = 0;
const counterFun = () => 5 * (counter + 2)

function funAfterFetch() {

    //hide message li after the 5th
    $(".message_list li:gt(4)").hide();

    //show all messages
    $(".show_next5_message").click(function () {

        $(`.message_list li:lt(${counterFun()})`).slideDown()
        counter++;
        return false;
    });
}
*/

// 1. Add styles
// 2. 'Загрузка...'
// 3. 'Error message'
// 4. Add bootstrap
// 5. Use async/await