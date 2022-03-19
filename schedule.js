let url = `https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        let mine = data;
        console.log(mine)
       
        for (let pat of mine.appointments) {
            let d = new Date(pat.createdAt);
            let hour, mainHour, minute, timeFrame;
            if (d.getHours() > 11) {
                hour = d.getHours() - 12;
                timeFrame = '9pm'
                if (hour <= 9) {
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }
            } else {
                hour = d.getHours();
                timeFrame = 'am'
                if (hour <= 9) {
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }
            }
            if (d.getMinutes() <= 9) {
                minute = '0' + d.getMinutes()
            } else {
                minute = d.getMinutes()
            }


            let mee = document.querySelector("#appointments");
            mee.innerHTML += `<div class=" disp grid-md pdbtm1">
            <div class="mrgrgt time fss"><h5>${mainHour}:${minute} ${timeFrame}</h5></div>
            <div class="grey pd3 bdrad grid4">
                <div><img src="imageD/img.svg"></div>
                <div class='fon' id="nam">${pat.name}</div>
                <div><img src="imageD/dot.svg"></div>
                </div>
            `;
        }
    })



let url1 = `https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites`;

fetch(url1)
    .then(response => response.json())
    .then(data => {
        let act = data;
        // console.log(act)
        for (let me of act.activities) {
            // let rep = document.querySelector("#repo");
            // rep.innerHTML += me.type;

            let tit = document.querySelector("#name");
            if (me.type === "report") {
                tit.innerHTML += `
                <div class="dsp-flex fon" id="report"> 
                    <img src="imageD/not.svg">
                    <h5>${me.title}</h5>
                </div>
            `;
            } else {
                tit.innerHTML += `
                <div class="dsp-flex fon" id="report"> 
                    <img src="imageD/icon1.svg">
                    <h5>${me.title}</h5>
                 </div>`;
            }
        }
    })

