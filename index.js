
const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f0fe780272msh80c9ab3ed59d713p194047jsn91664ff22ddb',
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};

let div=document.createElement("div")

 
 async function execute(){
     try {
         const response = await fetch(url, options);
         const result = await response.json();
         console.log(result.data);
        //  const jokes = "b";
         for (let data in result){
         let res=result.data;
         for( let i=0; i<res.length;i++){
       if("?"== res[i]){
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        p1.innerText=res.slice(0,i+1);
        p2.innerText=res.slice(i+1,res.length);
        div.append(p1,p2)
       }
    }
         }

    
    document.body.appendChild(div)

} catch (error) {

	console.error(error);
}
 }

execute()