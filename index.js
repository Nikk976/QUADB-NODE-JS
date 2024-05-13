
let a = fetch('https://api.wazirx.com/api/v2/tickers');
a.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    return response.json();
}).then((response)=>{
    let data = response;
    console.log(data);
});

