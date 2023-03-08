"use strict";

function addItem(text, done)
{
    const item = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input')
    item.textContent = text;
    input.type = "checkbox";
    input.checked = done;
    input.id = `todo${todo.querySelectorAll('li').length + 1}`;
    label.htmlFor = input.id;
    item.appendChild(input);
    item.appendChild(label);
    todo.appendChild(item);
    
    const button = document.createElement('button');
    button.textContent = "x";
    button.addEventListener('click', ev => {
        item.remove();
    });
    item.appendChild(button);
}
    
add.addEventListener('click', ev => 
{
    if(text.value)
    {
      addItem(text.value);
      text.value = null;
      text.focus();
    } 
});
    
text.addEventListener('keydown', ev =>
{
    if(ev.key == "Enter")
    {
        add.click();
    }
});

function clearlist()
{
    while(todo.firstChild)
    {
        todo.removeChild(todo.firstChild);
    } 
}

clear.addEventListener('click', ev => 
{
    clearlist();
});

function saveToStorage() {
        const elements = Array.from(todo.querySelectorAll('li'));
        const data = elements.map(el => {
                return {
       text: el.querySelector('label').textContent,
                           done: el.querySelector('input').checked
                }
    });
    localStorage.setItem(todo.id, JSON.stringify(data));
}

function loadfromStorage() {
    clearlist();
    const data = JSON.parse(localStorage.getItem(todo.id));
    for (const item of data)
    {
        addItem(item.text, item.done);
    }
}

loadfromStorage();