	function cap() {

		var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
				   ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
				   'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','#','&',"@"];

		var a=alpha[Math.floor(Math.random()*65)];
		var b=alpha[Math.floor(Math.random()*65)];
		var c=alpha[Math.floor(Math.random()*65)];
		var d=alpha[Math.floor(Math.random()*65)];
		var e=alpha[Math.floor(Math.random()*65)];
		var f=alpha[Math.floor(Math.random()*65)];

		var sum=a + b + c + d + e + f;

		document.getElementById("capt").value=sum;
	}

	function validcap() {
		var string1 = document.getElementById('capt').value;
		var string2 = document.getElementById('textinput').value;
		if (string1 == string2){

			window.close(self)
			window.open('index.html')

			return true;
		}
		else {
			alert("Kérjük, adjon meg egy érvényes kódot");
			return false;
		}
	}

cap()
