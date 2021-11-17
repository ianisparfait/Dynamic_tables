const DATAS = {
    datas: [
        {exercice: 'truc1', reps: '12', series:'54', repos: '1\'30'},
        {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'},
        {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'},
        {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'},
        {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'},
        {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'},
        {exercice: 'truc2', reps: '10', series:'54', repos: '1\'30'}
    ]
}

function init() {
    const TABLE = document.querySelector('.table'),
        HEADERTABLE = document.querySelector('.header'),
        BODYTABLE = document.querySelector('.body')


    writingHeader(HEADERTABLE)
    writingBody(BODYTABLE)
}

function writingHeader(header) {
    for (let x in DATAS) {
        let value = DATAS[x],
            headers = Object.keys(value[0])
        for (let index = 0; index < headers.length; index++) {
            let th = document.createElement('th')
            th.innerHTML = headers[index]
            header.appendChild(th)
        }
    }
}

function writingBody(body) {
    for (let x in DATAS) {
        let tab = DATAS[x]
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


(() => {
    init()
})();