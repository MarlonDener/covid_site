
     fetch("https://corona.Lmao.ninja/v2/countries/").then((response)=>{
        return response.json();
     }).then((data)=>{
         
        var select = document.querySelector('select')
        data.forEach(element=>{

           var option = document.createElement('option')
           option.text = element.country

           select.append(option);
        })

     })

     var get = 'brazil'

     function val(){

        get = document.querySelector("select").value;

     fetch("https://corona.Lmao.ninja/v2/countries/"+get).then((response)=>{
        return response.json();
     }).then((data)=>{
        console.log(data);
        document.getElementById("flag").src = data.countryInfo.flag
        document.getElementById("country").innerHTML = data.country.toLocaleString()
        document.getElementById("cases").innerHTML = data.cases.toLocaleString()
        document.getElementById("cases_por_milhao").innerHTML = data.casesPerOneMillion.toLocaleString()
        document.getElementById("death").innerHTML = data.deaths.toLocaleString()
        document.getElementById("recovered").innerHTML = data.recovered.toLocaleString()
        document.getElementById("active").innerHTML = data.active.toLocaleString()
        document.getElementById("population").innerHTML = data.population.toLocaleString();


         })
       
     }

     window.setTimeout(function(){
          fetch("https://corona.Lmao.ninja/v2/countries/"+get).then((response)=>{
        return response.json();
     }).then((data)=>{
        //console.log(data), para ver no console as informações que você pode obter
        document.getElementById("flag").src = data.countryInfo.flag
        document.getElementById("country").innerHTML = data.country.toLocaleString()
        document.getElementById("cases").innerHTML = data.cases.toLocaleString()
        document.getElementById("cases_por_milhao").innerHTML = data.casesPerOneMillion.toLocaleString()
        document.getElementById("death").innerHTML = data.deaths.toLocaleString()
        document.getElementById("recovered").innerHTML = data.recovered.toLocaleString()
        document.getElementById("active").innerHTML = data.active.toLocaleString()
        document.getElementById("population").innerHTML = data.population.toLocaleString();


         })
     })
   