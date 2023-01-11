"use strict";
// Вы готовите борщ и вам необходимо посчитать сколько килограмм картошки нужно купить.

// На 1 литр борща необходимо 4 картошки, средний вес одной картошки составляет 75 грамм.

// Сколько килограмм картошки необходимо купить для приготовления 48 литров борща ?

// Вес одной картошки (гр.) = 75
// Количество литров борща (л.) = 48

// Используйте информацию о весе для того чтобы посчитать стоимость картошки в магазине, если после просчета веса у вас получилось float число, то округлите его в большую сторону и приведите к целому числу.

// Цена 1кг картошки( грн )  = 13

// Вам необходимо написать функцию которая будет проводить расчеты стоимости покупки нужного количества картошки.

// 0.075*4 = 1

// цена = 0,075*4*13 

const priceForKilo=13;
const onePotatoWeight=0.075;
const litersOfBorsh=48;

let totalPrice=priceCount(priceForKilo,onePotatoWeight,litersOfBorsh);
console.log('Цена картошки на 48 литров борща =' + totalPrice +'грн.');

function priceCount(priceForKilo,onePotatoWeight,litersOfBorsh){
    const potatoForLiter=onePotatoWeight*4;
    let potatoTotalPrice=Math.ceil(potatoForLiter*litersOfBorsh)*priceForKilo;
    return potatoTotalPrice;
}
