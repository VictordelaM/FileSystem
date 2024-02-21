import fs, { mkdir } from "fs"

fs.writeFile("./blog1.txt", "Ich bin ein Webdeveloper" + "\n", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Ich habe eine Datei geschrieben");
    });
    
fs.writeFile("./blog2.txt", "beliebiger text" + "\n", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Ich habe eine Datei geschrieben");
    });
fs.mkdir('./assets',(err) =>{
    if (err){
        console.log(err)
        return;
    }
    console.log("ordner erstellt")
})