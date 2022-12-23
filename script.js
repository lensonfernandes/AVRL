
//1.10min
const buttonFirst = document.getElementById('my-button');

let printMessage = () => {
    console.log("Button Clicked");

    const inputValue = document.getElementById('my-button').value;
    console.log(inputValue);
    const div = document.createElement('ul');
    document.body.appendChild(div);
    const li = document.createElement('li');
    li.innerHTML = `loading.....`
    div.appendChild(li);

    fetch(`https://fakestoreapi.com/products/${inputValue}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)

            const div = document.createElement('ul');
            document.body.appendChild(div);
            const container = document.querySelectorAll('ul');


            for(let i=0; i <json.length; i++){
                const li = document.createElement('li');
                li.innerHTML = json[i].title;
                container.appendChild(li);
            }
        
        })
}

buttonFirst.addEventListener('click', printMessage);