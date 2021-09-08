console.log('This is index.js');
// b84fee5e8bb24d34a465c70cdfe1ef91

let card = document.getElementById('accordionId')
console.log(card)
let xhr = new XMLHttpRequest();
xhr.open('Get', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=b84fee5e8bb24d34a465c70cdfe1ef91', true);
xhr.onload = function () {
    if (this.status == 200) {
        let obj = JSON.parse(this.responseText);
       let articles= obj.articles;
       console.log(articles);
        articles.forEach(function (element,index) {
           let newsHtml = '';
             newsHtml = `   <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index} id="buttonId">
                 Breaking News:${index+1} ${element.title}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionId">
              <div class="accordion-body">
            ${element.content} <a href = '${element.url}'>Read More</a>
              </div>
            </div>
          </div> `
          card.innerHTML +=newsHtml;
        });
         
        console.log('fetched');
    }
    else {
        console.log('Some error occured');
    }
}
xhr.send();

let searchText = document.getElementById('searchText');
searchText.addEventListener('input',seachInputHandler);
function seachInputHandler(){
    console.log('Searching');
    let inputVal = searchText.value.toLowerCase();
    console.log(inputVal);
    let item  = document.getElementsByClassName('accordion-item');
    // console.log(item);
    Array.from(item).forEach(function(element){
        let title = element.getElementsByClassName('accordion-button')[0].innerText;
        console.log(title);
        if(title.includes(inputVal))
        {
element.style.display = 'blocked';
        }
        else{
            element.style.display = 'none';
        }

    })
}