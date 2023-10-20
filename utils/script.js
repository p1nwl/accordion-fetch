export function accordion(url) {
    const accordionContainer = document.createElement('div');
    
    const getData = (url) => 
        new Promise((resolve, reject) => 
            fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )
    
    getData(url)
        .then(function (data) {   
            data.forEach(item => createAccordionItem(item));
            accordionContainer.className = 'accordion-container';
            document.body.append(accordionContainer) 
            new Accordion('.accordion-container');
        })
        .catch(error => console.log(error.message));
    
    function createAccordionItem(item) {
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
        if (item.email) {
            acTrigger.append(item.email)
        }
        if (item.title) {
            acTrigger.append(item.title)
        }
    
        const acPanel = document.createElement('div');
        acPanel.className = 'ac-panel';
        accordion.append(acPanel);
    
        const acText = document.createElement('p');
        acText.className = 'ac-text';
        acPanel.append(acText);
        
        const entries = Object.entries(item)
        for (const entry of entries) {
            const textItem = document.createElement('div');
            textItem.className = 'text-item'
            acText.append(textItem)
            const key = entry[0];
            const value = entry[1];
          
            textItem.append(`${key}: ${value}`);
        }
    }
}