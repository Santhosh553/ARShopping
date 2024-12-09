const containerC = document.querySelector(".model-container");

const chair = document.querySelector("#chair");

chair.addEventListener("click",()=>{
  
  containerC.innerHTML = "";

  const titles = ['ergonomic office chair','cushioned office chair','leather chair','gaming chair','leather chair2','leather stool'];
  
  const modelUrl = ['https://cdn.glitch.global/7ede3348-1731-4eff-be67-e4d544bd7626/office_chair.glb?v=1679465307574',
                   'https://cdn.glitch.global/7ede3348-1731-4eff-be67-e4d544bd7626/ofiice-chair-2.glb?v=1679471498876',
                  'https://cdn.glitch.me/20295d36-6cda-4038-995f-29efdfeded6a/leather_chair.glb?v=1732368506090',
                'https://cdn.glitch.me/20295d36-6cda-4038-995f-29efdfeded6a/gaming%20chair.glb?v=1732366262802',
              'https://cdn.glitch.global/20295d36-6cda-4038-995f-29efdfeded6a/leather_chair.glb?v=1732371032653',
            'https://cdn.glitch.global/20295d36-6cda-4038-995f-29efdfeded6a/leather_stool.glb?v=1732371264401'];
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