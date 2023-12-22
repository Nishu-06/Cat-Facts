let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;
    //img.setAttribute(src,link); for the dog image api
})
let url="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(e){
    console.log("error:",e);
    return "no fact found";
    }
}