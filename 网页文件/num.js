function fn(){
	var x=num.value;
	try{
		if(x=="") throw "输入为空";
		if(isNaN(x)) throw "输入的不是数字";
		x=Number(x);
		if(x<5) throw "值太小";
		if(x>10) throw "值太大";

	
	}
	catch(err){
		demo.innerHTML="错误:"+err;
		
		}

	}