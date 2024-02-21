import fs, { mkdir } from "fs"

fs.writeFile("./blog1.txt", "Ich bin ein Webdeveloper" + "\n", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Datei geschrieben");
    });
    
fs.writeFile("./blog2.txt", "beliebiger text" + "\n", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Datei geschrieben");
    });
fs.access("./assets", fs.constants.F_OK, (err) => {
    if (err) {
        console.error('Die Datei existiert nicht.');
        fs.mkdir('./assets',(err) =>{
        if (err){
            console.log(err)
            return;
        }
        console.log("ordner erstellt")
    });
        return;
    }
    });

fs.access("./delete.txt", fs.constants.F_OK, (err) => {
    if (err) {
        console.error('Die Datei existiert nicht.');
        return;
    }else{
        fs.unlink("./delete.txt", (err) => {
            if (err) {
                console.error('Fehler beim Löschen der Datei:', err);
                return;
            }
            console.log('Die Datei wurde erfolgreich gelöscht.');
            });
    }
    });

    fs.rename("./Hello.txt", "./HelloWorld.txt", (err) => {
        if (err) {
            console.error('Fehler beim Umbenennen der Datei:', err);
            return;
        }
        console.log('Die Datei wurde erfolgreich umbenannt.');
        });


