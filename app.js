const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Addition
app.get('/add/:num1/:num2', (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        
        if(isNaN(num1)) throw new Error("Invalid number: num1");
        if(isNaN(num2)) throw new Error("Invalid number: num2");
        
        res.json({
            operation: "add",
            num1,
            num2,
            result: num1 + num2
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Subtraction
app.get('/subtract/:num1/:num2', (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        
        if(isNaN(num1)) throw new Error("Invalid number: num1");
        if(isNaN(num2)) throw new Error("Invalid number: num2");
        
        res.json({
            operation: "subtract",
            num1,
            num2,
            result: num1 - num2
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Multiplication
app.get('/multiply/:num1/:num2', (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        
        if(isNaN(num1)) throw new Error("Invalid number: num1");
        if(isNaN(num2)) throw new Error("Invalid number: num2");
        
        res.json({
            operation: "multiply",
            num1,
            num2,
            result: num1 * num2
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Division 
app.get('/divide/:num1/:num2', (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        
        if(isNaN(num1)) throw new Error("Invalid number: num1");
        if(isNaN(num2)) throw new Error("Invalid number: num2");
        if(num2 === 0) throw new Error("Cannot divide by zero");
        
        res.json({
            operation: "divide",
            num1,
            num2,
            result: num1 / num2
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// power
app.get('/power/:base/:exponent', (req, res) => {
    try {
        const base = parseFloat(req.params.base);
        const exponent = parseFloat(req.params.exponent);
        
        if(isNaN(base)) throw new Error("Base must be a valid number");
        if(isNaN(exponent)) throw new Error("Exponent must be a valid number");
        
        res.json({
            operation: "power",
            base,
            exponent,
            result: Math.pow(base, exponent)
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// sqrt
app.get('/sqrt/:num', (req, res) => {
    try {
        const num = parseFloat(req.params.num);
        
        if(isNaN(num)) throw new Error("Input must be a valid number");
        if(num < 0) throw new Error("Cannot calculate square root of negative number");
        
        res.json({
            operation: "square root",
            number: num,
            result: Math.sqrt(num)
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// mod
app.get('/mod/:num1/:num2', (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        
        if(isNaN(num1)) throw new Error("First number must be valid");
        if(isNaN(num2)) throw new Error("Second number must be valid");
        if(num2 === 0) throw new Error("Cannot divide by zero in modulo operation");
        
        res.json({
            operation: "modulo",
            num1,
            num2,
            result: num1 % num2,
            explanation: `${num1} % ${num2} = ${num1 % num2}`
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Calculator service running on http://localhost:${PORT}`);
});