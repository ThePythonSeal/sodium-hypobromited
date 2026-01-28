(()=>{

  // inject UI
  document.body.insertAdjacentHTML("beforeend", `
    <div id="js-loader" style="font-family:sans-serif;padding:10px">
      <input type="file" id="file"><br><br>
      Select Script:
  <select id="preset">
    <option value="https://raw.githubusercontent.com/ThePythonSeal/sodium-hypobromited/refs/heads/main/versions/v1.0.0.txt">Sodium Hypobromited v1.0.0</option>
    <option value="custom">Custom URL…</option>
  </select>
      <input type="text" id="custom" placeholder="https://…" style="display:none">
      <button id="load">load</button>
    </div>
  `)

  const file   = document.getElementById("file")
  const preset = document.getElementById("preset")
  const custom = document.getElementById("custom")
  const load   = document.getElementById("load")

  function loadScript(src){
    const s=document.createElement("script")
    s.src=src
    document.body.appendChild(s)
  }

  file.onchange=()=>{
    const f=file.files[0]
    if(f) loadScript(URL.createObjectURL(f))
  }

  preset.onchange=()=>{
    custom.style.display = preset.value==="custom" ? "inline" : "none"
  }

  load.onclick=()=>{
    let src=preset.value
    if(src==="custom") src=custom.value
    if(src) loadScript(src)
  }

})()
