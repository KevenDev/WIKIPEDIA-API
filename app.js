const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&formatversion=2&origin=*&srsearch=`;
const formDOM = document.querySelector('.form-control')
const inputDOM = document.querySelector('.form-input')
const resultsDOM = document.querySelector('.results')

formDOM.addEventListener('submit',(e) => {
  e.preventDefault()
  const value = inputDOM.value
  if(!value){
    console.log('inexistente');
    return
  }
  getApiData(value)
})


const getApiData = async (value) => {
  try { /*
    const res = await fetch(`${url}${value}`)
    const data = await res.json()
    const results = data.query.search
    console.log(results);
  */ 
    fetch(`${url}${value}`).then((res => res.json())).then((data) => {
      const results = data.query.search

      const list = document.querySelector('.results')
      results.map((item) => {
      const wikititle = document.createElement('h1')
      const wikiresult = document.createElement('p')
      const wikispan = document.createElement('a')
      wikiresult.setAttribute('id', item.id)
      wikititle.innerHTML = item.title;
      wikiresult.innerHTML = item.snippet;
      wikispan.innerHTML = item.pageid
      
      list.appendChild(wikititle)
      list.appendChild(wikiresult)
      list.appendChild(wikispan)
      })
      renderResults(results)
      
    }) } 
   catch(err){ 
    console.log(err);
  }
}

const renderResults = (callback) => {
  console.log(callback)
} 




