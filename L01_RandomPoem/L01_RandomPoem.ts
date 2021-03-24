namespace L01Poem {
    let subjekt: string [] = ["Hermine", "Harry", "Ron", "Hagrid", "Dobby", "Der sprechende Hut"];
    let praedikat: string [] = ["stiehlt", "verzaubert", "isst", "verflucht", "liebt", "belehrt"];
    let objekt: string [] = ["Schlafbohnen", "Drachen", "Dumbledores Phönix", "den Schnatz", "Krummbein", "die Heiligtümer des Todes"];
    // Ausgabe der Arrays subjekt, praedikat und objekt
    //console.log(subjekt);
    //console.log(praedikat);
    //console.log(objekt);
    // Variable für den Satz
    let vers: string = "";
    //Array in dem alle Verse gespeichert werden
    let allVerse: string [] = [];
    
    
    for (let i: number = subjekt.length - 1; i >= 0; i --) {
        let finalVers: string = getVerse();
        allVerse.push(finalVers);
       //Ausgabe Lumos zeigt, dass der for Loop funktioniert
        //console.log("Lumos");
        //Gibt den Wert von i +1 an (weil wir sonst nicht 6,5,4,3,2,1 sondern 5,4,3,2,1,0 hätten).
        //console.log(i);
    }
    //console.log(allVerse);
    
    function getRandomNum (_nameOfArray: string[]): number {
        let getNum: number = Math.floor(Math.random() * _nameOfArray.length);
        //console.log(getNum);
        return getNum;
        
           
    }
    function getVerse(): string {
        //Aus jedem Array wird eine Zufallszahl gewählt, welche dann den Index repräsentiert
        let iSubjekt: number = getRandomNum(subjekt);
        let iPraedikat: number = getRandomNum(praedikat);
        let iObjekt: number = getRandomNum(objekt);

        // Nun wird das Wort, welches an der jeweilig ausgewählten Stelle steht ermittelt und
        //in den Vers übertragen
        vers = subjekt[iSubjekt] + " " + praedikat[iPraedikat] + " " + objekt[iObjekt];
        console.log(vers);

        //Die benutzen Worte werden aus dem Array gelöscht
        subjekt.splice(iSubjekt, 1);
        praedikat.splice(iPraedikat, 1);
        objekt.splice(iObjekt, 1);

        //Nun soll mit den aktualisierten Arrays neue Verse erstellt werden
      
        return vers;
    }
    //getVerse();
}
