const divCreate = document.createElement('div');
const bodyFind = document.querySelector('body');
bodyFind.appendChild(divCreate);

let parceData = JSON.parse(userTable);
console.log(parceData);

parceData.users.forEach(element => {
    divCreate.insertAdjacentHTML("beforeend", `
        <figure>
            <h2>${element.position}. ${element.name}</h2>
            <img src="${element.img}"/>
            <p>Возраст: ${element.age}</p>
        </figure>
        `)
})
