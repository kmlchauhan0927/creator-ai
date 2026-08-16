const pages=[...document.querySelectorAll('.page')];const titles={dashboard:'Your content, understood.',ideas:'Turn thoughts into content.',video:'Let Creator AI find the opportunities.',thumbnail:'Build thumbnails without repeated work.',content:'One analysis. A complete content package.',subtitles:'Turn speech into ready-to-use subtitles.'};function go(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===id));document.getElementById('title').textContent=titles[id]||'Creator AI'}document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>go(b.dataset.page));function ideas(){let x=document.getElementById('idea').value||'your uploaded content';ideaOut.textContent=`AI IDEAS\n\n1. The surprising truth about ${x}\n2. 5 mistakes creators make with ${x}\n3. I tested ${x} so you don't have to\n4. Beginner guide to ${x}\n5. What nobody tells you about ${x}\n\nFULL VERSION: transcript + audience + platform + creator style are used automatically.`}function script(){let x=document.getElementById('idea').value||'your content';ideaOut.textContent=`AI SCRIPT\n\nHOOK\n“Most people misunderstand ${x}. Here's what you need to know.”\n\nBODY\n• Context\n• Main point\n• Example\n• Takeaway\n\nCTA\n“Follow for the next part.”`}function thumb(){to.textContent=`SMART THUMBNAIL\n\nSource: ${tt.value||'uploaded video'}\nStyle: ${ts.value||'auto-detected'}\n\nFULL VERSION: rank frames by clarity, expression, topic relevance and composition, then generate/edit the strongest thumbnail.`}function content(){let x=ci.value||'uploaded content';co.textContent=`CONTENT PACKAGE\n\nTITLE\nThe important thing about ${x}\n\nCAPTION\n${x} — explained simply and practically.\n\nHASHTAGS\n#creator #contentcreator #youtube #shorts #reels #contentcreation\n\nFULL VERSION: platform-specific variants from the same video understanding.`}const file=document.getElementById('file');file.onchange=()=>{if(!file.files[0])return;status.textContent=file.files[0].name+' selected. Preparing smart suggestions…';setTimeout(()=>{status.textContent='Smart analysis ready — suggestions generated automatically.';results.classList.remove('hidden')},900)};

// ===== GEMINI AI CONNECTION =====
async function askCreatorAI(prompt) {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "AI request failed");
  }

  return data.text;
}
