import { getData } from "../../main/script.js";

const container = document.querySelector('.container');

getData('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(function (data) {
        for (const array in data) {
            if (Object.hasOwnProperty.call(data, array)) {
                const element = data[array];
                console.log(element);
                const div = document.createElement('div');
                const a = document.createElement('a');
                a.href = 'smth.com'
                container.append(div);
                div.append(a);
                a.append(element.id + ': ' + element.name);
            }
        } 
    })
    .catch(error => console.log(error.message))