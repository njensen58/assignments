const axios = require('axios');

// const assignResponseToVariable = response => console.log(response.data);

const newTodo = {
    title: 'Get started on React',
    description: 'Then get Schwifty all over again.',
}

axios.get('https://api.vschool.io/nateJ/todo/').then(response => console.log(response.data));
