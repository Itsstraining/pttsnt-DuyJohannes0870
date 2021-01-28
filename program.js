function Ktsnt(n) {
  let flag = true;
  if (n < 2) {
    flag = false;
  }
  else {
    for (let i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}


function ketqua(n) {
  let danhsachketqua = [];
  let sohientai = n;
  while (!Ktsnt(sohientai)) {
    for (let i = 0; i < sohientai; i++) {
      if (Ktsnt(i) && sohientai % i == 0) {
        danhsachketqua.push(i);
        sohientai = sohientai / i;
        break;
      }
    }
  }

  danhsachketqua.push(sohientai);
  let print = "";
  for (let i = 0; i < danhsachketqua.length; i++) {
    if (i == 0) {
      print += danhsachketqua[i];
    } else {
      print += " " + danhsachketqua[i];
    }
  }
  return print;
}

function main(input) {
  let res = input.split(" ");
  let n = parseInt(res)
  if (n < 2) {
    console.log(n);
  } else {
    console.log(ketqua(n));
  }
}

module.exports = main;

