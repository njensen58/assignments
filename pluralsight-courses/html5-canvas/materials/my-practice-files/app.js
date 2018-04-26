window.onload = () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 200, 100);

    ctx.fillStyle = 'navy';
        //   x, y, radius(size), startAngle, endAngle, clockwise/anticlockwise
    ctx.arc(200, 200, 100, 0, 2 * Math.PI, false);
    ctx.fill();
}
