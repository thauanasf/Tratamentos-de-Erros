
function valiArray(arr,num){
 try {
     
    if (!arr && !num) throw new ReferenceError ("Envie os parâmetros");
    
    if (typeof arr !=="object" ) throw new TypeError ("Array precisa ser do tipo object") 
    if (typeof num !=="number" ) throw new TypeError ("Array precisa ser do tipo number")
    if (arr.lenth  !== num) throw new RangeError ("Tamanho inv")

return arr;

 } catch (error) {
     if (e instanceof ReferenceError){ console.log("Esse erro é um referenceError")
console log(e.message)
    }   else if (e instanceof TypeError){ console.log("Esse erro é um TypeError")
console log(e.message)
    }   else if (e instanceof RangeError){ console.log("Esse erro é um RangError")
console log(e.message)
     } else{
         console.log("Tipo de erro não esperado:" + e);

     }


    }

}
console.log(valiArray());
