function isPrimeNumber(n) {
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
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
  for (let i = 0; i < kq.length; i++) {
    console.log(kq[i])
  }

}
module.exports = main;