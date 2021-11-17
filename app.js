// const DATAS = {
//     datas: [
//         {exercice: 'truc1', reps: '12', series:'54', repos: '1\'30'},
//         {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'},
//         {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'},
//         {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'},
//         {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'},
//         {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'},
//         {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'}
//     ]
// }

/* init writing table HTML */
function init(datas) {
    const TABLE = document.querySelector('.table'),
        HEADERTABLE = document.querySelector('.header'),
        BODYTABLE = document.querySelector('.body')

    writingHeader(datas, HEADERTABLE)
    writingBody(datas, BODYTABLE)
}
/* Writing in thead HTML */
function writingHeader(datas, header) {
    for (let x in datas) {
        let value = datas[x],
            headers = Object.keys(value[0])
        for (let index = 0; index < headers.length; index++) {
            let th = document.createElement('th')
            th.innerHTML = headers[index]
            header.appendChild(th)
        }
    }
}
/* Writing in tbody HTML */
function writingBody(datas, body) {
    for (let x in datas) {
        let tab = datas[x]
        for (let index = 0; index < tab.length; index++) {
            let tr = document.createElement('tr')
            let obj = tab[index]
            for (let i in obj) {
                let td = document.createElement('td')
                td.innerHTML = obj[i]
                tr.appendChild(td)
            }
            body.appendChild(tr)
        }
    }
}

/* read json file and output parsed datas to init() function */
function changeHandler(evt) {
    evt.stopPropagation()
    evt.preventDefault()

    var files = evt.target.files,
        file = files[0],
        fileReader = new FileReader()

    fileReader.onload = function(progressEvent) {
        var stringData = fileReader.result;
        init(JSON.parse(stringData))
    }

    fileReader.onerror = function(progressEvent) {
        appendLog("onerror!")
        appendLog("Has Error!")
    }

    fileReader.readAsText(file, "UTF-8")
}
/* Output error */
function appendLog(msg) {
    document.getElementById('log-div').innerHTML += "<br>" + msg;
}
/* Check input change */
function checkChange() {
    const INPUT = document.querySelector('.file_upload')
    INPUT.addEventListener('change', ev => {
        changeHandler(ev)
    })
}


(() => {
    checkChange()
})();