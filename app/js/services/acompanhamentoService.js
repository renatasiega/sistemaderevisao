angular.module("sistemDeRevisao").factory("acompanhamentoService", function () {

  acompanhamento = function(_modelo, _placa, _dataCompra, _periodos, _cliente){
    var a = {
      modelo: _modelo,
      placa: _placa,
      dataCompra: _dataCompra,
      periodos: _periodos,
      cliente: _cliente
    }
    return a;
  }

  var voltarMeses = function(meses){
    var hoje = new Date();
    console.log("hoje: " + hoje + " meses: " + meses);
    var diaAtual = hoje.getDate();
    if (diaAtual > 28){
      hoje.setDate(28); //menor esforco possivel neste caso
    }
    var mesAtual = hoje.getMonth();
    if (mesAtual >= meses){
      hoje.setMonth(mesAtual - meses);
    } else {
      var anoAtual = hoje.getFullYear();
      if (meses <= 11){
        hoje.setMonth(mesAtual + 12 - meses);
        hoje.setFullYear(anoAtual - 1);
      } else {
        hoje.setMonth(mesAtual + 12 - meses);
        var intAnos = Math.floor(meses / 12);
        hoje.setFullYear(anoAtual - 1 - intAnos);
      }
    }
    return hoje;
  };
  var data5Meses = voltarMeses(5);
  var data11Meses = voltarMeses(11);
  var data23Meses = voltarMeses(23);

  var acompanhamentos = [
          acompanhamento("K", "MKV1080", data5Meses, [6, 12, 24, 36, 48, 60], {nome: "Renata", telefone: "9999-8888", email:"teste@mail.com"}),
          acompanhamento("Fiesta", "MLV1100", data11Meses, [6, 12, 24, 36, 48], {nome: "Marina", telefone: "9999-7777", email: "teste1@mail.com"}),
          acompanhamento("EcoSport", "PPO0909", data23Meses, [12, 24, 36, 48, 60], {nome: "Carina", telefone:   "9999-6666", email: "teste2@mail.com"}),
          acompanhamento("Focus", "LHA3495", data5Meses, [12, 24, 36, 48], {nome: "Pristina", telefone:  "9999-5555", email: "teste3@mail.com"})
      ];

  _getAll = function (){
      return acompanhamentos;
  }

  _save = function (acompanhamento){
    acompanhamentos.push(acompanhamento);
  }

  return {
    getAll: _getAll,
    save: _save
  }

});
