import fs from "fs"

fs.access("./daniel.txt", fs.constants.F_OK, (err) => {
    if (err) {
        fs.writeFile("./daniel.txt", "beliebiger text", (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Datei geschrieben");
            });
        console.error('Die Datei existiert nicht.');
        return;
    }else{
        fs.writeFile("./daniel.txt", "\n" + "neuer text" + "\n",{flag:"a"}, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Datei geschrieben");
            });
    }
    });