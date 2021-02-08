import React, { useState,useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  const [country,setcountry]=useState([]);

  useEffect(() => {
    const fetchApi = async () => {
        const url = `https://disease.sh/v3/covid-19/countries`;
        const response = await fetch(url)
        const resJson = await response.json();
        setcountry(resJson);
        console.log(resJson)
    }
    fetchApi();
}, [])
  return (
  <>
  <div>
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Country</th>
      <th scope="col">Active Case</th>
      <th scope="col">Deaths Case</th>
      <th scope="col">Recovered Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"> <ol>
     {country.map(item=>
     <li>{item.country }</li>
      )}
    </ol></th>
      <td> {country.map(item=>
     <li>{item.active }</li>
      )}</td>
      <td> {country.map(item=>
     <li>{item.deaths}</li>
      )}</td>
      <td>  {country.map(item=>
     <li>{item.recovered }</li>
      )}</td>
    </tr>
  </tbody>
</table>

   
  </div>

    </>
  );
}

export default App;

