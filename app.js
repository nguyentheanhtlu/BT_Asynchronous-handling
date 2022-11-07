let money = 10000
const bycar = (car) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (money >= 10000){
                resolve('can buy ' + car)
            }else {
                reject('do not enough money');
            }
        },1000)
    })
}
money = 100;
const promise = bycar('BWM').then(value => {
    console.log(value);
},error => {
    console.log(error);
})

