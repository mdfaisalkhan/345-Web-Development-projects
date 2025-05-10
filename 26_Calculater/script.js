let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (value === 'AC') {
            string = "";
            input.value = string;
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (
        /[0-9+\-*/.%]/.test(e.key) || 
        e.key === '.' 
    ) {
        string += e.key;
        input.value = string;
    } else if (e.key === 'Enter') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (e.key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    } else if (e.key === 'Escape') {
        string = "";
        input.value = string;
    }
});
