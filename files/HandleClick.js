function getStocks(){
		console.log("sometext1");
		$.ajax({
			url: 'http://finance.google.com/finance/info?client=ig&q=NSE:PNB'
		}).success(function(data) {
			data = data.replace("//","")
			var stockInfo = JSON.parse(data)[0];
			//console.log(stockInfo);

			var stockString2 =
			            '<div>';
			        stockString2 += 'Company: <span class="stockSymbol"><b>' + stockInfo.t + '</b></span><br />';
			        stockString2 += 'Price: <span class="stockPrice2">' + stockInfo.l + '</span><br />';
			        stockString2 += 'Change: <span class="stockChange">' + stockInfo.c + '</span><br />'
			        stockString2 += ' Reported at: <span>at</span> <span class="stockTime">' + stockInfo.ltt + '</span>';
			        stockString2 += '</div>';
							console.log(stockString2);
			$('#stocks').html(stockString2);

		}).error(function(){
			console.log("Error Occured");
		})

		console.log("someText2");
};

$(document).ready(function(){
	$("#button1").click(function(){
		getStocks();
	});

	setInterval(function(){getStocks()}, 5000);
});
