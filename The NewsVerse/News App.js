
// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'd093053d72bc40248998159804e0e67d'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) { // matlab sab kuchh Ok hai

        let json = JSON.parse(this.responseText); // Jo bhi response aaega usko object me parse krke json variable me daal do

        let articles = json.articles; // aur json me jo text hai usko as an article articles variable me daal do

        //console.log(articles);

        let newsHtml = "";
        articles.forEach(function(element, index) { // har ek index pe jaa kr retrive krna
            // console.log(element, index)

            // ek card liya hai bootstrap ki madad se
            
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();


