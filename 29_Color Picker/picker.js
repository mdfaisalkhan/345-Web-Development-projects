function generate(){
    let colorvalue = document.getElementById("color").value;
    document.getElementById("value").innerHTML = colorvalue;

}

  
  function copyColor() {
    const colorValue = document.getElementById("value").textContent;
    navigator.clipboard.writeText(colorValue).then(() => {
      const btn = document.getElementById("copyBtn");

    });
  }
  