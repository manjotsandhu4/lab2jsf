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







const handleHttpCalculation = (request, response) => {
    const query = request.query;
    const x = parseInt(query.x);
    const y = parseInt(query.y);
    const method = query.method;
//get our operation and result from handle operation 
    const result = handleCalculation(method, x, y);

    response.send(`${X} ${result.operation} ${Y} = ${result.result}`);    
};

module.export = handleHttpCalculation; //Export our calculation function 