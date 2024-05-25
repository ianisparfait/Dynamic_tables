/* init writing table HTML */
const init = (datas) => {
    const TABLE = document.querySelector(".table"),
        HEADERTABLE = document.querySelector(".header"),
        BODYTABLE = document.querySelector(".body")

    writingHeader(datas, HEADERTABLE);
    writingBody(datas, BODYTABLE);
    handleSelection();
};

/* Writing in thead HTML */
const writingHeader = (datas, header) => {
    for (let x in datas) {
        const value = datas[x],
            headers = Object.keys(value[0]);
        for (let index = 0; index < headers.length; index++) {
            const th = document.createElement("th")
            th.innerHTML = headers[index]
            header.appendChild(th)
        }
        const check = document.createElement("th");
        header.prepend(check);
    }
};

/* Writing in tbody HTML */
const writingBody = (datas, body) => {
    for (let x in datas) {
        const tab = datas[x];
        for (let index = 0; index < tab.length; index++) {
            const tr = document.createElement("tr");
            const obj = tab[index];
            const check = document.createElement("td");
            check.innerHTML = `<input type="checkbox" name="check" class="check" value="${index}">`;
            tr.prepend(check);
            for (let i in obj) {
                const td = document.createElement("td")
                td.innerHTML = obj[i];
                tr.appendChild(td);
            }
            body.appendChild(tr);
        }
    }
}

/* Handle selection */
const handleSelection = () => {
    const checkbox = document.querySelectorAll(".check");
    checkbox.forEach((element) => {
        element.addEventListener("change", (e) => {
            const tr = e.target.parentElement.parentElement;
            if (e.target.checked) {
                tr.classList.add("selected");
            } else {
                tr.classList.remove("selected");
            }
        });
    });
};

/* read json file and output parsed datas to init() function */
const changeHandler = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.target.files,
        file = files[0],
        fileReader = new FileReader();

    fileReader.onload = function(progressEvent) {
        var stringData = fileReader.result;
        init(JSON.parse(stringData));
    }

    fileReader.onerror = function(progressEvent) {
        appendLog("onerror!");
        appendLog("Has Error!");
    }

    fileReader.readAsText(file, "UTF-8");
};

/* Output error */
const appendLog = (msg) => {
    document.getElementById("log-div").innerHTML += "<br>" + msg;
};

/* Check input change */
const checkChange = () => {
    const INPUT = document.querySelector(".file_upload")
    INPUT.addEventListener("change", ev => {
        changeHandler(ev);
    });
};


(() => {
    checkChange()
})();