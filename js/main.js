if(navigator.serviceWorker){
    window.addEventListener('load',()=>{
        navigator.serviceWorker
        .register('../sw_cache.js')
        .then(reg => console.log(`Successfully registered`))
        .catch(err => console.log(`not reg. ${err}`));
    })
}