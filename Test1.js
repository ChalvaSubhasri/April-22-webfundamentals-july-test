// fetch data from the given API and display it in a card. feel free to be creative with
// the design of the card. for Reference attaching an image. Initially it should show your data
// (name, email, city and website) and after clicking to button it will show the first data from
// the API. API - https://jsonplaceholder.typicode.com/users  (give the hosted URL )

const url = "https://jsonplaceholder.typicode.com/users";

let getApi=async(url)=> {
  let response = await fetch(url);
  let data = await response.json();
  apiData(data)
}
getApi(url);

let apiData=(data)=> {  
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
    let content = document.getElementById("content");
    content.innerHTML = `<p id="name">${data[0].name}</p>
                            <p id="email">${data[0].email}</p>
                            <p id="city">${data[0].address.city}</p>
                            <p id="website">${data[0].website}</p>
                            <hr>
                            <div id="btnDiv">
                                <button id=btn>FETCH DATA</button>  
                            </div>`;
    });
}





























// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   let content = document.getElementById("content");
//   content.innerHTML = `<p id="name">Arman Ali</p>
//                         <p id="email">armanenterprises420@gmail.com</p>
//                         <p id="city">Faridabad</p>
//                         <p id="website">www.geekster.com</p>
//                         <hr>
//                         <div id="btnDiv">
//                             <button id=btn>FETCH DATA</button>  
//                         </div>`;
// }); 