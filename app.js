ws=new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
price=0;
old_price=0;
ws.onmessage=(event)=>{
	data=JSON.parse(event.data);
	price=parseFloat(data.p).toFixed(2);
	if(price>old_price){
		btc_p.style.color="green";
	}else if(price==old_price){
		btc_p.style.color="white";
	}else{
		btc_p.style.color="red";
	}
	old_price=price;	
	btc_p.innerText=parseFloat(data.p).toFixed(2);
}

ws=new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
price=0;
old_price=0;
ws.onmessage=(event)=>{
	data=JSON.parse(event.data);
	price=parseFloat(data.p).toFixed(2);
	if(price>old_price){
		eth_p.style.color="green";
	}else if(price==old_price){
		eth_p.style.color="white";
	}else{
		eth_p.style.color="red";
	}
	old_price=price;	
	eth_p.innerText=parseFloat(data.p).toFixed(2);
}

ws=new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
price=0;
old_price=0;
ws.onmessage=(event)=>{
	data=JSON.parse(event.data);
	price=parseFloat(data.p).toFixed(2);
	if(price>old_price){
		bu_p.style.color="green";
	}else if(price==old_price){
		bu_p.style.color="white";
	}else{
		bu_p.style.color="red";
	}
	old_price=price;	
	bu_p.innerText=parseFloat(data.p).toFixed(2);
}


ws=new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
price=0;
old_price=0;
ws.onmessage=(event)=>{
	data=JSON.parse(event.data);
	price=parseFloat(data.p).toFixed(2);
	if(price>old_price){
		usdt_p.style.color="green";
	}else if(price==old_price){
		usdt_p.style.color="white";
	}else{
		usdt_p.style.color="red";
	}
	old_price=price;	
	usdt_p.innerText=parseFloat(data.p).toFixed(2);
}



