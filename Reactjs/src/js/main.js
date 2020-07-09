var myarray = [];
var matchIdarray = [];
var manualarray = [];
var MarketIDArr = [];
var MatchIDArr = [];
var currentBet = '';
var currentBetMarketId = '';
var fancyMatchArr = [];
var fancyIDJoin = []; //LM 
var fancyIDJoinM = []; /// fancy manual array
var fancyIDArr = []; //LM 
var lastfetchtime = '';
var socket = {};
var resultdata = '';
var CRYPTPASS = $('input[data-name=testData]').attr('data-val');
var gameType = 'market';

if (screen.width > 767) { 
  var device = 'D';
} else {
  var device = 'M';
}

function websocket() {
  socket = io.connect(socketurl, {
    transports: ['websocket'],
    forceNew: true
  });
  socket.on('connect', function () {
    console.log("connected");

    if (gameType == 'market') {
      socket.emit('joinRoom', 'setting');
      $.each(myarray, function (key, MarketId) {
        socket.emit('joinRoom', MarketId);
      });
      $.each(matchIdarray, function (key, matchId) {
        socket.emit('joinRoom', matchId);
        socket.emit('joinRoom', matchId + '-' + userId1);
      });
      $.each(fancyIDJoin, function (key, MarketId) {
        socket.emit('joinRoom', MarketId);
      });
    } else {
      socket.emit('joinRoom', gameType);
      if (gameType == 'teenpatti2020') socket.emit('joinRoom', "1001");else if (gameType == 'teenpattioneday') socket.emit('joinRoom', "1000");
    }
  });
  socket.on('score', function (data) {
    GetScoreApi(data.score);
  });
  socket.on('commentary', function (data) {});
  socket.on('teenpatti', function (data) {
    if (data.MarketId) {
      if (myarray.length == 0 || myarray[0] != data.MarketId) {
        myarray = [];
        matchIdarray = [];
        myarray.push(data.MarketId.toString());
        matchIdarray.push(data.matchId.toString());
        currentBet = data.matchId;
        currentBetMarketId = data.MarketId;
        $(".player-cardbox ul li").html("<img src='" + site_url + "assets/images/cards/1.png" + "'>"); //console.log('teen',data.matchId, data.MarketId)

        marketPosition(data.matchId, data.MarketId);
      } else if (data.type == 'oneday') {
        $.each(data.odds, function (key, runData) {
          if (runData.C1 != 1) $(".carddiv_1_" + key).html("<img src='" + site_url + "assets/images/cards/" + runData.C1 + ".png" + "'>");
          if (runData.C2 != 1) $(".carddiv_2_" + key).html("<img src='" + site_url + "assets/images/cards/" + runData.C2 + ".png" + "'>");
          if (runData.C3 != 1) $(".carddiv_3_" + key).html("<img src='" + site_url + "assets/images/cards/" + runData.C3 + ".png" + "'>");

          if (key == 0) {
            $(".timer_game").text("Left Time:" + runData.lasttime);
            $(".round_no").text("Round ID: " + runData.marketId.split(".")[1]);
          }

          $("#" + key + "onedayb1").text(runData.b1);
          $("#" + key + "onedayl1").text(runData.l1);

          if (runData.gstatus == 'ACTIVE') {
            $(".teenpattirow" + key).removeClass("suspended-msg").html('');
          } else {
            $(".teenpattirow" + key).addClass("suspended-msg").html(runData.gstatus);
          }
        });
      } else if (data.type == 'twenty') {
        if (data.odds.t1[0].C1 != 1) $(".carddiv_1").html("<img src='" + site_url + "assets/images/cards/" + data.odds.t1[0].C1 + ".png" + "'>");
        if (data.odds.t1[0].C2 != 1) $(".carddiv_2").html("<img src='" + site_url + "assets/images/cards/" + data.odds.t1[0].C2 + ".png" + "'>");
        if (data.odds.t1[0].C3 != 1) $(".carddiv_3").html("<img src='" + site_url + "assets/images/cards/" + data.odds.t1[0].C3 + ".png" + "'>");
        if (data.odds.t1[0].C4 != 1) $(".carddiv_4").html("<img src='" + site_url + "assets/images/cards/" + data.odds.t1[0].C4 + ".png" + "'>");
        if (data.odds.t1[0].C5 != 1) $(".carddiv_5").html("<img src='" + site_url + "assets/images/cards/" + data.odds.t1[0].C5 + ".png" + "'>");
        if (data.odds.t1[0].C6 != 1) $(".carddiv_6").html("<img src='" + site_url + "assets/images/cards/" + data.odds.t1[0].C6 + ".png" + "'>");
        $(".timer_game").text("Left Time:" + data.odds.t1[0].autotime);
        $(".round_no").text("Round ID: " + (data.odds.t1[0].mid == 0 ? 0 : data.odds.t1[0].mid.split(".")[1]));
        $("#twentyb1").text(data.odds.t2[0].rate);
        $("#twentyb2").text(data.odds.t2[2].rate);

        if (data.odds.t2[0].gstatus == 1) {
          $(".teenpattirow").removeClass("suspended-msg").html('');
        } else {
          $(".teenpattirow").addClass("suspended-msg").html('SUSPENDED');
        }
      }
    } else {
      $(".timer_game").text("Left Time:0");
      $(".round_no").text("Round ID :0");
    }

    if (data.lastResult && ($(".result_content").is(':empty') || data.newMarket == 3)) {
      updateResult(data.lastResult);
    }
  });
  socket.on('match', function (data) {
    if ('sett' in data && data.sett.id in MatchIDArr) {
      if (data.sett.action == 'volumeLimit') {
        MatchIDArr[data.sett.id].volumeLimit = data.sett.value;
      } else if (data.sett.action == 'goinginplay_bet') {
        MatchIDArr[data.sett.id].goinginplay_bet = data.sett.value;

        if (data.sett.value == 'N') {
          $("#matchTable" + data.sett.id + " tbody").removeClass("betting-disabled");
        }
      } else if (data.sett.action == 'is_show' && data.sett.value == 'Y') {
        $(".onverlay" + data.sett.id).remove();
      } else if (data.sett.action == 'is_show' && data.sett.value == 'N') {
        $("<div class='overlay-table onverlay" + data.sett.id + "'><span>Betting not open.</span></div>").insertBefore("#matchTable" + data.sett.id);
      }
    } else if ('sett' in data && data.sett.id == 0 && data.sett.value == 'Y') {
      matchIdarray.forEach(function (val, key) {
        $(".onverlay" + val).remove();
      });
    } else if ('sett' in data && data.sett.id == 0 && data.sett.value == 'N') {
      matchIdarray.forEach(function (val, key) {
        $("<div class='overlay-table onverlay" + val + "'><span>Betting not open.</span></div>").insertBefore("#matchTable" + val);
      });
    } else if ('fancy' in data) {
      updateFancy(data.fancy,data.Id);
    } else if ('fancy_a' in data) {
      if (stype == 0 || data.fancy_a.fancy_type == 'LM' && stype == 2 || data.fancy_a.fancy_type != 'LM' && stype == 1) {
        appendFancy(data.fancy_a);
      }
    } else if ('fancy_r' in data) {
      $(".fancy_" + data.fancy_r).remove();
    } else if ('btype' in data  && data.btype =='match' && userType1 < 4) {
		if(lastfetchtime ==''){
			lastfetchtime = new Date();
			marketPosition(data.MatchId, data.MarketId);				
		}else{
			var endDate   = new Date();
			var seconds = (endDate.getTime() - lastfetchtime.getTime()) / 1000;
			//console.log(seconds);
			if(seconds >= 3){
				lastfetchtime= new Date();
				marketPosition(data.MatchId, data.MarketId);
			}
		}
     // marketPosition(data.MatchId, data.MarketId);
    } else if ('ctype' in data) {
      closemarket(data);
    }
  });
  socket.on('market', function (data) {
    runner = data.odds;
    updateOdds(runner);
  });

  socket.onerror = function (ev) {
    console.log('error' + ev);
  };

  socket.onclose = function (ev) {
    console.log('close' + ev);
  };
}

function updateOdds(runner) {
  console.log('websocket function 222');
  var MarketID = runner.marketId;
  if (runner.numberOfRunners == 1) {
    var fancyd = fancyIDArr[MarketID];
    var mult_value = fancyd.volumnLimit;

    if (runner.status == 'OPEN') {
      if (runner.runners[0].ex.availableToBack && runner.runners[0].ex.availableToLay && runner.runners[0].ex.availableToBack.length > 0 && runner.runners[0].ex.availableToBack[0].price > 0) {
        $(".show_msg_box_" + fancyd.ID).removeClass("ball-msg-box");
        $(".show_msg_box_" + fancyd.ID).html(' ');
        var backprice = Math.round(parseFloat(runner.runners[0].ex.availableToBack[0].price));
        var layprice = Math.round(parseFloat(runner.runners[0].ex.availableToLay[0].price));
        var backsize = Math.round(parseInt(runner.runners[0].ex.availableToBack[0].size) * mult_value);
        var laysize = Math.round(parseInt(runner.runners[0].ex.availableToLay[0].size) * mult_value);
        $("#LayNO_" + fancyd.ID).text(backprice);
        $("#BackYes_" + fancyd.ID).text(layprice);
        $("#NoValume_" + fancyd.ID).text(backsize);
        $("#YesValume_" + fancyd.ID).text(laysize);
      } else {
        $(".show_msg_box_" + fancyd.ID).addClass("ball-msg-box");
        $(".show_msg_box_" + fancyd.ID).html('<h1>Ball Started</h1>');
      }
    } else {}
  } else {
    var MatchId = MarketIDArr[MarketID];
    var volumnLimit = MatchIDArr[MatchId].volumeLimit;
    var MId = MarketID.replace('.', '');
    $(".matchOpenBox_" + MId + " .table td").removeClass('yello');

    if (runner.status == 'OPEN' || runner.status == 'SUSPENDED') {
      var key1 = 0;
	  if(runner.inplay ==true && !MatchIDArr[MatchId].inply){
		  MatchIDArr[MatchId].inply = true;
		  $(".matchTable" + MId + " tbody").removeClass("betting-disabled");
		 
	  }
      $.each(runner.runners, function (key11, runData) {
        if (runData.ex.availableToBack[0]) {
          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToBack0_price_" + MId).text()) != runData.ex.availableToBack[0].price) {
            $("." + runData.selectionId + "_" + key1 + "availableToBack0_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToBack0_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToBack0_price_" + MId).text(runData.ex.availableToBack[0].price);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToBack0_price_" + MId).text('');
        }

        if (runData.ex.availableToBack[1]) {
          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToBack1_price_" + MId).text()) != runData.ex.availableToBack[1].price) {
            $("." + runData.selectionId + "_" + key1 + "availableToBack1_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToBack1_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToBack1_price_" + MId).text(runData.ex.availableToBack[1].price, 2);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToBack1_price_" + MId).text('');
        }

        if (runData.ex.availableToBack[2]) {
          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToBack2_price_" + MId).text()) != runData.ex.availableToBack[2].price) {
            $("." + runData.selectionId + "_" + key1 + "availableToBack2_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToBack2_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToBack2_price_" + MId).text(runData.ex.availableToBack[2].price);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToBack2_price_" + MId).text('');
        }

        if (runData.ex.availableToLay[0]) {
          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToLay0_price_" + MId).text()) != runData.ex.availableToLay[0].price) {
            $("." + runData.selectionId + "_" + key1 + "availableToLay0_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToLay0_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToLay0_price_" + MId).text(runData.ex.availableToLay[0].price);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToLay0_price_" + MId).text('');
        }

        if (runData.ex.availableToLay[1]) {
          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToLay1_price_" + MId).text()) != Math.round(runData.ex.availableToLay[1].price, 2)) {
            $("." + runData.selectionId + "_" + key1 + "availableToLay1_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToLay1_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToLay1_price_" + MId).text(runData.ex.availableToLay[1].price, 2);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToLay1_price_" + MId).text('');
        }

        if (runData.ex.availableToLay[2]) {
          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToLay2_price_" + MId).text()) != runData.ex.availableToLay[2].price) {
            $("." + runData.selectionId + "_" + key1 + "availableToLay2_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToLay2_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToLay2_price_" + MId).text(runData.ex.availableToLay[2].price);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToLay2_price_" + MId).text('');
        }

        if (runData.ex.availableToBack[0]) {
          v = getoddVolumn(runData.ex.availableToBack[0].size, volumnLimit);

          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToBack0_size_" + MId).text()) != v) {
            $("." + runData.selectionId + "_" + key1 + "availableToBack0_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToBack0_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToBack0_size_" + MId).text(v);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToBack0_size_" + MId).text('');
        }

        if (runData.ex.availableToBack[1]) {
          v = getoddVolumn(runData.ex.availableToBack[1].size, volumnLimit);

          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToBack1_size_" + MId).text()) != v) {
            $("." + runData.selectionId + "_" + key1 + "availableToBack1_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToBack1_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToBack1_size_" + MId).text(v);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToBack1_size_" + MId).text('');
        }

        if (runData.ex.availableToBack[2]) { 
          v = getoddVolumn(runData.ex.availableToBack[2].size, volumnLimit);

          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToBack2_size_" + MId).text()) != v) {
            $("." + runData.selectionId + "_" + key1 + "availableToBack2_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToBack2_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToBack2_size_" + MId).text(v);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToBack2_size_" + MId).text('');
        }

        if (runData.ex.availableToLay[0]) {
          v = getoddVolumn(runData.ex.availableToLay[0].size, volumnLimit);

          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToLay0_size_" + MId).text()) != v) {
            $("." + runData.selectionId + "_" + key1 + "availableToLay0_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToLay0_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToLay0_size_" + MId).text(v);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToLay0_size_" + MId).text('');
        }

        if (runData.ex.availableToLay[1]) {
          v = getoddVolumn(runData.ex.availableToLay[1].size, volumnLimit);

          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToLay1_size_" + MId).text()) != v) {
            $("." + runData.selectionId + "_" + key1 + "availableToLay1_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToLay1_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToLay1_size_" + MId).text(v);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToLay1_size_" + MId).text('');
        }

        if (runData.ex.availableToLay[2]) {
          v = getoddVolumn(runData.ex.availableToLay[2].size, volumnLimit);

          if ($.trim($("#" + runData.selectionId + "_" + key1 + "availableToLay2_size_" + MId).text()) != v) {
            $("." + runData.selectionId + "_" + key1 + "availableToLay2_price_" + MId).addClass("yello");
          } else {
            $("." + runData.selectionId + "_" + key1 + "availableToLay2_price_" + MId).removeClass("yello");
          }

          $("#" + runData.selectionId + "_" + key1 + "availableToLay2_size_" + MId).text(v);
        } else {
          $("#" + runData.selectionId + "_" + key1 + "availableToLay2_size_" + MId).text('');
        }

        if ((runData.status == 'SUSPENDED' || runner.status == 'SUSPENDED') && !$(".matchTable" + MId + " .runner-row-" + runData.selectionId).hasClass("ball_running-message")) {
          $(".matchTable" + MId + " .runner-row-" + runData.selectionId).addClass("ball_running-message");
          $(".matchTable" + MId + " .runner-row-" + runData.selectionId + " td:nth-child(4)").append('<h6>' + (runner.status == 'SUSPENDED' ? runner.status : runData.status) + '</h6>');
        } else if (runData.status == 'ACTIVE' && runner.status == 'OPEN' && $(".matchTable" + MId + " .runner-row-" + runData.selectionId).hasClass("ball_running-message")) {
          $(".matchTable" + MId + " .runner-row-" + runData.selectionId).removeClass("ball_running-message");
          $(".matchTable" + MId + " .runner-row-" + runData.selectionId + " h6").remove('');
        }
      });
    } else {
      $(".matchClosedBox_" + MId).show();
      $(".matchOpenBox_" + MId).hide();
    }
  }
}

function setFormData(formdata){
  var crypt = CryptoJS.AES.encrypt(JSON.stringify(formdata), CRYPTPASS, {
      format: CryptoJSAesJson
  }).toString();
  //return {_key: formdata,compute: Cookies.get('_compute')};
  return {_key: crypt,compute: Cookies.get('_compute')};
}

function updateResult(data) {
  if (data) {
    data = JSON.parse(JSON.stringify(data));
    resultdata = data; //console.log(resultdata)

    var html = '<ul>';
    data.forEach(function (runData, key) {
      if (runData.result == 1) {
        html += '<li class="game-a" onclick="getCardDetails(' + key + ')">';
        html += 'A';
      } else if (runData.result == 2) {
        html += '<li class="game-b" onclick="getCardDetails(' + key + ')">';
        html += 'B';
      } else {
        html += '<li class="game-t" onclick="getCardDetails(' + key + ')">';
        html += 'T';
      }

      html += '</li>';
    });
    html += '</ul>';
    $(".result_content").html(html);
  }
}

function getCardDetails(key) {
  val = resultdata[key]; //console.log(val);

  $(".WinnerB").css("display", "none");
  $(".WinnerA").css("display", "none");
  $("#roundID").html("");
  $("#cardA1").attr("src", site_url + "assets/images/cards/" + val.cards.C1 + ".png");
  $("#cardA2").attr("src", site_url + "assets/images/cards/" + val.cards.C2 + ".png");
  $("#cardA3").attr("src", site_url + "assets/images/cards/" + val.cards.C3 + ".png");
  $("#cardB1").attr("src", site_url + "assets/images/cards/" + val.cards.C4 + ".png");
  $("#cardB2").attr("src", site_url + "assets/images/cards/" + val.cards.C5 + ".png");
  $("#cardB3").attr("src", site_url + "assets/images/cards/" + val.cards.C6 + ".png");

  if (val.result == 2) {
    $(".WinnerB").css("display", "block");
  } else if (val.result == 1) {
    $(".WinnerA").css("display", "block");
  }

  $("#roundID").html(val.mid);
  $('#ModalTeenresult').modal('show');
}

function teenpatti(type) {
  gameType = type;
  websocket();
}

function marketaction(data) {
  //console.log(data);
  socket.emit('marketaction', data);
}

function setrunnerposition(MarketId, matchId) {
  $.ajax({
    url: site_url + 'Teenpatti/currentposition',
    data: {
      MarketId: MarketId,
      userId: userId1,
      userType: userType1,
      matchId: matchId
    },
    type: 'post',
    dataType: 'json',
    success: function success(output) {
      if (output.RunnerValue.length == 0) {
        $(".runner_amount").text(0);
      } else {
        $.each(output.RunnerValue, function (key, positionN) {
          var newVal1 = Math.round(parseFloat(positionN.winValue) + parseFloat(positionN.lossValue));
          $("#maxprofit_loss_runner_" + key).text(Math.abs(newVal1)).css('color', getValColor(newVal1));
        });
      }
    }
  });
}

function updateFancy(fancydata,matchId) {
  $.each(fancyMatchArr[matchId], function (key, fancy) {
    var matchArr = fancydata.filter(function (val) {
      return val.market_id == fancy.market_id;
    });

    if (matchArr.length > 0) {
      if (matchArr[0].cron_status == 1) {
        $(".show_msg_box_" + fancy.ID).removeClass("ball-msg-box");
        $(".show_msg_box_" + fancy.ID).html(' ');
        $("#LayNO_" + fancy.ID).text(matchArr[0].SessInptNo);
        $("#BackYes_" + fancy.ID).text(matchArr[0].SessInptYes);
        $("#NoValume_" + fancy.ID).text(matchArr[0].NoValume);
        $("#YesValume_" + fancy.ID).text(matchArr[0].YesValume);
      } else {
        $(".show_msg_box_" + fancy.ID).addClass("ball-msg-box");
        $(".show_msg_box_" + fancy.ID).html('<h1>' + matchArr[0].DisplayMsg + '</h1>');
      }
    } else {
      $(".show_msg_box_" + fancy.ID).addClass("ball-msg-box");
      $(".show_msg_box_" + fancy.ID).html('<h1>SUSPENDED</h1>');
      /*  $(".fancy_" + fancy.ID).remove();
      delete fancyMatchArr[key];
      fancyMatchArr = $.map(fancyMatchArr, function (v) {
          return v;
      });  */
    }
  });
}

function appendFancy(fancy) {
	//console.log(fancy)
  if (!$(".fancy_" + fancy.ID).length) {
	  
	 if (fancy.fancy_type == 'API') {  
		fmarket = fancy.market_id.split("-")[1];	
		_id  = fmarket.split(".")[0];  
	 }else{
		_id = fancy.ID;
	 }
   var betButton='';
	  if (userType1 < 4) {            
      betButton =`<button class="btn btn-xs btn-info" onclick="fancybets(` + fancy.ID + `)">Bets</button>`;  
    }
    var fancyhtml = '<div class="block_box f_m_' + fancy.MatchID + ' fancy_' + fancy.ID +' f_m_' + _id + '" data-id="' + fancy.ID + '"><ul class="sport-high fancyListDiv"><li><div class="ses-fan-box"><table class="table table-striped  bulk_actions"><tbody><tr class="session_content"><td><span class="fancyhead' + fancy.ID + '" id="fancy_name' + fancy.ID + '">' + fancy.HeadName + '</span><b class="fancyLia' + fancy.ID + '"></b><p class="position_btn"><button class="btn btn-xs btn-danger"  onclick="getPosition(' + fancy.ID + ')">Book</button>'+betButton+'</p></td> <td></td><td></td><td class="fancy_lay" onclick="betfancy(' + fancy.MatchID + ',' + fancy.ID + ',1);"><button class="lay-cell cell-btn" id="LayNO_' + fancy.ID + '" >' + fancy.SessInptNo + '</button><button id="NoValume_' + fancy.ID + '"  class="disab-btn">' + fancy.NoValume + '</button></td><td class="fancy_back" onclick="betfancy(' + fancy.MatchID + ',' + fancy.ID + ',0);"><button class="back-cell cell-btn" id="BackYes_' + fancy.ID + '" >' + fancy.SessInptYes + '</button><button id="YesValume_' + fancy.ID + '"  class="disab-btn">' + fancy.YesValume + '</button></td> <td></td><td></td></tr></tbody></table>';

    if (fancy.DisplayMsg != '' && fancy.DisplayMsg != null) {
      fancyhtml += '<div class="ball-msg-box show_msg_box_' + fancy.ID + '"> <h1>' + fancy.DisplayMsg + '</h1></div>';
    } else {
      fancyhtml += '<div  class="ball-msg-box show_msg_box_' + fancy.ID + '"><h1>Ball Started</h1></div>';
    }

    fancyhtml += '</div></li></ul></div>';
   
    $("#fancyM_" + fancy.MatchID + " .fancy" + fancy.fancy_type).append(fancyhtml);
    $("#fbox" + fancy.MatchID).show();

    if (fancy.fancy_type == 'API') {  
		if(!fancyMatchArr[fancy.MatchID])
			fancyMatchArr[fancy.MatchID] = [];
			fancyMatchArr[fancy.MatchID].push(fancy);			
			socket1.emit('joinRoom',_id,function(fancyN,status){
				if(fancyN){			
					fancyIDJoinM.push(_id.toString());						 
				}					
			}); 
    } else if (fancy.fancy_type == 'LM') {
      socket.emit('joinRoom', fancy.market_id);
      fancyIDArr[fancy.market_id] = fancy;
      fancyIDJoin.push(fancy.market_id.toString());
    }
  }
}

function closemarket(data) {
  var index = pstr.toString().indexOf(data.uId);
  if (index > -1) {
    if (data.ctype == 'sport') {} else if (data.ctype == 'match') {
      $(".matchrow-" + data.matchId).remove();
      matchIdarray.forEach(function (val, key) {
        if (val == data.matchId) {
          closeBetBox(data.matchId, myarray[key]);
        }
      });
    } else if (data.ctype == 'market') {
      closeBetBox(data.matchId, data.marketId);
    } else if (data.ctype == 'fancy') {
      $(".fancy_" + data.marketId).remove();
    }
  }
}

function MarketSelection(MarketId, matchId) {
  var isMatchOdds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
 
  $("#UpCommingData").hide();
  $("#UpCommingData").html('');

  if (myarray.indexOf(MarketId) == -1) {
    myarray.push(MarketId.toString());
    matchIdarray.push(matchId.toString());
    var formData = {
      MarketId: MarketId,
      matchId: matchId,
      MatchId: matchId,
      isMatchOdds:isMatchOdds
    };
    $.ajax({
      url: site_url + 'backlays',
      data: setFormData(formData),
      type: 'POST',
      dataType: 'html',
      async: false,
      success: function success(output) {
        if (output != '') {
          $(".matchBox").show();
          $("#UpCommingData").hide();
          $("#MatchOddInfo").show();
         
          $(".betSlipBox").show();
          $(".other-items").hide();
          if (isMatchOdds == 1) {
            $("#MatchOddInfo").append(output);
            currentBet = matchId;
            currentBetMarketId = MarketId;
            getMoreData(MarketId, matchId);
            $('.betdata.active a').click();
             
          }else{
			 // console.log(MarketId,isMatchOdds)
            $(".otherMarket_"+matchId).append(output);
			if(isMatchOdds=='M'){
				manualarray.push(MarketId.toString());
				socket1.emit('joinMarket',MarketId, function (runner, status) {
				  if (runner) {
					updateOdds(runner);
				  }
				});
			}
			
		   }  
          //getBets(1);
          //$('.openMarket' + matchId).trigger("click");
        } else {
          closeBetBox(matchId, MarketId);
        }
      }
    });
  }
}

function getMoreData(MarketId, matchId) {
  var formData = {
    MarketId: MarketId,
    matchId: matchId
  };
  $.ajax({
    url: site_url + 'fancymarket',
    data: setFormData(formData),
    type: 'GET',
    dataType: 'json',
    async: false,
    success: function success(output) {
      output = $.parseJSON(CryptoJS.AES.decrypt(JSON.stringify(output), CRYPTPASS, {
        format: CryptoJSAesJson
      }).toString(CryptoJS.enc.Utf8));
      socket.emit('joinRoom', MarketId);
      socket.emit('joinRoom', matchId);
      socket.emit('joinRoom', matchId + '-' + userId1);
      MarketIDArr[MarketId] = matchId;
      MatchIDArr[matchId] = output.MatchOddsVolVal[0];
      $.each(output.marketFancy, function (indx, data) {
        if (data.type == 'market') {
		   setTimeout(function(){ MarketSelection(data.ID, matchId, data.fancy_type); }, 1000);
           MarketIDArr[data.ID] = matchId;
           if (data.fancy_type == 'B') {
			socket.emit('joinRoom', data.ID);
           } 
        } else {
          appendFancy(data);
        }
      });

      if (output.MatchOddsVolVal[0]['is_unmatchbet'] == 'N') {
        $("#pills-tab").find('.active-unmatch').hide();
      } else {
        $("#pills-tab").find('.active-unmatch').show();
      }
    }
  });
}

function closeBetBox(matchId, MarketId, sportId) {
  var index = myarray.indexOf(MarketId.toString());

  if (index > -1) {
    myarray.splice(index, 1);
    matchIdarray.splice(index, 1);
    socket.emit('leaveRoom', MarketId);
    var index = matchIdarray.indexOf(matchId.toString());

    if (index == -1) {
      socket.emit('leaveRoom', matchId);
      if (userType1 < 4) socket.emit('leaveRoom', matchId + '-' + userId1);
    }
  }

  if (matchId == $('#matchId').val()) {
    ClearAllSelection(1);
  }

  MId = MarketId.replace('.', '');
  $(".matchBoxs_" + MId).html('');

  if (currentBetMarketId == MarketId) {
    $("#MatchUnMatchBetaData").html('');
    $("#accountView").html('');
  }

  if (myarray.length == 0) {
    currentBet = '';
    currentBetMarketId = '';
    $(".matchBox").hide();
    upcommingMatchData(sportId);
  } else {
    currentBet = matchIdarray[0];
    currentBetMarketId = myarray[0];
    getBets(0);
  }
  /*For removing the market if from cookies for page refresh on dashboard*/


  var pageCookie = Cookies.get('page-refresh');

  if (pageCookie) {
    pageCookie = JSON.parse(pageCookie);
    var index = pageCookie.findIndex(function (row) {
      return row.marketId == MarketId;
    });

    if (index == 0) {
      pageCookie.splice(index, 1);
      Cookies.set('page-refresh', pageCookie);
    }
  }
}

function getValColor(val) {
  if (val == '' || val == null || val == 0) return '#000000';else if (val > 0) return '#007c0e';else return '#ff0000';
}

function marketPosition(MatchId, MarketID) {
  var MId = MarketID.replace('.', ''); //if ($(".matchOpenBox_" + MId).length) {

  $.ajax({
    url: site_url + 'marketposition',
    data: {
      MarketId: MarketID,
      matchId: MatchId,
      userId: userId1,
      userType: userType1,
      'compute': Cookies.get('_compute')
    },
    type: 'post',
    dataType: 'json',
    success: function success(value) {
      if (gameType == 'market') {
        if (value.length == 0) {
          $(".matchOpenBox_" + MId + " .runner_amount").text(0);
        } else {
			var i;
			for (var i = 0; i < value.length; i++) {
				var newVal1 = Math.round(parseFloat(value[i].winValue) + parseFloat(value[i].lossValue));
				var selectionId = value[i].SelectionId;
				if (value.length == 2) {
					switch (i) {
						case 0:
							tmp = Math.round(parseFloat(value[i + 1].winValue) + parseFloat(value[i + 1].lossValue));
							break;
						case 1:
							tmp = Math.round(parseFloat(value[i - 1].winValue) + parseFloat(value[i - 1].lossValue));
							break;
					}
					var calVal = (newVal1 / tmp).toFixed(2);
				}
				if (value.length == 3) {
					switch (i) {
						case 0:
							tmp = Math.round(parseFloat(value[i + 1].winValue) + parseFloat(value[i + 1].lossValue));
							tmp2 = Math.round(parseFloat(value[i + 2].winValue) + parseFloat(value[i + 2].lossValue));
							break;
						case 1:
							tmp = Math.round(parseFloat(value[i + 1].winValue) + parseFloat(value[i + 1].lossValue));
							tmp2 = Math.round(parseFloat(value[i - 1].winValue) + parseFloat(value[i - 1].lossValue));
							break;
						case 2:
							tmp = Math.round(parseFloat(value[i - 1].winValue) + parseFloat(value[i - 1].lossValue));
							tmp2 = Math.round(parseFloat(value[i - 2].winValue) + parseFloat(value[i - 2].lossValue));
							break;
					}
					var calVal = (newVal1 / tmp).toFixed(2);
					var calVal2 = (newVal1 / tmp2).toFixed(2);
				}
				var selectionId = value[i].SelectionId;
				$("#" + selectionId + "_maxprofit_loss_runner_" + MId).text(Math.abs(newVal1)).css('color', getValColor(newVal1));
				$("#Val1-"+MId+selectionId).text(Math.abs(calVal));
				if (value.length == 3) {
					$("#Val2-"+MId+selectionId).text(Math.abs(calVal2));
				}
			}
		}
		/* else {
		  $.each(value, function (key, positionN) {
			var newVal1 = Math.round(parseFloat(positionN.winValue) + parseFloat(positionN.lossValue));
			var selectionId = positionN.SelectionId;
			$("#" + selectionId + "_maxprofit_loss_runner_" + MId).text(Math.abs(newVal1)).css('color', getValColor(newVal1));
		  });
		} */
      } else {
        if (value.length == 0) {
          $(".runner_amount").text(0);
        } else {
          $.each(value, function (key, positionN) {
            var newVal1 = Math.round(parseFloat(positionN.winValue) + parseFloat(positionN.lossValue));
            $("#maxprofit_loss_runner_" + key).text(Math.abs(newVal1)).css('color', getValColor(newVal1));
          });
        }
      }
    }
  }); //}
}

function goBack() {
  window.history.back();
}

function updateTerm() {
  $.ajax({
    url: site_url + 'acceptterms',
    success: function success(output) {
      $('#myModal_popup').modal('hide');
    }
  });
}

function FavFunc(matchid, marketid) {
  $.ajax({
    url: site_url + 'favorite',
    type: "POST",
    data: {
      matchid: matchid,
      marketid: marketid,
      'compute': Cookies.get('_compute')
    },
    success: function success(output) {
      $("#fav" + matchid).html(output);
    }
  });
}

function getPosition(fancyid) {
  $.ajax({
    url: site_url + 'getPositionN',
    data: {
      userId1: userId1,
      fancyid: fancyid,
      typeid: 2,
      yesval: $("#BackYes_" + fancyid).text(),
      noval: $("#LayNO_" + fancyid).text(),
      usertype: userType1,
      'compute': Cookies.get('_compute')
    },
    type: "POST",
    success: function success(output) {
      $("#fancyposition .modal-body").html(output);
      $('#fancyposition').modal('toggle');
    }
  });
}

function deleteunMatchOdds(MstCode, UserId) {
  $.ajax({
    url: site_url + 'deleteGetbetting',
    data: {
      MstCode: MstCode,
      UserId: UserId
    },
    type: 'get',
    dataType: 'json',
    success: function success(output) {
      if (output.error == '0') {
        jQuery("#user_row_" + MstCode).remove(); //Deleted Successfully ...

        new PNotify({
          title: 'Success',
          text: output.message,
          type: 'success',
          styling: 'bootstrap3',
          delay: 3000
        });
      } else {
        new PNotify({
          title: 'Error',
          text: output.message,
          type: 'error',
          styling: 'bootstrap3',
          delay: 3000
        });
      }

      $('#fancyposition').modal('hide');
    }
  });
}

function getDataByType(el, Type) {
  if (currentBetMarketId != '' && currentBet != '') {
    $('.nav-item').removeClass("active");
    $(el).parent('li').addClass("active");

    if (Type < 5) {
      var formData = {
        marketId: currentBetMarketId,
        matchId: currentBet,
        Type: Type
      };
      $.ajax({
        url: site_url + 'GatBetData',
        data: setFormData(formData),
        type: 'POST',
        dataType: 'html',
        success: function success(output) {
          $("#getUserPosition").hide();
          $("#MatchUnMatchBetaData").show();
          $("#MatchUnMatchBetaData").html(output);
        }
      });
    } else {
      getUserPosition(currentBet, currentBetMarketId);
    }
  }
}

function bookposition(formData) {
  $.ajax({
    url: site_url + 'getUserPosition',
    data: setFormData(formData),
    type: 'POST',
    dataType: 'html',
    success: function success(Position) {
      $("#MatchUnMatchBetaData").hide();
      $("#getUserPosition").show();
      $("#getUserPosition").html(Position);
    }
  });
}

function getUserPosition(matchId, marketId) {
  var userId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var userTypeId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (userId > 0 && userTypeId > 0) {
    var formData = {
      userId: userId,
      userTypeId: userTypeId,
      matchId: matchId,
      marketId: marketId
    };
    bookposition(formData);
  } else {
    var formData = {
      matchId: matchId,
      marketId: marketId
    };
    bookposition(formData);
  }
}

function getUserPositionBack(matchId, marketId) {
  getUserPosition(matchId, marketId);
}

function getParentUserPosition(userId, userTypeId, matchId, marketId) {
  getUserPosition(matchId, marketId, userId, userTypeId);
}

function getoddVolumn(volmn, limit) {
  return (parseFloat(volmn) * parseFloat(limit)).toFixed(2);
}

function getBets(isVal) {
  $('.betdata.active a').click();
}

function getCurrentBets(MatchId, MarketId) {
  currentBet = MatchId;
  currentBetMarketId = MarketId;
  $('.betdata.active a').click();
}


function upcommingMatchData(dt) {
  console.log('upcommingMatchData', dt);
  var urlPage = document.URL;
  $.ajax({
    url: site_url + 'dashboardView',
    data: {
      url: urlPage
    },
    type: 'get',
    dataType: 'html',
    success: function success(output) {
      $("#UpCommingData").show();
      $("#UpCommingData").html(output);
      $("#MatchOddInfo").html('');
      $(".tabid" + dt).trigger('click'); //var dt=$(this).data('tabname');

      /* $('#cricket, #tennis, #soccer').removeClass("actives");
      $('#'+dt).addClass('actives'); */
    }
  });
}

function GetScoreApi(data) {
  showScore = data.scoreData;
  var html = '';

  if (data.scoreType == 2) {
    showScore = showScore.result;
    html = '<div class="score-main"><div class="score-body">';

    if (showScore.battingTeam) {
      html += '<div class="team-box team-left"> ' + showScore.battingTeam.name + ' <span>' + showScore.battingTeam.score + '/' + showScore.battingTeam.wickets + ' (' + showScore.battingTeam.overs + '.' + showScore.battingTeam.balls + ')</span></div><div class="team-box target_center">C.R <span>' + showScore.battingTeam.runRate + '</span>   RR <span>' + (showScore.battingTeam.requiredRunRate ? showScore.battingTeam.requiredRunRate : '-') + '</span></div><div class="team-box team-right">Target <span>' + (showScore.battingTeam.target ? showScore.battingTeam.target : '-') + '</span></div>';

      if (showScore.lastOver) {
        html += ' <div class="ball-update"><ul class="lt"><li>Ov' + showScore.lastOver.overNumber + ':</li>';
        $.each(showScore.lastOver.balls, function (key, balls) {
          html += ' <li class="ball_' + balls.value + '">' + balls.value + '</li>';
        });
        html += '</ul></div>';
      }

      if (showScore.currentOver) {
        html += '<div class="ball-update"><ul class="rt"><li>Ov' + showScore.currentOver.overNumber + ':</li>';
        $.each(showScore.currentOver.balls, function (key, balls) {
          html += ' <li  class="ball_' + balls.value + '">' + balls.value + '</li>';
        });
        html += '</ul></div>';
      }
    }

    html += '</div></div>';
    ;
  } else if (showScore.eventTypeId == 2) {
    html = '<div class="score_team">';

    if (showScore.score.home) {
      html += '<div class="sc">' + showScore.score.home.name + "&nbsp;&nbsp;&nbsp;";

      if (showScore.score.home.gameSequence && showScore.score.home.gameSequence.length > 0) {
        $.each(showScore.score.home.gameSequence, function (key, seq) {
          html += seq + "&nbsp;&nbsp;&nbsp;";
        });
      }

      html += showScore.score.home.games + "&nbsp;&nbsp;&nbsp; - Points: " + showScore.score.home.score + "</div>";
    }

    if (showScore.score.away) {
      html += '<div class="sc">' + showScore.score.away.name + "&nbsp;&nbsp;&nbsp;";

      if (showScore.score.away.gameSequence && showScore.score.away.gameSequence.length > 0) {
        $.each(showScore.score.away.gameSequence, function (key, seq) {
          html += seq + "&nbsp;&nbsp;&nbsp;";
        });
      }

      html += showScore.score.away.games + "&nbsp;&nbsp;&nbsp; - Points: " + showScore.score.away.score + "</div>";
    }

    html += '</div>';
    if (showScore.currentSet) html += '<div class="current_set">Current Set: ' + showScore.currentSet + '</div>';
  } else if (showScore.eventTypeId == 1) {
    html = '<table class="runners-table"><tbody><tr class="home-header"><td class="home-runner">' + showScore.score.home.name + '</td><td class="home-score-container"><span class="ui-score-container">' + showScore.score.home.score + '</span></td><td class="match-time-container" rowspan="4"><div class="match-time"><span>' + showScore.score.away.score + 'â€²</span></div></td></tr><tr class="home-header"><td class="home-runner">' + showScore.score.away.name + '</td><td class="home-score-container"><span class="ui-score-container">' + showScore.score.away.score + '</span></td></td></tr></tbody></table>';
  }

  $("#matchScore_" + data.match_id).html(html);
}

function setChipStackVal() {
  $(".errmsg").text('');
  $("#Name1").val($(".chipName1").text());
  $("#Name2").val($(".chipName2").text());
  $("#Name3").val($(".chipName3").text());
  $("#Name4").val($(".chipName4").text());
  $("#Name5").val($(".chipName5").text());
  $("#Name6").val($(".chipName6").text());
  $("#Value1").val($(".chipName1").val());
  $("#Value2").val($(".chipName2").val());
  $("#Value3").val($(".chipName3").val());
  $("#Value4").val($(".chipName4").val());
  $("#Value5").val($(".chipName5").val());
  $("#Value6").val($(".chipName6").val());
}

function checkLogin() {
  $.ajax({
    url: site_url + 'statusChecklogin',
    dataType: 'JSON',
    success: function success(output) {
      if (output.logout == 1) {
        location.reload();
      } else {
        $("#liveCommentary").text(output.val);
      }
    }
  });
}

function showTv() {
  $.ajax({
    url: site_url + 'TvPopUp',
    type: 'get',
    dataType: 'html',
    success: function success(output) {
      $('#tv-box-popup').show();
      $("#tv-box-popup").html(output);
    }
  });
}

function viewAllMatch() {
  window.location.href = site_url + 'showmatchbets/' + currentBet + '/' + currentBetMarketId + '/2';
}

function websocketM() {
  socket1 = io.connect(socketurlM, {
    transports: ['websocket'],
    forceNew: true
  });
  socket1.on('connect', function () {
	$.each(fancyIDJoinM, function(key,id) {     
			socket1.emit('joinRoom',id,function(data,status){});
	});   
	  
    $.each(manualarray, function (key, id) {
      socket1.emit('joinMarket', id, function (data, status) {});
    });
  });
  socket1.on('market_data', function (runner) {
    updateOdds(runner);
  });
  
  /*  Removing fancy */	
	socket1.on('fancyResult', function(ID) 
    {   
         $(".f_m_" + ID).remove();    
         
    });
  
  socket1.onerror = function (ev) {
    console.log('error' + ev);
  };
  socket1.onclose = function (ev) {
    console.log('close' + ev);
  };
}
function lobbylink(game=1) {
 if(game==2){
	  var url= site_url + 'gameLink';
  }else{
	  var url= site_url + 'CasinoApi/'; 
  }
  $.ajax({
    url: url,
    dataType: 'JSON',
    success: function success(output) {
      if (output.lobbylink != '') {
        window.open(output.lobbylink, '_blank ');
      } else {
        alert(output.message);
      }
    }
  });
}
$(document).ready(function () {
  websocket();
  websocketM();

  if (gameType != 'market') {
    $('.betdata.active a').click();
  }

  if (userType1 < 4) {
    setInterval(function () {
      $('.betdata.active a').click();
    }, 5000);
  }

  setInterval(function () {
    checkLogin();
  }, 5000);
  $(document).on("click", "#updateUserChip", function () {
    var Name1 = $("#Name1").val();
    var Name2 = $("#Name2").val();
    var Name3 = $("#Name3").val();
    var Name4 = $("#Name4").val();
    var Name5 = $("#Name5").val();
    var Name6 = $("#Name6").val();
    var Value1 = parseInt($("#Value1").val());
    var Value2 = parseInt($("#Value2").val());
    var Value3 = parseInt($("#Value3").val());
    var Value4 = parseInt($("#Value4").val());
    var Value5 = parseInt($("#Value5").val());
    var Value6 = parseInt($("#Value6").val());
    var i = 0;
    $(".form-control").removeClass("bordar_highlight");

    if (Name1 == '') {
      $("#Name1N").text('Please Enter Chip Name');
      $("#Name1").addClass("bordar_highlight");
      i = 1;
    } else if (Name1.length < 2) {
      $("#Name1N").text('Chip Name must be 4 charecters');
      $("#Name1").addClass("bordar_highlight");
      i = 1;
    }

    if (Name2 == '') {
      $("#Name2N").text('Please Enter Chip Name');
      $("#Name2").addClass("bordar_highlight");
      i = 1;
    } else if (Name2.length < 2) {
      $("#Name2N").text('Chip Name must be 4 charecters');
      $("#Name2").addClass("bordar_highlight");
      i = 1;
    }

    if (Name3 == '') {
      $("#Name3N").text('Please Enter Chip Name');
      $("#Name3").addClass("bordar_highlight");
      i = 1;
    } else if (Name3.length < 2) {
      $("#Name3N").text('Chip Name must be 4 charecters');
      $("#Name3").addClass("bordar_highlight");
      i = 1;
    }

    if (Name4 == '') {
      $("#Name4N").text('Please Enter Chip Name');
      $("#Name4").addClass("bordar_highlight");
      i = 1;
    } else if (Name4.length < 2) {
      $("#Name4N").text('Chip Name must be 4 charecters');
      $("#Name4").addClass("bordar_highlight");
      i = 1;
    }

    if (Name5 == '') {
      $("#Name5N").text('Please Enter Chip Name');
      $("#Name5").addClass("bordar_highlight");
      i = 1;
    } else if (Name5.length < 2) {
      $("#Name5N").text('Chip Name must be 4 charecters');
      $("#Name5").addClass("bordar_highlight");
      i = 1;
    }

    if (Name6 == '') {
      $("#Name6N").text('Please Enter Chip Name');
      $("#Name6").addClass("bordar_highlight");
      i = 1;
    } else if (Name6.length < 2) {
      $("#Name6N").text('Chip Name must be 4 charecters');
      $("#Name6").addClass("bordar_highlight");
      i = 1;
    }

    if (Value1 == '' || isNaN(Value1)) {
      $("#Value1N").text('Please Enter Chip Value');
      $("#Value1").addClass("bordar_highlight");
      i = 1;
    }

    if (Value2 == '' || isNaN(Value2)) {
      $("#Value2N").text('Please Enter Chip Value');
      $("#Value2").addClass("bordar_highlight");
      i = 1;
    }

    if (Value3 == '' || isNaN(Value3)) {
      $("#Value3N").text('Please Enter Chip Value');
      $("#Value3").addClass("bordar_highlight");
      i = 1;
    }

    if (Value4 == '' || isNaN(Value4)) {
      $("#Value4N").text('Please Enter Chip Value');
      $("#Value4").addClass("bordar_highlight");
      i = 1;
    }

    if (Value5 == '' || isNaN(Value5)) {
      $("#Value5N").text('Please Enter Chip Value');
      $("#Value5").addClass("bordar_highlight");
      i = 1;
    }

    if (Value6 == '' || isNaN(Value6)) {
      $("#Value6N").text('Please Enter Chip Value');
      $("#Value6").addClass("bordar_highlight");
      i = 1;
    }

    if (i == 0) {
      var formData = $("#stockez_add").serializeJSON();
      $.ajax({
        type: "POST",
        url: site_url + 'updateUserChipSetting',
        data: setFormData(formData),
        cache: false,
        dataType: 'json',
        success: function success(output) {
          if (output.status.error == 0) {
            $("#addUserMsg").show();
            $("#addUserMsg").html("<span class='succmsg'>" + output.status.message + "</span>");
            $("#addUserMsg").fadeOut(3000);
            $(".chipName1").text(Name1);
            $(".chipName2").text(Name2);
            $(".chipName3").text(Name3);
            $(".chipName4").text(Name4);
            $(".chipName5").text(Name5);
            $(".chipName6").text(Name6);
            $(".chipName1").val(Value1);
            $(".chipName2").val(Value2);
            $(".chipName3").val(Value3);
            $(".chipName4").val(Value4);
            $(".chipName5").val(Value5);
            $(".chipName6").val(Value6);
            setTimeout(function () {
              $("#addUser").modal('hide');
            }, 3000);
          } else {
            $("#addUserMsg").show();
            $("#addUserMsg").html("<span class='errmsg'>" + output.status.message + "</span>");
            $("#addUserMsg").fadeOut(3000);
          }
        }
      });
    }

    i++;
  });
  $(document).on("keypress", "#left_username", function (e) {
    if (e.keyCode == 32) {
      return false;
    }
  });
  $('.UserChipData').click(function () {
    var html = '<div id="addUser" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header mod-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Chip Setting</h4></div><div class="modal-body"><div id="addUserMsg"></div><form id="stockez_add" method="post" class="form-inline"><div class="modal-body"><span id="msg_error"></span><span id="errmsg"></span><input type="hidden" name="ChipUserID" id="ChipUserID" value=""><div class="fullrow"><div class="col-md-6 col-sm-6col-xs-6" ><div class="form-group"><label for="email">Chips Name 1:</label><input type="text" name="Name1" class="form-control" id="Name1"><span id="Name1N" class="errmsg"></span></div></div><div class="col-md-6 col-sm-6col-xs-6"><div class="form-group"><label for="pwd">Chip Value 1:</label><input type="text" name="Value1" class="form-control" id="Value1" ><span id="Value1N" class="errmsg"></span> </div> </div> <div class="col-md-6 col-sm-6col-xs-6" > <div class="form-group"> <label for="email">Chips Name 2:</label> <input type="text" name="Name2" class="form-control" id="Name2" > <span id="Name2N" class="errmsg"></span> </div> </div> <div class="col-md-6 col-sm-6col-xs-6" > <div class="form-group"> <label for="pwd">Chip Value 2:</label> <input type="text" name="Value2" class="form-control" id="Value2" > <span id="Value2N" class="errmsg"></span> </div> </div> <div class="col-md-6 col-sm-6col-xs-6" > <div class="form-group"> <label for="email">Chips Name 3:</label> <input type="text" name="Name3" class="form-control" id="Name3" > <span id="Name3N" class="errmsg"></span> </div> </div> <div class="col-md-6 col-sm-6col-xs-6" > <div class="form-group"> <label for="pwd">Chip Value 3:</label> <input type="text" name="Value3" class="form-control" id="Value3" > <span id="Value3N" class="errmsg"></span> </div> </div> <div class="col-md-6 col-sm-6col-xs-6" > <div class="form-group"> <label for="email">Chips Name 4:</label> <input type="text" name="Name4" class="form-control" id="Name4" > <span id="Name4N" class="errmsg"></span> </div> </div> <div class="col-md-6 col-sm-6col-xs-6" > <div class="form-group"> <label for="pwd">Chip Value 4:</label> <input type="text" name="Value4" class="form-control" id="Value4" > <span id="Value4N" class="errmsg"></span> </div> </div> <div class="col-md-6 col-sm-6col-xs-6" > <div class="form-group"> <label for="email">Chips Name 5:</label> <input type="text" name="Name5" class="form-control" id="Name5" > <span id="Name5N" class="errmsg"></span> </div> </div> <div class="col-md-6 col-sm-6col-xs-6" > <div class="form-group"> <label for="pwd">Chip Value 5:</label> <input type="text" name="Value5" class="form-control" id="Value5" > <span id="Value5N" class="errmsg"></span> </div> </div> <div class="col-md-6 col-sm-6col-xs-6" > <div class="form-group"> <label for="email">Chips Name 6:</label> <input type="text" name="Name6" class="form-control" id="Name6" > <span id="Name6N" class="errmsg"></span> </div> </div> <div class="col-md-6 col-sm-6col-xs-6" > <div class="form-group"> <label for="pwd">Chip Value 6:</label> <input type="text" name="Value6" class="form-control" id="Value6" > <span id="Value6N" class="errmsg"></span> </div> </div> </div> </div> <div class="modal-footer" > <div class="text-center" id="button_change"> <button type="button" class="btn btn-success" id="updateUserChip" > Update Chip Setting </button> </div> <div class="clearfix"></div> </div> </form> </div> </div> </div></div>';
    $('.forModal').html(html);
    setChipStackVal();
  });
  /*From Left.php*/

  $('.dropdown-submenu a.test').on("click", function (e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  var currentNavIndex = 0;
  $('#my-nav .nav li').click(function () {//console.log('myindex',$(this).index()); 
  });
  /*End Left.php*/
});
/*From Left.php*/

function openNav() {
  document.getElementById("lefttSidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("lefttSidenav").style.width = "0";
}

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
/*From matchodds.php*/


function dragElement(elmnt) {
  var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault(); // get the mouse cursor position at startup:

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault(); // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY; // set the element's new position:

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function matchInterval(matchId, mid, datetime, date) {
  var timet = convert_to_24h(datetime); //alert((timet.replace(',',':')).replace(',',':'));

  var timetmp = timet.replace(',', ':').replace(',', ':'); // Set the date we're counting down to  Sep 5, 2018 15:37:25

  var dat = date + ' ' + timetmp;
  console.log(new Date());
  var countDownDate = new Date(dat).getTime(); // Update the count down every 1 second

  var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime(); // Find the distance between now an the count down date

    var distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(x);
     // document.getElementById("demo_" + mid).innerHTML = "00";
    } else {
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000); // Output the result in an element with id="demo"		

      if (MatchIDArr[matchId].goinginplay_bet == 'Y') {
        if (!MatchIDArr[matchId].inply && (days > 0 || hours > 0 || minutes > 30)) {
          $(".matchTable" + mid + " tbody").addClass("betting-disabled");
        } else if ($(".matchTable" + mid + " tbody#user_row0").hasClass("betting-disabled")) {
          $(".matchTable" + mid + " tbody").removeClass("betting-disabled");
        }
      }

      document.getElementById("demo_" + matchId).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
  }, 1000);
}

function convert_to_24h(time_str) {
  // Convert a string like 10:05:23 PM to 24h format, returns like [22,5,23]
  var time = time_str.match(/(\d+):(\d+):(\d+) (\w)/);
  var hours = Number(time[1]);
  var minutes = Number(time[2]);
  var seconds = Number(time[3]);
  var meridian = time[4].toLowerCase();

  if (meridian == 'p' && hours < 12) {
    hours += 12;
  } else if (meridian == 'a' && hours == 12) {
    hours -= 12;
  }

  return [hours, minutes, seconds].toString();
}
/*End From matchodds.php*/

/*Dashboard page*/


function changetv(id, sr) {
  if (sr == 1 || $(".MatchTvHideShow").is(':empty')) {
    $.ajax({
      url: site_url + 'User/gettv/' + id,
      dataType: 'html',
      success: function success(output) {
        $(".MatchTvHideShow").html(output);
      }
    });
  }
}
function fancybets(id) {
  $.ajax({
      url: site_url + 'FancyBetData',
      data: {id: id},
      type: 'get',
      dataType: 'html',
      success: function (output) {
          $("#fancyposition .title_popup span").text('Fancy Bets');
          $("#fancyposition .modal-body").html(output);
          $('#fancyposition').modal('toggle');
      }
  }); 
}

$(function () {
  $('.close ,.closebtn').click(function () {
    $('#changeUserPassword').hide();
  });
});