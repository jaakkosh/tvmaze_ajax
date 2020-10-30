'use strict';
const form = document.querySelector('#search-form');
const input = document.querySelector('[name=search-field]');
const output=document.querySelector('#div');
const doFetch = async (input) => {
    try {
    const response = await fetch('http://api.tvmaze.com/search/shows?q='+input.value);
    const data= await response.json();
    console.log('data:',data);  
        if (!response.ok) {
          throw new Error('something went wrong');
        }
        for(let i =0; i<=data.length; i++){
        output.innerHTML+= '<h3>'+data[i].show.name+'</h3>' 
        output.innerHTML+= '<a href="'+data[i].show.url+'">Homepage</a>'
        output.innerHTML+= '<img src="'+ data[i].show.image.medium+'"></img>'
        output.innerHTML+= '<p>'+data[i].show.summary+'</p>'
        }
    }
     catch (error) {
    console.log(error)
  }     
  
}



form.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    console.log('input value:',input.value)
    doFetch(input);
});

