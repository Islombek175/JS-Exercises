// 1.
// function yoshniAniqlash(yosh) {
// 	return yosh > 50 ? 'Siz kattasiz' : 'Siz yoshsiz'
// }
// console.log(yoshniAniqlash(51))

// 2.
// function narxniAniqlash(narx) {
// 	return narx > 3000 ? 'Qimmat' : 'Arzon'
// }
// console.log(narxniAniqlash(3000))

// 3, 4.
// function parolniTekshirish(parol) {
// 	return parol === 'sarimsoqpiyoz' ? 'Salom' : 'Xato!'
// }

// 5.
// function yoshniAniqlash2(yosh2) {
// 	return yosh2 >= 0 && yosh2 < 30
// 		? 'Siz yoshsiz'
// 		: yosh2 >= 30 && yosh2 < 60
// 		? 'Siz kattasiz'
// 		: yosh2 >= 60
// 		? 'Siz qarisiz'
// 		: 'Sizni yoshingiz 0 dan kichik'
// }
// console.log(yoshniAniqlash2(31))

// 6.
// function isminiSorash(ism) {
// 	return ism == 'Ali'
// 		? "Salom o'ga"
// 		: ism == 'Ahmad'
// 		? "Ko'rinmayapsan dostim, nima qilyapsan?"
// 		: 'Salom!'
// }
// console.log(isminiSorash('Ali'))

// 7.
// function soliqniAniqlash(oylik) {
// 	let tasdiqlash = confirm('Soliqni hisoblash kerakmi?')
// 	if (tasdiqlash == true) {
// 		return [((oylik * 12) - (oylik * 12 * 0.12)), "Yillik topadigan pulingiz(soliq bilan)"]
// 	} else if (tasdiqlash == false) {
// 		return [(oylik * 12), "Yillik topadigan pulingiz(soliqsiz)"]
// 	} else {
// 		return 'Notogri malumot!'
// 	}
// }
// console.log(soliqniAniqlash(+prompt('Oyligingizni kiriting:')))

// 8.
// function soliqniAniqlash(oylik) {
// 	let tasdiqlash = confirm('Soliqni hisoblash kerakmi?')
// 	if (tasdiqlash == true) {
// 		return [((oylik * 12) - (oylik * 12 * 0.12)) * 0.1, "Yillik yig'adigan pulingiz(soliq bilan)"]
// 	} else if (tasdiqlash == false) {
// 		return [(oylik * 12 * 0.1), "Yillik yigadigna pulingiz(soliqsiz)"]
// 	} else {
// 		return 'Notogri malumot!'
// 	}
// }
// console.log(soliqniAniqlash(+prompt('Oyligingizni kiriting:')))

// 9.
// function convert() {
// 	const kurs = 12900; 
// 	const miqdor = parseFloat(document.getElementById("miqdor").value);
// 	const ovqat = document.getElementById("ovqat").value;
// 	let natija = "";

// 	if(isNaN(miqdor) || miqdor <= 0) {
// 		natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 	} else if (ovqat === "usdToUzs") {
// 			natija = `${miqdor * kurs} So'm`;
// 	} else {
// 			natija = `${(miqdor / kurs).toFixed(2)} $`;
// 	}

// 	document.getElementById("natija").innerText = natija;
// }

// 10.
// function narxniAytish() {
// 	const ovqat = document.getElementById("ovqat").value;
// 	let natija = "";
// 	let somsaNarxi = 3000;
// 	let palovNarxi = 15000;
// 	let gummaNarxi = 2000;
// 	if(ovqat === "somsa") {
// 		natija = `${ovqat}ning narxi ${somsaNarxi} So'm`
// 	} else if(ovqat === "palov") {
// 		natija = `${ovqat}ning narxi ${palovNarxi} So'm`
// 	} else if(ovqat === "gumma") {
// 		natija =`${ovqat}ning narxi ${somsaNarxi} So'm`
// 	} else {
// 		natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 	}

// 	document.getElementById("natija").innerText = natija;
// }

// 11.