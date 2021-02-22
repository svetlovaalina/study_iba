<<<<<<< HEAD
=======
// Избавиться от документ рэди 
// Заставить отработать фетч 
// только этого можно разрешить работать jquery
>>>>>>> 3c25fbdcb4e2e085dca97c4e487df8bfd0862d08

fetch('https://dog.ceo/api/breed/hound/images')
    .then(response => response.json())
    .then(responseResult => {

        let arr = responseResult.message;
        arr.length = 100;
        console.log(responseResult);
        let containerJS = document.getElementsByClassName('message_list')[0]
        arr.forEach(image => {
            let img = document.createElement('img');
            let li = document.createElement('li');
            img.style = 'margin:10px';
            img.src = image;
<<<<<<< HEAD

=======
>>>>>>> 3c25fbdcb4e2e085dca97c4e487df8bfd0862d08
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


<<<<<<< HEAD
    //show next 5 messages
    $(".show_next5_message").click(function () {
=======
    //show all messages
    $(".show_next5_message").click(function () {

>>>>>>> 3c25fbdcb4e2e085dca97c4e487df8bfd0862d08
        $(`.message_list li:lt(${counterFun()})`).slideDown()
        counter++;
        return false;
    });
}