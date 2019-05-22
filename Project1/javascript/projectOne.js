  var rate
  var total = 0
  const finish = () => {
    total = 0
    if (!document.querySelector('input[name="house"]:checked'))     { alert("House Type must be selected"); return }
    if (!document.querySelector('input[name="color"]:checked'))     { alert("Color must be selected"); return }
    if (!document.querySelector('input[name="material"]:checked'))  { alert("Material must be selected"); return }
    if (!document.querySelector('input[name="squarefeet"]'))        { alert("Square feet must be entered."); return }
    if (!document.querySelector('input[name="garage"]:checked'))    { alert("Number of garages must be selected."); return }
    let house  = document.querySelector('input[name="house"]:checked').value
    let color  = document.querySelector('input[name="color"]:checked').value
    let material  = document.querySelector('input[name="material"]:checked').value
    let squarefeet  = document.querySelector('input[name="squarefeet"]').value
    let garage  = document.querySelector('input[name="garage"]:checked').value
    squarefeet = parseInt(squarefeet)
    if (isNaN(squarefeet)) { alert("Square feet must be a number."); return }
    house == 'big' ? rate = 135 : rate = 175
    if (material == 'vinyl') {  }
    if (material == 'wood') { total += 5000; rate += 10}
    if (material == 'brick') { total += 8000; rate += 10}
    if (material == 'stucco') { total += 6000}
    if (material == 'stone') { total += 16000;}
    total += 15000 * garage
    total += rate * squarefeet
    results(squarefeet, total);
  }
  const results = (squarefeet, total) => {
    $('input[name="house"]:not(:checked)').parent().hide();
    $('input[name="color"]:not(:checked)').parent().hide();
    $('input[name="material"]:not(:checked)').parent().hide();
    $('input[name="garage"]:not(:checked)').parent().hide();
    $('#checkprice').remove();
    document.getElementById('squarefeet').innerHTML = squarefeet;
    document.getElementById('estimate').innerHTML = "ESTIMATED COST: $" + total;
  }
