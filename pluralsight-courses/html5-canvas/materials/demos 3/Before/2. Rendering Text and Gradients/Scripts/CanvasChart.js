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

	},
	
	renderBackground = function() {

	},
	
	renderText = function() {
	
	},
	
	getMaxDataYValue = function() {
        var maxY = 0;
        for (var i = 0; i < data.dataPoints.length; i++) {
            var y = data.dataPoints[i].y;
            if (y > maxY) maxY = y;
        }
        return maxY;
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