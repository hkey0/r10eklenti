var b = document.getElementsByClassName("navbar-nav")

/* chrome.tabs.onActivated.addListener(tab=>{
    chrome.tabs.get(tab.tabId, current_tab_info=>{
        if(/^https:\/\/www\.r10/.test(current_tab_info.url)){


            alert(document.getElementsByClassName("headerTop").length);  
            document.getElementByTagName('ul').innerText = "";
        }
    })
}) */


b[0].innerHTML += '<li class="parent"><a href="" data-parent="1"></a></li><li class="parent"><i class="fa fa-usd" aria-hidden="true" style="color:#85bb65;"></i><a href="" data-parent="1" id="dolar-kuru" style="color:#85bb65;margin-left:3px;">  </a>' +
     '</li><li class="parent"><a href="" data-parent="1"></a></li><li class="parent"><i style="color:#f7931a;" class="fa fa-btc"  aria-hidden="true"></i><a href="" data-parent="1" id="btcusdt" style="color:#f7931a;margin-left:3px;">    </a>  </li>' 
     // '</li><li class="parent"><a href="" data-parent="1"></a></li><li class="parent"><i class="fa fa-ethereum"></i><a href="" data-parent="1" id="ethusdt" style="color:#ECEFF0	"> 28,899 </a>  </li>';


var xhttp = new XMLHttpRequest();


xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
        document.getElementById("btcusdt").innerText = " " + parseFloat(JSON.parse(xhttp.responseText.replaceAll("\n", ""))[11].price).toFixed(2);
        document.getElementById("dolar-kuru").innerText = parseFloat(JSON.parse(xhttp.responseText.replaceAll("\n", ""))[687].price).toFixed(2);
        // document.getElementById("ethusdt").innerText =  parseFloat(JSON.parse(xhttp.responseText.replaceAll("\n", ""))[12].price).toFixed(2);
        
    }
};

xhttp.open("GET", "https://api.binance.com/api/v3/ticker/price", true);
xhttp.send();

function lak(){
    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            document.getElementById("btcusdt").innerText = " " + parseFloat(JSON.parse(xhttp.responseText.replaceAll("\n", ""))[11].price).toFixed(2);
            document.getElementById("dolar-kuru").innerText = parseFloat(JSON.parse(xhttp.responseText.replaceAll("\n", ""))[687].price).toFixed(2);
            // document.getElementById("ethusdt").innerText =  parseFloat(JSON.parse(xhttp.responseText.replaceAll("\n", ""))[12].price).toFixed(2);
            
        }
    };

    xhttp.open("GET", "https://api.binance.com/api/v3/ticker/price", true);
    xhttp.send();
}
setInterval(lak, 5000);
