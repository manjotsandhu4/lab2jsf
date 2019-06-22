const handleCalculation = (method, x, y) => {

    switch(method.toLowerCase()){
        case 'add': return {result: x + y, operation: '+'};
        case 'subtract': return {result: x - y, operation: '-'}; 
        case 'multiply': return {result: x * y, operation: '*'};
        case 'divide': return {result: x / y, operation: '/'};
        default:
            return 'This is invalid';   
    }

};

const validOptions = ['add', 'subtract', 'multiply', 'divide'];

const handleHttpCalculation = (request, response) => {
    request.query.x = Number(request.query.x);
    request.query.y = Number(request.query.y);
    const {x, y, method } = request.query;

//AMke sure X and Y are numbers 
    if(isNaN(x) || isNaN(y)){
        return response.send('Both x and y need to be a number');
    }
//making sure methods entered are valid options
    if(!method || validOptions.includes(method.toLowerCase())){
        return response.send(`Method must always be included and be one of the following: ${validOptions.join(',')}`);
    }



//get our operation and result from handle operation 
    const {operation , result} = handleCalculation(method, x, y);

    response.send(`${X} ${operation} ${Y} = ${result}`);    
};

module.export = handleHttpCalculation; //Export our calculation function 