	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = 0;
	var y = 0;
	//绘制网格
	for(x=20,y=20;y <= 380;x+=20,y+=20){
		context.moveTo(0,x);
		context.lineTo(400,y);
	}
	for(;;){
		context.moveTo(0,x);
		context.lineTo(400,y);		
	}
	//设置样式
	context.lineWidth = 2;
	context.strokeStyle = "#000000";
	//绘制
	context.stroke();