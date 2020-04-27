//Variables

var Tokens = 0;
var Level = 1;
var tps = 0;
var exp = 0;
var maxexp = 10;
var tpsp = 15;
var epc = 1;
var tpc = 1;
var tpcp = 10;
var tpsl = 0;
var tpcl = 0;
var PTokens = 0;
var PLevel = 1;
var Pexp = 0;
var Ptps = 0;
var Ptpc = 1;
var PUpgrades = 0;
var TTokens = 0;
var TLevel = 1;
var Texp = 0;
var Ttps = 0;
var Ttpc = 1;
var Tepc = 1;
var TUpgrades = 0;
var multi = 1;
var epcp = 25;
var epcl = 0;
var textBox = ['', '', '', '', '', '', '', '', '', '', '']
var LevelP = 25;
var Save = 0;
var prestige = 0;


//Functions

//JQ Function
$(function (){
    extraStatusSet('Thank you for playing Token Clicker!')
    extraStatusSet('To Join the discord please click this link: https://discord.gg/3DNZWkW')
	$("#Clicker").click(function () {
		Tokens += tpc;
		exp += epc;
		TTokens += 1;
		Texp += 1;
		Pexp += 1;
		level();
	});
  $('button').hover(function(e) {
    var sWidth = window.innerWidth;
    var sHeight = window.innerHeight;
    var oWidth = $('.popupLayer').width();
    var oHeight = $('.popupLayer').height();
    divLeft = e.clientX + 10;
    divTop = e.clientY -50;
    $('#popUp').show();
    setPopup('something');
  }, function(){
    $('#popUp').hide();
  });
	$("#upgradeTps").click(function () {
		upgradeTps();
	});
	$("#upgradeTpc").click(function () {
		upgradeTpc();
	});
	$("#reset").click(function () {
		reset();
	});
	$("#load").click(function () {
		load();
	});
	$("#upgradeEpc").click(function () {
   		upgradeEpc();
    });
    $("#prestige").click(function () {
        Prestige();
    });
    function setPopup(msg) {
        setTimeout(function() {
        scrollPosition = window.scrollY || document.documentElement.scrollTop;
        $('#popUp').html(function (index,html) {
        return msg;
        });
        $('#popUp').css({
            "top": divTop-30+scrollPosition,
            "left": divLeft,
            "position": "absolute"
            });
        }, 0);
    }
    function extraStatusSet(msg) {
      for (i = 8; i >= 0; i--) {
          textBox[i+1] = textBox[i]
        }
        textBox[0] = msg;
        textBoxStr = '';
        for (i = 0; i <= 9; i++) {
          textBoxStr = textBoxStr + textBox[i] + '<br>';
        }
       $('#extraStatus').html(function (index,html) {
          return textBoxStr;
        });
      }
	setInterval( function () {
		Tokens += tps
		$('#tps').html(function (index,html) {
			return 'Tokens per second: ' + notation(tps);
		});
		$("#mainNav > span").click(function () {
			$("#menusWarp > div").hide();
			$("#menusWarp > div:eq(" + $("#mainNav > span").index(this) + ")").show();
		});
	}, 1000);
	setInterval( function () {
		$('#Tokens').html(function (index,html) {
			return 'Tokens: ' + notation(Tokens);
		});
		$('#exp').html(function (index,html) {
			return 'Exp: ' + notation(exp) + '/' + notation(maxexp);
		});
		$('#Level').html(function (index,html) {
			return 'Level: ' + notation(Level);
		});
		$('#maxexp').html(function (index,html) {
			return 'Exp: ' + notation(exp) + '/' + notation(maxexp);
		});
		$('#tpsp').html(function (index,html) {
			return 'Price: ' + notation(tpsp);
		});
		$('#tpc').html(function (index,html) {
			return 'Tokens per click: ' + notation(tpc);
		});
		$('#tpcp').html(function (index,html) {
			return 'Price: ' + notation(tpcp);
		});
		$("#progressbar").attr({
			'value' : exp / maxexp
		})
		$('#tpsl').html(function (index,html) {
			return 'Level: ' + notation(tpsl);
		});
		$('#tpcl').html(function (index,html) {
			return 'Level: ' + notation(tpcl);
		});
		$('#TTokens').html(function (index,html) {
			return 'Total Tokens: ' + notation(TTokens);
		});
		$('#TLevel').html(function (index,html) {
			return 'Total Levels: ' + notation(TLevel);
		});
		$('#Texp').html(function (index,html) {
			return 'Total Experience: ' + notation(Texp);
		});
		$('#Ttps').html(function (index,html) {
			return 'Total TPS: ' + notation(Ttps);
		});
		$('#Ttpc').html(function (index,html) {
			return 'Total TPC: ' + notation(Ttpc);
		});
		$('#TUpgrades').html(function (index,html) {
			return 'Total Upgrades: ' + notation(TUpgrades);
		});
		$('#PTokens').html(function (index,html) {
			return 'Tokens: ' + notation(PTokens);
		});
		$('#PLevel').html(function (index,html) {
			return 'Levels: ' + notation(PLevel);
		});
		$('#Pexp').html(function (index,html) {
			return 'Experience: ' + notation(Pexp);
		});
		$('#Ptps').html(function (index,html) {
			return 'TPS: ' + notation(Ptps);
		});
		$('#Ptpc').html(function (index,html) {
			return 'TPC: ' + notation(Ptpc);
		});
		$('#PUpgrades').html(function (index,html) {
			return 'Upgrades: ' + notation(PUpgrades);
		});
        $('#epcl').html(function (index,html) {
			return 'Level: ' + notation(epcl);
		});
        $('#epcp').html(function (index,html) {
			return 'Price: ' + notation(epcp);
		});
		$('#LevelP').html(function (index,html) {
        	return 'Needed Levels to Prestige: ' + notation(LevelP);
        });
	}, 10);
    setInterval( function () {
        save();
        extraStatusSet('Game Saved!');
    }, 30000);
    setInterval( function () {
        save();
    });
    setInterval( function () {
        extraStatusSet('Thank you for playing Token Clicker!')
        extraStatusSet('To Join the discord please click this link: https://discord.gg/3DNZWkW')
         }, 240000);
	$("#menusWarp > div").hide();
	$("#menusWarp > div:eq(0)").show();
	load();
	extraStatusSet('Last save Loaded.')
});


//Shop Function

function upgradeTps() {
    if (Tokens >= tpsp) {
        tps += 1;
        Tokens -= tpsp;
        tpsl += 1;
        Ttps += 1;
        Ptps += 1;
        tpsp = tpsp*1.3
    } else {
        alert("You don't have enough tokens");
    }
}

function upgradeTpc() {
    if (Tokens >= tpcp) {
        tpc += 1;
        Tokens -= tpcp;
        tpcl += 1;
        Ttps += 1;
        Ttps += 1;
        tpcp = tpcp*1.3
    } else {
        alert("You don't have enough tokens");
    }
}

function upgradeEpc() {
    if (Tokens >= epcp) {
        epc += 2;
        Tokens -= epcp;
        epcl += 1;
        epcp = epcp*2
    } else {
        alert("You don't have enough tokens");
    }
}


//Level Function

function level() {
	if (exp >= maxexp) {
		tpc += 5;
		Level += 1;
		TLevel += 1;
		PLevel += 1;
		exp -= maxexp;
		epc = epc*1.1
		maxexp = maxexp*1.5;
	}
}

//notation function

function notation(num) {
    if (num < 1e21) {
            return Math.floor(num);
    } else {
            return Number(num).toExponential(2);
    }
}

//Settings

function reset() {
	if (confirm("Are you sure you would like to reset? This will reset all of your progress and you will not be able to get any of it back.")) {
		Tokens = 0;
		Level = 1;
		tps = 0;
		exp = 0;
		maxexp = 10;
		tpsp = 15;
		epc = 1;
		tpc = 1;
		tpcp = 10;
		tpsl = 0;
		tpcl = 0;
		TTokens = 0;
		TLevel = 1;
		Texp = 0;
		Ttps = 0;
		Ttpc = 1;
		TUpgrades = 0;
		PTokens = 0;
		PLevel = 1;
		Pexp = 0;
		Ptps = 0;
		Ptpc = 1;
		PUpgrades = 0;
		multi = 1;
		epcp = 25;
		epcl = 0;
	} else {
		txt = "You will not be reset"
	}
}

//Save/load

function save() {
	localStorage.setItem('Tokens', JSON.stringify(Tokens));
	localStorage.setItem('Level', JSON.stringify(Level));
	localStorage.setItem('exp', JSON.stringify(exp));
	localStorage.setItem('maxexp', JSON.stringify(maxexp));
	localStorage.setItem('tps', JSON.stringify(tps));
	localStorage.setItem('tpsp', JSON.stringify(tpsp));
	localStorage.setItem('epc', JSON.stringify(epc));
	localStorage.setItem('tpc', JSON.stringify(tpc));
	localStorage.setItem('tpcp', JSON.stringify(tpcp));
	localStorage.setItem('tpsl', JSON.stringify(tpsl));
	localStorage.setItem('tpcl', JSON.stringify(tpcl));
	localStorage.setItem('TTokens', JSON.stringify(TTokens));
	localStorage.setItem('TLevel', JSON.stringify(TLevel));
	localStorage.setItem('Texp', JSON.stringify(Texp));
	localStorage.setItem('Ttps', JSON.stringify(Ttps));
	localStorage.setItem('Tepc', JSON.stringify(Tepc));
	localStorage.setItem('Ttpc', JSON.stringify(Ttpc));
	localStorage.setItem('TUpgrades', JSON.stringify(TUpgrades));
	localStorage.setItem('TTokens', JSON.stringify(PTokens));
	localStorage.setItem('TLevel', JSON.stringify(PLevel));
	localStorage.setItem('Texp', JSON.stringify(Pexp));
	localStorage.setItem('Ttps', JSON.stringify(Ptps));
	localStorage.setItem('Ttpc', JSON.stringify(Ptpc));
	localStorage.setItem('PUpgrades', JSON.stringify(PUpgrades));
    localStorage.setItem('epcl', JSON.stringify(epcl));
    localStorage.setItem('epcp', JSON.stringify(epcp));
    localStorage.setItem('prestige', JSON.stringify(prestige));
}

function load() {
		Tokens = JSON.parse(localStorage.getItem('Tokens'))
		Level = JSON.parse(localStorage.getItem('Level'))
		exp = JSON.parse(localStorage.getItem('exp'))
		maxexp = JSON.parse(localStorage.getItem('maxexp'))
		tps = JSON.parse(localStorage.getItem('tps'))
		tpsp = JSON.parse(localStorage.getItem('tpsp'))
		tpcp = JSON.parse(localStorage.getItem('tpcp'))
		epc = JSON.parse(localStorage.getItem('epc'))
		tpc = JSON.parse(localStorage.getItem('tpc'))
		tpsl = JSON.parse(localStorage.getItem('tpsl'))
		tpcl = JSON.parse(localStorage.getItem('tpcl'))
		TTokens = JSON.parse(localStorage.getItem('TTokens'))
		TLevel = JSON.parse(localStorage.getItem('TLevel'))
		Texp = JSON.parse(localStorage.getItem('Texp'))
		Ttps = JSON.parse(localStorage.getItem('Ttps'))
		Ttpc = JSON.parse(localStorage.getItem('Ttpc'))
		TUpgrades = JSON.parse(localStorage.getItem('TUpgrades'))
		PTokens = JSON.parse(localStorage.getItem('PTokens'))
		PLevel = JSON.parse(localStorage.getItem('PLevel'))
		Pexp = JSON.parse(localStorage.getItem('Pexp'))
		Ptps = JSON.parse(localStorage.getItem('Ptps'))
		Ptpc = JSON.parse(localStorage.getItem('Ptpc'))
		PUpgrades = JSON.parse(localStorage.getItem('PUpgrades'))
		multi = JSON.parse(localStorage.getItem('multi'))
		epcp = JSON.parse(localStorage.getItem('epcp'))
        epcl = JSON.parse(localStorage.getItem('epcl'))
        prestige = JSON.parse(localStorage.getItem('prestige'))
}

//Prestige Function

function Prestige() {
	if (Level >= LevelP) {
		Tokens = 0;
		Level = 1;
		tps = 0;
		exp = 0;
		maxexp = 10;
		tpsp = 15;
		epc = 1;
		tpc = 1;
		tpcp = 10;
		tpsl = 0;
		tpcl = 0;
		PTokens = 0;
		PLevel = 1;
		Pexp = 0;
		Ptps = 0;
		Ptpc = 1;
		PUpgrades = 0;
		prestige += 1;
		multi = multi*2
	}
}

function multiplier() {
	if (prestige >= 1) {
		tps = tps*2
		exp = exp*0.3
		ecp = ecp*2
	}
}






