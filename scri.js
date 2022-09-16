var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value)=>foo(value));


function foo(value){
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`
        <div class="col-lg-4 col-sm-12">
        <div class="card border-success mb-3" style="max-width: 18rem bordercolor="black">
        <div class="card-header bg-transparent border-success">${value[i].name}</div>
        <div class="card-body text-success">
        <img src="${value[i].flag}" class="card-img" alt="..." height="100px" width="200px"><br>
        <p class="card-text">Capital : ${value[i].capital}</p>
        <p class="card-text">Region : ${value[i].region}</p>
        <p class="card-text">Country Code: ${value[i].cioc}</p>
        <button type="button" class="btn btn-primary">Click For Weather</button>`;
        
      document.body.append(container);
    }
}
