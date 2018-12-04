var allText; // filled in readTextFile with the full text of the file.
readTextFile("MeadowinWind.txt");
var stanzas = allText.split("\n\n");//Splits into stanzas at periods
var lines = allText.split("\n");

// Gets user responses, and makes them into something printable.
var response = [];
for (var i =0; i <= stanzas.length - 5; i++) { // Propmts out each line
	alert(stanzas[i]);}

// Turns Poem back into something printable
var WestonPoem;
for (var i = 0  ; i <= lines.length - 1; i++) {
	WestonPoem = WestonPoem + '<br/>' +'<br/>'+ lines[i];
}
// Writing the web page:
var myPoem = document.getElementById("myPoem");
myPoem.innerHTML = WestonPoem;


//This function gets the full text of the poem from the text file
 function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
               allText = rawFile.responseText;
              
            }
        }
    }
    rawFile.send(null);
    return(allText);
}
