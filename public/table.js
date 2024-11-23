const containerT = document.querySelector(".model-container");

const table = document.querySelector("#table");

table.addEventListener("click",()=>{
  
  containerT.innerHTML = "";
  const titles = ['vintage study desk','dining table']
  const modelUrl = ['https://cdn.glitch.global/7ede3348-1731-4eff-be67-e4d544bd7626/table.glb?v=1679469070644',
                  'https://cdn.glitch.me/20295d36-6cda-4038-995f-29efdfeded6a/loft_dining_table.glb?v=1732369447106',
                'https://cdn.glitch.global/20295d36-6cda-4038-995f-29efdfeded6a/table.glb?v=1732369517496',
              'https://cdn.glitch.global/20295d36-6cda-4038-995f-29efdfeded6a/glass_table.glb?v=1732369888389'];
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