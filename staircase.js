var stair = document.querySelector("#stair");
var html;


var n = 6;
// stair.innerHTML = html;
stairCase(n);
function stairCase(name) {
    html = `<ul>`;
    for (var i=1; i<=name; i++){
        var line ="";
        var spaces = n-i;
        var hashtags = i;
        line = " ".repeat(spaces) + "#".repeat(hashtags);
        console.log(line);
        html += `<li>${line}</li>`;
    }
    html += `</ul>`;
    stair.innerHTML = html;
}




// // alternative array method:
// let filledArray = new Array(n).fill(' ');
// while (filledArray.indexOf(' ')!== -1){
//     filledArray.shift();
//     filledArray.push('#');
//     console.log(filledArray.join(""));
//     n--;
// }


// Expected Output
//      *
//     **
//    ***
//   ****
//  *****
// ******