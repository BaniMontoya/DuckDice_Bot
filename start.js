// variables
contador_binario = 0;
tolerancia = 3;
niveles_apuesta = 0;
permitido = 0;
maximo = 7;
max = 15.33;
min = 5.13;
// funcion inica apuesta
function roll() {
	ultima_jugada = $('#game > div > div.game-process > div.game-circle-section > div > div:nth-child(10) > div').css("color") == "rgb(139, 187, 76)";
	if (ultima_jugada == true) {
	$('#game > div > div.game-controls > form > div.controls-form__row.row > div > div.grid__item.tutorial-step-bet-amount > div > div.secondary-buttons-wrapper > button:nth-child(1)').click();
	//$('#game > div > div.game-controls > form > div.controls-form__row.row > div > div.grid__item.tutorial-step-bet-amount > div > div.secondary-buttons-wrapper > button:nth-child(3)').click();
	contador_binario = 0;
	niveles_apuesta = 0;
	niveles_apuesta = 0;
	} else {
	$('#game > div > div.game-controls > form > div.controls-form__row.row > div > div.grid__item.tutorial-step-bet-amount > div > div.secondary-buttons-wrapper > button:nth-child(3)').click();
	contador_binario = contador_binario + 1;
	niveles_apuesta = niveles_apuesta + 1;
	}
	if (contador_binario == tolerancia) {
	$('#game > div > div.game-controls > form > div.controls-form__buttons > div.switch-game-btn').not(".on").click();
	contador_binario = 0;
	}
	$('#game-submit-button').click();
}
// ejecutar cada cierto tiempo
roll();

function doSomething() {
	if (permitido == 1 && niveles_apuesta < maximo) {
	roll();
	} else {
	console.log("no permitido roll");
	permitido = 0;
	}
}
(function loop() {
	var rand = Math.round(Math.random() * (3000 - 12000)) + 12000;
	setTimeout(function () {
	doSomething();
	loop();
	}, rand);
}());
