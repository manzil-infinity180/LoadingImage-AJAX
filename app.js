const imageContainer = document.querySelector('.images');

     // LoadImage Function
const loadImage=function(imgPath){
     // Promise 
     return new Promise(function(resolve,reject){
          const img= document.createElement('img');
          img.src=imgPath;
     // Resolved 
          img.addEventListener('load',()=>{
               imageContainer.append(img);
               resolve(img);
          });
     //Rejected      
          img.addEventListener('error',()=>{
               // reject(new Error('Image Not Found!!!'));
               reject(err);
          });
     });
};

const wait = function(second){
     return new Promise(function(resolve){
       setTimeout(resolve,1000*second);
     });
   };

let currentImage;
loadImage('img/img-1.jpg').then(img=>{
     currentImage=img;
     console.log('Image 1 is sucessfully Loaded!');
     return wait(2);
}).then(()=>{
     currentImage.style.display='none';
     return loadImage('img/img-2.jpg');
}).then(img=>{
     currentImage=img;
     console.log('Image 2 is successfully Loaded!');
     return wait(2);
}).then(()=>{
     currentImage.style.display='none';
     return loadImage('img/img-3.jpg');
}).then(img=>{
     currentImage=img;
     console.log('Image 2 is successfully Loaded!');
     return wait(2);
}).then(()=>{
     currentImage.style.display='none';
}).catch((err)=>{
     console.log(err);
});




// It working but something is wrong i think so ....
// IIFE 
/*
let currentImage;
(async function(){
try{
   const res = await loadImage('img/img-1.jpg');
    currentImage = res;
   await wait(2);
   currentImage.style.display='none';
   const res2= await loadImage('img/img-2.jpg');
   currentImage = res2;
   const wait2 = await wait(2);
   currentImage.style.display='none';


}catch(err){
console.log(err);
}
} )();
*/