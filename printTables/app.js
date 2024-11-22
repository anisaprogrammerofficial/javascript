// take input from user 

const printTable = document.getElementById('printTable');
const root = document.getElementById('root')
const error = document.createElement('p')
let userTableInput = document.getElementById('userTableInput');
console.log(userTableInput);

const table = () => {
    userTableInput = Number(document.getElementById('userTableInput').value);
    const tableNumber = userTableInput;
    const tableOuput = document.createElement('div');
    tableOuput.setAttribute('class', 'table')
    root.appendChild(tableOuput)
    if (tableNumber > 0) {
        error.innerHTML=""
        for (let i = 1; i <= 10; i++) {
            let res = tableNumber * i;
            tableOuput.innerHTML += `<p class=''>${tableNumber} x ${i} = ${res}</p>`;
        }

    } else {
        root.appendChild(error)
        error.style.color = 'red'
        error.innerHTML = "Please Enter Valid Table Number";
        console.log(error);
    }
    
}

// event listern

printTable.addEventListener('click', table)
// 2 x 1 = 2
