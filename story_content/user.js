function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZPZAV121wM":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwsokyvSgHuLnxj8dBLBOnnFA6oBHdSYr7xUjq6YX9YAwC_falpkiN9XQPAilKpx7Xogw/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

