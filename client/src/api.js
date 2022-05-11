const url= "http://localhost:2000/api/v1";
async function getPosts() {
  const response = await fetch(`${url}/posts`);
 return await response.json();
}

export{
  getPosts
}