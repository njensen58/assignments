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
	
	mouseMove = function(evt) {
	
	};
	
	//public members
	return {
		render: render,
		renderType: renderType
	};

};