angular.module("sistemDeRevisao").factory("acompanhamentoService", function () {

  acompanhamento = function(_modelo, _placa, _dataRevisao, _agendado, _cliente){
    var a = {
      modelo: _modelo,
      placa: _placa,
      dataRevisao: _dataRevisao,
      agendado: _agendado,
      cliente: _cliente
    }
    return a;
  }

  var somarMeses = function(d, meses){
    var data = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var diaAtual = data.getDate();
    var mesAtual = data.getMonth();
    if (meses < 12){
      if (diaAtual > 28){
        data.setDate(28);
      }
    }
    if (mesAtual + meses <= 11){
      data.setMonth((mesAtual + meses));
    } else {
      intAnos = meses / 12;
      data.setFullYear(data.getFullYear()+ intAnos);
    }
    return data;
  };

  var acompanhamentos = [
          acompanhamento("K", "MKV1080", new Date(2016,07,21), false, {nome: "Renata", telefone: "9999-8888", email:"teste@mail.com"}),

          acompanhamento("Fiesta", "MLV1100", new Date(2016,01,20), true, {nome: "Marina", telefone: "9999-7777", email: "teste1@mail.com"}),
          acompanhamento("Fiesta", "MLV1100", new Date(2017,01,20), false, {nome: "Marina", telefone: "9999-7777", email: "teste1@mail.com"}),

          acompanhamento("EcoSport", "PPO0909", new Date(2016,05,06), false, {nome: "Carina", telefone:   "9999-6666", email: "teste2@mail.com"}),
          acompanhamento("EcoSport", "PPO0909", new Date(2017,05,06), false, {nome: "Carina", telefone:   "9999-6666", email: "teste2@mail.com"}),

          acompanhamento("Focus", "LHA3495", new Date(2016,01,10), false, {nome: "Pristina", telefone:  "9999-5555", email: "teste3@mail.com"})
      ];

  _getAll = function (){
      return acompanhamentos;
  }

  _save = function (b){

    for (var i = 0; i < b.periodos.length; i++){
      var futuro = somarMeses(b.dataCompra, b.periodos[i]);
      var novo = acompanhamento (b.modelo, b.placa, new Date(futuro.getFullYear(), futuro.getMonth(), futuro.getDate()), false, b.cliente);
      acompanhamentos.push(novo);
    }

  }

  _get = function (placa, data) {
    for (var i = 0; i < acompanhamentos.length; i++){
      if (placa === acompanhamentos[i].placa && data === acompanhamentos[i].dataRevisao){
        return acompanhamentos[i];
      }
    }
  }

  _edit = function (c) {
    var edited = _get(c.placa, c.dataRevisao);
    edited.agendado = c.agendado;
  }

  return {
    getAll: _getAll,
    save: _save,
    edit: _edit
  }

});
