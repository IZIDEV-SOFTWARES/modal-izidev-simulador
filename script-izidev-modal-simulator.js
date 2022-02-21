// Set global variables
var hasSimulateButton = document.getElementById("simulation-script").getAttribute("simulate-icon");
var newStylesSimulateButton = document.getElementById("simulation-script").getAttribute("simulate-icon-styles");
var simulateButton = document.getElementById('simulate-button');
var emp = document.getElementById("simulation-script").getAttribute("emp");
var body = document.querySelector("body");
var html = document.querySelector("html");

// Alert site admin when script is not receiving the 'emp' parameter
if (!emp) alert('IZIDEV: Atencao! O parametro obrigatorio "emp" nao foi inserido no script')

function openSimulation() {
    // Remove the 'Simulate' button from page
    if (simulateButton) simulateButton.style.display="none";
    
    // Avoid page scroll
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    // Create main div with modal background
    var div = document.createElement('div');
    div.setAttribute('id', 'div-simulate');
    div.setAttribute('onclick', 'closeSimulation()');
    div.setAttribute('style', 'position:fixed;display:flex;left:0;right:0;top:0;bottom:0;margin-left:auto;margin-right:auto;background:rgba(0,0,0,.4);padding:20px;z-index:1000');

    // Centered div for close button + Iframe positioning
    var centerDiv = document.createElement('div');
    centerDiv.setAttribute('id', 'centerDiv-simulate');
    centerDiv.setAttribute('style', 'position:relative;display:flex;margin:0 auto;width:620px;align-items:center;justify-content:center;');

    // Adds the close button to the centered div top-right, change the src URL for a different close button
    var img = document.createElement('img');
    img.setAttribute('onclick', 'closeSimulation()');
    img.setAttribute('src', 'https://i.imgur.com/Wdkvvsp.png');
    img.setAttribute('style', 'position: absolute;top: 15px;right: 15px;width:35px;cursor:pointer;');

    // Adds the simulation Iframe
    var iframe = document.createElement('iframe');
    iframe.src = `https://simulador.izidev.com.br/${emp}/minimal`;
    iframe.setAttribute('id', 'iframe-simulate');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('frameBorder', '0');
    iframe.setAttribute('scrolling', 'true');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('style', 'display:flex;margin:0 auto;width:100%');
    
    // Append Centered div in the main div
    div.appendChild(centerDiv);

    // Append Iframe and close button in the centered div
    centerDiv.appendChild(iframe);
    centerDiv.appendChild(img);

    // Append Main div in the document
    document.body.appendChild(div);
}

function closeSimulation() {
    // Remove Main div with the rest and allow page scrolling again
    document.getElementById("div-simulate").remove();

    if (simulateButton) simulateButton.style.display="block";
    
    body.style.overflow = "auto";
    html.style.overflow = "auto";
}; 

// Create the 'Simulate' button and append it in the document
if (hasSimulateButton === 'true') {
    var button = document.createElement('button');
    button.setAttribute('onclick', 'openSimulation()');
    button.setAttribute('id', 'simulate-button');
    button.setAttribute('style', 'z-index:1;position: fixed;right: 20px;bottom: 20px;border: none;background: #4c4ca9;color: white;border-radius: 4px;padding: 10px 20px;height: 40px;cursor: pointer;');
    button.append("Simular");

    // Adds custom styles to the button
    if (newStylesSimulateButton) {
        button.setAttribute('style', 'z-index:1;position: fixed;right: 20px;bottom: 20px;border: none;background: #4c4ca9;color: white;border-radius: 4px;padding: 10px 20px;height: 40px;cursor: pointer;' + newStylesSimulateButton);
    }

    document.body.appendChild(button);
};
