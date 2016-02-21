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

  var voltarMeses = function(dataNova, meses){
    var hoje = dataNova;
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
    console.log("saidas voltar: " + hoje);
    return hoje;
  };

  var somarMeses = function(d, meses){
    var data = d;
    //console.log("data: " + data + " meses: " + meses);
    var diaAtual = data.getDate();
    var mesAtual = data.getMonth();
    if (meses < 12){
      if (diaAtual > 28){
        data.setDate(28); //menor esforco possivel neste caso
      }
    }
    if (mesAtual + meses <= 11){
      data.setMonth((mesAtual + meses));
    } else {
      intAnos = meses / 12;
      data.setFullYear(data.getFullYear()+ intAnos);
    }
    //console.log("saida: " + data);
    return data;
  };

  var acompanhamentos = [
          acompanhamento("K", "MKV1080", somarMeses(new Date(), 6), false, {nome: "Renata", telefone: "9999-8888", email:"teste@mail.com"}),
          acompanhamento("K", "MKV1080", somarMeses(new Date(), 12), false, {nome: "Renata", telefone: "9999-8888", email:"teste@mail.com"}),
          acompanhamento("K", "MKV1080", somarMeses(new Date(), 24), false, {nome: "Renata", telefone: "9999-8888", email:"teste@mail.com"}),
          acompanhamento("K", "MKV1080", somarMeses(new Date(), 36), false, {nome: "Renata", telefone: "9999-8888", email:"teste@mail.com"}),
          acompanhamento("K", "MKV1080", somarMeses(new Date(), 48), false, {nome: "Renata", telefone: "9999-8888", email:"teste@mail.com"}),
          acompanhamento("K", "MKV1080", somarMeses(new Date(), 60), false, {nome: "Renata", telefone: "9999-8888", email:"teste@mail.com"}),

          acompanhamento("Fiesta", "MLV1100", somarMeses(voltarMeses(new Date(),11), 6), false, {nome: "Marina", telefone: "9999-7777", email: "teste1@mail.com"}),
          acompanhamento("Fiesta", "MLV1100", somarMeses(voltarMeses(new Date(),11), 12), true, {nome: "Marina", telefone: "9999-7777", email: "teste1@mail.com"}),
          acompanhamento("Fiesta", "MLV1100", somarMeses(voltarMeses(new Date(),11), 24), false, {nome: "Marina", telefone: "9999-7777", email: "teste1@mail.com"}),
          acompanhamento("Fiesta", "MLV1100", somarMeses(voltarMeses(new Date(),11), 36), false, {nome: "Marina", telefone: "9999-7777", email: "teste1@mail.com"}),
          acompanhamento("Fiesta", "MLV1100", somarMeses(voltarMeses(new Date(),11), 48), false, {nome: "Marina", telefone: "9999-7777", email: "teste1@mail.com"}),

          acompanhamento("EcoSport", "PPO0909", somarMeses(voltarMeses(new Date(),23), 12), true, {nome: "Carina", telefone:   "9999-6666", email: "teste2@mail.com"}),
          acompanhamento("EcoSport", "PPO0909", somarMeses(voltarMeses(new Date(),23), 24), false, {nome: "Carina", telefone:   "9999-6666", email: "teste2@mail.com"}),
          acompanhamento("EcoSport", "PPO0909", somarMeses(voltarMeses(new Date(),23), 36), false, {nome: "Carina", telefone:   "9999-6666", email: "teste2@mail.com"}),
          acompanhamento("EcoSport", "PPO0909", somarMeses(voltarMeses(new Date(),23), 48), false, {nome: "Carina", telefone:   "9999-6666", email: "teste2@mail.com"}),
          acompanhamento("EcoSport", "PPO0909", somarMeses(voltarMeses(new Date(),23), 60), false, {nome: "Carina", telefone:   "9999-6666", email: "teste2@mail.com"}),

          acompanhamento("Focus", "LHA3495", somarMeses(voltarMeses(new Date(),5), 12), false, {nome: "Pristina", telefone:  "9999-5555", email: "teste3@mail.com"}),
          acompanhamento("Focus", "LHA3495", somarMeses(voltarMeses(new Date(),5), 24), false, {nome: "Pristina", telefone:  "9999-5555", email: "teste3@mail.com"}),
          acompanhamento("Focus", "LHA3495", somarMeses(voltarMeses(new Date(),5), 36), false, {nome: "Pristina", telefone:  "9999-5555", email: "teste3@mail.com"}),
          acompanhamento("Focus", "LHA3495", somarMeses(voltarMeses(new Date(),5), 48), false, {nome: "Pristina", telefone:  "9999-5555", email: "teste3@mail.com"})
      ];

  _getAll = function (){
      return acompanhamentos;
  }

  _save = function (b){
    b.periodos.forEach(function(valor, chave){
      var novo =  acompanhamento (b.modelo, b.placa, somarMeses(b.dataCompra, valor), false, b.cliente);
      acompanhamentos.push(novo);
    });
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
    console.log(edited.agendado + " " + c.agendado);
    edited.agendado = c.agendado;
  }

  return {
    getAll: _getAll,
    save: _save,
    edit: _edit
  }

});
