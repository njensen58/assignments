const axios = require('axios');

// const assignResponseToVariable = response => console.log(response.data);

const newTodo = {
    title: 'Starting Axios Todo list',
    description: 'Then get Schwifty all over again.',
}

axios.post('https://api.vschool.io/nateJ/todo/', newTodo).then(response => console.log(response.data));
