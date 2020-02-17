// Clock function 
const clock = document.getElementById("clock");

const m1 = moment().format('MMMM Do YYYY, hh:mm:ss A');

function update() {
    const now = moment();
    const readable = now.format('MMMM Do YYYY, hh:mm:ss A');
    clock.textContent = readable;
}
setInterval(update, 1000);
update();
// end clock function 
const nine = moment({ hour: 09, minute: 00 });
const ten = moment({ hour: 10, minute: 00 });
const eleven = moment({ hour: 11, minute: 00 });
const twelve = moment({ hour: 12, minute: 00 });
const thirteen = moment({ hour: 13, minute: 00 });
const fourteen = moment({ hour: 14, minute: 00 });
const fifteen = moment({ hour: 15, minute: 00 });
const sixteen = moment({ hour: 16, minute: 00 });
const seventeen = moment({ hour: 17, minute: 00 });


//change color functions
function changeColor9() {
    if (moment().isSame(nine)) {
        document.getElementById("nine").style.backgroundColor = "#ff6961";
    } else if (moment().isAfter(nine)) {
        document.getElementById("nine").style.backgroundColor = "#77dd77";
    } else if (moment().isBefore(nine)) {
        document.getElementById("nine").style.backgroundColor = "#d3d3d3";
    }
}

changeColor9();

function changeColor10() {
    if (moment().isSame(ten)) {
        document.getElementById("ten").style.backgroundColor = "#ff6961";
    } else if (moment().isAfter(ten)) {
        document.getElementById("ten").style.backgroundColor = "#77dd77";
    } else if (moment().isBefore(ten)) {
        document.getElementById("ten").style.backgroundColor = "#d3d3d3";
    }
}
changeColor10();

function changeColor11() {
    if (moment().isSame(eleven)) {
        document.getElementById("eleven").style.backgroundColor = "#ff6961";
        console.log(nine);
    } else if (moment().isAfter(eleven)) {
        document.getElementById("eleven").style.backgroundColor = "#77dd77";
    } else if (moment().isBefore(eleven)) {
        document.getElementById("eleven").style.backgroundColor = "#d3d3d3";
    }
}
changeColor11();

function changeColor12() {
    if (moment().isSame(twelve)) {
        document.getElementById("twelve").style.backgroundColor = "#ff6961";
        console.log(nine);
    } else if (moment().isAfter(twelve)) {
        document.getElementById("twelve").style.backgroundColor = "#77dd77";
    } else if (moment().isBefore(twelve)) {
        document.getElementById("twelve").style.backgroundColor = "#d3d3d3";
    }
}
changeColor12();

function changeColor13() {
    if (moment().isSame(thirteen)) {
        document.getElementById("one").style.backgroundColor = "#ff6961";
        console.log(nine);
    } else if (moment().isAfter(thirteen)) {
        document.getElementById("one").style.backgroundColor = "#77dd77";
    } else if (moment().isBefore(thirteen)) {
        document.getElementById("one").style.backgroundColor = "#d3d3d3";
    }
}
changeColor13();

function changeColor14() {
    if (moment().isSame(fourteen)) {
        document.getElementById("two").style.backgroundColor = "#ff6961";
        console.log(nine);
    } else if (moment().isAfter(fourteen)) {
        document.getElementById("two").style.backgroundColor = "#77dd77";
    } else if (moment().isBefore(fourteen)) {
        document.getElementById("two").style.backgroundColor = "#d3d3d3";
    }
}
changeColor14();

function changeColor15() {
    if (moment().isSame(fifteen)) {
        document.getElementById("three").style.backgroundColor = "#ff6961";
        console.log(nine);
    } else if (moment().isAfter(fifteen)) {
        document.getElementById("three").style.backgroundColor = "#77dd77";
    } else if (moment().isBefore(fifteen)) {
        document.getElementById("three").style.backgroundColor = "#d3d3d3";
    }
}
changeColor15();

function changeColor16() {
    if (moment().isSame(sixteen)) {
        document.getElementById("four").style.backgroundColor = "#ff6961";
        console.log(nine);
    } else if (moment().isAfter(sixteen)) {
        document.getElementById("four").style.backgroundColor = "#77dd77";
    } else if (moment().isBefore(sixteen)) {
        document.getElementById("four").style.backgroundColor = "#d3d3d3";
    }
}
changeColor16();

function changeColor17() {
    if (moment().isSame(seventeen)) {
        document.getElementById("five").style.backgroundColor = "#ff6961";
        console.log(nine);
    } else if (moment().isAfter(seventeen)) {
        document.getElementById("five").style.backgroundColor = "#77dd77";
    } else if (moment().isBefore(seventeen)) {
        document.getElementById("five").style.backgroundColor = "#d3d3d3";
    }
}
changeColor17();

// text area storage function

function save9() {
    let saveData9 = document.getElementById("nine").value;
    localStorage.setItem("data", saveData9);


};
// grabs data from local storage and appends to textarea
function show9() {
    let showData9 = localStorage.getItem("data");
    $("#nine").append(showData9)


};
//runs the show function
show9();


// repeats functions for each text box
function save10() {
    let saveData10 = document.getElementById("ten").value;
    localStorage.setItem("data10", saveData10);


};

function show10() {
    let showData10 = localStorage.getItem("data10");
    $("#ten").append(showData10)
    console.log(showData10)


};
show10();



function save11() {
    let saveData11 = document.getElementById("eleven").value;
    localStorage.setItem("data11", saveData11);


};

function show11() {
    let showData11 = localStorage.getItem("data11");
    $("#eleven").append(showData11)



};
show11();


function save12() {
    let saveData12 = document.getElementById("twelve").value;
    localStorage.setItem("data12", saveData12);


};

function show12() {
    let showData12 = localStorage.getItem("data12");
    $("#twelve").append(showData12)



};
show12();


function save1() {
    let saveData1 = document.getElementById("one").value;
    localStorage.setItem("data1", saveData1);


};

function show1() {
    let showData1 = localStorage.getItem("data1");
    $("#one").append(showData1)



};
show1();

function save2() {
    let saveData2 = document.getElementById("two").value;
    localStorage.setItem("data2", saveData2);


};

function show2() {
    let showData2 = localStorage.getItem("data2");
    $("#two").append(showData2)



};
show2();

function save3() {
    let saveData3 = document.getElementById("three").value;
    localStorage.setItem("data3", saveData3);


};

function show3() {
    let showData3 = localStorage.getItem("data3");
    $("#three").append(showData3)



};
show3();

function save4() {
    let saveData4 = document.getElementById("four").value;
    localStorage.setItem("data4", saveData4);


}

function show4() {
    let showData4 = localStorage.getItem("data4");
    $("#four").append(showData4)



};
show4();

function save5() {
    let saveData5 = document.getElementById("ten").value;
    localStorage.setItem("data5", saveData5);


};

function show5() {
    let showData5 = localStorage.getItem("data5");
    $("#five").append(showData5)



};
show5();



// var submitText = $(".btnman");
// var textArea = $(".boxarea");


// submitText.on("click", function(event) {
//     event.preventDefault();

//     // var text = document.querySelector(".boxarea").value;
//     let text = $(this).siblings(".boxarea").val();
//     let area = $(this).parent().attr("id")
//     console.log(text)
//     console.log(area)

//     localStorage.setItem(area, text);

//     textArea.textContent = text

//     function textLoad(area, text) {
//         let showData = localStorage.getItem(area, text)
//         $("#nine").append(showData.toString()

//     };

//     textLoad();
// });