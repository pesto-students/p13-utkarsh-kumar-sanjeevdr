function drawTriangle(triangleSize) {
    for (let i = 1; i <= triangleSize; i++) {
        let starLine = "";
        for (let j = 0; j < i; j++) {
            starLine += "*" + " ";
        }
        console.log(starLine);
    }
}

drawTriangle(5);
