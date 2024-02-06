
const fetchData = async () => {
   const userData = await fetch("https://jsonplaceholder.typicode.com/users");
   const user = await userData.json();

   let tbody = document.querySelector('tbody')

   // console.log(user.name)

   user.forEach(users => {
      tbody.innerHTML += `<tr>
        <td>${users.id}</td>
        <td>${users.name}</td>
        <td>${users.email}</td>
        <td>${users.address.city}</td>
    </tr>`


   });

   let table = document.querySelector('table')
   table.appendChild(tbody);
}

let button = document.querySelector('button');

button.addEventListener('click', fetchData);


