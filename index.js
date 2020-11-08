const server = require("./server.js")

const port = process.env.PORT || 8989;

server.listen(port, () => {
    console.log(`\n***_Server Reporting For DUtY on port: ${port}_***\n`)
})