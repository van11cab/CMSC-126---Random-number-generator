function generate(){
				var x = Math.round(Math.random() * (100));
				var y = x.toString();
				document.getElementById("a").innerHTML +=" " + y;

				var w;
				if(x % 2 == 0){
					document.getElementById("b").innerHTML +=" " + y;
					var w = parseInt(document.getElementById("product").innerHTML) * x;
					document.getElementById("product").innerHTML = w;

				}else{
					document.getElementById("c").innerHTML +=" " + y;
					var w = parseInt(document.getElementById("sum").innerHTML) + x;

					document.getElementById("sum").innerHTML = w;
				}
			}	

