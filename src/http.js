/**
*Easy Http  Library
*Library for making http requests
*
* @version 3.0.0
*@ Author Abhisek
**/



class EasyHTTP{
    //make http get requests
    async get(url){
    
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
        
    }
    // make http post requests
    async post(url,data){
        
        const response = await fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify(data)
        });
        const resData= await response.json();
        return resData;
        

    }

        // make a put requests

    async put(url,data){
                
            const response = await fetch(url,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
    
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
    
            
    
        }

    async delete(url){
           
            
            const response= await fetch(url,{
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                },
            }) 
            const resData = await 'deleted';
            return (resData===undefined);
            
        }
        
}

export const http = new EasyHTTP();