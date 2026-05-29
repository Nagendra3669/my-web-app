const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>OP Kushal TEAM AZURE</h1>
        <p>Deployed using Azure DevOps CI/CD</p>
    `);
});
6
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});  