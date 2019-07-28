const express = require('express');
const app = express();
app.listen(3000, () => console.log('server started on port 3000'))

app.get('/', (req, res) => {
    // console.log(__dirname)
    res.sendFile(__dirname + '/views/index.html')
})


app.get('/detail/:page?', (req, res) => {
    const page = req.params.page || 1
    res.send({ page })
})
class Calculator {
    constructor(a, b, pt) {
        this.a = a;
        this.b = b;
        this.pt = pt
    }
    get pheptinh() {
        if (this.pt == 'cong') return '+'
        if (this.pt == 'tru') return '-'
        if (this.pt == 'nhan') return '*'
        if (this.pt == 'chia') return '/'
        if (this.pt == 'chiadu') return '%'
        throw new Error('Undefined pt!')
    }
    get result() {
        let str = `${this.a} ${this.pheptinh} ${this.b}`
        // `2 + 4`
        return eval(str)
    }
}
try {
    const cal = new Calculator(2, 'qqq', 'tru')
    console.log(cal.result)
}
catch (error) {
    console.log(error.message)
}