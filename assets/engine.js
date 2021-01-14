$(document).ready(function(){


	var bom = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	
	var a = start();


	function start()
	{
		
		let random = Math.random()+0.1;
		let giveFor = Math.floor(random * bom.length);
		return giveFor;
	}

	$(".kotak").on("click", function(){
		
		var id = $(this).attr("id");

		if (id == a) {
			$("#canvas").html("<img src='assets/img/"+a+".jpeg' width='100%'>");
			$("#score").html("<h3>Ooops, Maaf kalo kaget :)</h3><br><button class='btn btn-danger' id='replay'>Main lagi</button>");
			var audio = new Audio('assets/lose.mp3');
			audio.play();
		}else{
			$(this).removeClass("bg-dark");
			$(this).html("");
			bom.splice(bom.indexOf(id), 1);

			if (bom.length == 1) {
				$("#canvas").html("<img src='assets/img/win.jpg' width='100%'>");
				$("#score").html("<h3>Wahhh... selamat yah, kamu menang</h3><br><button class='btn btn-danger' id='replay'>Main lagi</button>");
				var win = new Audio('assets/win.mp3');
				var clap = new Audio('assets/clap.mp3');
				win.play();
				clap.play();
			}

		}

		$("#score").on("click", "#replay", function(){
			location.reload();
		})

	})
})