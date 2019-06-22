const handleCalculation = (method, x, y) => {
   try{
    switch(method.toLowerCase()){
        case 'add':
        case 'subtract': 
        case 'multiply': 
        case 'divide':
        default:
            return 'This is invalid';   
    }
}catch (e){
    console.log("Apperently Not");
};
};






const handleHttpCalculation = (request, response) => {
    const query = request.query;
    const x = query.x;
    const y = query.y;
    const method = query.method;

    const result = handleCalculation(method, x, y);

    response.send(`X + Y = RESULT`);    
};

module.export = handleHttpCalculation; //Export our calculation function 