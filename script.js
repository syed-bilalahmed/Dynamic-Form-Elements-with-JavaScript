
let newBtn = document.createElement("button");  // create   a new button
newBtn.innerText = " Append Button is here, CLick me !"; // inner text

let div = document.querySelector(".box");   //access the div 
// ===================== append is use inside but below==========================
div.append(newBtn);


//======================Prepand is use inside but above==========================
// div.prepend(newBtn);

//+++++++++++++++++++++ add before the node But Outside+++++++++++++++++++++++
// div.before(newBtn);

// +++++++++++++++++++++add after the node But inside++++++++++++++++++++++++++
// div.after(newBtn);

            // End ///


