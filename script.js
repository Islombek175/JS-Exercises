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
// 	const ovqat1 = document.getElementById("ovqat1").value;
// 	let natija = "";

// 	if(isNaN(miqdor) || miqdor <= 0) {
// 		natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 	} else if (ovqat1 === "usdToUzs") {
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
// 		natija = `${somsaNarxi} So'm`
// 	} else if(ovqat === "palov") {
// 		natija = `${palovNarxi} So'm`
// 	} else if(ovqat === "gumma") {
// 		natija =`${somsaNarxi} So'm`
// 	} else {
// 		natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 	}

// 	document.getElementById("natija").innerText = natija;
// }

// 11.
// function narxniAytish() {
// 		const ovqat1 = document.getElementById("ovqat1").value;
// 		const ovqat2 = document.getElementById("ovqat2").value;
// 		const ovqat3 = document.getElementById("ovqat3").value;
// 		let natija = 0;
// 		let somsaNarxi = 3000;
// 		let palovNarxi = 15000;
// 		let gummaNarxi = 2000;
// 		if(ovqat1 === "somsa") {
// 			natija += somsaNarxi
// 		} else if(ovqat1 === "palov") {
// 			natija += palovNarxi
// 		} else if(ovqat1 === "gumma") {
// 			natija += gummaNarxi
// 		} else {
// 			natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 		};
// 		if(ovqat2 === "somsa") {
// 			natija += somsaNarxi
// 		} else if(ovqat2 === "palov") {
// 			natija += palovNarxi
// 		} else if(ovqat2 === "gumma") {
// 			natija += gummaNarxi
// 		} else {
// 			natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 		};
// 		if(ovqat3 === "somsa") {
// 			natija += somsaNarxi
// 		} else if(ovqat3 === "palov") {
// 			natija += palovNarxi
// 		} else if(ovqat3 === "gumma") {
// 			natija += gummaNarxi
// 		} else {
// 			natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 		};
	
// 		document.getElementById("natija").innerText = `Jami ${natija} So'm`;
// 	}

// 12.
// function narxniAytish() {
// 			const ovqat1 = document.getElementById("ovqat1").value;
// 			const ovqat2 = document.getElementById("ovqat2").value;
// 			const ovqat3 = document.getElementById("ovqat3").value;
// 			let natija = 0;
// 			let somsaNarxi = 3000;
// 			let palovNarxi = 15000;
// 			let gummaNarxi = 2000;
// 			if(ovqat1 === "somsa") {
// 				natija += somsaNarxi
// 			} else if(ovqat1 === "palov") {
// 				natija += palovNarxi
// 			} else if(ovqat1 === "gumma") {
// 				natija += gummaNarxi
// 			} else {
// 				natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 			};
// 			if(ovqat2 === "somsa") {
// 				natija += somsaNarxi
// 			} else if(ovqat2 === "palov") {
// 				natija += palovNarxi
// 			} else if(ovqat2 === "gumma") {
// 				natija += gummaNarxi
// 			} else {
// 				natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 			};
// 			if(ovqat3 === "somsa") {
// 				natija += somsaNarxi
// 			} else if(ovqat3 === "palov") {
// 				natija += palovNarxi
// 			} else if(ovqat3 === "gumma") {
// 				natija += gummaNarxi
// 			} else {
// 				natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 			};
		
// 			document.getElementById("natija").innerText = `Jami ${natija + natija * 0.1} So'm`;
// 		}

// 13.
// function avtobusChaqirish() {
// 	const yozuv = document.getElementById("yozuv").value;
// 	const qoyliq = [7, 93];
// 	const chorsu = [3, 54, 12];
// 	const oloy = [434, 5545, 11111];
// 	let natija = "";

// 	if (yozuv === "qoyliq") {
// 		natija = qoyliq
// 	} else if (yozuv === "chorsu") {
// 		natija = chorsu
// 	} else if (yozuv === "oloy") {
// 		natija = oloy
// 	} else {
// 		natija = "Ilitimos, to'g'ri ma'lumot kiriting."
// 	}

// document.getElementById("natija").innerText = natija;
// }

// 14.
// function tekshirish() {
// 	const javob1 = document.getElementById("topishmoq1").value;
// 	const javob2 = document.getElementById("topishmoq2").value;
// 	const javob3 = document.getElementById("topishmoq3").value;
// 	const javob4 = document.getElementById("topishmoq4").value;
// 	const javob5 = document.getElementById("topishmoq5").value;
// 	let natija = 0;

// 	if (javob1 == "1") {
// 		natija += 0 
// 	} else if (javob1 == "2") {
// 		natija += 1
// 	} else {
// 		natija += 0
// 	}

// 	if (javob2 == "1") {
// 		natija += 1 
// 	} else if (javob2 == "2") {
// 		natija += 0
// 	} else {
// 		natija += 0
// 	}

// 	if (javob3 == "1") {
// 		natija += 0 
// 	} else if (javob3 == "2") {
// 		natija += 0
// 	} else {
// 		natija += 1
// 	}

// 	if (javob4 == "1") {
// 		natija += 0 
// 	} else if (javob4 == "2") {
// 		natija += 0
// 	} else {
// 		natija += 1
// 	}

// 	if (javob5 == "1") {
// 		natija += 0 
// 	} else if (javob5 == "2") {
// 		natija += 0
// 	} else {
// 		natija += 1
// 	}

// document.getElementById("natija").innerText = `5/${natija} ball`
// }

// 15.
// function sotibOlish() {
// 	const miqdor = (document.getElementById("miqdor").value);
// 	const mahsulot = document.getElementById("mahsulot").value;
// 	let natija = "";
	
// 	if (isNaN(miqdor) || miqdor <= 0) {
// 		natija = "Iltimos, to'g'ri ma'lumot kiriting."
// 	} else if (mahsulot == "somsa" && miqdor >= 3000) {
// 		natija = "Sotib oldingiz."
// 	} else if (mahsulot == "palov" && miqdor >= 15000) {
// 		natija = "Sotib oldingiz."
// 	} else if (mahsulot == "sarimsoq" && miqdor >= 12000) {
// 		natija = "Sotib oldingiz."
// 	} else {
// 		natija = "Uzr, pul yetmadi"
// 	}
// 	document.getElementById("natija").innerText = natija
// }

// 16.
// function sotibOlish() {
// 	const checkboxes = document.querySelectorAll("input[type = 'checkbox']:not(#qariya)");
// 	const qariya = document.getElementById("qariya").checked;
// 	const pul = parseFloat(document.getElementById("pul").value);
// 	let jami = 0;
// 	let tanlangan = 0;
// 	let natija = 0;

// 	checkboxes.forEach(chk =>{
// 		if (chk.checked) {
// 			tanlangan ++;
// 			jami += parseFloat(chk.value);
// 		}
// 	});

// 	if (qariya) {
// 		jami = jami * 0.9;
// 	}

// 	if (tanlangan >= 5) {
// 		jami = jami * 0.85
// 	}

// 	jami = Math.round(jami)

// 	if (pul >= jami) {
// 		natija = `Siz sotib oldingiz. Jami ${jami} So'm bo'ldi. Qolgan pul ${pul - jami} So'm.`
// 	} else {
// 		natija = `Afsuzki, pul yetarli emas. Sizga ${jami - pul} So'm yetmadi.`
// 	}


// 	document.getElementById("natija").innerText = natija
// }

// 17.
