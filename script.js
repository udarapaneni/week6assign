function CtoF() {
  let C = Number(document.getElementById('cen').value);
  let F;
  F = C * 1.8 + 32;
  document.getElementById('far').innerHTML = F + '&#8457';
}

var dt = new Date();
document.getElementById('dt').innerHTML = dt;

function averageGrade() {
  let total = 0;
  cad = Number(document.getElementById('cad').value);
  win = Number(document.getElementById('win').value);
  mob = Number(document.getElementById('mob').value);
  mex = Number(document.getElementById('mex').value);
  sql = Number(document.getElementById('sql').value);
  total = Math.round((cad + win + mob + mex + sql) / 5);

  if (total >= 80) result = 'A';
  else if (total < 80 && total > 69) result = 'B';
  else if (total <= 69 && total > 59) result = 'C';
  else if (total <= 59 && total > 49) result = 'D';
  else if (total <= 49) result = 'F';
  document.getElementById('result').innerHTML = 'Your Grade is ' + result;
}
