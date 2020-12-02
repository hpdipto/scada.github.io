var svgImg = document.getElementById("svgImg");
// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
// but for some strange reason it creates problem
var svgDoc = svgImg.contentDocument;
// svgImg.addEventListener(
// 	"load",
// 	function () {
// 		// get the inner DOM of svgImg
// 		svgDoc = svgImg.contentDocument;
// 		console.log("#");
// 	},
// 	false
// );

function increase() {
	var svg = SVG(svgDoc);
	var st11 = svg.find(".st11");
	st11.animate({ duration: 3000 }).height(90).transform({ translateY: 0 });
}

function decrease() {
	var svg = SVG(svgDoc);
	var st11 = svg.find(".st11");
	st11.animate({ duration: 3000 }).height(50).transform({ translateY: 40 });
}

var drawText;
function waterMeter() {
	var svg = SVG(svgDoc);
	var st30 = svg.find(".st30");
	// clearing water meter text
	var m3 = st30.slice(0, 8);
	m3.forEach((i) => i.hide());

	var st29 = svg.find(".st29");
	st29 = st29[0];

	// generate random value
	var randomValue = `${Math.random() * 1000}`;
	randomValue = randomValue.slice(0, 6);

	if (drawText != undefined) {
		// clearing the text
		drawText.clear();
	}

	// adding new text
	drawText = st29
		.transform({ rotate: 180 })
		.text(randomValue)
		.font({
			size: 10,
			family: "Menlo, sans-serif",
			fill: "#000",
		})
		.leading(1)
		.dx(9);
}
