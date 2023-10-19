
new Accordion('.accordion-container');

const accordionContainer = document.querySelector('.accordion-container')

export const getData = (url) => 
    new Promise((resolve, reject) => 
        fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
)

getData('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(function (data) {
        for (const array in data) {
            if (Object.hasOwnProperty.call(data, array)) {
                const element = data[array];
                console.log(element);
                // const div = document.createElement('div');
                // const a = document.createElement('a');
                // a.href = 'smth.com'
                // container.append(div);
                // div.append(a);
                // a.append(element.id + ': ' + element.name);
                createAccordion(data)
            }
        } 
    })
    .catch(error => console.log(error.message))

function createAccordion(data) {
    const accordion = document.createElement('div');
    accordion.className = 'ac';
    accordionContainer.append(accordion)

    const acHeader = document.createElement('h2');
    acHeader.className = 'ac-header';
    accordion.append(acHeader);

    const acTrigger = document.createElement('button');
    acTrigger.className = 'ac-trigger';
    acTrigger.type = 'button';
    acHeader.append(acTrigger);

    const acPanel = document.createElement('div');
    acPanel.className = 'ac-panel';
    accordion.append(acPanel);

    const acText = document.createElement('p');
    acText.className = 'ac-text';
    acPanel.append(acText);


}