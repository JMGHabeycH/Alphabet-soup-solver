let alphabetSoup =[
    
];
//Comportamiento del programa
// const rows = alphabetSoup.length;//prompt("Ingrese la cantidad de filas: ");
// const columns = alphabetSoup[0].length;//prompt("Ingrese la cantidad de columnas: ");


// creatArray();
// createAlphabetSoup(alphabetSoup);
// searchCoincidence(alphabetSoup,"bye");

//Crear el array de la sopa de letras.
function creatArray(){
    let row = prompt("Enter data row: (for example: ahbyeq)");
    row = row.split('');
    console.log(row);
    alphabetSoup.push(row);
}





//Interfaz grafica.
// let datosSopa = document.getElementsByTagName("td");
// console.log(datosSopa[35]);
let r = 0;
function createAlphabetSoup(matrix){
    let tableContent = document.getElementById("grids");
    for(r; r < (matrix.length); r++){
        let tableTr = buildTr(r, matrix);
        tableContent.appendChild(tableTr);
    }
}

function buildTr(r, matrix){
    let tr = document.createElement("tr");
    for(let c = 0; c < (matrix[0].length); c++){
        tr.appendChild(buildTd(matrix[r][c]));
    }

    return tr;
}

function buildTd(char){
    let td = document.createElement("td");
    td.classList.add("cell");
    td.textContent = char;
    return td;
}



function searchCoincidence(matrix, searchWord){
    //Recorremos Filas
    for(let r = 0; r < matrix.length; r++){
        //Recorremos columna
        for(let c = 0; c < matrix[0].length; c++){
            
            //Busqueda de coincidencia de letras
            if(matrix[r][c] === searchWord[0]){
                
                //Si coinciden se revisa las letras alrededor buscando coincidencia
                //Revisar a la derecha
                if(compareToTheRight(c,r,matrix,searchWord)){
                    
                    // console.log("right");
                    let text = "The word " + searchWord + " starts at the coordinate (" + (r + 1) + "," + (c + 1) + ") and ends at the coordinate (" + (r + 1)  + "," + (c + (searchWord.length) ) + ")";
                    createMessage(text);
                }
                if(compareToTheLeft(c,r,matrix,searchWord)){
                    // console.log("left");
                    let text = "The word " + searchWord + " starts at the coordinate (" + (r + 1) + "," + (c + 1) + ") and ends at the coordinate (" + (r + 1) + "," + (c - (searchWord.length - 2) ) + ")";
                    createMessage(text);
                }
                if(compareToTheTop(c,r,matrix,searchWord)){
                    // console.log("top");
                    let text = "The word " + searchWord + " starts at the coordinate (" + (r + 1) + "," + (c + 1) +") and ends at the coordinate (" + (r - (searchWord.length) + 2) + "," + (c + 1) + ")";
                    createMessage(text);
                }
                if(compareToTheBottom(c,r,matrix,searchWord)){
                    // console.log("bottom");
                    let text = "The word " + searchWord + " starts at the coordinate (" + (r + 1) + "," + (c + 1) +") and ends at the coordinate (" + (r + (searchWord.length)) + "," + (c + 1) + ")";
                    createMessage(text);
                }
                if(compareToTopRight(c,r,matrix,searchWord)){
                    // console.log("TopRight");
                    let text = "The word " + searchWord + " starts at the coordinate (" + (r + 1) + "," + (c + 1) + ") and ends at the coordinate (" + (r - (searchWord.length - 2)) + "," + (c + searchWord.length) + ")";
                    createMessage(text);
                }
                if(compareToTopLeft(c,r,matrix,searchWord)){
                    // console.log("TopLeft");
                    let text = "The word " + searchWord + " starts at the coordinate (" + (r + 1) + "," + (c + 1) + ") and ends at the coordinate (" + (r - (searchWord.length - 2)) + "," + (c - searchWord.length + 2) + ")";
                    createMessage(text);
                }
                if(compareToBottomRight(c,r,matrix,searchWord)){
                    // console.log("BottomRight");
                    let text = "The word " + searchWord + " starts at the coordinate (" + (r + 1) + "," + (c + 1) + ") and ends at the coordinate (" + (r + (searchWord.length)) + "," + (c + searchWord.length) + ")";
                    createMessage(text);
                }
                if(compareToBottomLeft(c,r,matrix,searchWord)){
                    // console.log("BottomLeft");
                    let text = "The word " + searchWord + " starts at the coordinate (" + (r + 1) + "," + (c + 1) + ") and ends at the coordinate (" + (r + (searchWord.length)) + "," + (c - searchWord.length + 2) + ")";
                    createMessage(text);
                }
            }
        }
    }
}

// let alphabetSoup =[
//     ["a","h","o","l","a","z","a"],
//     ["v","h","o","l","a","o","b"],
//     ["i","c","a","n","p","t","a"],
//     ["o","w","l","c","r","v","h"],
//     ["n","g","o","k","e","e","a"],
//     ["o","a","h","a","l","o","h"]
// ];


function compareToTheRight(x, y, matrix, searchWord){
    for(let i = 1; i < searchWord.length; i++){
        
        if(!(matrix[y][(x + i)] == searchWord[i])){
            return false;
        }
    }
    return true;
}

function compareToTheLeft(x,y,matrix,searchWord){
    for(let i = 1; i < searchWord.length; i++){
        
        if(!(matrix[y][(x - i)] == searchWord[i])){
            return false;
        }
    }
    return true;
}

function compareToTheTop(x, y, matrix, searchWord){
    if((y + 1) >= searchWord.length){
        for(let i = 1; i < searchWord.length; i++){
            if(!(matrix[y-i][x] == searchWord[i])){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }    
}

function compareToTheBottom(x,y,matrix,searchWord){
    if(searchWord.length <= (matrix.length - (y))){
        for(let i = 1; i < searchWord.length; i++){
            if(!(matrix[y+i][x] == searchWord[i])){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

function compareToTopRight(x,y,matrix,searchWord){
    if((y + 1) >= searchWord.length ){
        for(let i = 1; i < searchWord.length; i++){
            if(!(matrix[y - i][x + i] == searchWord[i])){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }    
}

function compareToTopLeft(x,y,matrix,searchWord){
    if((y + 1) >= searchWord.length){
        for(let i = 1; i < searchWord.length; i++){
            if(!(matrix[y - i][x - i] == searchWord[i])){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

function compareToBottomRight(x,y,matrix,searchWord){
        
    if((y + 1) < matrix.length){

        for(let i = 1; i < (searchWord.length ); i++){
            if(i == searchWord.length){
                return true;
            }
            if((y + i) >= matrix.length){
                return false;
            }
            if(!(matrix[y + i][x + i] == searchWord[i])){
                return false
            }
        }
        return true;
    }else{
        return false;
    }    
}

function compareToBottomLeft(x,y,matrix,searchWord){
    if((y + 1) < matrix.length){
        for(let i = 1; i < (searchWord.length ); i++){
            if(i == searchWord.length){
                return true;
            }
            if((y + i) >= matrix.length){
                return false;
            }
            if(!(matrix[y + i][x - i] == searchWord[i])){
                return false
            }
        }
        return true;
    }else{
        return false;
    }
}



const createRowButton = document.getElementById("button-createRow");
createRowButton.addEventListener("click", () => {
    creatArray();
    createAlphabetSoup(alphabetSoup);
});

const searchWordButton = document.getElementById("button-search");
searchWordButton.addEventListener("click", () => {
    let wordToSearch = prompt("What word do you want to search for?");
    searchCoincidence(alphabetSoup, wordToSearch);
});

function createMessage(message){
    let messageContainer = document.getElementById("message-container")
    let div = document.createElement("div");
    div.innerHTML = message;
    messageContainer.appendChild(div);
}

