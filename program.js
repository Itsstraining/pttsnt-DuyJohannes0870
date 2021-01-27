function isPrimeNumber(n) {
    var flag = true;
    if (n < 2){
        flag = false;
    }
    else{
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    return flag;
}


function ketqua(input) {
  let danhsachketqua = [];
  let currentV = input;
  while (!isPrimeNumber(currentV)) {
    for (let i = 0; i < currentV; i++) {
      if (isPrimeNumber(i) && currentV % i == 0) {
        danhsachketqua.push(i);
        currentV = currentV / i;
        break;
      }
    }
  }
  danhsachketqua.push(currentV);
  return danhsachketqua;
}

function main(input) {
  let res = input.split(" ");
  let n = parseInt(res[0]);
  let kq = ketqua(n);
  let print=" ";
  for (let i = 0; i < kq.length; i++) {
    print=print+" "+kq[i];
  }
  console.log(print);
  
}
module.exports = main;