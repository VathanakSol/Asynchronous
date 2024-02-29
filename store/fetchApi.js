// my port is 5501 
const BASE_URL = "http://localhost:5501/data/";

export async function getData(endPoint){
    try{
        const res = await fetch(BASE_URL + endPoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json();
        return data;
    }catch (error){
        console.log(error);
    }
}