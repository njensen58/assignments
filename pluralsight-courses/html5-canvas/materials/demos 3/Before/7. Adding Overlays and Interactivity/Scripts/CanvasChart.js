var CanvasChart = function() {

	var ctx,
    margin = { top: 40, left: 75, right: 0, bottom: 75 },
    chartHeight, chartWidth, yMax, xMax, data,
    maxYValue = 0,
    ratio = 0,
    pointRadius = 10,
    renderType = { lines: 'lines', points: 'points' },
    finalDataPoints = [],
    selectedDataPoint = null,
    timerID,
    overlayDiv,
	
	render = function(canvasID, dataObj) {
        data = dataObj;
        createOverlay();

        var canvas = document.getElementById(canvasID);
        chartHeight = canvas.getAttribute('height');
        chartWidth = canvas.getAttribute('width');
        canvas.addEventListener('mousemove', mouseMove, false);
        ctx = canvas.getContext("2d");

        xMax = chartWidth - (margin.left + margin.right);
        yMax = chartHeight - (margin.top + margin.bottom);
        maxYValue = getMaxDataYValue();
        ratio = yMax / maxYValue;
        //render data based upon type of renderType(s) that client supplies
        if (data.renderTypes == undefined || data.renderTypes == null) data.renderTypes = [renderType.lines];
		renderParts();
	},
	
	renderParts = function() {
		renderBackground();
		renderText();
		renderLinesAndLabels(true);
		renderData();
	},
	
	renderBackground = function() {
        var lingrad = ctx.createLinearGradient(margin.left, margin.top, xMax - margin.right, yMax);
        lingrad.addColorStop(0.0, '#D4D4D4');
        lingrad.addColorStop(0.2, '#fff');
        lingrad.addColorStop(0.8, '#fff');
        lingrad.addColorStop(1, '#D4D4D4');
        ctx.fillStyle = lingrad;
        ctx.fillRect(margin.left, margin.top, xMax - margin.left, yMax - margin.top);
        ctx.fillStyle = 'black';
	},
	
	renderText = function() {
        var labelFont = (data.labelFont != null) ? data.labelFont : '20pt Arial';
        ctx.font = labelFont;
        ctx.textAlign = "center";

        //Title
        ctx.fillText(data.title, (chartWidth / 2), margin.top / 2);

        //X-axis text
        var txtSize = ctx.measureText(data.xLabel);
        ctx.fillText(data.xLabel, margin.left + (xMax / 2) - (txtSize.width / 2), yMax + (margin.bottom / 1.2));

        //Y-axis text
        ctx.save();
        ctx.rotate(-Math.PI / 2);
        ctx.font = labelFont;
        ctx.fillText(data.yLabel, (yMax / 2) * -1, margin.left / 4);
        ctx.restore();
	},
	
	renderLinesAndLabels = function(shouldRenderText) {
	    var yInc = yMax / data.dataPoints.length;
        var yPos = 0;
        var xInc = getXInc();
        var xPos = margin.left;
		
		for (var i = 0; i < data.dataPoints.length; i++) {
            yPos += (i == 0) ? margin.top : yInc;
            //Draw horizontal lines
            drawLine({ x: margin.left, y: yPos, x2: xMax, y2: yPos }, '#E8E8E8');

            if (shouldRenderText) {
                //y axis labels
                ctx.font = (data.dataPointFont != null) ? data.dataPointFont : '10pt Calibri';
                var txt = Math.round(maxYValue - ((i == 0) ? 0 : yPos / ratio));
                var txtSize = ctx.measureText(txt);
                ctx.fillText(txt, margin.left - ((txtSize.width >= 14) ? txtSize.width : 10) - 7, yPos + 4);

                //x axis labels
                txt = data.dataPoints[i].x;
                txtSize = ctx.measureText(txt);
                ctx.fillText(txt, xPos, yMax + (margin.bottom / 3));
                xPos += xInc;
            }
        }
		
        //Vertical line
        drawLine({ x: margin.left, y: margin.top, x2: margin.left, y2: yMax });

        //Horizontal Line
        drawLine({ x: margin.left, y: yMax, x2: xMax, y2: yMax });
	},
	
    renderData = function () {
		var xInc = getXInc(),
			prevX = 0,
			prevY = 0;
        for (var i = 0; i < data.dataPoints.length; i++) {
            var pt = data.dataPoints[i];
            var y = (maxYValue - pt.y) * ratio;
            if (y < margin.top) y = margin.top;
            var x = (i * xInc) + margin.left;

            //Calculate dataPoint details
            var dataPoint = { x: x, y: y, currX: margin.left, x2: prevX, y2: prevY, originalY: pt.y };
            finalDataPoints.push(dataPoint);

            prevX = x;
            prevY = y;
        }

        if (data.renderTypes.contains(renderType.lines)) drawLines();
		if (data.renderTypes.contains(renderType.points)) drawPoints();
    },
	
	drawPoints = function() {
		if (data.animatePoints) {
			animate();
		}
		else {
			for (var i=0;i < finalDataPoints.length;i++) {
				var pt = finalDataPoints[i];
				renderCircle(pt.x, pt.y);
			}
		}
	},
	
    animate = function () {
        var speed = (data.animationSpeed == null) ? 20 : data.animationSpeed;
        timerID = requestAnimationFrame(animate);
        clear();
        drawLines();
        for (var i = 0; i < finalDataPoints.length; i++) {
            var pt = finalDataPoints[i];
            pt.currX += speed; //Animating x position to increment it here
            if (pt.currX >= pt.x) pt.currX = pt.x;
            renderCircle(pt.currX, pt.y);
            if (i == finalDataPoints.length - 1 && pt.currX == pt.x) cancelAnimationFrame(timerID);
        }
    },
	
    clear = function () {
        ctx.clearRect(margin.left - pointRadius - 2, margin.top - pointRadius - 2, xMax, yMax - margin.bottom / 3);
        renderBackground();
        renderLinesAndLabels(false);
    },
	
    renderCircle = function (x, y, highlightColor) {
        var radgrad = ctx.createRadialGradient(x, y, pointRadius, x - 5, y - 5, 0);
        radgrad.addColorStop(0, (highlightColor == null) ? 'Green' : highlightColor);
        radgrad.addColorStop(0.9, 'White');
        ctx.beginPath();
        ctx.fillStyle = radgrad;
        //Render circle
        ctx.arc(x, y, pointRadius, 0, 2 * Math.PI, false)
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        ctx.stroke();
        ctx.closePath();
    },
	
    drawLines = function () {
        for (var i = 0; i < finalDataPoints.length; i++) {
            var pt = finalDataPoints[i];
            if (pt.x2 > 0) drawLine(pt);
        }
    }
	
    drawLine = function (pt, strokeStyle) {
        ctx.strokeStyle = (strokeStyle == null) ? 'black' : strokeStyle;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pt.x2, pt.y2);
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();
        ctx.closePath();
    },
	
	getMaxDataYValue = function() {
        var maxY = 0;
        for (var i = 0; i < data.dataPoints.length; i++) {
            var y = data.dataPoints[i].y;
            if (y > maxY) maxY = y;
        }
        return maxY;
	},
	
	getXInc = function () {
        return Math.round(xMax / data.dataPoints.length) - 1;
    },
	
	createOverlay = function() {
	
	},
	
    mouseMove = function (ev) {
        var x, y;
        // Get the mouse position relative to canvas
        if (ev.offsetX || ev.offsetX == 0) {
            x = ev.offsetX;
            y = ev.offsetY;
        }
        else if (ev.layerX || ev.layerX == 0) { //Firefox
            x = ev.layerX - margin.left + (pointRadius * 2) + 5;
            y = ev.layerY - margin.top - 5;
        }

        if ((x > margin.left) && (y > margin.top)) {
            var radius = pointRadius + 4;
            for (var i = 0; i < finalDataPoints.length; i++) {
                var pt = finalDataPoints[i];
                var xMin = pt.x - radius;
                var xMax = pt.x + radius;
                var yMin = pt.y - radius;
                var yMax = pt.y + radius;
                if ((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax)) {
                    clearCircle(pt.x, pt.y);
                    renderCircle(pt.x, pt.y, 'Red');
                    selectedDataPoint = pt;
                    showOverlay(pt);
                    //document.getElementById('output').innerHTML += '<br />' + x + " " + y;
                    break;
                }
                else {
                    if (selectedDataPoint != null) {
                        overlayDiv.style.display = 'none';
                        clearCircle(selectedDataPoint.x, selectedDataPoint.y);
                        renderCircle(selectedDataPoint.x, selectedDataPoint.y);
                        selectedDataPoint = null;
                    }
                }
            }
        }
    };
	
	//public members
	return {
		render: render,
		renderType: renderType
	};

};

//requestAnimationFrame polyfill
//http://paulirish.com/2011/requestanimationframe-for-smart-animating/
(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

Array.prototype.contains = function (value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == value) return true;
    }
    return false;
};