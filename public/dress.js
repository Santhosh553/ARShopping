const containerS = document.querySelector(".model-container");

const sofa = document.querySelector("#dress");

sofa.addEventListener("click",()=>{
  
  containerS.innerHTML = "";

  const titles = ['Modern Dress','Traditional Dress','Party Dress']
  
  const modelUrl = ['https://cdn.glitch.global/20295d36-6cda-4038-995f-29efdfeded6a/3D%20Dress.glb?v=1732247312459'];
  for(let i = 0 ; i < modelUrl.length; i++){
    
  const card = document.createElement("div");
  card.classList.add("card");
  const model = document.createElement("model-viewer");
  model.setAttribute('src',modelUrl[i]);
  model.setAttribute('ar','ar');
  model.setAttribute('camera-controls','camera-controls');
  model.setAttribute('touch-action','pan-y');
  model.setAttribute('ar-modes','webxr');
  const title = document.createElement('div');
  title.className = 'card-body p-0 mt-2';
  const head = document.createElement('h5');
  head.className = 'card-title';
  head.innerText = titles[i];
  title.appendChild(head);

  card.appendChild(model);
  card.appendChild(title);
  containerS.appendChild(card);
  }
})