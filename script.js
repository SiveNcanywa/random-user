let products= new Promise((resolve,reject)=>{
    fetch("https://randomuser.me/api/?results=100")
    .then((res)=>res.json())
    .then((data)=>{
      resolve(data.results);
    })
    .catch((err)=>reject(err));
    
  });

  products.then((data)=>{
    showProducts(data);
  });
  
  function showProducts(data){
    document.querySelector("#products").innerHTML="";
    data.forEach((product)=>{
      document.querySelector("#products").innerHTML+=`
      <div class="card">
      <h3>${product.name.first}</h3>
        <h3>${product.dob.age}</h3>
      <img src="${product.picture.medium}">
      </div>
      `;
    });
  }
  function searchProducts(){
    products.then((data)=>{
      let searchTerm =document.querySelector("#search").value.toLowerCase();
      const foundProducts=data.filter((product)=>{
        return product.name.first.toLowerCase().includes(searchTerm);
      });
      showProducts(foundProducts);
    });
  }