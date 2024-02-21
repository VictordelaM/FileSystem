import fs from 'fs'

const arrayData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

arrayData.map((e) => {
        fs.writeFile("./data.txt", e.id + " - " + e.title + '\n' + e.description+ '\n'+'\n', {flag:"a"} ,(err) => {
            if (err) {
                console.error(err);
                return;}
            console.log("inhalt eingefügt");});})