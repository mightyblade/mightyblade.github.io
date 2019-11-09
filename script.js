// Forja de Personagens para Mighty Blade
// por Eduardo "Axradh" Chequetto Machado

//// C O N S T A N T E S ////
// Atributos:
  const idFOR = 0, idAGI = 1, idINT = 2, idVON = 3, stringsDeAtributos = ["for","agi","int","von"];
// Valores Constantes de Modificadores:
  const modBloq = -2, modNega = -1, modLibr = 0, modPosi = 1;
// ids do Arranjo de  Modificadores de Defesa:
  const idModDefNome = 0, idModDefDesc = 1, idModDefEfto = 2, idModDefTipo = 3;
// [ Nomes, ou parte de, de Habilidades a serem modificadas,  ["nome0", ..., "nomeN"]
//   Categoria de Habilidade ou Equipamento,                  ["", "Padrão", "Característica","Técnica","Magia"]
//   Tipo de Habilidade ou Dano de Arma,                      ["", "Ação","Reação","Suporte"]
//   Classes de HTML, ou Classe de Alcances de Arma           ["classe0", ..., "classeN"]
  const idBonusHabNomes = 0, idBonusHabCateg = 1, idBonusHabTipos = 2,
        idBonusHabClass = 3, idBonusHabBonus = 4, idBonusHabFonte = 5;
// id de Fontes de Rótulos:
  const idNulo = -1;
        idFontGeral = 0, idFontRaca_ = 1, idFontClass = 2, idFontAntec = 3, idFontAprnd = 4,
        idFontCamin = 5, idFontOrgan = 6, idFontExtra = 7, idFontDogma = 8, idFontEspAn = 9;
// id de posições nos arranjos habilidadesAutomaticas e habilidadesSelecionadas:
  const idHabPosHabil = 0, idHabPosIDLst = 1, idHabPosFonte = 2, idHabPosNivel = 3;
// Strings de Tipos de Dano. Binário: Corte +1, Perfuração +2, Contusão +4:
  const stringsDeTipoDeDano = ["Nenhum","Corte","Perfuração","Corte e Perf.","Contusão","Corte e Cont.",
                               "Perf. e Cont.","Corte,Perf.,Cont."]
// Id de Tipos de Equipamento:
  const idEquipNone = -1, idEquipArma = 0, idEquipProj = 1, idEquipMuni = 2, idEquipConj = 3,
        idEquipDefs =  4, idEquipMusi = 5, idEquipPoca = 6, idEquipMund = 7;
// Pacote de Item:
  const idItem = 0, idDoItem = 1, idCategoria = 2, idQuantidade = 3, idEquip = 4;
// id de Equipamento
  const idEquipTipo = 0, idEquipNome = 1, idEquipCsto = 2, idEquipPeso = 3, idEquipMatr = 4, idEquipMtrs = 5;
// id de Equipamento : Nenhum //
  const idEquipNhmTipD = 2, idEquipNhmAlcn = 3, idEquipNhmBFOR = 4, idEquipNhmDano = 5;
// id de Equipamento : Arma & Projétil & Conjuração //
  const idEquipArmBFOR =  6, idEquipArmDano =  7, idEquipArmTipD =  8, idEquipArmFN__ =  9, idEquipArmFN2M = 10, 
        idEquipArmAlcn = 11, idEquipArmCrgr = 12, idEquipArmHste = 13, idEquipArm2mao = 14, idEquipArmArrm = 15,
        idEquipArmCnlz = 16, idEquipArmAsst = 17, idEquipArmCArc = 18, idEquipArmCMis = 19, idEquipArmFoco = 20,
        idEquipArmRgst = 21, idEquipArmDesc = 22;
// id de Equipamento : Defesa //
  const idEquipDefBonus = 6, idEquipDefPesad = 7, idEquipDefRigid = 8, idEquipDefOcupa =  9, idEquipDefTipoD = 10;
// ids de Ataques:
  const idAtqTipo = 0, idAtqNome = 1, idAtqTipD = 2, idAtqAlcn = 3, idAtqBFOR = 4, idAtqDano = 5, idAtqItem = 6;
// Modificadores de Ataque & Habilidade:
  const idModAtaq = 0, idModDano = 1, idModMana = 2, idModDifi = 3, idModADsc = 4, idModMDsc = 5;
// Um Requisitos pode ser:
  const naoAplicavel = 0, cumprido = 1, naoCumprido = -1;
// ids de habilidadesModificadorasDe<Atributo>:
  const idModAtributo = 0, idModNome = 1, idModBonus = 2;
// ids de Armaduras Naturais
  const idArmNat_Nome_ = 0, idArmNatModifc = 1, idArmNatPesada = 2, idArmNatRigida = 3;
// Strings
  const stringsDeEvolucao = ["","vida+10","mana+10","v&m+5","aprendiz","caminho"];
  const bitsDeEvolucao = [0,1,2,4,8,16,32,64,128];
// atributosEModificadores:
  const idAtTotal = 0, idAtRaca_ = 1, idAtAdapt = 2, idAtClass = 3, idAtAntec = 4,
        idAtNivl4 = 5, idAtNivl7 = 6, idAtNvl10 = 7, idAtNvl16 = 8, idAtExtra = 9, idAtHabil = 10;
  const stringsDeModificadoresDeAtributo = ["total","raca","adaptabilidade","classe","antecedente",
                                            "nivel4","nivel7","nivel10","nivel16","extra"];
  const evolucaoNivel = [0,1,2,3,4,5,6,7,8,9,10,12,14,18,20];
// Constantes do Mighty Blade:
  const vidaInicial = 60, manaInicial = 60,
        custoDeManaMinimo = 5, dificuldadeMinima = 5,
        bloqueioPadrao = 5, esquivaPadrao = 5, determinacaoPadrao = 8,
        multiplicadordeCargaBasica = 7, multiplicadorDeCargaPesada = 5, multiplicadorDeCargaMaxima = 10,
        mulDeCorridaBasica = 4, mulDeCorridaPesada = 3, multDeCorridaRigida = 2,
        idHabModDefBloq = 0, idHabModDefEsqv = 1, idHabModDefDetr = 2,
        moedasIniciaisPadrao = 400, qtdDadosIni = 2,
        habilidadesPorNivel = [0,3,4,5,6,7,8,9,10,11,12,13,13,14,14,15,15,16,16,17,17];

//// V A R I Á V E I S ////
// Personagem
  var nomeDosPersonagens = [], personagens = [], idPersonagemSelecionado = -1;
// Pacotes
    var nomeDosPacotes = [], pacotes = [];
// Material
  ;
// Opções:
  var ignorarRequisitos = false, habilidadesInfinitas = false, qualidadesEMateriais = false, 
      cargaAlternativa  = false, moedasCustomizadas  = false,
  fonte = "Arial Mono";   

// F I C H A  D E  P E R S O N A G E M //
// Rótulos
  var nivelDePersonagem = 1, idDaAbaDeRotulo = 0, rotuloSelecionado = idNulo;
  var idsDeRotulosSelecionados = [idNulo,idNulo,idNulo,idNulo,idNulo,idNulo,idNulo,idNulo,idNulo];
  var idDoUltimoRotuloMostrado = idNulo;
  var racaSelecionada     = undefined, classeSelecionada  = undefined, antecedenteSelecionado = undefined,
      aprendizSelecionado = undefined, caminhoSelecionado = undefined, organizacaoSelecionada = undefined,
      fonteExtraSelecionada = undefined;
  var nomeDeFonteExtra = "";
// JSONs
  var racas        = JSON.parse(json_racas()),        classes      = JSON.parse(json_classes()),
      antecedentes = JSON.parse(json_antecedentes()), aprendizes   = classes,
      caminhos     = JSON.parse(json_caminhos()),     organizacoes = JSON.parse(json_organizacoes());
// Vida, Mana e Evolução
  var vida = 0, mana = 0, vidaBonus = 0, manaBonus = 0,
      vetorDeEvolucao = [0,0,0,0,0,0,0,0,0,0,0]; // 1 V, 2 M, 4 V&M, 8 Apr, 16 Cam, 32 !Apr, 64 !Cam
// Atributos
  var atributosEModificadores = [[0,0,0,0],                          // Total
                                 [modBloq,modBloq,modBloq,modBloq],  // Raça
                                 [modBloq,modBloq,modBloq,modBloq],  // Adptabilidade
                                 [modBloq,modBloq,modBloq,modBloq],  // Classe
                                 [modBloq,modBloq,modBloq,modBloq],  // Antecedente
                                 [modBloq,modBloq,modBloq,modBloq],  // Nível 4
                                 [modBloq,modBloq,modBloq,modBloq],  // Nível 7
                                 [modBloq,modBloq,modBloq,modBloq],  // Nível 10
                                 [modBloq,modBloq,modBloq,modBloq],  // Nível 16
                                 [modBloq,modBloq,modBloq,modBloq],  // Extra
                                 [0,0,0,0]];                         // Habilidade
  var quantidadeDeAtributosEModificadores = atributosEModificadores.length;
  var bitsDeAntecedente = 0; // Registra os atributos bônus do antecedente: +1 FOR, +2 AGI, +4 INT, +8 VON
  var habilidadesModificadorasDeAtributos = []; // [idDoAtributo, nomeDaHabilidade, modificador]
// Habilidades:
  var todasAsHabilidades = {},
      habilidadesDeRaca, habilidadesDeClasse,     habilidadesDeAprendiz, habilidadesDeCaminho,
      habilidadesGerais, habilidadesDeFonteExtra, habilidadesDeOrganizacao,
      habilidadesDeDogma          = JSON.parse(json_dogmas()).dogma,
      habilidadesDeEspiritoAnimal = JSON.parse(json_espiritosAnimais()).espirito_animal;
// Habilidades // Ids relevantes:
  var idDaUltimaHabilidadeMostrada = idNulo, ultimaHabilidadeMostrada = undefined;
      idDogmaSelecionado = idNulo, idEspiritoAnimalSelecionado = idNulo;
// Habilidades                   // [Habilidade,Fonte]         // [Habilidade,Fonte,Nivel]
  var habilidadesNoSeletor = [], habilidadesAutomaticas  = [], habilidadesSelecionadas = [];
//                              Geral/Raça_/Class/Antec/Aprnd/Camin/Extra
  var habilidadesDisponiveis = [    3,    0,    0,    0,    0,    0,    0],
      habilidadesExtras      = [false,false,false,false,false,false, false],
      jaPossuiHabilidadeAutomatica = [false, false, false, false, false], // "true" indica fonte com habilidade repetida
      idFonteDeHabilidades = 4, 
      modificadoresDeMana = [],              modificadoresDeDificuldade = [], 
      modificadoresAditivosDeDescricao = [], modificadoresMultiplicativosDeDescricao = [];
// Equipamentos:
  var itensNoMostruario = [], inventario = [], equipamentoExtra = "", carga = 0,
      moedasIniciais = moedasIniciaisPadrao, moedas = moedasIniciais,
      idCategoriaDeEquipamento = idNulo, guerreiroDeAco1 = false, guerreiroDeAco2 = false,
      equipandoAssesteMagico = 0, equipandoCerneArcano = 0, equipandoCerneMistico = 0,  equipandoFocoMagico = 0,
      armasEquipadas = [], quantidadeDeMaos = 2, maosDisponiveis = 2, 
      escudoEquipado = undefined, armaduraEquipada = undefined,
      qualidadesDeEquipamento = JSON.parse(json_qualidade()).qualidade, 
      materiaisDeEquipamento = JSON.parse(json_material()).material;
// Ataques:
  var ataquesDesarmados = [], ataquesArmados = [], modificadoresDeAtaque = [], modificadoresDeDano = [],
      habilidadePrecisao   = false, habilidadeAplicarForca = false, habilidadeIntuicao      = false,
      habilidadeGigantismo = false, habilidadeNanismo      = false, habilidadePrimeiraMarca = false;
// Defesas:
  var bloqueioBase   = bloqueioPadrao, esquivaBase  = esquivaPadrao, determinacaoBase  = 8,
      bloqueio      = 0,              esquiva      = 0,             determinacao      = 0,
      bloqueioBonus = 0,              esquivaBonus = 0,             determinacaoBonus = 0,
      armadura = 0, armaduraNatural = 0, armadurasNaturais = [], escudo = 0,
      habilidadesModificadorasDeDefesa = [];
// Carga & Deslocamento:
  var cargaBasica = 0, cargaPesada = 0, cargaMaxima = 0, cargaBonus = 0, cargaMostrada = "";
      multiplicadorDeCarga         = 1, deslocamento           = 0, deslocamentoBonus             = 0,
      multiplicadorDeDeslocamento  = 1, multiplicadorDeCorrida = 4, multiplicadorNaturalDeCorrida = 4,
      iniciativa                   = 0, iniciativaBonus        = 0, dadosDeIniciativa = qtdDadosIni;



var fichaJSON = "";
var fichaTXT = "";

var abaAberta = 0;
var botoesAbas = ["", document.getElementById("aba1"), document.getElementById("aba2"),
                      document.getElementById("aba3"), document.getElementById("aba4"), document.getElementById("aba5") ];
var abas = [];


//// E L E M E N T O S // H T M L ////
var _barraDeNavegacao       = document.getElementById("navegacao"),
    _barraSuperior          = document.getElementById("barra_superior"),

    _listaDePersonagens     = document.getElementById("lista_de_personagens"),
    _listaDeMateriais       = document.getElementById("lista_de_materiais"),
    _listaDeOpcoes          = document.getElementById("lista_de_opcoes"),

    _abaInicial             = document.getElementById("aba_inicial"),
    _abaRotulos             = document.getElementById("aba_rotulo"),
    _abaEvolucao            = document.getElementById("aba_evolucao"),
    _abaHabilidade          = document.getElementById("aba_habilidade"),
    _abaEquipamento         = document.getElementById("aba_equipamento"),
    _abaExportar            = document.getElementById("aba_exportar"),
    abas = [_abaInicial, _abaRotulos, _abaEvolucao, _abaHabilidade, _abaEquipamento, _abaExportar ]; 

    _visualizador           = document.getElementById("visualizador"),
    _preVisCabecalho        = document.getElementById("pre_cabecalho");

    _resumo                 = document.getElementById("resumo"),
    _nomeDoJogador          = document.getElementById("nome_jogador"),
    _nomeDoPersonagem       = document.getElementById("nome_personagem"),
    _idade                  = document.getElementById("idade"),
    _motivacao              = document.getElementById("motivacao"),
    _rangeNivel             = document.getElementById("range_nivel"),
    _botaoRotuloAprnd       = document.getElementById("botao_rotulo_" + idFontAprnd),
    _botaoRotuloCamin       = document.getElementById("botao_rotulo_" + idFontCamin),
    _botaoRotuloAntec       = document.getElementById("botao_rotulo_" + idFontAntec),
    _nivelDePersonagem      = document.getElementById("nivel_de_personagem"),
    _rotulosSelecionados    = document.getElementById("rotulos_selecionados_lista"),
    _registro               = document.getElementById("registro_lista"),
    _detalhador             = document.getElementById("detalhador"),
    _VidaTotal              = document.getElementById("vida_total"),
    _ManaTotal              = document.getElementById("mana_total"),
    _forTotal               = document.getElementById("for_total_texto"),
    _agiTotal               = document.getElementById("agi_total_texto"),
    _intTotal               = document.getElementById("int_total_texto"),
    _vonTotal               = document.getElementById("von_total_texto"),
    _checkVida              = document.getElementById("checkbox_marca_vida"), 
    _checkMana              = document.getElementById("checkbox_marca_mana"),
    _botaoHabilidadeGeral   = document.getElementById("botao_habilidade_" + idFontGeral),
    _botaoHabilidadeRaca_   = document.getElementById("botao_habilidade_" + idFontRaca_),
    _botaoHabilidadeClass   = document.getElementById("botao_habilidade_" + idFontClass),
    _botaoHabilidadeAprnd   = document.getElementById("botao_habilidade_" + idFontAprnd),
    _botaoHabilidadeCamin   = document.getElementById("botao_habilidade_" + idFontCamin),
    _botaoHabilidadeExtra   = document.getElementById("botao_habilidade_" + idFontExtra),
    _botaoHabilidadeOrgan   = document.getElementById("botao_habilidade_" + idFontOrgan),
    _botaoHabilidadeDogma   = document.getElementById("botao_habilidade_" + idFontDogma),
    _botaoHabilidadeEspAn   = document.getElementById("botao_habilidade_" + idFontEspAn),
    _cabecalhoDeHabilidade  = document.getElementById("hab_sel_cab_nome"),
    _seletorDeHabilidades   = document.getElementById("seletor_de_habilidades"),
    _habilidadesDisponiveis = document.getElementById("habilidades_disponiveis"),
    _mostrador              = document.getElementById("mostrador"),
    _habilidadesPossuidas   = document.getElementById("habilidades_possuidas_lista"),
    _botaoEquipamentoArma   = document.getElementById("botao_equipamento_" + idEquipArma),
    _botaoEquipamentoProj   = document.getElementById("botao_equipamento_" + idEquipProj),
    _botaoEquipamentoMuni   = document.getElementById("botao_equipamento_" + idEquipMuni),
    _botaoEquipamentoConj   = document.getElementById("botao_equipamento_" + idEquipConj),
    _botaoEquipamentoMusi   = document.getElementById("botao_equipamento_" + idEquipMusi),
    _botaoEquipamentoDefs   = document.getElementById("botao_equipamento_" + idEquipDefs),
    _botaoEquipamentoPoca   = document.getElementById("botao_equipamento_" + idEquipPoca),
    _botaoEquipamentoMund   = document.getElementById("botao_equipamento_" + idEquipMund),
    _cabecalhoDoMostruario  = document.getElementById("cabecalho_do_mostruario"), 
    _mostruario             = document.getElementById("lista_do_mostruario"),
    _inventario             = document.getElementById("lista_do_inventario"),
    _ataques                = document.getElementById("lista_de_ataques"),
    _bloqueioExtra          = document.getElementById("bloqueio_extra"),
    _esquivaExtra           = document.getElementById("esquiva_extra"),
    _determinacaoExtra      = document.getElementById("determinacao_extra"),
    _bloqueio               = document.getElementById("bloqueio_valor"),
    _esquiva                = document.getElementById("esquiva_valor"),
    _determinacao           = document.getElementById("determinacao_valor"),
    _carga                  = document.getElementById("carga_valor"),
    _deslocamento           = document.getElementById("deslocamento"),
    _iniciativa             = document.getElementById("iniciativa");
    _moedas                 = document.getElementById("moedas");

// Carrega as Habilidades:
  var jsonHabilidades;
  jsonHabilidades = JSON.parse(json_habilidadesAB()); prepararHabilidades();
  jsonHabilidades = JSON.parse(json_habilidadesC());  prepararHabilidades();
  jsonHabilidades = JSON.parse(json_habilidadesDE()); prepararHabilidades();
  jsonHabilidades = JSON.parse(json_habilidadesFG()); prepararHabilidades();
  jsonHabilidades = JSON.parse(json_habilidadesHK()); prepararHabilidades();
  jsonHabilidades = JSON.parse(json_habilidadesLO()); prepararHabilidades();
  jsonHabilidades = JSON.parse(json_habilidadesPR()); prepararHabilidades();
  jsonHabilidades = JSON.parse(json_habilidadesSZ()); prepararHabilidades();
  function prepararHabilidades() {
    var quantidade = jsonHabilidades.habilidade.length;
    for(var i = 0; i < quantidade; i++) {
      var habilidade = jsonHabilidades.habilidade[i];
      var nomeDaHabilidade = habilidade.nome;
      todasAsHabilidades[nomeDaHabilidade] = habilidade;
    }
  }

// Acrescenta o "ouvinte" do botão para importar Personagens:
  document.getElementById('botao_importar_personagens').addEventListener('change', importarArquivoDePersonagens, false);

 atualizarHTMLDaListaDeMateriais();
 atualizarHTMLDaListaDeOpcoes();


//// D E B U G ////

  function exportarRelatorio() {
   var a = document.createElement('a');
    a.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(registroDeAcoes));
    a.setAttribute("download", "relatorio_da_forja.txt");
    a.style.display = "none"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }


  function relatorio(texto) {
    registroDeAcoes += texto + "\n";
  }



//// I N I C I A L // P E R S O N A G E M ////

  function removerPersonagem(id) { 
    personagens.splice(id,1); atualizarHTMLDaListaDePersonagens();
  }


  function abrirPersonagem(id) {
  // Carrega o JSON do personagem do arranjo de personagens:
    var personagem = personagens[id]; if(personagem == undefined | personagem == null) { return; }
    idDoPersonagemAberto = id;
    limparFicha();
  // Contexto [0 à 5]:
    var importacoesNecessarias = personagem[0]; 
    _nomeDoJogador.value       = personagem[1];  _nomeDoPersonagem.value = personagem[2];
    _idade.value               = personagem[3];  _motivacao.value        = personagem[4];
    nivelDePersonagem          = personagem[5]; _rangeNivel.value = nivelDePersonagem; atualizarNivel();
  // Rótulos [6 à 11]:
    var rotulo, id;
    rotulo = personagem[ 6]; if(rotulo != null) { id = rotulo[0]; if(id >= 0) { atualizarRaca(id);        }}
    rotulo = personagem[ 7]; if(rotulo != null) { id = rotulo[0]; if(id >= 0) { atualizarClasse(id);      }}
    rotulo = personagem[ 8]; if(rotulo != null) { id = rotulo[0]; if(id >= 0) { atualizarAntecedente(id); }}
    rotulo = personagem[ 9]; if(rotulo != null) { id = rotulo[0]; if(id >= 0) { atualizarAprendiz(id);    }}
    rotulo = personagem[10]; if(rotulo != null) { id = rotulo[0]; if(id >= 0) { atualizarCaminho(id);     }}
    rotulo = personagem[11]; if(rotulo != null) { id = rotulo[0]; if(id >= 0) { atualizarOrganizacao(id); }}
  // Atributos [12 à 17]:
    id = personagem[12];
    if(id > -1) { document.getElementById("checkbox_" + stringsDeAtributos[id] + "_adaptabilidade").checked = true; 
                  cliqueModificadorUnicoDeAtributo(id, 2); }
    id = personagem[13];
    if(id > -1) { document.getElementById("checkbox_" + stringsDeAtributos[id] + "_antecedente").checked = true; 
                  cliqueModificadorUnicoDeAtributo(id, 4); }
    carregarAtributo(personagem[12], "_adaptabilidade", 2); carregarAtributo(personagem[13], "_antecedente", 4);
    carregarAtributo(personagem[14], "_nivel4",         5); carregarAtributo(personagem[15], "_nivel7",      6);
    carregarAtributo(personagem[16], "_nivel10",        7);
  // Evolução [17 à 30]:
     carregarEvolucao(personagem[17], 2); carregarEvolucao(personagem[18], 3); carregarEvolucao(personagem[19], 4);
     carregarEvolucao(personagem[20], 5); carregarEvolucao(personagem[21], 6); carregarEvolucao(personagem[22], 7);
     carregarEvolucao(personagem[23], 8); carregarEvolucao(personagem[24], 9); carregarEvolucao(personagem[25],10);
     carregarEvolucao(personagem[26],11); carregarEvolucao(personagem[27],12); carregarEvolucao(personagem[28],13);
     carregarEvolucao(personagem[29],14);
  // Habilidades [30+]:
    var contagem = 30;
    for(; personagem[contagem] != null; contagem++) {
      id = personagem[contagem]; selecionarFonteDeHabilidades(id[1]); adicionarHabilidadeSelecionada(id[0], id[1]); 
    } 
  // Dogma, Espírito Animal, etc.
     contagem++; var especificos = personagem[contagem];
  //// Dogma:
    id = especificos[0]; 
    if(id != null) { selecionarFonteDeHabilidades(idFontDogma);  selecionarDogma(id[0]); }
  //// Espírito Animal:
    id = especificos[1];
    if(id != null) { selecionarFonteDeHabilidades(idFontEspAn);  selecionarEspiritoAnimal(id[0]); }
  //// Outro? Talvez Pacto?
    //id = especificos[2]; if(id == undefined) { console.log("UNDEFINED YA BASTAD"); }
  // Equipamentos:
    contagem++;
    for(var idNoInventario = 0; personagem[contagem] != null; idNoInventario++) {
      equipDoArq = personagem[contagem]; contagem++; 
      var idNoMostruario = equipDoArq[0], categoria = equipDoArq[1], quantidade = equipDoArq[2], equipado = equipDoArq[3];
      selecionarCategoriaDeEquipamento(categoria); carregarEquipamento(idNoMostruario,categoria,quantidade,equipado);
    // Itens de Defesa precisam ser equipados de forma especial:
      if(categoria == idEquipDefs & equipado > 0) {
        var item = itensNoMostruario[idNoMostruario], pacoteDeItem = [item,idNoMostruario,categoria,quantidade,equipado];
      // Escudo?
        if(item[idEquipDefOcupa]) { escudoEquipado = pacoteDeItem; maosDisponiveis--; escudo += item[idEquipDefBonus]; }
      // Armadura?
        else {
          armaduraEquipada = pacoteDeItem,
          armadura = item[idEquipDefBonus], pesada = item[idEquipDefPesad],   rigida = item[idEquipDefRigid];
          if(rigida)      { multiplicadorDeCorrida = Math.min(multDeCorridaRigida, multiplicadorDeCorrida); } 
          else if(pesada) { multiplicadorDeCorrida = Math.min(mulDeCorridaPesada,  multiplicadorDeCorrida); }
          else            { multiplicadorDeCorrida = Math.min(mulDeCorridaBasica,  multiplicadorDeCorrida); }
        }
      }      
    }
  // Ponto de Atributo Extra:
    contagem++; id = personagem[contagem];
    if(id > -1) { document.getElementById("checkbox_" + stringsDeAtributos[id] + "_extra").checked = true; 
                  cliqueModificadorUnicoDeAtributo(id, 8); }
  // Primeira Marca:
    contagem++; var primeiraMarca = personagem[contagem];
    if(primeiraMarca > 0) { if(primeiraMarca ==1) { _checkVida.checked = true; } 
                                             else { _checkMana.checked = true; }  cliquePrimeiraMarca(); }
  // Companheiro Animal, Montaria, Etc.
    contagem++;
    // TO DO
  // Atualiza os dependentes:
    atualizarDefesas();
    atualizarDeslocamento();
    atualizarHTMLDoInventario();
    atualizarRegistroDeRotulos();
    atualizarHTMLDosRotulosSelecionados();
    atualizarHabilidadesDisponiveis();
    atualizarHTMLDasHabilidadesPossuidas();
    selecionarFonteDeRotulos(1);
  // Transita para a Aba de Personagem:
    _barraDeNavegacao.style.top = "0px";
    _barraSuperior.style.top = "20px";
    abrirAba(1);    
  }


  function carregarAtributo(atributo, coluna, idColuna) {
    if(atributo == null) { return; }
    linha = atributo[0];
    if(linha > -1) { document.getElementById("checkbox_" + stringsDeAtributos[linha] + coluna).checked = true; 
                     cliqueModificadorDuploDeAtributo(linha, idColuna); }
    linha = atributo[1]; 
    if(linha > -1) { document.getElementById("checkbox_" + stringsDeAtributos[linha] + coluna).checked = true; 
                     cliqueModificadorDuploDeAtributo(linha, idColuna); }
  }


  function carregarEvolucao(evolucao, nivel) {
    if(evolucao == null) { return; } var linha = evolucao;
    document.getElementById("checkbox_" + stringsDeEvolucao[linha] + "_" + nivel).checked = true;
    cliqueEvolucao(linha, nivel);
  }


  function novoPersonagem() {
    personagens.push(JSON.parse(json_personagemZero()).personagem); atualizarHTMLDaListaDePersonagens();
  }


  function exportarPersonagem(id) {
  // Coleta os personagens:
    var personagem = personagens[id]; if(personagem == undefined | personagem == null) { return; }
    var saida = '{"personagem":[' + formatarJSONDePersonagem(personagem) + ']}';
  // Salva o pacote de personagens num arquivo pré-nomeado "fichas":
    var a = document.createElement('a');
    a.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(saida)); 
    a.setAttribute("download", personagem[2] + ".json");
    a.style.display = "none"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }


  function exportarPersonagens() {
  // Coleta os personagens:
    var saida = '{"personagens":[', quantidade = personagens.length;
    for(var i = 0; i < quantidade; i++) { saida += '[' + formatarJSONDePersonagem(personagens[i]) + '],'; }
    if(quantidade > 0) { saida = saida.slice(0,-1) } saida += ']}';
  // Salva o pacote de personagens num arquivo pré-nomeado "fichas":
    var a = document.createElement('a');
    a.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(saida)); 
    a.setAttribute("download", "fichas.json");
    a.style.display = "none"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }


  function importarArquivoDePersonagens(e) {
  // Abre o arquivo, se realmente for um arquivo e envia seu conteúdo para importação:
    var file = e.target.files[0]; if (!file) { return; }
    var reader = new FileReader();
    reader.onload = function(e) { var conteudo = e.target.result; importarPersonagens(conteudo); }; 
    reader.readAsText(file);
  }


  function importarPersonagens(conteudo) {
  // Verifica se o conteúdo do arquivo aberto possui apenas um ou vários personagens, e os carrega:
    var fichas = JSON.parse(conteudo).personagens;
    if(fichas == undefined) { personagens.push(JSON.parse(conteudo).personagem); }
    else { var quantidade = fichas.length; for(var i = 0; i < quantidade; i++) { personagens.push(fichas[i]); } }
  // Atualiza o HTML da lista com o(s) importado(s):
    atualizarHTMLDaListaDePersonagens();
  }


  function atualizarHTMLDaListaDePersonagens() {
    var html = "", quantidade = personagens.length, impar = true;
    for(var i = 0; i < quantidade; i++) {
      html += '<div class="elemento_';  if(impar) { html += 'im'; } impar = !impar;
      html += 'par"> <button class="botao_rem" onmouseup="removerPersonagem(' + i + ')"> X </button> <div class="ini_nome">' + personagens[i][2].slice(0,16) + '</div> <button class="botao_adi" onmouseup="exportarPersonagem(' + i + ')"> ⎘ </button> <button class="botao_dim" onmouseup="abrirPersonagem(' + i + ')"> ⎙ </div> </div>';
    }
    _listaDePersonagens.innerHTML = html;
  }


  function limparFicha() {
    _nomeDoJogador.value = ""; _nomeDoPersonagem.value = ""; _idade.value = 25; _motivacao.value = "";
    nivelDePersonagem = 1, idDaAbaDeRotulo = 0, rotuloSelecionado = idNulo,
    idsDeRotulosSelecionados = [idNulo,idNulo,idNulo,idNulo,idNulo,idNulo,idNulo,idNulo,idNulo],
    idDoUltimoRotuloMostrado = idNulo, 
    racaSelecionada     = undefined, classeSelecionada  = undefined, antecedenteSelecionado = undefined,
    aprendizSelecionado = undefined, caminhoSelecionado = undefined, organizacaoSelecionada = undefined,
    fonteExtraSelecionada = undefined, nomeDeFonteExtra = "",
    vida = 0, mana = 0, vidaBonus = 0, manaBonus = 0, vetorDeEvolucao = [0,0,0,0,0,0,0,0,0,0,0],
    atributosEModificadores = [[      0,      0,      0,      0], [modBloq,modBloq,modBloq,modBloq],
                               [modBloq,modBloq,modBloq,modBloq], [modBloq,modBloq,modBloq,modBloq],
                               [modBloq,modBloq,modBloq,modBloq], [modBloq,modBloq,modBloq,modBloq],
                               [modBloq,modBloq,modBloq,modBloq], [modBloq,modBloq,modBloq,modBloq],
                               [modBloq,modBloq,modBloq,modBloq], [modBloq,modBloq,modBloq,modBloq],
                               [      0,      0,      0,      0]],
    bitsDeAntecedente = 0, habilidadesModificadorasDeAtributos = [],
    idDaUltimaHabilidadeMostrada = idNulo, ultimaHabilidadeMostrada = undefined,
    idDogmaSelecionado = idNulo, idEspiritoAnimalSelecionado = idNulo,
    habilidadesNoSeletor = [], habilidadesAutomaticas  = [], habilidadesSelecionadas = [],
    habilidadesDisponiveis = [    3,    0,    0,    0,    0,    0,    0],
    habilidadesExtras      = [false,false,false,false,false,false, false],
    jaPossuiHabilidadeAutomatica = [false, false, false, false, false],
    idFonteDeHabilidades = 4, modificadoresDeMana = [], modificadoresDeDificuldade = [], 
    modificadoresAditivosDeDescricao = [], modificadoresMultiplicativosDeDescricao = [],
    itensNoMostruario = [], inventario = [], equipamentoExtra = "";
    if(moedasCustomizadas) { moedas = parseInt(document.getElementById("moedas_customizadas").value); }
                      else { moedas = moedasIniciais;                                                 }
    carga = 0, idCategoriaDeEquipamento = idNulo, guerreiroDeAco1 = false, guerreiroDeAco2 = false,
    equipandoAssesteMagico = 0, equipandoCerneArcano = 0, equipandoCerneMistico = 0,  equipandoFocoMagico = 0,
    armasEquipadas = [], quantidadeDeMaos = 2, maosDisponiveis = 2, 
    escudoEquipado = undefined, armaduraEquipada = undefined,
    ataquesDesarmados = [], ataquesArmados = [], modificadoresDeAtaque = [], modificadoresDeDano = [],
    habilidadePrecisao   = false, habilidadeAplicarForca = false, habilidadeIntuicao      = false,
    habilidadeGigantismo = false, habilidadeNanismo      = false, habilidadePrimeiraMarca = false,
    bloqueioBase   = bloqueioPadrao, esquivaBase  = esquivaPadrao, determinacaoBase  = 8,
    bloqueio       = 0,              esquiva      = 0,             determinacao      = 0,
    bloqueioBonus  = 0,              esquivaBonus = 0,             determinacaoBonus = 0,
    armadura = 0, armaduraNatural = 0, armadurasNaturais = [], escudo = 0, habilidadesModificadorasDeDefesa = [],
    cargaBasica = 0, cargaPesada = 0, cargaMaxima = 0, cargaBonus = 0,
    multiplicadorDeCarga         = 1, deslocamento           = 0, deslocamentoBonus             = 0,
    multiplicadorDeDeslocamento  = 1, multiplicadorDeCorrida = 4, multiplicadorNaturalDeCorrida = 4,
    iniciativa                   = 0, iniciativaBonus        = 0, dadosDeIniciativa = qtdDadosIni;
  // Inicialização:
    carregarHabilidades(idFontGeral); selecionarFonteDeHabilidades(idFontGeral); bloquearBonusDePrimeiraMarca();
    atualizarRaca(idNulo);     atualizarClasse(idNulo);  atualizarAntecedente(idNulo);
    atualizarAprendiz(idNulo); atualizarCaminho(idNulo); atualizarOrganizacao(idNulo);
    atualizarNivel(); atualizarMoedas(0);
    adicionarAtaqueDesarmado([idEquipNone, "Soco, Chute", 4, "CaC", true, 0]);
    atualizarAtaqueDefesaCarga(); atualizarIniciativa();
    selecionarCategoriaDeEquipamento(idEquipArma);
    selecionarFonteDeRotulos(idFontRaca_);
    atualizarHTMLDosRotulosSelecionados();
    htmlPadraoDoMostradorDeHabilidade();
    carregarHTMLInicialNoDetalhador(idNulo);
    desativarAtributosDeModificador(idAtAdapt, [modBloq, modBloq, modBloq, modBloq], true);
    desativarAtributosDeModificador(idAtExtra, [modBloq, modBloq, modBloq, modBloq], true);
    document.getElementById("botao_rotulo_" + idFontAntec).style = "display:none;";
    document.getElementById("botao_rotulo_" + idFontAprnd).style = "display:none;";
    document.getElementById("botao_rotulo_" + idFontCamin).style = "display:none;";
    document.getElementById("botao_habilidade_" + idFontExtra).style = "display:none;";
    document.getElementById("botao_habilidade_" + idFontDogma).style = "display:none;";
    document.getElementById("botao_habilidade_" + idFontEspAn).style = "display:none;";
  }



//// I N I C I A L // M A T E R I A L ////

  function novoMaterial() {
    ;
  }

  function importarMaterial() {
    ;
  }

  function atualizarHTMLDaListaDeMateriais() {
    var html = '';
    html += '<div class="elemento_impar"> <button class="botao_adi"> ✔ </button> <div class="ini_nome"> Manual Básico </div>  </div>'
          + '<div class="elemento_par">   <button class="botao_adi"> ✔ </button> <div class="ini_nome"> Guia do Herói </div> </div>'
          + '<div class="elemento_impar"> <button class="botao_adi"> ✔ </button> <div class="ini_nome"> Guia de Tebryn </div> </div>'
          + '<div class="elemento_par"> <button class="botao_des"> ✘ </button> <div class="ini_nome"> Seu Material Aqui </div> </div>'
    _listaDeMateriais.innerHTML = html;
  }



//// I N I C I A L // O P Ç Õ E S ////

  function atualizarHTMLDaListaDeOpcoes() {
    var html = '';
  //
    if(ignorarRequisitos) { 
      html += '<div class="elemento_impar"> <button class="botao_adi" onmouseup="cliqueIgnorarRequisitos()"> ✔';
    } else {
      html += '<div class="elemento_impar"> <button class="botao_rem" onmouseup="cliqueIgnorarRequisitos()"> ✘';
    }
    html += '</button> <div class="ini_nome"> Ignorar Requisitos </div> </div>';
  //
    if(habilidadesInfinitas) {
      html += '<div class="elemento_par"> <button class="botao_adi" onmouseup="cliqueHabilidadesInfinitas()"> ✔';
    } else {
      html += '<div class="elemento_par"> <button class="botao_rem" onmouseup="cliqueHabilidadesInfinitas()"> ✘';
    }
    html += '</button> <div class="ini_nome"> Habilidades Infinitas </div> </div>';
  //
    if(qualidadesEMateriais) {
      html += '<div class="elemento_impar"> <button class="botao_des" onmouseup="cliqueQualidadesEMateriais()"> ✘';
    } else {
      html += '<div class="elemento_impar"> <button class="botao_des" onmouseup="cliqueQualidadesEMateriais()"> ✘';
    }
    html += '</button> <div class="ini_nome"> Menu Qualidades & Materiais </div> </div>';
  //
    if(cargaAlternativa) {
      html += '<div class="elemento_par"> <button class="botao_des" onmouseup="cliqueCargaAlternativa()"> ✘';
    } else {
      html += '<div class="elemento_par"> <button class="botao_des" onmouseup="cliqueCargaAlternativa()"> ✘';
    }
    html += '</button> <div class="ini_nome"> Usar Carga Alternativa </div> </div>';
  //
    if(moedasCustomizadas) {
      html += '<div class="elemento_impar"> <button class="botao_adi" onmouseup="cliqueMoedasCustomizadas()"> $ </button> <div class="ini_moedas"> Moedas Iniciais: </div> <input id="moedas_customizadas" type="number" value="400" min="0" max="9999">  </div>';
    } else {
      html += '<div class="elemento_impar"> <button class="botao_dim" onmouseup="cliqueMoedasCustomizadas()"> $ </button> <div class="ini_nome"> Moedas Iniciais: 400 </div> </div>';
    }


    _listaDeOpcoes.innerHTML = html;
  }


  function cliqueIgnorarRequisitos() {
    ignorarRequisitos = !ignorarRequisitos;  atualizarHTMLDaListaDeOpcoes();
    atualizarHTMLDosRotulosSelecionados(); atualizarHTMLDoSeletorDeHabilidades(); atualizarRegistroDeRotulos();
  }


  function cliqueHabilidadesInfinitas() {
    habilidadesInfinitas = !habilidadesInfinitas;  atualizarHTMLDaListaDeOpcoes();
    atualizarHTMLDosRotulosSelecionados(); atualizarHTMLDoSeletorDeHabilidades();
  }


  function cliqueQualidadesEMateriais() {
    qualidadesEMateriais = !qualidadesEMateriais;  atualizarHTMLDaListaDeOpcoes();
  }


  function cliqueCargaAlternativa() {
    cargaAlternativa = !cargaAlternativa;  atualizarHTMLDaListaDeOpcoes();
  }


  function cliqueMoedasCustomizadas() { //$$$
    moedasCustomizadas = !moedasCustomizadas;  atualizarHTMLDaListaDeOpcoes();
  }


//// N A V E G A Ç Ã O ////

  document.onkeydown = checaChave;
  function checaChave(e) { //38 Up, 40 Down, 37 Left, 39 Right
  // A aba inicial ignora troca de abas:
    if(abaAberta == 0) { return; }
    var botaoAnterior = botoesAbas[abaAberta];
    e = e || window.event;
  // Navega entre abas ao se apertar as setas para direita e esquerda:
    if (e.keyCode == '37') {
      abas[abaAberta].classList.remove('esquerda');
      abas[abaAberta].classList.add('direita');
      abaAberta--; 
      if(abaAberta < 1) { abaAberta = 5; }
      abas[abaAberta].classList.remove('esquerda');
      abas[abaAberta].classList.remove('direita');
    } else if (e.keyCode == '39') {
      abas[abaAberta].classList.add('esquerda');
      abas[abaAberta].classList.remove('direita');
      abaAberta++; if(abaAberta > 5) { abaAberta = 1; } 
      abas[abaAberta].classList.remove('esquerda');
      abas[abaAberta].classList.remove('direita');
    } else { return; } 
  // Atualiza os botões de aba:
    botaoAnterior.classList.remove("botao_aba_aberta");
    botoesAbas[abaAberta].classList.add("botao_aba_aberta");
  // Previsualiza as instruções ao abrir a aba de "Exportar":
    if(abaAberta == 5) { previsualizarArquivo(-1); }
  }


  function abrirAba(id) {
  // Fecha a aba atual:
    if(botoesAbas[abaAberta].classList != undefined) { botoesAbas[abaAberta].classList.remove("botao_aba_aberta"); }
    abas[abaAberta].classList.add('direita');
    abas[abaAberta].classList.remove('esquerda');
  // Abre a nova aba indicada pelo id:
    abaAberta = id;
    if(botoesAbas[abaAberta].classList != undefined) { botoesAbas[abaAberta].classList.add("botao_aba_aberta"); }
    abas[abaAberta].classList.remove('direita');
    abas[abaAberta].classList.remove('esquerda');
  // Previsualiza as instruções ao abrir a aba de "Exportar":
    if(abaAberta == 5) { previsualizarArquivo(-1); }
  }


  function voltarParaTelaInicial() {
    idDoPersonagemAberto = -1;
    _barraDeNavegacao.style.top = "-100px";
    _barraSuperior.style.top = "0px";
    abrirAba(0);
  }



//// S A L V A R   &   E X P O R T A R ////

  function salvarPersonagem() {
    var quantidade = personagens.length;
    personagens[idDoPersonagemAberto] = JSON.parse(salvarJSON()).personagem;
    atualizarHTMLDaListaDePersonagens();
  }
 

  function formatarJSONDePersonagem(personagem) {
  // Contexto [0 à 5]:
    var saida = '[],"' + personagem[1] + '","' + personagem[2] + '",'
              + '"' + personagem[3] + '","' + personagem[4] + '",' + personagem[5] + ',';
  // Rótulos [6 à 11]:
    if(personagem[ 6] != null) { saida += '[' + personagem[ 6][0] + ',"' + personagem[ 6][1] + '"],'; }
                          else {saida += 'null,'; }
    if(personagem[ 7] != null) { saida += '[' + personagem[ 7][0] + ',"' + personagem[ 7][1] + '"],'; }
                          else {saida += 'null,'; }
    if(personagem[ 8] != null) { saida += '[' + personagem[ 8][0] + ',"' + personagem[ 8][1] + '"],'; }
                          else {saida += 'null,'; }
    if(personagem[ 9] != null) { saida += '[' + personagem[ 9][0] + ',"' + personagem[ 9][1] + '"],'; }
                          else {saida += 'null,'; }
    if(personagem[10] != null) { saida += '[' + personagem[10][0] + ',"' + personagem[10][1] + '"],'; }
                          else {saida += 'null,'; }
    if(personagem[11] != null) { saida += '[' + personagem[11][0] + ',"' + personagem[11][1] + '"],'; }
                          else {saida += 'null,'; }
  // Atributos [12 à 17]:
    saida += personagem[12] + "," + personagem[13] + ",";
    if(personagem[14] != null) { saida += '[' + personagem[14][0] + ',' + personagem[14][1] + '],'; }
                          else { saida += 'null,'; }
    if(personagem[15] != null) { saida += '[' + personagem[15][0] + ',' + personagem[15][1] + '],'; }
                          else { saida += 'null,'; }
    if(personagem[16] != null) { saida += '[' + personagem[16][0] + ',' + personagem[16][1] + '],'; }
                          else { saida += 'null,'; }
  // Evolução [17 ~29]:
    saida += personagem[17] + "," + personagem[18] + "," + personagem[19] + "," + personagem[20] + ","
           + personagem[21] + "," + personagem[22] + "," + personagem[23] + "," + personagem[24] + ","
           + personagem[25] + "," + personagem[26] + "," + personagem[27] + "," + personagem[28] + "," 
           + personagem[29] + "," ;
  // Habilidades [30+]:
    var i = 30;
    while(personagem[i] != null) {
      saida += '[' + personagem[i][0] + ',' + personagem[i][1] + ',"' + personagem[i][2] + '"' + '],';  i++;
    }
    saida += 'null,'; i++;
  // Dogma, Espírito Animal, etc:
    saida += "[";
  //// Dogma:
    var p = personagem[i][0];
    if(p != null) { saida += '[' + p[0] + ',' + p[1] + ',"' + p[2] + '"],'; } else { saida += 'null,'; }
  //// Espírito Animal:
    p = personagem[i][1];
    if(p != null) { saida += '[' + p[0] + ',' + p[1] + ',"' + p[2] + '"],'; } else { saida += 'null,'; }
    saida += "null],"; i++;
  // Equipamento:
    while(personagem[i] != null) {
      saida += '[' + personagem[i][0] + ','  + personagem[i][1] + ',' + personagem[i][2] + ','
                   + personagem[i][3] + ',"' + personagem[i][4] + '"' + '],';  i++;
    }
    saida += 'null,'; i++;
  // Ponto de Atributo Extra & Primeira Marca:
    saida += personagem[i++] + ',' + personagem[i] + ",";
  // Companheiro Animal, Montaria, Etc.
    saida += "[]";
    // TO DO
  // Retorna!
    return saida;
  }

  
  function salvarJSON() {
    var saida = '{"personagem":[[],' + '"' + _nomeDoJogador.value.replace('"','\"') + '","' + _nomeDoPersonagem.value.replace('"','\"') + '","' + _idade.value + '","' + _motivacao.value.replace('"','\"') + '",' + nivelDePersonagem + ',';
  // Rótulos:
    if(racaSelecionada == null) { saida += "null,"; }
      else { saida += "[" + idsDeRotulosSelecionados[idFontRaca_] + ",\"" + racaSelecionada.nome + "\"],"; }
    if(classeSelecionada == null) { saida += "null,"; }
      else { saida += "[" + idsDeRotulosSelecionados[idFontClass] + ",\"" + classeSelecionada.nome + "\"],"; }
    if(antecedenteSelecionado == null) { saida += "null,"; }
      else {  saida += "[" + idsDeRotulosSelecionados[idFontAntec] + ",\"" + antecedenteSelecionado.nome + "\"],"; }
    if(aprendizSelecionado == null) { saida += "null,"; }
      else {  saida += "[" + idsDeRotulosSelecionados[idFontAprnd] + ",\"" + aprendizSelecionado.nome + "\"],"; }
    if(caminhoSelecionado == null) { saida += "null,"; }
      else {  saida += "[" + idsDeRotulosSelecionados[idFontCamin] + ",\"" + caminhoSelecionado.nome + "\"],"; }
    if(organizacaoSelecionada == null) { saida += "null,"; }
      else { saida += "[" + idsDeRotulosSelecionados[idFontOrgan] + ",\"" + organizacaoSelecionada.nome + "\"],"; }
  // Adaptabilidade:
    var adaptabilidade = atributosEModificadores[idAtAdapt];
         if(adaptabilidade[idFOR] == 1) { saida += "0,"; } else if(adaptabilidade[idAGI] == 1) { saida += "1,"; }
    else if(adaptabilidade[idINT] == 1) { saida += "2,"; } else if(adaptabilidade[idVON] == 1) { saida += "3,"; }
    else                                { saida +="-1,"; }
  // Antecedente:
    var antecedente = atributosEModificadores[idAtAntec];
         if(antecedente[idFOR] == -1) { saida += "0,"; } else if(antecedente[idAGI] == -1) { saida += "1,"; }
    else if(antecedente[idINT] == -1) { saida += "2,"; } else if(antecedente[idVON] == -1) { saida += "3,"; }
    else                              { saida +="-1,"; }
  // Atributos:
    if(nivelDePersonagem > 3) { saida += salvarAtributoDeNivel(idAtNivl4);
      if(nivelDePersonagem > 6) { saida += salvarAtributoDeNivel(idAtNivl7);
        if(nivelDePersonagem > 9) { saida += salvarAtributoDeNivel(idAtNvl10);
        } else { saida += "null,"; }
      } else { saida += "null,null,"; }
    } else { saida += "null,null,null,"; }
  // Evolução:
    for(var n = 2; n < 15; n++) {
      if(nivelDePersonagem >= n) {
        switch(vetorDeEvolucao[n] & 31) {
          case 0:  saida += "null,"; break;   case 1: saida += "1,"; break;
          case 2:  saida +=    "2,"; break;   case 4: saida += "3,"; break;
          case 8:  saida +=    "4,"; break;  case 16: saida += "5,"; break;
        }
      } else { saida += "null,"; }
    }
  // Habilidades:
    var quantidade = habilidadesSelecionadas.length;
    for(var i = 0; i < quantidade; i++) {
      var h = habilidadesSelecionadas[i], nomeDaHabilidade = h[idHabPosHabil].nome;
      if(nomeDaHabilidade.search("Dogma:") == -1 & nomeDaHabilidade.search("Espírito Animal:") == -1) {
        saida += "[" + h[idHabPosIDLst] + "," + h[idHabPosFonte] + ",\"" + nomeDaHabilidade + "\"],"; }
    }
    saida += "null,";
  // Dogma, Espírito Animal, etc:
    saida += "[";
  //// Dogma Selecionado:
    if(idDogmaSelecionado >= 0) {
      saida += "[" + idDogmaSelecionado + "," + idFontDogma + ",\"" + habilidadesDeDogma[idDogmaSelecionado].nome + "\"],";
    } else { saida += "null,"; };
  //// Espírito Animal Selecionado:
    if(idEspiritoAnimalSelecionado >= 0) {
      saida += "[" + idEspiritoAnimalSelecionado + "," + idFontEspAn + ",\"" + habilidadesDeEspiritoAnimal[idEspiritoAnimalSelecionado].nome + "\"],";
    } else { saida += "null,"; };
    saida += "null],";
  // Equipamentos:
    quantidade = inventario.length;
    for(var i = 0; i < quantidade; i++) {
      var item = inventario[i];
      saida += "[" + item[idDoItem] + "," + item[idCategoria] + "," + item[idQuantidade] + "," + item[idEquip] + ",\"" + item[idItem][idEquipNome] + "\"],";
    }
    saida += "null,";
  // Ponto Extra:
   var pontoExtra = atributosEModificadores[idAtExtra];
         if(pontoExtra[idFOR] == 1) { saida += "0,"; } else if(pontoExtra[idAGI] == 1) { saida += "1,"; }
    else if(pontoExtra[idINT] == 1) { saida += "2,"; } else if(pontoExtra[idVON] == 1) { saida += "3,"; }
    else                            { saida +="-1,"; }
  // Primeira Marca:
         if(_checkVida.checked) { saida += "1,"; } 
    else if(_checkMana.checked) { saida += "2,"; }
                           else { saida += "0,"; }
  // Companheiro Animal, Montaria, Etc
    saida += "[]"
    // TO DO
  // E retorna!
    return saida + ']}';
  }

  function salvarAtributoDeNivel(idNivel) {
    var nivel = atributosEModificadores[idNivel]; var c = 0; var saida = "[";
    if(nivel[idFOR] == 1) { saida += "0,"; c++; }  if(nivel[idAGI] == 1) { saida += "1,"; c++; }
    if(nivel[idINT] == 1) { saida += "2,"; c++; }  if(nivel[idVON] == 1) { saida += "3,"; c++; }
    switch(c) { case 0: saida += "-1,-1]"; break; case 1: saida += "-1],"; break; 
                case 2: saida = saida.slice(0,-1) + "],"; break; }
    return saida;
  }



//// A B A // E X P O R T A R ////

  function previsualizarArquivo(id) {
    switch(id) {
      case 0:  visualizarTexto(fichaJSON);    break;
      case 1:  visualizarTexto(fichaTXT);     break;
      case 2:  visualizarFichaSimplificada(); break;
      case 3:  visualizarFichaAvancadaA();    break;
      case 4:  visualizarFichaAvancadaB();    break;
      default: visualizarInstrucoes(); fichaJSON = salvarJSON(); criarFichaTXT(); break;
    }
  }


  function visualizarInstrucoes() {
    _visualizador.innerHTML = '<div id="exportador-instrucoes"> <b> Instruções do Exportador: </b> <br/> <br/> <b>●</b> Posicione o cursor sobre algum formato listado para pré-visualizá-lo. <br/> <b>●</b> Clique nos botões de "↓" para fazer download dos arquivos no respectivo formato. <br/> <b>●</b> Se preferir, copie e cole os textos ou imagens num editor apropriado de sua preferência e então salve-os manualmente. <br/> <br/> <b> Formatos: </b> <br/> <i> <u> Arquivo JSON: </u> </i> É o arquivo utilizado para exportação e importação de personagens. <br/> <i> <u> Ficha TXT: </u> </i> Uma versão compacta da ficha em texto puro. <br/> <i> <u> Ficha PNG: </u> </i> Exporta a ficha como imagem .png, disponível na forma de Ficha Simplificada e Ficha Avançada (em duas partes). <br/> <br/> <br/> <b> Observação: </b> <br/> A descrição resumida das habilidades ainda não foi revisada. Entre em contato com o desenvolvedor se desejar auxiliar, reportar erros ou fazer sugestões. Tanto para as decrições quanto para o aplicativo em si. <br/> <br/> <b> Links: </b> <br/> ● <a href="https://docs.google.com/spreadsheets/d/1xCKJNWxr2XFWrBRGqyk0cM-qd6I2ziy78Dbj-nL3VUg/">Google Sheets com os resumos </a> <br/> ● <a href="https://coisinhaverde.com.br/mightyblade/topico/348"> Tópico no Fórum </a> <br/> ● <a href="https://coisinhaverde.com.br/mightyblade/topico/228"> Tópico do Grupo de Whatsapp dos Exploradores da Dragon Cave </a> <br/> ● <a href=\"mailto:eduardochequettomachado@gmail.com?Subject=BUG\" target=\"_top\"> Email do Desenvolvedor </a> </div>';
    _resumo.innerHTML = "";
  }


  function visualizarTexto(texto) {
    _visualizador.innerHTML = "<div id=\"exportador-conteudo\"> <textarea id=\"exportador-texto\">" + texto + "</textarea> </div>";
    _resumo.innerHTML = texto;
  }


  function downloadJSON() {
  // Salva o arquivo do personagem aberto atualmente com o nome do Personagem (se preenchido):
   var a = document.createElement('a');
    a.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(salvarJSON()));
    if(_nomeDoPersonagem.value.length > 0) { a.setAttribute("download", "" + _nomeDoPersonagem.value.trim() + ".json"); }
                                      else { a.setAttribute("download", "ficha.json"); }
    a.style.display = "none"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }


  function downloadTXT() {
  // Cria um elemento, carrega o texto, adiciona no documento, baixa como arquivo e remove o elemento:
    var a = document.createElement('a');
    a.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(document.getElementById("exportador-texto").value));
    if(nomeDoPersonagem.length > 0) { a.setAttribute("download", "" + nomeDoPersonagem.trim() + ".txt"); }
                               else { a.setAttribute("download", "ficha.txt"); }
    a.style.display = "none"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }


  function downloadPNG(extra) {
    var a = document.createElement('a');
    a.download = "" + nomeDoPersonagem.trim() + "_" + extra + ".png";
    a.href = document.getElementById("ficha_desenhada").toDataURL();
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }



//// T X T ////

  function criarFichaTXT() {
    fichaTXT = "";
    var espacoEmBranco = "                                        ", quantidade = 0, saida = "";
    nomeDoPersonagem = document.getElementById("nome_personagem").value;
    nomeDoJogador = document.getElementById("nome_jogador").value;
    idade = document.getElementById("idade").value;
    motivacao = document.getElementById("motivacao").value;
    if(nomeDoJogador.length > 0) { fichaTXT += "Jogador:" + nomeDoJogador + "\n\n"; }
    if(nomeDoPersonagem.length > 0) { fichaTXT += nomeDoPersonagem + ", " + idade + " anos\n" }
    if(motivacao.length > 0) { fichaTXT += "\"" + motivacao + "\""; }
    fichaTXT += "\n";
    if(racaSelecionada        != undefined) { fichaTXT += racaSelecionada.nome;                                }
    if(classeSelecionada      != undefined) { fichaTXT += " " + classeSelecionada.nome;                        }
    if(antecedenteSelecionado != undefined) { fichaTXT += ",\n de antecedente " + antecedenteSelecionado.nome; }
    if(aprendizSelecionado    != undefined) { fichaTXT += ",\n aprendiz de " + aprendizSelecionado.nome;       }
    if(caminhoSelecionado     != undefined) { fichaTXT += ",\n no caminho de " + caminhoSelecionado.nome;      }
    if(organizacaoSelecionada != undefined) { fichaTXT += ",\n associado d@ " + organizacaoSelecionada.nome;   }
    var observacaoSobreDefesas = "";
    if(habilidadesModificadorasDeDefesa.length > 0) {
      observacaoSobreDefesas = "  (Obs: modificadores condicionais não aplicados)";
    }
    var atributos = atributosEModificadores[idAtTotal];
    fichaTXT += "\n";
    fichaTXT += "\nNível " + nivelDePersonagem + "\n"
           + ".Vida:         " + vida                                    + "\n"
           + ".Mana:         " + mana                                    + "\n"
           + ".Iniciativa:   " + iniciativa                              + "\n"
           + ".Deslocamento: " + deslocamento                            + "\n"
           + ".Corrida:      " + (deslocamento * multiplicadorDeCorrida) + "\n"
           + ".Carga:        " + cargaMostrada + "/" + cargaMaxima       + "\n"
           + "\nAtributos\n"
           + ".Força:        " + atributos[idFOR] + "\n"
           + ".Agilidade:    " + atributos[idAGI] + "\n"
           + ".Inteligência: " + atributos[idINT] + "\n"
           + ".Vontade:      " + atributos[idVON] + "\n"
           + "\nDefesas"       + observacaoSobreDefesas + "\n"
           + ".Bloqueio:     " + bloqueio               + "\n"
           + ".Esquiva:      " + esquiva                + "\n"
           + ".Determinação: " + determinacao           + "\n"
           + "\nAtaques             tipo             alc. dano \n"
           + exportarAtaquesTXT(ataquesDesarmados) + exportarAtaquesTXT(ataquesArmados)
           + "\nHabilidades                       dif.  mana  desc.\n"
           + exportarHabilidadesTXT(habilidadesAutomaticas) + exportarHabilidadesTXT(habilidadesSelecionadas)
           + "\nEquipamentos                            qtd.  peso   custo\n"
           + exportarEquipamentoTXT()
           + "\nMoedas: " + moedas;
  }


  function exportarAtaquesTXT(lista) {
    var saida = "", espacoNome       = "                    ", espacoTipoDeDano = "               ", 
        quantidade = lista.length, atributos = atributosEModificadores[idAtTotal];
    for(var i = 0; i < quantidade; i++) {
      var ataque     = lista[i],       nome = ataque[idAtqNome],       tipoDeDano = ataque[idAtqTipD], 
          alcance = ataque[idAtqAlcn], bonusForca = ataque[idAtqBFOR], dano = ataque[idAtqDano];
    // Bônus de Força?
      if(ataque[idAtqBFOR]) {
        if(habilidadePrecisao) { dano += Math.max(atributos[idAGI], atributos[idINT]); }
                          else { dano += atributos[idFOR]; }
      }
    // Aplica modificadores:
      nome += bonusDeAtaquePorHabilidade(modificadoresDeAtaque, tipoDeDano, nome, alcance);
      dano += bonusDeDanoPorHabilidade(modificadoresDeDano, tipoDeDano,nome, alcance);
    // Ajusta na string:
      var stringDeDano = stringsDeTipoDeDano[tipoDeDano];
      saida += "." + nome + espacoNome.slice(0,-(nome.length))
                 + stringDeDano + espacoTipoDeDano.slice(0, -(stringDeDano.length));
      if(alcance.length <= 1) { saida += " "; }
      saida += " " + alcance + "  ";
      if(dano.toString().length <= 1) { saida += " "; }
      saida += " " + dano + "\n";
    }
    return saida;
  }


  function exportarHabilidadesTXT(lista) {
    var espacoNome = "                                ", saida = "";
    var quantidade = lista.length;
    for(var i = 0; i < quantidade; i++) {
      var habilidade    = lista[i][0];
      var nome          = habilidade.nome;
      if(nome != "Dogma" & nome != "Espírito Animal") {
        var categoria   = habilidade.categoria, tipo = habilidade.tipo, descricao = habilidade.descricao,
        dificuldade = aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.dificuldade, dificuldadeMinima, modificadoresDeDificuldade),
        mana = aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.mana, custoDeManaMinimo, modificadoresDeMana),
        resumo = habilidade.resumo;
        _resumo.innerHTML = resumo;  aplicarModificadoresDeDescricao(habilidade);
        resumo = exportarResumoDeHabilidade(_resumo.innerHTML);
        saida += "." + nome + espacoNome.slice(0,-(nome.length));
        if(dificuldade == 0)        { saida += "   -  ";                                  }
        else if (dificuldade == -1) { saida += " Varia";                                  }
        else { if(dificuldade < 10) { saida += " "; } saida += "  " + dificuldade + "  "; }
        if(mana == 0)         { saida += "   -  ";                                                   }
        else if(mana == -1)   { saída += " Varia";                                                   }
        else { if(mana < 100) { saida += " "; } if(mana < 10) { saida += " "; } saida += " " + mana; }
        saida += "  " + resumo + "\n";
      }
    }
    return saida;
  }


  function exportarEquipamentoTXT() {
    var saida = "", espacoNome = "                                        ", espacoMenor = "     ";
    var quantidadeDeItens = inventario.length;
    for(var i = 0; i < quantidadeDeItens; i++) {
      var item = inventario[i];
      var quantidade = item[idQuantidade];
      item = item[idItem];
      var nome = item[idEquipNome], peso = item[idEquipPeso], custo = item[idEquipCsto];
      saida += "." + nome + espacoNome.slice(0,-(nome.length)) + "x" + quantidade;
      if(quantidade < 10) { saida += " "; }
      saida += "  " + peso  + espacoMenor.slice(0,-(peso.toString().length)) + "  "
             + espacoMenor.slice(0,-(custo.toString().length)) + custo + "\n";
    }
    return saida;
  }



//// P N G ////

  function visualizarFichaSimplificada() {
    _visualizador.innerHTML = "<div id=\"exportador-imagem\"> <div id=\"exportador-scroll\"> <canvas id=\"ficha_desenhada\" width=\"948px\" height=\"1352px\"> </canvas> </div> </div> </div>";
    var canvas = document.getElementById("ficha_desenhada"), ctx = canvas.getContext("2d"),
        img = document.getElementById("fichaC"); ctx.drawImage(img, 10, 10);
    exportarPNG_Cabecalho(ctx, false);
    exportarPNG_VidaEMana(ctx);
    exportarPNG_Atributos(ctx);
    exportarPNG_DeslocamentoECorrida(ctx);
    exportarPNG_Carga(ctx);
    exportarPNG_Defesas(ctx);
    exportarPNG_Protecao(ctx);
    exportarPNG_Ataques(ctx, ataquesDesarmados, 0);
    exportarPNG_Ataques(ctx, ataquesArmados,    ataquesDesarmados.length);
    exportarPNG_HabilidadesSimplificadas(ctx, habilidadesAutomaticas,  0);
    exportarPNG_HabilidadesSimplificadas(ctx, habilidadesSelecionadas, habilidadesAutomaticas.length);
    var linEqp = 858, espEqp = 31, colNom = 485, colPes = 783, colCst = 833, xMoedas = colNom, yMoedas = 1254;
    exportarPNG_Equipamentos(ctx, linEqp, espEqp, colNom, colPes, colCst, xMoedas, yMoedas, 13);
  }


  function visualizarFichaAvancadaA() {
    _visualizador.innerHTML = "<div id=\"exportador-imagem\"> <div id=\"exportador-scroll\"> <canvas id=\"ficha_desenhada\" width=\"948px\" height=\"1352px\"> </canvas> </div> </div> </div>";
    var canvas = document.getElementById("ficha_desenhada"),  ctx = canvas.getContext("2d"),
        img = document.getElementById("fichaA"); ctx.drawImage(img, 10, 10);
    exportarPNG_Cabecalho(ctx, true);
    exportarPNG_VidaEMana(ctx);
    exportarPNG_Atributos(ctx);
    exportarPNG_DeslocamentoECorrida(ctx);
    exportarPNG_Carga(ctx);
    exportarPNG_Defesas(ctx);
    exportarPNG_Protecao(ctx);
    exportarPNG_Ataques(ctx, ataquesDesarmados, 0);
    exportarPNG_Ataques(ctx, ataquesArmados,    ataquesDesarmados.length);
    exportarPNG_Habilidades(ctx, habilidadesAutomaticas,  0);
    exportarPNG_Habilidades(ctx, habilidadesSelecionadas, habilidadesAutomaticas.length);
  }


  function visualizarFichaAvancadaB() {
    _visualizador.innerHTML = "<div id=\"exportador-imagem\"> <div id=\"exportador-scroll\"> <canvas id=\"ficha_desenhada\" width=\"948px\" height=\"1352px\"> </canvas> </div> </div> </div>";
    var canvas = document.getElementById("ficha_desenhada"),  ctx = canvas.getContext("2d"),
        img = document.getElementById("fichaB"); ctx.drawImage(img, 10, 10);
    var linEqp = 168, espEqp = 30, colNom = 65, colPes = 501, colCst = 553, xMoedas = 700, yMoedas = 800;
    exportarPNG_Equipamentos(ctx, linEqp, espEqp, colNom, colPes, colCst, xMoedas, yMoedas, 22);
  }


  function exportarPNG_Cabecalho(ctx, avancada) {
    nomeDoPersonagem = document.getElementById("nome_personagem").value;
    nomeDoJogador = document.getElementById("nome_jogador").value;
    idade = document.getElementById("idade").value;
    motivacao = document.getElementById("motivacao").value;
  // Comum à Ficha Avançada e Simplificada:
    var linha1 = 98, linha2 = 130, linha3 = 160, linha4 = 190, linha5 = 220; 
    ctx.font = "20px " + fonte;
    ctx.fillText(nomeDoPersonagem, 160, linha1);
    ctx.fillText(nomeDoJogador, 130, linha2);
    if(idade > 99) { ctx.font = "15px " + fonte; ctx.fillText("" + idade, 110, linha4); }
              else { ctx.fillText("" + idade, 113, linha4); }
    ctx.font = "20px " + fonte;
    ctx.fillText(motivacao, 150, linha5);
  // 
    var xNivel = 185, xNivlX = 180, xClasse = 480;
  // Exclusivo da Ficha Avançada:
    if(avancada) {
      if(racaSelecionada != undefined) { ctx.fillText("" + racaSelecionada.nome, 110, linha3); }
      if(antecedenteSelecionado != undefined) {
        var antecedente = antecedenteSelecionado.nome;
        if(antecedente.length > 9) { ctx.font = "17px " + fonte; }
        ctx.fillText(antecedenteSelecionado.nome, 300, linha4);
      }
    }
  // Exclusivo da Ficha Simplificada: 
    else {
      xNivel = 585, xNivlX = 580, xClass = 420;
      var racaEAntecedente = "";
      if(racaSelecionada != undefined) { racaEAntecedente += racaSelecionada.nome; }
      if(antecedenteSelecionado != undefined) { racaEAntecedente += ", " + antecedenteSelecionado.nome; }
      ctx.fillText("" + racaEAntecedente, 110, linha3);
    }
    ctx.font = "15px " + fonte;
    if(classeSelecionada == undefined) {
      if(caminhoSelecionado != undefined) { ctx.fillText("/" + caminhoSelecionado.nome, xClasse, linha3); }
    } else {
      if(caminhoSelecionado == undefined) {     ctx.fillText("" + classeSelecionada.nome, xClasse, linha3); }
        else {  ctx.fillText("" + classeSelecionada.nome + "/" + caminhoSelecionado.nome, xClasse, linha3); }
    }
    if(aprendizSelecionado != undefined) {
      ctx.font = "12px " + fonte;  ctx.fillText("Aprendiz de " + aprendizSelecionado.nome, xClasse, linha3 - 14);
    }
    ctx.font = "20px " + fonte;
    if(nivelDePersonagem > 9) { ctx.fillText(nivelDePersonagem, xNivlX, linha4); } 
                         else { ctx.fillText(nivelDePersonagem, xNivel, linha4); }
  }


  function exportarPNG_VidaEMana(ctx) {
    var linVeM = 310, colVid = 90, colMna = 210, espVeM = 8;
    var fntVeM2 = "30px " + fonte, fntVeM3 = "27px " + fonte; 
    if(vida > 99) { ctx.font = fntVeM3; ctx.fillText("" + vida, colVid,          linVeM); }
             else { ctx.font = fntVeM2; ctx.fillText("" + vida, colVid + espVeM, linVeM); }
    if(mana > 99) { ctx.font = fntVeM3; ctx.fillText("" + mana, colMna,          linVeM); }
             else { ctx.font = fntVeM2; ctx.fillText("" + mana, colMna + espVeM, linVeM); }
  }


  function exportarPNG_Atributos(ctx) {
    var colAtb = 347, clXAtb = 333, linAtb = 285, espAtb = 77, fntAtb = 40,
        atributos = atributosEModificadores[idAtTotal];
    var aFOR = atributos[idFOR], aAGI = atributos[idAGI], aINT = atributos[idINT], aVON = atributos[idVON];
    ctx.font = "" + fntAtb + "px " + fonte;
    if(aFOR > 9) { ctx.fillText("" + aFOR, clXAtb, linAtb);              } 
            else { ctx.fillText("" + aFOR, colAtb, linAtb);              }
    if(aAGI > 9) { ctx.fillText("" + aAGI, clXAtb, linAtb +     espAtb); }
            else { ctx.fillText("" + aAGI, colAtb, linAtb +     espAtb); }
    if(aINT > 9) { ctx.fillText("" + aINT, clXAtb, linAtb + 2 * espAtb); }
            else { ctx.fillText("" + aINT, colAtb, linAtb + 2 * espAtb); }
    if(aVON > 9) { ctx.fillText("" + aVON, clXAtb, linAtb + 3 * espAtb); }
            else { ctx.fillText("" + aVON, colAtb, linAtb + 3 * espAtb); }
  }


  function exportarPNG_DeslocamentoECorrida(ctx) {
    var linMov = 525, colMov = 108, cl2Mov = 228;
    corridaTotal = (deslocamento * multiplicadorDeCorrida);
    ctx.font = "25px " + fonte;
    if(deslocamento > 9) { ctx.fillText(deslocamento, colMov-8, linMov); }
                    else { ctx.fillText(deslocamento, colMov,   linMov); }
    if(corridaTotal > 9) { ctx.fillText(corridaTotal, cl2Mov-8, linMov); }
                    else { ctx.fillText(corridaTotal, cl2Mov,   linMov); }
  }


  function exportarPNG_Carga(ctx) {
    var colCrg = 702, cl2Crg = 766, cl3Crg = 837, linCrg = 490;
    ctx.font = "20px " + fonte;
    if(cargaBasica > 99)  { ctx.fillText("" + cargaBasica, colCrg-7, linCrg); }
                     else { ctx.fillText("" + cargaBasica, colCrg, linCrg); }
    if(cargaPesada > 99)  {                             ctx.fillText("" + cargaPesada, cl2Crg, linCrg); }
                     else {                             ctx.fillText("" + cargaPesada, cl2Crg, linCrg); }
    if(cargaMaxima > 999) { ctx.font = "16px " + fonte; ctx.fillText("" + cargaMaxima, cl3Crg, linCrg); }
                     else {                             ctx.fillText("" + cargaMaxima, cl3Crg, linCrg); }    
  }


  function exportarPNG_Defesas(ctx) {
    var linDef = 630, colDef = 157, clxDef = 145, espDef = 120;
    ctx.font = "35px " + fonte;
    if(bloqueio > 9)     { ctx.fillText("" + bloqueio,     clxDef,              linDef); }
                    else { ctx.fillText("" + bloqueio,     colDef,              linDef); }
    if(esquiva > 9)      { ctx.fillText("" + esquiva,      clxDef +     espDef, linDef); }
                    else { ctx.fillText("" + esquiva,      colDef +     espDef, linDef); }
    if(determinacao > 9) { ctx.fillText("" + determinacao, clxDef + 2 * espDef, linDef); }
                    else { ctx.fillText("" + determinacao, colDef + 2 * espDef, linDef); }
  }


  function exportarPNG_Protecao(ctx) {
    var linPrt = 699, espPrt = 21, colPrt = 70, colPTp = 290, colPDf = 412, y = 0; ctx.font = "18px " + fonte;
    
    var posicao = 0, pacoteDeItem, item, equipado;
    if(armaduraEquipada != undefined) {
      item = armaduraEquipada[idItem];           ctx.fillText(item[idEquipNome], colPrt, linPrt);
      ctx.fillText("Armadura", colPTp, linPrt);  ctx.fillText("+" + item[idEquipDefBonus], colPDf, linPrt); 
      posicao++;
    }
    if(escudoEquipado != undefined) {
      item = escudoEquipado[idItem]; y = linPrt + posicao * espPrt; ctx.fillText(item[idEquipNome], colPrt, y);
      ctx.fillText("Escudo", colPTp, y); ctx.fillText("+" + item[idEquipDefBonus], colPDf, y);  //posicao++;
    }
  // Não há outros itens de proteção além de Armadura e Escudo... por enquanto!
  }


  function exportarPNG_Ataques(ctx, lista, posicaoInicial) {
    var xNome = 490, xDano = 690, xTipo = 775, yInicial = 648, yPasso = 22,
    quantidade = Math.min(lista.length, 5), atributos = atributosEModificadores[idAtTotal];
    for(var i = 0; i < quantidade; i++) {
      var ataque     = lista[i],       nome = ataque[idAtqNome],       tipoDeDano = ataque[idAtqTipD], 
          alcance = ataque[idAtqAlcn], bonusForca = ataque[idAtqBFOR], dano = ataque[idAtqDano];
    // Bônus de Força?
      if(ataque[idAtqBFOR]) {
        if(habilidadePrecisao) { dano += Math.max(atributos[idAGI], atributos[idINT]); }
                          else { dano += atributos[idFOR]; }
      }
    // Aplica modificadores:
      nome += bonusDeAtaquePorHabilidade(modificadoresDeAtaque, tipoDeDano, nome, alcance);
      dano += bonusDeDanoPorHabilidade(modificadoresDeDano, tipoDeDano,nome, alcance);
    // Desenha no contexto:
     if (dano < 10) { dano = "  " + dano; }
     var y = yInicial + yPasso * (i + posicaoInicial);   if(nome.length > 16) { ctx.font = "14px " + fonte; }
     ctx.fillText("" + nome,                 xNome, y);  ctx.font = "18px " + fonte;
     ctx.fillText("" + dano + " " + alcance, xDano, y);  ctx.fillText("" + stringsDeTipoDeDano[tipoDeDano], xTipo, y);
    }
  }


  function exportarPNG_Habilidades(ctx, lista, posicaoInicial) {
    var xNome = 70, xDifi = 310, xMana = 365, xDesc = 420, yInicial = 858, yPasso = 31;
    ctx.font = "18px " + fonte;
    var quantidadeDeHabilidades = Math.min(lista.length, 13);
    for(var i = 0; i < quantidadeDeHabilidades; i++) {
      var habilidade = lista[i][0], nome = habilidade.nome;
      if(nome != "Dogma" & nome != "Espírito Animal") {
        var categoria   = habilidade.categoria, tipo = habilidade.tipo, 
            descricao   = habilidade.descricao, resumo = habilidade.resumo,
            dificuldade = stringDificuldadeOuMana(aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.dificuldade, dificuldadeMinima, modificadoresDeDificuldade)),
            mana        = stringDificuldadeOuMana(aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.mana, custoDeManaMinimo, modificadoresDeMana));
      // Aplica os modificadores da descrição resumida:
        _resumo.innerHTML = resumo;  aplicarModificadoresDeDescricao(habilidade);
        resumo = exportarResumoDeHabilidade(_resumo.innerHTML);
      // Desenha:
        var y = yInicial + yPasso * (i + posicaoInicial);
        ctx.font = "14px " + fonte; ctx.fillText(nome,        xNome, y );
        ctx.font = "20px " + fonte; ctx.fillText(centralizarEspacamento(dificuldade,4), xDifi, y )
                                    ctx.fillText(centralizarEspacamento(mana,       5), xMana, y );
        ctx.font = "12px " + fonte; ctx.fillText(resumo,   xDesc, y );
      }
    }
  }


  function exportarPNG_HabilidadesSimplificadas(ctx, lista, posicaoInicial) {
    var xNome = 70, xDifi = 353, xMana = 405, xDesc = 420, yInicial = 858, yPasso = 31;
    ctx.font = "18px " + fonte;
    var quantidadeDeHabilidades = Math.min(lista.length, 13);
    for(var i = 0; i < quantidadeDeHabilidades; i++) {
      var habilidade = lista[i][0], nome = habilidade.nome;
      if(nome != "Dogma" & nome != "Espírito Animal") {
        var categoria   = habilidade.categoria, tipo = habilidade.tipo, 
            descricao   = habilidade.descricao, resumo = habilidade.resumo,
            dificuldade = stringDificuldadeOuMana(aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.dificuldade, dificuldadeMinima, modificadoresDeDificuldade)),
            mana        = stringDificuldadeOuMana(aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.mana, custoDeManaMinimo, modificadoresDeMana));
      // Desenha:
        var y = yInicial + yPasso * (i + posicaoInicial);
        ctx.font = "15px " + fonte; ctx.fillText(nome,        xNome, y );
        ctx.font = "20px " + fonte; ctx.fillText(centralizarEspacamento(dificuldade,4), xDifi, y );
                                    ctx.fillText(centralizarEspacamento(mana,       5), xMana, y );
      }
    }
  }


  function exportarPNG_Equipamentos(ctx, linEqp, espEqp, colNom, colPes, colCst, xMoedas, yMoedas, ultimaLinha) {
    var pesoTotal = 0, custoTotal = 0;
    ctx.font = "20px " + fonte;
    var quantidadeDeItens = Math.min(inventario.length, ultimaLinha);
    for(var i = 0; i < quantidadeDeItens; i++) {
      var item = inventario[i]; var quantidade = item[idQuantidade]; item = item[idItem];
      var nome = item[idEquipNome], peso = item[idEquipPeso], custo = item[idEquipCsto];
      var y = linEqp + (i * espEqp);
      if(quantidade == 1) { ctx.fillText("" + nome,  colNom, y); }
                     else { ctx.fillText("" + nome + " (" + quantidade + ")",  colNom, y); }
      var peso = arredondarPeso(peso * quantidade); pesoTotal += peso; peso = centralizarEspacamento("" + peso, 4);
      if(peso.length & 1) { ctx.fillText(peso, colPes + 5, y); } 
                     else { ctx.fillText(peso, colPes,     y); }      
      var custo = custo * quantidade;  custoTotal += custo; custo = centralizarEspacamento(compactarValor(custo), 5);
      if(custo.length & 1) { ctx.fillText(custo, colCst + 5, y); }
                      else { ctx.fillText(custo, colCst,     y); }
    }
    ctx.fillText("Moedas: " + moedas, xMoedas, yMoedas);  var y = linEqp + (ultimaLinha * espEqp);
    ctx.fillText("" + centralizarEspacamento(arredondarPeso("" + pesoTotal), 4),  colPes, y);
    ctx.fillText("" + centralizarEspacamento(compactarValor(custoTotal),5),       colCst, y);
  }



//// U T I L I D A D E S ////

  function exportarResumoDeHabilidade(resumo) {
    var saida = "", copiar = true;
    var tamanho = resumo.length;
    for(var i = 0; i < tamanho; i++) {      
      var caractere = resumo[i];
      if(caractere == '>') { copiar = true; }  
      else if(copiar) { if(caractere == '<') { copiar = false; } 
      else { saida += caractere; } }
    }
    return saida;
  }


  function arredondarPeso(peso) {
    peso = Math.round((peso * 100));
    return (peso/100);
  }


  function compactarValor(valor) {
    if(valor > 999999) { return "" + (valor/1000000) + "M"; }
    if(valor > 999)    { return "" + (valor/1000)    + "K"; }
                         return "" + (valor);
  }

  
  function centralizarEspacamento(texto, total) {    
    var saida = "", espacoAdicional = (total - texto.length)/2;
    for(var i = 0; i < espacoAdicional; i++) { saida += " "; }
    return (saida + texto);
  }


  function stringDificuldadeOuMana(valor) {
    if(valor ==  0) { return "-"; }
    if(valor == -1) { return "*"; }
    return ("" + valor);
  }


  function ordenar(lista, comparacaoDeHabilidades) {
  // Ye Olde Bubblesort
    var quantidade = lista.length;
    if(quantidade < 2) { return; }
    var loop = true, trocaRealizada = false, indiceA = 0, indiceB = 1;
    while(loop) {
      if(comparar(lista[indiceA],lista[indiceB], comparacaoDeHabilidades)) {
        var temp = lista[indiceA]; lista[indiceA] = lista[indiceB]; lista[indiceB] = temp; trocaRealizada = true;
      }
      indiceA++; indiceB++;
      if(indiceB == quantidade) {        
        if(trocaRealizada) { indiceA = 0; indiceB = 1; trocaRealizada = false; }
        else               { loop = false; }
      }
    }
  }


  function comparar(elementoA, elementoB, comparacaoDeHabilidades) {
    if(comparacaoDeHabilidades) {
    /* Compara apenas os Nomes. Antes comparava Fonte, então Nome.
      if(elementoA[idHabPosFonte] > elementoB[idHabPosFonte])             { return true; }
      if(elementoA[idHabPosFonte] == elementoB[idHabPosFonte]
         & elementoA[idHabPosHabil].nome > elementoB[idHabPosHabil].nome) { return true; }*/
      if(elementoA[idHabPosHabil].nome > elementoB[idHabPosHabil].nome) { return true; }

    }
  // Comparar Equipamentos: primeiro Tipo, depois Nome:
    else {
      var itemA = elementoA[idItem], itemB = elementoB[idItem];
      if(itemA[idEquipTipo] > itemB[idEquipTipo])                                  { return true; }
      if(itemA[idEquipTipo] == itemB[idEquipTipo] & itemA[idEquipNome] > itemB[idEquipNome]) { return true; }
    }
    return false;
  }



//// R O T U L O S ////

  function selecionarFonteDeRotulos(id) {
  // Remove a classe indicando seleção, e readiciona na única fonte realmente selecionada:
    document.getElementById("botao_rotulo_" + idFontRaca_).classList.remove("botao_fonte_s");
    document.getElementById("botao_rotulo_" + idFontClass).classList.remove("botao_fonte_s");
    document.getElementById("botao_rotulo_" + idFontAntec).classList.remove("botao_fonte_s");
    document.getElementById("botao_rotulo_" + idFontCamin).classList.remove("botao_fonte_s");
    document.getElementById("botao_rotulo_" + idFontAprnd).classList.remove("botao_fonte_s");
    document.getElementById("botao_rotulo_" + idFontOrgan).classList.remove("botao_fonte_s");
    document.getElementById("botao_rotulo_" + id).classList.add("botao_fonte_s");
  // Seleciona o rótulo e atualiza o Registro com os rótulos apropriados:
    switch(id) {
      case idFontRaca_: rotuloSelecionado = racas.raca;               atualizarHTMLDeRacasNoRegistro();        break;
      case idFontClass: rotuloSelecionado = classes.classe;           atualizarHTMLDeClassesNoRegistro();      break;
      case idFontAntec: rotuloSelecionado = antecedentes.antecedente; atualizarHTMLDeAntecedentesNoRegistro(); break;
      case idFontCamin: rotuloSelecionado = caminhos.caminho;         atualizarHTMLDeCaminhosNoRegistro();     break;
      case idFontAprnd: rotuloSelecionado = classes.classe;           atualizarHTMLDeAprendizesNoRegistro();   break;
      case idFontOrgan: rotuloSelecionado = organizacoes.organizacao; atualizarHTMLDeOrganizacoesNoRegistro(); break;
      default: return;
    }
  // Cancela o "scrolling" realizado ao trocar de aba, se a aba foi trocada:
    if (idDaAbaDeRotulo != id) { _registro.scrollTop = 0;  idDaAbaDeRotulo = id; }
  // Mostra o elemento já selecionado, se possível, ao trocar a aba de fonte:
    if(idsDeRotulosSelecionados[id] > idNulo) { mostrarRotulo(idsDeRotulosSelecionados[id]); } 
    else                                      { carregarHTMLInicialNoDetalhador(idDaAbaDeRotulo); }
  }


  function selecionarRotulo(id) {
  // Registra o rótulo selecionado na posição da aba atual no arranjo de ids e aplica sua seleção:
    switch(idDaAbaDeRotulo) {
      case idFontRaca_: idsDeRotulosSelecionados[idFontRaca_] = id; atualizarRaca(id);        break;
      case idFontClass: idsDeRotulosSelecionados[idFontClass] = id; atualizarClasse(id);      break;
      case idFontAntec: idsDeRotulosSelecionados[idFontAntec] = id; atualizarAntecedente(id); break;
      case idFontCamin: idsDeRotulosSelecionados[idFontCamin] = id; atualizarCaminho(id);     break;
      case idFontAprnd: idsDeRotulosSelecionados[idFontAprnd] = id; atualizarAprendiz(id);    break;
      case idFontOrgan: idsDeRotulosSelecionados[idFontOrgan] = id; atualizarOrganizacao(id); break;
      default: return;
    }
  // Atualiza os dependentes:
    atualizarRegistroDeRotulos();  atualizarHTMLDosRotulosSelecionados();
  }


  function removerRotulo(idDaAba) {
  // Desmarca o id na aba atual e remove a seleção apropriada:
    switch(idDaAba) {
      case idFontRaca_: idsDeRotulosSelecionados[idFontRaca_] = idNulo; atualizarRaca(idNulo);        break;
      case idFontClass: idsDeRotulosSelecionados[idFontClass] = idNulo; atualizarClasse(idNulo);      break;
      case idFontAntec: idsDeRotulosSelecionados[idFontAntec] = idNulo; atualizarAntecedente(idNulo); break;
      case idFontCamin: idsDeRotulosSelecionados[idFontCamin] = idNulo; atualizarCaminho(idNulo);     break;
      case idFontAprnd: idsDeRotulosSelecionados[idFontAprnd] = idNulo; atualizarAprendiz(idNulo);    break;
      case idFontOrgan: idsDeRotulosSelecionados[idFontOrgan] = idNulo; atualizarOrganizacao(idNulo); break;
      default: return;
    }
  // Atualiza os dependentes:
    atualizarRegistroDeRotulos();  atualizarHTMLDosRotulosSelecionados();
  }


  function atualizarRegistroDeRotulos() {
  // Atualiza o HTML do registro de rótulos com os rótulos da aba selecionada:
    switch(idDaAbaDeRotulo) {
      case idFontRaca_: atualizarHTMLDeRacasNoRegistro();        break;
      case idFontClass: atualizarHTMLDeClassesNoRegistro();      break;
      case idFontAntec: atualizarHTMLDeAntecedentesNoRegistro(); break;
      case idFontCamin: atualizarHTMLDeCaminhosNoRegistro();     break;
      case idFontAprnd: atualizarHTMLDeAprendizesNoRegistro();   break;
      case idFontOrgan: atualizarHTMLDeOrganizacoesNoRegistro(); break;
      default: return;
    }
  }


  function mostrarRotulo(id) {
  // Não atualiza o HTML caso o rótulo já esteja sendo mostrado:
    if(idDoUltimoRotuloMostrado == id) { return; }
  // Atualiza o ultimoIdMostrado para o ID selecionado:
    idDoUltimoRotuloMostrado = id;
  // Atualiza o Detalhador a partir da fonte apropriada:
    switch(idDaAbaDeRotulo) {
      case idFontRaca_:  carregarHTMLDeRacaNoDetalhador(rotuloSelecionado[id]);         break;
      case idFontClass:
      case idFontAprnd:  carregarHTMLDeClasseNoDetalhador(rotuloSelecionado[id]);       break;
      case idFontAntec:  carregarHTMLDeAntecedenteNoDetalhador(rotuloSelecionado[id]);  break;
      case idFontCamin:  carregarHTMLDeCaminhoNoDetalhador(rotuloSelecionado[id]);      break;
      case idFontOrgan:  carregarHTMLDeOrganizacaoNoDetalhador(rotuloSelecionado[id]);  break;
      default:           carregarHTMLInicialNoDetalhador(idNulo); return;
    }
  }


  function mostrarRotuloDeFonte(idDaFonte) {
  // Não atualiza o HTML caso o rótulo já esteja sendo mostrado:
    if(idDoUltimoRotuloMostrado == idDaFonte) { return; }
  // Atualiza o ultimoIdMostrado para o ID da Fonte selecionado:
    idDoUltimoRotuloMostrado = idDaFonte;
  // Atualiza o Detalhador com o texto inicial de cada tipo de rótulo:
    carregarHTMLInicialNoDetalhador(idDaFonte);
  }


  function atualizarRaca(indice) {
  // Remove as Habilidades Raciais:
    removerHabilidadesPorFonteELivres(idFontRaca_);
  // Se 0, "Nenhuma" foi selecionada:
    if(indice < 0 ) {
      racaSelecionada = undefined;
    // Desativa e zera os atributos de raça:
      atributosEModificadores[idAtRaca_] = [modBloq, modBloq, modBloq, modBloq];
      desativarAtributosDeModificador(idAtRaca_, atributosEModificadores[idAtRaca_], false);
    // Desativa a opção de "adaptabilidade":
      atributosEModificadores[idAtAdapt] = [modBloq, modBloq, modBloq, modBloq];
      desativarAtributosDeModificador(idAtAdapt, atributosEModificadores[idAtAdapt], true);
    // Oculta as habilidades de Raça, mostrando as Gerais:
      _botaoHabilidadeRaca_.style = "display:none;";  selecionarFonteDeHabilidades(idFontGeral);
    } else {
    // Seleciona a raça com base no índice:
      racaSelecionada = racas.raca[indice];
    // Salva os atributos e ativa a coluna para mostrá-los:
      atributosEModificadores[idAtRaca_] = racas.raca[indice].atributos;
      ativarAtributosDeModificador(idAtRaca_, atributosEModificadores[idAtRaca_], false);
    // Ativa a opção de "adaptabilidade" para humanos:
      if(racaSelecionada.nome == "Humano") {
        atributosEModificadores[idAtAdapt] = [modLibr, modLibr, modLibr, modLibr];
        ativarAtributosDeModificador(idAtAdapt, atributosEModificadores[idAtAdapt], true);
      } else {
        desativarAtributosDeModificador(idAtAdapt, atributosEModificadores[idAtAdapt], true);
      }
    // Adiciona a Habilidade Racial Automática, ou uma livre se já possuída:
      adicionarHabilidadeAutomaticaOuLivre(racaSelecionada.automatica, idFontRaca_);
    // Revela as habilidades raciais:
      _botaoHabilidadeRaca_.style = "display:inline-block;";
      _botaoHabilidadeRaca_.innerHTML = racaSelecionada.nome;
      carregarHabilidades(idFontRaca_);
      selecionarFonteDeHabilidades(idFontRaca_);
    }
  // Atualiza os dependentes de Raça:
    atualizarTotalDeAtributos();
  // Atualiza o índice:
    idsDeRotulosSelecionados[idFontRaca_] = indice;
  }


  function atualizarClasse(indice) {
  // Remove as Habilidades de "Classe" e os dependentes "Antecedente" e "Extra":
    removerHabilidadesPorFonteELivres(idFontClass);
    removerHabilidadesPorFonteELivres(idFontAntec);
    removerHabilidadesPorFonteELivres(idFontExtra);
  // Limpa os efeitos do Antecedente selecionado, por depender da Classe:
    atributosEModificadores[idAtAntec] = [modBloq, modBloq, modBloq, modBloq];
    desativarAtributosDeModificador(idAtAntec, atributosEModificadores[idAtAntec], true);
    bloquearSelecaoDeAntecedente();
  // Se < 0, "Nenhuma" foi selecionada:
    if(indice < 0) {
      classeSelecionada = undefined;
    // Desativa e zera os atributos de classe:
      atributosEModificadores[idAtClass] = [modBloq, modBloq, modBloq, modBloq];
      desativarAtributosDeModificador(idAtClass, atributosEModificadores[idAtClass], false);
    // Oculta as habilidades de Classe, mostrando as Gerais:
      _botaoHabilidadeClass.style = "display:none;";
      selecionarFonteDeHabilidades(idFontGeral);
    } else {
    // Seleciona a Classe a partir do índice:
      classeSelecionada = classes.classe[indice];
    // Salva os atributos e ativa a coluna para mostrá-los:
      atributosEModificadores[idAtClass] = classeSelecionada.atributos;
      ativarAtributosDeModificador(idAtClass, atributosEModificadores[idAtClass], false);
    // Calcula os bitsDeAntecedente para desbloquear apenas os atributos bônus da Classe:
      bitsDeAntecedente = atributosEModificadores[idAtClass][idFOR]
                        + atributosEModificadores[idAtClass][idAGI] * 2
                        + atributosEModificadores[idAtClass][idINT] * 4
                        + atributosEModificadores[idAtClass][idVON] * 8;
      ativarAtributosDeModificador(idAtAntec, atributosEModificadores[idAtAntec], true);
    // Adiciona a Habilidade de Classe Automática, ou uma livre se já possuída:
      adicionarHabilidadeAutomaticaOuLivre(classeSelecionada.automatica,idFontClass);
    // Revela as habilidades de Classe:
      _botaoHabilidadeClass.style = "display:inline-block;";
      _botaoHabilidadeClass.innerHTML = classeSelecionada.nome;
      carregarHabilidades(idFontClass);
      selecionarFonteDeHabilidades(idFontClass);
    }
  // Atualiza os dependentes de Classe:
    atualizarTotalDeAtributos();
  // Atualiza o índice:
    idsDeRotulosSelecionados[idFontClass] = indice;
  }


  function atualizarAntecedente(indice) {
  // Remove habilidades e feitos do Antecedente anterior:
    if(antecedenteSelecionado != undefined) {
     removerEfeitos(antecedenteSelecionado.nome, antecedenteSelecionado.efeito);
     removerHabilidadePorNomeSemCompensar("Dogma", habilidadesAutomaticas);
     removerHabilidadePorNomeSemCompensar("Espírito Animal", habilidadesAutomaticas);
    }
   // Se o índice for < 0, nenhum Antecedente foi selecionado. Caso contrário aplicam-se seus efeitos:
    if(indice < 0) {
      antecedenteSelecionado = undefined;
      selecionarFonteDeHabilidades(idFontGeral);
    } else {
      antecedenteSelecionado = antecedentes.antecedente[indice];
      aplicarEfeitos(antecedenteSelecionado.nome, antecedenteSelecionado.efeito);
    }
  // Atualiza o índice:
    idsDeRotulosSelecionados[idFontAntec] = indice;
  }


  function atualizarAprendiz(indice) {
  // Remove habilidades do Aprendiz anterior:
    removerHabilidadesPorFonteELivres(idFontAprnd);
  // Se o índice for < 0, nenhum Aprendiz foi selecionado. Caso contrário aplicam-se seus efeitos:
    if(indice < 0) {
      aprendizSelecionado = undefined; _botaoHabilidadeAprnd.style = "display:none;";
      selecionarFonteDeHabilidades(idFontGeral);
    } else {
      aprendizSelecionado = classes.classe[indice];          carregarHabilidades(idFontAprnd);
      _botaoHabilidadeAprnd.style = "display:inline-block;"; _botaoHabilidadeAprnd.innerHTML = aprendizSelecionado.nome;
    // O Aprendiz é uma fonte de habilidades, e fornece uma habilidade automática que pode já ser possúida:
      selecionarFonteDeHabilidades(idFontAprnd);
      adicionarHabilidadeAutomaticaOuLivre(aprendizSelecionado.automatica, idFontAprnd);
    }
  // Atualiza o índice:
    idsDeRotulosSelecionados[idFontAprnd] = indice;
  }


  function atualizarCaminho(indice) {
  // Remove habilidades do Caminho anterior:
    removerHabilidadesPorFonteELivres(idFontCamin);
  // Se o índice for < 0, nenhum Caminho foi selecionado. Caso contrário aplicam-se seus efeitos:
    if(indice < 0) {
      caminhoSelecionado = undefined; _botaoHabilidadeCamin.style = "display:none;"; 
      selecionarFonteDeHabilidades(idFontGeral);
    } else {
      caminhoSelecionado = caminhos.caminho[indice];         carregarHabilidades(idFontCamin);
      _botaoHabilidadeCamin.style = "display:inline-block;"; _botaoHabilidadeCamin.innerHTML = caminhoSelecionado.nome;
    // O Caminho é uma fonte de habilidades, e fornece uma habilidade automática que pode já ser possúida:
      selecionarFonteDeHabilidades(idFontCamin);
      adicionarHabilidadeAutomaticaOuLivre(caminhoSelecionado.automatica, idFontCamin);
    }
  // Atualiza o índice:
    idsDeRotulosSelecionados[idFontCamin] = indice;
  }


  function atualizarOrganizacao(indice) {
  // Remove habilidades da Organização anterior:
    removerHabilidadesPorFonteELivres(idFontOrgan);
  // Se o índice for < 0, nenhuma Organização foi selecionada. Caso contrário aplicam-se seus efeitos:
    if(indice < 0) {
      organizacaoSelecionada = undefined; _botaoHabilidadeOrgan.style = "display:none;"; 
      selecionarFonteDeHabilidades(idFontGeral);
    } else {
      organizacaoSelecionada = organizacoes.organizacao[indice];
      carregarHabilidades(idFontOrgan); _botaoHabilidadeOrgan.style = "display:inline-block;";
      _botaoHabilidadeOrgan.innerHTML = organizacaoSelecionada.apelido; selecionarFonteDeHabilidades(idFontOrgan);
    }
  // Atualiza o índice:
    idsDeRotulosSelecionados[idFontOrgan] = indice;
  }


  function atualizarNivel() {
  // Remove as habilidades selecionadas de forma decrescente até atingir o nível selecionado, se inferior:
    var novoNivelDePersonagem = Number(_rangeNivel.value);
    while(nivelDePersonagem > novoNivelDePersonagem) {
      removerHabilidadesPorNivel(nivelDePersonagem);  nivelDePersonagem--;
    }
  // Salva o nível selecionado e atualiza o HTML:
    nivelDePersonagem = novoNivelDePersonagem; _nivelDePersonagem.innerHTML = "Nível: " + novoNivelDePersonagem;

  // Atualiza os dependentes:
    atualizarColunasDeEvolucao();
    atualizarColunasDeAtributosPorNivel();
    atualizarHabilidadesDisponiveis();
    atualizarHTMLDeVidaEMana();
    atualizarHTMLDoSeletorDeHabilidades();
  }


  function atualizarAtaqueDefesaCarga() {
    atualizarHTMLDosAtaques();  atualizarDefesas(); atualizarCargaEDeslocamento(0);
  }


  function desbloquearSelecaoDeAprendizOuCaminho(aprendiz) {
  // Apresenta o botão de Aprendiz ou Caminhho, e mostras os rótulos da fonte selecionada:
    if(aprendiz) { _botaoRotuloAprnd.style = "display:inline-block;"; selecionarFonteDeRotulos(idFontAprnd); }
            else { _botaoRotuloCamin.style = "display:inline-block;"; selecionarFonteDeRotulos(idFontCamin); }
  }


  function bloquearSelecaoDeAprendizOuCaminho(aprendiz) {
  // Torna "undefined" o Aprendiz ou Caminho selecionado, remove as habilidades e atualiza o HTML:
    if(aprendiz) {
      atualizarAprendiz(idNulo); removerHabilidadesPorFonte(idFontAprnd); _botaoRotuloAprnd.style = "display:none;";
    } else {
      atualizarCaminho(idNulo);  removerHabilidadesPorFonte(idFontCamin); _botaoRotuloCamin.style = "display:none;";
    }
   // Mostra as Classes e atualiza os rótulos selecionados:
    selecionarFonteDeHabilidades(idFontGeral);
    selecionarFonteDeRotulos(idFontClass);
    atualizarHTMLDosRotulosSelecionados();
  }


  function desbloquearSelecaoDeAntecedente() {
    _botaoRotuloAntec.style = "display:inline-block;";
    selecionarFonteDeRotulos(idFontAntec);  atualizarHTMLDeAntecedentesNoRegistro();
  }


  function bloquearSelecaoDeAntecedente() {
  // Torna undefined o Antecedente selecionado:
    atualizarAntecedente(idNulo);           _botaoRotuloAntec.style = "display:none;";
    selecionarFonteDeRotulos(idFontClass);  atualizarHTMLDosRotulosSelecionados();
  }



//// R Ó T U L O S // H T M L ////

  function atualizarHTMLDosRotulosSelecionados() {
    var html = "", impar = true;
    if(racaSelecionada != undefined) { 
      html += htmlDeRotuloSelecionado(true, "Raça", racaSelecionada.nome, idFontRaca_);
    } else {
      html += "<div class='elemento_impar' onmouseover='mostrarRotuloDeFonte(" + idFontRaca_ + ")'>"
            + "<div class='reg_sec_tipo'> Raça </div>"
            + "<div class='reg_sec_nome'> Não Selecionada </div> </div>";
    }
    if(classeSelecionada != undefined) {
      html += htmlDeRotuloSelecionado(false, "Classe", classeSelecionada.nome, idFontClass);
    } else {
      html += "<div class='elemento_par' onmouseover='mostrarRotuloDeFonte(" + idFontClass + ")'>"
            + "<div class='reg_sec_tipo'> Classe </div>"
            + "<div class='reg_sec_nome'> Não Selecionada </div> </div>";
    }
    if(antecedenteSelecionado != undefined) {
      html += htmlDeRotuloSelecionado(impar, "Antecedente", antecedenteSelecionado.nome, idFontAntec); impar = !impar;
    }
    if(aprendizSelecionado != undefined) {
      html += htmlDeRotuloSelecionado(impar, "Aprendiz", aprendizSelecionado.nome, idFontAprnd); impar = !impar;
    }
    if(caminhoSelecionado != undefined) {
      if(requisitosCumpridos(caminhoSelecionado.requisitos)) {
        html += htmlDeRotuloSelecionado(impar, "Caminho", caminhoSelecionado.nome, idFontCamin);
      } else {
        html += htmlDeRotuloDeRequisitoNaoCumprido(impar, "Caminho", caminhoSelecionado.nome, idFontCamin);
      }
      impar = !impar;
    }
    if(organizacaoSelecionada != undefined) {
      html += htmlDeRotuloSelecionado(impar, "Organização", organizacaoSelecionada.nome, idFontOrgan); impar = !impar;
    }
    _rotulosSelecionados.innerHTML = html;
  }


  function htmlDeRotuloDeRequisitoNaoCumprido(impar, tipo, nome, fonte) {
    var html = "<div class='elemento_"; if(impar) { html += "im"; } 
    html += "par' onmouseover='mostrarRotuloDeFonte(" + fonte + ")'> <div class='reg_sec_tipo'> " + tipo + " </div>";
    if(nome.length < 16) { html += "<div class='reg_sec_nome' style='color:red;'>" + nome + "</div>";       }
                    else { html += "<div class='reg_sec_nome_longo style='color:red;''>" + nome + "</div>"; }
    html += "<button class='botao_rem' onmouseup='removerRotulo(" + fonte + ")'> X </button> </div>";
    return html;
  }


  function htmlDeRotuloSelecionado(impar, tipo, nome, fonte) {
    var html = "<div class='elemento_";
    if(impar) { html += "im"; }
    html += "par' onmouseover='mostrarRotuloDeFonte(" + fonte + ")'> <div class='reg_sec_tipo'> " + tipo + " </div>";
    if(nome.length < 16) { html += "<div class='reg_sec_nome'>" + nome + "</div>";       } 
                    else { html += "<div class='reg_sec_nome_longo'>" + nome + "</div>"; }
    html += "<button class='botao_rem' onmouseup='removerRotulo(" + fonte + ")'> X </button> </div>";
    return html;
  }


  function htmlDeBotaoDeRegistro(fonte, id, requisitos) {
    if(requisitosCumpridos(requisitos)) {
      if(idsDeRotulosSelecionados[fonte] == id) { 
        return "<button class='botao_rem' onmouseup='removerRotulo(" + fonte +")'> X </button>";
      } else {
        return "<button class='botao_adi' onmouseup='selecionarRotulo(" + id +")'> + </button>";
      }
    }
    return "<button class='botao_des' disabled> # </button>";
  }


  function htmlDeRequisitos(requisitos) {
    var html = "", quantidade = requisitos.length;
    for(var i = 0; i < quantidade; i++) {
      var requisito = requisitos[i];
      if(requisito == "nivel") { 
        i++; var nivel = requisitos[i]; if(nivel == 1) { html += " Apenas "; } html += " Nível " + nivel +","; }
      else if(requisito == "for") {  html += " Força ";         i++;  html += "" + requisitos[i] + ","; }
      else if(requisito == "agi") {  html += " Agilidade ";     i++;  html += "" + requisitos[i] + ","; }
      else if(requisito == "int") {  html += " Inteligência ";  i++;  html += "" + requisitos[i] + ","; }
      else if(requisito == "von") {  html += " Vontade ";       i++;  html += "" + requisitos[i] + ","; }
      else if(requisito == "raca") {
        html += " Apenas";  i++;  var racas = requisitos[i];         var quantidadeDeRacas = racas.length;
        for(var j = 0; j < quantidadeDeRacas; j++) { html += " " + racas[j]+ ","; } }
      else if(requisito == "!raca") {
        html += " Exceto";  i++;  var racas = requisitos[i];         var quantidadeDeRacas = racas.length;
        for(var j = 0; j < quantidadeDeRacas; j++) { html += " " + racas[j] + ","; } }
      else if(requisito == "habilidade") {
                            i++;  var habilidades = requisitos[i];   var quantidadeDeHabilidades = habilidades.length;
        for(var j = 0; j < quantidadeDeHabilidades; j++) { html += " " + habilidades[j] + ","; } }
      else if(requisito == "antecedente") {
                            i++;  var antecedentes = requisitos[i];  var quantidadeDeAntecedentes = antecedentes.length;
        for(var j = 0; j < quantidadeDeAntecedentes; j++) { html += " " + antecedentes[j] + ","; } }
      else if(requisito == "texto") { i++; html += requisitos[i] + ","; }
      else { html += " " + requisitos[i] + ","; }
    }
    return html.slice(0,-1);
  }


  function atualizarHTMLDeRacasNoRegistro() {
  // Carrega o Cabeçalho:
    document.getElementById("registro_cabecalho").innerHTML = "<b> <div id='reg_cab_nome'> Raça </div> <div id='reg_cab_atributos'> Atributos </div> <div id='reg_cab_habilidade'> Habilidade </div> </b>";
  // Carrega a Lista:
    var html = "", quantidade = rotuloSelecionado.length;
    for(var i = 0; i < quantidade; i++) {
      var rotulo = rotuloSelecionado[i];  var atributos = rotulo.atributos;
      var im = ""; if((i&1) == 0) { im = "im" };
      html += "<div class='elemento_" + im + "par' onmouseover='mostrarRotulo(" + i + ")'>"
            + htmlDeBotaoDeRegistro(idFontRaca_, i, [])
            + "  <div class='reg_lst_nome'>" + rotulo.nome + "</div>"
            + "  <div class='reg_lst_atributos'>"
            + "    <div class='reg_lst_atributo'>" + atributos[idFOR] + "</div>"
            + "    <div class='reg_lst_atributo'>" + atributos[idAGI] + "</div>"
            + "    <div class='reg_lst_atributo'>" + atributos[idINT] + "</div>"
            + "    <div class='reg_lst_atributo'>" + atributos[idVON] + "</div>"
            + "  </div>"
            + "  <div class='reg_lst_habilidade'>" + rotulo.automatica + "</div>"
            + "</div> </div>";
    }
    _registro.innerHTML = html;
  }


  function atualizarHTMLDeClassesNoRegistro() {
  // Carrega o Cabeçalho:
    document.getElementById("registro_cabecalho").innerHTML = "<b>"
     + "<div id='reg_cab_nome'> Classe </div>"
     + "<div id='reg_cab_atributos'> Bônus </div>"
     + "<div id='reg_cab_habilidade'> Habilidade </div> </b>";
  // Carrega a Lista:
    var html = "", quantidade = rotuloSelecionado.length;
    for(var i = 0; i < quantidade; i++) {
      var rotulo = rotuloSelecionado[i];
      var atributos = rotulo.atributos;
      var im = ""; if((i&1) == 0) { im = "im" };
      html += "<div class='elemento_" + im + "par' onmouseover='mostrarRotulo(" + i + ")'>"
            + htmlDeBotaoDeRegistro(idFontClass, i, [])
            + "  <div class='reg_lst_nome'>" + rotulo.nome + "</div>"
            + "  <div class='reg_lst_atributos'>";
      if(atributos[idFOR]) { html += "For+1 "; }  if(atributos[idAGI]) { html += "Agi+1 "; }
      if(atributos[idINT]) { html += "Int+1 "; }  if(atributos[idVON]) { html += "Von+1 "; }
      html += "  </div>"
            + "  <div class='reg_lst_habilidade'>" + rotulo.automatica + "</div>"
            + "</div>";
    }
    _registro.innerHTML = html;
  }


  function atualizarHTMLDeAntecedentesNoRegistro() {
  // Carrega o Cabeçalho:
    document.getElementById("registro_cabecalho").innerHTML = "<b>"
     + "<div id='reg_cab_nome'> Antecendente </div>"
     + "<div id='reg_cab_corpo'> Requisito(s) </div> </b>";
  // Carrega a Lista:
    var html = "", quantidade = rotuloSelecionado.length;
    for(var i = 0; i < quantidade; i++) {
      var rotulo = rotuloSelecionado[i];  var requisitos = rotulo.requisitos;
      var im = ""; if((i&1) == 0) { im = "im" };
      html += "<div class='elemento_" + im + "par' onmouseover='mostrarRotulo(" + i + ")'>"
            + htmlDeBotaoDeRegistro(idFontAntec, i, requisitos)
            + "  <div class='reg_lst_nome'>" + rotulo.nome + "</div>"
            + "  <div class='reg_lst_corpo'>"
            + htmlDeRequisitos(requisitos)
            + "</div> </div>";
    }
    _registro.innerHTML = html;
  }


  function atualizarHTMLDeCaminhosNoRegistro() {
  // Carrega o Cabeçalho:
    document.getElementById("registro_cabecalho").innerHTML = "<b>"
     + "<div id='reg_cab_nome'> Caminho </div>"
     + "<div id='reg_cab_corpo'> Requisito(s) </div> </b>";
  // Carrega a Lista:
    var html = "", quantidade = rotuloSelecionado.length;
    for(var i = 0; i < quantidade; i++) {
      var rotulo = rotuloSelecionado[i]; var requisitos = rotulo.requisitos;
      var im = ""; if((i&1) == 0) { im = "im" };
      html += "<div class='elemento_" + im + "par' onmouseover='mostrarRotulo(" + i + ")'>"
            + htmlDeBotaoDeRegistro(idFontCamin, i, requisitos)
            + "  <div class='reg_lst_nome'>" + rotulo.nome + "</div>"
            + "  <div class='reg_lst_corpo'>"
            + htmlDeRequisitos(requisitos)
            + "</div> </div>";
    }
    _registro.innerHTML = html;
  }


  function atualizarHTMLDeAprendizesNoRegistro() {
  // Carrega o Cabeçalho:
    document.getElementById("registro_cabecalho").innerHTML = "<b>"
     + "<div id='reg_cab_nome'> Aprendiz </div>"
     + "<div id='reg_cab_corpo'> Habilidade Extra </div> </b>";
  // Carrega a Lista:
    var html = "", quantidade = rotuloSelecionado.length;
    for(var i = 0; i < quantidade; i++) {
      var rotulo = rotuloSelecionado[i];  var im = ""; if((i&1) == 0) { im = "im" };
      html += "<div class='elemento_" + im + "par' onmouseover='mostrarRotulo(" + i + ")'>"
            + htmlDeBotaoDeRegistro(idFontAprnd, i, [])
            + "  <div class='reg_lst_nome'>" + rotulo.nome + "</div>"
            + "  <div class='reg_lst_corpo'>" + rotulo.automatica + "</div>"
            + "</div>";
    }
    _registro.innerHTML = html;
  }


  function atualizarHTMLDeOrganizacoesNoRegistro() {
  // Carrega o Cabeçalho:
    document.getElementById("registro_cabecalho").innerHTML = "<b>"
     + "<div id='reg_cab_nome'> Organização </div>"
     + "<div id='reg_cab_corpo'> Descrição </div> </b>";
  // Carrega a Lista:
    var html = "", quantidade = rotuloSelecionado.length;
    for(var i = 0; i < quantidade; i++) {
      var rotulo = rotuloSelecionado[i];  var nome = rotulo.nome; var im = ""; if((i&1) == 0) { im = "im" };
      html += "<div class='elemento_" + im + "par' onmouseover='mostrarRotulo(" + i + ")'>"
            + htmlDeBotaoDeRegistro(idFontOrgan, i, []);
      if(nome.length > 28) { html += "  <div class='reg_lst_org_longo'>" + nome + "</div>"; }
                      else { html += "  <div class='reg_lst_org'>"       + nome + "</div>"; }
      html += "  <div class='reg_lst_resumo'>" + rotulo.resumo + "</div>"
            + "</div>";
    }
    _registro.innerHTML = html;
  }


  function carregarHTMLInicialNoDetalhador(id) {
    var nome = "", primeiraLetra = "", descricao = "";
    switch(id) {
      case idFontRaca_: nome = "Raça"; primeiraLetra = "A"; descricao = "s raças conferem os valores iniciais dos Atributos do personagem e uma Habilidade Automática. Além disso, elas apresentam uma série de Habilidades extras que podem ser selecionadas entre as Habilidades iniciais do personagem ou (a menos que seja explícito que a habilidade só pode ser pega na criação do personagem) entre as que ele pode selecionar quando subir de nível."; break;
      case idFontClass: nome = "Classe"; primeiraLetra = "A"; descricao = "s Classes conferem um bônus em dois Atributos, que devem ser somados aos valores iniciais conferidos pela Raça e também uma Habilidade Automática. Além disso, cada Classe apresenta uma série de Habilidades que podem ser selecionadas entre as Habilidades iniciais do personagem ou entre as que ele pode selecionar quando subir de nível, desde que o personagem preencha os requisitos delas."; break;
      case idFontAntec: nome = "Antecedente"; primeiraLetra = "A"; descricao = "ntecedentes são características que provém do desenvolvimento do personagem antes de se tornar um herói. Antecedentes podem ser vistos como “Habilidades de Histórico”, geralmente fazendo parte da descrição da história do personagem, às vezes como característica principal do personagem (“meu personagem é um Espadachim Nobre vindo de uma proeminente família de Tebryn”) e as vezes de forma menos proeminente (“Eu sou um Guerreiro treinado pela guarda de Tebrynia. além do treinamento com o uso de espadas, eu passei algum tempo aprendendo os truques dos caçadores ao redor de Tebrynia, e consegui aprender algumas coisas com eles”."; break;
      case idFontAprnd: nome = "Aprendiz"; primeiraLetra = "A"; descricao = "o se tornar aprendiz o persanagem adquire a Habilidade Automática da Classe da qual se tornou aprendiz ou, se ele já possuir a Habilidade Automática da Classe da qual se tornou aprendiz, uma Habilidade da nova Classe que ele atenda os Requisitos. A partir desse momento ele é considerado um Aprendiz da Classe escolhida, podendo escolher Habilidades da lista da sua Classe ou da Classe que se tornou aprendiz. Cada personagem só pode se tornar Aprendiz de mais uma Classe ao longo de sua carreira."; break;
      case idFontCamin: nome = "Caminho"; primeiraLetra = "C"; descricao = "aminhos são opções avançadas para personagens, que podem estar disponíveis para os jogadores dentro do cenário da Campanha se o Mestre considerar apropriado. Eles funcionam como uma espécie de Classe especializada, com uma pequena lista de Habilidades que podem ser selecinadas pelos personagens em conjunto com as Habilidades de Classe e Raça para criar combinações ainda mais diversificadas."; break;
      case idFontOrgan: nome = "Organização"; primeiraLetra = "A"; descricao = "lgumas delas são guildas, outras são Ordens de Cavalaria, enquanto algumas podem ter assumido papéis e formas diferentes ao longo de sua história. Cada organização possui um conjunto de Habilidades comuns aos membros daquela organização. Qualquer personagem que venha a fazer parte daquela organização – ou que tenha feito como parte do seu histórico – pode selecionar as Habilidades listadas naquela organização como se fossem Habilidades Gerais, inclusive durante a criação de personagem, se preencher seus requisitos."; break;
      default: nome = "Forja de Personagens"; primeiraLetra = "E"; descricao = "ste é um aplicativo de fã. Acesse o <a href=\"https://coisinhaverde.com.br/mightyblade/\"> site oficial </a> para obter mais informações e baixar o sistema gratuitamente. <br/> <br/> <b>1)</b> Selecione uma Raça. <br/> <b>2)</b> Selecione uma Classe. <br/> <b>3)</b> De desejar, selecione uma Organização. <br/> <b>4)</b> Para selecionar Aprendiz ou Caminho, marque no mínimo Nível 2 e clique na respectiva checkbox em \"Evolução\". <br/> <b>5)</b> Para selecionar um Antecedente, marque um bônus de atributo a ser sacrificado em \"Atributos/Antec.\". <br/> <b>6)</b> Selecione Habilidades e Equipamentos. <br/> <br/> Se encontrar um <i>bug</i>, baixe o relatório em \"Exportar\"/\"Relatório em TXT\" e envie para o <a href=\"mailto:eduardochequettomachado@gmail.com?Subject=BUG\" target=\"_top\"> desenvolvedor </a> e/ou reporte no <a href=\"https://coisinhaverde.com.br/mightyblade/topico/348\" target=\"_blank\"> fórum </a>.";
    }
    _detalhador.innerHTML = ""
      + "<div class='cabecalho'> <b> " + nome + " </b> </div>"
      + "<div class='det_centro'> <div class='det_descricao'> <i>"
      + "    <a class='det_primeira'>" + primeiraLetra + "</a>" + descricao + "</i> </div> </div>"
      + "<div class='rodapezim'> </div>";
  }


  function carregarHTMLDeRacaNoDetalhador(raca) {
    var atributos = raca.atributos;
    _detalhador.innerHTML = ""
      + "<div class='cabecalho'> <b>" + raca.nome + "</b> </div>"
      + "<div class='det_esquerda'> <img class='det_imagem' src='img/" + raca.imagem + "'> </img> </div>"
      + "<div class='det_direita'>"
      + "  <div class='det_atributo'> <b> Atributos Iniciais </b> </div>"
      + "  <div class='det_detalhe'> Força "        + atributos[idFOR] + "</div>"
      + "  <div class='det_detalhe'> Agilidade "    + atributos[idAGI] + "</div>"
      + "  <div class='det_detalhe'> Inteligência " + atributos[idINT] + "</div>"
      + "  <div class='det_detalhe'> Vontade "      + atributos[idVON] + "</div>"
      + "  <div class='det_atributo'> <b> Classes Comuns </b> </div>"
      + "  <div class='det_detalhe'>" + raca.classes + "</div>"
      + "  <div class='det_atributo'> <b> Habilidade Automática </b> </div>"
      + "  <div class='det_detalhe'>" + raca.automatica + "</div>"
      + "</div> </div> <div class='rodapezim'> </div>";
  }


  function carregarHTMLDeClasseNoDetalhador(classe) {
    var atributos = classe.atributos, habilidade = classe.automatica, descricao = classe.descricao,
        primeiraLetra = descricao[0];
    descricao = descricao.slice(1,descricao.length);
    var html = "<div class='cabecalho'> <b>" + classe.nome + "</b> </div>"
             + "<div class='det_esquerda'> <img class='det_imagem' src='img/" + classe.imagem + "'> </img> </div>"
             + "<div class='det_direita'> <div class='det_atributo'> <b> Atributos Bônus </b> </div>";
    if(atributos[idFOR]) { html += "<div class='det_detalhe'> Força +1 </div>";        } 
    if(atributos[idAGI]) { html += "<div class='det_detalhe'> Agilidade +1 </div>";    }
    if(atributos[idINT]) { html += "<div class='det_detalhe'> Inteligência +1 </div>"; }
    if(atributos[idVON]) { html += "<div class='det_detalhe'> Vontade +1 </div>";      }
    html += "<div class='det_atributo'> <b> Habilidade Automática </b> </div>"
          + "<div class='det_detalhe'>" + habilidade + "</div>"
          + "<div class='det_descricao'> <i> <a class='det_primeira'>" + primeiraLetra + "</a>" + descricao + " </i> <div>"
          + "</div> </div> </div> <div class='rodapezim'> </div>";
    _detalhador.innerHTML = html;
  }


  function carregarHTMLDeAntecedenteNoDetalhador(antecedente) {
    var requisitos = antecedente.requisitos, beneficio = antecedente.beneficio, equipamento = antecedente.equipamento,
        descricao  = antecedente.descricao,  primeiraLetra = descricao[0];      
    descricao = descricao.slice(1,descricao.length);
    var html = " <div class='cabecalho'> <b>" + antecedente.nome + "</b> </div>"
             + " <div class='det_esquerda'>"
             + "   <img class='det_imagem' src='img/" + antecedente.imagem + "'> </img>"
             + " </div>"
             + " <div class='det_direita'>"
             + " <div class='det_descricao_antec'>";
    if(requisitos.length > 1) { html += "<div class='det_atributo'> <b> Requisitos </b> </div>"; }
                         else { html += "<div class='det_atributo'> <b> Requisito  </b> </div>"; }
    if(requisitos.length > 0) { html += "<div class='det_detalhe'>" + htmlDeRequisitos(requisitos) + "</div>"; }
                         else { html += "<div class='det_detalhe'> Nenhum </div>";                             }
    html += " <div class='det_atributo'> <b> Benefício </b> </div> <div class='det_detalhe'>" + beneficio + "</div>";
    if(equipamento.length > 0) { html += "<br/> <div class='det_detalhe'> <b> + " + equipamento + "</b> </div>"; }
    html += "<br/><br/> <div class='det_detalhe'> <a class='det_primeira'> <i>" + primeiraLetra + "</a>" 
          + descricao + "</i> </div> </div> </div> </div> </div> <div class='rodapezim'> </div>";
    _detalhador.innerHTML = html;
  }


  function carregarHTMLDeCaminhoNoDetalhador(caminho) {
    var requisitos = caminho.requisitos, habilidade = caminho.automatica, descricao = caminho.descricao,
        primeiraLetra = descricao[0];    descricao = descricao.slice(1,descricao.length);
    var html = " <div class='cabecalho'> <b>" + caminho.nome + "</b> </div>"
             + " <div class='det_esquerda'> <img class='det_imagem' src='img/" + caminho.imagem + "'> </img>"
             + " </div> <div class='det_direita'>"
    if(requisitos.length > 0) {
      if(requisitos.length > 1) { html += "<div class='det_atributo'> <b> Requisitos </b> </div>"; }
                           else { html += "<div class='det_atributo'> <b> Requisito </b> </div>";  }
      html += "<div class='det_detalhe'>" + htmlDeRequisitos(requisitos) + "</div>";
    }
    html += "  <div class='det_atributo'> <b> Habilidade Automática </b>   </div>"
          + "  <div class='det_detalhe'>" + habilidade.nome             + "</div>";
    if(descricao.length > 250) {
      html += "<div class='det_descricao_extra_longa'> <i>" 
           + "<a class='det_primeira'>" + primeiraLetra + "</a>" + descricao + "</i> </div>";
    } else {
      html += "<div class='det_descricao'><i><a class='det_primeira'>"+ primeiraLetra +"</a>"+ descricao +"</i></div>";
    }
    html += " </div> </div> <div class='rodapezim'> </div>";
    _detalhador.innerHTML = html;
  }


  function carregarHTMLDeOrganizacaoNoDetalhador(organizacao) {
    var descricao = organizacao.descricao;
    var primeiraLetra = descricao[0];
    descricao = descricao.slice(1,descricao.length);
    var html = "<div class='cabecalho'> <b>" + organizacao.nome     + "</b> </div>"
             + "<div class='det_esquerda'> <img class='det_imagem' src='img/" + organizacao.imagem + "'> </img> </div>"
             + "<div class='det_direita'> <div class='det_descricao_completa'>"
             + "<i><a class='det_primeira'>" + primeiraLetra + "</a>" + descricao + "</i> </div>"
             + "</div> <div class='rodapezim'> </div>";
    _detalhador.innerHTML = html;
  }



//// E V O L U Ç Ã O ////

  function atualizarColunasDeEvolucao() {
  // Desabilita o texto de "Nv." caso o nível seja no mínimo 2:
    var elementoNv = document.getElementById("nivel_.");
    if(nivelDePersonagem > 1) { elementoNv.classList.add("liberado");    elementoNv.classList.remove("bloqueado"); }
                         else { elementoNv.classList.remove("liberado"); elementoNv.classList.add("bloqueado");    }
  // Libera ou bloqueia as colunas de 2 à 10:
    var minNivelOu10 = Math.min(nivelDePersonagem, 10);
    for(var n = 2; n <= minNivelOu10; n++) { liberarColunaDeEvolucao(n); }
    for(var n = nivelDePersonagem +1; n < 11; n++) { bloquearColunaDeEvolucao(n); }
  // Libera ou bloqueia as colunas dos níveis 12, 14, 18, 20:
    if(nivelDePersonagem > 11) { liberarColunaDeEvolucao(11);
      if(nivelDePersonagem > 13) { liberarColunaDeEvolucao(12);
        if(nivelDePersonagem > 17) { liberarColunaDeEvolucao(13);
           if(nivelDePersonagem > 19) { liberarColunaDeEvolucao(14); } else { bloquearColunaDeEvolucao(14);}
        } else { bloquearColunaDeEvolucao(13); bloquearColunaDeEvolucao(14); }
      } else { bloquearColunaDeEvolucao(12); bloquearColunaDeEvolucao(13); bloquearColunaDeEvolucao(14); }    
    } else { bloquearColunaDeEvolucao(11); bloquearColunaDeEvolucao(12); 
             bloquearColunaDeEvolucao(13); bloquearColunaDeEvolucao(14); }
  }


  function liberarColunaDeEvolucao(n) {
  // Atualiza a cor do indicador de nível sobre as checkbox:
    elementoNv = document.getElementById("nivel_" + n);
    elementoNv.classList.add("liberado");
    elementoNv.classList.remove("bloqueado");
  // Separa os bits do elementoDeEvolucao do vetor, e descobre se nenhum seleção foi realizada
    var elementoDeEvolucao = (vetorDeEvolucao[n] & 31);
    var naoVazio = (elementoDeEvolucao != 0);
  // Desabilita as checkbox que não podem ser selecionadas
    document.getElementById("checkbox_vida+10_"  + n).disabled = naoVazio & (elementoDeEvolucao != 1);
    document.getElementById("checkbox_mana+10_"  + n).disabled = naoVazio & (elementoDeEvolucao != 2);
    document.getElementById("checkbox_v&m+5_"    + n).disabled = naoVazio & (elementoDeEvolucao != 4);
    document.getElementById("checkbox_aprendiz_" + n).disabled = 
      (elementoDeEvolucao != 8) & (naoVazio | ((vetorDeEvolucao[n] & 32) > 0));
    document.getElementById("checkbox_caminho_"  + n).disabled = 
      (elementoDeEvolucao != 16) & (naoVazio | ((vetorDeEvolucao[n] & 64) > 0));
  }


  function bloquearColunaDeEvolucao(n) {
  // Atualiza a cor do indicador de nível sobre as checkbox:
    elementoNv = document.getElementById("nivel_" + n);
    elementoNv.classList.remove("liberado");
    elementoNv.classList.add("bloqueado");
  // Desmarca os bits das opções selecionadas, mas mantém os bits de Aprendiz e Caminho:
    vetorDeEvolucao[n] = vetorDeEvolucao[n] & 96;
  // Desabilita as checkbox
    document.getElementById("checkbox_vida+10_"  + n).disabled = true;
    document.getElementById("checkbox_mana+10_"  + n).disabled = true;
    document.getElementById("checkbox_v&m+5_"    + n).disabled = true;
    document.getElementById("checkbox_aprendiz_" + n).disabled = true;
    document.getElementById("checkbox_caminho_"  + n).disabled = true;
  // Se necessário coloca 0 nos bits para Aprendiz ou Caminho e habilita as checkboxes liberadas
    if(document.getElementById("checkbox_aprendiz_" + n).checked) {
      document.getElementById("checkbox_aprendiz_" + n).checked = false;
      desmarcarBitDeEvolucaoParaAprendizOuCaminho(idFontAprnd);
      atualizarAprendiz(idNulo);
    } else if (document.getElementById("checkbox_caminho_" + n).checked) {
      document.getElementById("checkbox_caminho_" + n).checked = false;
      desmarcarBitDeEvolucaoParaAprendizOuCaminho(idFontCamin);
      atualizarCaminho(idNulo);
    } else {
      document.getElementById("checkbox_vida+10_" + n).checked = false;
      document.getElementById("checkbox_mana+10_" + n).checked = false;
      document.getElementById("checkbox_v&m+5_"   + n).checked = false;
    }
  }


  function cliqueEvolucao(evolucao, nivel) {
  // Captura o checkbox clicado:
    var clicado = document.getElementById("checkbox_" + stringsDeEvolucao[evolucao] + "_" + nivel);
  // Se o clique ativou o checkbox marca-se o respectivo bit, se desativou desmarca-se:
    if(clicado.checked) {
    // Se o clique foi na linha de Aprendiz (4) ou Caminho (5):
      if(evolucao >= 4) {
      // bit2 = 4^2 (para Aprendiz) ou 5^2 (para Caminho):
        var bit2 = bitsDeEvolucao[evolucao+2];
      // 1 no o bit de Aprendiz ou Caminho para todos os níveis:
        vetorDeEvolucao[2]  = vetorDeEvolucao[2]  | bit2;
        vetorDeEvolucao[3]  = vetorDeEvolucao[3]  | bit2;
        vetorDeEvolucao[4]  = vetorDeEvolucao[4]  | bit2;
        vetorDeEvolucao[5]  = vetorDeEvolucao[5]  | bit2;
        vetorDeEvolucao[6]  = vetorDeEvolucao[6]  | bit2;
        vetorDeEvolucao[7]  = vetorDeEvolucao[7]  | bit2;
        vetorDeEvolucao[8]  = vetorDeEvolucao[8]  | bit2;
        vetorDeEvolucao[9]  = vetorDeEvolucao[9]  | bit2;
        vetorDeEvolucao[10] = vetorDeEvolucao[10] | bit2;
      // Libera a seleção de Aprendiz ou Caminho:
        desbloquearSelecaoDeAprendizOuCaminho((evolucao) == 4);
      }
      vetorDeEvolucao[nivel] = vetorDeEvolucao[nivel] | bitsDeEvolucao[evolucao];
    }
  // Se o lique desativou o checkbox:
    else {
    // Se o clique foi na linha de Aprendiz (4) ou Caminho (5):
      if(evolucao >= 4) { desmarcarBitDeEvolucaoParaAprendizOuCaminho(evolucao); }
    // Zera o vetor do nível selecionado, mantendo os bits de Aprendiz e Caminho:
      vetorDeEvolucao[nivel] = vetorDeEvolucao[nivel] & 96;
    }
  // Atualiza as colunas; E os valores totais de Vida e Mana:
    atualizarColunasDeEvolucao();
    atualizarHTMLDeVidaEMana();
  }


  function desmarcarBitDeEvolucaoParaAprendizOuCaminho(bit) {
  // bit2 = 4^2 (para Aprendiz) ou 5^2 (para Caminho)
    var bit2 = bitsDeEvolucao[bit+2];
  // 0 no bit de Aprendiz ou Caminho para todos os níveis
    vetorDeEvolucao[2]  = vetorDeEvolucao[2]  ^ bit2;
    vetorDeEvolucao[3]  = vetorDeEvolucao[3]  ^ bit2;
    vetorDeEvolucao[4]  = vetorDeEvolucao[4]  ^ bit2;
    vetorDeEvolucao[5]  = vetorDeEvolucao[5]  ^ bit2;
    vetorDeEvolucao[6]  = vetorDeEvolucao[6]  ^ bit2;
    vetorDeEvolucao[7]  = vetorDeEvolucao[7]  ^ bit2;
    vetorDeEvolucao[8]  = vetorDeEvolucao[8]  ^ bit2;
    vetorDeEvolucao[9]  = vetorDeEvolucao[9]  ^ bit2;
    vetorDeEvolucao[10] = vetorDeEvolucao[10] ^ bit2;
  // Bloqueia a seleção de Aprendiz ou Caminho:
    bloquearSelecaoDeAprendizOuCaminho((bit)==4);
  }


  function liberarBonusDePrimeiraMarca() {
    habilidadePrimeiraMarca = true;  var elemento = document.getElementById("primarca");
    elemento.classList.add("liberado");  elemento.classList.remove("bloqueado");  primeiraMarca = "";
    _checkVida.disabled = false; _checkVida.checked = false; _checkMana.disabled = false; _checkMana.checked = false;
    atualizarHTMLDeVidaEMana();
  }


  function bloquearBonusDePrimeiraMarca() {
    habilidadePrimeiraMarca = false;  var elemento = document.getElementById("primarca");
    elemento.classList.remove("liberado");  elemento.classList.add("bloqueado");  primeiraMarca = "";
    _checkVida.disabled = true; _checkVida.checked = false; _checkMana.disabled = true; _checkMana.checked = false;
    atualizarHTMLDeVidaEMana();
  }


  function cliquePrimeiraMarca() {
    var vidaChecked = _checkVida.checked, manaChecked = _checkMana.checked;
    if(_checkVida.checked) { primeiraMarca = "vida"; } _checkVida.disabled = manaChecked;
    if(_checkMana.checked) { primeiraMarca = "mana"; } _checkMana.disabled = vidaChecked;
    primeiraMarca = "";  atualizarHTMLDeVidaEMana();
  }


  function atualizarHTMLDeVidaEMana() {
    vida = vidaInicial + vidaBonus;  mana = manaInicial + manaBonus;
    var html_vida = "<a class='const'> ( </a> <a class='bonus' title='Inicial'> " + vidaInicial + "</a>";
    if(vidaBonus > 0) { 
      html_vida += "<a class='const'>+</a><a class='bonus' title='Habilidades'>" + vidaBonus + "</a>"; 
    } else if(manaBonus < 0) { 
      html_vida += "<a class='const'>-</a><a class='bonus' title='Habilidades'>" + vidaBonus + "</a>"; 
    }
    var html_mana = "<a class='const'> ( </a> <a class='bonus' title='Inicial'> " + manaInicial + "</a>";
    if(manaBonus > 0) {
      html_mana += "<a class='const'>+</a><a class='bonus' title='Habilidades'>" + manaBonus + "</a>"; 
    } else if(manaBonus < 0) {
      html_mana += "<a class='const'>-</a><a class='bonus' title='Habilidades'>" + manaBonus + "</a>"; 
    }
    for(var n = 2; n <= nivelDePersonagem; n++) {
      var elementoDeEvolucao = (vetorDeEvolucao[n] & 31);
      if(elementoDeEvolucao == 1) {
        vida += 10;
        html_vida += "<a class='const'>+</a><a class='bonus'title='Nível " + evolucaoNivel[n] + "'>10</a>";
      } else if(elementoDeEvolucao == 2) {
        mana += 10;
        html_mana += "<a class='const'>+</a><a class='bonus'title='Nível " + evolucaoNivel[n] + "'>10</a>";
      } else if(elementoDeEvolucao == 4) {
        vida += 5; mana += 5;
        html_vida += "<a class='const'>+</a><a class='bonus' title='Nível " + evolucaoNivel[n] + "'>5</a>";
        html_mana += "<a class='const'>+</a><a class='bonus' title='Nível " + evolucaoNivel[n] + "'>5</a>";
      }
    }
    if(_checkVida.checked) {
      vida += 10; html_vida += "<a class='const'>+</a><a class='bonus'title='Primeira Marca'>10</a>";
    } else if(_checkMana.checked) {
      mana += 10; html_mana += "<a class='const'>+</a><a class='bonus'title='Primeira Marca'>10</a>";
    }
    _VidaTotal.innerHTML = "" + vida + html_vida + "<a class='const'> ) </a>";
    _ManaTotal.innerHTML = "" + mana + html_mana + "<a class='const'> ) </a>";
  }



//// A T R I B U T O S  ////

  function atualizarColunasDeAtributosPorNivel() {
  // Libera ou bloqueia a coluna Nível 10, zerando os modificadores se necessário.
    if(nivelDePersonagem > 15) {
      if(atributosEModificadores[idAtNvl16][idFOR] == modBloq) {
        atributosEModificadores[idAtNvl16] = [modLibr, modLibr, modLibr, modLibr];
      }
      ativarAtributosDeModificador(idAtNvl16, atributosEModificadores[idAtNvl16], true);
    } else {
      atributosEModificadores[idAtNvl16] = [modBloq, modBloq, modBloq, modBloq];
      desativarAtributosDeModificador(idAtNvl16, atributosEModificadores[idAtNvl16], true);
    }
  // Libera ou bloqueia a coluna Nível 10, zerando os modificadores se necessário.
    if(nivelDePersonagem > 9) {
      if(atributosEModificadores[idAtNvl10][idFOR] == modBloq) {
        atributosEModificadores[idAtNvl10] = [modLibr, modLibr, modLibr, modLibr];
      }
      ativarAtributosDeModificador(idAtNvl10, atributosEModificadores[idAtNvl10], true);
    } else {
      atributosEModificadores[idAtNvl10] = [modBloq, modBloq, modBloq, modBloq];
      desativarAtributosDeModificador(idAtNvl10, atributosEModificadores[idAtNvl10], true);
    }
  // Libera ou bloqueia a coluna Nível 7, zerando os modificadores se necessário.
    if(nivelDePersonagem > 6) {
      if(atributosEModificadores[idAtNivl7][idFOR] == modBloq) {
        atributosEModificadores[idAtNivl7] = [modLibr, modLibr, modLibr, modLibr];
      }
      ativarAtributosDeModificador(idAtNivl7, atributosEModificadores[idAtNivl7], true);
    } else {
      atributosEModificadores[idAtNivl7] = [modBloq, modBloq, modBloq, modBloq];
      desativarAtributosDeModificador(idAtNivl7, atributosEModificadores[idAtNivl7], true);
    }
  // Libera ou bloqueia a coluna Nível 4, zerando os modificadores se necessário.
    if(nivelDePersonagem > 3) {
      if(atributosEModificadores[idAtNivl4][idFOR] == modBloq) {
        atributosEModificadores[idAtNivl4] = [modLibr, modLibr, modLibr, modLibr];
      }
      ativarAtributosDeModificador(idAtNivl4, atributosEModificadores[idAtNivl4], true);
    } else {
      atributosEModificadores[idAtNivl4] = [modBloq, modBloq, modBloq, modBloq];
      desativarAtributosDeModificador(idAtNivl4, atributosEModificadores[idAtNivl4], true);
     }
    atualizarTotalDeAtributos();
  }


  function ativarAtributosDeModificador(idDoModificador, valores, checkbox) {
    var elemento = document.getElementById("coluna_" + stringsDeModificadoresDeAtributo[idDoModificador]);
    elemento.classList.add("liberado");
    elemento.classList.remove("bloqueado");
    if(idDoModificador == idAtAntec) { liberarAtributosDeAntecedente(idDoModificador, valores);           }
                                else { liberarAtributosDeModificador(idDoModificador, valores, checkbox); }
  }


  function liberarAtributosDeAntecedente(idDoModificador, valores) {
  // Força:
    if((bitsDeAntecedente & 1) > 0) {  
      valores[idFOR] = modLibr;
      liberarAtributoDeModificador(idFOR, idDoModificador, valores[idFOR], true);
    } else {
      valores[idFOR] = modBloq;
      bloquearAtributoDeModificador(idFOR, idDoModificador, valores[idFOR], true);
    }
  // Agilidade:
    if((bitsDeAntecedente & 2) > 0) {
      valores[idAGI] = modLibr;
      liberarAtributoDeModificador(idAGI, idDoModificador, valores[idAGI], true);
    } else {
      valores[idAGI] = modBloq;
      bloquearAtributoDeModificador(idAGI, idDoModificador, valores[idAGI], true);
    }
  // Inteligência:
    if((bitsDeAntecedente & 4) > 0) {
      valores[idINT] = modLibr;
      liberarAtributoDeModificador(idINT, idDoModificador, valores[idINT], true);
    } else {
      valores[idINT] = modBloq;
      bloquearAtributoDeModificador(idINT, idDoModificador, valores[idINT], true);
    }
  // Vontade:
    if((bitsDeAntecedente & 8) > 0) {
      valores[idVON] = modLibr;
      liberarAtributoDeModificador(idVON, idDoModificador, valores[idVON], true);
    } else {
      valores[idVON] = modBloq;
      bloquearAtributoDeModificador(idVON, idDoModificador, valores[idVON], true);
    }
  }


  function liberarAtributosDeModificador(idDoModificador,valores, checkbox) {
    if(idDoModificador == idAtAntec) { liberarAtributosDeAntecedente(idDoModificador, valores); return; }
    if(checkbox & somaDeModificadorDuploConcluida(idDoModificador)) { return; }
    liberarAtributoDeModificador(idFOR, idDoModificador, valores[idFOR], checkbox);
    liberarAtributoDeModificador(idAGI, idDoModificador, valores[idAGI], checkbox);
    liberarAtributoDeModificador(idINT, idDoModificador, valores[idINT], checkbox);
    liberarAtributoDeModificador(idVON, idDoModificador, valores[idVON], checkbox);
  }


  function liberarAtributoDeModificador(idDoAtributo, idDoModificador, valor, checkbox) {
    var modificador = stringsDeModificadoresDeAtributo[idDoModificador];
    var atributo = stringsDeAtributos[idDoAtributo];
    if(checkbox) {
      document.getElementById("checkbox_" + atributo + "_" + modificador).disabled = false;
    }
    atualizarHTMLDeModificador(("" + atributo + "_" + modificador + "_texto"), valor);
  }


  function desativarAtributosDeModificador(idDoModificador, valores, checkbox) {
    var elemento = document.getElementById("coluna_" + stringsDeModificadoresDeAtributo[idDoModificador]);
    elemento.classList.remove("liberado");
    elemento.classList.add("bloqueado");
    bloquearAtributosDeModificador(idDoModificador, valores, checkbox);
  }


  function bloquearAtributosDeModificador(idDoModificador, valores, checkbox) {
    bloquearAtributoDeModificador(idFOR, idDoModificador, valores[idFOR], checkbox);
    bloquearAtributoDeModificador(idAGI, idDoModificador, valores[idAGI], checkbox);
    bloquearAtributoDeModificador(idINT, idDoModificador, valores[idINT], checkbox);
    bloquearAtributoDeModificador(idVON, idDoModificador, valores[idVON], checkbox);
  }


  function bloquearAtributoDeModificador(idDoAtributo, idDoModificador, valor, possuiCheckbox) {
    var modificador = stringsDeModificadoresDeAtributo[idDoModificador];
    var atributo = stringsDeAtributos[idDoAtributo];
    if(possuiCheckbox) {
      var checkbox = document.getElementById("checkbox_" + atributo + "_" + modificador);
      checkbox.disabled = true;  checkbox.checked = false;
    }
    atualizarHTMLDeModificador(("" + atributo + "_" + modificador + "_texto"), valor);
  }


  function atualizarHTMLDeModificador(nomeDoElemento, valor) {
    var elemento = document.getElementById(nomeDoElemento);
    switch(valor) {
      case modBloq: elemento.style.color = "gray";  elemento.innerHTML = "0";                      break;
      case modNega: elemento.style.color = "red";   elemento.innerHTML = "<a> -1 </a>";            break;
      case modLibr: elemento.style.color = "black"; elemento.innerHTML = "0";                      break;
      default:      elemento.style.color = "black"; elemento.innerHTML = "<a> +" + valor + "</a>"; break;
    }
  }


  function atualizarTotalDeAtributos() {
  // Reseta o total de todos os atributos:
    atributosEModificadores[idAtTotal] = [0, 0, 0, 0];
  // Soma todos os modificadores no total:
    for(var i = 1; i < quantidadeDeAtributosEModificadores; i++) {
      var atributo = atributosEModificadores[i][idFOR];
      if(atributo != modBloq) { atributosEModificadores[idAtTotal][idFOR] += atributo; }
      atributo = atributosEModificadores[i][idAGI];
      if(atributo != modBloq) { atributosEModificadores[idAtTotal][idAGI] += atributo; }
      atributo = atributosEModificadores[i][idINT];
      if(atributo != modBloq) { atributosEModificadores[idAtTotal][idINT] += atributo; }
      atributo = atributosEModificadores[i][idVON];
      if(atributo != modBloq) { atributosEModificadores[idAtTotal][idVON] += atributo; }
    }
  // Atualiza o texto com o valor total:
    _forTotal.innerHTML = "" + atributosEModificadores[idAtTotal][idFOR];
    _agiTotal.innerHTML = "" + atributosEModificadores[idAtTotal][idAGI];
    _intTotal.innerHTML = "" + atributosEModificadores[idAtTotal][idINT];
    _vonTotal.innerHTML = "" + atributosEModificadores[idAtTotal][idVON];
  // Atualiza os dependentes dos atributos:
    atualizarAtaqueDefesaCarga();
    atualizarCargaEDeslocamento(0);
    atualizarIniciativa();
    atualizarArmasEDefesas();
  }


  function atualizarTotalDeUnicoAtributo(id) {
  // Reseta o total do atributo com o "id" recebido:
    atributosEModificadores[idAtTotal][id] = 0;
  // Soma todos os modificadores do atributo no seu total:
    for(var i = 1; i < 9; i++) {
      var modificador = atributosEModificadores[i][id];
      if(modificador != modBloq) { atributosEModificadores[idAtTotal][id] += modificador; }
    }
  // Atualiza o texto do atributo
    document.getElementById("" + stringsDeAtributos[id] + "_total_texto").innerHTML = "" + atributosEModificadores[idAtTotal][id];
  // Atualiza os dependentes dos atributos:
    atualizarAtaqueDefesaCarga();
    atualizarIniciativa();
    atualizarArmasEDefesas();
  }


  function cliqueModificadorUnicoDeAtributo(idDoAtributo, idDoModificador) {
  // Extrai as strings de atributo e modificador, e seleciona o checkbox clicado:
    var atributo = stringsDeAtributos[idDoAtributo];
    var modificador = stringsDeModificadoresDeAtributo[idDoModificador];
    var clicado = document.getElementById("checkbox_" + atributo + "_" + modificador);
  // Se a checkbox foi marcado, desabilita os demais checkbox:
    if(clicado.checked) {
      if(idDoModificador == idAtAntec) {
        atributosEModificadores[idDoModificador][idDoAtributo] = modNega;
        desbloquearSelecaoDeAntecedente();
      } else {
        atributosEModificadores[idDoModificador][idDoAtributo] = modPosi;
      }
      bloquearAtributosDeModificador(idDoModificador, atributosEModificadores[idDoModificador], true);
      clicado.checked = true;
    } else {
    // Se desmarcado, habilita todos. E atualiza o modificador:
      if(idDoModificador == idAtAntec) {
        bloquearSelecaoDeAntecedente();
      }
      atributosEModificadores[idDoModificador][idDoAtributo] = modLibr;
      liberarAtributosDeModificador(idDoModificador, atributosEModificadores[idDoModificador], true);
    }
  // Libera o checkbox clicado; e atualiza os dependentes:
    liberarAtributoDeModificador(idDoAtributo, idDoModificador, atributosEModificadores[idDoModificador][idDoAtributo], true);
    atualizarTotalDeUnicoAtributo(idDoAtributo);  atualizarRegistroDeRotulos();
    atualizarHTMLDosRotulosSelecionados();        atualizarHTMLDoSeletorDeHabilidades();
  }


  function cliqueModificadorDuploDeAtributo(idDoAtributo, idDoModificador) {
  // Extrai as strings do atributo e modificador a partir dos ids:
    var atributo = stringsDeAtributos[idDoAtributo];
    var modificador = stringsDeModificadoresDeAtributo[idDoModificador];
    var modificadores = atributosEModificadores[idDoModificador];
  // Modifica o texto da checkbox selecionada no nível e atributo apropriados:
    if(document.getElementById("checkbox_" + atributo + "_" + modificador).checked) {
      atributosEModificadores[idDoModificador][idDoAtributo] = modPosi;
    } else {
      atributosEModificadores[idDoModificador][idDoAtributo] = modLibr;
    }
  // Bloqueia os demais checkbox quando dois estiverem ativos por nível de bônus, senão libera:
    if(somaDeModificadorDuploConcluida(idDoModificador)) {
      if(atributosEModificadores[idDoModificador][idFOR] < 1) {
        bloquearAtributoDeModificador(idFOR, idDoModificador, modificadores[idFOR], true);
      }
      if(atributosEModificadores[idDoModificador][idAGI] < 1) {
        bloquearAtributoDeModificador(idAGI, idDoModificador, modificadores[idAGI], true);
      }
      if(atributosEModificadores[idDoModificador][idINT] < 1) {
        bloquearAtributoDeModificador(idINT, idDoModificador, modificadores[idINT], true);
      }
      if(atributosEModificadores[idDoModificador][idVON] < 1) {
        bloquearAtributoDeModificador(idVON, idDoModificador, modificadores[idVON], true);
      }
      liberarAtributoDeModificador(idDoAtributo, idDoModificador, modificadores[idDoAtributo], true);
    } else {
      liberarAtributoDeModificador(idFOR, idDoModificador, modificadores[idFOR], true);
      liberarAtributoDeModificador(idAGI, idDoModificador, modificadores[idAGI], true);
      liberarAtributoDeModificador(idINT, idDoModificador, modificadores[idINT], true);
      liberarAtributoDeModificador(idVON, idDoModificador, modificadores[idVON], true);
    }
  // Atualiza os dependentes:
    atualizarTotalDeAtributos();            atualizarRegistroDeRotulos();
    atualizarHTMLDosRotulosSelecionados();  atualizarHTMLDoSeletorDeHabilidades();
  }


  function somaDeModificadorDuploConcluida(idDoModificador) {
    var modificadores = atributosEModificadores[idDoModificador];
    return ((modificadores[idFOR] + modificadores[idAGI] + modificadores[idINT] + modificadores[idVON]) > 1);
  }


  function cliqueAtributo(atributo, nivel) {
    //if(document.getElementById("checkbox_" + atributo + "_" + nivel).checked) { }
    document.getElementById("checkbox_" + atributo + "_" + nivel).disabled = false;
  }


  function adicionarModificadorDeAtributoPorHabilidade(idDoAtributo, nomeDaHabilidade, modificador) {
  // Atualiza o valor e o total de atributos:
    atributosEModificadores[idAtHabil][idDoAtributo] += modificador;
    atualizarTotalDeAtributos();
  // Acrescenta a habilidade modificadora na lista de seu respectivo atributo e atualiza o valor total:
    habilidadesModificadorasDeAtributos.push([idDoAtributo, nomeDaHabilidade, modificador]);
    atualizarModificadoresDeAtributosPorHabilidades();
  }


  function removerModificadorDeAtributoPorHabilidade(nomeDaHabilidade) {
  // Varre a lista até encontrar (pelo nome) a habilidade a ser eliminada, remove-a e atualiza o atributo:
    var quantidade = habilidadesModificadorasDeAtributos.length;
    for(var i = 0; i < quantidade; i++) {
      var modificador = habilidadesModificadorasDeAtributos[i];
      if(nomeDaHabilidade == modificador[idModNome]) {
        atributosEModificadores[idAtHabil][modificador[idModAtributo]];
        habilidadesModificadorasDeAtributos.splice(i, 1);
        atualizarModificadoresDeAtributosPorHabilidades();
        break;
      }
    }
  // Atualiza os atributos:
    atualizarTotalDeAtributos();
  }



  function atualizarModificadoresDeAtributosPorHabilidades() {
  // Preapara as variáveis:
    var a = "<a class='const'> (</a>", z = "<a class='const'> )</a>",
        totalFOR = 0, totalAGI = 0, totalINT = 0, totalVON = 0,
        html_for = "", html_agi = "", html_int = "", html_von = "";
  // Varre os modificadores acrescentando os modificadores e html aos atributos:
    var quantidade = habilidadesModificadorasDeAtributos.length;
    for(var i = 0; i < quantidade; i++) {
      var modificador = habilidadesModificadorasDeAtributos[i];
      var valor = modificador[idModBonus];
      var html = "<a class='const'> +</a><a title='" + modificador[idModNome] + "' class='bonus'>" + valor + "</a>";
      switch(modificador[idModAtributo]) {
        case idFOR:  totalFOR += valor;  html_for += html;  break;
        case idAGI:  totalAGI += valor;  html_agi += html;  break;
        case idINT:  totalINT += valor;  html_int += html;  break;
        case idVON:  totalVON += valor;  html_von += html;  break;
      }
    }
  // Atualiza o HTML:
    if(totalFOR > 0) {
      document.getElementById(""+stringsDeAtributos[idFOR]+"_habilidades").innerHTML = "+" + totalFOR + a + html_for + z;
    } else {
      document.getElementById(""+stringsDeAtributos[idFOR]+"_habilidades").innerHTML = "+0";
    }
    if(totalAGI > 0) {
      document.getElementById(""+stringsDeAtributos[idAGI]+"_habilidades").innerHTML = "+" + totalAGI + a + html_agi + z;
    } else {
      document.getElementById(""+stringsDeAtributos[idAGI]+"_habilidades").innerHTML = "+0";
    }
    if(totalINT > 0) {
      document.getElementById(""+stringsDeAtributos[idINT]+"_habilidades").innerHTML = "+" + totalINT + a + html_int + z;
    } else {
      document.getElementById(""+stringsDeAtributos[idINT]+"_habilidades").innerHTML = "+0";
    }
    if(totalVON > 0) {
      document.getElementById(""+stringsDeAtributos[idVON]+"_habilidades").innerHTML = "+" + totalVON + a + html_von + z;
    } else {
      document.getElementById(""+stringsDeAtributos[idVON]+"_habilidades").innerHTML = "+0";
    }
  }



//// H A B I L I D A D E S ////

  function selecionarFonteDeHabilidades(idDaFonte) {
  // Atualiza graficamente os botões para indicar qual fonte foi selecionada:
    _botaoHabilidadeRaca_.classList.remove("botao_fonte_s");
    _botaoHabilidadeClass.classList.remove("botao_fonte_s");
    _botaoHabilidadeAprnd.classList.remove("botao_fonte_s");
    _botaoHabilidadeCamin.classList.remove("botao_fonte_s");
    _botaoHabilidadeGeral.classList.remove("botao_fonte_s");
    _botaoHabilidadeExtra.classList.remove("botao_fonte_s");
    _botaoHabilidadeOrgan.classList.remove("botao_fonte_s");
    _botaoHabilidadeDogma.classList.remove("botao_fonte_s");
    _botaoHabilidadeEspAn.classList.remove("botao_fonte_s");
    document.getElementById("botao_habilidade_" + idDaFonte).classList.add("botao_fonte_s");
  // Carrega as habilidades apropriadas:
    var fonte = "";
    switch(idDaFonte) {
      case idFontGeral: habilidadesNoSeletor = habilidadesGerais;           fonte = "Habilidade Geral";        break;
      case idFontRaca_: habilidadesNoSeletor = habilidadesDeRaca;           fonte = "Habilidade de Raça";      break;
      case idFontClass: habilidadesNoSeletor = habilidadesDeClasse;         fonte = "Habilidade de Classe";    break;
      case idFontAprnd: habilidadesNoSeletor = habilidadesDeAprendiz;       fonte = "Habilidade de Aprendiz";  break;
      case idFontCamin: habilidadesNoSeletor = habilidadesDeCaminho;        fonte = "Habilidade de Caminho";   break;
      case idFontExtra: habilidadesNoSeletor = habilidadesDeFonteExtra;     fonte = "Habilidade Extra";        break;
      case idFontOrgan: habilidadesNoSeletor = habilidadesDeOrganizacao;    fonte = "Habilidade de Organiz.";  break;
      case idFontDogma: habilidadesNoSeletor = habilidadesDeDogma;          fonte = "Dogmas";                  break;
      case idFontEspAn: habilidadesNoSeletor = habilidadesDeEspiritoAnimal; fonte = "Espíritos Animais";       break;
      default: return;
    }
  // Atualiza o rótulo de "Nome" com o tipo de habilidade:
    _cabecalhoDeHabilidade.innerHTML = "<b> " + fonte + "</b>";
  // Cancela o "scrolling" realizado ao trocar de aba, se for uma aba diferente:
    if(idFonteDeHabilidades != idDaFonte) {
      _seletorDeHabilidades.scrollTop = 0;
      idFonteDeHabilidades = idDaFonte;
    }
  // Atualiza o HTML com a lista de Habilides apropriada:
    atualizarHTMLDoSeletorDeHabilidades();
  }


  function atualizarHabilidadesDisponiveis() {
    habilidadesDisponiveis[0] = habilidadesPorNivel[nivelDePersonagem] - habilidadesSelecionadas.length;
    atualizarHTMLDasHabilidadesDisponiveis();
  }


  function carregarHabilidades(idDaLista) {
  // Coleta os nomes das habilidades a serem buscadas da fonte selecionada:
    var busca;
    switch(idDaLista) {
      case idFontRaca_: if(racaSelecionada == undefined) { habilidadesDeRaca = []; return; };
                        busca = racaSelecionada.habilidades; break;
      case idFontClass: if(classeSelecionada == undefined) { habilidadesDeClasse = []; return; }
                        busca = classeSelecionada.habilidades; break;
      case idFontAprnd: if(aprendizSelecionado == undefined) { habilidadesDeAprendiz = []; return; }
                        busca = aprendizSelecionado.habilidades; break;
      case idFontCamin: if(caminhoSelecionado == undefined) { habilidadesDeCaminho = []; return; }
                        busca = caminhoSelecionado.habilidades; break;
      case idFontGeral: busca = JSON.parse(json_habilidadesGerais()).habilidade; break;
      case idFontExtra: if(fonteExtraSelecionada == undefined) { habilidadesDeFonteExtra = []; return; }
                        busca = fonteExtraSelecionada; break;
      case idFontOrgan: if(organizacaoSelecionada == undefined) { habilidadesDeOrganizacao = []; return; }
                        busca = organizacaoSelecionada.habilidades; break;
      default: return;
    }
  // Carrega apenas as habilidades da fonte selecionada:
    var habilidadesCarregadas = [];
    var quantidade = busca.length;
    for(var i = 0; i < quantidade; i++) {
      var habilidade = todasAsHabilidades[busca[i]];
      if(habilidade != undefined) { habilidadesCarregadas.push(habilidade); }
    }
  // Carrega as habilidades no arranjo apropriado:
    switch(idDaLista) {
      case idFontRaca_: habilidadesDeRaca        = habilidadesCarregadas; break;
      case idFontClass: habilidadesDeClasse      = habilidadesCarregadas; break;
      case idFontAprnd: habilidadesDeAprendiz    = habilidadesCarregadas; break;
      case idFontCamin: habilidadesDeCaminho     = habilidadesCarregadas; break;
      case idFontGeral: habilidadesGerais        = habilidadesCarregadas; break;
      case idFontExtra: habilidadesDeFonteExtra  = habilidadesCarregadas; break;
      case idFontOrgan: habilidadesDeOrganizacao = habilidadesCarregadas; break;
    }
  }


  function existemHabilidadesDisponiveis() {
  // Há habilidades infinitas?
    if(habilidadesInfinitas) { return true; }
  // Há habilidades extras da fonte selecionada?
    if(habilidadesDisponiveis[idFonteDeHabilidades] > 0) { return true; }
  // Há habilidades livres?
    if(habilidadesDisponiveis[idFontGeral] > 0) { return true; }
  // Senão...
    return false;
  }


  function adicionarHabilidadeAutomaticaOuLivre(nomeDaHabilidadeAutomatica, idFonte) {
  // Se o personagem já possui a habilidade (automática ou selecionada), ele ganha uma extra da fonte:
    if(contemHabilidade(habilidadesAutomaticas, nomeDaHabilidadeAutomatica) |
      contemHabilidade(habilidadesSelecionadas, nomeDaHabilidadeAutomatica)) {
      habilidadesExtras[idFonte] = true;
      aumentarHabilidadesDisponiveis(idFonte);
      jaPossuiHabilidadeAutomatica[idFonte] = true;
      return;
    }
  // Senão ele recebe a habilidade automática normalmente;
    habilidadesExtras[idFonte] = false;
    adicionarHabilidadeAutomatica(nomeDaHabilidadeAutomatica, idFonte);
  }


  function removerHabilidadesPorFonteELivres(idFonte) {
  // Remove as habilidades da fonte e compensa os pontos de habilidade:
    var quantidadeRemovida = removerHabilidadesPorFonte(idFonte);
    for(var i = 0; i < quantidadeRemovida; i++) { aumentarHabilidadesDisponiveis(idFonte); }
  // Desmarca a habilidade automática:
    if(jaPossuiHabilidadeAutomatica[idFonte]) {
      diminuirHabilidadesDisponiveis(idFonte);
      jaPossuiHabilidadeAutomatica[idFonte] = false;
    }
  }


  function adicionarHabilidadeAutomatica(nome, fonte) {
  // Coleta a Habilidade requisitada entre "todasAsHabilidades" a partir do "nome":
    var habilidadeAutomatica = todasAsHabilidades[nome];
  // A Habilidade requisitada existe? Se não, retorne:
    if(habilidadeAutomatica == undefined) { return; }
  // Adiciona a Habilidade Automática encontrada no formato [Habilidade, idLista, Fonte, Nível]:
    habilidadesAutomaticas.push([habilidadeAutomatica, 0, fonte, 0]);
  // Mostra a Habilidade, antes que o id se perca com a ordenação:
    atualizarHTMLDoMostradorDeHabilidadeAutomatica(habilidadesAutomaticas.length-1);
  // Ordena os elementos:
    ordenar(habilidadesAutomaticas, true);
  // Aplica o efeito da habilidade
    aplicarEfeitos(habilidadeAutomatica.nome, habilidadeAutomatica.efeito);
  // Atualiza o HTML:
    atualizarHTMLDasHabilidadesPossuidas();
    atualizarHTMLDoSeletorDeHabilidades();
    atualizarRegistroDeRotulos()
  }


  function aumentarHabilidadesDisponiveis(idFonte) {
    if(habilidadesExtras[idFonte] & habilidadesDisponiveis[idFonte] == 0) { habilidadesDisponiveis[idFonte]++;     }
                                                                     else { habilidadesDisponiveis[idFontGeral]++; }
    atualizarHTMLDasHabilidadesDisponiveis();
  }


  function diminuirHabilidadesDisponiveis(idFonte) {
  // Diminui habilidade disponível da fonte selecionada, se possível:
    if(habilidadesDisponiveis[idFonte] > 0) { habilidadesDisponiveis[idFonte]--; }
  // Senão diminui das habilidades disponíveis gerais:
    else if(habilidadesDisponiveis[idFontGeral] > 0) { habilidadesDisponiveis[idFontGeral]--; }
  // Atualiza o HTML:
    atualizarHTMLDasHabilidadesDisponiveis();
  }


  function adicionarHabilidadeSelecionada(id, fonte) {
  // Se a Habilidade já foi selecionada antes, retorne:
  var habilidadeSelecionada = habilidadesNoSeletor[id];
  var nomeDaHabilidadeSelecionada = habilidadeSelecionada.nome;
  var quantidade = habilidadesSelecionadas.length;
  for(var i = 0; i < quantidade; i++) {
    if(nomeDaHabilidadeSelecionada == habilidadesSelecionadas[i][idHabPosHabil].nome) { return; }
  }
  // Diminui o contador de habilidades disponíveis:
    diminuirHabilidadesDisponiveis(fonte);
  // Estima o Nível em que a habilidade foi selecionada, sendo 1 o padrão:
    var nivel = habilidadesSelecionadas.length - 1; if(nivel < 1) { nivel = 1; }
  // Adiciona a Habilidade Selecionada encontrada no formato [Habilidade, idLista, Fonte, Nivel]:
    var novaHabilidade = [habilidadeSelecionada, id, fonte, nivel];
    habilidadesSelecionadas.push(novaHabilidade);
  // Mostra a Habilidade, antes que o id se perca com a ordenação:
    atualizarHTMLDoMostradorDeHabilidadeSelecionada(habilidadesSelecionadas.length-1);
  // Ordena as habilidades selecionadas:
    ordenar(habilidadesSelecionadas, true);
  // Aplica o efeito da habilidade
    aplicarEfeitos(habilidadeSelecionada.nome, habilidadeSelecionada.efeito);
  // Atualiza o HTML:
    atualizarHTMLDasHabilidadesPossuidas();
    atualizarHTMLDoSeletorDeHabilidades();
    atualizarRegistroDeRotulos()
  }


  function removerHabilidadeSelecionada(id) {
    aumentarHabilidadesDisponiveis(idFontGeral);
  // Remove os efeitos da habilidade:
    var habilidadeSelecionada = habilidadesSelecionadas[id][idHabPosHabil];
    removerEfeitos(habilidadeSelecionada.nome, habilidadeSelecionada.efeito);
  // Remove a habilidade da lista:
    habilidadesSelecionadas.splice(id, 1);
  // Ordena os elementos restantes:
    ordenar(habilidadesSelecionadas, true);
  // Atualiza o HTML:
    atualizarHTMLDasHabilidadesPossuidas();  atualizarHTMLDoSeletorDeHabilidades();
  }


  function removerHabilidadeSelecionadaPorNome(nome) { removerHabilidadePorNome(nome, habilidadesSelecionadas); }
  function removerHabilidadeAutomaticaPorNome(nome)  { removerHabilidadePorNome(nome, habilidadesAutomaticas);  }


  function removerHabilidadePorNome(nome, lista) {
   var pacoteDaHabilidade;
    var quantidade = lista.length;
    for(var i = 0; i < quantidade; i++) {
      pacoteDaHabilidade = lista[i];
      var habilidade = pacoteDaHabilidade[idHabPosHabil];
      if(nome == habilidade.nome) {
      // Remove os efeitos da habilidade encontrada:
        removerEfeitos(habilidade.nome, habilidade.efeito);
      // Aumenta as habilidadesDisponiveis:
        aumentarHabilidadesDisponiveis(lista[i][idHabPosFonte]);
      // Remove a habilidade encontrada da lista:
        lista.splice(i, 1);
      // Como só pode haver uma habilidade por nome:
        break;
      }
    }
  // Atualiza o HTML:
    atualizarHTMLDasHabilidadesPossuidas();  atualizarHTMLDoSeletorDeHabilidades();
  // Retorna a habilidade removida:
    return pacoteDaHabilidade;
  }


  function removerHabilidadePorNomeSemCompensar(nome, lista) {
   var pacoteDaHabilidade;
    var quantidade = lista.length;
    for(var i = 0; i < quantidade; i++) {
      pacoteDaHabilidade = lista[i];
      var habilidade = pacoteDaHabilidade[idHabPosHabil];
      if(nome == habilidade.nome) {
      // Remove os efeitos da habilidade encontrada:
        removerEfeitos(habilidade.nome, habilidade.efeito);
      // Remove a habilidade encontrada da lista:
        lista.splice(i, 1);
      // Como só pode haver uma habilidade por nome:
        break;
      }
    }
  // Atualiza o HTML:
    atualizarHTMLDasHabilidadesPossuidas();  atualizarHTMLDoSeletorDeHabilidades();
  // Retorna a habilidade removida:
    return pacoteDaHabilidade;
  }


  function removerHabilidadesPorNivel(nivel) {
    var quantidadeRemovida = 0;
  // Remove as habilidades da lista com o nivel indicado:
    quantidadeRemovida += removerHabilidadesDeLista(nivel, habilidadesSelecionadas, idHabPosNivel);
  // Ordena os elementos restantes:
    ordenar(habilidadesSelecionadas, true);
  // Atualiza o HTML:
    atualizarHTMLDasHabilidadesPossuidas();  atualizarHTMLDoSeletorDeHabilidades();
  //
    return quantidadeRemovida;
  }


  function removerHabilidadesPorFonte(fonte) {
    var quantidadeRemovida = 0;
  // Remove as habilidades automáticas e selecionadas de acordo com a fonte (Raça, Classe, etc.) indicada:
                         removerHabilidadesDeLista(fonte, habilidadesAutomaticas,  idHabPosFonte);
    quantidadeRemovida = removerHabilidadesDeLista(fonte, habilidadesSelecionadas, idHabPosFonte);
  // Ordena os elementos restantes de ambas as listas:
    ordenar(habilidadesAutomaticas, true);  ordenar(habilidadesSelecionadas, true);
  // Atualiza o HTML:
    atualizarHTMLDasHabilidadesPossuidas();  atualizarHTMLDoSeletorDeHabilidades();
  //
    return quantidadeRemovida;
  }


  function removerHabilidadesDeLista(chave, lista, posicaoDaChave) {
  // Varre a lista a procura da chave recebida:
    var quantidadeRemovida = 0;
    var quantidade = lista.length;
    for(var i = 0; i < quantidade; i++) {
      if(chave == lista[i][posicaoDaChave]) {
      // Remove os efeitos da habilidade encontrada:
        var habilidadeDaLista = lista[i][idHabPosHabil];
        removerEfeitos(habilidadeDaLista.nome, habilidadeDaLista.efeito);
      // Remove a habilidade encontrada da lista:
        lista.splice(i, 1);  i--;  quantidade--;  quantidadeRemovida++;
      }
    }
  //
    return quantidadeRemovida;
  }


  function selecionarDogma(id) {
    idDogmaSelecionado = id;
    habilidadesAutomaticas.push([habilidadesNoSeletor[id], idFontDogma]);
    var habilidade = habilidadesNoSeletor[id];
    aplicarEfeitos(habilidade.nome, habilidade.efeito);
    ordenar(habilidadesAutomaticas, true);
    atualizarHTMLDasHabilidadesPossuidas();
    atualizarHTMLDoSeletorDeHabilidades();
  }


  function removerDogma(id) {
    if(idDogmaSelecionado > idNulo) {
      idDogmaSelecionado = idNulo;
      removerHabilidadePorNomeSemCompensar(habilidadesDeDogma[id].nome, habilidadesAutomaticas);
    }
  }


  function selecionarEspiritoAnimal(id) {
    idEspiritoAnimalSelecionado = id;
    habilidadesAutomaticas.push([habilidadesNoSeletor[id], idFontEspAn]);
    var habilidade = habilidadesNoSeletor[id];
    aplicarEfeitos(habilidade.nome, habilidade.efeito);
    ordenar(habilidadesAutomaticas, true);
    atualizarHTMLDasHabilidadesPossuidas();
    atualizarHTMLDoSeletorDeHabilidades();
  }


  function removerEspiritoAnimal(id) {
    if(idEspiritoAnimalSelecionado > idNulo) {
      idEspiritoAnimalSelecionado = idNulo;
      removerHabilidadePorNomeSemCompensar(habilidadesDeEspiritoAnimal[id].nome, habilidadesAutomaticas);
    }
  }


  function ativarFonteExtraDeHabilidades(html) {
    carregarHabilidades(idFontExtra);
    selecionarFonteDeHabilidades(idFontExtra);
    _botaoHabilidadeExtra.innerHTML = html;
    _botaoHabilidadeExtra.style = "display:inline-block;";
  }


  function desativarFonteExtraDeHabilidades() {
    fonteExtraSelecionada = undefined;
    carregarHabilidades(idFontExtra);
    selecionarFonteDeHabilidades(idFontExtra);
    habilidadesExtras[idFontExtra] = true;
    _botaoHabilidadeExtra.style = "display: none;";
  }


  function idDeModificador(modificador) {
         if(modificador == "ataque")      { return idModAtaq; }
    else if(modificador == "dano")        { return idModDano; }
    else if(modificador == "mana")        { return idModMana; }
    else if(modificador == "dificuldade") { return idModDifi; }
    else if(modificador == "descricao+")  { return idModADsc; }
    else if(modificador == "descricao*")  { return idModMDsc; }
    return -1;
  }


  function aplicarEfeitos(nome, efeitos) {
    var quantidade = efeitos.length;
    for(var i = 0; i < quantidade; i++) {
      var efeito = efeitos[i];
    // bloqueio!: Adiciona um modificador de Bloqueio Extra:
      if(efeito == "bloqueio!") {
        i++;  var modificador = efeitos[i];  i++;  var descricao = efeitos[i];
        adicionarHabilidadeModificadoraDeDefesa(nome, modificador, descricao, 0);
      }
    // esquiva!: Adiciona um modificador de Esquiva Extra:
      else if(efeito == "esquiva!") {
        i++;  var modificador = efeitos[i];  i++;  var descricao = efeitos[i];
        adicionarHabilidadeModificadoraDeDefesa(nome, modificador, descricao, 1);
      }
    // determinacao!: Adiciona um modificador de Esquiva Extra:
      else if(efeito == "determinacao!") {
        i++;  var modificador = efeitos[i];  i++;  var descricao = efeitos[i];
        adicionarHabilidadeModificadoraDeDefesa(nome, modificador, descricao, 2);
      }
    // defesa+: Aumenta as defesas Bloqueio e Esquiva.
      else if(efeito == "defesa+") { i++; bloqueioBase += efeitos[i]; esquivaBase += efeitos[i]; atualizarDefesas(); }
    // determinacao+: Aumenta a defesa Determinação.
      else if(efeito == "determinacao+") { i++;  determinacaoBonus += efeitos[i]; atualizarDefesas(); }
    // vida+: Aumenta a Vida total.
      else if(efeito == "vida+") { i++;  vidaBonus += efeitos[i];  atualizarHTMLDeVidaEMana(); }
    // mana+: Aumenta a Mana total.
      else if(efeito == "mana+") { i++;  manaBonus += efeitos[i];  atualizarHTMLDeVidaEMana(); }
    // primeira_marca: Controla a coluna adicional de evolução fornecida pela habilidade Primeira Marca:
      else if(efeito == "primeira_marca") { liberarBonusDePrimeiraMarca(); }
    // atributo+: Libera a coluna "Extra" de seleção de bônus de atributo:
      else if(efeito == "atributo+") {
        atributosEModificadores[idAtExtra] = [modLibr, modLibr, modLibr, modLibr];
        ativarAtributosDeModificador(idAtExtra, atributosEModificadores[idAtExtra], true);
      }
    // for+: Aumenta a Força total.
      else if(efeito == "for+") { i++; adicionarModificadorDeAtributoPorHabilidade(idFOR, nome, efeitos[i]); }
    // agi+: Aumenta a Agilidade total.
      else if(efeito == "agi+") { i++; adicionarModificadorDeAtributoPorHabilidade(idAGI, nome, efeitos[i]); }
    // int+: Aumenta a Inteligência total.
      else if(efeito == "int+") { i++; adicionarModificadorDeAtributoPorHabilidade(idINT, nome, efeitos[i]); }
    // von+: Aumenta a Vontade total.
      else if(efeito == "von+") { i++; adicionarModificadorDeAtributoPorHabilidade(idVON, nome, efeitos[i]); }
    // armadura_natural: estabelece um valor mínimo de armadura natural.
      else if(efeito == "armadura_natural") {
        i++;  var modificador = efeitos[i];  i++; var pesada = efeitos[i];  i++; var rigida = efeitos[i];
        adicionarArmaduraNatural(nome, modificador, pesada, rigida); atualizarDefesas(); atualizarDeslocamento();
      }
    // determinação+: Aumenta a Determinação total.
      else if(efeito == "determinação+") { i++; determinacaoBonus += efeitos[i]; atualizarDefesas(); }
    // deslocamento+: Aumenta o Deslocamento total.
      else if(efeito == "deslocamento+") { i++; deslocamentoBonus += efeitos[i]; atualizarDeslocamento(); }
    // deslocamento*: Modifica o multiplicador de deslocamento.
      else if(efeito == "deslocamento*") { i++; multiplicadorDeDeslocamento = efeitos[i]; atualizarDeslocamento(); }
    // iniciativa+: Modifica o bônus de iniciativa.
      else if(efeito == "iniciativa+") { i++;  iniciativaBonus += efeitos[i]; atualizarIniciativa(); }
    // iniciativa+d: Modifica a quantidade de dados da iniciativa.
      else if(efeito == "iniciativa+d") { i++;  dadosDeIniciativa += efeitos[i]; atualizarIniciativa(); }
    // carga+: Aumenta a carga limite.
      else if(efeito == "carga+") { i++;  cargaBonus += efeitos[i]; atualizarCargaEDeslocamento(0); }
    // carga*: Multiplica a força para o cálculo da carga limite.
      else if(efeito == "carga*") { i++;  multiplicadorDeCarga += efeitos[i]; atualizarCargaEDeslocamento(0); }
    // +ataque: Adiciona um ataque desarmado extra.
      else if(efeito == "+ataque") {
        i++; var nome       = efeitos[i];  i++; var tipoDeDano = efeitos[i];  i++; var alcance    = efeitos[i];  
        i++; var bonusForca = efeitos[i];  i++; var dano       = efeitos[i];
        adicionarAtaqueDesarmado([idEquipNone, nome, tipoDeDano, alcance, bonusForca, dano]);
      }
    // modificador+: adiciona um modificador aditivo:
      else if(efeito == "modificador") {
        i++;  var modificador = efeitos[i];  i++;  var nomes        = efeitos[i];  i++;  var categoria = efeitos[i];  
        i++;  var tipo        = efeitos[i];  i++;  var classesDeMod = efeitos[i];  i++;  var bonus     = efeitos[i];
        adicionarModificador(idDeModificador(modificador), nomes, categoria, tipo, classesDeMod, bonus, nome);
      }
    // isnuu: fonte extra de habilidades "Isnuu".
      else if(efeito == "isnuu") {
        fonteExtraSelecionada = classes.classe[3].habilidades;
        ativarFonteExtraDeHabilidades("Isnuu");
      }
    // dogma: libera a aba para escolha de um Dogma:
      else if(efeito == "dogma") {
        _botaoHabilidadeDogma.style = "display:inline-block";
        selecionarFonteDeHabilidades(idFontDogma);
      }
    // espirito_animal: libera a aba para escolha de um Espírito Animal:
      else if(efeito == "espirito_animal") {
        _botaoHabilidadeEspAn.style = "display:inline-block";
        selecionarFonteDeHabilidades(idFontEspAn);
      }
    // expoente: habilidade racial extra.
      else if(efeito == "expoente") { habilidadesExtras[idFontRaca_] = true; aumentarHabilidadesDisponiveis(idFontRaca_); }
    // precisão: Cálcula o bônus de força como o max(Agilidade,Inteligência).
      else if(efeito == "precisão") { habilidadePrecisao = true; atualizarHTMLDosAtaques(); }
    // aplicar_forca: Ataques à distância podem ser realizados com força e causam +2 de dano.
      else if(efeito == "aplicar_forca") { habilidadeAplicarForca = true; atualizarHTMLDosAtaques(); }
    // intuicao: Vontade para iniciativa e esquiva ao invés de agilidade
      else if(efeito == "intuicao") { habilidadeIntuicao = true; atualizarDefesas(); atualizarIniciativa(); }
    // gigantismo:
      else if(efeito == "gigantismo") { habilidadeGigantismo = true; atualizarArmasEDefesas(); }
    // nanismo: não pode usar armas de duas mãos, e FN > 5 requer duas mãos
      else if(efeito == "nanismo") { habilidadeNanismo = true; atualizarArmasEDefesas(); }
    // habilidade: habilidade automática extra.
      else if(efeito == "habilidade") { i++; adicionarHabilidadeAutomatica(efeitos[i], idFontAntec); }
    // aprendiz: permite a seleção de aprendiz.
      else if(efeito == "aprendiz") { desbloquearSelecaoDeAprendizOuCaminho(true); }
    // equipamento: marca texto com equipamento extra.
      else if(efeito == "equipamento") { i++; equipamentoExtra = efeitos[i]; atualizarHTMLDeMoedas(0); }
    // moedas: modifica a quantidade de moedas.
      else if(efeito == "moedas") { i++; atualizarMoedas(Number(efeitos[i])); }
    // maos: modificada a quantidade de maosDisponiveis:
      else if(efeito == "maos") { i++; var bonus = efeitos[i]; quantidadeDeMaos += bonus; maosDisponiveis += bonus; }
    // aco1: Guerreiro de Aço 1:
      else if(efeito == "aco1") { guerreiroDeAco1 = true;
        if(idCategoriaDeEquipamento == idEquipDefs) { selecionarCategoriaDeEquipamento(idEquipDefs); } }
    // aco2: Guerreiro de Aço 2:
      else if(efeito == "aco2") {
        guerreiroDeAco2 = true;
        if(idCategoriaDeEquipamento == idEquipDefs) { selecionarCategoriaDeEquipamento(idEquipDefs); } 
      }
    }
  }


  function removerEfeitos(nome, efeitos) {
    var quantidade = efeitos.length;
    for(var i = 0; i < quantidade; i++) {
      var efeito = efeitos[i];
    // bloqueio!: Adiciona um modificador de Bloqueio Extra:
      if(efeito == "bloqueio!") { i += 2; removerHabilidadeModificadoraDeDefesa(nome); }
    // esquiva!: Adiciona um modificador de Esquiva Extra:
      else if(efeito == "esquiva!") { i += 2; removerHabilidadeModificadoraDeDefesa(nome); }
    // determinacao!: Adiciona um modificador de Determinacao Extra:
      else if(efeito == "determinacao!") { i += 2; removerHabilidadeModificadoraDeDefesa(nome); }
    // defesa+: Diminui as defesas Bloqueio e Esquiva.
      else if(efeito == "defesa+") { i++;  bloqueioBase -= efeitos[i];  esquivaBase -= efeitos[i]; atualizarDefesas(); }
    // determinacao+: Diminui a defesa Determinação:.
      else if(efeito == "determinacao+") { i++; determinacaoBonus -= efeitos[i];  atualizarDefesas(); }
    // vida+: Aumenta a Vida total.
      else if(efeito == "vida+") { i++;  vidaBonus -= efeitos[i];  atualizarHTMLDeVidaEMana(); }
    // mana+: Aumenta a Mana total.
      else if(efeito == "mana+") { i++;  manaBonus -= efeitos[i];  atualizarHTMLDeVidaEMana(); }
    // primeira_marca: Controla a coluna adicional de evolução fornecida pela habilidade Primeira Marca:
      else if(efeito == "primeira_marca") { bloquearBonusDePrimeiraMarca(); }
    // atributo+: Bloqueia a coluna "Extra" de seleção de bônus de atributo:
      else if(efeito == "atributo+") {
        atributosEModificadores[idAtExtra] = [modBloq, modBloq, modBloq, modBloq];
        desativarAtributosDeModificador(idAtExtra, atributosEModificadores[idAtExtra], true);
        atualizarTotalDeAtributos(); 
      }
    // for+: Aumenta a Força total.
      else if(efeito == "for+") {
        i++;  atributosEModificadores[idAtHabil][idFOR] -= efeitos[i];
        atualizarTotalDeAtributos();  removerModificadorDeAtributoPorHabilidade(nome);
      }
    // agi+: Aumenta a Agilidade total.
      else if(efeito == "agi+") {
        i++;  atributosEModificadores[idAtHabil][idAGI] -= efeitos[i];
        atualizarTotalDeAtributos();  removerModificadorDeAtributoPorHabilidade(nome);
      }
    // int+: Aumenta a Inteligência total.
      else if(efeito == "int+") {
        i++;  atributosEModificadores[idAtHabil][idINT] = efeitos[i];
        atualizarTotalDeAtributos();  removerModificadorDeAtributoPorHabilidade(nome);
      }
    // von+: Aumenta a Vontade total.
      else if(efeito == "von+") {
        i++;  atributosEModificadores[idAtHabil][idVON] -= efeitos[i];
        atualizarTotalDeAtributos();  removerModificadorDeAtributoPorHabilidade(nome);
      }
    // armadura: estabelece um valor mínimo de armadura.
      else if(efeito == "armadura_natural") { 
        i += 3;
        removerDaArmaduraNatural(nome);
        atualizarDefesas();
        atualizarDeslocamento();
      }
    // determinação+: Aumenta a Determinação total.
      else if(efeito == "determinação+") { i++;  determinacaoBonus -= efeitos[i];  atualizarDefesas(); }
    // deslocamento+: Aumenta o Deslocamento total.
      else if(efeito == "deslocamento+") { i++;  deslocamentoBonus -= efeitos[i];  atualizarDeslocamento(); }
    // deslocamento*: Modifica o multiplicador de deslocamento.
      else if(efeito == "deslocamento*") { i++;  multiplicadorDeDeslocamento = 1;  atualizarDeslocamento(); }
    // iniciativa+: Modifica o bônus de iniciativa.
      else if(efeito == "iniciativa+") { i++;  iniciativaBonus -= efeitos[i];  atualizarIniciativa(); }
    // iniciativa+d: Modifica a quantidade de dados da iniciativa.
      else if(efeito == "iniciativa+d") { i++;  dadosDeIniciativa -= efeitos[i];  atualizarIniciativa(); }
    // carga+: Aumenta a carga limite.
      else if(efeito == "carga+") { i++;  cargaBonus -= efeitos[i];  atualizarCargaEDeslocamento(0); }
    // carga*: Multiplica a força para o cálculo da carga limite.
      else if(efeito == "carga*") { i++;  multiplicadorDeCarga -= efeitos[i];  atualizarCargaEDeslocamento(0); }
    // +ataque: Adiciona um ataque desarmado extra.
      else if(efeito == "+ataque") { i++;  var nome = efeitos[i]; i+=3; removerAtaqueDesarmado(nome); }
    // modificador:
      else if(efeito == "modificador") {
        i++;  var modificador = efeitos[i]; i+= 5;
        removerModificadorDeHabilidades(idDeModificador(modificador), nome);
      }
    // isnuu: fonte extra de habilidades "Isnuu".
      else if(efeito == "isnuu") { desativarFonteExtraDeHabilidades(); }
    // devoto: bloqueia a aba de Dogma.
      else if(efeito == "dogma") {
        removerDogma(idDogmaSelecionado);
        _botaoHabilidadeDogma.style = "display:none"; 
        selecionarFonteDeHabilidades(idFontGeral);
      }
    // espirito_animal: bloqueia a aba de Espírito Animal.
      else if(efeito == "espirito_animal") {
        removerEspiritoAnimal(idEspiritoAnimalSelecionado);
        _botaoHabilidadeEspAn.style = "display:none";
        selecionarFonteDeHabilidades(idFontGeral);
      }
    // expoente: habilidade racial extra.
      else if(efeito == "expoente") { desativarFonteExtraDeHabilidades(); diminuirHabilidadesDisponiveis(idFontRaca_); }
    // precisão: Cálcula o bônus de força como o max(Agilidade,Inteligência).
      else if(efeito == "precisão") { habilidadePrecisao = false; atualizarHTMLDosAtaques(); }
    // aplicar_forca: Ataques à distância podem ser realizados com força e causam +2 de dano.
      else if(efeito == "aplicar_forca") { habilidadeAplicarForca = false; atualizarHTMLDosAtaques(); }
    // intuicao: Vontade para iniciativa e esquiva ao invés de agilidade
      else if(efeito == "intuicao") { habilidadeIntuicao = false; atualizarDefesas(); atualizarIniciativa(); }
    // gigantismo:
      else if(efeito == "gigantismo") { habilidadeGigantismo = false; atualizarArmasEDefesas(); }
    // nanismo: não pode usar armas de duas mãos, e FN>5 requer duas mãos
      else if(efeito == "nanismo") { habilidadeNanismo = false; atualizarArmasEDefesas(); }
    // habilidade: remove habilidade automática extra.
      else if(efeito == "habilidade") { i++; removerHabilidadePorNome(efeitos[i], habilidadesAutomaticas); }
    // aprendiz: permite a seleção de aprendiz.
      else if(efeito == "aprendiz") { bloquearSelecaoDeAprendizOuCaminho(true); }
    // equipamento: marca texto com equipamento extra.
      else if(efeito == "equipamento") { i++;  equipamentoExtra = "";  atualizarHTMLDeMoedas(); }
    // moedas: modifica a quantidade de moedas.
      else if(efeito == "moedas") { i++;  atualizarMoedas(-Number(efeitos[i])); }
    // maos: modificada a quantidade de maosDisponiveis:
      else if(efeito == "maos") { i++; quantidadeDeMaos -= efeitos[i]; desequiparArmas(); }
    // aco1: Guerreiro de Aço 1:
      else if(efeito == "aco1") { guerreiroDeAco1 = false;
        if(idCategoriaDeEquipamento == idEquipDefs) { selecionarCategoriaDeEquipamento(idEquipDefs); }
      }
    // aco2: Guerreiro de Aço 2:
      else if(efeito == "aco2") { guerreiroDeAco2 = false;
        if(idCategoriaDeEquipamento == idEquipDefs) { selecionarCategoriaDeEquipamento(idEquipDefs); }        
      }
    }
  }


  function adicionarModificador(idDoModificador, nome, categoria, tipo, classe, bonus, fonte) {
    switch(idDoModificador) {
      case idModAtaq: modificadoresDeAtaque.push([nome, categoria, tipo, classe, bonus, fonte]);                   break;
      case idModDano: modificadoresDeDano.push([nome, categoria, tipo, classe, bonus, fonte]);                     break;
      case idModMana: modificadoresDeMana.push([nome, categoria, tipo, classe, bonus, fonte]);                     break;
      case idModDifi: modificadoresDeDificuldade.push([nome, categoria, tipo, classe, bonus, fonte]);              break;
      case idModADsc: modificadoresAditivosDeDescricao.push([nome, categoria, tipo, classe, bonus, fonte]);        break;
      case idModMDsc: modificadoresMultiplicativosDeDescricao.push([nome, categoria, tipo, classe, bonus, fonte]); break;
    }
    atualizarDependentesDeModificadores(idDoModificador);
  }


  function removerModificadorDeHabilidades(idDoModificador, nomeDoModificadorASerRemovido) {
    var lista;
    switch(idDoModificador) {
      case idModAtaq: lista = modificadoresDeAtaque;                   break;
      case idModDano: lista = modificadoresDeDano;                     break;
      case idModMana: lista = modificadoresDeMana;                     break;
      case idModDifi: lista = modificadoresDeDificuldade;              break;
      case idModADsc: lista = modificadoresAditivosDeDescricao;        break;
      case idModMDsc: lista = modificadoresMultiplicativosDeDescricao; break;
      default: return;
    }
    var quantidade = lista.length;
    for(var i = 0; i < quantidade; i++) {
      if(lista[i][idBonusHabFonte] == nomeDoModificadorASerRemovido) { lista.splice(i, 1); i--; quantidade--; }
    }
    atualizarDependentesDeModificadores(idDoModificador);
  }


  function atualizarDependentesDeModificadores(idDoModificador) {
    switch(idDoModificador) {
      case idModAtaq: 
      case idModDano: atualizarHTMLDosAtaques(); break;
      case idModMana:
      case idModDifi: atualizarHTMLDasHabilidadesPossuidas(); atualizarHTMLDoSeletorDeHabilidades(); 
      case idModADsc: 
      case idModMDsc: atualizarHTMLDoMostradorDeHabilidade(ultimaHabilidadeMostrada); break;
    }
  }


  function requisitosDeModificadorCumpridos(nome, categoria, tipo, descricao, modificador) {
// Modificador de Dif, Mana, Descrição: nome,         categoria,    tipo,       descricao,       modificador
// Modificador de Dano ou Ataque:       nomeDoAtaque, tipoDeAtaque, tipoDeDano, alcanceDoAtaque, modificador
    categoria = categoria.toString(); 
    var chaves = modificador[idBonusHabClass]; quantidade = chaves.length, naoCumprido = true;
    if(quantidade > 0 & descricao != undefined) {
      for(var i = 0; i < quantidade; i++) { if(descricao.search(chaves[i])  > -1 ) { naoCumprido = false; break; } }
      if(naoCumprido) { return false; }
    }    
    var tipos = modificador[idBonusHabTipos]; quantidade = tipos.length, naoCumprido = true;
    if(quantidade > 0) {
      for(var i = 0; i < quantidade; i++) { if(tipo.search(tipos[i]) > -1) { naoCumprido = false; break; } }
      if(naoCumprido) { return false; }
    }
    var categorias = modificador[idBonusHabCateg]; quantidade = categorias.length, naoCumprido = true;
    if(quantidade > 0) {
      for(var i = 0; i < quantidade; i++) { if(categoria.search(categorias[i]) > -1) { naoCumprido = false; break; } }
      if(naoCumprido) { return false; }
    }
    var quantidade  = 0, naoCumprido = true;
    var nomes = modificador[idBonusHabNomes]; quantidade = nomes.length;
    if(quantidade > 0) {
      for(var i = 0; i < quantidade; i++) {  if(nome.search(nomes[i]) > -1 ) { naoCumprido = false; break; } }
      if(naoCumprido) { return false; }
    }
    return true;
  }


  function obterValorEntrePossivelNegrito(html) {
    if(html[0] == "<") { return parseInt(html.slice(3, html.length-4)); }
    return parseInt(html);
  }

  
  function valorDeBonus(bonus) {
         if(bonus == "for") { return atributosEModificadores[idAtTotal][idFOR]; }
    else if(bonus == "agi") { return atributosEModificadores[idAtTotal][idAGI]; }
    else if(bonus == "int") { return atributosEModificadores[idAtTotal][idINT]; }
    else if(bonus == "von") { return atributosEModificadores[idAtTotal][idVON]; }
    return parseInt(bonus);
  }


  function requisitosCumpridos(requisitos) {
  // Ignora a verificação de requisitos se a opção foi marcada:
    if(ignorarRequisitos) { return true; }

    var quantidade = requisitos.length;
    for(var i = 0; i < quantidade; i++) {
      var requisito = requisitos[i];
      if(requisito == "nivel") { 
        i++; var nivel = requisitos[i];
        if(nivelDePersonagem < requisitos[i]) { return false; } }
      else if(requisito == "for") { i++; if(atributosEModificadores[idAtTotal][idFOR] < requisitos[i]) { return false; } }
      else if(requisito == "agi") { i++; if(atributosEModificadores[idAtTotal][idAGI] < requisitos[i]) { return false; } }
      else if(requisito == "int") { i++; if(atributosEModificadores[idAtTotal][idINT] < requisitos[i]) { return false; } }
      else if(requisito == "von") { i++; if(atributosEModificadores[idAtTotal][idVON] < requisitos[i]) { return false; } }
      else if(requisito == "raca" & racaSelecionada != undefined) {
        i++;  var raca = racaSelecionada.nome, racasPermitidas = requisitos[i], 
                  quantidadeDeRacas = racasPermitidas.length, j = 0;
        for(; j < quantidadeDeRacas; j++) { if(raca == racasPermitidas[j]) { j = quantidadeDeRacas + 1; } }
        if(j == quantidadeDeRacas) { return false; }
      }
      else if(requisito == "!raca" & racaSelecionada != undefined) {
        i++;  var raca = racaSelecionada.nome, racasImpedidas = requisitos[i], 
                  quantidadeDeRacas = racasImpedidas.length;
        for(var j = 0; j < quantidadeDeRacas; j++) { if(raca == racasImpedidas[j]) { return false; } }
      }
      else if(requisito == "antecedente" & antecedenteSelecionado != undefined) {
        i++;  var antecedente = antecedenteSelecionado.nome, antecedentesPermitidos = requisitos[i],
                  quantidadeDeAntecedentes = antecedentesPermitidos.length, j = 0;
        for(; j < quantidadeDeAntecedentes; j++) { 
          if(antecedente == antecedentesPermitidos[j]) { j = quantidadeDeAntecedentes + 1; }
        }
        if(j == quantidadeDeAntecedentes) { return false; }
      }
      else if(requisito == "habilidade") {
        i++;  var habilidadesNecessarias = requisitos[i];
        for(var j = 0; j < habilidadesNecessarias.length; j++) {
          requisito = habilidadesNecessarias[j];
          if(!((contemHabilidadeComoRequisito(habilidadesAutomaticas, requisito)
              | contemHabilidadeComoRequisito(habilidadesSelecionadas, requisito)))) { return false; }
        }
      }
      else if(requisito == "texto") { i++; }
      else { return false; }
    }
    return true;
  }



  function contemHabilidade(lista, nomeDaHabilidade) {
    var quantidade = lista.length;
    for(var i = 0; i < quantidade; i++) { if(lista[i][idHabPosHabil].nome == nomeDaHabilidade) { return true; } }
    return false;
  }


  function contemHabilidadeComoRequisito(lista, nomeDaHabilidade) {
    var quantidade = lista.length;
    for(var i = 0; i < quantidade; i++) { if(lista[i][idHabPosHabil].nome.search(nomeDaHabilidade) > -1) { return true; } }
    return false;
  }

  
  function aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, manaOuDif, minimo, modificadores) {
  // Mana ou Dificuldade -1 (Varia) e 0 (Sem Custo) não são modificadas:
    if(manaOuDif <= minimo) { return manaOuDif; }
  // 
    var valorMostrado = manaOuDif, quantidade = modificadores.length;
    for(var i = 0; i < quantidade; i++) {
      var modificador = modificadores[i];
      if(requisitosDeModificadorCumpridos(nome, categoria, tipo, descricao, modificador)) {
        valorMostrado -= modificador[idBonusHabBonus];
      }
    }
    return Math.max(valorMostrado, minimo);
  }



//// H A B I L I D A D E S - H T M L ////

  function atualizarHTMLDasHabilidadesDisponiveis() {
  // Se "habilidadesInfinitas" estiver marcado, mostra um texto padrão:
    if(habilidadesInfinitas) { _habilidadesDisponiveis.innerHTML = "Habilidades Infinitas"; return; }
  // Atualiza o HTML com a quantidade de Habilidades Disponíveis gerais e específicas:
    var html = ""
    var total = habilidadesDisponiveis[idFontGeral] + habilidadesDisponiveis[idFontRaca_]
              + habilidadesDisponiveis[idFontClass] + habilidadesDisponiveis[idFontAprnd]
              + habilidadesDisponiveis[idFontCamin] + habilidadesDisponiveis[idFontExtra];
    if(total == 0) { html = "Seleção concluída."; }
    else {           html = "" + habilidadesDisponiveis[0] + " livres";
      if(habilidadesDisponiveis[idFontRaca_] > 0) { html += ", "+ habilidadesDisponiveis[idFontRaca_] +" de Raça";     }
      if(habilidadesDisponiveis[idFontClass] > 0) { html += ", "+ habilidadesDisponiveis[idFontClass] +" de Classe";   }
      if(habilidadesDisponiveis[idFontAprnd] > 0) { html += ", "+ habilidadesDisponiveis[idFontAprnd] +" de Aprendiz"; }
      if(habilidadesDisponiveis[idFontCamin] > 0) { html += ", "+ habilidadesDisponiveis[idFontCamin] +" de Caminho";  }
      if(habilidadesDisponiveis[idFontExtra] > 0) { 
        html += ", "+ habilidadesDisponiveis[idFontExtra] +" de "+ nomeDeFonteExtra;
      }
      html += ".";
    }
    _habilidadesDisponiveis.innerHTML = html;
  }


  function atualizarHTMLDoMostradorDeHabilidadeAutomatica(id) {
  // Define o mostrador padrão caso receba um id inválido:
    if(id < 0 | id >= habilidadesAutomaticas.length) { htmlPadraoDoMostradorDeHabilidade(); return; }
  // Não atualiza caso a id se não houver mudança:
    if(id == idDaUltimaHabilidadeMostrada) { return; }
  // Atualiza o HTML:
    atualizarHTMLDoMostradorDeHabilidade(habilidadesAutomaticas[id][idHabPosHabil]);
  }


  function atualizarHTMLDoMostradorDeHabilidadeSelecionada(id) {
  // Define o mostrador padrão caso receba um id inválido:
    if(id < 0 | id >= habilidadesSelecionadas.length) { htmlPadraoDoMostradorDeHabilidade(); return; }
  // Não atualiza caso a id se não houver mudança:
    if(id == idDaUltimaHabilidadeMostrada) { return; }
  // Atualiza o HTML:
    atualizarHTMLDoMostradorDeHabilidade(habilidadesSelecionadas[id][idHabPosHabil]);
  }


  function atualizarHTMLDoMostradorDeHabilidadeDoSeletor(id) {
  // Define o mostrador padrão caso receba um id inválido:
    if(id < 0 | id >= habilidadesNoSeletor.length) { htmlPadraoDoMostradorDeHabilidade(); return; }
  // Atualiza o HTML:
    atualizarHTMLDoMostradorDeHabilidade(habilidadesNoSeletor[id]);
  }


  function htmlPadraoDoMostradorDeHabilidade() {
    document.getElementById("mostrador").innerHTML =
      "<div class='cabecalho'> <div class='mostrador_nome'> <b> Nome da Habilidade </b> </div> </div>"
    + "<div class='cabecalhoB'>"
    + "  <div class='mostrador_tipo'>        <i> Habilidade(Categoria) - Tipo </i>  </div>"
    + "  <div class='mostrador_requisito'>   <b> Requisito: </b> ...                </div>"
    + "  <div class='mostrador_mana'>        <b> Mana: </b> ...                     </div>"
    + "  <div class='mostrador_dificuldade'> <b> Dificuldade da Magia: </b> ...     </div>"
    + "</div>"
    + "<div class='mostrador_texto'> <div class='mostrador_descricao'>"
    + "  <b> Descrição: </b> ... <br/> <br/> <b> Especial: </b> ... <br/>"
    + "</div> </div>"
    + "<div class='rodapezim'> </div>";
  }


  function atualizarHTMLDoMostradorDeHabilidade(habilidade) {
    if(habilidade == undefined) { return; }
  // Salva a nova habilidade como a última mostrada:
    ultimaHabilidadeMostrada = habilidade;
  // Extrai as variáveis da habilidade a ser mostrada:
    var nome = habilidade.nome, categoria = habilidade.categoria, 
        tipo = habilidade.tipo, descricao = habilidade.descricao,
        requisitos = habilidade.requisitos, quantidadeDeRequisitos = habilidade.requisitos.length,
        dificuldade = aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.dificuldade, dificuldadeMinima, modificadoresDeDificuldade),
        mana = aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.mana, custoDeManaMinimo, modificadoresDeMana),
        descricao = habilidade.descricao,
        especial = habilidade.especial;
  // Atualiza o HTML do Mostrador:
    var html = "<div class='cabecalho'> <div class='mostrador_nome'> <b>" + nome + "</b> </div> </div>"
             + "<div class='cabecalhoB'>";
    if(categoria == "Padrão") { html += "<div class='mostrador_tipo'> <i> Habilidade - " + tipo + "</i> </div>"; }
      else { html += "<div class='mostrador_tipo'> <i> Habilidade(" + categoria + ") - " + tipo + "</i> </div>"; }
    if(quantidadeDeRequisitos > 0) {
     if(quantidadeDeRequisitos > 1) { html += "<div class='mostrador_requisito'> <b> Requisitos: </b> "; }
                               else { html += "<div class='mostrador_requisito'> <b> Requisito:  </b> ";  }
     html += htmlDeRequisitos(requisitos) + "</div>";
    }
    if(mana > 0)       { html += "<div class='mostrador_mana'> <b> Mana: </b>" + mana + "</div>"; } 
    else if (mana < 0) { html += "<div class='mostrador_mana'> <b> Mana: </b> Varia </div>"; }
    if(dificuldade > 0) {
      html += "  <div class='mostrador_dificuldade'> <b> Dificuldade da Magia: </b>" + dificuldade + "</div>";
    } else if (mana < 0) { 
      html += "  <div class='mostrador_dificuldade'> <b> Dificuldade da Magia: </b> Varia </div>";
    }
    html += "</div>";
    var texto = "<b> Descrição: </b>" + descricao;
    if(especial != "") { texto += "<br/><br/> <b> Especial: </b> " + especial; }
    html += "<div class='mostrador_texto'> <div class='mostrador_descricao'>" + texto + "</div> </div>"
          + "<div class='rodapezim'> </div>";
    _mostrador.innerHTML = html;
   //
    aplicarModificadoresDeDescricao(habilidade);
  }


  function aplicarModificadoresDeDescricao(habilidade) {
    var nome = habilidade.nome, categoria = habilidade.categoria, tipo = habilidade.tipo, descricao = habilidade.descricao;
  // Aplica os Modificadores Multiplicadores:
    var quantidade = modificadoresMultiplicativosDeDescricao.length;
    for(var i = 0; i < quantidade; i++) {
      var modificador = modificadoresMultiplicativosDeDescricao[i];
      if(requisitosDeModificadorCumpridos(nome, categoria, tipo, descricao, modificador)) {
        aplicarModificadorMultiplicativo(modificador);
      }
    }
  // Aplica os Modificadores Aditivos:
    quantidade = modificadoresAditivosDeDescricao.length;
    for(var i = 0; i < quantidade; i++) {
      var modificador = modificadoresAditivosDeDescricao[i];
      if(requisitosDeModificadorCumpridos(nome, categoria, tipo, descricao, modificador)) {
        aplicarModificadorAditivo(modificador); 
      }
    }
  // Substitue os elementos por valores reais:
    var atributos = atributosEModificadores[idAtTotal], elementos, quantidade;
    elementos = document.getElementsByClassName("forca");        quantidade = elementos.length;
    for(var i = 0; i < quantidade; i++) { elementos[i].innerHTML = "FOR(" + atributos[idFOR] + ")"; }
    elementos = document.getElementsByClassName("agilidade");    quantidade = elementos.length;
    for(var i = 0; i < quantidade; i++) { elementos[i].innerHTML = "AGI(" + atributos[idAGI] + ")"; }
    elementos = document.getElementsByClassName("inteligencia"); quantidade = elementos.length;
    for(var i = 0; i < quantidade; i++) { elementos[i].innerHTML = "INT(" + atributos[idINT] + ")"; }
    elementos = document.getElementsByClassName("vontade");      quantidade = elementos.length;
    for(var i = 0; i < quantidade; i++) { elementos[i].innerHTML = "VON(" + atributos[idVON] + ")"; }
    elementos = document.getElementsByClassName("determinacao"); quantidade = elementos.length;
    for(var i = 0; i < quantidade; i++) { elementos[i].innerHTML = "DET(" + determinacao + ")"; }
  }


  function aplicarModificadorAditivo(modificador) {
    var classesDeModificador = modificador[idBonusHabClass], bonus = modificador[idBonusHabBonus];
    var quantidade = classesDeModificador.length;
    for(var i = 0; i < quantidade; i++) {
      var elementos = document.getElementsByClassName(classesDeModificador[i]);
      var quantidadeDeElementos = elementos.length;
      for(var j = 0; j < quantidadeDeElementos; j++)  {
        var elemento = elementos[j];
        var total = obterValorEntrePossivelNegrito(elemento.innerHTML);
        elemento.innerHTML = "<b>" + (total + valorDeBonus(bonus)) + "</b>";
      }
    } 
  }


  function aplicarModificadorMultiplicativo(modificador) {
    var classesDeModificador = modificador[idBonusHabClass], bonus = modificador[idBonusHabBonus];
    var quantidade = classesDeModificador.length;
    for(var i = 0; i < quantidade; i++) {
      var elementos = document.getElementsByClassName(classesDeModificador[i]);
      var quantidadeDeElementos = elementos.length;
      for(var j = 0; j < quantidadeDeElementos; j++)  {
        var elemento = elementos[j];
        var total = obterValorEntrePossivelNegrito(elemento.innerHTML);
        elemento.innerHTML = "<b>" + (total * valorDeBonus(bonus)) + "</b>";
      }
    } 
  }


  function atualizarHTMLDasHabilidadesPossuidas() {
    var html = "",  quantidade,  impar = true;
  // Coleta o HTML das Habilidades Automáticas:
    quantidade = habilidadesAutomaticas.length;
    for(var i = 0; i < quantidade; i++) {
    // Não mostra a habilidade Dogma ou Espírito Animal se um específico foi selecionado:
      var nome = habilidadesAutomaticas[i][0].nome;
      if(!((nome == "Dogma" & idDogmaSelecionado > idNulo) |
           (nome == "Espírito Animal" & idEspiritoAnimalSelecionado > idNulo))) {
        html += htmlDeHabilidadePossuida(habilidadesAutomaticas[i][0], i, impar, false);
        impar = !impar;
      }
    }
  // Coleta o HTML das Habilidades Selecionadas:
    quantidade = habilidadesSelecionadas.length;
    for(var i = 0; i < quantidade; i++) {
   // Não mostra a habilidade Dogma ou Espírito Animal se um específico foi selecionado:
      var nome = habilidadesSelecionadas[i][0].nome;
      if(!((nome == "Dogma" & idDogmaSelecionado > idNulo) |
           (nome == "Espírito Animal" & idEspiritoAnimalSelecionado > idNulo))) {
        html += htmlDeHabilidadePossuida(habilidadesSelecionadas[i][0], i, impar, true);
        impar = !impar;
      }
    }
  //
    _habilidadesPossuidas.innerHTML = html;
  }


  function htmlDeHabilidadePossuida(habilidade, id, impar, habilidadeSelecionada) {
    var html = "",  nome = habilidade.nome,  categoria = habilidade.categoria, 
        tipo = habilidade.tipo, descricao = habilidade.descricao,
        dificuldade = aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.dificuldade, dificuldadeMinima, modificadoresDeDificuldade),
        mana = aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.mana, custoDeManaMinimo, modificadoresDeMana);
  // Nome vermelho caso algum requisito seja descumprido:
    var requisitoDescumprido = "";
    if(!requisitosCumpridos(habilidade.requisitos)) { requisitoDescumprido = "style='color:red;'"; }
  // Diminui o tamanho da fonte para habilidades de nome muito longo:
    var longo = "";  if(nome.length > 20) { longo = "longo"; }
  //
    var im = ""; if(impar) { im = "im"; }
    if(habilidadeSelecionada) {
      html += "<div class='elemento_"+ im +"par' onmouseover='atualizarHTMLDoMostradorDeHabilidadeSelecionada("+ id +")'>";
    } else {
      html += "<div class='elemento_"+ im +"par' onmouseover='atualizarHTMLDoMostradorDeHabilidadeAutomatica("+ id +")'>";
    }
    html += "<div class='hab_pos_elm_nome" + longo + "' " + requisitoDescumprido + ">" + nome + "</div>";
    if(dificuldade == 0)     { html += "<div class='hab_pos_elm_dificuldade'> - </div>"; }
    else if(dificuldade > 0) { html += "<div class='hab_pos_elm_dificuldade'>" + dificuldade  + "</div>"; }
    else                     { html += "<div class='hab_pos_elm_dificuldade'> * </div>"; }
    if(mana == 0)     { html += "<div class='hab_pos_elm_mana'> - </div>"; }
    else if(mana > 0) { html += "<div class='hab_pos_elm_mana'>" + mana  + "</div>"; }
    else              { html += "<div class='hab_pos_elm_mana'> * </div>"; }
    if(nome.search("Dogma:") > -1) {
      html += "<button class='botao_dim' onmouseup='removerDogma("+idDogmaSelecionado+")'>-</button>"; }
    else if(nome.search("Espírito Animal:") > -1) {
      html += "<button class='botao_dim' onmouseup='removerEspiritoAnimal("+idEspiritoAnimalSelecionado+")'>-</button>"; }
    else if(habilidadeSelecionada) { 
      html += "<button class='botao_rem' onmouseup='removerHabilidadeSelecionada("+id+")'>X</button>";
    }
    html += "</div> </div>";
    return html;
  }


  function atualizarHTMLDoSeletorDeHabilidades() {
    var html = "", quantidade = habilidadesNoSeletor.length, categoria = "", tipo = "", mana = 0, dificuldade = 0;
    for(var i = 0; i < quantidade; i++) {
      var habilidade = habilidadesNoSeletor[i];
      var nome = habilidade.nome, descricao = habilidade.descricao;
          categoria = habilidade.categoria, tipo = habilidade.tipo,
          dificuldade = aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.dificuldade, dificuldadeMinima, modificadoresDeDificuldade),
          mana = aplicarModificadoresDeManaOuDificuldade(nome, categoria, tipo, descricao, habilidade.mana, custoDeManaMinimo, modificadoresDeMana);
      var im = ""; if((i&1) == 0) { im = "im"; }
      html += "<div class='elemento_" + im + "par' onmouseover='atualizarHTMLDoMostradorDeHabilidadeDoSeletor(" + i + ")'>"
             + htmlDoBotaoDeHabilidade(i, habilidade)
             + "<div class='hab_sel_nome'>" + nome + "</div>"
             + "<div class='hab_sel_categoria'>" + habilidade.categoria + "</div>"
             + "<div class='hab_sel_tipo'>" + habilidade.tipo + "</div>";
      if((dificuldade) == 0)      { html += "<div class='hab_sel_dificuldade'> - </div>";                 }
      else if (dificuldade > 0) { html += "<div class='hab_sel_dificuldade'>" + dificuldade + "</div>"; }
      else                      { html += "<div class='hab_sel_dificuldade'> Varia </div>";             }
      if(mana == 0)      { html += "<div class='hab_sel_mana'> - </div>";          }
      else if (mana > 0) { html += "<div class='hab_sel_mana'>" + mana + "</div>"; }
      else               { html += "<div class='hab_sel_mana'> Varia </div>";      }
      html += "</div>";
    }
    _seletorDeHabilidades.innerHTML = html;
  }


  function htmlDoBotaoDeHabilidade(i, habilidade) {
    var nome = habilidade.nome;
  // Botão de Dogma:
    if(idFonteDeHabilidades == idFontDogma) {
      if(idDogmaSelecionado == idNulo) { 
        return "<button class='botao_adi' onmouseup=selecionarDogma(" + i + ")> + </button>";
      } else if(idDogmaSelecionado == i) {
        return "<button class='botao_rem' onmouseup=removerDogma(" + i + ")> X </button>";
      } else {
        return "<button class='botao_des' disabled> # </button>";
      }
    }
  // Botão de Espírito Animal:
    else if(idFonteDeHabilidades == idFontEspAn) {
      if(idEspiritoAnimalSelecionado == idNulo) {
        return "<button class='botao_adi' onmouseup=selecionarEspiritoAnimal(" + i + ")> + </button>";
      } else if(idEspiritoAnimalSelecionado == i) {
        return "<button class='botao_rem' onmouseup=removerEspiritoAnimal(" + i + ")> X </button>";
      } else {
        return "<button class='botao_des' disabled> # </button>";
      }
    }
  // Demais habillidades:
    else if(contemHabilidade(habilidadesAutomaticas, nome) | contemHabilidade(habilidadesSelecionadas, nome)) {
      return "<button class='botao_rem' onmouseup='removerHabilidadeSelecionadaPorNome(\"" + nome + "\")'> X </button>";
    } else if(existemHabilidadesDisponiveis() & requisitosCumpridos(habilidade.requisitos)) {
      return "<button class='botao_adi' onmouseup='adicionarHabilidadeSelecionada("
             + i + "," + idFonteDeHabilidades+")'>+</button>";
    } else {
      return "<button class='botao_des' disabled> # </button>";
    }
  }



//// E Q U I P A M E N T O S ////

  function selecionarCategoriaDeEquipamento(idCategoria) {
  // Atualiza graficamente os botões para indicar qual categoria foi selecionada:
    _botaoEquipamentoArma.classList.remove("botao_categoria_s");
    _botaoEquipamentoProj.classList.remove("botao_categoria_s");
    _botaoEquipamentoMuni.classList.remove("botao_categoria_s");
    _botaoEquipamentoConj.classList.remove("botao_categoria_s");
    _botaoEquipamentoMusi.classList.remove("botao_categoria_s");
    _botaoEquipamentoDefs.classList.remove("botao_categoria_s");
    _botaoEquipamentoPoca.classList.remove("botao_categoria_s");
    _botaoEquipamentoMund.classList.remove("botao_categoria_s");
    document.getElementById("botao_equipamento_" + idCategoria).classList.add("botao_categoria_s");
  // Limpa o mostruario antigo e coleta o cabeçalho e novo mostruário pela categoriaDeEquipamento selecionada:
    var cabecalho = "",  mostruario = "";
    itensNoMostruario = [];
    idCategoriaDeEquipamento = idCategoria;
    switch(idCategoriaDeEquipamento) {
      case idEquipArma:  cabecalho = cabecalhoArma();        mostruario = mostruarioArma();        break;
      case idEquipProj:  cabecalho = cabecalhoArma();        mostruario = mostruarioProjetil();    break;
      case idEquipMuni:  cabecalho = cabecalhoMundano();     mostruario = mostruarioMunicao();     break;
      case idEquipConj:  cabecalho = cabecalhoConjuracao();  mostruario = mostruarioConjuracao();  break;
      case idEquipMusi:  cabecalho = cabecalhoMusical();     mostruario = mostruarioMusical();     break;
      case idEquipDefs:  cabecalho = cabecalhoDefesa();      mostruario = mostruarioDefesa();      break;
      case idEquipPoca:  cabecalho = cabecalhoPocao();       mostruario = mostruarioPocao();       break;
      case idEquipMund:  cabecalho = cabecalhoMundano();     mostruario = mostruarioMundano();     break;
    }
  // Atualiza o HTML com o cabeçalho e mostruário apropriados:
    _cabecalhoDoMostruario.innerHTML = cabecalho;
    _mostruario.innerHTML = mostruario;
  // Cancela o "scrolling" realizado ao trocar de aba:
    _mostruario.scrollTop = 0;
  }


  function atualizarArmasEDefesas() {
    switch(idCategoriaDeEquipamento) {
      case idEquipArma: mostruario = mostruarioArma();       break;
      case idEquipProj: mostruario = mostruarioProjetil();   break;
      case idEquipConj: mostruario = mostruarioConjuracao(); break;
      case idEquipDefs: mostruario = mostruarioDefesa();     break;
      default: return;
    }
    _mostruario.innerHTML = mostruario;
  }


  function adicionarEquipamentoAoInventario(id) {
  // Coleta o item selecionado do mostruario e isola seu nome, peso e custo:
    var itemDoMostruario = itensNoMostruario[id],
        tipo  = itemDoMostruario[idEquipTipo], nome = itemDoMostruario[idEquipNome],
        custo = itemDoMostruario[idEquipCsto], peso = itemDoMostruario[idEquipPeso];
  // Desconta o custo em moedas e acrescenta o peso à carga:
    atualizarMoedas(-custo);  atualizarCargaEDeslocamento(peso);
  // Se o item já estiver na lista (até 99), aumenta seus valores e atualiza a lista completa:
    var quantidadeDeItens = inventario.length;
    for(var i = 0; i < quantidadeDeItens; i++) {
      var pacoteDeItem = inventario[i];
      if(pacoteDeItem[idQuantidade] >= 99) { atualizarMoedas(custo); atualizarCargaEDeslocamento(-peso); return; }
      if(pacoteDeItem[idItem][idEquipNome] == nome) { pacoteDeItem[idQuantidade]++; atualizarHTMLDoInventario(); return; }
    }
  // Senão adiciona o elemento ao inventário [ idItem[], idDoItem, idCategoria, idQuantidade, idEquip]:
    var novoItemNoInventario = [[],id,idCategoriaDeEquipamento,1,0];
    for(var i = 0; i < itemDoMostruario.length; i++) { novoItemNoInventario[idItem][i] = itemDoMostruario[i]; }
    inventario.push(novoItemNoInventario);
  // Ordena os itens do inventario:
    ordenar(inventario, false);
  // Atualiza o HTML:
    atualizarHTMLDoInventario();
  // Atualiza partes interessadas dependendo do tipo de item:
    switch(tipo) {
      case idEquipArma: adicionarAtaque(idEquipArma, itemDoMostruario);         break;
      case idEquipProj: adicionarAtaque(idEquipProj, itemDoMostruario);         break;
      case idEquipConj: if(novoItemNoInventario[idItem][idEquipArmDano] > 0) { 
                          adicionarAtaque(idEquipConj, itemDoMostruario); }     break;
    }
  }


  function carregarEquipamento(id, categoria, quantidade, equipado) {
  // Coleta o item selecionado do mostruario e isola seu nome, peso e custo:
    var itemDoMostruario = itensNoMostruario[id],
        tipo  = itemDoMostruario[idEquipTipo], nome = itemDoMostruario[idEquipNome],
        custo = itemDoMostruario[idEquipCsto], peso = itemDoMostruario[idEquipPeso];
  // Adiciona o elemento ao inventário [ idItem[], idDoItem, idCategoria, idQuantidade, idEquip]:
    var novoItemNoInventario = [[],id,categoria,quantidade,equipado];
    for(var i = 0; i < itemDoMostruario.length; i++) { novoItemNoInventario[idItem][i] = itemDoMostruario[i]; }
    inventario.push(novoItemNoInventario);
  // Desconta o custo em moedas e acrescenta o peso à carga:
    atualizarMoedas(-custo*quantidade);  atualizarCargaEDeslocamento(peso*quantidade);
  // Ordena os itens do inventario:
    ordenar(inventario, false);
  // Atualiza o HTML:
    atualizarHTMLDoInventario();
  // Atualiza partes interessadas dependendo do tipo de item:
    switch(tipo) {
      case idEquipArma: adicionarAtaque(idEquipArma, itemDoMostruario); break;
      case idEquipProj: adicionarAtaque(idEquipProj, itemDoMostruario); break;
      case idEquipConj: if(novoItemNoInventario[idItem][idEquipArmDano] > 0) { 
                          adicionarAtaque(idEquipConj, itemDoMostruario); 
                        } break;
    }
  }


  function removerEquipamentoDoInventario(id) {
  // Remove o elemento selecionado no inventário:
    var pacoteDeItem = inventario[id];
    var item = pacoteDeItem[idItem], quantidade = pacoteDeItem[idQuantidade];
    inventario.splice(id, 1);
  // Repõe as moedas e diminui a carga:
    atualizarMoedas(item[idEquipCsto] * quantidade);
    atualizarCargaEDeslocamento(-item[idEquipPeso] * quantidade);
  // Atualiza partes interessadas dependendo do tipo de item:
    switch(item[idEquipTipo]) {
      case idEquipArma:
      case idEquipProj: removerAtaque(item);                                       break;
      case idEquipConj: removerAtaque(item); removerEquipamentoDeConjuracao(item); break;
    }
  // Disponibiliza mãos caso o item estivesse equipado:
    var maosNecessarias = quantidadeDeMaosNecessarias(item);
    maosDisponiveis += maosNecessarias * pacoteDeItem[idEquip];
  // Ordena os itens do inventário:
    ordenar(inventario, false);
  // Atualiza o HTML com os itens não removidos:
    atualizarHTMLDoInventario();
  }


  function diminuirEquipamento(id) {
  // Coleta o item requisitado, diminui sua quantidade e atualiza todo o HTML:
    var pacoteDeItem = inventario[id];
    var item = pacoteDeItem[idItem];
    atualizarMoedas(item[idEquipCsto]);
    atualizarCargaEDeslocamento(-item[idEquipPeso]);
    pacoteDeItem[idQuantidade]--;
    if(pacoteDeItem[idQuantidade] < pacoteDeItem[idEquip]) { 
      maosDisponiveis += quantidadeDeMaosNecessarias(item); pacoteDeItem[idEquip]--;
    }
    atualizarHTMLDoInventario();
   }


  function adicionarEquipamentoDeConjuracao(item) {
    if(item[idEquipArmAsst]) {
      if(equipandoAssesteMagico == 0) { 
        adicionarModificador(idModDifi,[],["Magia"], ["Ação"],[],1,"Asseste Mágico");
      } equipandoAssesteMagico++;
    }
    if(item[idEquipArmArcn]) {
      if(equipandoCerneArcano == 0) {
        adicionarModificador(idModADsc,[],["Magia"],["Ação"],["fogo","frio","elet","elem"],5,"Cerne Arcano");
      } equipandoCerneArcano++;
    }
    if(item[idEquipArmMist]) {
      if(equipandoCerneMistico == 0) {
        adicionarModificador(idModADsc,[],["Magia"],["Ação"],["cura"], 5,"Cerne Místico");
      } equipandoCerneMistico++;
    }
    if(item[idEquipArmFoco]) {
      if(equipandoFocoMagico == 0) {
        adicionarModificador(idModMana,[],["Magia"],["Ação"],[],5,"Foco Mágico");
      } equipandoFocoMagico++;
    }
    atualizarHTMLDoSeletorDeHabilidades();
    atualizarHTMLDasHabilidadesPossuidas();
    atualizarHTMLDoMostradorDeHabilidade(ultimaHabilidadeMostrada);
  }


  function removerEquipamentoDeConjuracao(item) {
    if(item[idEquipArmAsst]) {
      equipandoAssesteMagico--;
      if(equipandoAssesteMagico == 0) { removerModificadorDeHabilidades(idModDifi, "Asseste Mágico"); }
    }
    if(item[idEquipArmArcn]) {
      equipandoCerneArcano--;
      if(equipandoCerneArcano == 0) { removerModificadorDeHabilidades(idModADsc, "Cerne Arcano"); }
    }
    if(item[idEquipArmMist]) {
      equipandoCerneMistico--;
      if(equipandoCerneMistico == 0) { removerModificadorDeHabilidades(idModADsc, "Cerne Místico"); }
    }
    if(item[idEquipArmFoco]) {
      equipandoFocoMagico--;
      if(equipandoFocoMagico == 0) { removerModificadorDeHabilidades(idModMana, "Foco Mágico"); }
    }
    atualizarHTMLDasHabilidadesPossuidas();
    atualizarHTMLDoSeletorDeHabilidades();
    atualizarHTMLDoMostradorDeHabilidade(ultimaHabilidadeMostrada);
  }


  function atualizarMoedas(valor) {
    moedas += valor;
    atualizarHTMLDeMoedas();
  }


//// E Q U I P A M E N T O S - H T M L ////

  function atualizarHTMLDoInventario() {
    var texto = "";
    var quantidadeDeItens = inventario.length;
    for(var i = 0; i < quantidadeDeItens; i++) {
      var pacoteDeItem = inventario[i];  var quantidade = pacoteDeItem[idQuantidade];  var item = pacoteDeItem[idItem];
      var nome = item[idEquipNome],  longo = "";  if(nome.length > 20) { longo = "longo";  }
      var im = ""; if((i&1) == 0) { im = "im"; }
      texto += "<div class='elemento_" + im + "par'>" + htmlDeBotaoEquipar(i, pacoteDeItem, quantidade);
      if(quantidade > 1) {
        texto
          += "<div class='eqp_inv_elm_nome" + longo + "'>"  + nome + " ("+ quantidade + ") </div>"
           + "<div class='eqp_inv_elm_peso'>"  + Math.trunc(item[idEquipPeso] * quantidade * 100) / 100 +  "</div>"
           + "<div class='eqp_inv_elm_custo'>" + item[idEquipCsto] * quantidade +  "</div>"
           + "<button class='botao_rem' onmouseup='removerEquipamentoDoInventario("+i+")'>X</button>"
           + "<button class='botao_dim' onmouseup='diminuirEquipamento("+i+")'>-</button>";
      } else {
        texto
          += "<div class='eqp_inv_elm_nome" + longo + "'>"  + nome + "</div>"
           + "<div class='eqp_inv_elm_peso'>"  + item[idEquipPeso]  + "</div>"
           + "<div class='eqp_inv_elm_custo'>" + item[idEquipCsto] + "</div>"
           + "<button class='botao_rem' onmouseup='removerEquipamentoDoInventario(" + i + ")'> X </button>"
           + "<button class='botao_des' disabled> # </button>";
      }
      texto +=  "</div>";
    }
    _inventario.innerHTML = texto;
  }


  function htmlDeBotaoEquipar(id, pacoteDeItem) {
  // Itens que não são armas não possuem botão para "Equipar":
    var saida = "<div class='botao_sqn'> </div>";
    var item       = pacoteDeItem[idItem];
    var tipoDeItem = item[idEquipTipo], nome = item[idEquipNome];
    switch(tipoDeItem) {
      case idEquipArma: break;
      case idEquipProj: break;
      case idEquipConj: if(item[idEquipArmDano] < 1) { return saida; } break;
      case idEquipDefs:
      // Escudo: Equipado? Disponível? Bloqueado.
        if(item[idEquipDefOcupa]) {
          if(escudoEquipado == undefined & maosDisponiveis > 0) {
            return "<button class='botao_dim' onmouseup='equiparEscudo(" + id + ")'> . </button>" }
          else if(escudoEquipado[idDoItem] == pacoteDeItem[idDoItem]) {
            return "<button class='botao_dim' onmouseup='equiparEscudo(" + id + ")'> E </button>" }
          else { return "<button class='botao_des'> # </button>"; }
        }
      // Armadura: Equipada? Disponível? Bloqueada.
        else {
          if(armaduraEquipada == undefined) {
            return "<button class='botao_adi' onmouseup='equiparArmadura(" + id + ")'> . </button>" }
          else if(armaduraEquipada[idDoItem] == pacoteDeItem[idDoItem]) {
            return "<button class='botao_adi' onmouseup='equiparArmadura(" + id + ")'> E </button>" }
          else { return "<button class='botao_des'> # </button>"; }
        }
        break;
      default: return saida;
    }
  // Itens que não podem ser equipados possuem um botão desativado:
    saida = "<button class='botao_des'> # </button>";
    estadoEquipado = pacoteDeItem[idEquip];
    switch(estadoEquipado) {
      case 0:
      // Se a arma exigir mais mãos do que há disponível, o botão é desativado:
        if(quantidadeDeMaosNecessarias(item) > maosDisponiveis) { return saida; } 
      // Senão a arma é equipável:
        return "<button class='botao_rem' onmouseup='equipar(" + id + ")'> . </button>";
      case 1:  return "<button class='botao_rem' onmouseup='equipar(" + id + ")'> E </button>";
      case 2:  return "<button class='botao_rem' onmouseup='equipar(" + id + ")'> EE </button>";
      default: return "<button class='botao_rem' onmouseup='equipar(" + id + ")'>" + estadoEquipado + "E</button>";      
    }
  }


  function equipar(id) {
  // Se o pacote existir, extrai o item, estado de "equipado", quantidade, e maosNecessarias:
    var pacoteDeItem = inventario[id]; if(pacoteDeItem == undefined) { return; }
    var item = pacoteDeItem[idItem], equipado = pacoteDeItem[idEquip];
    var quantidade = pacoteDeItem[idQuantidade],  maosNecessarias = quantidadeDeMaosNecessarias(item);
  // Se equipar o item exigir mais mãos ou itens disponíveis, todos são desequipados:
    if(maosNecessarias > maosDisponiveis | equipado >= quantidade) { 
      inventario[id][idEquip] = 0; maosDisponiveis += equipado * maosNecessarias; removerArmaEquipada(pacoteDeItem);
    }
  // Senão ele é equipado:
    else { inventario[id][idEquip] = equipado + 1; maosDisponiveis -= maosNecessarias; armasEquipadas.push(pacoteDeItem); }
    atualizarHTMLDoInventario();
  }


  function equiparEscudo(id) {
  //
    var pacoteDeItem = inventario[id]; if(pacoteDeItem == undefined) { return; }
    var item = pacoteDeItem[idItem];
  // Se o escudo já estiver equipado, desequipe:
    if(escudoEquipado != undefined) { 
      inventario[id][idEquip] = 0; 
      escudoEquipado = undefined; maosDisponiveis++; escudo -= item[idEquipDefBonus]; atualizarDefesas();
    }
    else { escudoEquipado = pacoteDeItem; inventario[id][idEquip] = 1;
           maosDisponiveis--; escudo += item[idEquipDefBonus]; atualizarDefesas(); }
    atualizarHTMLDoInventario();   
  }

 
  function equiparArmadura(id) {
  // Coleta o pacoteDeItem do inventario:
    var pacoteDeItem = inventario[id]; if(pacoteDeItem == undefined) { return; }   
  // Define a armadura e suas propriedades:
    var pesada = false, rigida = false;
    if(armaduraEquipada == undefined) {
      armaduraEquipada = pacoteDeItem; pacoteDeItem[idEquip] = 1;
      var item = pacoteDeItem[idItem];
      armadura = item[idEquipDefBonus], pesada = item[idEquipDefPesad], rigida = item[idEquipDefRigid];
    } else { armadura = 0;  pacoteDeItem[idEquip] = 0; armaduraEquipada = undefined;    }
  // Ajusta o Multiplicador de Corrida:
    if(rigida)      { multiplicadorDeCorrida = Math.min(multDeCorridaRigida, multiplicadorDeCorrida); } 
    else if(pesada) { multiplicadorDeCorrida = Math.min(mulDeCorridaPesada,  multiplicadorDeCorrida); }
    else            { multiplicadorDeCorrida = Math.min(mulDeCorridaBasica,  multiplicadorDeCorrida); }
  // Atualiza os dependentes:
    atualizarDefesas();
    atualizarDeslocamento();
    atualizarHTMLDoInventario();
  }


  function quantidadeDeMaosNecessarias(item) {
    switch(item[idEquipTipo]) {
      case idEquipArma:
      case idEquipProj:
      case idEquipConj: 
        var armaDeHaste = item[idEquipArmHste], armaDeDuasMaos = item[idEquipArm2mao];
        if(armaDeDuasMaos) { if(!habilidadeGigantismo | armaDeHaste) { return 2; } } return 1;
      case idEquipDefs: return 1;
      default: return 0;
    }

  }


  function removerArmaEquipada(pacote) {
    var quantidade = armasEquipadas.length;
    for(var i = 0; i < quantidade; i++) { if(armasEquipadas[i] == pacote) { armasEquipadas.slice(i,1); } }
  }


  function desequiparArmas() {
    armasEquipadas = [];
    maosDisponiveis = quantidadeDeMaos;
  }


  function atualizarHTMLDeMoedas() {
    html = "" + moedas + " moedas";
    if(equipamentoExtra != "") { html += "; <a class=const> +" + equipamentoExtra + ".</a>"; }
    else                       { html += "."; }
    _moedas.innerHTML = html;
  }


  function cabecalhoArma() {
    return "<div id='eqp_arm_cab_nome'>        <b> Nome        </b> </div>"
         + "<div id='eqp_arm_cab_custo'>       <b> Custo       </b> </div>"
         + "<div id='eqp_arm_cab_peso'>        <b> Peso        </b> </div>"
         + "<div id='eqp_arm_cab_dano'>        <b> Dano        </b> </div>"
         + "<div id='eqp_arm_cab_tipo'>        <b> Tipo        </b> </div>"
         + "<div id='eqp_arm_cab_fn'>          <b> FN          </b> </div>"
         + "<div id='eqp_arm_cab_alcance'>     <b> Alcance     </b> </div>"
         + "<div id='eqp_arm_cab_observacoes'> <b> Observações </b> </div>";
  }

  function cabecalhoDefesa() {
    return "<div id='eqp_def_cab_nome'>        <b> Nome        </b> </div>"
         + "<div id='eqp_def_cab_custo'>       <b> Custo       </b> </div>"
         + "<div id='eqp_def_cab_peso'>        <b> Peso        </b> </div>"
         + "<div id='eqp_def_cab_defesa'>      <b> Defesa      </b> </div>"
         + "<div id='eqp_def_cab_fn'>          <b> FN          </b> </div>"
         + "<div id='eqp_def_cab_observacoes'> <b> Observações </b> </div>"
  }

  function cabecalhoConjuracao() {
    return "<div id='eqp_cnj_cab_nome'>        <b> Nome        </b> </div>"
         + "<div id='eqp_cnj_cab_custo'>       <b> Custo       </b> </div>"
         + "<div id='eqp_cnj_cab_peso'>        <b> Peso        </b> </div>"
         + "<div id='eqp_cnj_cab_fn'>          <b> FN          </b> </div>"
         + "<div id='eqp_cnj_cab_observacoes'> <b> Observações </b> </div>";
  }

  function cabecalhoPocao() {
    return "<div id='eqp_poc_cab_nome'>      <b> Nome      </b> </div>"
         + "<div id='eqp_poc_cab_custo'>     <b> Custo     </b> </div>"
         + "<div id='eqp_poc_cab_peso'>      <b> Peso      </b> </div>"
         + "<div id='eqp_poc_cab_raridade'>  <b> Rarid.    </b> </div>"
         + "<div id='eqp_poc_cab_descricao'> <b> Descrição </b> </div>";
  }

  function cabecalhoMundano() {
    return "<div id='eqp_mun_cab_nome'>      <b> Nome      </b> </div>"
         + "<div id='eqp_mun_cab_custo'>     <b> Custo     </b> </div>"
         + "<div id='eqp_mun_cab_peso'>      <b> Peso      </b> </div>"
         + "<div id='eqp_mun_cab_descricao'> <b> Descrição </b> </div>";
  }

  function cabecalhoMusical() {
    return "<div id='eqp_mus_cab_nome'>      <b> Nome      </b> </div>"
         + "<div id='eqp_mus_cab_custo'>     <b> Custo     </b> </div>"
         + "<div id='eqp_mus_cab_fn'>        <b> FN        </b> </div>"
         + "<div id='eqp_mus_cab_peso'>      <b> Peso      </b> </div>"
         + "<div id='eqp_mus_cab_descricao'> <b> Descrição </b> </div>";
  }


  function analiseDeForcaNecessaria(fn__, fn2m, alcn, hste, dmao, forca) {
    var forcaSuficiente = "", forcaNecessariaHTML = "";
    if(fn__ > 0) { // Pode ser usada com uma mão?
      forcaNecessariaHTML += "" + fn__;
      if(fn2m > 0) { // ...e duas Mãos?
        forcaNecessariaHTML += "(" + fn2m + ")";
        if((habilidadeNanismo & alcn[0] == "C") | forca < fn2m) { forcaSuficiente = " texto_vermelho"; } 
        else if(forca < fn__)                { forcaSuficiente = " texto_amarelo";  }
      }
    // E apenas uma mão!
      else { if(forca < fn__) { forcaSuficiente = " texto_vermelho"; } }
    } 
    // Apenas duas mãos
    else {
      forcaNecessariaHTML += "" + fn2m; if((habilidadeNanismo & alcn[0] == "C") | forca < fn2m) { forcaSuficiente = " texto_vermelho"; }
    }
    return [forcaSuficiente, forcaNecessariaHTML];
  }


  function htmlDeObservacoes(crgr, hste, dmao, arrm, cnlz, asst, carc, cmst, foco, rgst) {
    var observacoes = "";
    if(crgr) { observacoes += "Carregar, ";     }  if(hste) { observacoes += "Haste, ";          }  
    if(dmao) { observacoes += "Duas Mãos, ";    }  if(arrm) { observacoes += "Arremesso, ";      }  
    if(cnlz) { observacoes += "Canalizador, ";  }  if(asst) { observacoes += "Asseste Mágico, "; } 
    if(carc) { observacoes += "Cerne Arcano, "; }  if(cmst) { observacoes += "Cerne Místico, ";  } 
    if(foco) { observacoes += "Foco Mágico, ";  }  if(rgst) { observacoes += "Registro, ";       }
    if(observacoes.length > 0) { observacoes = observacoes.slice(0,-2); } else { observacoes = "-"; }
    return observacoes;
  }


  function mostruarioArma() {
    var mostruario = "", itens = JSON.parse(json_arma()), forca = atributosEModificadores[idAtTotal][idFOR];
    var quantidade = itens.arma.length;
    for(var i = 0; i < quantidade; i++) { 
      var item = itens.arma[i];
      itensNoMostruario[i] = [idEquipArma, item.nome, item.custo, item.peso, item.material, item.materiais, item.forca, item.dano, item.tipo, item.fn, item.fn2m, item.alcance, item.carregar, item.haste, item.duasmaos, item.arremesso, item.canalizador, item.asseste, item.arcano, item.mistico, item.foco, item.registro, item.descricao]; 
      mostruario += htmlDeArmaDoMostruario(itensNoMostruario[i], forca, i);
    }
    return mostruario;
  }


  function htmlDeArmaDoMostruario(item, forca, i) {
    var html = "";
    var nome = item[1],  csto = item[2],  peso = item[3],  bfor = item[6],  dano = item[7],  tipd = item[8],
        fn__ = item[9],  fn2m = item[10], alcn = item[11], crgr = item[12], hste = item[13], dmao = item[14],
        arrm = item[15], cnlz = item[16], asst = item[17], carc = item[18], cmst = item[19], foco = item[20], 
        rgst = item[21], desc = item[22];
  // Define a cor do texto, a string a ser mostrada como FN e as Observações/Descrição :
    var analiseDeFN = analiseDeForcaNecessaria(fn__, fn2m, alcn, hste, dmao, forca);
    var forcaSuficiente = analiseDeFN[0], forcaNecessariaHTML = analiseDeFN[1];
    var observacoes = htmlDeObservacoes(crgr, hste, dmao, arrm, cnlz, asst, carc, cmst, foco, rgst);
  // HTML:
    var im = ""; if((i&1) == 0) { im = "im"; }
    html += "<div class='elemento_" + im + "par" + forcaSuficiente + "'>"
          + "<button class='botao_adi' onmouseup='adicionarEquipamentoAoInventario(" + i + ")'> + </button>"
          + "<div class='eqp_arm_elm_nome'> "  + nome + " </div>"
          + "<div class='eqp_arm_elm_custo'> " + csto + " </div>"
          + "<div class='eqp_arm_elm_peso'> "  + peso + " </div>"
          + "<div class='eqp_arm_elm_dano'>";
    if(bfor) { html += "FOR+"; }
    html += dano + "</div>"
          + "<div class='eqp_arm_elm_tipo'> "        + stringsDeTipoDeDano[tipd]  + " </div>"
          + "<div class='eqp_arm_elm_fn'> "          + forcaNecessariaHTML        + " </div>"
          + "<div class='eqp_arm_elm_alcance'> "     + ajustarNomeDeAlcance(alcn) + " </div>"
          + "<div class='eqp_arm_elm_observacoes'> " + observacoes                + " </div>"
          + "</div>";
    return html;
  }


  function mostruarioProjetil() {
    var mostruario = "", itens = JSON.parse(json_projetil()), forca = atributosEModificadores[idAtTotal][idFOR];
    var quantidade = itens.arma.length;
    for(var i = 0; i < quantidade; i++) { 
      var item = itens.arma[i];
      itensNoMostruario[i] = [idEquipProj, item.nome, item.custo, item.peso, item.material, item.materiais, item.forca, item.dano, item.tipo, item.fn, item.fn2m, item.alcance, item.carregar, item.haste, item.duasmaos, item.arremesso, item.canalizador, item.asseste, item.arcano, item.mistico, foco = item.foco, item.registro, item.descricao];
      mostruario += htmlDeProjetilDoMostruario(itensNoMostruario[i], forca, i);
    }
    return mostruario;
  }


  function htmlDeProjetilDoMostruario(item, forca, i) {
    var html = "";
    var nome = item[1],  csto = item[2],  peso = item[3],  bfor = item[6],  dano = item[7],  tipd = item[8],
        fn__ = item[9],  fn2m = item[10], alcn = item[11], crgr = item[12], hste = item[13], dmao = item[14],
        arrm = item[15], cnlz = item[16], asst = item[17], carc = item[18], cmst = item[19], foco = item[20], 
        rgst = item[21], desc = item[22];
  // Define a cor do texto, a string a ser mostrada como FN e as Observações/Descrição :
    var analiseDeFN = analiseDeForcaNecessaria(fn__, fn2m, alcn, hste, dmao, forca);
    var forcaSuficiente = analiseDeFN[0], forcaNecessariaHTML = analiseDeFN[1];
    var observacoes = htmlDeObservacoes(crgr, hste, dmao, arrm, cnlz, asst, carc, cmst, foco, rgst);
  // HTML:
    var im = ""; if((i&1) == 0) { im = "im"; }
    html += "<div class='elemento_" + im + "par" + forcaSuficiente + "'>"
          + "<button class='botao_adi' onmouseup='adicionarEquipamentoAoInventario(" + i + ")'> + </button>"
          + "<div class='eqp_arm_elm_nome'> "  + nome + " </div>"
          + "<div class='eqp_arm_elm_custo'> " + csto + " </div>"
          + "<div class='eqp_arm_elm_peso'> "  + peso + " </div>"
          + "<div class='eqp_arm_elm_dano'>";
    if(bfor) { html += "FOR+"; }
    html += dano + "</div>"
          + "<div class='eqp_arm_elm_tipo'> "        + stringsDeTipoDeDano[tipd]  + " </div>"
          + "<div class='eqp_arm_elm_fn'> "          + forcaNecessariaHTML        + " </div>"
          + "<div class='eqp_arm_elm_alcance'> "     + ajustarNomeDeAlcance(alcn) + " </div>"
          + "<div class='eqp_arm_elm_observacoes'> " + observacoes                + " </div>"
          + "</div>";
    return html;
  }


  function mostruarioConjuracao() {
    var mostruario = "", itens = JSON.parse(json_conjuracao()), forca = atributosEModificadores[idAtTotal][idFOR];
    var quantidade = itens.conjuracao.length;
    for(var i = 0; i < quantidade; i++) { 
      var item = itens.conjuracao[i];
      itensNoMostruario[i] = [idEquipConj, item.nome, item.custo, item.peso, item.material, item.materiais, item.forca, item.dano, item.tipo, item.fn, item.fn2m, item.alcance, item.carregar, item.haste, item.duasmaos, item.arremesso, item.canalizador, item.asseste, item.arcano, item.mistico, foco = item.foco, item.registro, item.descricao];
      mostruario += htmlDeConjuracaoDoMostruario(itensNoMostruario[i], forca, i);
    }
    return mostruario;
  }
  

  function htmlDeConjuracaoDoMostruario(item, forca, i) {
    var html = "";
    var nome = item[1],  csto = item[2],  peso = item[3],  bfor = item[6],  dano = item[7],  tipd = item[8],
        fn__ = item[9],  fn2m = item[10], alcn = item[11], crgr = item[12], hste = item[13], dmao = item[14],
        arrm = item[15], cnlz = item[16], asst = item[17], carc = item[18], cmst = item[19], foco = item[20], 
        rgst = item[21], desc = item[22];
  // Define a cor do texto, a string a ser mostrada como FN e as Observações/Descrição :
    var analiseDeFN = analiseDeForcaNecessaria(fn__, fn2m, alcn, hste, dmao, forca);
    var forcaSuficiente = analiseDeFN[0], forcaNecessariaHTML = analiseDeFN[1];
    var observacoes = htmlDeObservacoes(crgr, hste, dmao, arrm, cnlz, asst, carc, cmst, foco, rgst);
  // HTML:
    var im = ""; if((i&1) == 0) { im = "im"; }
    html += "<div class='elemento_" + im + "par" + forcaSuficiente + "'>"
          + "<button class='botao_adi' onmouseup='adicionarEquipamentoAoInventario(" + i + ")'> + </button>"
          + "<div class='eqp_cnj_elm_nome'> "        + nome                         + " </div>"
          + "<div class='eqp_cnj_elm_custo'> "       + csto                         + " </div>"
          + "<div class='eqp_cnj_elm_peso'> "        + peso                         + " </div>"
          + "<div class='eqp_cnj_elm_fn'> "          + forcaNecessariaHTML          + " </div>"
          + "<div class='eqp_cnj_elm_observacoes'> " + desc + " <b> " + observacoes + "</b> </div>"
          + "</div>";
    return html;
  }


  function mostruarioMunicao() {
    var mostruario = "", itens = JSON.parse(json_municao());  var quantidade = itens.municao.length;
    for(var i = 0; i < quantidade; i++) {
      var item = itens.municao[i];
      itensNoMostruario[i] = [idEquipMuni, item.nome, item.custo, item.peso, item.descricao];
      mostruario += htmlDeMunicaoDoMostruario(itensNoMostruario[i], i);
    }
    return mostruario;
  }


  function htmlDeMunicaoDoMostruario(item, i) {
    var html = "", nome = item[1],  custo = item[2],  peso = item[3],  descricao = item[4];
    var im = ""; if((i&1) == 0) { im = "im"; }
    html += "<div class='elemento_" + im + "par'>"
          + "<button class='botao_adi' onmouseup='adicionarEquipamentoAoInventario(" + i + ")'> + </button>"
          + "<div class='eqp_mun_elm_nome'> "      + nome      + " </div>"
          + "<div class='eqp_mun_elm_custo'> "     + custo     + " </div>"
          + "<div class='eqp_mun_elm_peso'> "      + peso      + " </div>"
    if(descricao.length > 66) { html += "<div class='eqp_mun_elm_descricaolonga'> " + descricao + " </div></div>"; }
                         else { html += "<div class='eqp_mun_elm_descricao'>      " + descricao + " </div></div>"; }
    return html;
  }


  function mostruarioDefesa() {
    var mostruario = "", itens = JSON.parse(json_defesa()), forca = atributosEModificadores[idAtTotal][idFOR];
    var quantidade = itens.defesa.length;
    for(var i = 0; i < quantidade; i++) {
      var item = itens.defesa[i];
      itensNoMostruario[i] = [idEquipDefs, item.nome, item.custo, item.peso, item.material, item.materiais, item.defesa, item.pesada, item.rigida, item.ocupa, item.tipo, item.fn];
      mostruario += htmlDeDefesaDoMostruario(itensNoMostruario[i], forca, i);
    }
    return mostruario;
  }


  function htmlDeDefesaDoMostruario(item, forca, i) {
    var html = "";
    var nome = item[1],  custo       = item[2], peso   = item[3], defesa = item[6], tipo        = item[10],
          fn = item[11], observacoes = "-",     pesada = item[7], rigida = item[8], ocupaUmaMao = item[9];
    if(pesada) { observacoes = "Pesada"; if(rigida) { observacoes += ", Rígida."; } else { observacoes += "."; } }
    if(ocupaUmaMao) { observacoes = " Ocupa uma mão."; }
    var forcaSuficiente = "";
    if(forca < fn) { forcaSuficiente = " texto_vermelho"; }
    var im = ""; if((i&1) == 0) { im = "im"; }
    html += "<div class='elemento_" + im + "par" + forcaSuficiente + "'>"
          + "<button class='botao_adi' onmouseup='adicionarEquipamentoAoInventario(" + i + ")'> + </button>"
          + "<div class='eqp_def_elm_nome'> "        + nome            + " </div>"
          + "<div class='eqp_def_elm_custo'> "       + custo           + " </div>"
          + "<div class='eqp_def_elm_peso'> "        + peso            + " </div>"      
          + "<div class='eqp_def_elm_defesa'> "      + defesa          + " </div>";
    if(pesada) {  if(guerreiroDeAco1) { fn = parseInt(fn-1); }  if(guerreiroDeAco2) { fn = parseInt(fn-1); }  }
    html += "<div class='eqp_def_elm_fn'> "          + fn              + " </div>"
          + "<div class='eqp_def_elm_observacoes'> " + observacoes     + " </div>"
          + "</div>";
    return html;
  }


  function mostruarioPocao() {
    var mostruario = "", itens = JSON.parse(json_pocao());  var quantidade = itens.pocao.length;
    for(var i = 0; i < quantidade; i++) {
      var item = itens.pocao[i];
      itensNoMostruario[i] = [idEquipPoca, item.nome, item.custo, item.peso, item.raridade, item.descricao];
      mostruario += htmlDePocaoDoMostruario(itensNoMostruario[i], i);
    }
    return mostruario;
  }


  function htmlDePocaoDoMostruario(item, i) {
    var html = "", nome = item[1], custo = item[2], peso = item[3], raridade = item[4], descricao = item[5];
    var im = ""; if((i&1) == 0) { im = "im"; }
    html += "<div class='elemento_" + im + "par'>"
          + "<button class='botao_adi' onmouseup='adicionarEquipamentoAoInventario(" + i + ")'> + </button>"
          + "<div class='eqp_poc_elm_nome'> "      + nome      + " </div>"
          + "<div class='eqp_poc_elm_custo'> "     + custo     + " </div>"
          + "<div class='eqp_poc_elm_peso'> "      + peso      + " </div>"
          + "<div class='eqp_poc_elm_raridade'> "  + raridade  + " </div>"
          + "<div class='eqp_poc_elm_descricao'> " + descricao + " </div> </div>";
    return html;
  }


  function mostruarioMundano() {
    var mostruario = "", itens = JSON.parse(json_mundano());  var quantidade = itens.mundano.length;
    for(var i = 0; i < quantidade; i++) {
      var item = itens.mundano[i];
      itensNoMostruario[i] = [idEquipMund, item.nome, item.custo, item.peso, item.descricao];
      mostruario += htmlDeMundanoDoMostruario(itensNoMostruario[i], i);
    }
    return mostruario;
  }

  function htmlDeMundanoDoMostruario(item, i) {
    var html = "", nome = item[1], custo = item[2], peso = item[3], descricao = item[4];
    itensNoMostruario[i] = [idEquipMund, nome, custo, peso];
    var im = ""; if((i&1) == 0) { im = "im"; }
    html += "<div class='elemento_" + im + "par'>"
          + "<button class='botao_adi' onmouseup='adicionarEquipamentoAoInventario(" + i + ")'> + </button>"
          + "<div class='eqp_mun_elm_nome'> "       + nome      + " </div>"
          + "<div class='eqp_mun_elm_custo'> "      + custo     + " </div>"
          + "<div class='eqp_mun_elm_peso'> "       + peso      + " </div>";
    if(descricao.length > 70) { html += "<div class='eqp_mun_elm_descricaolonga'>"+ descricao +"</div></div>"; }
                         else { html += "<div class='eqp_mun_elm_descricao'> "    + descricao +"</div></div>"; }
    return html;
  }


  function mostruarioMusical() {
    var mostruario = "", itens = JSON.parse(json_musical());  var quantidade = itens.musical.length;
    for(var i = 0; i < quantidade; i++) {
      var item = itens.musical[i];
      itensNoMostruario[i] = [idEquipMund, item.nome, item.custo, item.peso, item.fn, item.descricao];
      mostruario += htmlDeMusicalDoMostruario(itensNoMostruario[i], i);
    }
    return mostruario;
  }


  function htmlDeMusicalDoMostruario(item, i) {
    var html = "", nome = item[1], custo = item[2], fn = item[4], peso = item[3], descricao = item[5];
    var im = ""; if((i&1) == 0) { im = "im"; }
    html += "<div class='elemento_" + im + "par'>"
          + "<button class='botao_adi' onmouseup='adicionarEquipamentoAoInventario(" + i + ")'> + </button>"
          + "<div class='eqp_mus_elm_nome'> "       + nome      + " </div>"
          + "<div class='eqp_mus_elm_custo'> "      + custo     + " </div>"
          + "<div class='eqp_mus_elm_fn'> "         + fn        + " </div>"
          + "<div class='eqp_mus_elm_peso'> "       + peso      + " </div>";
    if(descricao.length > 70) { html += "<div class='eqp_mus_elm_descricaolonga'>"+descricao+"</div></div>"; } 
                         else { html += "<div class='eqp_mus_elm_descricao'>     "+descricao+"</div></div>"; }
    return html;
  }



//// Q U A L I D A D E  &  M A T E R I A L ////

  var itemTeste = [0,"Adaga",50,0.25,"Aço",["metal","madeira"],true,4,3,1,-1,"Corpo-a-corpo",false,false,false,false,true,false,false,false,false,false];
  //selecionarQualidadeEMaterial(itemTeste);


  function selecionarQualidadeEMaterial(item) {
//
    var html = "<div id=\"exportador-item\">";

  // Mostrador do item
    var htmlCabecalho = "", htmlItem = "";
    switch(item[0]) {
      case idEquipArma: htmlCabecalho = cabecalhoArma();       htmlItem = htmlDeArmaDoMostruario(item);       break;
      case idEquipProj: htmlCabecalho = cabecalhoArma();       htmlItem = htmlDeProjetilDoMostruario(item);   break;
      case idEquipMuni: htmlCabecalho = cabecalhoMundano();    htmlItem = htmlDeMunicaoDoMostruario(item);    break;
      case idEquipConj: htmlCabecalho = cabecalhoConjuracao(); htmlItem = htmlDeConjuracaoDoMostruario(item); break;
      case idEquipMusi: htmlCabecalho = cabecalhoMusical();    htmlItem = htmlDeMusicalDoMostruario(item);    break;
      case idEquipDefs: htmlCabecalho = cabecalhoDefesa();     htmlItem = htmlDeDefesaDoMostruario(item);     break;
      case idEquipPoca: htmlCabecalho = cabecalhoPocao();      htmlItem = htmlDePocaoDoMostruario(item);      break;
      case idEquipMund: htmlCabecalho = cabecalhoMundano();    htmlItem = htmlDeMundanoDoMostruario(item);    break;
    }
    html += '<div class="cabecalho">' + htmlCabecalho + '</div>' + htmlItem;

//// Qualidade
    html += '<div class="equip_qualidades">'
          + '<div class="cabecalho">'
            + ' <div class="eqp_qld_nome">   <b> Qualidades </b> </div>' 
            + ' <div class="eqp_qld_custo">  <b> Custo*     </b> </div>' 
            + ' <div class="eqp_qld_dano">   <b> Dano+      </b> </div>' 
            + ' <div class="eqp_qld_ataque"> <b> Ataque+    </b> </div>' 
            + ' <div class="eqp_qld_fndef">  <b> FN- (Def)  </b> </div>' 
            + ' <div class="eqp_qld_defesa"> <b> Defesa+    </b> </div>' 
            + ' <div class="eqp_qld_bonus">  <b> Testes+    </b> </div>'
          + '</div>'
    var quantidade = qualidadesDeEquipamento.length;
    var im = "";
    html += '<div class="lista_curta">';
    for(var i = 0; i < quantidade; i++) {
      var qualidade = qualidadesDeEquipamento[i];
      im = ""; if((i&1) == 0) { im = "im" };
      html += '<div class="elemento_' + im + 'par">'
            + ' <div class="eqp_qld_botao">'
            + '  <label class="cont_verm"> <input type="checkbox"> <span class="checkmark"> </span> </label>'
            + ' </div>'
            + ' <div class="eqp_qld_nome">'   + qualidade.nome   + '</div>' 
            + ' <div class="eqp_qld_custo">'  + qualidade.custo  + '</div>' 
            + ' <div class="eqp_qld_dano">'   + qualidade.dano   + '</div>' 
            + ' <div class="eqp_qld_ataque">' + qualidade.ataque + '</div>' 
            + ' <div class="eqp_qld_fndef">'  + qualidade.fndef  + '</div>' 
            + ' <div class="eqp_qld_defesa">' + qualidade.defesa + '</div>' 
            + ' <div class="eqp_qld_bonus">'  + qualidade.bonus  + '</div>'
            + '</div>';
    }
    html += '</div> </div>';
    // Marcar qualidade Mediana, já que sempre é padrão

//// Material
    var materialOriginal = []; // Salva o material original do item da lista.

  // Cabeçalho da seleção de materiais
    html += '<div class="equip_qualidades">'
          + '<div class="cabecalho">'
            + ' <div class="eqp_mtr_nome">  <b> Materiais </b> </div>' 
            + ' <div class="eqp_mtr_mult">  <b> Bonus*     </b> </div>' 
            + ' <div class="eqp_mtr_bonus"> <b> Bonus+     </b> </div>' 
            + ' <div class="eqp_mtr_fn">    <b> FN         </b> </div>' 
            + ' <div class="eqp_mtr_peso">  <b> Peso       </b> </div>' 
            + ' <div class="eqp_mtr_obs">   <b> Observação </b> </div>' 
          + '</div>'


    html += "<div class='lista'>";
    var material = item[idEquipMatr], materiais = item[idEquipMtrs];
    quantidade = materiaisDeEquipamento.length;
    for(var i = 0; i < quantidade; i++) {
      var material = materiaisDeEquipamento[i];
      if(tipoDeMaterialPossivel(material.tipo, materiais)) {
      html += '<div class="elemento_' + im + 'par">'
            + ' <div class="eqp_qld_botao">'
            + '  <label class="cont_verm"> <input type="checkbox"> <span class="checkmark"> </span> </label>'
            + ' </div>'
            +   htmlDeMaterialDeEquipamento(item, material)
            + '</div>';
      }
     // SALVAR MATERIAL ORIGINAL DA ARMA, E MARCÁ-LO COMO DEFAULT 
    }
    html += "</div>";

    html += "</div>";
    _visualizador.innerHTML = html;
  }


  function tipoDeMaterialPossivel(material, materiais) {
    var quantidade = materiais.length;
    for(var i = 0; i < quantidade; i++) { if(material == materiais[i]) { return true; } } return false;
  }

  
  function htmlDeMaterialDeEquipamento(item, material) {
  // Coleta os atributos do material para (possivelmente modificá-los e) usar como parâmetros:
    var nome = material.nome, custo = material.custo, mult = material.mult, bonus = material.bonus, 
        fn = material.fn, peso = material.peso, modificacoes = material.modificacoes;

  // Modifica os valores, caso as condições definidas em "modificadoes" sejam satisfeitas:
    var quantidade = modificacoes.length;
    for(var i = 0; i < quantidade; i++) {
      var modificacao = modificacoes[i];
      if(requisitosDeModificadorCumpridos("nome", "categoriaDeItem", "tipoDeDano", "alcance", modificacao)) {     
        // TO DO: Atualiza os valores, dependendo do item
      }
    }
    // TO DO: Adicionar os modificadores (talvez atualizados) como parâmetros para a seleção

    return "" + material.nome + "<br/>";
  }


  function trocarQualidadeDeItem() {
    // O padrão de todos os itens é ser "mediano", não há gambiarra adicional como para os materiais.
  }


  function trocarMaterialDeItem(custo, mult, bonus, fn, peso) {
    // TO DO: Aplicar os modificadores padrões do item para deixá-lo "padrão", então aplica novos valores.
  }






//// A T A Q U E S ////

  function adicionarAtaqueDesarmado(ataque) {
    ataquesDesarmados.push(ataque);
    atualizarHTMLDosAtaques();
  }


  function adicionarAtaque(tipoDeEquipamento, arma) {
    var nome = arma[idEquipNome],    tdno = arma[idEquipArmTipD], alcn = arma[idEquipArmAlcn],
        bfor = arma[idEquipArmBFOR], dano = arma[idEquipArmDano]; 
    ataquesArmados.push([tipoDeEquipamento, nome, tdno, ajustarNomeDeAlcance(alcn), bfor, dano, arma]);
    atualizarHTMLDosAtaques();
  }


  function removerAtaqueDesarmado(nome) {
    var novosAtaquesDesarmados = [];
    var quantidade = ataquesDesarmados.length;
    for(var i = 0; i < quantidade; i++) {
      var ataqueDesarmado = ataquesDesarmados[i];
      if(nome != ataqueDesarmado[idAtqNome]) { novosAtaquesDesarmados.push(ataqueDesarmado); }
    }
    ataquesDesarmados = novosAtaquesDesarmados;
    atualizarHTMLDosAtaques(); 
  }

  function removerAtaque(arma) {
    var novosAtaquesArmados = [];
    var quantidade = ataquesArmados.length;
    for(var i = 0; i < quantidade; i++) {
      var ataqueArmado = ataquesArmados[i];
      if(arma[idEquipNome] != ataqueArmado[idAtqNome]) { novosAtaquesArmados.push(ataqueArmado); }
    }
    ataquesArmados = novosAtaquesArmados;
    atualizarHTMLDosAtaques();
  }


  function atualizarHTMLDosAtaques() {
    var html = "",  quantidade = 0,  impar = false;
  // Adiciona os Ataques desarmados ao HTML:
    quantidade = ataquesDesarmados.length;
    for(var i = 0; i < quantidade; i++) {  html += htmlDeAtaque(ataquesDesarmados[i], impar);  impar = !impar; }
  // Adiciona os Ataques Armados ao HTML:
    quantidade = ataquesArmados.length;
    for(var i = 0; i < quantidade; i++) {  html += htmlDeAtaque(   ataquesArmados[i], impar);  impar = !impar; }
  // Atualiza o HTML:
    _ataques.innerHTML = html;
  }


  function htmlDeAtaque(ataque, impar) {
    var tipoDeAtaque = ataque[idAtqTipo], nome = ataque[idAtqNome], tipoDeDano = ataque[idAtqTipD],
             alcance = ataque[idAtqAlcn], dano = ataque[idAtqDano];
    var atributos = atributosEModificadores[idAtTotal];
  // Aplicar Bônus de Força? Ou o Máximo entre AGI e INT devido a "Precisão"?
    if(ataque[idAtqBFOR]) {
      if(habilidadePrecisao) { dano += Math.max(atributos[idAGI], atributos[idINT]); }
      else                   { dano += atributosEModificadores[idAtTotal][idFOR];    }
    }
  // Habilidade "Aplicar Força"?
    if(habilidadeAplicarForca & tipoDeAtaque == idEquipProj) { dano += 2; }
  // Aplica bônus de Ataque (ao lado do nome) e Dano fornecidos pelas habilidades possiídas:
    nome += bonusDeAtaquePorHabilidade(modificadoresDeAtaque, nome, tipoDeAtaque, tipoDeDano, alcance);
    dano += bonusDeDanoPorHabilidade(modificadoresDeDano, nome, tipoDeAtaque, tipoDeDano, alcance);
  // Retorna o HTML da arma:
    var im = ""; if(impar == 0) { im = "im"; }
    return "<div class='elemento_" + im + "par'> <div class='atq_elm_nome'>" + nome  + "</div> <div class='atq_elm_tipo'>" 
           + stringsDeTipoDeDano[tipoDeDano] + "</div> <div class='atq_elm_alcance'>" 
           + alcance + "</div> <div class='atq_elm_dano'>" 
           + dano + "</div> </div>";
  }


  function bonusDeAtaquePorHabilidade(modificadores, nomeDoAtaque, tipoDeAtaque, tipoDeDano, alcanceDoAtaque) {
    var quantidade = modificadores.length, bonusDeAtaque = 0;
    for(var i = 0; i < quantidade; i++) {
      var modificador = modificadores[i];
      if(requisitosDeModificadorCumpridos(nomeDoAtaque, tipoDeAtaque, tipoDeDano, alcanceDoAtaque, modificador)) {
        bonusDeAtaque += valorDeBonus(modificador[idBonusHabBonus]);
      }
    }
    if(bonusDeAtaque > 0) { return " +" + bonusDeAtaque; }
   return "";
  }


  function bonusDeDanoPorHabilidade(modificadores, nomeDoAtaque, tipoDeAtaque, tipoDeDano, alcanceDoAtaque) {
    var quantidade = modificadores.length, bonusDeDano = 0;
    for(var i = 0; i < quantidade; i++) {
      var modificador = modificadores[i];
      if(requisitosDeModificadorCumpridos(nomeDoAtaque, tipoDeAtaque, tipoDeDano, alcanceDoAtaque, modificador)) {
        bonusDeDano += parseInt(valorDeBonus(modificador[idBonusHabBonus]));
      }
    }
    return bonusDeDano;
  }


  function stringTipoDoAtaque(id) {
    switch(id) {
      case idEquipNone: return "desarmado";
      case idEquipArma: return "corporal";
      case idEquipProj: return "distancia";
      case idEquipConj: return "conjuracao";
      default: return "";
    }
  }


  function ajustarNomeDeAlcance(alcance) {
    if(alcance[0] == 'C') { return "CaC"; }
    return alcance[0];
  }



//// D E F E S A S ////

  function adicionarHabilidadeModificadoraDeDefesa(nome, efeito, descricao, defesa) {
  // Adiciona a nova habilidade à lista:
    habilidadesModificadorasDeDefesa.push([nome, nome + descricao, efeito, defesa]);
  // Atualiza o HTML do elemento:
    atualizarHTMLDosExtrasDeDefesa();
  }


  function removerHabilidadeModificadoraDeDefesa(nome) {
  // Varre as habilidadesModificadorasDeDefesa a procura do nome e elimina a habilidade, caso exista:
    var quantidade = habilidadesModificadorasDeDefesa.length;
    for(var i = 0; i < quantidade; i++) {
      if(habilidadesModificadorasDeDefesa[i][idModDefNome] == nome) {
        habilidadesModificadorasDeDefesa.splice(i, 1);
        break;
      }
    }
  // Atualiza o HTML do elemento:
    atualizarHTMLDosExtrasDeDefesa();
  }


  function atualizarHTMLDosExtrasDeDefesa() {
    var html_bloqueio = "", html_esquiva = "", html_determinacao = "";
    var quantidade = habilidadesModificadorasDeDefesa.length;
    for(var i = 0; i < quantidade; i++) {
      var modificador = habilidadesModificadorasDeDefesa[i];
      var html = "<a class='bonus' title='" + modificador[idModDefDesc] + "'>" 
               + modificador[idModDefEfto] + "</a> <a class='const'></a>";
      switch(modificador[idModDefTipo]) {
        case idHabModDefBloq: html_bloqueio     += html + ", "; break;
        case idHabModDefEsqv: html_esquiva      += html + ", "; break;
        case idHabModDefDetr: html_determinacao += html + ", "; break;
      }
    }
    _bloqueioExtra.innerHTML     = html_bloqueio.slice(0,-2);
    _esquivaExtra.innerHTML      = html_esquiva.slice(0,-2);
    _determinacaoExtra.innerHTML = html_determinacao.slice(0,-2);
  }


  function adicionarArmaduraNatural(nome, modificador, pesada, rigida) {
    armadurasNaturais.push([nome, modificador, pesada, rigida]);  atualizarArmaduraNatural();
  }


  function removerDaArmaduraNatural(nome) {
  // Varre as Armaduras Naturais removendo a indicada pelo nome da Habilidade:
    var quantidade = armadurasNaturais.length;
    for(var i = 0; i < quantidade; i++) {
      var armaduraNaturalAtual = armadurasNaturais[i];
      if(armaduraNaturalAtual[idArmNat_Nome_] == nome) { armadurasNaturais.splice(i,1); break; }
    }
    atualizarArmaduraNatural();
  }


  function atualizarArmaduraNatural() {
    armaduraNatural = 0;  multiplicadorNaturalDeCorrida = mulDeCorridaBasica;
  // Varre as armaduras naturais do arranjo, atualizando o multiplicadorNaturalDeCorrida
    var quantidade = armadurasNaturais.length;
    for(var i = 0; i < quantidade; i++) {
      var armaduraNaturalAtual = armadurasNaturais[i];
      armaduraNatural = Math.max(armaduraNatural, armaduraNaturalAtual[idArmNatModifc]);
      if(armaduraNaturalAtual[idArmNatRigida]) {
         multiplicadorNaturalDeCorrida = multDeCorridaRigida;
      } if(armaduraNaturalAtual[idArmNatPesada]) {
        multiplicadorNaturalDeCorrida = Math.min(mulDeCorridaPesada, multiplicadorNaturalDeCorrida);
      }
    }
  }


  function atualizarDefesas() {
    var e = "<a class='const'> + </a>";
  // Atributos
    var atributos = atributosEModificadores[idAtTotal];
    var forca        = atributos[idFOR], agilidade = atributos[idAGI],
        inteligencia = atributos[idINT], vontade   = atributos[idVON];
  // Força
    var html_forca = "";
    if(forca > 0) { html_forca += e + "<a class='bonus' title='Força'>" + forca + "</a>"; }
  // Agilidade
   var html_agilidade = "";
   if(habilidadeIntuicao & vontade >= agilidade) {
     html_agilidade += e + "<a class='bonus' title='Vontade'>" + vontade + "</a>";
     agilidade = vontade;     
   } else if(agilidade > 0) { html_agilidade += e + "<a class='bonus' title='Agilidade'>" + agilidade + "</a>"; }
  // Armadura:
    var bonusArmadura = armaduraNatural, html_armadura = "";
    if(armaduraNatural > armadura) {
      if(armaduraNatural > 0) {
        html_armadura += e + "<a class='bonus' title='Armadura Natural'>" + armaduraNatural + "</a>";
      }
    } else if (armadura > 0){
      bonusArmadura = armadura;
      html_armadura += e + "<a class='bonus' title='Armadura'>" + armadura + "</a>";
    }
  // Escudo:
    var html_escudo = "";
    if(escudo > 0) { html_escudo += e + "<a class='bonus' title='Escudo'>" + escudo + "</a>"; }
  // Bônus Mental de Inteligência ou Vontade:
    var bonusMental = inteligencia, html_bonusMental = "";
    if(inteligencia > vontade) {
      html_bonusMental = e + "<a class='bonus' title='Inteligência'>" + inteligencia + "</a>";
    } else if(vontade > 0){
      bonusMental = vontade;
      html_bonusMental = e + "<a class='bonus' title='Vontade'>" + vontade + "</a>";
    }
  // Bônus de Bloqueio:
    var html_bloqueioBonus = "";
    if(bloqueioBonus > 0) { html_bloqueioBonus = e + "<a class='bonus' title='Bônus'>" + bloqueioBonus + "</a>"; }
  // Bônus de Esquiva:
    var html_esquivaBonus = "";
    if(esquivaBonus > 0) { html_esquivaBonus = e + "<a class='bonus' title='Bônus'>" + esquivaBonus + "</a>"; }
  // Bônus de Determinação:
    var html_determinacaoBonus = "";
    if(determinacaoBonus > 0) { 
      html_determinacaoBonus = e + "<a class='bonus' title='Bônus'>" + determinacaoBonus + "</a>";
    }
  // Bloqueio:
    var html_bloqueio = "<a class='const'> ( </a> <a class='bonus' title='Base'> "  + bloqueioBase  + "</a>"
                      + html_forca + html_armadura + html_escudo + html_bloqueioBonus + "<a class='const'> ) </a>";
  // Esquiva:
    var html_esquiva = "<a class='const'> ( </a>  <a class='bonus' title='Base'> "  + esquivaBase  + "</a>"
                     + html_agilidade + html_armadura + html_esquivaBonus + "<a class='const'> ) </a>";
  // Determinação:
    var html_determinacao = "<a class='const'> ( </a> <a class='bonus' title='Base'> "  + determinacaoBase  + "</a>"
                     + html_bonusMental + html_determinacaoBonus + "<a class='const'> ) </a>";
  // Valores
    bloqueio     = bloqueioBase     + bloqueioBonus     + forca      + bonusArmadura + escudo;
    esquiva      = esquivaBase      + esquivaBonus      + agilidade  + bonusArmadura;
    determinacao = determinacaoBase + determinacaoBonus + bonusMental;
  // Atualiza o HTML:
    _bloqueio.innerHTML      = "" + bloqueio     + html_bloqueio;
    _esquiva.innerHTML       = "" + esquiva      + html_esquiva;
    _determinacao.innerHTML  = "" + determinacao + html_determinacao;
  }



//// C A R G A // D E S L O C A M E N T O // I N I C I A T I V A ////

  function atualizarCargaEDeslocamento(ajuste) {
  // Calcula os valores de carga:
    carga += ajuste;
    cargaBasica = Number(multiplicadorDeCarga * (Math.max(1,atributosEModificadores[idAtTotal][idFOR])
                         + cargaBonus)* multiplicadordeCargaBasica);
    cargaPesada = cargaBasica * multiplicadorDeCargaPesada;
    cargaMaxima = cargaBasica * multiplicadorDeCargaMaxima;
  //
    cargaMostrada  = Math.trunc(carga * 100) / 100;
    var html = cargaMostrada + "/" + cargaMaxima;
    if(cargaMostrada > cargaMaxima) {
      html += "<a class='const' title='Não pode se mover!'> (Máxima!) </a>";
    } else if(cargaMostrada > cargaPesada) {
      html += "<a class='const' title='Inapto para atividades físicas'> (Pesada até " + cargaMaxima + ") </a>";
    } else {
      html += "<a class='const' title='Sem contratempos'> (Leve até " + cargaPesada + ") </a>";
    }
    _carga.innerHTML = html;
  // Atualiza o Deslocamento:
    atualizarDeslocamento();
  }


  function atualizarDeslocamento() {
    var agilidade = atributosEModificadores[idAtTotal][idAGI];
    deslocamento = parseInt((agilidade*multiplicadorDeDeslocamento)/2 + 5) + deslocamentoBonus;
    var html_deslocamento = deslocamento;
    if(multiplicadorDeDeslocamento != 1) {
      html_deslocamento += "<a class='const'> ((( </a> </div> <a class='bonus' title='Agilidade'>" + agilidade + "</a>"
                         + "<a class='const'> * </a>"
                         + "<a class='bonus' title='Multiplicador'>" + multiplicadorDeDeslocamento
                         + "<a class='const'> ) </a>";
    } else {
      html_deslocamento += "<a class='const'> (( </a> </div> <a class='bonus' title='Agilidade'>" + agilidade + "</a>";
    }
    html_deslocamento += "<a class='const'> / 2 ) </a>";
    if(deslocamentoBonus != 0) {
      html_deslocamento += "<a class='const'> + 5) + </a> <a class='bonus' title='Bônus'>" + deslocamentoBonus + "</a>";
    } else {
      html_deslocamento += "<a class='const'> + 5) </a>";
    }
    _deslocamento.innerHTML = html_deslocamento;
    var multiplicador = Math.min(multiplicadorDeCorrida, multiplicadorNaturalDeCorrida);
    document.getElementById("corrida").innerHTML = deslocamento * multiplicador
      + "<a class='const'> ( </a> <a class='bonus' title='Deslocamento'>"  + deslocamento  + "</a>"
      + "<a class='const'> * </a> <a class='bonus' title='Multiplicador'>" + multiplicador + "</a>"
      + "<a class='const'> ) </a>";
  }


  function atualizarIniciativa() {
    var atributos = atributosEModificadores[idAtTotal];
    var agilidade = atributos[idAGI], inteligencia = atributos[idINT], vontade = atributos[idVON];
    var html = "";
    if(habilidadeIntuicao & vontade >= agilidade & vontade >= vontade) {
      iniciativa = (vontade + iniciativaBonus) + "+" + dadosDeIniciativa + "D6";
      html += "" + iniciativa + "<a class='const'> ( </a> <a class='bonus' title='Vontade'>" + vontade + "</a>"; }
    else if(agilidade >= inteligencia) {    
      iniciativa = (agilidade + iniciativaBonus) + "+" + dadosDeIniciativa + "D6";
      html += "" + iniciativa + "<a class='const'> ( </a> <a class='bonus' title='Agilidade'>" + agilidade + "</a>"; }
    else {
      iniciativa = (inteligencia + iniciativaBonus) + "+" + dadosDeIniciativa + "D6";
      html += "" + iniciativa + "<a class='const'> ( </a> <a class='bonus' title='Inteligência'>" + inteligencia + "</a>";
    }
    if(iniciativaBonus > 0) { 
      html += "<a class='const'> + </a> <a class='bonus' title='Bônus'>" +iniciativaBonus+ "</a>";
    }
    _iniciativa.innerHTML = html + "<a class='const'> ) </a>";
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_personagemZero() {
    return '{"personagem":[[],"","Novo Personagem","25","",1,null,null,null,null,null,null,-1,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[null,null,null],null,-1,0,[]]}';
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_racas() {
    return '{"raca":[{"nome":"Aesir","atributos":[4,2,3,3],"classes":"Bardo, Druida, Guerreiro, Patrulheiro e Rúnico.", "automatica":"Vigor Nórdico", "habilidades":["Bravura Selvagem 1","Bravura Selvagem 2","Fúria Bestial","Berserkir","Ulfhednar","Potência","Robustez"],"descricao":"","imagem":"aesir.png"},{"nome":"Anão","atributos":[4,2,3,3],"classes":"Guerreiro, Paladino, Sacerdote e Rúnico.", "automatica":"Coração da Montanha", "habilidades":["Cabeça Dura","Coração da Montanha 2", "Duro como Pedra","Estabilidade","Forjado à Fogo","Nascido nas Montanhas","Raça Subterrânea"],"descricao":"","imagem":"anao.png"},{"nome":"Astério ♂","atributos":[5,2,2,3],"classes":"Guerreiro, Paladino, Rúnico, Xamã.", "automatica":"Chifres Poderosos", "habilidades":["Cabeça Dura","Competidor","Faro","Fortaleza","Imparável","Potência","Robustez"],"descricao":"","imagem":"asterio.png"},{"nome":"Astério ♀","atributos":[3,2,3,2],"classes":"Ladino, Xamã.", "automatica":"Faro", "habilidades":["Cabeça Dura","Competidor","Fortaleza","Imparável","Potência","Robustez"],"descricao":"","imagem":"asterio.png"},{"nome":"Centauro","atributos":[4,2,3,3],"classes":"Druida, Guerreiro, Patrulheiro, Xamã.", "automatica":"Corpo Equino", "habilidades":["Bravura Selvagem 1","Bravura Selvagem 2","Cabeça Dura","Patas Fortes","Potência","Raça Florestal","Robustez"],"descricao":"","imagem":"centauro.png"},{"nome":"Elfo","atributos":[2,4,3,3],"classes":"Druida, Mago, Patrulheiro, Sacerdote e Xamã.", "automatica":"Benção de Lathellanis", "habilidades":["Arborícola","Dom da Magia","Herança Feérica","Invisibilidade Natural","Luzes das Fadas","Intelecto Élfico","Raça Florestal"],"descricao":"","imagem":"elfo.png"},{"nome":"Faen","atributos":[2,4,3,2],"classes":"Patrulheiro, Ladino, Mago.", "automatica":"Constituição Feérica", "habilidades":["Dom da Magia","Herança Feérica","Invisibilidade Natural","Luzes das Fadas","Isnuu","Presença Real","Voador Exímio"],"descricao":"","imagem":"faen.png"},{"nome":"Fauno","atributos":[3,3,3,3],"classes":"Bardo, Druida, Patrulheiro, Xamã.", "automatica":"Patas com Cascos", "habilidades":["Cascos Ágeis","Flauta de Pã","Marrada","Patas Fortes","Pintura Corporal","Raça Florestal","Sentidos de Caçador"],"descricao":"","imagem":"fauno.png"},{"nome":"Fira","atributos":[3,3,3,3],"classes":"Espadachim, Feiticeiro, Paladino, Rúnico e Sacerdote.", "automatica":"Habitante do Deserto", "habilidades":["Chamas Internas 1","Chamas Internas 2","Sopro de Fogo","Cavaleiro Experiente","Fulgurante","Mente Iluminada","Vigor do Deserto"],"descricao":"","imagem":"fira.png"},{"nome":"Humano","atributos":[3,3,3,3],"classes":"Bardo, Espadachim, Feiticeiro, Guerreiro, Ladino, Mago, Sacerdote e Rúnico.", "automatica":"Adaptabilidade", "habilidades":["Assuntos Diversos","Audácia","Barganha","Diversidade","Gregário","Sorte","O Dobro ou Nada"],"descricao":"","imagem":"humano.png"},{"nome":"Juban","atributos":[4,2,3,4],"classes":"Paladino, Sacerdote e Guerreiro.", "automatica":"Corpo Pesado", "habilidades":["Fortaleza","Imparável","Garras","Mordida Poderosa","Robustez","Rugido de Ahogr","Sentidos de Caçador"],"descricao":"","imagem":"juban.png"},{"nome":"Levent","atributos":[2,3,3,3],"classes":"Druida, Espadachim, Sacerdote, Xamã.", "automatica":"Asas Pesadas", "habilidades":["Asas Fortes","Contato com Espíritos","Comunhão com Espíritos","Dançarino do Ar","Movimento Brusco","Mente Iluminada","Olhos de Águia"],"descricao":"","imagem":"levent.png"},{"nome":"Mahok","atributos":[5,2,2,3],"classes":"Druida, Guerreiro e Rúnico.", "automatica":"Pele de Pedra", "habilidades":["Abraço de Pedra","Braços Extras 1","Braços Extras 2","Estabilidade","Gregário","Nascido nas Montanhas","Pele de Pedra 2"],"descricao":"","imagem":"mahok.png"},{"nome":"Metadílio","atributos":[2,4,3,3],"classes":"Bardo, Druida, Ladino, Feiticeiro.", "automatica":"Tamanho Pequeno", "habilidades":["Astuto","Balofo","Barriga Cheia","Esconderijo Invisível","Barganha","Sorte","Táticas de Guerrilha"],"descricao":"","imagem":"metadilio.png"},{"nome":"Tailox","atributos":[2,4,3,3],"classes":"Bardo, Druida, Espadachim, Patrulheiro e Xamã.", "automatica":"Pernas Vulpinas", "habilidades":["Astuto","Audácia","Contos da Estrada","Faro","Raça Florestal","Forma da Raposa","Visão Auditiva"],"descricao":"","imagem":"tailox.png"}]}';
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_classes() {
    return '{"classe":[{"nome":"Bardo","atributos":[0,1,0,1], "automatica":"Poesia dos Bardos","habilidades":["Aparar","Canção da Provocação","Eloquente","Evasão","Furtivo","Gregário","Grito de Guerra 1","Grito Ensurdecedor","Malabarista","Melodia Dançante","Melodia do Enjoo","Melodia do Repouso","Mestre das Notas","Ataque Redirecionado","Canção Desesperadora","Grito Estilhaçador","Língua Afiada","Canção do Triunfo","Canção Exultante","Melodia Sonífera","Truque Sujo","Canção da Sereia","Canção Desconcentrante","Coração da Batalha","Grito de Guerra 2","Melodia da Fúria","Trapaceiro Impecável","Virtuoso","Vocalista","Grito de Intimidação","Melodia dos Animais","Canção do Réquiem"],"descricao":"Conhecidos como contadores de histórias, músicos itinerantes, atores mambembes, poetas líricos e menestréis da corte, os Bardos são mestres em uma forma de arte capaz de encantar plateias e produzir efeitos extraordinários.","imagem":"bardo2.png"},{"nome":"Druida","atributos":[0,0,1,1], "automatica":"Conhecimento Místico","habilidades":["Benção de Ellenis","Caminhada Mágica","Companheiro Animal 1","Detectar Magia","Espírito Animal","Princípio Natural","Sabedoria Selvagem","Aparar Magia","Asas Celestiais","Bestializar","Bons Frutos","Convocar Animais","Dissipar Magia","Entrelaçar","Evocar Temporal","Herbalismo","Mover Terra","Rajada de Água","Rajada de Espinhos","Companheiro Animal 2","Fruto Revigorante","Turbilhão","Companheiro Animal 3","Conjurar Abrigo","Despertar a Flora","Dissipar Magia","Evocar Nevasca","Gavinhas e Espinhos","Olho do Furacão","Orbe de Contenção","Punho de Pedra","Venefício","Hierofante"],"descricao":"Druidas são pessoas cujo espírito está profundamente ligado à natureza. Apesar de normalmente se isolarem da civilização, muitos deles transitam por grandes cidades e, às vezes, até mesmo habitam em metrópoles.","imagem":"druida2.png"},{"nome":"Espadachim","atributos":[1,1,0,0], "automatica":"Mestre de Armas 1","habilidades":["Acrobata","Aparar","Ataque Aleijador","Ataque Giratório","Combate com Duas Armas 1","Combate Tático","Dança das Espadas 1","Eloquente","Evasão","Falhas da Armadura","Golpes Rápidos","Investida Mortal","Touché","Ataque Redirecionado","Corte Arterial","Língua Afiada","Movimentos Evasivos","Sem Escapatória","Truque Sujo","Desarmar Oponente","Panache","Combate com Duas Armas 2","Coração da Batalha","Dança das Espadas 2","Implacável","Mestre de Armas 2","Retalhar","Ripostar","Tempestade de Lâminas","Valor da Vitória","Decapitar","Senhor das Lâminas"],"descricao":"Espadachins são combatentes especializados no uso de armamentos leves e armaduras que restrinjam minimamente sua movimentação, pois usam de velocidade e precisão para vencer obstáculos.","imagem":"espadachim1.png"},{"nome":"Feiticeiro","atributos":[0,0,1,1], "automatica":"Conhecimento Arcano","habilidades":["Congelar","Detectar Magia","Eletricidade Estática","Inflamar","Mente Disciplinada","Rajada Elemental","Resistência Elemental","Telecinésia","Aparar Magia","Aríete Mágico","Bola de Fogo","Infravisão","Invocar Elemental 1","Levitar","Manto Crepitante","Parede de Gelo","Rajada de Gelo","Relâmpago 1","Invocar Elemental 2","Teleporte 1","Arco Voltaico","Aptidão Elemental","Dissipar Magia","Inferno","Invocar Elemental 3","Prisão de Gelo","Relâmpago 2","Teleporte 2","Tempestade de Gelo","Eletrosfera","Incandescer","Maestria Elemental"],"descricao":"Feiticeiros são conjuradores especializados na manipulação das formas mais básicas de energia: calor e eletricidade. Ligando teoria e prática arcanas em fins combativos.","imagem":"feiticeiro1.png"},{"nome":"Guerreiro","atributos":[1,1,0,0], "automatica":"Mestre de Armas 1","habilidades":["Ataque do Búfalo","Ataque Giratório","Brigão","Combate com Duas Armas 1","Combate em Grupo","Combate Tático","Defletor","Estabilidade","Golpe com Escudo","Grito de Guerra 1","Guerreiro de Aço 1","Investida Mortal","Nocautear","Parede de Escudos","Ataque Simultâneo","Combate Pesado","Defesa Agressiva","Golpe Devastador 1","Sem Escapatória","Anular Golpe","Transpor","Combate com Duas Armas 2","Força de Explosão","Golpe Devastador 2","Grito de Guerra 2","Grito de Intimidação","Guerreiro de Aço 2","Implacável","Investida Forte","Mestre de Armas 2","Valor da Vitória","Mestre de Armas 3"],"descricao":"A classe combatente mais comum, especializada no uso de armas e armaduras pesadas. Dada a quantidade de atritos entre reinos e ameaças palpáveis, os Guerreiros encontram um ambiente fértil para se desenvolverem.","imagem":"guerreiro1.png"},{"nome":"Ladino","atributos":[0,1,1,0], "automatica":"Gatuno","habilidades":["Acrobata","Aparar","Armadilheiro","Ataque Aleijador","Combate com Duas Armas 1","Contatos no Crime","Eloquente","Evasão","Falhas da Armadura","Flanquear","Flexível","Furtivo","Golpes Rápidos","Malabarista","Mestre das Adagas 1","Ataque Evasivo","Ataque Redirecionado","Corte Arterial","Mestre das Adagas 2","Movimentos Evasivos","Truque Sujo","Camuflagem","Combate com Duas Armas 2","En Passant","Explorar Surpresa","Improvisação Ladina","Mestre das Adagas 3","Passo Leve","Ripostar","Trapaceiro Impecável","Emboscar","Mestre Especialista"],"descricao":"Ladinos são especialistas em atingir seus objetivos por qualquer meio necessário, seja através de subterfúgios, truques, manipulação, contatos ou mesmo meios criminosos.","imagem":"ladino2.png"},{"nome":"Paladino","atributos":[1,0,0,1], "automatica":"Mestre de Armas 1","habilidades":["Cavaleiro Experiente","Código da Coragem","Código da Cortesia","Código da Honestidade","Código da Justiça","Código da Lealdade","Combate Tático","Defletor","Estabilidade","Grito de Guerra 1","Guerreiro de Aço 1","Nocautear","Parede de Escudos","Sem Escapatória","Austeridade","Combate Montado","Égide","Justiça Final 1","Montaria Especial 1","Motivar","Montaria Especial 2","Banir","Comando Heroico","Coração da Batalha","Destemor","Grito de Guerra 2","Guerreiro de Aço 2","Implacável","Justiça Final 2","Montaria Especial 3","Valor da Vitória","Integridade"],"descricao":"Paladinos são guerreiros movidos por um conjunto de códigos de conduta que usam para disciplinar seu espírito e realizar feitos que muitos veriam como sobrenaturais.","imagem":"paladino2.png"},{"nome":"Patrulheiro","atributos":[0,1,1,0], "automatica":"Arqueria","habilidades":["Acrobata","Armadilheiro","Ataque Aleijador","Benção de Ellenis","Companheiro Animal 1","Disparo Certeiro","Espírito Animal","Falhas da Armadura","Flechas Rápidas","Furtivo","Retesar Eficiente","Sabedoria Selvagem","Caçador de [Criatura]","Chuva de Flechas","Disparo Forte","Herbalismo","Companheiro Animal 2","Movimentos Evasivos","Precisão","Truque Sujo","Caçador de [Monstro]","Chuva de Flechas 2","Empalar","Matador de [Criatura]","Companheiro Animal 3","Camuflagem","Olho da Águia","Passo Leve","Venefício","Emboscar","Arqueria de Mestre"],"descricao":"Normalmente caçadores, rastreadores e guardiões de áreas florestais, Patrulheiro também são arqueiros de exércitos ou milícias, exploradores de regiões remotas, caçadores de recompensas e domadores de animais.","imagem":"patrulheiro3.png"},{"nome":"Rúnico","atributos":[1,0,1,0], "automatica":"Conhecimento Arcano","habilidades":["Arma Incandescente","Arma Gélida","Arma Relampejante","Ataque Fantasma","Combate Tático","Conjurar Escudo","Desativar Item","Detectar Magia","Enfeitiçar Arma 1","Enfeitiçar Armadura","Guerreiro de Aço 1","Mente Disciplinada","Resistência Elemental","Aparar Magia","Arma Fiel","Onda de Chamas","Onda de Frio","Onda de Raios","Onda Fantasma","Sem Escapatória","Armadura Fiel","Aptidão Elemental","Ataque Chocante","Ataque Congelante","Ataque Flamejante","Dissipar Magia","Enfeitiçar Arma 2","Golpe do Vento","Guerreiro de Aço 2","Implacável","Mestre de Armas 2","Destruição Elemental"],"descricao":"Os Rúnicos são conjuradores arcanos cujo estudo da estrutura da conjuração é reprimido em detrimento do estudo marcial e do uso de ambas as técnicas em conjunto.","imagem":"runico2.png"},{"nome":"Sacerdote","atributos":[0,0,1,1], "automatica":"Conhecimento Místico","habilidades":["Asceta","Caminhada Mágica","Cariátide","Conjurar Broquel Místico","Curar Ferimentos 1","Detectar Magia","Dogma","Exorcismo","Graça Divina","Purgar","Toque Místico","Abençoar Aliados 1","Abençoar Objeto","Aparar Magia","Asas Celestiais","Aura de Cura 1","Conjurar Arma dos Deuses","Conjurar Lança do Destino","Proteção Mística","Velocidade","Corpo Fechado","Abençoar Aliados 2","Aura de Cura 2","Círculo da Proteção","Conjurar Falange do Destino","Criar Golem","Curar Ferimentos 2","Dissipar Magia","Portal","Primaz","Manter Golem","Pontífice"],"descricao":"Sacerdotes são seguidores e protetores de uma divindade ou panteão, cuja fé é tão intensa que eles são capazes de canalizar parte do poder de sua divindade patrona na forma de magias.","imagem":"sacerdote2.png"},{"nome":"Senescal","atributos":[0,0,1,1], "automatica":"Posição Distinta","habilidades":["Contatos Políticos","Distintivo de Ofício","Eloquente","Erudito","Farda","Figura Imponente","Gregário","Mastim","Presença Inspiradora","Reposicionar","Séquito","Táticas de Batalha","Um Bom Conselho 1","Guarda-Costas","Presença Confiante","Distração","Formação de Batalha 1","Inspirar Coragem","Língua Afiada","Voz de Comando 1","Abrir a Guarda","Conselheiro Pessoal","Formação de Batalha 2","Guarda de Honra","Juiz","Persuadir","Restaurar Convicção","Trapaceiro Impecável","Um Bom Conselho 2","Voz de Comando 2","Magistrado"],"descricao":"Senescais são administradores, conselheiros e estrategistas que utilizam seu carisma, inteligência, conhecimento e determinação para organizar instituições e pessoas de forma eficiente.","imagem":"espadachim2.png"},{"nome":"Xamã","atributos":[1,0,0,1], "automatica":"Guia Espiritual","habilidades":["Ataque do Búfalo","Benção de Ellenis","Bravura Selvagem 1","Brigão","Combate com Duas Armas 1","Combate Tático","Companheiro Animal 1","Contato com Espíritos","Cura Espiritual","Espírito Animal","Rugido do Predador","Sabedoria Selvagem","Chamado do Alfa","Companheiro Animal 2","Comunhão com Espíritos","Forma Animal 1","Herbalismo","Invocar Espírito Animal","Rugido do Alfa","Sem Escapatória","Vantagem Animal 1","Atropelar","Caminhada Fantasma","Companheiro Animal 3","Companheiro Espiritual","Estraçalhar","Forma Animal 2","Implacável","Imunidade Espiritual","Mestre Domador","Vantagem Animal 2","Guardião da Natureza"],"descricao":"Xamãs são pessoas com uma poderosa ligação com os espíritos. Apesar de muitos deles lidarem com os espíritos dos mortos, a maioria preferem lidar com os espíritos da natureza.","imagem":"xama1.png"}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_antecedentes() {
    return '{"antecedente":[{"nome":"Apotecário", "requisitos":["int",4],"descricao":"Você aprendeu a usar plantas e minerais para produzir poções, antídotos – e venenos! Enquanto alguns Apotecários recebem instrução formal em laboratórios de grandes cidades, com o objetivo de se tornarem Alquimistas, um grande número aprende o ofício com outros Apotecários, curandeiros e Druidas,produzindo suas poções em pequenas comunidades e vilas. Entre estes, alguns acabam indo para grandes centros à procura de aperfeiçoar suas habilidades, as vezes para retornar mais bem preparados para suas comunidades, as vezes para se tornarem Alquimistas. Há, é claro, aqueles cujos conhecimentos são empregados no campo de batalha, seja como curandeiros de campo, seja como aventureiros.","beneficio":"Você recebe a Habilidade Herbalismo.","equipamento":"Duas poções à sua escolha.","efeito":["habilidade","Herbalismo","equipamento","Duas poções comuns"],"imagem":"obj_pocao.png"},{"nome":"Artesão", "requisitos":[],"descricao":"Você aprendeu a realizar um determinado tipo de artesanato ao longo de sua vida. Talvez você venha de uma família de artesãos, ou talvez tenha uma fascinação por um tipo de trabalho e teve sorte de conseguir se tornar aprendiz de um mestre no ofício. Tendo trabalhado profissionalmente ou não nessa área de produção, você recebeu treinamento suficiente para ser capaz de desempenhá-la de forma eficiente.","beneficio":"Escolha 1 área de produção. Você recebe +1d6 sempre que fizer qualquer teste relacionado com aquela área de produção.","equipamento":"Instrumentos de artesão.","efeito":["equipamento","Instrumentos de artesão"],"imagem":"obj_dados.png"},{"nome":"Caçador", "requisitos":["int",3],"descricao":"Você dedicou uma boa parte da sua vida aprendendo a perceber e compreender os sinais de passagens de criaturas e a localização mais provável de esconderijos e de plantas úteis. Provavelmente você tenha tido contato com Patrulheiros ou outros Caçadores, ou talvez tenham sido longas horas como vigia e guarda que lhe deram um olho para perceber pequenos padrões ignorados pelos outros – o que você aprendeu a usar não só para perceber a presença de coisas escondidas, mas também para se esconder com eficiência!","beneficio":"Você recebe um bônus de +2 em todos os seus testes para Caçar/Rastrear, Encontrar Abrigo/Forragear, Mover-se em Silêncio e Ocultar-se/Camuflar-se. Este bônus também se aplica à testes para perceber itens e criaturas escondidas ou camufladas ou tentando se mover em silêncio.","equipamento":"","efeito":[],"imagem":"patrulheiro2.png"},{"nome":"Cartógrafo", "requisitos":["int",4],"descricao":"Você é um cartógrafo habilidoso, tendo conhecimento prático e teórico na manufatura de topografias e desenho de mapas. Seu trabalho e valorizado por grupos de exploração e expedicionários, tanto em terra quanto no mar.","beneficio":"Você nunca se perde em qualquer área que já tenha estado ao menos uma vez ou que tenha podido estudar em mapas adequados. Você possui uma excelente memória para mapas e geografia, e pode sempre recordar as características de terrenos, povoações ou fortificações ao seu redor. Você pode desenhar mapas acurados de uma área que tenha tido tempo para estudar, e pode rabiscar de memória mapas eficientes de qualquer área através da qual você tenha viajado, não importa há quanto tempo tenha estado no local.","equipamento":"Bússola, Kit de Cartografia, 5 folhas de velino.","efeito":["equipamento","Bússola, Kit de Cartografia, 5 folhas de velino"],"imagem":"obj_mesa.png"},{"nome":"Cozinheiro", "requisitos":[],"descricao":"Trabalhando na corte, em estalagens e tavernas ou produzindo alimentos para venda particular e para consumo próprio, cozinheiros são uma das mais comuns das profissões – afinal, todos precisam comer! Apesar de qualquer personagem poder fazer testes de Percepção para produzir alimentos adequados, como carnes assadas e vegetais cozidos, os cozinheiros são especialistas em preparar receitas complexas, incluindo pães, doces e bebidas fermentadas.","beneficio":"Você pode preparar qualquer alimento se tiver o tempo e os materiais adequados. Faça um teste de Inteligência ou Agilidade e compare o resultado com a tabela de resultado de produção (Guia do Herói página 52). Você recebe +1d6 para esse teste. Uma comida de qualidade baixa serve como alimento, mas é insossa e não serve para ser comercializada. Uma comida de qualidade alta é particularmente bem temperada e deliciosa – o que se espera encontrar em tavernas e hospedagens de alta qualidade e em banquetes reais. Uma comida obra-prima tem aparência, cheiro, textura e gosto extremamente ricos, e recupera 5 Pontos de Vida e 5 Pontos de Mana em qualquer um que a consumir – o que leva pelo menos 5 minutos para que ela possa ser completamente apreciada. Além disso, qualquer um que consuma uma comida obra-prima recupera o dobro dos PVs e PMs normais por descanso pela próxima hora.","equipamento":"Cutelo de alta qualidade.","efeito":["equipamento","Cutelo de alta qualidade"],"imagem":"obj_comida.png"},{"nome":"Curandeiro", "requisitos":["int",4],"descricao":"Você possui habilidades de cura consideráveis, tendo estudado sob a tutela de algum médico ou curandeiro. Talvez você tenha trabalhado como médico de campo de um exército, ordem de cavalaria ou grupo mercenário, ou talvez você tenha sido aprendiz de um curandeiro tribal, ou mesmo estudado medicina em alguma corte ou escola nas grandes metrópoles do reino. O fato é que, onde quer que tenha aprendido sobre como curar ferimentos em uma emergência, você é muito bom nisso!","beneficio":"Você recebe a Habilidade Médico de Campo.","equipamento":"Kit de Cura.","efeito":["habilidade","Médico de Campo","equipamento","Kit de Cura"],"imagem":"obj_cura.png"},{"nome":"Devoto", "requisitos":["von",3],"descricao":"Você é um seguidor fiel de uma Divindade, acreditando em seus dogmas como a forma ideal de agir e pensar. Talvez você tenha sido um Sacerdote que se afastou da igreja – mas não de suas crenças – ou talvez simplesmente um seguidor fervoroso dos ensinamentos, dogmas e preceitos de uma divindade. Seja como for, sua devoção é tal que a divindade lhe concede suas bênçãos de forma palpável.","beneficio":"Você recebe a Habilidade Dogma.","equipamento":"Símbolo sagrado.","efeito":["habilidade","Dogma","equipamento","Símbolo sagrado"],"imagem":"joelho.png"},{"nome":"Escudeiro", "requisitos":["von",3],"descricao":"Você passou boa parte de sua infância e adolescência dentro dos muros do Forte da Espada de Mirah, em um dos quartéis da Hoste de Hadorn ou sob a tutela de um Cavaleiro. Talvez você seja filho de um nobre que deseja ter um filho defendendo o reino, talvez seus pais sejam mercadores em ascensão e desejem o prestígio de ter um filho em uma Ordem de Cavalaria, ou talvez você seja filho de camponeses de Tebrynia que desejavam um futuro diferente para seu descendente.","beneficio":"Você recebe +1 em todos os testes relacionados à conhecimento de qualquer tipo e em todos os seus ataques corporais quando estiver empunhando uma arma – esse bônus não se aplica a combate desarmado.","equipamento":"Tabarda da ordem ou família que você serviu.","efeito":["ataque+","categoria",0,1,"equipamento","Tabarda de ordem ou família"],"imagem":"obj_equipamento.png"},{"nome":"Expoente", "requisitos":[],"descricao":"Você é um exemplar notável da sua raça, seja no aspecto físico, psicológico ou cultural – e talvez até mesmo em todos eles! Você é particularmente ligado à cultura da sua raça em algum aspecto, ao menos, e provavelmente despendeu uma boa quantidade de tempo entre os membros do seu próprio povo e provavelmente tem pouco interesse na cultura de outras raças.","beneficio":"Você recebe uma Habilidade Racial extra, à sua escolha.","equipamento":"","efeito":["expoente"],"imagem":"obj_dados.png"},{"nome":"Ex-Escravo", "requisitos":[],"descricao":"Você passou boa parte de sua vida como um escravo. Talvez seus pais tenham sido escravos e você tenha nascido sem sua liberdade, talvez você tenha sido preso e condenado a trabalhar para pagar sua pena ou talvez você simplesmente tenha tido que trabalhar para outros em um regime de semiescravidão para pagar saldar uma dívida. Talvez você tenha sido capturado por tropas arkanitas e forçado a trabalhar como escravo.","beneficio":"Você está acostumado a realizar trabalho pesado e fazer isso da forma mais despercebida possível – chamar a atenção de um escravagista nunca é bom. Você recebe um bônus de +2 em todos os seus testes para se esconder, disfarçar e mover-se em silêncio, e também em testes para evitar ficar fatigado. Além disso, sua Carga é calculada como se sua Força fosse 2 pontos mais alta.","equipamento":"Ferramenta qualquer de baixa qualidade.","efeito":["carga+",2,"equipamento","Ferramenta de baixa qualidade"],"imagem":"obj_dados.png"},{"nome":"Fazendeiro", "requisitos":[],"descricao":"Fazendeiros são uma das profissões mais comuns de Tebryn. Mais de um quarto da população se dedica a trabalhar no campo e produzir alimentos para o reino. Como vivem do campo, possuem bons conhecimentos sobre plantas e animais, tanto no seu manejo como em evitar plantas e criaturas perigosas – ou lidar com elas caso tudo mais falhe! Em muitas regiões as fazendas ficam afastadas dos centros urbanos, e é necessário desbravar novas áreas, lidando com plantas e animais desconhecidos, e a maioria dos fazendeiros de Tebryn tem alguma história para contar sobre plantas com propriedades estranhas ou ataques de animais perigosos. Além disso, a maioria dos fazendeiros tem algum conhecimento sobre ervas medicinais, e a maioria deles possuem animais de tração, guarda ou transporte que devem ser adestrados e cuidados adequadamente.","beneficio":"Você recebe +2 em todos os seus testes relacionados a plantas e animais","equipamento":"Ferramenta qualquer.","efeito":["equipamento","Uma ferramenta qualquer"],"imagem":"humano.png"},{"nome":"Fidalgo", "requisitos":["int",3],"descricao":"Fidalgos são aqueles cidadãos de Tebryn que receberam uma educação superior devido a títulos de nobreza ou posição social e financeira. Nobres, comerciantes, Regentes, Burgomestres, Juízes e Conselheiros precisam ser versados em uma variedade de campos teóricos para lidarem com suas atribuições. Fidalgos são treinados desde cedo em administração, estratégia, etiqueta e conhecimentos gerais para serem capazes de lidar com suas funções futuras. A maioria deles não possui títulos de nobreza de fato, sendo geralmente filhos de comerciantes prósperos ou de indivíduos com títulos de nobreza ou justiça que não serão passados para seus filhos, mas mesmo assim são considerados como “nobres menores” – particularmente porque muitos deles de fato acabam adquirindo títulos de nobreza eventualmente, seja por hereditariedade ou mérito pessoal.","beneficio":"Você recebe +2 em todos os seus testes relacionados à pesquisa, conhecimento e em todos os seus testes sociais.","equipamento":"100 moedas.","efeito":["moedas",100],"imagem":"obj_dados.png"},{"nome":"Fylgja", "requisitos":[],"descricao":"Entre os Aesires, cuja cultura é amplamente baseada na crença de animais guias, Fylgja significa, literalmente, “acompanhante” e é usado para designar tanto o Espírito Animal de uma pessoa como uma pessoa que possui uma forte ligação com seu Espírito Animal. Apesar de poucas culturas além dos Aesires terem uma ligação tão profunda com Espíritos Animais, a expressão é amplamente usada para designar aquelas pessoas cuja ligação com o seu Espírito Animal é mais do que simplesmente filosófica.","beneficio":"Você recebe a Habilidade Espírito Animal.","equipamento":"","efeito":["habilidade","Espírito Animal"],"imagem":"obj_dados.png"},{"nome":"Grumete", "requisitos":[],"descricao":"Grumetes são aprendizes de marinheiros que realizam os trabalhos mais simples a bordo de uma embarcação – como limpar o convés, distribuir comida à tripulação, levar mensagens e verificar o clima. Enquanto realizam essas tarefas, eles são ensinados pela tripulação sobre como cozinhar e estocar alimentos, os funcionamentos dos cordames, o modo correto de hastear velas e lidar com vários tipos de clima, como pilotar uma embarcação e todos os rudimentos do funcionamento de barcos e navios em geral.","beneficio":"Grumetes recebem +2 em todos os seus testes relacionados à navegação, escalada, natação e equilíbrio.","equipamento":"Uma adaga.","efeito":["equipamento","Adaga"],"imagem":"obj_dados.png"},{"nome":"Minerador", "requisitos":["for",4],"descricao":"Você tem experiência em encontrar, extrair e processar materiais de origem mineral. Você passou muito tempo explorando veios de minérios, aprendendo sobre os locais comuns onde eles aparecem e como identificá-los com eficiência. Não apenas isso, você também sabe como extrair minérios de um veio de forma eficiente.","beneficio":"Você recebe um bônus de +1d6 em suas rolagens para encontrar veios de materiais em uma área e nos seus testes para calcular quanto de material você consegue extrair, independente do método escolhido.","equipamento":"Mochila, Picareta, Peneira.","efeito":["equipamento","Mochila, Picareta, Peneira"],"imagem":"obj_dados.png"},{"nome":"Nobre", "requisitos":[],"descricao":"Você nasceu em uma família pertencente à nobreza do seu reino. Sua família (ou você, se for o único herdeiro da sua linhagem) possui terras onde vivem aldeões que trabalham para sua família e todos na região sabem quem você é. Você possui status e muitos contatos e é reconhecido na região onde suas terras ficam e provavelmente pelas famílias nobres das regiões vizinhas à sua. Você pode conseguir uma audiência com qualquer figura importante do reino (incluindo o rei/imperador). Além disso, você possui terras que incluem uma casa grande (e provavelmente luxuosa, mas não fortificada) e recebe dos moradores 50 moedas por mês de impostos. Você pode mudar os impostos, mas isso provavelmente irá acarretar problemas para você (outros nobres irão usar seu abuso para convencer o rei a emancipar suas terras e os próprios aldeões podem decidir abandonar suas terras).","beneficio":"Você começa o jogo com 200 moedas extras.","equipamento":"200 moedas.","efeito":["moedas",200],"imagem":"obj_dados.png"},{"nome":"Prodígio", "requisitos":[],"descricao":"Apesar de ter recebido treinamento – ou ter aprendido por si mesmo – os rudimentos de uma determinada Classe, você se manteve muito perto dos ensinamentos, táticas, conhecimentos e práticas de uma outra Classe. Dessa forma, você é considerado como um membro de ambas as Classes desde o início de sua carreira como Aventureiro.","beneficio":"Você começa o jogo com o benefício Aprendiz.","equipamento":"Item qualquer até 100 moedas comum à classe.","efeito":["aprendiz","equipamento","Item qualquer até 100 moedas"],"imagem":"caminho.png"},{"nome":"Sussurrador", "requisitos":[],"descricao":"Enquanto para alguns você nasceu abençoado pela divindade da natureza, outros sugerem que esta é uma característica decorrente de uma natureza benevolente – ou particularmente selvagem, talvez – o fato é que você pode, de alguma forma, influenciar os animais. Talvez você use isso para se comunicar pacificamente com as feras ou talvez você domine os animais com uma presença imponente. Dissuadidas, coagidas ou apaziguadas à tanto, as bestas aceitam sua presença entre elas, talvez como um igual, talvez como um superior.","beneficio":"Você recebe a Habilidade Benção de Ellenis.","equipamento":"","efeito":["habilidade","Benção de Ellenis"],"imagem":"sussurrador.png"}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_caminhos() {
    return '{"caminho":[{"nome":"Alquimista", "descricao":"Os alquimistas são especialistas em poções e misturas alquímicas. A arte da alquimia é ensinada em laboratórios em grandes cidades e metrópoles e na Academia Argêntea, que possui a maior biblioteca alquímica de Cassiopéia. Apesar de ser possível aprender alquimia apenas através de livros, a maioria dos Alquimistas encoraja o aprendizado dentro de um laboratório, com a supervisão de Alquimistas experientes, uma vez que, principalmente durante suas primeiras experiências, as chances de cometer erros perigosos é considerável. Além disso, muitas poções simplesmente não são possíveis de realizar fora de um laboratório, e tentativas de simular os procedimentos sem os materiais necessários quase sempre geram reações desastrosas.", "automatica":"Alquimia Básica","habilidades":["Iátrica","Espagiria","Nigredo","Alquimia Avançada","Elixir da Longa Vida","Citrinitas","Toxicólogo","Pedra Filosofal"], "requisitos":["int",5,"habilidade",["Herbalismo"]], "imagem":"alquimista.png"},{"nome":"Argênteo", "descricao":"Argênteos são Feiticeiros treinados na Academia Argêntea, especificamente em magias de locomoção seus estudos em magias que produzem, conduzem e ampliam energia na forma de frio, calor e eletricidade, poucos têm inclinação para os estudos das magias de movimento e locomoção. No entanto, devido ao número de anomalias espaço-dimensionais encontradas ao longo de todo o território de Tebryn – e em algumas regiões e reinos vizinhos – fez-se necessário para a Academia criar uma área de estudos especializada nesses fenômenos. O Departamento de Astronomia e Movimento Dimensional então iniciou o treinamento de alunos com mais inclinação para investigações e com talento para magias de movimento. Assim, foi formado o Corpo de Investigadores de Paradoxos Espaço-Dimensional da Academia Argêntea – ou, como são mais conhecidos tanto entre si quanto popularmente, os Argênteos.", "automatica":"Aporte","habilidades":["Analisar Magia","Empurrão Cinético","Permutação Instantânea","Runa de Localização","Teleportar Objeto","Teólogo","Área de Anti-Magia","Arremesso Cinético","Conjurar Especialista: [Magia]","Sala Oculta","Porta Oculta","Mestre Telecinético"], "requisitos":["int",5,"habilidade",["Teleporte 1"]], "imagem":"feiticeiro2.png"},{"nome":"Arqueiro", "descricao":"Em Cassiopéia, um Arqueiro é qualquer especialista no uso de um arco, seja o tradicional arco de caça ou guerra, o arco horizontal montado sobre um cabo como no caso das bestas ou mesmo os arcos das forquilhas de bodoques. No entanto, como muitos caçadores, rastreadores e batedores costumam usar essas armas, o termo Arqueiro é utilizado entre Patrulheiros, Guerreiros e outros homens-de-armas para definir um grupo mais restrito de soldados: aqueles usuários de arcos que guardam e vigiam.", "automatica":"Arqueria","habilidades":["Aplicar Força","Disparo Certeiro","Disparo Mirado","Prever Posição","Retesar Eficiente","Vigília","Disparo Forte","Agarrar Flechas","Disparo Cego","Disparo Devastador","Olhos de Águia","Disparo Perfeito"], "requisitos":["for",4,"agi",4,"habilidade",["Sentidos Apurados"]], "imagem":"arqueiro.png"},{"nome":"Artífice", "descricao":"Artífices são Conjuradores com o conhecimento e técnicas para criar e manipular itens mágicos. Os Rúnicos, cujo método de conjuração lida com a inscrição de magias sobre itens, são os conjuradores Artífices são Conjuradores com o conhecimento e técnicas para criar e manipular itens mágicos. Os Rúnicos, cujo método de conjuração lida com a inscrição de magias sobre itens, são os conjuradores que mais comumente se tornam Artífices. Aqueles Feiticeiros que ingressam nesse Caminho geralmente possuem uma curiosidade sobre funcionamentos variantes da magia. Apesar de Conjuradores Místicos não serem capazes de produzir itens mágicos, já que eles canalizam o poder de uma entidade superior, e é impossível estagnar esse poder na forma de um encantamento, alguns deles (particularmente Sacerdotes de Hou) se iniciam nas práticas arcanas para produzir itens mágicos destinados à realizar os desígnios de sua divindade.", "automatica":"Encantar Talismã","habilidades":["Conjurar Objeto","Desativar Item","Enfeitiçar Arma 1","Enfeitiçar Armadura","Dom do Artífice","Enfeitiçar Arma 2","Soldar Magia","Abrir Encantamento"], "requisitos":["int",5,"habilidade",["Conhecimento Arcano"]], "imagem":"artifice.png"},{"nome":"Cruzado", "descricao":"Cruzados são guerreiros que se dedicaram a cruzar Tebryn destruindo o mal em nome de uma causa maior. Em geral, esta causa é a Justiça, na forma de Mirah – ou, mais raramente, Ahogr – mas muitos Cruzados seguem os desígnios de outras divindades em sua cruzada. De fato, os seguidores mais fervorosos de Hadorn se dedicam a cruzar Tebryn destruindo criaturas malignas – principalmente mortos-vivos – e a Hoste de Hadorn produz um número tão elevado de Cruzados quanto a Ordem da Espada de Mirah. Muitos seguidores de Ellenis e Taranis também se tornam Cruzados, libertando a natureza da influência de criaturas malignas. Alguns seguidores de Denalla, mais ligados ao seu aspecto de Deusa da Vida, também se sentem atraídos por este Caminho, cruzando Tebryn para purgar o reino de criaturas mortas-vivas e espíritos. Seguidores de Hou e Sarfion tem pouca inclinação para seguir este caminho, e pouquíssimos deles se tornam Cruzados.", "automatica":"Força Divina","habilidades":["Ataque Fervoroso","Contos de Estrada","Vontade da Lei","Vontade Sobrenatural","Expurgo Elemental","Seguir em Frente","Vontade Inabalável","Golpe Justo"], "requisitos":["von",4,"habilidade",["Dogma"]], "imagem":"cruzado.png"},{"nome":"Domador", "descricao":"Domadores são pessoas com uma afinidade profunda com animais. Sejam cavaleiros com elos com suas montarias, falcoeiros experientes em treinar aves de rapina ou caçadores que desenvolveram uma afinidade com seus animais, Domadores possuem uma capacidade de compreender e influenciar animais (seja através de uma simpatia sincera ou de uma dominância bestial), o que faz deles membros apreciados de qualquer grupo ao qual pertençam – ou ameaças temíveis quando se voltam para o mal.", "automatica":"Companheiro Animal 1","habilidades":["Cavaleiro Experiente","Combate em Grupo","Companheiro Animal 2","Horda Selvagem","Ataque Simultâneo","Combate Montado","Companheiro Animal 3","Mestre Domador","Comando do Alfa","Companheiro Animal 4"], "requisitos":["von",5,"habilidade",["Benção de Ellenis"]], "imagem":"domador.png"},{"nome":"Estrige", "descricao":"Estrige é o nome dado aos membros da Ordem dos Caçadores Sobrenaturais, homens e mulheres que dedicam suas vidas para caçar e destruir criaturas amaldiçoadas de todos os tipos, como fantasmas, lobisomens, demônios e mortos-vivos, assim como Cultistas e Necromantes.", "automatica":"Caça Sobrenatural","habilidades":["Imunidade Sobrenatural","Sabedoria Sobrenatural","Semelhança Cadavérica","Sentidos de Caçador","Sexto Sentido","Vontade Sobrenatural","Matador Sobrenatural","Perceber Corrupção","Quebrar a Defesa Sombria","Sentido de Alerta", "Banir a Perversão"], "requisitos":["int",4,"texto","Matado algo sobrenatural"], "imagem":"estrige.png"},{"nome":"Ilusionista", "descricao":"O Ilusionista é um conjurador especializado em enganar os sentidos, utilizando suas habilidades para trapacear a percepção de seus inimigo ou para maravilhar os sentidos daqueles ao seu redor. De fato, a maioria deles usa esse talento voltado para o entretenimento, criando exibições elaborada, mas alguns utilizam suas habilidades como jogadores, golpistas, trapaceiros e, com frequência, espiões. Graças à esse segundo grupo, alguns dizem que todo o Ilusionista é um trapaceiro, mentiroso e enganador. Os Astérios tem um ditado que diz: “Confie num ladrão antes de um Ilusionista ”.", "automatica":"Ilusão 1","habilidades":["Ilusão 2","Invisibilidade 1","Luz Mágica","Som Ilusório","Aparência Ilusória","Ilusão Sonora","Ilusão 3","Ilusão Persistente","Invisibilidade 2","Abrigo Invisível","Ilusão Eterna"], "requisitos":["int",5,"habilidade",["Detectar Magia"]], "imagem":"ilusionista.png"},{"nome":"Invocador", "descricao":"Invocadores são Conjuradores especializados em invocar criaturas para auxiliá-los. Apesar das óbvias aplicações combativas, muitos Invocadores na verdade usam suas habilidades para atividades mais mundanas. Como são incansáveis, seguem ordens com exatidão e não se distraem, golens e elementais são trabalhadores extremamente eficientes. A Academia Argêntea e algumas metrópoles de Tebryn, Parband e Dagothar empregam Invocadores como arquitetos e construtores, enquanto muitos utilizam suas invocações como auxiliares em laboratórios, forjas e oficinas.", "automatica":"Invocar Familiar","habilidades":["Invocação Persistente","Invocação Versátil","Invocar Elemental do Fogo 1","Invocar Elemental do Gelo 1","Invocar Golem 1","Ampliar Invocação","Invocar Elemental do Fogo 2","Invocar Elemental do Gelo 2","Invocar Golem 2","Manter Invocação","Invocação Prodigiosa"], "requisitos":["von",6,"habilidade",["Detectar Magia"]], "imagem":"invocador.png"},{"nome":"Lanceiro", "descricao":"Lanceiros são especialistas no uso de armas de haste. Apesar de usualmente eles preferirem lanças, particularmente eficientes quando usadas em formação, muitos Lanceiros favorecem alabardas, glaives ou martelos lucernos ao invés de lanças.", "automatica":"Manter a Linha","habilidades":["Contra-Carga","Derrubar","Manter à Distância","Empunhadura Flexível","Acuar","Fique Longe","Virar o Jogo","Mestre da Lança"], "requisitos":["for",3,"habilidade",["Sem Escapatória"]], "imagem":"lanceiro.png"},{"nome":"Oráculo", "descricao":"Apesar de alguns Oráculos possuírem uma predisposição para a profecia, a maioria deles é formada por religiosos que desejam uma compreensão maior sobre a criação da sua divindade ou que buscam a resposta para uma questão específica. Oráculos cujo interesse por uma compreensão maior do mundo costumam ser abertos à discussão e estão tão interessados em disseminar o conhecimento quanto em adquirí-lo. Não é surpresa alguma que a um grande número desses Oráculos sejam Sacerdotes dedicados à Sarfion. Sacerdotes de Taranis também são comuns nesse grupo, já que o próprio conceito de liberdade está ligada ao conhecimento – “não há prisão mais terrível do que a ignorância” é um dito comum entre eles. Druidas são conhecidos por engrossar essas fileiras de Oráculos, as vezes para melhor servir à seus propósitos, mas geralmente por uma curiosidade inata comum à todos os membros da Classe.", "automatica":"Clarividência","habilidades":["Janela Mágica","Psicometria","Retrocognição","Abrir Janela Mágica","Atravessar Janela Mágica","Precognição","Interferir no Fluxo"], "requisitos":["von",6,"habilidade",["Conhecimento Místico"]], "imagem":"oraculo.png"},{"nome":"Tohunga", "descricao":"Em Reo, o idioma dos Astérios, a palavra Tohunga significa “mestre” ou “especialista”, e era usada como um título de honra para aqueles que mostravam excelência em sua área de atuação. Essa noção – assim como grande parte da cultura ancestral dos Astérios – foi perdida durante a Revoada dos Dragões e posteriormente com sua vinda para Cassiopéia, e o termo hoje é usado apenas para identificar um especialista em tatuagem. Nesse interim, no entanto, o termo ainda possui força, e é usado por todos os que decidem trilhar este Caminho, independente de sua cultura ou idioma. Apesar da maioria das qualidades que um Tohunga é capaz de exibir através de suas tatuagens serem um ato de pura determinação, algumas tatuagens podem possuir qualidades mágicas ou sobrenaturais. A maioria destes Tohunga é formada por Rúnicos, Xamãs e Druidas, mas mesmo Guerreiros ou Patrulheiros podem exibir essas capacidades extraordinárias.", "automatica":"Primeira Marca","habilidades":["Tamoko","Tribal de Proteção","Tribal de Poder","Tatuar Magia","Invocar Espírito de Tinta","Tatuar Objeto","Coração de Tinta","Kirituhi","Tatuar Efeito","Invocar Exército de Tinta"], "requisitos":["von",3,"antecedente",["Artesão"]], "imagem":"tohunga.png"}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_organizacoes() {
    return '{"organizacao":[{"nome":"Irmandade do Anel de Bronze","apelido":"Anel","habilidades":["Barganha","Contatos na Corte","Contatos no Crime","Contatos Políticos"], "resumo":"Poderosa organização mercante sediada na cidade de Altéria.", "descricao":"Poderosa organização mercante sediada na cidade de Altéria. O Anel de Bronze tem uma história que remonta mais de 500 anos, tendo sido fundada como um guilda de caravaneiros especializada em atravessar as Terras Secas e fazer o transporte de bens entre Parband e Tebryn. Com o tempo, expandiu suas rotas comerciais para fazer com que o fluxo de produtos vindos de Parband chegasse a toda Tebryn, e logo se estabeleceu como uma guilda de mercadores respeitada. Cerca de 140 anos atrás, a guilda mudou seu nome para Irmandade do Anel de Bronze, e estabeleceu sua sede oficial em Altéria, passando a concentrar a maioria de suas rotas comerciais na parte oeste de Tebryn. A estratégia da Irmandade era se aproveitar do fim das escaramuças entre Tebryn e Arkânia e desenvolver rotas comerciais em uma área que era abastecida, até então, apenas por caravanas militares. A estratégia rendeu frutos, e a Irmandade é hoje, sem dúvida, a maior e mais respeitada guilda de mercadores de Tebryn, estendendo sua atuação até Parband, Dagothar e Londérien.", "imagem":"org_anel.png"},{"nome":"Espada de Mirah","apelido":"Espada","habilidades":["Arma da Lei","Arma da Ordem","Código da Honestidade","Código da Justiça","Dogma: Discípulo da Justiça","Justiça Final 1","Justiça Final 2"], "resumo":"Formada pelos mais íntegros e devotados guerreiros de Tebryn.", "descricao":"Fundada há mais de mil anos pelo então Regente de Tebryn, Jorand Strauss, a ordem ajudou a estabelecer as fundações do reino pelo exemplo. De acordo com as crônicas da ordem, a própria Mirah apareceu diante de Jorand quando, um dia antes de ser coroado Rei, ele teria rezado à divindade por força e sabedoria para guiar o reino. Mirah teria tocado a espada carregada por Jorand, concedendo-lhe poderes divinos, e como sua primeira ação como Rei, Jorand concedendo o grau de Cavaleiro para seus mais leais guardas, que se tornaram os primeiros Paladinos da Ordem. Se a aparição de Mirah diante de Jorand é verdadeira ou não, o fato inegável é que sua espada apresenta qualidades divinas, tornando seu portador imune a todos os efeitos mentais e efeitos de medo e permitindo que ele veja através de ilusões, incluindo invisibilidade de todos os tipos. A espada também impede que qualquer um que a esteja tocando diga qualquer coisa além da verdade absoluta – o que a torna particularmente útil durante os julgamentos presididos pela Ordem.", "imagem":"org_espada.png"},{"nome":"Forjas de Hou","apelido":"Forjas","habilidades":["Arte da Forja 1","Arte da Forja 2","Forjado à Fogo"], "resumo":"A mais importante guilda de ferreiros de Tebryn.", "descricao":"Fundada em Tebrynia pelo Rei Kirk van Strauss como parte da revitalização da cidade, o Rei de Ferro concedeu benefícios para os artesãos que quisessem estabelecer suas oficinas em uma das áreas mais pobres de Tebrynia na época. Em pouco tempo vários artesãos haviam criado suas oficinas na região, e uma grande maioria dessas oficinas eram forjas de Anões vindos de Stord e Forjaguardas. Esses ferreiros rapidamente se integraram formando uma guilda de ferreiros, e adotaram, eventualmente, o nome do deus patrono dos ferreiros para nomear sua guilda. O próprio nome do bairro onde hoje a guilda se instala se deve ao fato do primeiro grande contrato da guilda ter sido a fabricação de espadas para a guarda de Tebryn.", "imagem":"org_forja.png"},{"nome":"Íris de Malta","apelido":"Íris","habilidades":["Alquimista de Campo","Alquimista de Combate","Herbalismo","Sabedoria Selvagem"], "resumo":"Formada pela elite alquimista de Lonjágua.", "descricao":"Esta guilda, que reverencia o brilhantismo de seu patrono, Maltas, foi formada pela elite alquimista de Lonjágua. A guilda é relativamente recente, tendo menos de 50 anos, e está em franco crescimento, com sedes estabelecidas em Tebrynia, Ambrook e Braktar. A guilda é especializada em desenvolver novas poções, pesquisar materiais e identificar plantas e minerais com qualidades alquímicas, além de catalogar animais com qualidades incomuns. De fato, a maioria dos membros possui algum conhecimento de sobrevivência e experiência em exploração, e embora o uniforme da guilda seja uma túnica negra com um olho prateado estampado no peito – simbolizando o olho de Maltas que está sempre atento aos detalhes – a maioria dos membros prefere roupas mais confortáveis e práticas, exibindo apenas um broche de prata no formato de um olho como identificação do grupo, reservando o uso da túnica tradicional apenas para encontros formais da guilda ou para eventos sociais.", "imagem":"org_iris.png"},{"nome":"O Arpão","apelido":"Arpão","habilidades":["Contatos no Crime","Durão","Intimidar","Pernas do Mar"], "resumo":"O maior grupo de navegadores ribeirinhos de Tebryn.", "descricao":"Apesar de não estar centralizados em Lonjágua, sua primeira sede fica na cidade, e ainda é a maior e mais importante de todas, onde os líderes do grupo se reúnem de tempos em tempos para discutir negócios. Existem muitos rumores sobre a organização ser formada por ladrões e traficantes que usam os rios para traficar todo tipo de item ilegal usando barcos de pesca, mas na verdade o grupo é basicamente uma guilda de mercadores.", "imagem":"org_arpao.png"},{"nome":"Corvos Negros","apelido":"Corvos","habilidades":["Armadura de Gelo","Aura de Gelo","Barreira de Gelo","Frio Intenso","Sopro Gélido"], "resumo":"Conjuradores de escolta que vestem tabardas negras.", "descricao":"A Companhia de Vinhos e Hidroméis Corvo Negro era, originalmente, uma pequena fabricante e distribuidora de bebidas fermentadas de Miralda, cerca de 80 anos atrás. Seus fundadores, um grupo de Feiticeiros e alquimistas da região empregavam magias de frio para melhorar o processo de fabricação de suas bebidas e também para transportar com mais eficiência seus produtos. Eventualmente seu sistema de transporte começou a interessar outros comerciantes de bebidas e alimentos ao redor de Miralda, e como os Corvos Negros utilizavam algumas magias que os próprios fundadores do grupo haviam desenvolvido e não estavam nas bibliotecas da Academia Argêntea, está passou a contratar os serviços da companhia para fazer o transporte de seus produtos também. Com o tempo – e graças à sua eficiência – a companhia cresceu consideravelmente e se tornou a maior guilda de transporte de alimentos de Tebryn. Sua tradição de empregar magias de frio para o transporte de cargas fez com que muitos conjuradores se juntassem ao grupo, o que providenciava também uma excelente segurança para as rotas dos Corvos Negros. A idéia de utilizar conjuradores como escoltas não passou despercebida aos caravaneiros de Miralda, e eventualmente os Corvos Negros passaram a emprestar seus conjuradores para outros grupos comerciais e caravanas como escolta, o que acabou se tornado a parte mais conhecida.", "imagem":"org_corvo.png"},{"nome":"Lobos dos Mares","apelido":"Lobo","habilidades":["Investida Acrobática","Lobo do Mar","Lutar no Convés","Navegador","Pernas do Mar"], "resumo":"Grupo de marinheiros caçadores de piratas.", "descricao":"Os Lobos dos Mares são um grupo de marinheiros fundado há pouco mais de 130 anos quando os corsários do Mar do Comércio decidiram juntar seus esforços e livrar a costa de Tebryn dos piratas que infestavam as águas da região. Liderados por Armod Ulfloth, um navegador Aesir cujo navio foi saqueado e teve sua tripulação assassinada por um grupo de piratas. Armod se juntou a um navio corsário, e rapidamente assumiu o posto de Capitão, criando uma campanha para unir os navios corsários do Mar do Comércio com o intuito de acabar com a pirataria. Adieren e Kerrck, duas das cidades que mais sofriam com ataques piratas passaram a patrocinar Armod, e em pouco tempo o Capitão Aesir tinha reunido um considerável número de navios corsários sob sua bandeira. Esses navios passaram a perseguir ferozmente qualquer navio pirata que encontrassem, geralmente passando a tripulação no fio da espada e queimando os navios. Sua fama se espalhou, e o grupo passou a ser conhecido como Lobos dos Mares.", "imagem":"org_lobo.png"},{"nome":"Hoste de Hadorn","apelido":"Hoste","habilidades":["Ataque Simultâneo","Código da Coragem","Combate em Grupo","Dogma:Discípulo da Guerra","Égide","Médico de Campo","Militar"], "resumo":"O exército oficial de Tebryn, mais antigo que o próprio reino.", "descricao":"Sua história é bem mais antiga do que a do reino que ela serve, mas extremamente conturbada, tendo passado por uma quantidade tão grande de reformulações que muitos, dentro e fora da organização, dizem que de sua origem até hoje, a única parte intacta é seu nome. Como qualquer membro da Hoste lhe dirá, no entanto, que há uma parte muito mais essencial que permanece totalmente inalterada: A devoção pela divindade que dá nome à Ordem. Cabe à Hoste a manutenção das fronteiras de Tebryn – principalmente na região dos vales, onde a presença arkanita ainda é sentida – e a manutenção da lei dentro do reino. Os membros da Hoste são empregados como guardas, soldados e vigias em praticamente todo o reino, embora a maioria da guarda de nobres e da capital seja de responsabilidade da Ordem da Espada de Mirah. Apesar dos membros da Ordem serem, principalmente, soldados com foco em combate e táticas militares, os escalões mais altos são sempre preenchidos por indivíduos que demonstram um amplo conhecimento de história, uma crença inabalável nos dogmas de Hadorn e um apurado senso de patriotismo.", "imagem":"org_hoste.png"},{"nome":"Guarda das Fronteiras Rochosas","apelido":"Guarda","habilidades":["Caçador das Cordilheiras","Estabilidade","Furtivo","Matador das Cordilheiras","Nascido nas Montanhas"], "resumo":"Organização de Stord que protege as cordilheiras.", "descricao":"A Guarda é quase tão antiga quanto Stord, já que a criação de uma ordem militar capaz de manter as galerias de Stord ivres de ameaças era uma das prioridades dos novos colonos. Logo que as ruínas de Stord foram redescobertas cerca de mil e seiscentos anos atrás, pequenos grupos de Anões, Humanos e Mahoks relativamente organizados – mas completamente decentralizados – mantinham porções das galerias defendidas de forma mais ou menos independentes. Com o tempo, esses pequenos grupos foram trocando informações sobre as partes das galerias que cada um guardava e sobre possíveis perigos encontrados ali. Essas informações eram extremamente úteis para os novos colonos, que podiam decidir onde e quais reformas eram mais ou menos urgentes, e tornou-se óbvio que era necessário centralizar as informações obtidas por esses grupos. Além do patrulhamento das Terras Secas e das Cordilheiras dos Cristais, a Guarda hoje é responsável, junto com os Firas de Parband, de realizar a guarnição de caravanas que atravessam a Cordilheira dos Cristais. Além disso, algumas tropas da Guarda são responsáveis pela vigilância das estradas entre Stord e o Forte da Avalanche, Tebrynia e Forjaguardas. Uma guarda de honra da Ordem também é mantida em Tebrynia a serviço direto do Rei, e embora sua função seja apenas honorífica, eles geralmente são consultados e auxiliam na organização de qualquer atividade que envolva o subterrâneo da capital.", "imagem":"org_guarda.png"}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_dogmas() {
    return '{"dogma":[{"nome":"Dogma: Discípulo da Forja","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você segue os ensinamentos de Hou, o Fogo. Você nunca pode quebrar um juramento, faltar com a palavra ou desistir de uma tarefa que se prontificou a levar a cabo – mesmo que isso ameace sua vida. Suas magias de Conjuração, Cariátide e Golens têm seu custo de Mana reduzido em 5 enquanto seguir este Dogma. Se em qualquer momento você quebrar um juramento ou uma promessa ou desistir de uma tarefa que se prontificou a terminar, você perderá esta Habilidade, e nunca mais poderá adquiri-la novamente.","especial":"Você pode seguir apenas um dogma. Sua Arma dos Deuses é um Martelo de Guerra flamejante. Além do dano normal, esse martelo causa um dano extra igual a <a class=\'fogo\'>10</a>/Fogo.","resumo":"Mana-5: Conjuração, Caríatede, Golem. !Martelo de Guerra +10/Fogo.","efeito":["modificador","mana",[],["Magia"],["Ação"],[],5]},{"nome":"Dogma: Discípulo da Guerra","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você segue os ensinamentos de Hadorn Braço de Ferro. Você nunca pode fugir de uma luta (a menos que seja uma morte certa) e deve sempre honrar a morte de quem morreu lutando. Você tem Força +1 enquanto seguir este dogma. Se em qualquer momento você fugir de uma luta ou desonrar os mortos, você perderá esta Habilidade, e nunca mais poderá adquiri-la novamente.","especial":"Você pode seguir apenas um dogma. Sua Arma dos Deuses é um Machado Pesado de bronze. Esta arma é extremamente afiada e causa o dobro do dano normal.","resumo":"Força +1. !Machado Pesado dano*2.","efeito":["for+",1]},{"nome":"Dogma: Discípulo da Justiça","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é um devoto de Mirah, a Justiça ou de Ahogr Ruge-Mundos. Você deve seguir as leis e jamais pode permitir que alguém seja prejudicado injustamente se você puder evitar. Você tem Vontade +1 enquanto seguir este dogma. Se você quebrar uma lei ou permitir que alguém o faça de modo proposital sem exigir punição imediata, você perderá esta Habilidade, e nunca mais poderá adquiri-la novamente.","especial":"Você pode seguir apenas um dogma. Sua Arma dos Deuses é uma Espada Longa cintilante. Além do dano normal, essa espada causa um dano extra igual a <a class=\'elet\'>10</a>/Eletricidade.","resumo":"Vontade +1. !Espada +10/Eletricidade.","efeito":["von+",1]},{"nome":"Dogma: Discípulo da Liberdade","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você segue os ensinamentos de Taranis Asas-de-Nuvens. Você nunca pode aprisionar, submeter ou forçar alguém a uma situação, condição ou ideia. Você tem Agilidade +1 enquanto seguir este dogma. Se em qualquer momento você aprisionar alguém de qualquer forma ou permitir que alguém seja preso contra sua vontade, você perderá esta Habilidade, e nunca mais poderá adquiri-la novamente.","especial":"Você pode seguir apenas um dogma. Sua Arma dos Deuses é uma Azagaia de gelo. Além do dano normal, se for arremessada essa arma causa um dano extra igual a <a class=\'frio\'>10</a>/Frio, e se desfaz em um pó fino de gelo e retorna com um vento gelado até as mãos do portador onde reverte à sua forma de azagaia no final do turno.","resumo":"Agilidade +1. !Azagai +10/Frio retornável.","efeito":["agi+",1]},{"nome":"Dogma: Discípulo da Natureza","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você segue os ensinamentos de Ellenis, a Dama da Natureza ou de Lathellanis, a Grande Matriarca. Você deve sempre proteger a natureza e os animais, e nunca deve extrair dela mais do que o estritamente necessário – e quando precisar fazer isso, deve repor o dano que causou de alguma forma. Você pode se comunicar com qualquer Besta do tipo Mamífero, Peixe, Ave ou Réptil por meio de gestos e olhares e recebe +1 em todas as rolagens relativas à esses tipos de criaturas. Se em qualquer momento você desrespeitar a natureza, deixar que outros o façam ou deixar de ajudar quando ela precisar, você perderá esta Habilidade, e nunca mais poderá adquiri-la novamente.","especial":"Você pode seguir apenas um dogma. Sua Arma dos Deuses é um Arco Élfico urticante. O portador desse arco recebe um bônus de +2 em seus ataques à distância, e toda vez que a corda desse arco é puxada, um ramo verde com uma única folha farpada na ponta cresce no lugar da flecha. Qualquer alvo atingido por uma dessas flechas, além de sofrer o dano normal fica automaticamente envenenado, perdendo 2 Pontos de Vida por turno. Esse veneno é considerado mágico e seus efeitos perduram até serem curados ou até o arco ser dissipado.","resumo":"Lidar com Bestas +1. !Arco Élfico (ataque +2) envenedado (2).","efeito":[]},{"nome":"Dogma: Discípulo da Paz","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é um discípulo de Denalla, a Vida. Você deve sempre trazer a paz, nunca poderá matar qualquer criatura e deve tentar encontrar um caminho que não exija combate em todas as situações. Você tem Vontade +2 enquanto seguir este dogma. Se em qualquer momento você matar ou permitir que alguém lute sem necessidade, você perderá esta Habilidade, e nunca mais poderá adquiri-la novamente.","especial":"Você pode seguir apenas um dogma. Sua Arma dos Deuses é um Missal da paz. Um tomo mágico que contém todas as magias que restaurem Pontos de Vida que o Sacerdote conheça. Ele pode conjurar qualquer dessas magias a partir o tomo e essas magias curam 10 PVs a mais do que o normal.","resumo":"Vontade +2. !Missal da Paz: contém magias de cura (+10).","efeito":["von+",2]},{"nome":"Dogma: Discípulo da Sabedoria","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você segue os ensinamentos de Sarfion, o Guardião do Conhecimento, e tenta transmiti-lo aos outros sempre que possível. Você nunca pode mentir ou omitir uma informação, deve sempre que puder transmitir conhecimento e deve ler por pelo menos 1 hora por dia. Você tem Inteligência +1 enquanto seguir este dogma. Se em qualquer momento você mentir ou desprezar a educação, você perderá esta Habilidade, e nunca mais poderá adquiri-la novamente.","especial":"Você pode seguir apenas um dogma. Sua Arma dos Deuses é um Cajado da conjuração. Esse Cajado oferece os benefícios combinados de um Cajado, um Orbe e uma Varinha quando seu portador conjura magias.","resumo":"Inteligência +1. !Cajado de Conjuração: Cajado & Orbe & Varinha.","efeito":["int+",1]},{"nome":"Dogma: Discípulo da Vida","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você segue os ensinamentos de Denalla, a Vida. Você deve sempre celebrar a vida, e não pode matar nem permitir que uma criatura morra devido a uma ação sua – ou de seus aliados. Você tem Vontade +1 enquanto seguir este Dogma. Se em qualquer momento você matar ou permitir que um aliado mate uma criatura, você perderá esta Habilidade e nunca mais poderá adquiri-la novamente.","especial":"Você pode seguir apenas um dogma. Sua Arma dos Deuses é um Missal da Paz: um tomo mágico que contém todas as magias que restauram Pontos de Vida que o Sacerdote conheça. Ele pode conjurar qualquer dessas magias a partir do tomo e essas magias curam 10 PVs a mais do que o normal.","resumo":"Vontade +1. !Missal da Paz: contém magias de cura (+10).","efeito":["von+",1]},{"nome":"Dogma: Discípulo do Destino","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você segue os ensinamentos da caprichosa Ran, a Senhora dos Mares. Você não pode procurar ou aceitar previsões sobre o futuro – e se você se mostrar muito cauteloso e planejar muito suas ações, você pode perder o favor de Ran. Sempre que uma rolagem tiver ao menos um dado com o resultado 6, você pode rolar novamente 1 dado cujo resultado não seja um 6 nem um 1. No entanto, sempre que você rolar 3 ou mais dados e apenas um deles não tiver um resultado 1, o resultado daquele dado passa a ser considerado 1.","especial":"Você pode seguir apenas um dogma. Sua Arma dos Deuses é Arpão das Marés. Este arpão, semelhante a uma presa de narval serrilhada, permite que seu portador role novamente qualquer dado uma vez por turno em qualquer teste que faça, mas deve manter o novo resultado. Essa rolagem não pode ser utilizada para modificar resultados que sejam sucessos decisivos ou falhas críticas.","resumo":"P/ cada 6 rerola dado (¬1/6). !Arpão das Marés: rerola um dado de não-crítico.","efeito":[]}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_espiritosAnimais() {
    return '{"espirito_animal":[{"nome":"Espírito Animal: Abelha","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de uma abelha. Você é automaticamente bem sucedido em testes para resistir à qualquer Habilidade do tipo Característica de todas as criaturas dos tipos Aracnídeo e Insetoide. Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer Besta do tipo insetoide ou aracnídeos, e este tipo de criatura nunca vai atacar você a menos que seja atacado por você primeiro ou que esteja sendo magicamente induzida. Finalmente, todas as suas Habilidades que envolvam criaturas do tipo Besta (Companheiro Animal, Convocar Animais, Forma Animal, Guardião da Natureza, etc.) passam a incluir criaturas dos tipos Aracnídeo e Insetoide.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Imune a habilidades de insetóide. Insetos/Aracnídeos +1d6.","efeito":[]},{"nome":"Espírito Animal: Águia","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de uma águia. Você ganha +1 nas rolagens de ataque a distância. Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer criatura do tipo Ave, e rola +1d6 em todas as rolagens (atacar, perceber, treinar, etc.) com relação à qualquer Besta do tipo Ave.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Ataque à Distância +1. Aves +1d6.","efeito":["modificador","ataque",[],[],[],["M","L"],1]},{"nome":"Espírito Animal: Camaleão","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de um camaleão. Você rola +1d6 nos testes de se esconder, escalar e se mover em silêncio. Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer criatura do tipo Réptil, e rola +1d6 em todas as rolagens (atacar, perceber, treinar, etc.) com relação à qualquer Besta do tipo Réptil.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Esconder, Escalar, Furtividade +1d6. Répteis +1d6.","efeito":[]},{"nome":"Espírito Animal: Cavalo","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de um cavalo. Você rola +1d6 nos seus testes para correr, saltar, escalar, nadar ou qualquer tipo de movimentação e deslocamento. Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer Besta do tipo Mamífero que tenha uma dieta Herbívora, e rola +1d6 em todas as rolagens (atacar, perceber, treinar, etc.) com relação à qualquer Besta do tipo Mamífero que tenha uma dieta Herbívora.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Correr, Escalar, Nadar, etc. + 1d6. Mamífero Herbívoro +1d6.","efeito":[]},{"nome":"Espírito Animal: Cobra","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de uma cobra. Você ganha +1 na Defesa (este é um bônus de Esquiva ou Bloqueio, à sua escolha; essa escolha deve ser feita no momento em que essa Habilidade é selecionada e não pode ser mudada mais tarde). Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer criatura do tipo Réptil, e rola +1d6 em todas as rolagens (atacar, perceber, treinar, etc.) com relação à qualquer Besta do tipo Réptil.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Esquiva ou Bloqueio +1. Répteis +1d6.","efeito":["bloqueio!","+1*", ":+1 em Bloqueio ou Esquiva.", "esquiva!","+1*", ":+1 em Bloqueio ou Esquiva."]},{"nome":"Espírito Animal: Coruja","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de uma coruja. Você rola +1d6 em todos os testes para lembrar, pesquisar ou compreender qualquer tipo de conhecimento teórico. Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer criatura do tipo Ave, e rola +1d6 em todas as rolagens (atacar, perceber, treinar, etc.) com relação à qualquer Besta do tipo Ave.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Lembrar, Pesquisar, Conhecimento teórico. Aves +1d6.","efeito":[]},{"nome":"Espírito Animal: Golfinho","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de um golfinho. Você consegue respirar e se movimentar tanto sob quanto sobre a água normalmente. Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer Besta do tipo Peixe ou Mamífero com a Habilidade Aquático e rola +1d6 em todas as rolagens (atacar, perceber, treinar, etc.) com relação à essas criaturas.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Respirar e mover sob água. Peixe ou Mamífero aquático +1d6.","efeito":[]},{"nome":"Espírito Animal: Lobo","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de um lobo. Você ganha +1 nas rolagens de ataque corporal. Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer Besta do tipo Mamífero que tenha uma dieta Carnívora, e rola +1d6 em todas as rolagens (atacar, perceber, treinar, etc.) com relação à qualquer Besta do tipo Mamífero que tenha uma dieta Carnívora.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Ataque Corporal +1. Mamífero Carnívoro +1d6.","efeito":["modificador","ataque",[],[],[],["CaC"],1]},{"nome":"Espírito Animal: Touro","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de um touro. Você rola +1d6 nos seus testes para resistir à venenos naturais ou mágicos, doenças e infecções naturais e mágicas, tentativas de derrubá-lo, empurrá-lo ou movê-lo fisicamente de qualquer maneira. Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer Besta do tipo Mamífero que tenha uma dieta Herbívora, e rola +1d6 em todas as rolagens (atacar, perceber, treinar, etc.) com relação à qualquer Besta do tipo Mamífero que tenha uma dieta Herbívora.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Resistir à veneno, doença, empurrão +1d6. Mamífero Herbívoro +1d6.","efeito":[]},{"nome":"Espírito Animal: Tubarão","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de um tubarão. Você causa +2 de dano com seus ataques corporais (desarmados ou com armas). Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer Besta do tipo Peixe ou Mamífero com a Habilidade Aquático e rola +1d6 em todas as rolagens (atacar, perceber, treinar, etc.) com relação à qualquer Besta do tipo Peixe ou Mamífero que tenha a Habilidade Aquático.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Dano Corporal +2. Peixe ou Mamífero aquático +1d6.","efeito":["modificador","dano",[],[],[],["CaC"],2]},{"nome":"Espírito Animal: Urso","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de um urso. Você tem +10 Pontos de Vida. Você também é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer Besta do tipo Mamífero que tenha uma dieta Carnívora, e rola +1d6 em todas as rolagens (atacar, perceber, treinar, etc.) com relação à qualquer Besta do tipo Mamífero que tenha uma dieta Carnívora.","especial":"Você pode ter apenas um Espírito Animal. Essa escolha é permanente e não pode ser mudada posteriormente.","resumo":"Vida +10. Mamífero Carnívoro +1d6.","efeito":["vida+",10]}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_qualidade() {
    return '{"qualidade":[{"nome":"Baixa","custo":0.5,"dano":-1,"ataque":0,"fndef":0,"defesa":-1,"bonus":-1},{"nome":"Mediana","custo":1,"dano":0,"ataque":0,"fndef":0,"defesa":0,"bonus":0},{"nome":"Alta","custo":3,"dano":0,"ataque":1,"fndef":1,"defesa":0,"bonus":1},{"nome":"Obra-Prima","custo":10,"dano":1,"ataque":1,"fndef":1,"defesa":1,"bonus":2}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_material() {
    return '{"material":[{"nome":"Aço","tipo":"metal","custo":1,"mult":1,"bonus":1,"fn":0,"peso":1,"tempo":1,"modificacoes":[],"especial":""},{"nome":"Aço Anão","tipo":"metal","custo":1.5,"mult":1,"bonus":1,"fn":0,"peso":1.25,"tempo":1.5,"modificacoes":[[[],[4],[],[],"peso",1]],"especial":""},{"nome":"Bronze","tipo":"metal","custo":3,"mult":1,"bonus":-1,"fn":0,"peso":1.33,"tempo":0.5,"modificacoes":[[[],[],["Cont"],["CaC"],"bonus",0], [[],[4],[],[],"bonus",0,"fn",1]],"especial":"Entorta em falha crítica."},{"nome":"Crisol","tipo":"metal","custo":2,"mult":1,"bonus":0,"fn":-1,"peso":0.66,"tempo":2,"modificacoes":[[[],[4],[],[],"peso",0.75,"tempo",1.5]],"especial":""},{"nome":"Drakonite","tipo":"metal","custo":50,"mult":2,"bonus":0,"fn":1,"peso":1,"tempo":10,"modificacoes":[],"especial":""},{"nome":"Ferro","tipo":"metal","custo":0.5,"mult":1,"bonus":0,"fn":1,"peso":1.5,"tempo":0.5,"modificacoes":[[[],[4],[],[],"peso",1.33]],"especial":"Quebra em falha crítica."},{"nome":"Kraneia","tipo":"madeira","custo":1.5,"mult":1,"bonus":-1,"fn":-1,"peso":1,"tempo":1,"modificacoes":[[[],[1],[],[],"bonus",1,"fn",0]],"especial":""},{"nome":"Madeira","tipo":"madeira","custo":0.5,"mult":1,"bonus":-2,"fn":-1,"peso":1,"tempo":1,"modificacoes":[],"especial":"Corte->Contusão."},{"nome":"Prata Fria","tipo":"metal","custo":2,"mult":1,"bonus":1,"fn":0,"peso":1,"tempo":1.5,"modificacoes":[[[],[4],[],[],"bonus",0,"fn",-1]],"especial":""},{"nome":"Prata","tipo":"metal","custo":5,"mult":1,"bonus":-1,"fn":0,"peso":1.33,"tempo":0.5,"modificacoes":[],"especial":""},{"nome":"Ouro","tipo":"metal","custo":10,"mult":1,"bonus":-1,"fn":0,"peso":1.33,"tempo":0.5,"modificacoes":[],"especial":""}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_arma() {
    return '{"arma":[{"nome":"Adaga","material":"Aço","materiais":["metal","madeira"], "custo":50, "peso":0.25,"forca":true, "dano":4, "tipo":3, "fn":1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Alabarda","material":"Aço","materiais":["metal","madeira"], "custo":250, "peso":6,"forca":true, "dano":11, "tipo":1, "fn":-1, "fn2m":6, "alcance":"Corpo-a-corpo","carregar":false,"haste":true,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Alfange","material":"Aço","materiais":["metal","madeira"], "custo":125, "peso":2,"forca":true, "dano":8, "tipo":3, "fn":-1, "fn2m":4, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Arpão","material":"Aço","materiais":["metal","madeira"], "custo":150, "peso":3,"forca":true, "dano":7, "tipo":2, "fn":4, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":true,"duasmaos":false,"arremesso":true,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Artavus","material":"Aço","materiais":["metal","madeira"], "custo":25, "peso":0.5,"forca":true, "dano":4, "tipo":3, "fn":1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":false,"arcano":true,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Azagaia","material":"Aço","materiais":["metal","madeira"], "custo":50, "peso":1,"forca":true, "dano":5, "tipo":2, "fn":2, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":true,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Bico-de-Corvo","material":"Aço","materiais":["metal","madeira"], "custo":125, "peso":1,"forca":true, "dano":6, "tipo":6, "fn":2, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":true,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Bordão","material":"Madeira","materiais":["metal","madeira"], "custo":50, "peso":2,"forca":true, "dano":5, "tipo":4, "fn":-1, "fn2m":1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":true,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Cimitarra","material":"Aço","materiais":["metal","madeira"], "custo":225, "peso":2.5,"forca":true, "dano":9, "tipo":3, "fn":5, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Clava","material":"Madeira","materiais":["metal","madeira"], "custo":75, "peso":1.5,"forca":true, "dano":6, "tipo":4, "fn":3, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Cutelo","material":"Aço","materiais":["metal","madeira"], "custo":5, "peso":0.5,"forca":true, "dano":4, "tipo":1, "fn":1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Claymore","material":"Aço","materiais":["metal","madeira"], "custo":250, "peso":3,"forca":true, "dano":11, "tipo":3, "fn":-1, "fn2m":5, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Debulhador","material":"Madeira","materiais":["metal","madeira"], "custo":5, "peso":4,"forca":true, "dano":2, "tipo":4, "fn":4, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Enxada","material":"Aço","materiais":["metal","madeira"], "custo":5, "peso":1.5,"forca":true, "dano":3, "tipo":5, "fn":-1, "fn2m":2, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Espada Curta","material":"Aço","materiais":["metal","madeira"], "custo":100, "peso":1,"forca":true, "dano":6, "tipo":3, "fn":2, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Espada Longa","material":"Aço","materiais":["metal","madeira"], "custo":175, "peso":2,"forca":true, "dano":8, "tipo":3, "fn":4, "fn2m":2, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Facão","material":"Aço","materiais":["metal","madeira"], "custo":25, "peso":0.5,"forca":true, "dano":4, "tipo":3, "fn":1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Foice","material":"Aço","materiais":["metal","madeira"], "custo":12, "peso":0.5,"forca":true, "dano":4, "tipo":3, "fn":1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Forcado","material":"Aço","materiais":["metal","madeira"], "custo":5, "peso":1.5,"forca":true, "dano":4, "tipo":2, "fn":-1, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Gadanha","material":"Aço","materiais":["metal","madeira"], "custo":25, "peso":2,"forca":true, "dano":5, "tipo":3, "fn":-1, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Glaive","material":"Aço","materiais":["metal","madeira"], "custo":225, "peso":4,"forca":true, "dano":10, "tipo":1, "fn":-1, "fn2m":4, "alcance":"Corpo-a-corpo","carregar":false,"haste":true,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Lança","material":"Aço","materiais":["metal","madeira"], "custo":100, "peso":2,"forca":true, "dano":7, "tipo":2, "fn":-1, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":true,"duasmaos":true,"arremesso":true,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Maça Leve","material":"Aço","materiais":["metal","madeira"], "custo":25, "peso":1,"forca":true, "dano":5, "tipo":4, "fn":2, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Maça Pesada","material":"Aço","materiais":["metal","madeira"], "custo":150, "peso":2.5,"forca":true, "dano":8, "tipo":4, "fn":5, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Maça Estrela","material":"Aço","materiais":["metal","madeira"], "custo":100, "peso":2,"forca":true, "dano":7, "tipo":4, "fn":4, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":true,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Machadinha","material":"Aço","materiais":["metal","madeira"], "custo":100, "peso":1,"forca":true, "dano":6, "tipo":1, "fn":2, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":true,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Machado de Lenha","material":"Aço","materiais":["metal","madeira"], "custo":25, "peso":2,"forca":true, "dano":5, "tipo":5, "fn":-1, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Machado de Batalha","material":"Aço","materiais":["metal","madeira"], "custo":150, "peso":3,"forca":true, "dano":8, "tipo":1, "fn":5, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Machado Pesado","material":"Aço","materiais":["metal","madeira"], "custo":175, "peso":4,"forca":true, "dano":11, "tipo":1, "fn":-1, "fn2m":5, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Malho","material":"Aço","materiais":["metal","madeira"], "custo":5, "peso":1,"forca":true, "dano":3, "tipo":4, "fn":3, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Mangual","material":"Aço","materiais":["metal","madeira"], "custo":200, "peso":3,"forca":true, "dano":9, "tipo":4, "fn":6, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Marreta","material":"Aço","materiais":["metal","madeira"], "custo":175, "peso":4,"forca":true, "dano":11, "tipo":4, "fn":-1, "fn2m":5, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Martelo","material":"Aço","materiais":["metal","madeira"], "custo":5, "peso":0.5,"forca":true, "dano":2, "tipo":4, "fn":1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Martelo Lucerno","material":"Aço","materiais":["metal","madeira"], "custo":275, "peso":5,"forca":true, "dano":11, "tipo":6, "fn":7, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":true,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Martelo de Guerra","material":"Aço","materiais":["metal","madeira"], "custo":175, "peso":3,"forca":true, "dano":8, "tipo":6, "fn":4, "fn2m":2, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Picareta de Prospecção","material":"Aço","materiais":["metal","madeira"], "custo":5, "peso":1,"forca":true, "dano":3, "tipo":2, "fn":-1, "fn2m":2, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Pá","material":"Aço","materiais":["metal","madeira"], "custo":5, "peso":2.5,"forca":true, "dano":4, "tipo":5, "fn":-1, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Rapieira","material":"Aço","materiais":["metal","madeira"], "custo":125, "peso":1,"forca":true, "dano":7, "tipo":2, "fn":2, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Relho","material":"-","materiais":[], "custo":5, "peso":0.5,"forca":true, "dano":1, "tipo":4, "fn":1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":true,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Sabre","material":"Aço","materiais":["metal","madeira"], "custo":100, "peso":1,"forca":true, "dano":7, "tipo":3, "fn":3, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Soqueira/Manopla","material":"Aço","materiais":["metal","madeira"], "custo":25, "peso":0.25,"forca":true, "dano":2, "tipo":4, "fn":1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Tridente","material":"Aço","materiais":["metal","madeira"], "custo":175, "peso":3,"forca":true, "dano":8, "tipo":2, "fn":5, "fn2m":3, "alcance":"Corpo-a-corpo","carregar":false,"haste":true,"duasmaos":false,"arremesso":true,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_projetil() {
    return '{"arma":[{"nome":"Arco Simples","material":"Madeira","materiais":["madeira"], "custo":75, "peso":0.75,"forca":true, "dano":4, "tipo":2, "fn":-1, "fn2m":2, "alcance":"Médio","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Arco Composto","material":"Madeira","materiais":["madeira"], "custo":175, "peso":1,"forca":true, "dano":6, "tipo":2, "fn":-1, "fn2m":3, "alcance":"Longo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Arco de Guerra","material":"Madeira","materiais":["madeira"], "custo":250, "peso":1.5,"forca":true, "dano":8, "tipo":2, "fn":-1, "fn2m":4, "alcance":"Longo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Arco Recurvo","material":"Madeira","materiais":["madeira"], "custo":250, "peso":1.5,"forca":true, "dano":7, "tipo":2, "fn":-1, "fn2m":2, "alcance":"Longo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Besta Leve","material":"Aço","materiais":["metal","madeira"], "custo":175, "peso":2,"forca":false, "dano":10, "tipo":2, "fn":-1, "fn2m":2, "alcance":"Médio","carregar":true,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Besta Pesada","material":"Aço","materiais":["metal","madeira"], "custo":225, "peso":3,"forca":false, "dano":14, "tipo":2, "fn":-1, "fn2m":5, "alcance":"Médio","carregar":true,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Funda/Estilingue","material":"Madeira","materiais":[], "custo":50, "peso":0.25,"forca":true, "dano":2, "tipo":4, "fn":1, "fn2m":1, "alcance":"Médio","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""},{"nome":"Fustíbalo","material":"Madeira","materiais":["madeira"], "custo":200, "peso":2,"forca":true, "dano":6, "tipo":4, "fn":-1, "fn2m":2, "alcance":"Médio","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":false,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":""}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_conjuracao() {
    return '{"conjuracao":[{"nome":"Cajado","material":"Madeira","materiais":["metal","madeira"], "custo":50, "peso": 2,"forca":true, "dano":5, "tipo":4,"fn": -1, "fn2m":1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":true,"arremesso":false,"canalizador":true,"asseste":false,"arcano":true,"mistico":true,"foco":false,"registro":true, "descricao":"Cajados são simplesmente bordões sintonizados a um conjurador através de sua runa pessoal."},{"nome":"Cetro","material":"Madeira","materiais":["metal","madeira"], "custo":75, "peso": 1.5,"forca":true, "dano":6, "tipo":4,"fn": 3, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":false,"arcano":true,"mistico":true,"foco":false,"registro":true, "descricao":"Cetros são simplesmente clavas sintonizadas a um conjurador através de sua runa pessoal."},{"nome":"Grimório","material":"-","materiais":[], "custo":50, "peso": 0.5,"forca":false, "dano":0, "tipo":0,"fn": 2, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":true, "descricao":"Livro usado por conjuradores arcanos para registrar suas magias."},{"nome":"Missal","material":"-","materiais":[], "custo":50, "peso": 0.5,"forca":false, "dano":0, "tipo":0,"fn": 2, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":false,"arcano":false,"mistico":false,"foco":false,"registro":true, "descricao":"Livro usado por conjuradores místicos para registrar suas magias."},{"nome":"Orbe de Cristal","material":"-","materiais":[], "custo":25, "peso": 0.25,"forca":false, "dano":0, "tipo":0,"fn": 1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":false,"arcano":false,"mistico":false,"foco":true,"registro":false, "descricao":"Um globo de cristal ou qualquer outra pedra semipreciosa com cerca de 20 cm de diâmetro."},{"nome":"Punhal","material":"Aço","materiais":["metal","madeira"], "custo":50, "peso": 0.25,"forca":true, "dano":4, "tipo":3,"fn": 1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":false,"arcano":true,"mistico":false,"foco":false,"registro":false, "descricao":"Punhais são simplesmente adagas sintonizadas a um conjurador através de sua runa pessoal."},{"nome":"Símbolo Sagrado","material":"-","materiais":[], "custo":25, "peso": 0.1,"forca":false, "dano":0, "tipo":0,"fn": 1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":false,"arcano":false,"mistico":true,"foco":false,"registro":false, "descricao":"Um medalhão com o símbolo de uma divindade."},{"nome":"Varinha","material":"-","materiais":[], "custo":25, "peso": 0.15,"forca":false, "dano":0, "tipo":0,"fn": 1, "fn2m":-1, "alcance":"Corpo-a-corpo","carregar":false,"haste":false,"duasmaos":false,"arremesso":false,"canalizador":true,"asseste":true,"arcano":false,"mistico":false,"foco":false,"registro":false, "descricao":"Uma pequena haste com 25 a 40 centímetros de comprimento feito de madeira nobre."}]}';
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_municao() {
    return '{"municao":[{"nome":"Aljava Comum", "custo":10, "peso": 1.5, "descricao":"Utensilio usado normalmente nas costas para carregar flechas. Comporta até 20 flechas (compradas separadamente)."},{"nome":"AljavaCompartimentada", "custo":20, "peso": 1, "descricao":"Dividida em quatro “bolsos”, cada um comportando 5 flechas, essa aljava é usada para dividir tipos diferentes de flechas."},{"nome":"Balas", "custo":1, "peso": 0.02, "descricao":"Esferas de metal ou pedra para fustibalo, Prodd e Funda."},{"nome":"Dardos", "custo":1, "peso": 0.05, "descricao":"Agulhas para zarabatana, 200 dessas pesam 1kg."},{"nome":"Flecha Comum", "custo":2, "peso": 0.05, "descricao":"Flecha usada em todos os tipos de arco."},{"nome":"Flecha Garateia", "custo":10, "peso": 0.2, "descricao":"Flecha para acoplar uma garatéia na ponta e uma corda."},{"nome":"Virote Comum", "custo":2, "peso": 0.04, "descricao":"Seta usada em todos os tipos de besta e Plumbata."},{"nome":"Virote Garateia", "custo":10, "peso": 0.2, "descricao":"Virote para acoplar uma garatéia na ponta e uma corda."}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_defesa() {
    return '{"defesa":[{"nome":"Túnica Pesada", "custo":50, "defesa": 1, "fn": 1, "peso": 2.5, "pesada":false, "rigida":false, "ocupa":false, "tipo":"armadura"},{"nome":"Armadura de Couro", "custo":100, "defesa": 2, "fn": 2, "peso": 12, "pesada":false, "rigida":false, "ocupa":false, "tipo":"armadura"},{"nome":"Armadura Simples", "custo":200, "defesa": 3, "fn": 4, "peso": 18, "pesada":true, "rigida":false, "ocupa":false, "tipo":"armadura"},{"nome":"Armadura de Batalha", "custo":600, "defesa": 4, "fn": 6, "peso": 27, "pesada":true, "rigida":false, "ocupa":false, "tipo":"armadura"},{"nome":"Armadura Completa", "custo":2000, "defesa": 5, "fn": 8, "peso": 36, "pesada":true, "rigida":true, "ocupa":false, "tipo":"armadura"},{"nome":"Escudo Pequeno", "custo":50, "defesa": 1, "fn": 2, "peso": 4, "pesada":false, "rigida":false, "ocupa":true, "tipo":"escudo"},{"nome":"Escudo Médio", "custo":100, "defesa": 2, "fn": 3, "peso": 6, "pesada":false, "rigida":false, "ocupa":true, "tipo":"escudo"},{"nome":"Escudo de Corpo", "custo":200, "defesa": 3, "fn": 5, "peso": 9, "pesada":false, "rigida":false, "ocupa":true, "tipo":"escudo"}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_pocao() {
    return '{"pocao":[{"nome":"Poção do Caos", "peso": 0.12, "raridade":"Raro", "custo":100, "ingredientes":"Qualquer", "descricao":"Efeito aleatório. Role 2d6 e verifique o efeito da poção na tabela na pg.76 do Guia do Herói."},{"nome":"Antídoto básico", "peso": 0.12, "raridade":"Comum", "custo":50, "ingredientes":"Folha de eucalipto, Erva dos passos (Infusão 8)", "descricao":"Remove todos os efeitos de venenos naturais da criatura que a beber."},{"nome":"Antídoto Cola-Carne", "peso": 0.12, "raridade":"Comum", "custo":50, "ingredientes":"Folha de Eucalipto, Raiz de Carvalho, Tarântula (Maceração 8)", "descricao":"Remove infecções naturais e efeitos de sangramento do alvo."},{"nome":"Elixir da Restauração", "peso": 0.12, "raridade":"Incomum", "custo":150, "ingredientes":"Flor de isura, erva dos passos, cogumelo vermelho (Tisana 13)", "descricao":"Recupera 30 Pontos de Vida e 30 Pontos de Mana."},{"nome":"Elixir de Cura", "peso": 0.12, "raridade":"Comum", "custo":50, "ingredientes":"Flor de isura, Erva dos passos (Infusão 10)", "descricao":"Recupera 30 Pontos de Vida."},{"nome":"Elixir de Mana", "peso": 0.12, "raridade":"Comum", "custo":100, "ingredientes":"Erva dos passos, Cogumelo vermelho (Infusão 10)", "descricao":"Recupera 30 Pontos de Mana."},{"nome":"Elixir do Dragão Branco", "peso": 0.12, "raridade":"Ilegal", "custo":250, "ingredientes":"Pó de obsidiana, Erva da lua (Maceração 12), veneno de cobra (Tintura 13)", "descricao":"Permite disparar um sopro de frio que causa dano igual à 20/Frio num alcance de 10 metros."},{"nome":"Elixir do Dragão Vermelho", "peso": 0.12, "raridade":"Ilegal", "custo":250, "ingredientes":"Enxofre, Rabo de salamandra (Tintura 12), veneno de cobra (Destilação 13)", "descricao":"Permite disparar um sopro de frio que causa dano igual à 20/Fogo num alcance de 10 metros."},{"nome":"Extrato Ácido", "peso": 0.12, "raridade":"Raro", "custo":500, "ingredientes":"Pó de âmbar, tarântula (Tintura 12), veneno de planta assassina (Destilação 14)", "descricao":"Causa dano igual a 20/Ácido num raio de 1 metro. "},{"nome":"Extrato Congelante", "peso": 0.12, "raridade":"Incomum", "custo":250, "ingredientes":"Enxofre, erva da lua (Tintura 12)", "descricao":"Congela tudo o que cobrir, até um máximo de 200 litros de líquido ou 200 quilos de material sólido."},{"nome":"Extrato da Res. à Eletricidade", "peso": 0.12, "raridade":"Raro", "custo":150, "ingredientes":"Azeviche, tarântula (Maceração 12), raiz de carvalho (Tisana 12)", "descricao":"Confere Resistência à Eletricidade por 1 hora."},{"nome":"Extrato da Resistência ao Fogo", "peso": 0.12, "raridade":"Incomum", "custo":150, "ingredientes":"Rabo de Salamandra, tarântula (Maceração 12), raiz de carvalho (Tisana 12)", "descricao":"Confere Resistência à Fogo por 1 hora."},{"nome":"Extrato da Resistência ao Frio", "peso": 0.12, "raridade":"Raro", "custo":150, "ingredientes":"Erva da lua, tarântula (Maceração 12), raiz de carvalho (Tisana 12)", "descricao":"Confere Resistência ao Frio por 1 hora."},{"nome":"Extrato Explosivo Menor", "peso": 0.12, "raridade":"Incomum", "custo":250, "ingredientes":"Pó de obsidiana, Enxofre, Rabo de salamandra (Maceração 12)", "descricao":"Explode causando dano igual à 10/Fogo num raio de 3 metros."},{"nome":"Veneno da Lentidão", "peso": 0.12, "raridade":"Ilegal", "custo":250, "ingredientes":"Veneno de escorpião, Asa de morcego, folha de garraka (Infusão 10)", "descricao":"Causa 3 pontos de dano se o alvo estiver ativo, e 1 se descansando. Esse veneno é considerado natural."},{"nome":"Veneno da Verdade", "peso": 0.12, "raridade":"Incomum", "custo":150, "ingredientes":"Cogumelo vermelho, Folha de eucalipto, Erva dos passos (Tintura 14)", "descricao":"O alvo torna-se incapaz de mentir durante 30 minutos. Esse veneno é considerado natural."},{"nome":"Veneno Paralisante", "peso": 0.12, "raridade":"Ilegal", "custo":500, "ingredientes":"Erva da lua, Folha de garraka (Maceração 12)", "descricao":"Paralisa alvo por 2 turnos. Este veneno é considerado natural."},{"nome":"Veneno Sonífero", "peso": 0.12, "raridade":"Comum", "custo":150, "ingredientes":"Cogumelo vermelho, Flor de isura (Infusão 12)", "descricao":"O alvo cairá em um sono profundo. Este veneno é considerado natural."},{"nome":"Antídoto Avançado", "peso": 0.12, "raridade":"Incomum", "custo":150, "ingredientes":"Folha de eucalipto, Flor de Isura, Trevo de quatro folhas (Infusão 12)", "descricao":"Remove todos os efeitos de venenos naturais e mágicos."},{"nome":"Antídoto Universal", "peso": 0.12, "raridade":"Incomum", "custo":300, "ingredientes":"Folha de eucalipto, pó de pirita (Tintura 12), Flor de isura, Trevo de quatro folhas (Tisana 14)", "descricao":"Remove todos os efeitos de venenos naturais e mágicos, doenças naturais e mágicas e efeitos de sangramento."},{"nome":"Elixir da Agilidade", "peso": 0.12, "raridade":"Raro", "custo":1000, "ingredientes":"Flor de Isura, Folha de oliveira (Maceração 12), flor de argúsia (Tisana 16)", "descricao":"O personagem que beber a poção recebe Agilidade +3 por 1 hora."},{"nome":"Elixir da Força", "peso": 0.12, "raridade":"Raro", "custo":2000, "ingredientes":"Flor de Isura, Folha de oliveira (Maceração 12), Coração de Grifo (Tisana 16)", "descricao":"O personagem que beber a poção recebe Força +3 por 1 hora."},{"nome":"Elixir da Inteligência", "peso": 0.12, "raridade":"Raro", "custo":600, "ingredientes":"Cogumelo vermelho, Folha de oliveira (Maceração 12), Ossos de Hidra (Destilação 16)", "descricao":"O personagem que beber a poção recebe Inteligência +3 por 1 hora."},{"nome":"Elixir da Restauração Maior", "peso": 0.12, "raridade":"Incomum", "custo":260, "ingredientes":"Flor de isura, Erva dos passos, Cogumelo vermelho, Trevo de quatro folhas (Tisana 16)", "descricao":"Recupera 50 Pontos de Vida e 50 Pontos de Mana."},{"nome":"Elixir da Velocidade", "peso": 0.12, "raridade":"Incomum", "custo":1600, "ingredientes":"Olho de Basilisco, Flor de isura (Tintura 16), Flor de Argusia (Tisana 16)", "descricao":"Garante uma ação padrão a mais por turno, durante 1 minuto."},{"nome":"Elixir da Vontade", "peso": 0.12, "raridade":"Raro", "custo":500, "ingredientes":"Cogumelo vermelho, Folha de oliveira (Maceração 12), Dente de dragão (Tintura 16)", "descricao":"O personagem que beber a poção recebe Vontade +3 por 1 hora."},{"nome":"Elixir de Cura Maior", "peso": 0.12, "raridade":"Incomum", "custo":180, "ingredientes":"Flor de isura, Erva dos passos, Trevo de quatro folhas (Infusão 14)", "descricao":"Recupera 50 Pontos de Vida."},{"nome":"Elixir de Mana Maior", "peso": 0.12, "raridade":"Incomum", "custo":220, "ingredientes":"Cogumelo vermelho, Erva dos passos, Trevo de quatro folhas (Infusão 14)", "descricao":"Recupera 50 Pontos de Mana."},{"nome":"Elixir dos Deuses", "peso": 0.12, "raridade":"Raríssimo", "custo":10000, "ingredientes":"Cogumelo vermelho, Folha de oliveira, Flor de isura (Maceração 15), Flor de argúsia, Coração de grifo (Tisana 16), Osso de hidra, dente de dragão (Tintura 18)", "descricao":"O personagem que beber a poção recebe +3 em todos os seus Atributos por 1 hora."},{"nome":"Extrato do Retorno", "peso": 0.12, "raridade":"Incomum", "custo":750, "ingredientes":"Olho de Basilisco, Pó de pirita (Maceração 14), Asa de morcego, Enxofre (Tisana 14)", "descricao":"Teleporta quem a ingerir (e até mais duas pessoas, se abraçadas) para o último local em que dormiu."},{"nome":"Extrato Explosivo Maior", "peso": 0.12, "raridade":"Ilegal", "custo":700, "ingredientes":"Pó de obsidiana, Enxofre (Maceração 14), rabo de salamandra (Tintura 14)", "descricao":"Explode causando dano igual à 30/fogo num raio de 5 metros."},{"nome":"Extrato Regenerativo", "peso": 0.12, "raridade":"Raro", "custo":2000, "ingredientes":"Erva dos Passos, flor de isura (Infusão 12), folha de oliveira, tarântula (Fermentação 14), coração de grifo (Tintura 16)", "descricao":"Cura ou regenera membros decepados, mas apenas de ferimentos não cicatrizados."},{"nome":"Veneno Potente", "peso": 0.12, "raridade":"Ilegal", "custo":500, "ingredientes":"Tarântula, Folha de garraka (Maceração 12), Veneno de escorpião, Veneno de planta assassina (Tintura 14)", "descricao":"Causa 5 pontos de dano por turno. Esse veneno é considerado mágico."},{"nome":"Veneno Torturante", "peso": 0.12, "raridade":"Ilegal", "custo":900, "ingredientes":"Erva da lua, Folha de garraka (Maceração 12), Veneno de planta assassina, Veneno de escorpião (fermentação 14)", "descricao":"Alvo torna-se Inapto em todos os testes por 1 hora. Este veneno é considerado mágico."},{"nome":"Veneno Real", "peso": 0.12, "raridade":"Ilegal", "custo":5000, "ingredientes":"Raiz de mandrágora, flor de isura (Maceração 14), Veneno de escorpião, Folha de garraka (Tisana 15)", "descricao":"Provoca 60 pontos de dano e paralisa por 1 turno. Esse veneno é considerado mágico."}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_mundano() {
    return '{"mundano":[{"nome":"Alforge", "custo":50, "peso": 1, "descricao":"Mochila acoplada na parte de traz na sela da montaria. Comporta até 40 quilos de equipamento."},{"nome":"Anzol e Linha", "custo":1, "peso": 0.001, "descricao":"Para pescar."},{"nome":"Armadura Animal (Couro)", "custo":300, "peso": 35, "descricao":"Concede +1 de defesa ao animal."},{"nome":"Armadura Animal (Simples)", "custo":600, "peso": 50, "descricao":"Concede +2 de defesa ao animal."},{"nome":"Armadura Animal (Batalha)", "custo":1200, "peso": 75, "descricao":"Concede +3 de defesa ao animal."},{"nome":"Armadura Animal (Completa)", "custo":1800, "peso": 100, "descricao":"Concede +4 de defesa ao animal."},{"nome":"Barril", "custo":10, "peso": 20, "descricao":"Barril de madeira para até 50 litros de líquidos."},{"nome":"Barrilete", "custo":5, "peso": 6, "descricao":"Barril de madeira para até 10 litros de líquidos."},{"nome":"Baú Pequeno", "custo":30, "peso": 20, "descricao":"Baú de madeira reforçado. Com alça para cadeado. Dimensões: 50cm*25cm*25cm"},{"nome":"Baú Grande", "custo":50, "peso": 60, "descricao":"Baú de madeira reforçado. Com alça para cadeado. Dimensões: 1m*50cm*50cm"},{"nome":"Caixa Pequena", "custo":2, "peso": 8, "descricao":"Caixa quadrada de madeira com 50cm de lado."},{"nome":"Caixa Grande", "custo":10, "peso": 45, "descricao":"Caixa retangular de madeira de dimensões: 1m*1m*2m;"},{"nome":"Cantil", "custo":5, "peso": 0.5, "descricao":"Recipiente para carregar líquidos feito com couro e armação de madeira e/ou metal. Mais fácil de carregar do que o odre. Cheio de líquido pesa 1kg a mais."},{"nome":"Capa de Lã", "custo":3, "peso": 1, "descricao":"Para proteger do frio."},{"nome":"Capa de Pele", "custo":10, "peso": 4, "descricao":"Para climas muito frios."},{"nome":"Chapéu", "custo":3, "peso": 0.5, "descricao":"De palha, couro ou lona."},{"nome":"Cinto Oculto", "custo":1, "peso": 0.15, "descricao":"Cinto para adaga que pode ser colocado na coxa ou braço."},{"nome":"Cinturão de Adagas", "custo":3, "peso": 0.25, "descricao":"Cinto para o peito com espaço para 10 adagas."},{"nome":"Cinto de Ferramentas", "custo":3, "peso": 0.4, "descricao":"Cinto com pequenos bolsos para guardar ferramentas e utensílios."},{"nome":"Corda Grossa (15m)", "custo":6, "peso": 3, "descricao":"Corda reforçada aguenta 500kg."},{"nome":"Corda simples (15m)", "custo":3, "peso": 2, "descricao":"Suporta 200kg."},{"nome":"Kit de Arrombamento", "custo":100, "peso": 0.4, "descricao":"Bainha com várias gazuas. Necessário para arrombar fechaduras."},{"nome":"Kit de Cura", "custo":50, "peso": 2, "descricao":"Bandagens, agulha, linha, faca e pastas de ervas medicinais."},{"nome":"Kit de Escalada", "custo":37, "peso": 3.4, "descricao":"Corda simples, martelete, 10 pinos,"},{"nome":"Martelete", "custo":24, "peso": 1, "descricao":"Pequeno martelo usado para fixar pinos de escalada. Uma ponta de martelo, outra de picareta."},{"nome":"Mochila Pequena/Embornal", "custo":20, "peso": 1, "descricao":"Mochila básica para guardar o essencial. Comporta até 5kg."},{"nome":"Mochila Grande", "custo":50, "peso": 2, "descricao":"Mochila reforçada de viagem. Comporta até 20kg."},{"nome":"Frasco de Cerâmica", "custo":2, "peso": 0.005, "descricao":"Frasco de vidro para poções. Comporta 50ml."},{"nome":"Frasco de Tinta", "custo":15, "peso": 0.001, "descricao":"Suficiente para dez páginas de texto."},{"nome":"Frasco de Vidro", "custo":4, "peso": 0.005, "descricao":"Frasco de vidro para poções. Comporta 50ml."},{"nome":"Freio, Rédeas e Bocal", "custo":20, "peso": 0.45, "descricao":"Consiste no equipamento que vai na cabeça do animal. Sem ele testes de cavalgar recebem -2."},{"nome":"Garatéia", "custo":12, "peso": 1, "descricao":"Gancho para escalar muros e paredes com 3 anzóis grandes juntos."},{"nome":"Garatéia Furtiva", "custo":20, "peso": 1, "descricao":"Garatéia forrada com tecido grosso para diminuir o barulho."},{"nome":"Garrafa de Cerâmica", "custo":5, "peso": 0.5, "descricao":"Garrafa para vinho e cerveja. Comporta 1 litro."},{"nome":"Lampião", "custo":20, "peso": 0.5, "descricao":"Este lampião funciona a óleo. Dura 6 horas."},{"nome":"Luvas", "custo":1, "peso": 0.1, "descricao":"De lã ou pelica, para proteger do frio."},{"nome":"Luvas de Couro", "custo":3, "peso": 0.5, "descricao":"Para trabalho pesado ou climas muito frios."},{"nome":"Manto", "custo":5, "peso": 1, "descricao":"Capa de lã ou lona com capuz, para proteger do frio."},{"nome":"Odre", "custo":2, "peso": 0.5, "descricao":"Cantil que consiste basicamente de um saco de couro com um bocal de madeira e rolha. Cheio de líquido pesa 4kg a mais."},{"nome":"Óleo Combustível", "custo":10, "peso": 0.5, "descricao":"Serve para recarregar lampiões. Se exposto ao fogo, explode (dano 10/Fogo num raio de 2 metros)."},{"nome":"Pá de Acampamento", "custo":5, "peso": 1, "descricao":"Pá pequena para ajudar na montagem do acampamento."},{"nome":"Papiro", "custo":1, "peso": 0.01, "descricao":"Uma folha. Papel de baixa qualidade feito a partir de uma pasta de junco seco."},{"nome":"Pederneira e Isqueiro", "custo":5, "peso": 0.25, "descricao":"Uma pedra especial que quando riscada por um metal (isqueiro) gera uma grande quantidade de faíscas. Usada para ascender uma fogueira."},{"nome":"Pelego", "custo":10, "peso": 4, "descricao":"Couro com lã de ovelha para dormir em cima. Bom para noites frias."},{"nome":"Pena", "custo":2, "peso": 0, "descricao":"Pena usada para escrever."},{"nome":"Pergaminho", "custo":5, "peso": 0.05, "descricao":"Uma folha. Pele de cordeiro preparada para receber tinta. E desse material que os grimórios são feitos."},{"nome":"Pinos para Escalada", "custo":10, "peso": 0.4, "descricao":"10 pinos para escaladas."},{"nome":"Provisões", "custo":10, "peso": 1, "descricao":"Suficiente para 2 refeições."},{"nome":"Roupas Comuns", "custo":5, "peso": 1, "descricao":"Camisa ou túnica, calções ou saia e sandálias."},{"nome":"Roupas de Festa", "custo":10, "peso": 2, "descricao":"Vestido ou roupas decoradas ou de cores vibrantes."},{"nome":"Roupas de Viagem", "custo":20, "peso": 3, "descricao":"Camisa e calças de lona e botas."},{"nome":"Sela e Estribos", "custo":80, "peso": 1, "descricao":"Confere um bônus de +2 em todos os testes de Cavalgar."},{"nome":"Tenda Pequena", "custo":35, "peso": 3, "descricao":"Tenda simples para uma pessoa, 1m de altura por 2m de comprimentos e 1m de largura."},{"nome":"Tenda Média", "custo":50, "peso": 6, "descricao":"Tenda simples para duas pessoas, 1m de altura por 2m de comprimentos e 2m de largura."},{"nome":"Tenda Grande", "custo":85, "peso": 13, "descricao":"Tenda simples para quatro pessoas, 1,8m de altura por 4m de comprimentos e 4m de largura. Essa tenda é muito grande para ser carregada por apenas uma pessoa."},{"nome":"Tenda Grupo", "custo":150, "peso": 27, "descricao":"Lembra um pequeno circo em forma de octógono. Só pode ser transportado em uma carroça. Tem 2,5m de altura por 4m de raio."},{"nome":"Tocha", "custo":1, "peso": 0.5, "descricao":"Dura uma hora."},{"nome":"Túnica", "custo":3, "peso": 1, "descricao":"Camisa longa que fica sobre as calças."},{"nome":"Velino", "custo":10, "peso": 0.02, "descricao":"Uma folha. Uma folha. Pele de feto de boi ou cordeiro, preparada para receber tinta. "},{"nome":"Agulhas", "custo":1, "peso": 0.001, "descricao":"Conjunto de agulhas para costurar tecido e couro."},{"nome":"Ampulheta", "custo":15, "peso": 0.05, "descricao":"Usado para marcar uma passagem de tempo específica. Os mais comuns são os de 1 minuto, 10 minutos e 1 hora."},{"nome":"Bússula", "custo":10, "peso": 0.1, "descricao":"Uma agulha magnetizada presa em um eixo que aponta para norte-sul."},{"nome":"Balança", "custo":50, "peso": 3, "descricao":"Instrumento com pesos de chumbo para pesar com precisão."},{"nome":"Buril", "custo":5, "peso": 0.05, "descricao":"Instrumento usado para gravar em metal ou madeira e tatuagem."},{"nome":"Cadinho", "custo":20, "peso": 2, "descricao":"Frasco de aço ou cerâmica refratária usada para derreter metais."},{"nome":"Carretel", "custo":1, "peso": 0.001, "descricao":"Pequeno cilindro de madeira para armazenar linha de costura. Cada carretel é suficiente para 5 peças de roupa."},{"nome":"Compasso", "custo":6, "peso": 0.001, "descricao":"Instrumento em formato de “V” com uma pena em um dos extremos usado para desenhar círculos e realizar medições."},{"nome":"Distintivo", "custo":20, "peso": 0, "descricao":"Uma peça de metal (geralmente de aço) com um símbolo da Ordem ou Cargo que você representa."},{"nome":"Esquadro", "custo":4, "peso": 0.05, "descricao":"Instrumento triangular usado para traçar linhas retas e ângulos."},{"nome":"Faca", "custo":10, "peso": 0.2, "descricao":"Faca sólida para propósitos variados."},{"nome":"Formão/cinzel", "custo":3, "peso": 0.25, "descricao":"Um pino de ferro usada para desbastar madeira e pedra."},{"nome":"Frasco de tinta", "custo":15, "peso": 0.001, "descricao":"Suficiente para 10 páginas de texto."},{"nome":"Instrumentos de alvenaria", "custo":37, "peso": 2.25, "descricao":"Martelo, formão e pinos de aço."},{"nome":"Instrumentos de cartografia", "custo":25, "peso": 0.053, "descricao":"Pena, frasco de tinta, régua e compasso."},{"nome":"Instrumentos de cerâmica", "custo":45, "peso": 4.2, "descricao":"Soprador de vidro, tenazes, faca e cadinho."},{"nome":"Instrumentos de costura", "custo":13, "peso": 0.25, "descricao":"Faca, agulhas, carretel de linha, sovela."},{"nome":"Instrumentos de escrita", "custo":29, "peso": 0.2, "descricao":"Frasco de tinta, pena, mata-borrão, pincel, buril."},{"nome":"Instrumentos de forja", "custo":60, "peso": 5, "descricao":"Malho, tenazes, cadinho, buril."},{"nome":"Instrumentos de precisão", "custo":63, "peso": 3, "descricao":"Régua, esquadro, compasso e balança."},{"nome":"Instrumentos de talha", "custo":35, "peso": 1.7, "descricao":"Faca, cinzel, martelo e lima."},{"nome":"Lima", "custo":2, "peso": 0.25, "descricao":"Haste de aço dentado usado para desbate de madeira e metal."},{"nome":"Malho", "custo":30, "peso": 2, "descricao":"Martelo largo e sólido usado por ferreiros para dobrar metal."},{"nome":"Martelo", "custo":20, "peso": 1, "descricao":"Martelo comum usado por carpinteiros e alvanéus."},{"nome":"Mata-borrão", "custo":5, "peso": 0.001, "descricao":"Usado para limpar o excesso de tinta ajudando na secagem."},{"nome":"Pena", "custo":2, "peso": 0.001, "descricao":"Pena usada para escrever."},{"nome":"Picareta", "custo":30, "peso": 3, "descricao":"Ferramenta para desbastar solo e rochas."},{"nome":"Pincel", "custo":2, "peso": 0.001, "descricao":"Usado para pintura e escrita."},{"nome":"Pinos de aço", "custo":10, "peso": 1, "descricao":"Usados para abrir fendas retas em pedras grandes."},{"nome":"Regua", "custo":3, "peso": 0.05, "descricao":"Instrumento para realizar medições precisas."},{"nome":"Pregos", "custo":1, "peso": 0.5, "descricao":"Saco de pregos suficiente para uma construção pequena ou 10 itens pequenos (escudos, caixas, baús, etc.)."},{"nome":"Sextante", "custo":200, "peso": 1, "descricao":"Instrumento de navegação para fazer medições de distância até um determinado ponto, usando os astros e a linha do horizonte como referência."},{"nome":"Soprador de vidro", "custo":10, "peso": 1, "descricao":"Tubo de aço usado para soprar vidro em formas variadas."},{"nome":"Sovela", "custo":1, "peso": 0.05, "descricao":"Instrumento utilizado para perfurar couro para costura-lo."},{"nome":"Tabarda", "custo":25, "peso": 1, "descricao":"Túnica curta usada sobre armaduras e vestimentas formais, indicando a Ordem, Igreja ou posto do usuário."},{"nome":"Tenazes", "custo":5, "peso": 1, "descricao":"Ferramenta usado para pegar materiais quentes."},{"nome":"Diamante", "custo":240, "peso": 0.001, "descricao":"Gema transparente que reflete luz em uma miríade de cores."},{"nome":"Rubi", "custo":180, "peso": 0.001, "descricao":"Gema vermelha extremamente brilhante."},{"nome":"Safira", "custo":150, "peso": 0.001, "descricao":"Gema azul extremamente brilhante."},{"nome":"Esmeralda", "custo":120, "peso": 0.001, "descricao":"Gema verde extremamente brilhante."},{"nome":"Quartzo", "custo":90, "peso": 0.001, "descricao":"Gema cujo tom varia de branco à roxo."},{"nome":"Anel", "custo":20, "peso": 0.001, "descricao":"Tira de metal para ser usada ao redor de um dedo."},{"nome":"Brinco", "custo":20, "peso": 0.001, "descricao":"Par de adornos decorados usados pendurados nas orelhas."},{"nome":"Broche", "custo":20, "peso": 0.001, "descricao":"Adorno com alfinete para prender em tecido."},{"nome":"Coroa", "custo":50, "peso": 0.5, "descricao":"Adorno decorado para ser usada na cabeça."},{"nome":"Corrente", "custo":20, "peso": 0.001, "descricao":"Cadeia de elos de metal para ser usada no pescoço."},{"nome":"Diadema", "custo":30, "peso": 0.25, "descricao":"Tira de metal para ser usada na cabeça."},{"nome":"Espelho", "custo":5, "peso": 0.5, "descricao":"Pequena superfície de aço polido para refletir imagens."},{"nome":"Estatueta", "custo":50, "peso": 1, "descricao":"Pequena figura esculpida para representar uma pessoa, animal ou divindade."},{"nome":"Medalhão", "custo":25, "peso": 0.05, "descricao":"Adorno decorado para ser usada em uma corrente."},{"nome":"Pente", "custo":5, "peso": 0.001, "descricao":"Pequeno instrumento dentado que serve para limpar, compor ou segurar os cabelos."},{"nome":"Pingente", "custo":15, "peso": 0.001, "descricao":"Pequeno adorno decorado para ser usado em uma corrente."},{"nome":"Pulseira", "custo":10, "peso": 0.05, "descricao":"Adorno decorado para ser usado no pulso."}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_musical() {
    return '{"musical":[{"nome":"Alaúde", "custo":50, "fn":1, "peso": 0.5, "descricao":"Instrumento de corda que pode ter 15 à 24 cordas."},{"nome":"Berrante", "custo":30, "fn":3, "peso": 2, "descricao":"Instrumento de sopro produzido a partir de um grande chifre, cuja variação de som é feita pelo modo de soprar do músico."},{"nome":"Bohdran", "custo":30, "fn":1, "peso": 0.5, "descricao":"Instrumento de percussão percutido com uma baqueta de ponta dupla."},{"nome":"Bongô", "custo":20, "fn":1, "peso": 0.5, "descricao":"Instrumento de percussão constituído de dois pequenos tambores unidos lado a lado que são percutidos com as mãos."},{"nome":"Chifre", "custo":20, "fn":1, "peso": 0.5, "descricao":"Instrumento de sopro produzido a partir de um pequeno chifre ou feito em metal, cuja variação de som é feita pelo modo de soprar do músico."},{"nome":"Flauta Doce", "custo":20, "fn":1, "peso": 0.2, "descricao":"Instrumento de sopro geralmente de madeira ou osso constituído de um tubo com orifícios que devem ser tampados para gerar notas."},{"nome":"Flauta de Pã", "custo":15, "fn":1, "peso": 0.2, "descricao":"Instrumento de sopro de madeira constituído de vários tubos que, quando soprados, produzem notas específicas."},{"nome":"Gaita de Fole", "custo":100, "fn":2, "peso": 0.5, "descricao":"Composto de um reservatório de ar ao qual estão ligados um tubo melódico, um bocal e uma ou mais válvulas melódicas que emitem uma nota constante em harmonia com o tubo melódico."},{"nome":"Hurd Guli", "custo":100, "fn":1, "peso": 1.5, "descricao":"Instrumento de corda com uma manivela que gira as cordas, enquanto o músico aperta teclas que comprimem as cordas gerando notas."},{"nome":"Jorvik", "custo":10, "fn":1, "peso": 0.1, "descricao":"Instrumento de sopro constituído de um pequeno bloco de madeira com orifícios escavados que, quando soprados, produzem notas específicas."},{"nome":"Lira", "custo":50, "fn":1, "peso": 1, "descricao":"Instrumento de corda em formato de meia-lua, com 40 à 60 cordas."},{"nome":"Pandeiro", "custo":20, "fn":1, "peso": 0.2, "descricao":"Instrumento de percussão constituído de um couro esticado em uma moldura, percutido com a mão."},{"nome":"Tamboril", "custo":30, "fn":1, "peso": 1, "descricao":"Instrumento de percussão constituído de um tubo de madeira encimado por um couro esticado, percutido com uma baqueta."},{"nome":"Rabeca", "custo":100, "fn":1, "peso": 0.5, "descricao":"Instrumento de corda que é tocado esfregando-se fibras montadas em um arco sobre as cordas."}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_habilidadesGerais() {
    return '{"habilidade":["Atletismo","Nanismo","Gigantismo","Recursos","Conhecimento Regional","Celeridade","Fúria de Batalha","Sentidos Apurados","Intuição","Força Interior","Aura de Guerra","Aura de Paz","Chamas de Hou","Elo Natural","Elo Vital","Marca da Justiça","Marca da Ordem","Marca da Verdade","Maré de Sorte","Quebrar os Grilhões","Força Heróica","Agilidade Heróica","Inteligência Heróica","Vontade Heróica","Nervos de Aço","Vontade de Ferro"]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_habilidadesAB() {
    return '{"habilidade":[{"nome":"Abençoar Aliados 1","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Graça Divina"]],"descricao":"Você desenha um Selo Místico sobre sí mesmo que concede um bônus de +1 em todas as suas rolagens. Todos os seus aliados que estiverem à uma distância em metros de você igual à sua Determinação quando você desenha este Selo também são afetados por ele. Esse Selo Místico dura 1 minuto.","especial":"","resumo":"Bônus de +1 para você e aliados num raio de Determinação metros. 1min.","efeito":[]},{"nome":"Abençoar Aliados 2","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Abençoar Aliados 1"]],"descricao":"Você desenha um Selo Místico sobre sí mesmo que concede um bônus de +2 em todas as suas rolagens. Todos os seus aliados que estiverem à uma distância em metros de você igual à sua Determinação quando você desenha este Selo também são afetados por ele. Esse Selo Místico dura 1 minuto.","especial":"","resumo":"Bônus de +2 para você e aliados num raio de Determinação metros. 1min.","efeito":[]},{"nome":"Abençoar Objeto","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":8, "requisitos":["habilidade",["Graça Divina"]],"descricao":"Você desenha um Selo Místico sobre uma arma ou armadura para que ela se torne mais eficiente contra criaturas sobrenaturais. Uma arma abençoada causa +6 de dano contra demônios, mortos-vivos e espíritos, além de atingir criaturas incorpóreas como se elas não tivessem a Habilidade Corpo Intangível. Se você abençoar uma armadura, qualquer demônio, morto-vivo ou espírito que tocá-la (incluindo com ataques desarmados) perde imediatamente 6 Pontos de Vida – e perde 6 Pontos de vida a cada turno que comece em contato com a armadura. Esse Selo Místico dura 1 hora.","especial":"","resumo":"Objeto causa dano +6 contra demônios, mortos-vivos ou espíritos. 1 hora.","efeito":[]},{"nome":"Abraço de Pedra","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui mãos fortes, acostumadas a agarrar e segurar com eficiência. Você recebe +2 em seus testes de agarrar, apertar, escalar e para resistir à tentativas de desarmá-lo. Além disso, quando apertar um alvo (veja Ações e Testes, na página 24) você causa 2 pontos de dano adicionais. Esses bônus se acumulam com os bônus de Braços Extras 1 e 2.","especial":"","resumo":"Agarrar, Apertar (dano+2), Escalar, Resistir Desarmamento +2.","efeito":[]},{"nome":"Abrigo Invisível","categoria":"Magia","tipo":"Ação","mana":50,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Invisibilidade 2"]],"descricao":"Desenhando uma Runa Arcana ou Selo Místico sobre uma pequena construção (um casebre, uma carruagem, uma guarita) você torna ela e tudo em seu interior invisível. Se a construção tiver alguma abertura (uma janela aberta, uma carroça sem teto) o interior da construção será visível através da abertura. A Runa Arcana ou Selo Místico dura 24 horas, mas se a construção for perturbada (uma porta é aberta, a carruagem se move) ela se dissipa imediatamente.","especial":"","resumo":"Pequena construção invisível, exceto aberturas, por 24 horas se imóvel.","efeito":[]},{"nome":"Abrir a Guarda","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Distração"]],"descricao":"Você chama a atenção de uma criatura fazendo com que ela perca o foco em combate e abra sua guarda. Você escolhe uma criatura que esteja a uma distância em metros igual à sua Vontade e que seja capaz de compreender o que você diz. Aquela criatura se desconcentra do combate e abre a guarda, permitindo que cada criatura adjacente a ela possa realizar, imediatamente, um ataque corporal contra ela. Este é um efeito mental.","especial":"","resumo":"Efeito Mental. Alvo até <a class=\'vontade\'> </a> metros recebe ataque CaC de adjacentes.","efeito":[]},{"nome":"Abrir Encantamento","categoria":"Magia","tipo":"Ação","mana":100,"dificuldade":-1, "requisitos":["nivel",10,"habilidade",["Dom do Artífice"]],"descricao":"Desenhando uma Runa sobre um item mágico, o Artífice pode desestabilizar o encantamento do item temporariamente, permitindo que um segundo encantamento seja iniciado sobre o item enquanto esta Runa estiver ativa. A Dificuldade dessa Magia é igual à dificuldade do encantamento original do item. Um item só pode ser afetado por Abrir Encantamento uma vez. Esta Runa Arcana dura 12 horas.","especial":"","resumo":"Permite adicionar encantamento em item. Dif. do enc. anterior.","efeito":[]},{"nome":"Abrir Janela Mágica","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Janela Mágica"]],"descricao":"Desenhando um Selo Místico sobre uma Janela Mágica, você cria uma segunda Janela Mágica diretamente a frente da criatura, objeto ou superfície que você estiver observando, efetivamente criando um canal de comunicação em tempo real. Esse Selo Místico dura tanto tempo quanto a Janela Mágica sobre a qual for desenhado.","especial":"","resumo":"Cria uma segunda Janela Mágica, comunicação em tempo real.","efeito":[]},{"nome":"Acrobata","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você sempre rola +1d6 em seus testes de equilíbrio, salto, piruetas e qualquer outra tentativa de se deslocar que exija coordenação, flexibilidade e precisão. Além disso, você sofre apenas metade dos danos por queda.","especial":"","resumo":"Equilíbrio, Salto, Pirueta, etc. +1d6. Metade do dano por queda.","efeito":[]},{"nome":"Acuar","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Sempre que você estiver usando uma arma de haste e o seu oponente não, ele é considerado Desprevenido contra você.","especial":"","resumo":"Haste vs Não-Haste: oponente Desprevenido.","efeito":[]},{"nome":"Adaptabilidade","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você se adaptou ao ambiente em que cresceu ou à atividade que escolheu – ou precisou – desempenhar. Você tem +1 em qualquer um dos seus Atributos a sua escolha","especial":"","resumo":"Bônus de +1 em atributo à escolha.","efeito":[]},{"nome":"Agarrar Flechas","categoria":"Técnica","tipo":"Reação","mana":10,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Vigília"]],"descricao":"Quando for atingido por uma arma arremessada (adaga, machadinha, azagaia, etc.) ou por um projétil (bala de funda, flecha, virote, etc.) e tiver uma mão livre, você pode agarrar aquele item no ar, antes que ele atinja você. Você não sofre nenhum dano físico (Corte, Perfuração e Contusão) que aquele item causaria – mas ainda sofre qualquer dano elemental (Fogo, Frio e Eletricidade) normalmente – e está com o item na mão. Essa Habilidade só pode ser usada uma vez por rodada.","especial":"","resumo":"Segura um projétil, ignorando dano físico.","efeito":[]},{"nome":"Agilidade Heróica","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você possui uma agilidade e flexibilidade que já lhe salvaram em muitas ocasiões. Você tem Agilidade +1.","especial":"","resumo":"Agilidade +1.","efeito":["agi+",1]},{"nome":"Alquimia Avançada","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você possui um conhecimento profundo sobre substâncias de origem animal, vegetal e mineral que podem ter efeitos úteis e onde encontrá-las. Você pode preparar Poções Avançadas e também recebe +2 em seus testes para encontrar jazidas, forragear, rastrear e identificar poções.","especial":"","resumo":"Poções Avançadas! Jazidas, Forragear, Rastrear, Identificar poções +2. ","efeito":[]},{"nome":"Alquimia Básica","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui um conhecimento considerável sobre fenômenos físicos e químicos e das características de substâncias de origem animal, vegetal e mineral que podem ter efeitos úteis. Você é considerado apto para processar matérias primas e recebe +2 em seus testes para encontrar jazidas e extrair material delas. Finalmente, você pode fazer testes de Inteligência para identificar qualquer poção (A dificuldade é igual ao processo com dificuldade mais baixa usado para produzir a poção) desde que possa ver ou cheirar a poção.","especial":"","resumo":"Encontrar Jazidas, Extrair material, Identificar poções +2.","efeito":[]},{"nome":"Alquimista de Campo","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você está acostumado a usar poções e itens alquímicos em suas explorações! Você recebe +2 em todos os seus testes de arremesso e em testes nos quais um Kit de Cura seja necessário – como estabilizar uma criatura Por um Fio ou qualquer outro uso de Cuidados Médicos – desde que tenha um Kit de Cura à mão. Além disso, você pode beber uma poção como uma ação padrão, ao invés de uma ação de rodada completa.","especial":"","resumo":"Arremesso, Kit de Cura +2. Beber poção requer apenas ação padrão.","efeito":[]},{"nome":"Alquimista de Combate","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Alquimista de Campo"]],"descricao":"Você tem vasta experiência no uso de poções no calor do combate, e se tornou particularmente eficiente nisso. Você pode arremessar uma poção como uma ação livre, desde que possa saca-la como uma ação livre no mesmo turno – ou seja, a poção deve estar em uma bandoleira ou cinto. Além disso, você recebe +1 em seus testes de arremesso – esse bônus se acumula com o bônus de Alquimista de Campo. Finalmente, você passa a pode beber uma poção como uma ação de movimento ao invés de uma ação padrão.","especial":"","resumo":"Arremesso +1. Beber poção requer apenas ação de movimento.","efeito":[]},{"nome":"Ampliar Invocação","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":15, "requisitos":["nivel",5,"habilidade",["Invocação Persistente"]],"descricao":"Desenhando uma Runa Arcana ou Selo Místico sobre um Elemental ou Golem, você pode fazer com ele aumente de tamanho uma categoria. A Runa ou Selo se mantém ativa por tanto tempo quanto o elemental ou golem estiver coeso, mas você pode dissipá-la a qualquer momento.","especial":"","resumo":"Aumenta tamanho de elemental ou golem em uma categoria.","efeito":[]},{"nome":"Analisar Magia","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Detectar Magia"]],"descricao":"Concentrando-se nos fluxos de energia de uma Runa Arcana ou Selo Místico por alguns segundos, você é capaz de perceber seus efeitos com precisão. Apesar de particularmente útil para lidar com portais, especificamente, é extremamente útil para compreender o funcionamento de itens mágicos e para compreender melhor o funcionamento de Runas e Selos conjurados para funcionarem como armadilhas mágicas. Você é capaz de dizer exatamente há quanto tempo ele foi desenhado, por quanto tempo ainda irá durar, quanto de Mana foi gasto para produzi-lo e quais seus efeitos exatos – incluindo quaisquer possíveis gatilhos necessários para ativá-lo, se ele está ligado a alguma outra Runa ou Selo (e nesse caso onde exatamente fica esta outra Runa ou Selo).","especial":"","resumo":"Você é capaz de identificar magia e efeitos mágicos com precisão.","efeito":[]},{"nome":"Anular Golpe","categoria":"Técnica","tipo":"Reação","mana":-1,"dificuldade":0, "requisitos":["habilidade",["Defesa Agressiva"]],"descricao":"Você se especializou em perceber e evitar os ataques mais complexos dos seus adversários. Sempre que um oponente utilizar uma Habilidade de Ação do tipo Técnica, você pode evitar totalmente seus efeitos (incluindo o dano). O custo dessa Habilidade é o mesmo da Técnica a ser evitada. Você só pode utilizar essa Habilidade 1 vez por turno.","especial":"","resumo":"Anula Técnica de oponente ao custo de Mana da mesma.","efeito":[]},{"nome":"Aparar","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você pode usar qualquer coisa que esteja em suas mãos para afastar e desviar golpes desferidos contra você. Enquanto estiver com um objeto em pelo menos uma das mãos, você recebe Defesa +1. Se estiver segurando um objeto em ambas as mãos ou um objeto em cada mão você recebe Defesa +2. Este e um bônus de Esquiva.","especial":"","resumo":"Defesa +1 por objeto segurado com cada mão.","efeito":["esquiva!","+1*",":+1 por objeto em cada mão."]},{"nome":"Aparar Magia","categoria":"Técnica","tipo":"Reação","mana":5,"dificuldade":0, "requisitos":["habilidade",["Detectar Magia"]],"descricao":"Sempre que for alvo de uma Magia que cause dano ou perda de vida, você pode reduzir aquele dano ou perda de vida pela metade. Essa Habilidade não afeta quaisquer outros efeitos da magia além de dano ou perda de vida.","especial":"Se você tiver Resistência ao tipo de dano que a magia causa, você não sofre dano e evita qualquer outro efeito da magia.","resumo":"Reduz dano mágico à metade, mas não os efeitos.","efeito":[]},{"nome":"Aparência Ilusória","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Ilusão 2"]],"descricao":"Desenhando uma Runa Arcana ou Selo Místico sobre um Humanóide, você pode modificar quaisquer características da aparência do alvo (raça, gênero, constituição, etc.) incluindo suas roupas, mas não seu tamanho relativo (um Metadílio não poderia se parecer com um Humano, nem um Elfo com um Mahok, por exemplo). Para copiar a aparência de alguém específico você precisa estar olhando para o alvo. A Runa Arcana dura até que a criatura afetada durma, mas se dissipa imediatamente se ela sofrer qualquer dano.","especial":"","resumo":"Modifica características estéticas, mas não tamanho relativo.","efeito":[]},{"nome":"Aplicar Força","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você aprendeu a confiar em um braço forte e firme para obter uma mira precisa. Você pode usar Força para ataques à distância. Além disso, sempre que usar Força para realizar arremessos ou ataques à distância com arcos ou fundas, adicione +2 ao dano da arma.","especial":"","resumo":"Força para ataques à distância provoca +2 de dano. ","efeito":["aplicar_forca"]},{"nome":"Aporte","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui um conhecimento considerável sobre Magias e efeitos sobrenaturais dedicados a mover criaturas e objetos. Telecinese e Caminhada Mágica (ou qualquer Magia que tenha uma dessas magias como Requisito mesmo que retroativamente) tem sua dificuldade diminuída em 2 para você e custam 5 Pontos de Mana a menos para conjurar. Além disso, a dificuldade para um alvo resistir aos efeitos dessas magias é sempre aumentado em 2 quando você as conjura.","especial":"","resumo":"Dif-1 e Mana-5 para magias de movimento, Alvos recebem -2 para resistir.","efeito":["modificador","dificuldade",["Telecinésia","Caminhada Mágica","Asas Celestiais","Portal","Teleporte 1","Teleporte 2","Velocidade","Levitar","Empurrão Cinético","Aríete Mágico"],["Magia"],["Ação"],[],2,"modificador","mana",["Telecinésia","Caminhada Mágica","Asas Celestiais","Portal","Teleporte 1","Teleporte 2","Velocidade","Levitar","Empurrão Cinético","Aríete Mágico"],["Magia"],["Ação"],[],5]},{"nome":"Aptidão Elemental","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Mente Disciplinada"]],"descricao":"Você possui um domínio considerável sobre as energias mais elementares da magia. Todas as suas magias custam 5 Pontos de Mana a menos para serem conjuradas e todas as suas magias e técnicas que causam dano por Fogo, Frio ou Eletricidade causam 5 pontos de dano a mais.","especial":"","resumo":"Magias custam -5 de mana. Dano +5 para Fogo, Frio e Eletricidade.","efeito":["modificador","mana",[],["Magia"],["Ação"],[],5,"modificador","descricao+",[],["Técnica","Magia"],["Ação"],["fogo","frio","elet","elem"],5]},{"nome":"Arborícola","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você passou muitos anos explorando as copas das árvores, e se sente à vontade entre os galhos. Você é automaticamente bem-sucedido em testes para escalar árvores e seu Deslocamento não é reduzido quando estiver se movimentando pelas copas das árvores. Você também recebe um bônus de +2 em todos os seus testes para se mover em silencio, se esconder e se movimentar enquanto estiver em cima de uma árvore.","especial":"","resumo":"Movimento normal em árvores. Furtividade em árvores +2.","efeito":[]},{"nome":"Arco Voltaico","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":12, "requisitos":["habilidade",["Rajada Eletrica", "Teleporte 1"]],"descricao":"Você aprendeu a usar sua capacidade de teleporte na velocidade de um raio! Desenhando uma Runa Arcana sobre si mesmo, você sempre pode ativá-la se for alvo de um ataque ou magia que cause dano (mas não perda de vida ou outros efeitos que não causem dano), se teleportando para algum lugar a um número de metros igual à sua Inteligência de onde você está, evitando o ataque completamente. Essa Runa Arcana se dissipa apenas quando você dormir (ou perder a consciência de alguma forma) e não quando é ativada – mas consome seu custo em Mana sempre que seu efeito for desencadeado.","especial":"","resumo":"Teleporte até <a class=\'inteligencia\'> </a> metros para ignorar dano.","efeito":[]},{"nome":"Área de Anti-Magia","categoria":"Magia","tipo":"Ação","mana":60,"dificuldade":16, "requisitos":["nivel",5],"descricao":"Desenhando uma Runa Arcana no solo, você cria uma área esférica de magia morta cujo raio é igual à sua Vontade em metros. Dentro desta área é impossível conjurar Magias, e todos os efeitos de itens mágicos ficam inativos enquanto eles estiverem dentro dessa área, e o mesmo ocorre com qualquer construto. Além disso, qualquer morto-vivo com a Habilidade Mente Vazia, elementais ou qualquer criatura que tenha sido invocada que entrem na área são imediatamente destruídos. Essa área de magia morta persistirá até o próximo nascer do sol. Essa Runa Arcana se dissipa assim que seus efeitos forem desencadeados.","especial":"","resumo":"Cria esfera de magia morta com raio de <a class=\'vontade\'> </a> metros.","efeito":[]},{"nome":"Aríete Mágico","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Telecinésia"]],"descricao":"Você projeta um poderoso golpe mágico capaz de derrubar oponentes – e estruturas! Desenhando uma runa arcana no ar, você projeta uma rajada de energia mágica bruta que causa dano igual a <a class=\'cont\'>10</a>/Contusão em um alvo em sua linha de visão, e obriga o alvo a vencer um teste de Força com dificuldade igual à Determinação do conjurador para não ser derrubado. Itens inanimados e estruturas sofrem o dobro do dano normal. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Rajada <a class=\'cont\'>10</a>/Cont. vsInanimados dano*2. Alvo FOR[DET]: Derruba.","efeito":[]},{"nome":"Arma da Lei","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo da Justiça"]],"descricao":"Você é capaz de imbuir seus ataques com a fúria de Ahogr! Você pode fazer um ataque corporal que, se acertar, causa um dano adicional igual a <a class=\'fogo\'> 10 </a>/Fogo. Ignore quaisquer bônus de Esquiva do alvo desse ataque. Criaturas do tipo Demônio, Morto-vivo ou Espírito sofrem um dano adicional de <a class=\'fogo\'> 10 </a>/Fogo.","especial":"","resumo":"Ataque CaC +<a class=\'fogo\'>10</a>/Fogo. Ignora bônus de esquiva. Dano +<a class=\'fogo\'>10</a> vsDemônio,Morto-vivo ou Espírito.","efeito":[]},{"nome":"Arma da Ordem","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo da Justiça"]],"descricao":"Você é capaz de imbuir seus ataques com a energia da própria Mirah! Você pode fazer um ataque corporal que, se acertar, causa um dano adicional igual a <a class=\'elet\'> 10 </a>/Eletricidade. Ignore bônus de Armadura e Bloqueio se o alvo estiver usando armaduras ou escudos de metal ou se estiver usando uma arma de metal para bloquear. Criaturas do tipo Demônio, Morto-vivo ou Espírito sofrem um dano adicional de <a class=\'elet\'> 10 </a>/Eletricidade.","especial":"","resumo":"Ataque CaC +<a class=\'elet\'>10</a>/Elet. Ignora defesa metálica. Dano +<a class=\'elet\'>10</a> vs Demônio, Morto-vivo ou Espírito.","efeito":[]},{"nome":"Arma Fiel","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":12, "requisitos":["habilidade",["Enfeitiçar Arma 1"]],"descricao":"Você pode fazer um item portátil vir até você desenhando uma Runa Arcana no ar entre você e o objeto. O item precisa estar em sua linha de visão, e irá desaparecer de onde está e aparecer na sua mão. Essa magia só funciona com itens portáteis como armas, escudos, ferramentas ou frascos e o item precisa estar marcado com sua Runa pessoal. Além disso, você precisa ter pelo menos uma mão livre para que essa magia funcione.","especial":"","resumo":"Teleporta um objeto portátil marcado no campo de visão para uma mão livre.","efeito":[]},{"nome":"Arma Gélida","categoria":"Técnica","tipo":"Ação","mana":5,"dificuldade":0, "requisitos":[],"descricao":"Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal. Esse ataque causa o dano normal da arma, mais um dano adicional igual a <a class=\'frio\'>8</a>/Frio. Se esse efeito for conjurado enquanto a arma estiver submersa em líquido, ele congela uma esfera de meio metro de diâmetro (aproximadamente 125 litros).","especial":"","resumo":"Ataque CaC +<a class=\'frio\'>8</a>/Frio. Congela até 125 litros se submerso ao conjurar.","efeito":[]},{"nome":"Arma Incandescente","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal. Esse ataque causa o dano normal da arma e um dano adicional igual a <a class=\'fogo\'>10</a>/Fogo. Esse efeito pode ser usado para inflamar objetos combustíveis – mas não faz alvos vivos irromperem em chamas.","especial":"","resumo":"Ataque CaC +<a class=\'fogo\'>10</a>/Fogo. Inflama combustíveis.","efeito":[]},{"nome":"Arma Relampejante","categoria":"Técnica","tipo":"Ação","mana":15,"dificuldade":0, "requisitos":[],"descricao":"Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal. Esse ataque causa o dano normal da arma, mais um dano adicional igual a <a class=\'elet\'>10</a>/Eletricidade. Ignore bônus de Armadura e Bloqueio se o alvo estiver usando armaduras ou escudos de metal ou se estiver usando uma arma de metal para bloquear.","especial":"","resumo":"Ataque CaC +<a class=\'elet\'>10</a>/Elet. Ignora defesa metálica.","efeito":[]},{"nome":"Armadilheiro","categoria":"Técnica","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você se especializou em desarmar e preparar armadilhas. Você nunca é considerado Inapto para desarmar armadilhas e se tiver os materiais e o tempo necessários, você pode armar uma armadilha. Faça um teste de Inteligência: O resultado do teste será a dificuldade para a armadilha ser percebida e desarmada.","especial":"","resumo":"Desarma & Prepara armadilhas. Dif. para localizar/desarmar: teste de Int.","efeito":[]},{"nome":"Armadura de Gelo","categoria":"Magia","tipo":"Ação","mana":25,"dificuldade":11, "requisitos":["nivel",5,"habilidade",["Parede de Gelo"]],"descricao":"Desenhando uma Runa Arcana sobre uma criatura, você a envolve em uma camada de gelo mágico que age como uma armadura. A armadura não compromete a movimentação ou os sentidos da criatura dentro dela, e permite respirar e falar normalmente, e a criatura não sofre dano por frio, apenas sentindo-se levemente refrescada. A armadura absorve os ataques que atingiriam a criatura dentro dela, e deve ser destruída antes que a criatura possa ser atingida – note que qualquer ataque que exceda os Pontos de Vida da armadura serão aplicados ao usuário dentro dela (assim, se a armadura tiver 5 Pontos de Vida e sofrer um ataque que cause 12 de dano, a armadura será destruída e a criatura dentro dela sofrerá 7 de dano). A armadura tem uma quantidade de Pontos de Vida igual a 5 vezes a Vontade do conjurador, é Vulnerável a Fogo e sempre que receber dano por Frio recupera Pontos de Vida ao invés de sofrer dano. Ataques de Eletricidade causam dano normal à armadura e à criatura no interior dela. Essa Runa Arcana dura por 1 minuto, mas se dissipa imediatamente se a armadura perder todos os seus Pontos de Vida.","especial":"","resumo":"Cria armadura de gelo com 5*<a class=\'vontade\'> </a> de Vida. Absorve Frio. 1min.","efeito":[]},{"nome":"Armadura Fiel","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":12, "requisitos":["habilidade",["Arma Fiel","Enfeitiçar Armadura"]],"descricao":"Você pode fazer uma vestimenta vir até você desenhando uma Runa Arcana no ar entre você e ela. O item precisa estar em sua linha de visão, e irá desaparecer de onde está e aparecer vestido no seu corpo. Essa magia só funciona com itens que possam ser vestidos, como armaduras, roupas, mochilas ou cintos e o item precisa estar marcado com sua Runa pessoal. Além disso, você precisa ter espaço para que o item seja vestido para que essa magia funcione – é impossível trazer uma mochila se você já estiver usando alguma coisa nas costas, ou trazer uma armadura se você já estiver usando uma.","especial":"","resumo":"Veste automaticamente armadura marcada no campo de visão.","efeito":[]},{"nome":"Arqueria","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você recebe +2 em todos os seus ataques à distância (incluindo arremessos) e em testes envolvendo Arcos, Bestas, Prodds e fundas de todos os tipos. Você sabe como consertar essas armas e como fabricar a munição para elas.","especial":"Para consertar as armas ou fabricar a munição, você deve ter as matérias primas adequadas e as ferramentas, com isso faça um teste de Inteligência, a dificuldade é 10 (o Mestre pode aumentar a dificuldade no caso de consertos muito complexos ou de uma fabricação do zero).","resumo":"Ataques à distância +2. Conserta armas de projétil e fabrica flechas.","efeito":["modificador","ataque",[],[],[],["M","L"],2]},{"nome":"Arqueria de Mestre","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10, "habilidade",["Olho da Águia"]],"descricao":"Você sempre rola +1d6 para ataques à distância (incluindo arremessos).","especial":"","resumo":"Ataques à distância +1d6.","efeito":[]},{"nome":"Arremesso Cinético","categoria":"Magia","tipo":"Ação","mana":25,"dificuldade":15, "requisitos":["nivel",5,"habilidade",["Empurrão Cinético"]],"descricao":"Desenhando uma Runa Arcana sobre um alvo, você o arremessa no ar a uma altura igual à sua Determinação. O alvo (e qualquer criatura atingida por ele) sofre o dano apropriado pela altura que cair (causando essa mesma quantidade de dano em qualquer criatura que atingir). Além disso, quando atingir o solo, o alvo (e qualquer criatura que ele tenha atingido) precisa vencer um teste de Agilidade (Dificuldade igual à Determinação do conjurador) ou cairá. Você pode utilizar essa Magia sobre si mesmo ou sobre um aliado, para alcançar uma área elevada. Nesse caso, diminua a Vontade do alvo da Dificuldade da Magia e o alvo não sofre dano nem chance de queda.","especial":"Criaturas com as Habilidades Combate Gigante ou Colosso são arremessadas a uma altura igual à metade da Determinação do Conjurador (arredondado para baixo). No entanto, elas causam quatro vezes o dano de queda que sofrerem em qualquer criatura sobre a qual caiam (se estas não tiverem as Habilidades Combate Gigante ou Colosso).","resumo":"Arremessa alvo <a class=\'determinacao\'> </a> metros para cima. Aliados: Dif - VON.","efeito":[]},{"nome":"Arte da Forja 1","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você recebeu treinamento formal nas técnicas mais avançadas de trabalho com metais. Sempre que fizer um teste de ferraria, você recebe um bônus de +2. Além disso, você gasta metade do tempo normal para criar ou consertar itens de metal, e metade do material normalmente necessário para consertar itens de metal – ou seja, um quarto do peso do item ao ser consertado, ao invés de metade do peso daquele item. Finalmente, quando destrói um item de metal, você pode reaproveitar todo o metal do item ao invés de apenas metade.","especial":"","resumo":"Ferraria +2. Gasta metade dos recursos para fabricar. Recicla material.","efeito":[]},{"nome":"Arte da Forja 2","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Arte da Forja 1"]],"descricao":"Você exercitou sua maestria sobre a forja de metais e é capaz de criar itens mais eficientes do que os normais. Você pode criar ou modificar itens de metal de forma que eles tenham FN -1, ou, no caso de armas, causem Dano +1 – apenas uma modificação pode ser aplicada a um item, ou ele ficará muito frágil para ser utilizado apropriadamente. Itens de qualidade baixa não se beneficiam desses modificadores, e itens de qualidade alta ou obra-prima adicionam seus modificadores normais ao item. Se estiver modificando um item, você deve fazer um teste de ferraria e o resultado precisa ser igual ou superior ao necessário para criar aquele item – ou seja, para modificar um item de qualidade alta, você deve ter um resultado 16 ou maior no seu teste. Veja o Guia do Herói (página 52) para maiores detalhes.","especial":"","resumo":"Melhora itens: FN-1 ou Dano+1 com Ferraria vs Dificuldade de fabricação.","efeito":[]},{"nome":"Asas Celestiais","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":10, "requisitos":["habilidade",["Caminhada Mágica"]],"descricao":"Desenhando um Selo Místico sobre uma criatura viva, você faz surgir em suas costas um grande par de asas. O alvo ganha a Habilidade Asas Pesadas. Esse Selo Místico dura por 1 Hora.","especial":"","resumo":"Alvo ganha Asas Pesadas por 1 hora.","efeito":[]},{"nome":"Asas Fortes","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["for",4],"descricao":"Você desenvolveu suas capacidades musculares de forma que ultrapassa os limites naturais dos outros Levent durante o voo. Você é capaz de parar no ar e não precisa pegar impulso para decolar, desde que tenha espaço suficiente para abrir as asas. Além disso, em manobras de Encontrão quando estiver voando, você recebe um bônus igual à sua Força para qualquer efeito relevante, incluindo danos e tentativas de derrubar oponentes, por exemplo.","especial":"","resumo":"Para no ar e decola sem impulso. Adiciona Força para efeitos relevantes.","efeito":[]},{"nome":"Asas Pesadas","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui grandes asas e pode voar, precisando de um espaço igual à sua envergadura para pegar impulso antes de alçar voo. Quando estiver voando, você não pode parar no ar (mas pode planar) e seu deslocamento em voo é o dobro de seu deslocamento normal.","especial":"O dano de qualquer manobra de Encontrão usada em voo é duplicado (mas o dano da arma que você usar no Encontrão não é alterado, nem quaisquer outros possíveis efeitos do Encontrão). A envergadura do personagem é duas vezes a sua altura.","resumo":"Voa se pegar impulso, mas não parar no ar. Deslocamento dobra em voo.","efeito":[]},{"nome":"Asceta","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Através de sua dedicação aos dogmas de sua divindade ou panteão, você adquiriu um considerável conhecimento e uma compreensão intuitiva sobre seus desígnios. Você rola +1 em todos os seus testes envolvendo magias (incluindo conjurá-las) e conhecimento. Além disso, todas as suas magias de Cura recuperam 5 Pontos de Vida a mais.","especial":"","resumo":"Bônus de +1 para magias. Magias de Cura recuperam +5 pontos de vida.","efeito":["modificador","dificuldade",[],["Magia"],["Ação"],[],1,"modificador","descricao+",[],["Magia"],["Ação"],["cura"],5]},{"nome":"Assuntos Diversos","categoria":"Característica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":[],"descricao":"Você estudou e praticou um pouco de tudo ao longo da sua vida. Você pode rolar +1d6 em um teste qualquer à sua escolha.","especial":"","resumo":"Bônus de +1d6 em um teste qualquer à sua escolha.","efeito":[]},{"nome":"Astuto","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é mais astuto que a maioria dos indivíduos da sua raça. Você tem Inteligência +1 e recebe +2 em todos os testes de Inteligência e Agilidade que envolvam percepção, mover-se em silêncio, camuflagem, furtar bolsos, e teste semelhantes.","especial":"","resumo":"Inteligência +1. Percepção, Furtividade, Ladinagem +2.","efeito":["int+",1]},{"nome":"Ataque Aleijador","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Faça um ataque corpo-a-corpo ou à distância, visando o quadril, joelho ou tornozelo do alvo, comprometendo sua locomoção e deixando um ferimento doloroso. Além de receber o dano normal pelo ataque, o alvo fica com seu Deslocamento reduzido em 1 e sempre que se deslocar ou fizer um teste de Agilidade que envolva as pernas ele sofre 10 pontos de dano. Esse é um efeito de Sangramento.","especial":"","resumo":"Ataque provoca deslocamento -1 e sangramento (dano 10) ao se mover.","efeito":[]},{"nome":"Ataque Chocante","categoria":"Técnica","tipo":"Ação","mana":25,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Arma Relampejante"]],"descricao":"Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal. Esse ataque causa o dano normal da arma em conjunto com uma potente rajada elétrica que causa <a class=\'elet\'>10</a>/eletricidade e faz com que o alvo fique Paralisado por 2 turnos. Ignore bônus de Armadura e Bloqueio se o alvo estiver usando armaduras ou escudos de metal ou se estiver usando uma arma de metal para bloquear.","especial":"Alvos Imunes à Eletricidade não são afetados por essa Habilidade – mas alvos Resistentes à Eletricidade são afetados normalmente.","resumo":"Ataque CaC +<a class=\'elet\'>10</a>/Elet. Paralisia 2 turnos. Ignora defesa metálica.","efeito":[]},{"nome":"Ataque Congelante","categoria":"Técnica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Arma Gélida"]],"descricao":"Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal. Esse ataque causa o dano normal da arma além de <a class=\'frio\'>8</a>/Frio e congela dentro de um bloco de gelo (o alvo é considerado Paralisado e só pode ser afetado por efeitos Mentais) e sofre dano igual a <a class=\'frio\'>8</a>/Frio no começo de seu turno. Esse efeito dura uma quantidade de turnos igual à sua Inteligência.","especial":"O bloco de gelo contendo o personagem pode ser destruído se sofrer uma quantidade de dano igual à Determinação do conjurador da magia. O bloco de gelo é imune a ataques que causem dano por Frio e ataques que causam dano por Eletricidade também afetam o alvo congelado.","resumo":"Ataque CaC +<a class=\'frio\'>8</a>/Frio. Congelo alvo por <a class=\'inteligencia\'> </a> turnos, dano <a class=\'frio\'>8</a>/Frio por turno.","efeito":[]},{"nome":"Ataque do Búfalo","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Faça uma manobra de encontrão. Se acertar o ataque, além de causar o dano normal pelo encontrão, o alvo precisa vencer um teste de Resistência (Dificuldade igual à sua Determinação mais a FN da arma que estiver usando) ou será derrubado. Alvos com o dobro do seu peso não são afetados.","especial":"","resumo":"Encontrão. Alvo testa FOR[DET] + FN da arma ou é derrubado.","efeito":[]},{"nome":"Ataque Evasivo","categoria":"Padrão","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Evasão"]],"descricao":"Você realiza um ataque seguido de uma movimentação errática para confundir seu oponente. Faça um ataque baseado em Agilidade. Se acertar, o alvo realiza seus ataques contra você como se fosse Inapto durante o próximo turno. Se o ataque for à distância e houver alguma cobertura à disposição, você pode se esconder tornando impossível para o alvo lhe atacar enquanto ele não o ver primeiro.","especial":"","resumo":"Ataque com Agilidade. Alvo é inapto contra você no próximo turno.","efeito":[]},{"nome":"Ataque Fantasma","categoria":"Técnica","tipo":"Ação","mana":15,"dificuldade":0, "requisitos":[],"descricao":"Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal. Esse ataque causa +8 de dano e afeta criaturas incorpóreas como se elas não tivessem essa Habilidade.","especial":"","resumo":"Ataque CaC +8. Afeta criaturas incorpóreas.","efeito":[]},{"nome":"Ataque Fervoroso","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Você pede pela inspiração de sua divindade para desferir um golpe preciso. Você pode fazer um ataque corporal que ignora o bônus de Atributo da Defesa do alvo e, se acertar, causa um dano adicional igual à sua Determinação.","especial":"Essa Habilidade não tem efeito em criaturas que possuam um Dogma.","resumo":"Ataque CaC. Ignora atributo da defesa. Dano +Determinação.","efeito":[]},{"nome":"Ataque Flamejante","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Arma Incandescente"]],"descricao":"Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal. Esse ataque causa o dano normal da arma além de <a class=\'fogo\'>10</a>/fogo e faz o alvo entrar em combustão (o alvo sofre uma quantidade de dano igual a <a class=\'fogo\'>10</a>/fogo no começo do seu turno) por uma quantidade de turnos igual à sua Inteligência ou até que as chamas sejam apagadas de alguma forma.","especial":"Um personagem em combustão pode gastar seu turno rolando no chão para apagar as chamas. Ele será considerado Caído e Despreparado enquanto fizer isso (ver Condições, pág. 169).","resumo":"Ataque CaC +<a class=\'fogo\'>10</a>/Fogo e <a class=\'fogo\'>10</a>/Fogo por <a class=\'inteligencia\'> </a> turnos, ou até apagar o fogo.","efeito":[]},{"nome":"Ataque Giratório","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Você realiza um ataque amplo, girando sua arma para atingir todos os oponentes próximos. Faça um ataque corporal contra cada alvo dentro do seu alcance corporal.","especial":"","resumo":"Ataque Cac contra todos os alvos adjacentes no alcance.","efeito":[]},{"nome":"Ataque Redirecionado","categoria":"Técnica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["habilidade",["Evasão"]],"descricao":"Quando um oponente errar um ataque corporal contra você, você pode direcionar o ataque dele para outro alvo. O novo alvo precisa estar adjacente a você ou ao oponente que errou o ataque. Esse ataque acerta automaticamente – sem chance de errar ou de ser um sucesso decisivo. Esta Habilidade só pode ser usada uma vez por rodada.","especial":"","resumo":"Redireciona um ataque corporal para outro alvo adajcente.","efeito":[]},{"nome":"Ataque Simultâneo","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Combate em Grupo"]],"descricao":"Você está acostumado a lutar em grupo e sabe como abrir a guarda de um adversário para que seus aliados possam atingi-lo. Faça um ataque corporal contra um oponente. Se acertar, todos aliados que estiverem adjacentes ao mesmo oponente poderão fazer um ataque corporal normal contra ele imediatamente.","especial":"","resumo":"Ataque CaC, se acertar, aliados adjacentes também atacam o alvo.","efeito":[]},{"nome":"Atletismo","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você treinou exercícios físicos durante muito tempo – seja por vontade própria ou por necessidade – e é muito bom nisso. Você recebe +2 em testes para correr, escalar, nadar, se equilibrar, prender o fôlego ou qualquer outra atividade que exija força física e coordenação motora. Esse bônus também se aplica em testes para evitar ser derrubado.","especial":"","resumo":"Correr, Escalar, Equilibrar, Fôlego, Não ser derrubado, etc. +2","efeito":[]},{"nome":"Atravessar Janela Mágica","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":16, "requisitos":["nivel",5,"habilidade",["Janela Mágica"]],"descricao":"Desenhando um Selo Místico sobre uma Janela Mágica, você cria um portal diretamente a frente da criatura, objeto ou superfície que você estiver observando, que pode ser atravessado em ambas as direções. Esse Selo Místico dura tanto tempo quanto a Janela Mágica sobre a qual for desenhado.","especial":"","resumo":"Abre uma segunda janela mágica, conectando-a à primeira.","efeito":[]},{"nome":"Atropelar","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Ataque do Búfalo"]],"descricao":"Quando usar Ataque do Búfalo, se o alvo for derrubado ele sofre um dano adicional igual a 6/Contusão para cada 100 quilos de peso que você tiver.","especial":"","resumo":"Se Ataque do Búfalo derrubar o alvo, +6/Contusão por cada 100kg seus.","efeito":[]},{"nome":"Audácia","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você enfrenta ameaças e situações de perigo com entusiasmo. Sempre que estiver frente à uma situação de risco eminente – saltar entre duas bordas de um precipício, equilibrar-se em uma corda sobre um rio de lava, entrar em um combate ou qualquer situação em que você possa potencialmente perder a vida (ou pelo se ferir seriamente), você recupera imediatamente 10 Pontos de Vida ou 10 Pontos de Mana, à sua escolha. Essa Habilidade só pode ser usada uma vez para cada situação de risco, e apenas quando o risco se apresentar – não depois da sua primeira ação em um combate ou depois decair, por exemplo.","especial":"","resumo":"Recupera 10 Pontos de Vida ou Mana. Uma vez por situação de risco.","efeito":[]},{"nome":"Aura Congelante","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Congelar"]],"descricao":"Desenhando uma Runa Arcana sobre um objeto ou criatura, você faz com que o alvo passe a emitir uma aura de frio intensa que causa dano igual a <a class=\'frio\'> 6 </a>/Frio em todas as criaturas ao seu redor. No momento em que desenha a Runa dessa Magia, o conjurador deve escolher qual será o alcance da aura, até um máximo de 3 metros. Se a magia tiver como alvo um objeto inanimado, ela congela até 100 litros ou 100 quilos de material – que então passa a emitir a aura de frio ao seu redor. Além disso, objetos inanimados dentro da área de efeito da aura tendem a se congelar se ficarem dentro da área de efeito por 5 ou mais turnos, enquanto criaturas que sofram o dano da aura por 5 ou mais turnos ficam Enregeladas enquanto estiverem dentro da área de efeito da magia. Esta Runa Arcana dura por 1 minuto, mas o gelo criado é permanente e descongela em velocidade normal depois que a Runa se dissipar.","especial":"","resumo":"Alvo emite aura de frio (<a class=\'frio\'>6</a>/Frio) congelante (5t) em até 3 metros. 1min.","efeito":[]},{"nome":"Aura de Cura 1","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":11, "requisitos":["habilidade",["Curar Ferimentos 1"]],"descricao":"Você desenha um Selo Místico sobre sí mesmo que recupera <a class=\'cura\'> 10 </a> Pontos de Vida. Todas as criaturas vivas que estiverem à uma distância em metros de você igual à sua Determinação quando você desenha este selo também são afetados por ele. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Cura <a class=\'cura\'>10</a> num raio de Determinação metros.","efeito":[]},{"nome":"Aura de Cura 2","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":13, "requisitos":["nivel",5, "habilidade",["Aura de Cura 1"]],"descricao":"Você desenha um Selo Místico sobre sí mesmo que recupera <a class=\'cura\'> 30 </a> Pontos de Vida. Todas as criaturas vivas que estiverem à uma distância em metros de você igual à sua Determinação quando você desenha este Selo também são afetados por ele. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Cura <a class=\'cura\'>30</a> num raio de Determinação metros.","efeito":[]},{"nome":"Aura de Guerra","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo da Guerra"]],"descricao":"Você foi abençoado por Hadorn com uma aura que melhora as capacidades de combate da sua tropa! Quando você estiver engajado em combate com pelo menos mais um aliado e estiver lutando com pelo menos duas outras criaturas, você e todos os seus aliados que estejam a uma quantidade de metros iguais à sua Determinação recebem +1 em todas as suas rolagens de ataque e +1 para conjurar magias que causem dano. Esse efeito cessa imediatamente se só houver um inimigo ativo no combate ou se você não tiver nenhum aliado lutando ao seu lado.","especial":"","resumo":"Igualdade/desvantagem numérica: ataques e magias de dano +1, raio Determinação metros.","efeito":[]},{"nome":"Aura de Paz","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo da Paz"]],"descricao":"Você emana uma poderosa aura de paz, fazendo com que todas as criaturas vivas ao seu redor resistam em recorrer à violência. Sempre que uma criatura estiver em uma distância em metros de você igual à sua Determinação, ela precisa realizar um teste de Vontade (dificuldade igual à sua Determinação) para poder realizar qualquer ação que possa causar qualquer tipo de dano – tanto a ela mesma ou a outras criaturas. Esses efeitos não se aplicam a mortos-vivos, demônios ou construtos de forma alguma – essas criaturas ignoram os efeitos desta Habilidade, e todas as criaturas ignoram os efeitos dessa Habilidade em relação a mortos-vivos, demônios e construtos. Além disso, os efeitos dessa Habilidade deixam de ter efeito sobre criaturas dentro da área de efeito que sofram dano.","especial":"","resumo":"Vontade x Determinação para provocar dano, raio Determinação metros.","efeito":[]},{"nome":"Austeridade","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Código da Honestidade"]],"descricao":"Sua integridade e retidão são tão inabaláveis que é impossível para outros influenciarem suas decisões. Você é imune a efeitos mentais (mas não Ilusões ou efeitos de Medo) e tentativas de influenciar sua opinião com persuasão e manipulação.","especial":"","resumo":"Imune a efeitos mentais (mas não Medo ou Ilusões), persuasão e manipulação.","efeito":[]},{"nome":"Balofo","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é um exímio exemplar dos Metadílios: rotundo e macio. Graças à isso, quando você cai, tende a rolar e quicar ao invés de se espatifar, sofrendo metade do dano por quedas. Além disso, é relativamente fácil para você escorregar de dentro de um aperto. Você rola +1d6 para escapar de amarras, algemas e adversários que o estejam constringindo.","especial":"","resumo":"Metade de dano por queda. Escapar +1d6.","efeito":[]},{"nome":"Banir","categoria":"Técnica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":["nivel",5, "habilidade",["Código da Justiça"]],"descricao":"Sua crença na ordem natural das coisas é tão arrebatadora que você é capaz de purgar criaturas geradas do caos. Tocando uma criatura do tipo morto-vivo, demônio ou espírito, você pode destruí-las (no caso de mortos-vivos e espíritos) ou bani-las de volta aos seus planos de origem (no caso de demônios) a menos que passem em um teste de Vontade (Dificuldade igual à sua Determinação). Criaturas desses tipos com Mente Vazia não podem resistir a esse efeito e são automaticamente destruídas ou banidas.","especial":"","resumo":"Toque Demônio, Morto-Vivo ou Espírito: VON[<a class=\'determinacao\'> </a>] ou são banidos/destruídos.","efeito":[]},{"nome":"Banir a Perversão","categoria":"Padrão","tipo":"Reação","mana":20,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Quebrar a Defesa Sombria"]],"descricao":"Sempre que realizar um ataque corporal contra criaturas dos tipos Amaldiçoado, Demônio, Espírito e Morto-vivo, você pode declarar que aquele ataque foi um sucesso decisivo automático. Você deve declarar o uso desta Habilidade antes de realizar sua rolagem de ataque.","especial":"","resumo":"vs Amaldiçoado,Demônio,Morto-Vivo,Espírito: crítico automático.","efeito":[]},{"nome":"Barganha","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é um praticante das artes da negociação, oratória, retórica e sofisma. Você pode rolar +1d6 em todos os seus testes que envolvam comércio e outras negociações.","especial":"","resumo":"Comércio e Negociação +1d6.","efeito":[]},{"nome":"Barreira de Gelo","categoria":"Magia","tipo":"Reação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Parede de Gelo","Mente Disciplinada"]],"descricao":"Esta Runa Arcana desenvolvida especificamente para defesa tem um desenho simples e rápido de fazer, e gera uma fina camada de gelo que absorve danos de ataques direcionados contra o conjurador. Sempre que for alvo de um ataque ou magia que cause dano ou perda de vida, você pode utilizar esta Runa. Ela absorve uma quantidade de dano igual à sua Determinação. Se o ataque causar dano por Frio, a barreira absorve todo o dano daquele ataque. Se o ataque causar dano por Fogo, a barreira absorve apenas metade da Determinação do conjurador (arredondado para cima) de dano. Essa Habilidade pode ser usada uma vez por rodada. Essa Runa Arcana se dissipa assim que seus efeitos forem desencadeados.","especial":"","resumo":"Diminui Determinação de dano mágico, metade para Fogo e ignore Frio.","efeito":[]},{"nome":"Barriga Cheia","categoria":"Característica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você descansa muito melhor depois de comer tanto quanto possível. Você recupera o dobro de Pontos de Mana e de Pontos de Vida por repouso se descansar logo após uma refeição farta.","especial":"","resumo":"Recupera o dobro de Vida e Mana no repouso após refeição.","efeito":[]},{"nome":"Benção de Ellenis","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é capaz de se comunicar com qualquer Besta do tipo Mamífero, Ave, Réptil ou Peixe. Essa comunicação é rudimentar, baseada nas capacidades da criatura em questão. Além disso, você receber +2 em todas as rolagens envolvendo essas criaturas e poder alterar o temperamento delas em 1 passo (Furioso ou Cruel para Agressivo, Agressivo para Sobrevivente, Sobrevivente para Pacífico e Pacífico para Covarde ou vice-versa) com um teste de Vontade (Dificuldade igual à Determinação do alvo) – esse efeito não funciona em animais com temperamento Servo ou Protetor. Animais selvagens só irão aceitar “conversar” se tiverem temperamento pacífico ou sobrevivente, a menos que estejam aprisionados ou encurralados de alguma forma.","especial":"","resumo":"Comunicação com mamíferos, aves, répteis e peixes. Lidar com animais +2.","efeito":[]},{"nome":"Benção de Lathellanis","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"A proteção de Lathellanis é evidente em você, assim como uma pálida sombra da astúcia da divindade da natureza. Você é imune à todas as doenças de origem natural ou mágica, Dreno de Energia e efeitos que causem Envelhecimento (de qualquer tipo ou origem). Além disso, Você rola +1d6 em todos os seus testes de Inteligência para perceber e rastrear alvos.","especial":"","resumo":"Imune a doenças, dreno de Vida e envelhecimento. Rastrear +1d6.","efeito":[]},{"nome":"Berserkir","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["Vontade 4","habilidade",["Fúria Bestial"]],"descricao":"Você é um escolhido do Urso como seu protegido, e é amparado pela resistência dele quando evoca a Fúria Bestial. Enquanto estiver em Fúria Bestial, você fica Resistente à Corte, Resistente à Perfuração e Resistente à Contusão. Você não pode estar usando armaduras ou escudos para que essa Habilidade tenha efeito, já que o Urso espera que você considere a proteção dele acima de qualquer proteção mundana.","especial":"Se você tiver um Espírito Animal que não seja o Urso, você não pode possuir esta Habilidade. Se você possuir esta Habilidade, você só pode escolher o Urso como seu Espírito Animal.","resumo":"Se em Fúria Bestial sem proteção, resiste Corte, Contusão e Perfuração.","efeito":[]},{"nome":"Bestializar","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":11, "requisitos":["habilidade",["Benção de Ellenis"]],"descricao":"Desenhando um Selo Místico sobre qualquer aliado do tipo Besta, Humanóide ou Troglodita, ele recebe +2 de Força e Agilidade e desenvolve garras e dentes afiados (dano igual à Força +2/Corte) pela duração do efeito. Esse Selo Místico dura 1 minuto.","especial":"Desenhando um Selo Místico sobre qualquer aliado do tipo Besta, Humanóide ou Troglodita, ele recebe +2 de Força e Agilidade e desenvolve garras e dentes afiados (dano igual à Força +2/Corte) pela duração do efeito. Esse Selo Místico dura 1 minuto.","resumo":"Besta, Humanóide ou Troglodita: Força e Agilidade +2, Garras & Dentes. 1m.","efeito":[]},{"nome":"Bola de Fogo","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":12, "requisitos":["habilidade",["Inflamar"]],"descricao":"Desenhando uma runa Arcana no ar você projeta uma esfera de chamas de 20 cm de diâmetro contra um alvo na sua linha de visão. A esfera explode ao atingir o alvo, causando dano igual a <a class=\'fogo\'>20</a>/Fogo nele e <a class=\'fogo\'>10</a>/Fogo em tudo e todos em até 2 metros dele. Objetos inanimados inflamáveis atingidos por essa magia tendem a entrar em combustão. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"<a class=\'fogo\'>20</a>/Fogo em alvo e <a class=\'fogo\'>10</a>/Fogo num raio de 2 metros.","efeito":[]},{"nome":"Bons Frutos","categoria":"Magia","tipo":"Ação","mana":0,"dificuldade":8, "requisitos":["habilidade",["Sabedoria Selvagem"]],"descricao":"Desenhando um Selo Místico sobre uma planta você faz com que ela desenvolva flores, frutas ou raízes. Uma planta só vai gerar flores ou frutos se ela normalmente for capaz disso. Utilizando essa magia sobre uma planta comestível, é possível alimentar um número de pessoas igual à sua Vontade. Um personagem que consuma uma dessas plantas recupera o dobro de Pontos de vida e Mana por descanso durante as próximas 6 horas. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Planta desenvolve frutos, recuperação duplicada em repouso.","efeito":[]},{"nome":"Braços Extras 1","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",1],"descricao":"Você possui um par de braços a mais. Estes braços não são hábeis o suficiente para realizar ataques, mas podem segurar itens (incluindo escudos) e auxiliam em tentativas de segurar e agarrar com firmeza, oferecendo um bônus de +1 em seus testes de agarrar, apertar e escalar. Além disso, quando apertar um alvo você causa 2 pontos de dano adicionais. Esses bônus se acumulam com os bônus de Abraço de Pedra.","especial":"Você só pode selecionar essa Habilidade durante a criação do personagem.","resumo":"Agarrar, Apertar, Escalar +1. Dano de Apertar +2.","efeito":["maos",2]},{"nome":"Braços Extras 2","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Braços Extras 1"]],"descricao":"Você treinou com seus braços extras para ser hábil com eles. Você pode realizar um ataque extra por turno com seu par extra de braços, mas não pode utilizar Habilidades de Ação nos turnos em que fizer isso. Além disso, quando apertar um alvo você causa 2 pontos de dano adicionais. Esse bônus de dano se acumula com os bônus de Abraço de Pedra e Braços Extras 1.","especial":"","resumo":"Ataque com braços extras, sem habilidade de ação. Dano de Apertar += 2.","efeito":[]},{"nome":"Bravura Selvagem 1","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você confia mais nas suas habilidades naturais do que em armaduras para se defender. Quando não estiver usando armadura, você recebe +2 em sua Defesa. Quando escolhe essa Habilidade, você deve escolher se este será um bônus de Bloqueio ou Esquiva. Essa escolha é permanente e não pode ser mudada mais tarde.","especial":"","resumo":"Bloqueio +2 ou Esquiva +2 quando sem armadura. Fixo.","efeito":["bloqueio!","+2*", ":+2 em Bloqueio ou Esquiva quando sem armadura.", "esquiva!","+2*", ":+2 em Bloqueio ou Esquiva quando sem armadura."]},{"nome":"Bravura Selvagem 2","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Bravura Selvagem 1"]],"descricao":"Você veste sua bravura em batalha melhor do que alguns vestem armaduras. O Bônus Defesa conferido por Bravura Selvagem 1 aumenta para +4 e você pode escolher se esse bônus será de Bloqueio ou Esquiva no início de cada um de seus turnos, como uma ação livre.","especial":"","resumo":"Bloqueio +4 ou Esquiva +4, decida no começo do turno.","efeito":["bloqueio!","+4*", ":+4 em Bloqueio ou Esquiva quando sem armadura.", "esquiva!","+4*", ":+4 em Bloqueio ou Esquiva quando sem armadura."]},{"nome":"Brigão","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seus ataques desarmados causam +2 de dano.","especial":"","resumo":"Ataques desarmados causam +2 de dano.","efeito":["modificador","dano",[],[-1],[],[],2]}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_habilidadesC() {
    return '{"habilidade":[{"nome":"Cabeça Dura","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é extremamente teimoso e é muito difícil dissuadi-lo de uma opinião, intimidá-lo, controlar sua mente ou manipulá-lo de qualquer forma. Você tem Vontade +1 e Determinação +2.","especial":"","resumo":"Vontade +1 e Determinação +2.","efeito":["von+",1,"determinação+",2]},{"nome":"Caça Sobrenatural","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você recebe +2 em todas as suas rolagens relativas a criaturas dos tipos Amaldiçoado, Demônio, Espírito e Morto-vivo. Você também causa +3 de dano em todos os seus ataques contra essas criaturas.","especial":"","resumo":"Sobre Amaldiçoado, Demônio, Morto-Vivo ou Espírito +2. Dano +3 contra eles.","efeito":[]},{"nome":"Caçador das Cordilheiras","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você se especializou em combater as criaturas mais comuns das Cordilheiras dos Cristais e das terras ao redor. Você sempre causa +2 pontos de dano em todos os ataques contra Orcs, gigantes e artrópodes (insetos e aracnídeos). Além disso, você recebe +2 em todos os seus testes relacionados a essas criaturas.","especial":"","resumo":"Sobre Orcs, Gigantes e Artrópodes +2. Dano +2 contra eles.","efeito":[]},{"nome":"Caçador de [Criatura]","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Armadilheiro"]],"descricao":"Você se especializou em caçar um tipo de criatura. Escolha entre Humanoides, Trogloditas, Bestas ou Esfinges. Você sempre causa +2 pontos de dano em todos os ataques contra este tipo de criatura. Além disso, você recebe +2 em todos os seus testes relacionados a esse tipo de criatura.","especial":"","resumo":"Escolha Humanoides, Trogloditas, Bestas ou Esfinges: Sobre +2, Dano +2.","efeito":[]},{"nome":"Caçador de [Monstro]","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Armadilheiro"]],"descricao":"Escolha um monstro (orc, troll, ogro, goblin ou qualquer outro monstro) quando comprar esta habilidade. Você sempre causa +6 de dano em todos os ataques contra este tipo de monstro e rola +1d6 em testes relacionados a eles.","especial":"","resumo":"Escolha um monstro. Sobre +1d6, Dano +6.","efeito":[]},{"nome":"Caminhada Fantasma","categoria":"Característica","tipo":"Ação","mana":40,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Comunhão com Espíritos"]],"descricao":"Você tornou-se um canal entre o mundo físico e o mundo espiritual. Você (e tudo o que você estiver carregando) pode tomar a forma de um espírito, adquirindo a Habilidade Corpo Intangível – você não tem peso, pode voar ao seu Deslocamento normal em qualquer direção e atravessar objetos sólidos. Você pode materializar partes do seu corpo, permitindo que você ataque ou conjure magias, e a menos que escolha o contrário, você é Imune à Corte, Perfuração e Contusão. Magias que causem danos desses tipos, no entanto, afetam você normalmente. Além disso, você pode ver, ouvir e tocar espíritos ou criaturas com a Habilidade Corpo Intangível enquanto estiver sob efeito dessa Habilidade. Este efeito dura um número de minutos igual à sua Determinação. Se o efeito terminar enquanto você estiver dentro de algum material sólido, você é expelido para fora e sofre dano igual a 30/Contusão.","especial":"Se você tiver Imunidade Espiritual, os efeitos dessa Habilidade não funcionam enquanto você estiver sob efeito de Caminhada Fantasma.","resumo":"Adquire Corpo Intangível. Imune a Corte, Cont. e Perf. Pode atacar e conjurar.","efeito":[]},{"nome":"Caminhada Mágica","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":9, "requisitos":[],"descricao":"Desenhando um Selo Místico sobre uma criatura viva, você permite que ela possa caminhar sobre qualquer tipo de superfície (incluindo líquidos), paredes ou teto e não sofre nenhum tipo de redutor ou penalidade de movimentação por terrenos difíceis ou acidentados. Finalmente, o alvo pode escolher á vontade se vai deixar rastros ou não enquanto esta runa estiver ativa sobre ele. Esse Selo Místico dura 1 hora.","especial":"","resumo":"Alvo pode caminhar sobre qualquer superfície sem deixar rastros. 1 hora.","efeito":[]},{"nome":"Camuflagem","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Furtivo"]],"descricao":"Você pode se camuflar em florestas usando galhos, folhas e lama, ou nas sombras de becos e ruas usando uma capa preta e talvez fuligem ou barro. Quando puder usar o ambiente a seu favor dessa forma, você pode rolar +1d6 nos testes para se esconder.","especial":"","resumo":"Camuflagem +1d6.","efeito":[]},{"nome":"Canção da Provocação","categoria":"Música","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Você canta uma música que contém teor ofensivo para seus adversários, deixando eles irritados e desconcentrados em combate. Escolha uma profissão, raça, cultura ou classe social. Todas as criaturas do grupo selecionado que puderem entende-lo rolam um confronto de Vontade contra você. Aqueles que tiverem um resultado menor que o seu ficam com -2 na Defesa enquanto você continuar a tocar essa Música. Este é um efeito mental.","especial":"","resumo":"Efeito Mental. Profissão, raça, cultura ou classe. Vontade x Vontade. Defesa -2.","efeito":[]},{"nome":"Canção da Sereia","categoria":"Música","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Eloquente"]],"descricao":"Você canta uma música melancólica capaz de deixar aqueles que a escutam enfeitiçados. Todos que estiverem a até 10 metros de você e puderem ouvir a canção rolam um confronto de Vontade contra você a cada turno enquanto você continuar cantando. Alvos que tenham um resultado menor do que o seu não poderão realizar qualquer ação exceto tentar se aproximar de você enquanto você estiver cantando – ou ficar imóvel lhe observando se estiverem a 1 metro ou menos de você. Esse efeito é cancelado e o alvo fica imune aos seus efeitos até o fim do combate se a vítima sofrer algum dano enquanto estiver sob efeito dessa Música. Enquanto estiver sob o efeito dessa Música o alvo é considerado Desprevenido para todos os seus aliados – mas não para você. Este é um efeito mental.","especial":"","resumo":"Efeito Mental. 10 metros. VONxVON: Apenas se aproximar, por turno.","efeito":[]},{"nome":"Canção Desconcentrante","categoria":"Música","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Melodia do Enjoo"]],"descricao":"Você canta uma canção com tom jocoso e com uma melodia irritante que prende a atenção dos ouvintes e não permite que eles se concentrem. Todos que estiverem a até 10 metros de você e puderem ouvir a canção rolam um confronto de Vontade contra você a cada turno enquanto você continuar cantando. Alvos que tenham um resultado menor do que o seu são considerados Distraídos até o final do seu próximo turno. Este é um efeito mental.","especial":"","resumo":"Efeito Mental. 10 metros. VONxVON: Distraído, por turno.","efeito":[]},{"nome":"Canção Desesperadora","categoria":"Música","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":["habilidade",["Canção da Provocação"]],"descricao":"Você canta uma música que fala sobre a morte, destruição e derrotas dos seus adversários, instilando medo em seus corações. Escolha uma profissão, raça, cultura ou classe social. Todas as criaturas do grupo escolhido que puderem entendê-lo e ouvirem sua música por pelo menos 2 turnos rolam um confronto de Vontade contra você. Aqueles que tiverem um resultado menor que o seu precisam usar sua ação de movimento para tentar se afastar de você enquanto você continuar a tocar essa Música. Este é um efeito de medo.","especial":"","resumo":"Efeito Mental. 10m. Profissão/Raça/Cultura/Classe. VONxVON(2x): Afastar,por turno.","efeito":[]},{"nome":"Canção do Réquiem","categoria":"Música","tipo":"Ação","mana":80,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Virtuoso","Canção Desesperadora"]],"descricao":"Você toca uma música que fala sobre a morte, derrota e fracasso dos ancestrais do alvo e do sofrimento e amarguras que ele ainda provará no futuro. A cada turno em que você canta essa canção e o alvo estiver a menos de 10 metros de você e puder escutá-lo, ele rola um Confronto de Vontade contra você. O alvo tem sua moral tão profundamente atingida pela canção que perde 20 Pontos de Mana sempre que rolar esse Confronto (independente do resultado), e se ficar sem Pontos de Mana devido aos efeitos dessa canção, ele imediatamente entra em um estado de profundo pesar e tristeza, e se entregará sem resistir. Além disso, se tiver um resultado menor do que o seu na rolagem, ele é tomado por um profundo pesar e sofrimento decorrente dos desgostos que já viveu, além das perspectivas de um futuro negro, perdendo 50 Pontos de Vida. Este é um efeito mental.","especial":"","resumo":"Efeito Mental. 10m. VonXVon:dano 50, depressão. Mana-20 por turno.","efeito":[]},{"nome":"Canção do Triunfo","categoria":"Música","tipo":"Ação","mana":25,"dificuldade":0, "requisitos":["habilidade",["Melodia do Repouso"]],"descricao":"Você canta uma música relembrando os êxitos e vitórias do grupo, seus feitos mais memoráveis e exaltando seus laços de amizade, aumentando a moral do grupo. Todos os seus aliados (incluindo você) que puderem ouvir essa canção recuperam 5 Pontos de Vida por turno, enquanto você continuar a tocar essa Música.","especial":"","resumo":"Você e aliados recuperam 5 pontos de vida por turno.","efeito":[]},{"nome":"Canção Exultante","categoria":"Música","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":["habilidade",["Melodia do Repouso"]],"descricao":"Você canta uma música exaltando as capacidades e qualidades dos seus aliados, deixando-os confiantes. Todos os seus aliados (incluindo você) que puderem ouvir essa canção recebem +1 em todos os seus testes enquanto você continuar a tocar essa Música.","especial":"","resumo":"Você e aliados recebem +1 em todos os testes.","efeito":[]},{"nome":"Cariátide","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":12, "requisitos":[],"descricao":"Você pode dar movimentos para uma estátua desenhando um Selo Místico sobre ela. A estátua precisa ter uma forma aproximadamente humanoide e toda feita de um mesmo material. O custo da magia depende do tamanho da estátua: 20 Pontos de Mana para uma estátua pequena, 40 Pontos de Mana para uma estátua média e 80 Pontos de Mana para uma estátua grande. A estátua terá as características de um Golem do material e tamanho apropriados. Esse Selo Místico dura 1 Minuto.","especial":"","resumo":"Anima Golem por 1 min. Mana: 20 Pequeno, 40 Médio, 80, Grande.","efeito":[]},{"nome":"Cascos Ágeis","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é mais ágil e veloz do que a maioria dos Faunos. Você tem Agilidade +1, Deslocamento +1 e a distância dos seus saltos é aumentada em 1 metro.","especial":"","resumo":"Agilidade +1. Deslocamento +1. Salto +1 metro.","efeito":["agi+",1,"deslocamento+",1]},{"nome":"Cavaleiro Experiente","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você passou muito tempo com animais de montaria e conhece seus hábitos, características e como lidar com eles. Você recebe +1d6 em todas as suas rolagens referentes à criaturas com a Habilidade Montaria – incluindo cavalgar, treinar e atacar.","especial":"","resumo":"Animais de Montaria +1d6.","efeito":[]},{"nome":"Celeridade","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["raca",["Elfo","Faen","Levent","Metadílio","Tailox"]],"descricao":"Você é mais veloz e ágil do que a maioria dos outros membros da sua raça. Você tem Agilidade +1 e sempre que uma Habilidade lhe conceder um bônus de Esquiva, aquele bônus é aumentado em +1.","especial":"","resumo":"Agilidade +1. +1 para cada bônus de Esquiva.","efeito":["agi+",1,"esquiva!","+1#",": +1 em cada bônus de Esquiva."]},{"nome":"Chamado do Alfa","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Benção de Ellenis"]],"descricao":"Você solta um poderoso uivo (ou uma poderosa vibração sob a água) que será entendida como um chamado irresistível para os animais que o ouvirem. Você consegue atrair todas as Bestas (Escolha entre Mamífero, Ave, Réptil ou Peixe) do tipo escolhido que estejam a até 500 metros por ponto de Força que você tenha. Os animais não estarão sob seu controle, mas se sentirão inclinados a ajudá-lo dentro de suas capacidades – animais com temperamento pacífico ou covarde não irão entrar em combate, mas animais sobreviventes ou agressivos não terão problemas com isso.","especial":"Você pode refinar o tipo específico de animal (“Ursos”, “Marsupiais”, “Batráquios”) ou até mesmo um animal específico(“Aquele esquilo com quem eu conversei ontem”, “meu Companheiro Animal”, “O cão do guarda-caça”) quando conjurar essa magia.","resumo":"Convoca todas as Bestas de um tipo escolhido num raio de 500 metros.","efeito":[]},{"nome":"Chamas de Hou","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo da Forja"]],"descricao":"As chamas de Hou queimam fortes dentro de você, e se manifestam sempre que você clama pela divindade da forja! Você adiciona uma quantidade de dano por Fogo igual à sua Vontade sempre que utilizar uma Habilidade que cause dano por Fogo e em qualquer Habilidade do tipo Magia que cause qualquer tipo de dano ou perda de vida.","especial":"","resumo":"","efeito":[]},{"nome":"Chamas Internas 1","categoria":"Característica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"A vontade de Hou incendeia seu coração e fortalece seu espírito. Você produz um enorme calor no interior do seu corpo, que queima instantaneamente qualquer tipo de substância estranha (como venenos, álcool e infecções) e cauteriza feridas abertas, cessando efeitos de sangramento.","especial":"","resumo":"Imune a substâncias estranhas (veneno, álcool, infecções) e sangramento.","efeito":[]},{"nome":"Chamas Internas 2","categoria":"Característica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Chamas Internas 1"]],"descricao":"O Vigor de Hou incendeia seu espírito e encandece seu corpo. Você é capaz de produzir tanto calor em seu interior que se torna incandescente durante 1 minuto, ficando Imune à Fogo (ou, se você já possui Imunidade à Fogo, você passa a absorver fogo, recuperando uma quantidade de Pontos de Vida iguais à qualquer quantidade de dano por fogo que sofreria). Além disso, qualquer um que toca-lo (ou que seja atingido por seus ataques desarmados) sofre dano igual à <a class=\'fogo\'> 6 </a>/Fogo.","especial":"","resumo":"Toque <a class=\'fogo\'>6</a>/Fogo. Fogo: Resiste -> Imune -> Absorve. 1 min.","efeito":[]},{"nome":"Chifres Poderosos","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você pode desferir uma marrada poderosa com seus chifres, causando dano igual à Força +4/Contusão. Qualquer alvo atingido por um ataque feito com seus chifres precisa vencer um confronto de Força contra você ou será derrubado. Se o alvo for derrubado, ele ficará Atordoado por 1 turno.","especial":"","resumo":"Marrada. Se derrubar (FORxFOR) o alvo fica atordoado por 1 turno.","efeito":["+ataque","Chifres","Contusão","CaC",true,4]},{"nome":"Chuva de Flechas","categoria":"Técnica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":["habilidade",["Flechas Rápidas"]],"descricao":"Você pode atirar até 4 flechas em um só ataque em múltiplos oponentes. Faça uma rolagem para cada flecha, que devem ter alvos diferentes.","especial":"","resumo":"Dispare uma flecha contra até quatro alvos.","efeito":[]},{"nome":"Chuva de Flechas 2","categoria":"Técnica","tipo":"Ação","mana":40,"dificuldade":0, "requisitos":["nivel",5, "habilidade",["Chuva de Flechas"]],"descricao":"Você pode atirar até 6 flechas em um só ataque. Faça uma rolagem para cada flecha, que podem ter alvos diferentes.","especial":"","resumo":"Dispare seis flechas.","efeito":[]},{"nome":"Círculo da Proteção","categoria":"Magia","tipo":"Ação","mana":40,"dificuldade":13, "requisitos":["nivel",5,"habilidade",["Conjurar Broquel"]],"descricao":"Você desenha um Selo Místico no ar que se transforma em uma barreira de energia centrada em você e com um diâmetro igual á sua Vontade. A barreira é imaterial, indestrutível, imóvel, translúcida e bloqueia qualquer magia (tanto de fora para dentro quanto de dentro para fora). Além disso, qualquer demônio, morto-vivo ou espírito perde 20 Pontos de Vida A cada turno que começar dentro da barreira. O Selo Místico dura tanto tempo quanto você se mantiver dentro da barreira e concentrado em mantê-la.","especial":"","resumo":"Barreira (<a class=\'vontade\'> </a> m) contra magia. Dano 20 em Demônio,Morto-Vivo,Espírito/turno.","efeito":[]},{"nome":"Citrinitas","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Espagíria"]],"descricao":"Você é um especialista na fabricação e uso de Extratos e recebe +1d6 em rolagens para produzir esse tipo de poção. Além disso, extratos produzidos por você que causem dano causam 10 pontos de dano a mais, e aqueles que tiverem um teste para serem resistidos tem sua dificuldade aumentada em +2.","especial":"","resumo":"Extratos: Produzir +1d6, Dano +10, Alvos tem Dif. +2 para resistir. ","efeito":[]},{"nome":"Clarividência","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Fechando os olhos e concentrando-se em uma criatura, item ou superfície onde haja um Selo Místico que você tenha desenhado, você é capaz de ver e ouvir o que estiver ocorrendo nos arredores daquele Selo. Você vê e ouve com suas próprias capacidades, e não pode usar seus outros sentidos para perceber o ambiente ao redor do Selo. Tanto Selos usados para conjurar magias ou Selos Místicos simples podem ser usados como alvos dessa Habilidade. Essa Habilidade funciona por tanto tempo quanto você se concentrar, mas se o Selo que você estiver observando for dissipado esse efeito é cancelado imediatamente.","especial":"","resumo":"Ouve através de qualquer selo que tenha desenhado.","efeito":[]},{"nome":"Código da Coragem","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Um Paladino nunca teme a morte, principalmente na proteção dos indefesos. Você nunca pode fugir de uma luta justa e deve sempre proteger os mais fracos – com a vida, se necessário. Você é imune a todos os efeitos de Medo.","especial":"","resumo":"Imune a efeitos de Medo.","efeito":[]},{"nome":"Código da Cortesia","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você se porta de maneira cortês e exala uma aura de autoconfiança e nobreza que inspira aqueles ao seu redor. Você sempre trata os nobres com o respeito que eles merecem e os seus inferiores com a cortesia devida. Você recebe Vontade +1, todos os seus aliados num raio de 1 metro por ponto de Vontade que você tiver também recebem +1 na Vontade.","especial":"","resumo":"Você e aliados num raio de VON metros recebem Vontade +1.","efeito":["von+",1]},{"nome":"Código da Honestidade","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você sempre cumpre suas promessas, não importa quão difícil isso seja, e preza a verdade acima de tudo, emanando uma aura de honestidade que deixa desconfortáveis aqueles que escondem a verdade. Você sempre saberá quando alguém estiver mentindo. Nem sempre omitir é mentir, depende das intenções da pessoa que está omitindo. Mentir é passar informações erradas propositalmente.","especial":"","resumo":"Você sempre sabe quando alguém está mentindo.","efeito":[]},{"nome":"Código da Justiça","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você confia nas leis para se apoiar e possui uma crença inabalável na ordem. Você sempre respeita as leis vigentes nos locais onde está e não permite que outros as descumpram impunemente. Sua fé na ordem faz com que criaturas geradas no caos se sintam repelidas por você. Todo demônio, morto-vivo ou espírito deve ser bem sucedido em um teste Vontade (Dificuldade igual à sua Determinação) ou não será capaz de se aproximar ou atacar você. Criaturas desses tipos com Mente Vazia fazem seus testes de baseados em Força, e se falhar serão completamente destruídas.","especial":"","resumo":"Repele todo Demônio, Morto-Vivo e Espírito que falhar em VonXDeterminação.","efeito":[]},{"nome":"Código da Lealdade","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você nunca ataca um combatente que já está derrotado, nem luta ou permite que outros lutem de forma injusta ou com deslealdade, e jamais trai ou permite que outros traiam aqueles que confiam em você. Você recupera o dobro de Pontos de Vida (por descanso, através de poções, magias, etc.) e é imune a venenos e doenças naturais ou mágicas.","especial":"","resumo":"Recupera o dobro de vida com descanso. Imune a venenos e doenças.","efeito":[]},{"nome":"Comando do Alfa","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você dá um comando para um de seus Companheiros Animais (pule, resista, viva, morda, etc.) e o alvo realiza imediatamente aquela ação. A ordem não pode ser negativa (falhe, morra, caia, etc.). O alvo ainda rola seu teste, apenas para verificar a possibilidade de um sucesso crítico – qualquer outro resultado (mesmo uma falha crítica) é considerado um sucesso normal.","especial":"","resumo":"Comande um Companheiro Animal. Ele testa, mas não pode falhar.","efeito":[]},{"nome":"Comando Heroico","categoria":"Técnica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Motivar"]],"descricao":"Você ordena uma palavra a um aliado (pule, resista, viva, acerte, etc.) e o alvo realiza imediatamente aquela ação. A ordem não pode ser negativa (falhe, morra, caia, etc.). O alvo ainda rola seu teste normalmente, apenas para verificar a possibilidade de um sucesso crítico – qualquer outro resultado (mesmo uma falha crítica) é considerado um sucesso normal.","especial":"","resumo":"Comande um Aliado. Ele testa, mas não pode falhar.","efeito":[]},{"nome":"Combate com Duas Armas 1","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você treinou para usar duas armas em combate de forma eficiente. Você pode fazer um ataque para cada arma que estiver segurando, desde que uma delas tenha um FN igual à metade (ou menos) do que a arma mais pesada que você estiver usando ou ambas tenham uma FN total igual à sua Força.","especial":"","resumo":"Duas armas: A1 e A2. A1.FN > A2.FN/2 ou Força >= A1.FN + A2.FN.","efeito":[]},{"nome":"Combate com Duas Armas 2","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Combate com Duas Armas 1"]],"descricao":"Como Combate com Duas Armas 1, mas você pode usar duas armas com a mesma FN.","especial":"","resumo":"Duas armas.","efeito":[]},{"nome":"Combate em Grupo","categoria":"Técnica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você ganha +1 nos testes de ataques corporais para cada aliado que esteja em combate corporal com o alvo.","especial":"","resumo":"Ataque CaC +1 para cada aliado adjacente contra o mesmo alvo.","efeito":[]},{"nome":"Combate Montado","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Cavaleiro Experiente"]],"descricao":"Sempre que fizer um ataque corporal enquanto estiver sobre uma montaria, acrescente +6 de dano ao ataque.","especial":"","resumo":"Se montado, Dano +6.","efeito":[]},{"nome":"Combate Pesado","categoria":"Técnica","tipo":"Reação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Combate Tático"]],"descricao":"Sempre que você fizer uma manobra de encontrão ou um ataque corporal enquanto estiver portando uma arma de duas mãos ou um escudo, você pode rolar novamente 1 dos dados em seus testes de ataque. Você pode escolher com qual dos resultados vai ficar. Você só pode usar esta Habilidade 1 vez por turno.","especial":"","resumo":"Encontrão ou Ataque com arma de duas mãos ou escudo: rerole um dado.","efeito":[]},{"nome":"Combate Tático","categoria":"Técnica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Se você derrotar um oponente com um ataque corporal, você pode imediatamente realizar outro ataque corporal normal (mas não Habilidades de Ação).","especial":"","resumo":"Ataque CaC extra após derrotar um inimigo.","efeito":[]},{"nome":"Companheiro Animal 1","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui uma ligação de fidelidade com um animal. Escolha uma Besta dos tipos Mamífero, Ave, Réptil ou Peixe e faça um teste de Vontade (Dificuldade igual à soma de todos os atributos do animal +1 para cada metro de tamanho que o animal tiver). Se passar no teste, o animal escolhido será atraído para você e lhe será fiel até a morte (ele passa a ter o temperamento Protetor). Se o animal morrer, você pode tentar atrair outro animal – que não precisa ser do mesmo tipo escolhido anteriormente – com fazendo o mesmo teste. Este teste pode ser realizado 1 vez por dia. Você pode atrair 1 animal de cada vez com essa Habilidade.","especial":"Se essa Habilidade for escolhida durante a criação do personagem, o animal já estará com você, sem a necessidade de qualquer teste para atraí-lo, desde que a dificuldade para atraí-lo seja menor do que a soma dos Atributos do personagem.","resumo":"Dificuldade para atrair é a soma dos atributos do animal +1.","efeito":[]},{"nome":"Companheiro Animal 2","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Companheiro Animal 1"]],"descricao":"Seu companheiro animal recebe +1 em 2 Atributos à sua escolha, +5 Pontos de vida e +5 Pontos de Mana. Além disso, seu companheiro Animal recebe uma Habilidade do tipo Técnica à sua escolha (desde que faça sentido; o Mestre tem a palavra final sobre o assunto).","especial":"","resumo":"Comp.Animal: +5 de Vida e Mana, +1 em dois atributos e uma técnica.","efeito":[]},{"nome":"Companheiro Animal 3","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["nivel",5, "Companheiro Animal 2"]],"descricao":"Seu Companheiro Animal recebe +1 em todos os seus Atributos e +10 Pontos de Vida ou +10 Pontos de Mana à sua escolha. Além disso, seu Companheiro Animal recebe uma Habilidade do tipo Técnica à sua escolha (desde que faça sentido; o Mestre tem a palavra final sobre o assunto).","especial":"","resumo":"Comp.Animal: +10 Vida ou Mana, +1 em todos os atributos e uma técnica.","efeito":[]},{"nome":"Companheiro Animal 4","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Companheiro Animal 3"]],"descricao":"Seu Companheiro Animal recebe +1 em todos os seus Atributos, +10 Pontos de Vida e +10 Pontos de Mana. Além disso, seu Companheiro Animal recebe uma Habilidade do tipo Técnica à sua escolha (desde que faça sentido; o Mestre tem a palavra final sobre o assunto). Você também recebe +2 em todos os seus testes relativos à animais e pode também atrair um segundo Companheiro Animal seguindo as mesmas regras de Companheiro Animal 1.","especial":"","resumo":"Comp.Animal: +10 Vida e Mana, +1 atributos e uma técnica. 2º Comp.Animal.","efeito":[]},{"nome":"Companheiro Espiritual","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Invocar Espírito Animal"]],"descricao":"Seus Espíritos Animais conjurados duram permanentemente (mas você ainda pode cancelar o efeito quando quiser) e recebem +20 PV, ou +20 PM, ou +10 PV e +10 PM à sua escolha quando você os conjura. No entanto, enquanto esses Espíritos Animais estiverem conjurados, você não pode recuperar os Pontos de Mana gastos para conjurá-los. Depois que eles forem dissipados (ou destruídos) você pode recuperar esses Pontos de Mana normalmente.","especial":"","resumo":"Esp.Animal conjurado recebe +20 Vida ou Mana. Mana não recupera enquanto.","efeito":[]},{"nome":"Competidor","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você gosta de competir – e principalmente, de ganhar! Sempre que for fazer uma rolagem para decidir o resultado de um confronto, você recebe um bônus de +2 no seu teste.","especial":"","resumo":"Bônus de +2 em qualquer competição.","efeito":[]},{"nome":"Comunhão com Espíritos","categoria":"Técnica","tipo":"Suporte","mana":10,"dificuldade":0, "requisitos":["habilidade",["Contato com Espíritos"]],"descricao":"Enquanto estiver utilizando Contato com Espíritos, você pode tocar outro personagem que será capaz de ouvir e ver qualquer espírito num raio de 20 metros por 10 minutos. Um personagem sob esse efeito pode gastar 10 Pontos de Mana para ser capaz de tocar espíritos por 1 minuto.","especial":"","resumo":"Contato com Espíritos beneficia outro personagem ao toque.","efeito":[]},{"nome":"Congelar","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":8, "requisitos":[],"descricao":"Desenhando uma runa Arcana sobre um objeto ou superfície, você infunde um frio intenso congelando-o. Essa magia pode congelar até 200 litros de líquido ou de material sólido por ponto de Inteligência do conjurador. Apenas matéria inanimada pode ser afetada por essa magia. Essa magia pode ser usada para criar uma camada de gelo grosso (cerca de 5 centímetros) e extremamente escorregadio numa área circular com um diâmetro igual à sua Inteligência. Qualquer criatura sobre essa superfície (incluindo você) precisa fazer um teste de Agilidade (Dificuldade 12) sempre que realizar um ataque, se mover ou tentar se levantar. Uma falha nesse teste significa que o personagem cai. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados, mas o gelo criado é permanente e descongela em velocidade normal.","especial":"","resumo":"Congela inanimado. 200*<a class=\'inteligencia\'> </a> L ou camada de gelo num raio de <a class=\'inteligencia\'> </a> m.","efeito":[]},{"nome":"Conhecimento Arcano","categoria":"Técnica","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é capaz de decifrar e canalizar os fenômenos do sobrenatural. Você pode ler e utilizar tomos mágicos e desenhar Runas Arcanas. Você também é capaz de canalizar sua energia para a conjuração de fenômenos mágicos com eficiência. Sempre que usar uma Habilidade do tipo Magia, você pode gastar Pontos de Vida ao invés de Pontos de Mana para pagar seu custo. Nesse caso, cada 2 Pontos de Vida equivalem à 1 Ponto de Mana.","especial":"","resumo":"Ler tomos e desenhar Runas Arcanas. Converte: 2 Vida para 1 de Mana.","efeito":[]},{"nome":"Conhecimento Místico","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você está ligado as energias místicas provenientes de forças superiores e consegue comungar com elas. Você pode ler e utilizar tomos mágicos e desenhar Selos Místicos. Você também pode entrar em um estado de transe se concentrando por 1 minuto. Enquanto continuar meditando dessa forma, você recupera uma quantidade de Pontos de Mana igual à sua Vontade a cada 10 minutos.","especial":"","resumo":"Ler tomos e desenhar Selos Místicos.","efeito":[]},{"nome":"Conhecimento Regional[Tebryn]","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["!raca",["Hamelin"]],"descricao":"Você conhece profundamente a história e características de Tebryn. Você rola +1d6 em todos os seus testes ligados à história, geografia e folclore ligados ao reino, e conhece os nomes de todas as personalidades importantes (nobres com qualquer título acima de Cavaleiro, militares com títulos acima de Alferes, Burgomestres, Regentes e líderes de guildas e organizações) de Tebryn.","especial":"","resumo":"Conhecimentos sobre Tebryn +1d6.","efeito":[]},{"nome":"Conjurador Especialista: [Magia]","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você domina a conjuração de uma Magia de forma magistral. Quando seleciona esta Habilidade, você deve selecionar uma Habilidade do tipo Magia que você já possua OU que você possa aprender. A magia deve ter pelo menos uma Habilidade do tipo Magia como requisito. Se você não tiver aquela Habilidade, você agora é capaz de conjura-la e recebe um bônus de +2 em seus testes para fazê-lo. Além disso, você recebe um bônus de +1d6 para conjurar quaisquer magias que sejam Requisito da magia selecionada.","especial":"","resumo":"Bônus de +2 para conjurar Magia fixa. E +1d6 para os requisitos desta.","efeito":[]},{"nome":"Conjurar Abrigo","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Mover Terra"]],"descricao":"Você desenha um Selo Místico sobre o solo, de onde uma estrutura simples e resistente se ergue seguindo a sua vontade. O custo em Mana da Magia depende do tamanho da estrutura: 10 Pontos de Mana criam um domo para até 4 pessoas, 20 Pontos de Mana criam uma cabana para até 10 pessoas, 40 Pontos de Mana criam uma torre para até 20 pessoas e 80 Pontos de Mana criam um pequeno forte para até 40 pessoas. O Selo Místico se dissipa depois de 24h, fazendo com que a estrutura comece a desmoronar lentamente.","especial":"","resumo":"Mana: 10 (4 pessoa), 20 (10 p.), 40 (20 p.), 80 (40 p.). 1 dia.","efeito":[]},{"nome":"Conjurar Arma dos Deuses","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":10, "requisitos":["habilidade",["Dogma"]],"descricao":"Você desenha um Selo Místico no ar que se materializa na forma da arma favorecida pela sua divindade. O Selo Místico que conjura a arma se dissipa após 1 minuto, mas se você soltar a arma ele se dissipa imediatamente.","especial":"","resumo":"Depende do Dogma.","efeito":[]},{"nome":"Conjurar Broquel Místico","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":[],"descricao":"Você desenha um Selo Místico sobre uma criatura que se materializa na forma de um escudo que flutua ao redor do alvo defletindo ataques, mas pode ser segurado como um escudo normal. Ele garante Esquiva +2, e se for segurado tem FN 2, ocupa 1 mão e seu bônus passa a ser de Bloqueio. Esse Selo Místico dura 1 minuto.","especial":"","resumo":"Conjura escudo de Esquiva +2, ou Bloqueio +2 se segurado. 1 min.","efeito":[]},{"nome":"Conjurar Escudo","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":[],"descricao":"Você desenha uma Runa Arcana no ar e ela se transforma em um escudo de energia para proteger uma criatura dentro de sua linha de visão. O escudo flutua ao redor do alvo, bloqueando ataques, mas pode ser segurado como um escudo normal. Ele garante um Bônus de Bloqueio de +2, e se for segurado tem FN 2 e ocupa 1 mão. A Runa Arcana que mantém o escudo se dissipa depois de 1 minuto.","especial":"","resumo":"Conjura escudo de Esquiva +2, ou Bloqueio +2 se segurado. 1 min.","efeito":[]},{"nome":"Conjurar Falange do Destino","categoria":"Magia","tipo":"Ação","mana":60,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Conjurar Lança do Destino"]],"descricao":"Você desenha um Selo Místico no ar que se transforma em um conjunto de lanças de luz igual à metade da sua Vontade que arremetem imediatamente na direção de seus inimigos. Cada lança causa dano igual a 10/Perfuração. Se o alvo for um demônio, morto-vivo ou espírito, a lança causa o triplo de dano. Após atingir o alvo a lança se dissipa em uma explosão de luz, e o alvo precisa fazer um teste de Vontade (dificuldade igual à Determinação do conjurador) ou fica Distraído por 1 turno. Demônios, mortos-vivos e espíritos não tem direito ao teste para evitarem ficar Distraídos. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"Você pode atingir o mesmo alvo com várias lanças, ou um alvo com cada lança.","resumo":"Você e aliados num raio de <a class=\'vontade\'> </a> metros recebem Vontade +1.","efeito":[]},{"nome":"Conjurar Lança do Destino","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":10, "requisitos":["habilidade",["Exorcismo"]],"descricao":"Você desenha um Selo Místico no ar que assume a forma de uma lança de luz. A lança arremete na direção de um alvo que você possa ver e causa dano igual a 10/Perfuração. Se a criatura for um demônio, morto-vivo ou espírito a lança causa o dobro do dano. Após atingir o alvo a lança se dissipa em uma explosão de luz, e o alvo precisa fazer um teste de Vontade (dificuldade igual à sua Determinação) ou fica Distraído por 1 turno (ver Condições, pág.169). Demônios, mortos-vivos ou espíritos não têm direito ao teste para evitar ficarem Distraídos. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"10/Perf. VON[<a class=\'determinacao\'> </a>]:Distraído. Demônios,Mortos-Vivos,Espíritos 30/Perf.","efeito":[]},{"nome":"Conjurar Objeto","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":10, "requisitos":[],"descricao":"Desenhando uma Runa Arcana sobre um item, você o envia para o plano etéreo. Qualquer item cujo peso seja igual ou menor do que a Carga Básica do conjurador pode ser afetado por essa Magia. Quando a Runa desenhada sobre o item for dissipada, o objeto aparece imediatamente nas mãos do conjurador. Esta Runa Arcana dura indefinidamente, mas pode ser dissipada a qualquer momento pelo conjurador. Enquanto estiver ativa, os Pontos de Mana usados para Conjurar Objeto não podem ser recuperados.","especial":"","resumo":"Envia item (até Carga Básica) para o plano etéreo. Mana presa até anular.","efeito":[]},{"nome":"Conselheiro Pessoal","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Séquito"]],"descricao":"Você tem um conselheiro fiel dentro do seu séquito. Um de seus seguidores passa a ser um PDM com metade de seu nível (arredondado para baixo) de uma Classe conjuradora, ser um Bardo ou Xamã. Você pode criar a ficha do seu conselheiro ou optar que o Mestre faça isso – Sacerdotes e Bardos são as Classes mais indicadas. O conselheiro é um PDM controlado pelo Mestre, mas ele seguirá suas ordens desde que possa manter você dentro da sua linha de visão. Ele acompanhará você em aventuras, mas evitará entrar em combate, preferindo Habilidades defensivas – mas entrará em combate caso seja necessário. Caso seu conselheiro morra, seja dispensado, lhe abandone ou de alguma outra forma deixe de servir você, você pode contratar ou atrair um novo conselheiro usando as mesmas regras listadas. O conselheiro terá equipamentos adequados à sua Classe que não ultrapassem 200 moedas, mas você pode fornecer equipamentos melhores se tiver condições.","especial":"","resumo":"NPC conselheiro com nível até metade do seu.","efeito":[]},{"nome":"Constituição Feérica","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui uma constituição leve e um par de asas que lhe permitem voar. Você pode voar em qualquer direção (com o dobro da sua movimentação normal) e pode parar no ar. No entanto, suas asas precisam bater continua e velozmente, e você não pode planar nem permanecer no ar por mais do que uma hora antes de ter que descansá-las por pelo menos meia hora. Enquanto está voando, o bater das suas asas produzem um zumbido característico e facilmente audível, e é impossível para você se mover em silêncio enquanto voa.","especial":"O dano de qualquer manobra de Encontrão usada em voo é duplicado (mas o dano da arma que você usar no Encontrão não é alterado, nem quaisquer outros possíveis efeitos de Encontrão).","resumo":"Voo livre, mas barulhento. Deslocamento duplicado em voo, de até uma hora.","efeito":[]},{"nome":"Contato com Espíritos","categoria":"Característica","tipo":"Ação","mana":5,"dificuldade":0, "requisitos":[],"descricao":"Você pode se comunicar com os espíritos que estejam próximos. Você é capaz de ouvir e ver qualquer espírito num raio de 20 metros. Esse efeito dura 10 minutos. Você pode gastar 10 Pontos de Mana enquanto estiver sob o efeito dessa Habilidade para ser capaz de tocar espíritos por 1 minuto.","especial":"","resumo":"Ver e ouvir espíritos num raio de 20m.","efeito":[]},{"nome":"Contatos na Corte","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui muitos contatos entre os nobres do reino, o que lhe concede alguns privilégios com relação à elite. Você pode conseguir informações e favores ligados à corte e à nobreza do reino, como audiências com os nobres, acesso às dependências da maioria das áreas exclusivas de cidades ou castelos e informações referentes a figuras importantes da região e da política local.","especial":"","resumo":"Você possui muitos contatos entre os nobres do reino.","efeito":[]},{"nome":"Contatos no Crime","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui muitos contatos entre os criminosos – pequenos e grandes. Com isto você pode descobrir informações privilegiadas ou comprar e vender mercadoria roubada. Obviamente o mestre poderá restringir informações se isso for atrapalhar o andamento ou a trama da campanha, e você nem sempre será capaz de encontrar qualquer item à disposição em qualquer lugar – mas o mercado negro nas grandes cidades costuma estar abastecido de praticamente qualquer item disponível na campanha. Criminosos pagarão metade do preço normal de qualquer item que você quiser vender – desde que tenham dinheiro para tanto – e venderão itens com um custo um terço menor do que o normal. Itens proibido ou controlados, no entanto, podem ser extremamente caros. Informações terão um preço dependendo da importância e dificuldade de obtê-las, de acordo com a vontade do Mestre.","especial":"","resumo":"Você possui muitos contatos entre os criminosos.","efeito":[]},{"nome":"Contatos Políticos","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui muitos contatos entre os oficiais da maioria dos locais, e o símbolo da sua guilda é reconhecido por todos. Graças a isso você pode descobrir informações privilegiadas ou evitar problemas com a lei. Com um sucesso bem sucedido de Vontade (dificuldade igual à Determinação do alvo) você pode conseguir que um guarda decida não lhe levar preso ou até mesmo uma saída da prisão. Esses favores geralmente vêm acompanhados de algumas moedas (geralmente uma quantidade igual a 10 vezes a Vontade do alvo) para ser bem-sucedida, além de sucesso no teste. Note que nem todo guarda que o personagem encontrar vai aceitar suborno, e usar esta Habilidade indiscriminadamente pode trazer problemas para o personagem. Além disso, crimes graves provavelmente estarão além do alcance dessa Habilidade, bem como grupos grandes de guardas e oficiais da lei.","especial":"","resumo":"Você possui muitos contatos entre os oficiais da maioria dos locais.","efeito":[]},{"nome":"Contos da Estrada","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Através de várias histórias e canções contadas ao redor de fogueiras com viajantes que você encontrou em suas andanças, você acumulou um vasto conhecimento oral sobre inúmeros assuntos. Você rola +1d6 quando fizer testes de Inteligência referentes a qualquer tipo de conhecimento, não importando o quão inacessível seja este conhecimento.","especial":"","resumo":"Conhecimento +1d6.","efeito":[]},{"nome":"Contra-Carga","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Sempre que um adversário realizar uma manobra de encontrão contra você, considere que Manter a Linha causa um dano extra igual à FN da arma que você estiver empunhando e, se o ataque acertar, o alvo deve ser bem sucedido em um teste de Força (dificuldade igual à sua Determinação mais a FN da arma que você estiver utilizando) ou fica Paralisado por 1 turno.","especial":"","resumo":"Contra-Encontrão, dano FN, Alvo FOR[DET+FN]: Paralisado 1 turno.","efeito":[]},{"nome":"Convocar Animais","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Benção de Ellenis"]],"descricao":"Desenhando um Selo Místico sobre si mesmo, você consegue atrair todas as Bestas escolhidas entre Mamífero, Ave, Réptil ou Peixe que estejam a até 1 km de você. Os animais não estarão sob seu controle, mas se sentirão inclinados a ajudá-lo dentro de suas capacidades – animais com temperamento pacífico ou covarde não irão entrar em combate, mas animais sobreviventes ou agressivos não terão problemas com isso. Esse Selo Místico dura 1 hora. Depois disso, as Bestas afetadas voltarão pacificamente para os locais de onde vieram.","especial":"Você pode refinar o tipo específico de animal (“Ursos”, “Marsupiais”, “Batráquios”) ou até mesmo um animal específico (“Aquele esquilo com quem eu conversei ontem”, “meu Companheiro Animal”, “O cão do guarda-caça”) quando conjurar essa magia.","resumo":"Atrai tipo de Besta num raio de 1km, que auxiliam em suas capacidades.","efeito":[]},{"nome":"Coração da Batalha","categoria":"Característica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Quando sofrer algum dano proveniente de um ataque, Magia, ou Música você recupera 5 Pontos de Mana. Você só pode usar esta Habilidade uma vez por turno.","especial":"","resumo":"Recupera 5 pontos de Mana se sofreu dano neste turno.","efeito":[]},{"nome":"Coração da Montanha","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Sua constituição foi forjada nos subterrâneos agrestes e impiedosos, onde apenas os mais resistentes conseguem sobreviver. Você é imune a todos os venenos naturais e mágicos e rola +1d6 em testes para resistir à fadiga, doenças e quaisquer outros efeitos físicos. Além disso, sua Carga é calculada como se você tivesse Força +2.","especial":"","resumo":"Imune a veneno. Resistir Fadiga, Doença, etc +1d6. Carga como FOR+2.","efeito":["carga+",2]},{"nome":"Coração da Montanha 2","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Descrição: Você é ainda mais vigoroso e resistente que a maioria dos Anões. Você tem +5 Pontos de Vida e é imune à todas as doenças de origem natural ou mágica e rola +1d6 em testes para resistir a quaisquer efeitos de fadiga ou outros efeitos físicos. Esse bônus se acumula com o bônus de Vigor da Montanha.","especial":"","resumo":"Vida +5. Imune a Doenças.","efeito":["vida+",5]},{"nome":"Coração de Tinta","categoria":"Característica","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Invocar Espírito Animal"]],"descricao":"Através da tatuagem do seu espírito animal, você é capaz de fortalecer sua determinação e em contrapartida seu espírito animal também se fortalece. Enquanto a tatuagem do seu espírito animal estiver à mostra, você (e quaisquer criaturas que você invocar) recebe +10 Pontos de Vida e +1 em Bloqueio, Esquiva e Determinação.","especial":"","resumo":"Se Tatuagem à mostra, você e invocados recebem Vida+10 e Defesas +1. ","efeito":[]},{"nome":"Corpo Equino","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui o dorso de um cavalo. Sua carga é calculada como se você tivesse duas vezes a sua Força normal, seu deslocamento é calculado como se você tivesse duas vezes sua Agilidade normal e você pode rolar +1d6 quando fizer testes de correr, saltar ou evitar ser derrubado. Além disso, se fizer ataques desarmados com seus cascos, seu dano será Força +2/Contusão. Devido ao seu comprimento, estatura e peso, você tem dificuldades em uma série de atividades (como nadar, escalar e se segurar usando apenas os braços), realizando estas ações como se fosse Inapto, e o Mestre pode decidir que algumas atividades são impossíveis para você – como dar uma cambalhota ou subir uma escada de mão.","especial":"","resumo":"Carga com For*2. Desloc. com AGI*2. Correr, Saltar, Não Derrubado +1d6.","efeito":["carga*",2,"deslocamento*",2,"+ataque","Cascos","Contusão","CaC",true,2]},{"nome":"Corpo Fechado","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":12, "requisitos":["habilidade",["Proteção Mística"]],"descricao":"Desenhando um Selo Místico sobre um alvo, você confere Resistência à Contusão, Corte ou Perfuração a ele. Esse Selo Místico dura por 1 minuto.","especial":"","resumo":"Confere resistência a Cont., Corte ou Perf por 1 minutos.","efeito":[]},{"nome":"Corpo Pesado","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui uma musculatura poderosa – e pesada. Você rola +1d6 em testes de para não ser derrubado e para realizar encontrões, mas é considerado Inapto em testes de natação, escalada e salto. Além disso, você precisa de uma ação de rodada completa para se levantar ao invés de uma ação de movimento, mas sua Carga é calculada como se você tivesse Força +2.","especial":"","resumo":"Inapto:Natação,Escalada,Salto. Não ser derrubado +1d6. Carga com For*2. Rodada completa para levantar.","efeito":["carga+",2]},{"nome":"Corte Arterial","categoria":"Técnica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":["habilidade",["Ataque Aleijador"]],"descricao":"Faça um ataque corporal com uma arma de corte ou perfuração. Se acertar, a vítima começará a sangrar, perdendo 10 Pontos de Vida no início de cada um de seus turnos. Este é um efeito de sangramento.","especial":"","resumo":"Ataque Corte ou Perf. Dano 10 por turno. Efeito de Sangramento.","efeito":[]},{"nome":"Criar Golem","categoria":"Magia","tipo":"Ação","mana":60,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Cariátide"]],"descricao":"Você pode dar movimentos para um receptáculo especialmente preparado. Você precisa de um receptáculo de forma aproximadamente humanoide todo feito de um mesmo material com uma pedra preciosa incrustada nele. A pedra preciosa precisa ter um valor de 400 moedas para cada metro de altura do Golem. Você então desenha um Selo Místico sobre o receptáculo, que se torna um Golem do material e tamanho apropriados. O Selo Místico que mantém o Golem dura 1 hora. Veja os dados de diversos tipos de Golens no Monstrum Codex para mais detalhes.","especial":"","resumo":"Pedra preciosa de 400 moedas por metro de golem (homogêneo). 1 hora.","efeito":[]},{"nome":"Cura Espiritual","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Com seu toque você pode recuperar as energias de um espírito. Você pode curar até <a class=\'cura\'> 40 </a> Pontos de Vida de uma criatura com Corpo Intangível, além de remover quaisquer efeitos Mentais, de medo, Selos Místicos e Runas Arcanas que a estiverem afetando.","especial":"","resumo":"Cura 40 Pontos de Vida e efeitos de um espírito.","efeito":[]},{"nome":"Curar Ferimentos 1","categoria":"Magia","tipo":"Ação","mana":5,"dificuldade":8, "requisitos":[],"descricao":"Desenhando um Selo Místico sobre uma criatura viva que recupera imediatamente <a class=\'cura\'> 10 </a> Pontos de Vida. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Toque. Cura 10 Pontos de Vida.","efeito":[]},{"nome":"Curar Ferimentos 2","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Curar Ferimentos 1"]],"descricao":"Desenhando um Selo Místico sobre uma criatura viva, ela recupera imediatamente <a class=\'cura\'> 60 </a> pontos de vida. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Toque. Cura 60 Pontos de Vida.","efeito":[]}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_habilidadesDE() {
    return '{"habilidade":[{"nome":"Dança das Espadas 1","categoria":"Técnica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":[],"descricao":"Você pode entrar em um fluxo incessante de movimentos fluidos e vigorosos. Enquanto estiver neste estado você recebe Agilidade +2 e recebe +1d6 em seus testes de dança. Este efeito dura até 5 minutos ou até que você pare, ou seja alvo de um efeito que o impeça da continuar se movendo continuamente (Constringido, Derrubado, Amedrontado, etc.).","especial":"","resumo":"Agi+2 e Dança +1d6 por até 5 minutos ou ser impedido.","efeito":[]},{"nome":"Dança das Espadas 2","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Dança das Espadas 1"]],"descricao":"Quando entra em combate, seu fluxo de movimentos pode criar um estado de hipnose autoinduzida, produzindo efeitos quase sobre-humanos de agilidade, velocidade e foco. Sempre que você estiver usando Dança das Espadas, você recebe um acréscimo de +2 na sua Agilidade (acumulado com o bônus de Dança das Espadas 1) e em sua Determinação. Este efeito dura enquanto durar o efeito de Dança das Espadas 1.","especial":"","resumo":"Agi+4, Dança +1d6, Determinação +2 por até 5 minutos ou ser impedido.","efeito":[]},{"nome":"Dançarino do Ar","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["agi",5],"descricao":"Você praticou voo com um entusiasmo incomum e aperfeiçoou enormemente suas perícias aéreas. Enquanto estiver voando, você recebe um bônus de +2 em testes de acrobacia, tentativas de realizar um encontrão, testes de movimento e qualquer outra manobra aérea. Este bônus também estende-se a sua Defesa (este é considerado um bônus de Esquiva).","especial":"","resumo":"Em Voo: Esquiva, Acrobacia, Encontrão, Manobra, etc. +2.","efeito":["esquiva!","+2 voo", ": +2 em voo."]},{"nome":"Decapitar","categoria":"Técnica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Retalhar"]],"descricao":"Se você rolar um Sucesso Crítico em um ataque corporal usando uma arma que cause dano por Corte, role 1d6. Se o resultado for 6, você decapitou a vítima – causando morte instantânea. Este é um efeito de sangramento.","especial":"","resumo":"Crítico com Corte: 1d6: Se 6 a vítima foi decapitada.","efeito":[]},{"nome":"Defesa Agressiva","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Defletor"]],"descricao":"Você entende que a melhor defesa é um ataque eficiente. Quando estiver empunhando uma arma corporal de duas mãos, duas armas corporais ou um escudo, você recebe +1 em seus testes de ataque corporal e +1 na sua Defesa. Esse bônus de Defesa é considerado um bônus de Bloqueio.","especial":"","resumo":"Arma Duas Mãos ou Arma&Escudo: Ataque CaC +1 e Defesa +1","efeito":["modificador","ataque",[],[],[],["CaC"],1,"bloqueio!","+1*",": +1 com arma de duas mãos, duas armas ou escudo."]},{"nome":"Defletor","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você está acostumado a se defender de projéteis. Enquanto estiver empunhando uma arma corporal de duas mãos, duas armas corporais ou um escudo, você recebe +2 no seu bônus de Bloqueio contra ataques à distância. Esse bônus de Defesa é considerado um bônus de Bloqueio.","especial":"","resumo":"Arma Duas Mãos ou Arma&Escudo: Bloqueio +2 contra projéteis.","efeito":["bloqueio!","+2*",": +2 contra ataques à distância quando armado."]},{"nome":"Derrubar","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Faça um ataque corporal usando uma arma de haste. Se acertar, o alvo sofre apenas metade do dano, mas deve fazer um teste de Agilidade (dificuldade igual à sua Determinação mais a FN da arma que você estiver empunhando) ou será derrubado.","especial":"","resumo":"Haste: Ataque com metade do dano, alvo AgiXDet.+FN ou derrubado.","efeito":[]},{"nome":"Desarmar Oponente","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Ataque Redirecionado"]],"descricao":"Você pode usar a sua arma para tirar a arma do seu oponente. Faça um teste resistido de Agilidade contra Força ou Agilidade do adversário (dependendo do que ele usar para combater), somando a FN das armas (a sua e a do seu adversário) nas suas respectivas rolagens. Se você estiver desarmado, use apenas Agilidade. Se o seu adversário tiver um sucesso igual ou menor do que o seu, a arma dele cairá no chão entre você e ele.","especial":"","resumo":"AGI+FN x (For|Agi)+FN: Desarma oponente.","efeito":[]},{"nome":"Desativar Item","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":11, "requisitos":[],"descricao":"Você pode desativar temporariamente um item mágico desenhando uma Runa Arcana sobre ele, fazendo com que todos os efeitos mágicos fornecidos pelo item deixem de funcionar por 10 minutos por ponto de Inteligência que você tiver – mas ele ainda conta como um item mágico para qualquer efeito que afete ou não afete itens mágicos especificamente. Itens mágicos de aura Nula ou Divina não são afetados por essa Habilidade. Esta Habilidade também dissipa todas as Runas Arcanas e Selos Místicos do item tocado.","especial":"","resumo":"Desativa itens mágicos por <a class=\'inteligencia\'> </a>*10 minutos.","efeito":[]},{"nome":"Despertar a Flora","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":13, "requisitos":["nivel",5,"habilidade",["Entrelaçar"]],"descricao":"Você desenha um Selo Místico sobre uma planta, imbuindo ela com percepção e fala de uma criatura inteligente além de capacidade de movimentação. Um rosto se cria no caule ou tronco da planta e pode interagir com qualquer um. Nenhuma planta gosta de ser incomodada e elas tendem a não ser muito amistosas. O custo em Mana da Magia depende do tamanho da planta: 10 Pontos de Mana para afetar uma planta pequena, 20 Pontos de Mana para afetar uma planta média, 40 Pontos de Mana para afetar uma planta grande e 80 Pontos de Mana para afetar uma planta gigante. Trate uma planta sob efeito dessa magia como um Golem de madeira do tamanho apropriado, exceto o Tipo que será Esfinge e o Temperamento que será Pacífico. O Selo Místico dura 1 minuto por ponto de Vontade do conjurador.","especial":"","resumo":"Anima planta. Mana: 10(Pequena) 20(Média) 40(Grande) 80(Gigante).","efeito":[]},{"nome":"Destemor","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Código da Coragem"]],"descricao":"Sua coragem o impulsiona em situações de perigo para si e para seus companheiros. Sempre que for realizar um teste que represente um risco direto para você ou para um amigo (incluindo praticamente todas as situações de combate), você soma +2 ao resultado de todas as suas rolagens.","especial":"","resumo":"Soma +2 ao resultado de todas as rolagens em risco direto.","efeito":[]},{"nome":"Destruição Elemental","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Arma Incandescente", "Arma Gélida", "Arma Relampejante"]],"descricao":"Você se tornou extremamente hábil no controle das energias elementais. Sempre que usar uma técnica ou magia que causa dano por Fogo, Frio ou Eletricidade, esse dano é dobrado.","especial":"","resumo":"Técnica & Magia Fogo, Frio e Eletricidade: dano*2.","efeito":["modificador","descricao*",[],["Técnica","Magia"],["Ação"],["fogo","frio","elet","elem"],2 ]},{"nome":"Detectar Magia","categoria":"Técnica","tipo":"Ação","mana":0,"dificuldade":8, "requisitos":[],"descricao":"Concentrando-se nos fluxos de energias mágicas, você pode enxergar a aura de objetos mágicos, Runas Arcanas e Selos Místicos. Você pode analisar a aura mágica de um Selo, Runa ou objeto para entender suas propriedades observando-a por 1 minuto.","especial":"","resumo":"Observa auras mágicas, podendo descobrir suas propriedades.","efeito":[]},{"nome":"Disparo Cego","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Prever Posição"]],"descricao":"Se você sabe que o alvo está lá, você pode acertá-lo! Se você sabe que um alvo invisível ou camuflado existe, você pode fazer um ataque à distância contra ele sem qualquer penalidade. Essa Habilidade também se aplica quando o personagem está cego ou de outra forma impedido de perceber inimigos – ele sempre pode fazer ataques à distância sem penalidades devido à visão impedida ou ruim.","especial":"","resumo":"Ignora quaisquer penalidades ao atacar a distância.","efeito":[]},{"nome":"Disparo Certeiro","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Você realiza um ataque à distância rolando +1d6.","especial":"","resumo":"Ataque à distância com +1d6.","efeito":[]},{"nome":"Disparo Devastador","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Disparo Forte", "Aplicar Força"]],"descricao":"Se você rolar um Sucesso Crítico em um ataque à distância, o dano será multiplicado por 3 ao invés de 2. Este é um efeito de sangramento.","especial":"","resumo":"Sangramento. Dano crítico à distância *3.","efeito":[]},{"nome":"Disparo Forte","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Retesar Eficiente"]],"descricao":"Faça um ataque à distância. Se acertar, some +8 ao dano da arma.","especial":"","resumo":"Ataque à distância com dano +8.","efeito":[]},{"nome":"Disparo Mirado","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Se você usar uma ação padrão mirando em um alvo, você pode rolar +1d6 no seu primeiro ataque à distância contra aquele alvo no seu próximo turno.","especial":"Mirar mais de um turno não adiciona nenhum benefício extra.","resumo":"Adiciona +1d6 para o próximo ataque à distância. Não cumulativo.","efeito":[]},{"nome":"Disparo Perfeito","categoria":"Técnica","tipo":"Reação","mana":15,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Disparo Mirado"]],"descricao":"Sempre que você fizer um ataque à distância, você pode trocar o resultado de um dos dados por um 6. Você só pode usar esta Habilidade uma vez por turno.","especial":"","resumo":"Ataque à distância: troca o resultado de um dado por 6. Uma vez.","efeito":[]},{"nome":"Dissipar Magia","categoria":"Técnica","tipo":"Ação","mana":-1,"dificuldade":-1, "requisitos":["nivel",5,"habilidade",["Aparar Magia"]],"descricao":"Você dissipa todas as Runas Arcanas ou Selos Místicos de uma criatura, objeto ou estrutura com seu toque. Essa Habilidade não tem efeito em Runas ou Selos com efeitos instantâneos (como Curar Ferimentos, Rajada de Espinhos ou Teleporte) nem reverte efeitos permanentes de magia (como restaurar os Pontos de Vida perdidos devido a uma Bola de Fogo, dissipar água criada por Princípio Natural ou reverter água afetada por Raio Gélido de volta ao estado líquido). Você pode também escolher quais Runas ou Selos dissipar e quais não, caso o alvo tenha mais de um Selo ou Runa afetando-o. O custo para dissipar um Selo ou Runa é igual ao custo usado para conjurá-los.","especial":"","resumo":"Anula Runas Arcanas & Selos Místicos de efeito contínuo.","efeito":[]},{"nome":"Distintivo de Ofício","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"O distintivo que aponta sua ocupação tem um poderoso efeito sobre a disposição geral daqueles ao seu redor. Sempre que seu distintivo estiver visível para alguém com quem você está negociando um bem ou serviço, você recebe automaticamente um desconto em moedas igual à sua Determinação no preço final do produto. Esse benefício se aplica apenas a você – seus aliados não recebem nenhum benefício por essa Habilidade.","especial":"","resumo":"Recebe desconto igual a determinação ao negociar bens e serviços.","efeito":[]},{"nome":"Distração","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Eloquente"]],"descricao":"Você é capaz de usar sua oratória para chamar a atenção de um alvo para você e confundi-lo no processo. Você escolhe uma criatura que esteja a uma distância em metros igual à sua Vontade e que seja capaz de compreender o que você diz. Aquela criatura precisa passar em um teste de Inteligência (Dificuldade igual à sua Determinação) ou ficará Distraída por 1 turno. Esse é um efeito mental.","especial":"","resumo":"Alvo em <a class=\'vontade\'> </a> metros testa INT[<a class=\'determinacao\'> </a>]: Distraído.","efeito":[]},{"nome":"Diversidade","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você focou seus esforços e interesse em uma ampla gama de atividades. Escolha um Atributo diferente do que escolheu para Adaptabilidade. Você tem +1 nesse Atributo.","especial":"","resumo":"Recebe +1 em atributo diferente de Adaptabilidade.","efeito":["atributo+"]},{"nome":"Dogma","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você segue estritamente os ensinamentos de uma divindade que, em troca, lhe concede um favor especial. Escolha um Dogma para seguir. Essa escolha é permanente e não pode ser mudada posteriormente.","especial":"Um personagem que não siga os Dogmas de uma divindade específica é considerado um Discípulo do Panteão ou Sacerdote do Panteão e não está vinculado a nenhuma divindade em particular – nem recebe quaisquer benefícios ou precisa seguir nenhuma conduta específica.","resumo":"","efeito":["dogma"]},{"nome":"Dom da Magia","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é capaz de canalizar magias muito mais facilmente. As dificuldades de todas as Magia são diminuídas em 1 para você. Você também tem +5 Pontos de Mana.","especial":"","resumo":"Dificuldade de Magias -1. Mana +5.","efeito":["mana+",5,"modificador","dificuldade",[],["Magia"],["Ação"],[],1]},{"nome":"Dom do Artífice","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Mente Disciplinada"]],"descricao":"Desenhando uma Runa Arcana sobre si mesmo, o conjurador recebe +2 em um Atributo à sua escolha. Além disso, se essa Runa for realizada antes de uma sessão de encantamento, o Artífice não fica exausto no fim do dia, recuperando metade dos seus Pontos de Mana totais durante o ritual. Isso não permite ao Artífice apressar o processo de um encantamento, mas ele pode se dedicar à dois encantamentos ao mesmo tempo. Essa Runa Arcana dura 1 minuto.","especial":"","resumo":"Recebe +2 em atributo à escolha. Não exausto após encantamento.","efeito":[]},{"nome":"Durão","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você viu e fez muita coisa na vida, e poucas situações o abalam. Você recebe +1d6 em todos os seus testes para resistir a efeitos de medo. Além disso, você tem Determinação +2 e 5 Pontos de Vida a mais.","especial":"","resumo":"Resistir a Medo +1d6. Determinação +2.","efeito":["determinacao+",2, "vida+",5]},{"nome":"Duro como Pedra","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",1],"descricao":"Sua pele é mais grossa e resistente que a da maioria dos outros Anões. Você tem +10 Pontos de Vida e Defesa +1 (esse bônus de Defesa conta como Armadura).","especial":"Você só pode selecionar essa Habilidade durante a criação do personagem.","resumo":"Vida +10. Defesa +1 (conta como Armadura).","efeito":["vida+",10,"armadura_natural",1,false,false]},{"nome":"Égide","categoria":"Técnica","tipo":"Reação","mana":15,"dificuldade":0, "requisitos":["habilidade",["Código da Coragem"]],"descricao":"Você sempre está pronto para se interpor diante do perigo. Se um ataque ou magia for atingir um alvo adjacente a você, você pode se interpor e sofrer o ataque no lugar do alvo original. Você sofre apenas metade do dano do ataque ou magia, mas sofre quaisquer outros efeitos normalmente.","especial":"","resumo":"Recebe metade do dano de ataque ou magia ao invés do alvo adjacente.","efeito":[]},{"nome":"Eletricidade Estática","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":8, "requisitos":[],"descricao":"Desenhando uma runa Arcana sobre um objeto ou criatura, você o carrega com uma forte carga de eletricidade estática, prendendo-o à qualquer superfície em que estiver tocando. Pode ser usado em um item portátil para tornar impossível que ele seja derrubado ou em uma criatura para impedir que ela tire os pés do chão – reduzindo seu Deslocamento para 0 e sua Agilidade em -2. Um alvo afetado dessa forma pode fazer um teste de Força com dificuldade igual à Determinação do conjurador como uma ação de movimento para tentar tirar os pés do chão. Essa Runa Arcana dura 1 minuto, mas se a criatura afetada conseguir tirar um dos pés do chão, seus efeitos sobre ela se dissipam imediatamente.","especial":"","resumo":"Prende o alvo a qualquer superfície por 1min. Escapar FOR[DET].","efeito":[]},{"nome":"Eletrosfera","categoria":"Magia","tipo":"Ação","mana":40,"dificuldade":13, "requisitos":["nivel",5,"habilidade",["Relâmpago 2"]],"descricao":"Você desenha uma Runa Arcana sobre si mesmo, fazendo um turbilhão de raios elétricos emanarem a partir dela. No final do seu turno, tudo e todos que estiver a uma quantidade de metros igual à sua Inteligência ao seu redor sofrem uma quantidade de dano igual a <a class=\'elet\'>20</a>/Eletricidade. Alvos usando armaduras com a Característica Pesada que sofram esse dano também ficam Atordoadas por 1 turno. Essa Runa Arcana dura uma quantidade de turnos igual à sua Vontade.","especial":"","resumo":"Área de <a class=\'inteligencia\'> </a> m. Dano <a class=\'eletricidade\'></a> por <a class=\'vontade\'> </a> turnos.","efeito":[]},{"nome":"Elixir da Longa Vida","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Iátrico"]],"descricao":"Você é um especialista na fabricação e aplicação de Elixires e antídotos e recebe +1d6 em rolagens para produzir esse tipo de poção. Além disso, elixires produzidos por você que recuperem Pontos de Vida ou Mana recuperam 10 Pontos de Vida ou Mana a mais, e elixires produzidos por você que causem dano causam 5 pontos de dano a mais.","especial":"","resumo":"Elixir&Antídoto: Produzir +1d6, Cura +10, Dano +5.","efeito":[]},{"nome":"Elo Natural","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo da Natureza"]],"descricao":"Você desenvolveu um forte elo com a natureza através de sua adoração à Ellenis. Você recebe +1 em todas as suas rolagens referentes a criaturas naturais – qualquer criatura exceto construtos, mortos-vivos, amaldiçoados, espíritos, demônios e devas. Esse bônus se aplica a ataques, interação social, rastrear e realizar Magias sobre essas criaturas. Além disso, todas as Habilidades de Companheiro Animal são consideradas Habilidades de Classe para você.","especial":"","resumo":"Criaturas Naturais +1.","efeito":[]},{"nome":"Elo Vital","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo da Vida"]],"descricao":"Você possui uma forte ligação com a energia vital. Você recebe 2 em todos os seus testes quando estiver utilizando um kit de cura e quando estiver conjurando Magias que curem Pontos de Vida. Estes benefícios não tem efeito com relação a construtos, espíritos e mortos-vivos.","especial":"","resumo":"Kit de Cura +2, Magias de Cura +2.","efeito":["modificador","dificuldade",[],["Magia"],["Ação"],["cura"],2]},{"nome":"Eloquente","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você tem um talento de convencer ou comover outras pessoas apenas falando do jeito certo. Você recebe +1d6 em todos os seus testes para persuadir, mentir, perceber mentiras, intimidar ou em qualquer outra interação social.","especial":"","resumo":"Persuadir, Mentir, Perceber mentiras, Intimidar +1d6.","efeito":[]},{"nome":"Emboscar","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Camuflagem"]],"descricao":"Você se especializou em emboscar inimigos incapazes de percebê-lo. Quando fizer um ataque à distância contra um alvo Desprevenido, faça imediatamente um Confronto com sua Agilidade versus Inteligência do alvo. Se o seu resultado for mais alto do que o do alvo, ele não consegue perceber de onde veio o ataque, tornando impossível para o alvo lhe atacar (ou mesmo ter uma ideia aproximada da sua posição, a menos que ela seja óbvia) enquanto você permanecer escondido.","especial":"","resumo":"Teste AGIxINT de alvo Desprevenido para não ser notado.","efeito":[]},{"nome":"Empalar","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Ataque Aleijador", "Disparo Certeiro"]],"descricao":"Se você rolar um Sucesso Crítico em um ataque à distância (incluindo arremessos) usando uma arma que cause dano por Perfuração, o dano será multiplicado por 3 ao invés de 2. Este é um efeito de sangramento.","especial":"","resumo":"Sangramento. Crítico de projéteis de Perfuração causam 3* o dano.","efeito":[]},{"nome":"Empunhadura Flexível","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Combate com Duas Armas 1"]],"descricao":"Você sabe como utilizar armas de haste em combate próximo de forma eficiente – e sabe aproveitar o tamanho de armas pouco tradicionais como se fossem armas de haste. Sempre que estiver utilizando uma arma de haste, você pode mudar o modo como empunha a arma e considerar o cabo da arma como uma segunda arma. Considere que o cabo de uma arma de haste tem FN igual à metade da FN da arma (arredondando para baixo) e causa dano igual à Força +5/Contusão. Quando empunhar uma arma de haste dessa forma, o alcance da arma passa a ser corpo-a-corpo até o início do seu próximo turno. Você pode mudar o modo como vai empunhar a arma no começo de cada um dos seus turnos, como uma ação livre. Além disso, você passa a considerar bordões, cajados e claymores como tendo alcance de haste para todos os propósitos.","especial":"","resumo":"Ataque com cabo de haste FOR+5/Cont. Bordão,Cajado,Claymore->Haste.","efeito":[]},{"nome":"Empurrão Cinético","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":13, "requisitos":["habilidade",["Telecinésia"]],"descricao":"Desenhando uma Runa Arcana entre você e um alvo, você faz com que ele seja projetado em linha reta um número de metros igual à Vontade do conjurador. Se o alvo atingir uma superfície sólida ou outra criatura no trajeto que foi projetado, ele (e qualquer criatura que atinja no trajeto) sofre dano como se tivesse caído aquela distância. O alvo empurra tudo o que atingir no trajeto, que só será interrompido se o alvo atingir um objeto que não possa ser empurrado – como uma parede ou árvore. Além disso, no final do trajeto em que foi projetado, o alvo (e qualquer criatura que ele tenha atingido no trajeto) precisa vencer um teste de Agilidade (Dificuldade igual à Determinação do conjurador) ou cairá. Essa Runa Arcana se dissipa assim que seus efeitos forem desencadeados.","especial":"Criaturas com as Habilidades Combate Gigante ou Colosso são empurrados apenas um número de metros igual à metade da Vontade do Conjurador (arredondado para baixo).","resumo":"Empurra alvo VON metros. Dano queda. Alvo AGI[<a class=\'determinacao\'> </a>]: Caído.","efeito":[]},{"nome":"En Passant","categoria":"Técnica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Flanquear"]],"descricao":"Se um alvo que está adjacente a você tentar se afastar ou se levantar, você pode imediatamente fazer uma ação normal (sem Habilidades de Ação) contra ele. O alvo é considerado Despreparado contra essa ação.","especial":"","resumo":"Ataque alvo que tentar se levantar ou afastar.","efeito":[]},{"nome":"Encantar Talismã","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":10, "requisitos":[],"descricao":"Desenhando uma Runa Arcana sobre um item, você faz com que a próxima Magia conjurada sobre o item fique armazenada nele, podendo ser utilizada por seu portador como uma ação padrão. Habilidades e itens que alterem propriedades de uma Magia não tem efeitos sobre uma Magia conjurada a partir do Talismã. Esta Runa Arcana dura indefinidamente (mas pode ser dissipada a qualquer momento pelo conjurador) se dissipando quando os efeitos da magia armazenada no item forem desencadeados. Enquanto uma Magia estiver armazenada no item, os Pontos de Mana usados para conjurar Encantar Talismã não podem ser recuperados.","especial":"","resumo":"Item alvo armazena a pŕoxima magia conjurada sobre ele. Mana presa.","efeito":[]},{"nome":"Enfeitiçar Arma 1","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":[],"descricao":"Desenhando uma Runa Arcana sobre uma arma, você confere um bônus de +1 nas rolagens de ataque e nos danos dessa arma. Essa Runa Arcana dura 1 minuto.","especial":"","resumo":"Arma à escolha recebe ataque +1 e dano +1 por 1 minuto.","efeito":[]},{"nome":"Enfeitiçar Arma 2","categoria":"Magia","tipo":"Ação","mana":25,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Enfeitiçar Arma 1"]],"descricao":"Desenhando uma Runa Arcana sobre uma arma, você confere um bônus de +3 nas rolagens de ataque e nos danos dessa arma. Essa Runa Arcana dura 1 minuto.","especial":"","resumo":"Arma à escolha recebe ataque +3 e dano +3 por 1 minuto.","efeito":[]},{"nome":"Enfeitiçar Armadura","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":10, "requisitos":[],"descricao":"Desenhando uma Runa Arcana sobre uma armadura ou vestimenta, você aumenta o bônus de defesa do item em +1 (ou confere +1 de Armadura para uma peça de roupa comum). Essa Runa Arcana dura 1 minuto.","especial":"","resumo":"Bônus de Armadura +1 por 1 minuto.","efeito":[]},{"nome":"Entrelaçar","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Sabedoria Selvagem"]],"descricao":"Desenhando um Selo Místico sobre o solo você faz com que plantas comecem a brotar e agarrem um alvo que esteja com os pés no chão, reduzindo seu Deslocamento a 0 e sua Agilidade em -2 enquanto estiver preso dessa forma. Para se soltar, ele (ou outro personagem) deve passar uma quantidade de turnos igual à Vontade do conjurador cortando as plantas (com uma arma que faça dano por corte), ou passar em um teste de Força (Dificuldade igual à Determinação do conjurador). As plantas murcham e se desfazem após 1 minuto. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Plantas prendem: Desloc=0. AGI-2 por 1 min. Escapar: FOR[<a class=\'determinacao\'> </a>].","efeito":[]},{"nome":"Erudito","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você passou anos estudando livros sobre os mais diversos assuntos. Você rola +1d6 em qualquer teste ligado à história, heráldica, geografia, religião, astrologia ou qualquer tipo de conhecimento teórico.","especial":"","resumo":"Conhecimentos Teóricos +1d6.","efeito":[]},{"nome":"Esconderijo Invisível","categoria":"Característica","tipo":"Ação","mana":-1,"dificuldade":0, "requisitos":[],"descricao":"Você é extremamente hábil em se esconder, e consegue fazer isso de modo quase sobrenatural! O custo dessa Habilidade varia de acordo com o esconderijo à disposição, entre 10 (um local escuro ou com boa cobertura, como um arbusto de folhagem densa com o dobro do seu tamanho) e 30 (atrás de uma pedra do seu tamanho, no meio de um dia ensolarado). Você pode permanecer no esconderijo por até 1 hora, e enquanto fizer isso, você é considerado Invisível.","especial":"","resumo":"É considerado invisível em esconderijo. Mana varia com local (10~30).","efeito":[]},{"nome":"Espagiria","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você se especializou na produção e utilização de Extratos – o que, via de regra, significa jogar frascos de poção à uma boa distância! Você recebe +2 nos seus testes para produzir Extratos e em seus teses de arremesso.","especial":"","resumo":"Produzir e arremessar Extratos +2.","efeito":[]},{"nome":"Espírito Animal","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu espírito possui a forma de um animal. Escolha um Espírito Animal para ser seu guia. Essa escolha é permanente e não pode ser mudada posteriormente.","especial":"","resumo":"","efeito":["espirito_animal"]},{"nome":"Estabilidade","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você gosta de ter os dois pés solidamente plantados no chão – e faz isso muito bem! Você sempre rola +1d6 em todos os seus testes de evitar quedas e manter o equilíbrio.","especial":"","resumo":"Evitar quedas e manter o equilíbrio +1d6.","efeito":[]},{"nome":"Estraçalhar","categoria":"Técnica","tipo":"Ação","mana":35,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Combate com Duas Armas 1"]],"descricao":"Você salta sobre um alvo atacando com tudo o que tem! Faça um Encontrão realizando todos os seus possíveis ataques corporais (em geral dois socos/garradas/ataques com armas, dois chutes/ataques com cascos e uma cabeçada/mordida/marrada). Se você possuir Habilidades do tipo Característica que permitam mais ataques (como Braços Extras 2) você pode realizar todos estes ataques.","especial":"","resumo":"Encontrão + Todos os ataques possíveis.","efeito":[]},{"nome":"Evasão","categoria":"Técnica","tipo":"Reação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Se o seu inimigo fizer um ataque corporal e acertar, você pode declarar evasão, e obrigar o inimigo a rolar novamente o teste de ataque. Você pode escolher com qual dos resultados o oponente vai ficar. Esta Habilidade só pode ser usada uma vez por rodada.","especial":"","resumo":"Atacante deve rerolar um ataque. Escolha resultado. Uma vez por turno.","efeito":[]},{"nome":"Evocar Nevasca","categoria":"Magia","tipo":"Ação","mana":40,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Evocar Temporal"]],"descricao":"Desenhando um Selo Místico sobre si mesmo, você pode iniciar uma nevasca ou chuva de granizo que cobre uma área de 1 km de diâmetro. Essa área se move conforme você se desloca, permanecendo centrada em você. Todos na área, exceto você, sofrem dano igual a <a class=\'frio\'>6</a>/Frio (nevasca) ou 6/Contusão (granizo) a cada turno que estiverem desabrigados e todos os testes dentro da área são realizados como se os personagens fossem Inaptos. O temporal leva 3 turnos para se formar e o Selo Místico se dissipa em um número de minutos igual à sua vontade.","especial":"","resumo":"Granizo 1km. Começa em 3 turnos. <a class=\'frio\'>6</a>/Frio (nevasca) ou 6/Cont por <a class=\'vontade\'> </a> min, exceto você.","efeito":[]},{"nome":"Evocar Temporal","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":11, "requisitos":["habilidade",["Princípio Natural"]],"descricao":"Desenhando um Selo Místico sobre si mesmo, você inicia uma poderosa tempestade de chuva ou vento. A tempestade cobre uma área de 1 km de diâmetro e se move conforme você se desloca, permanecendo centrada em você. Todos na área realizam seus testes como se fossem Inaptos. O temporal leva 3 turnos para se formar e o Selo Místico se dissipa em um número de minutos igual à sua Vontade.","especial":"","resumo":"Chuva ou vento, 1km. Começa em 3 turnos. Inaptidão geral por <a class=\'vontade\'> </a> minutos.","efeito":[]},{"nome":"Exorcismo","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":11, "requisitos":[],"descricao":"Você desenha um Selo Místico no ar que expurga os mortos-vivos, demônios e espíritos que estiverem a uma distância em metros igual à sua Determinação ao seu redor, fazendo com que eles imediatamente percam 10 Pontos de Vida e 10 Pontos de Mana. Criaturas afetadas que tenham Mente Vazia perdem todos os seus Pontos devida e Mana imediatamente. Mortos-vivos destruídos por essa magia voltarão a ser cadáveres inanimados e não poderão ser reanimados novamente, demônios são imediatamente enviados de volta ao inferno e não podem sair de lá por 1 ano e espíritos são permanentemente dissipados. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Expurga Demônio, Morto-Vivo e Espírito em <a class=\'determinacao\'> </a> metros, dano 10 Vida&Mana.","efeito":[]},{"nome":"Explorar Surpresa","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Flanquear"]],"descricao":"Faça um ataque contra um alvo Despreparado. Esse ataque causa o dobro do dano normal.","especial":"","resumo":"Ataque contra alvo Despreparado. Dano dobrado.","efeito":[]},{"nome":"Expurgo Elemental","categoria":"Técnica","tipo":"Ação","mana":25,"dificuldade":0, "requisitos":[],"descricao":"Você canaliza a energia de sua divindade através de sua arma em um ataque inescapável. Quando ativar esta Habilidade, selecione um tipo de dano elemental (Frio, Fogo ou Eletricidade). Este golpe causa uma quantidade de dano extra do tipo selecionado igual à sua Determinação. Mesmo se o golpe errar o dano elemental ainda atinge o alvo – a menos que o ataque seja uma falha crítica.","especial":"Essa Habilidade não tem efeito em criaturas que possuam um Dogma.","resumo":"Ataque CaC & dano Determinação por Fogo, Frio ou Eletricidade.","efeito":[]}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_habilidadesFG() {
    return '{"habilidade":[{"nome":"Falhas da Armadura","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você sabe como acertar ataques entre as frestas e falhas das armaduras do inimigo. Ignore sempre o bônus de Armadura da Defesa do oponente.","especial":"","resumo":"Ignore o bônus de armadura dos oponentes.","efeito":[]},{"nome":"Farda","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você sabe como envergar uma farda adequadamente e está ciente disso, o que lhe garante não apenas uma presença imponente, mas também um incremento em sua autoconfiança. Sempre que estiver utilizando uma vestimenta adequada ao seu posto você recebe +2 em todos os testes sociais e em sua Determinação.","especial":"","resumo":"Quando fardado, Testes Sociais e Determinação +2.","efeito":["determinacao+",2]},{"nome":"Faro","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui um faro extremamente aguçado. Você rola +1d6 quando puder fazer testes que envolvam o faro, e pode perceber, detectar, rastrear e identificar pessoas e locais através dele. O Mestre pode realizar testes para ver se você consegue farejar mesmo quando você não estiver ativamente procurando odores específicos.","especial":"","resumo":"Farejar +1d6.","efeito":[]},{"nome":"Figura Imponente","categoria":"Técnica","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você sabe se impor quando a situação requer. Você força todos os inimigos que possam vê-lo a fazer um teste de Vontade (Dificuldade igual à sua Determinação). Aqueles que falharem no teste se sentem receosos e ficam Distraídos por 1 turno.","especial":"","resumo":"Intimidar. VON[<a class=\'determinacao\'> </a>]: Distraído por 1 turno.","efeito":[]},{"nome":"Fique Longe","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Manter à Distância"]],"descricao":"Sempre que você fizer um ataque devido a uma Habilidade do tipo Reação, você recebe +2 no teste de ataque e no dano do ataque.","especial":"","resumo":"Ataque em Reação é feito com +2 e causa dano +2.","efeito":[]},{"nome":"Flanquear","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você prefere atacar seus alvos quando eles estão desatentos – e é muito eficiente fazendo isso! Sempre que você e pelo menos mais um aliado estiverem em alcance corporal de um oponente, você considera aquele oponente Despreparado em relação a você. Você só pode flanquear um alvo por turno. Se 2 ou mais adversários estiverem adjacentes a você e a um aliado ao mesmo tempo, você deve definir qual deles vai flanquear.","especial":"","resumo":"Adversário é considerado Despreparado se flanqueado por você.","efeito":[]},{"nome":"Flauta de Pã","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você ouviu, tocou e dançou várias músicas ao redor de fogueiras com seu povo – e talvez com aqueles que você encontrou em suas andanças – e adquiriu uma imensa prática em vários estilos de instrumentos de sopro. Sempre que estiver usando uma flauta ou outro instrumento de sopro, a você recebe +2 em seus testes para executar músicas (incluindo as Habilidades do tipo Música).","especial":"","resumo":"Instrumentos de Sopro +2.","efeito":[]},{"nome":"Flechas Rápidas","categoria":"Técnica","tipo":"Reação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Após fazer um ataque normal usando um arco, você pode fazer imediatamente outro ataque normal com o arco.","especial":"Esta Habilidade só pode ser usada 1 vez por turno.","resumo":"Ataque extra com arco.","efeito":[]},{"nome":"Flexível","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você tem o corpo muito flexível, capaz de se dobrar, esticar e espremer de maneiras extremas. Você pode passar por aberturas como se tivesse apenas metade do seu tamanho, consegue escorregar para fora de grilhões e amarras com facilidade, pode se esticar e dobrar de modos a alcançar pontos de apoio difíceis numa escalada além de ser mais ágil quando corre e escapa de obstáculos, recebendo um bônus de +2 em qualquer teste que envolva esse tipo de circunstância.","especial":"Armaduras com a Característica Pesada impedem que você receba os bônus por esta Habilidade.","resumo":"Escapar, Escorregar, Esticar, etc. +2. Impedido por Armadura Pesada.","efeito":[]},{"nome":"Força de Explosão","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Ataque do Búfalo"]],"descricao":"Quando fizer ataques que têm chance de derrubar o oponente você pode afetar alvos até 10 vezes mais pesados do que você (a maioria dos ataques que derrubam oponentes só afetam alvos com até o dobro do seu peso). Além disso, se você usar qualquer Habilidade que derrube o oponente, a dificuldade para resistir ao efeito e aumentada em +2.","especial":"","resumo":"Derrubar +2. Afeta alvos até 10 vezes mais pesados.","efeito":[]},{"nome":"Força Divina","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você coloca toda sua vontade em seus golpes. Sempre que acertar um ataque corporal, some sua Vontade ao dano daquele ataque.","especial":"Essa Habilidade não tem efeito em criaturas que possuam um Dogma.","resumo":"Dano +Vontade, exceto em alvos com Dogma.","efeito":["modificador","dano",[],[],[],["CaC"],"von"]},{"nome":"Força Heróica","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você possui uma força e resistência forjadas na batalha. Você tem Força +1.","especial":"","resumo":"Força +1.","efeito":["for+",1]},{"nome":"Força Interior","categoria":"Característica","tipo":"Ação","mana":5,"dificuldade":0, "requisitos":["von",4],"descricao":"Você é capaz de se manter em pé usando sua vontade e força interiores. Você recupera 5 Pontos de Vida.","especial":"","resumo":"Recupera 5 pontos de Vida.","efeito":[]},{"nome":"Forjado à Fogo","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você passou muito tempo nas forjas ou nasceu abençoado por Hou com uma resistência inata ao fogo e seus malefícios. Você possui Resistência ao Fogo e sua visão e respiração não são afetadas por fumaça.","especial":"","resumo":"Resiste Fogo. Imune a fumaça.","efeito":[]},{"nome":"Forma Animal 1","categoria":"Característica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Benção de Ellenis"]],"descricao":"Você pode se transformar em qualquer Besta dos tipos Mamífero, Réptil, Ave ou Peixe com até 1,5 metros de tamanho. Use as estatísticas do animal em que se transformou, mantendo apenas sua Inteligência, Vontade, Pontos de Vida e Pontos de Mana. Não é possível lançar magias, usar armas ou falar com criaturas que não sejam da espécie em que você se transformou enquanto este efeito estiver ativo. Todo o equipamento que você estiver carregando é absorvido e desaparece na transformação e nenhum deles oferecerá nenhum modificador enquanto você permanecer na forma animal (incluindo itens mágicos). Você pode permanecer nesta forma por até 1 hora, mas pode retomar sua forma natural à qualquer momento.","especial":"","resumo":"Até 1 hora como mamífero,réptil,ave,peixe até 1.5x seu tamanho.","efeito":[]},{"nome":"Forma Animal 2","categoria":"Característica","tipo":"Ação","mana":30,"dificuldade":-1, "requisitos":["nivel",5,"habilidade",["Forma Animal 1"]],"descricao":"Sua capacidade de assumir a forma de um animal permite que você se transforme em qualquer Besta dos tipos Mamífero, Ave, Réptil ou Peixe com até 3 metros de tamanho. Use as estatísticas do animal em que se transformou, mantendo apenas sua Inteligência, Vontade, pontos de vida e pontos de Mana. Não é possível lançar magias, usar armas ou falar com criaturas que não sejam da espécie em que você se transformou enquanto este efeito estiver ativo. Todo o equipamento que você estiver carregando é absorvido e desaparece na transformação, nenhum deles oferecerá qualquer modificadores enquanto você permanecer na forma animal (incluindo itens mágicos). Você pode permanecer nesta forma por até 1 hora, mas pode retomar sua forma natural a qualquer momento.","especial":"","resumo":"Até 1 hora como mamífero,réptil,ave,peixe de até 3 metros.","efeito":[]},{"nome":"Forma da Raposa","categoria":"Característica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["von",5,"habilidade",["Raça Florestal"]],"descricao":"Você atingiu um estágio tão profundo de compreensão do Mtii’Ruah que se tornou capaz de assumir uma forma mais próxima da essência de Ellenis. Quando assume a forma de raposa, todos os itens que você estiver carregando são absorvidos pela nova forma (eles não oferecem nenhum bônus), mas estarão com você quando voltar à sua forma normal. apesar de continuar entendendo qualquer linguagem que conheça, você consegue se comunicar apenas com raposas e você não pode lançar magias, ativar itens mágicos, usar armas ou qualquer item que requeira as mãos. Na forma de raposa você recebe +2 em todos os testes que envolvam percepção, se esconder, mover-se em silêncio e saltar e seu Deslocamento é aumentado em 1. Esses bônus se acumulam com os bônus de Pernas Vulpinas. Além disso seu bônus automático de Defesa é 7 ao invés de 5 e você pode usar suas presas para desferir ataques de mordida que causam dano igual à Força +2/Corte.","especial":"","resumo":"Percepção+2. Agilidade+2. Deslocamento+1. Defesa Base 7.","efeito":[]},{"nome":"Formação de Batalha 1","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Táticas de Batalha"]],"descricao":"Dando ordens precisas para seus aliados você aumenta sua eficiência em combate. Todos os aliados que puderem lhe ouvir recebem um bônus de +1 na Defesa por 1 minuto. Esse efeito é cancelado se o personagem ficar Amedrontado, Atordoado, Distraído, Paralisado ou Cego. Esse bônus de Defesa pode ser tanto de Bloqueio quanto de Esquiva, à escolha do jogador que recebe o bônus.","especial":"","resumo":"Aliados: Esquiva ou Bloqueio +1 por 1 min ou se desconcentrarem.","efeito":[]},{"nome":"Formação de Batalha 2","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Formação de Batalha 1"]],"descricao":"Dando ordens precisas para seus aliados você aumenta sua eficiência em combate. Todos os aliados que puderem lhe ouvir recebem um bônus de +2 na Defesa por 1 minuto. Esse efeito é cancelado se o personagem ficar Amedrontado, Atordoado, Distraído, Paralisado ou Cego. Esse bônus de Defesa pode ser tanto de Bloqueio quanto de Esquiva, à escolha do jogador que recebe o bônus.","especial":"","resumo":"Aliados: Esquiva ou Bloqueio +2 por 1 min ou se desconcentrarem.","efeito":[]},{"nome":"Fortaleza","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é particularmente robusto e estoico. Você tem Resistência à Contusão e tem +5 Pontos de Vida.","especial":"Você só pode selecionar essa Habilidade durante a criação do personagem.","resumo":"Resiste Contusão. Vida+5.","efeito":["vida+",5]},{"nome":"Frio Intenso","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Congelar"]],"descricao":"Você aprendeu a produzir magias que produzem um frio muito mais intenso. Suas magias que causem dano por Frio causam 6 pontos de dano adicionais. Além disso, se uma magia congelar objetos ou criaturas, elas permanecerão congeladas por uma quantidade de horas igual à sua Vontade antes de começarem a descongelar normalmente.","especial":"Em climas particularmente quentes, como desertos ou áreas vulcânicas, esse efeito dura apenas metade do tempo (arredondado para baixo). Além disso, se o gelo for atingido por magias que causem dano por fogo, esse efeito é cancelado imediatamente, e o gelo passará a descongelar na sua velocidade normal.","resumo":"Magia(Frio) dano+6. Congelamento dura <a class=\'vontade\'> </a> horas.","efeito":["modificador","descricao+",[],["Magia"],["Ação"],["frio"],6]},{"nome":"Fruto Revigorante","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Bons Frutos"]],"descricao":"Desenhando um Selo Místico sobre uma planta frutífera – mesmo morta – você faz com que ela desenvolva um único fruto grande e suculento capaz de restaurar <a class=\'cura\'> 30 </a> Pontos de Vida de quem o ingerir. Se não for ingerida, a fruta perde sua capacidade de cura após 1 minuto. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Planta frutífera gera um fruto que recupera <a class=\'cura\'>30</a> pontos de Vida.","efeito":[]},{"nome":"Fulgurante","categoria":"Característica","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seus olhos são um reflexo do brilho de Hou que queima dentro de você. Você é capaz de enxergar normalmente no escuro, e não é afetado por efeitos que restrinjam a visão – como fumaça, poeira, areia, chuva, magias que causem cegueira, etc. No entanto, seus olhos sempre emitem um brilho considerável, e isso torna sua presença extremamente fácil de notar, principalmente no escuro. Você sempre realiza seus testes para se esconder como se fosse Inapto. Especial: Você só pode selecionar essa Habilidade durante a criação do personagem.","especial":"","resumo":"Olhos brilham. Visão no escuro e imune a restrições.","efeito":[]},{"nome":"Fúria Bestial","categoria":"Característica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":[],"descricao":"Você foi tocado pelo espírito do Urso ou pelo espírito do Lobo, e pode invocar a fúria que provém do instinto de sobrevivência deles. Enquanto estiver neste estado você recebe Força +2 e fica imune a Efeitos de Medo. Este efeito dura até o final da batalha ou até que você fique dois turnos sem atacar. Você não pode estar em Fúria Bestial e Fúria de Batalha ao mesmo tempo.","especial":"Se você tiver um Espírito Animal que não seja o Urso ou o Lobo, você não pode possuir esta Habilidade. Se você possuir esta Habilidade, você só pode escolher o Lobo ou o Urso como seu Espírito Animal.","resumo":"Força+2. Imune a Medo. Até o fim de combate ou dois turnos sem atacar.","efeito":[]},{"nome":"Fúria de Batalha","categoria":"Técnica","tipo":"Reação","mana":30,"dificuldade":0, "requisitos":["!raca",["Aesir"]],"descricao":"Quando você é ferido você é tomado por uma irrefreável fúria destrutiva, ficando neste estado até o final do combate – ou até ficar dois turnos sem atacar. Você precisa sofrer pelo menos 1 ponto de dano de qualquer fonte – inclusive auto-infligido – para que essa Habilidade possa ser ativada. Enquanto estiver em Fúria, você recebe Força +2 e fica imune a efeitos de Medo.","especial":"","resumo":"Força+2. Imune a Medo. Dano para ativar. Combate ou 2 turnos sem atacar.","efeito":[]},{"nome":"Furtivo","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é particularmente discreto quando quer. Você pode rolar +1d6 quando fizer testes para se mover em silêncio, se esconder, camuflar, ou usar disfarces.","especial":"","resumo":"Furtividade, Esconder, Camuflar, Disfarces, etc. +1d6.","efeito":[]},{"nome":"Garras","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você treinou o uso de suas garras como ferramentas e armas. Você pode realizar ataques desarmados com suas garras, causando dano igual à Força+2/Perfuração. Suas garras também podem ser utilizadas para cortar cordas, panos e outros materiais com pouca dureza, e você recebe um bônus de +2 em seus testes de escalar, agarrar e segurar.","especial":"","resumo":"Garras FOR+2/Perf. Escalar, Agarrar, Segurar +2.","efeito":["+ataque","Garras","Perfuração","CaC",true,2]},{"nome":"Gatuno","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você aprendeu com a dura vida nas ruas a sobreviver na selva urbana. Você nunca é considerado Inapto quando tentar furtar bolsos ou arrombar fechaduras usando um kit de arrombamento. Além disso, você rola +1d6 quando tentar escalar, se esconder e tentar passar despercebido.","especial":"","resumo":"Furtividade, Escalar, Esconder +1d6. Nunca* inapto para ladinagem.","efeito":[]},{"nome":"Gavinhas e Espinhos","categoria":"Magia","tipo":"Ação","mana":25,"dificuldade":12, "requisitos":["nivel",5, "habilidade",["Entrelaçar", "Rajada de Espinhos"]],"descricao":"Desenhando um Selo Místico sobre o solo você faz com que plantas espinhosas comecem a brotar e agarrem um alvo que esteja com os pés no chão. O alvo fica com Deslocamento 0, é considerado Desprevenido e sofre uma quantidade de dano igual a 10/Perfuração. Para se soltar ele (ou outro personagem) deve passar uma quantidade de turnos igual à sua Vontade cortando as plantas (com uma arma que faça dano por corte), ou passar em um teste de Força (Dificuldade igual à Determinação do conjurador). Toda vez que ataca as plantas ou fracassa no teste de Força, o alvo sofre dano igual a 10/Perfuração. As plantas murcham e se desfazem após 1 minuto. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Espinhos prendem alvo por 1 min. 10/Perf, repete ao se mover.","efeito":[]},{"nome":"Gigantismo","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["!raca", ["Anão","Metadílio"]],"descricao":"Você é mais alto do que o normal para sua Raça. Você recebe +10 Pontos de Vida, +1 em seu Deslocamento e pode usar armas corporais de duas mãos com uma mão só (desde que não sejam armas de haste) se tiver Força suficiente (você não pode usar uma arma dessa forma usando as regras de Inaptidão por Força menor do que a FN da arma). No entanto, sua Defesa Básica é 4 ao invés de 5. Além disso, você realiza testes para se esconder, mover em silêncio e se disfarçar como se fosse Inapto.","especial":"Você só pode selecionar esta Habilidade durante a criação do personagem.","resumo":"Vida+10. Armas CaC de duas mãos como uma, exceto haste. Defesa Base 4.","efeito":["vida+",10,"deslocamento+",1,"defesa+",-1,"gigantismo"]},{"nome":"Golpe com Escudo","categoria":"Técnica","tipo":"Reação","mana":5,"dificuldade":0, "requisitos":[],"descricao":"Se você estiver portando um escudo e errar um ataque corporal com sua arma, você pode imediatamente fazer um ataque corporal normal contra o mesmo alvo com seu escudo. Um ataque com um escudo causa dano igual à Força + FN do escudo/Contusão.","especial":"","resumo":"Se atacante CaC, contra-ataca com Escudo. FOR+FN/Contusão.","efeito":[]},{"nome":"Golpe Devastador 1","categoria":"Técnica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":["habilidade",["Nocautear"]],"descricao":"Você pode fazer um ataque corporal que causa o dobro de dano, e se acertar, o alvo precisa vencer um confronto de Resistência (adicione a FN da arma que estiver usando no seu teste) contra você ou ficará Paralisado por um turno.","especial":"","resumo":"Ataque CaC dano*2, se acertar FORxFOR+FN: Paralisado 1 turno.","efeito":[]},{"nome":"Golpe Devastador 2","categoria":"Técnica","tipo":"Ação","mana":60,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Golpe Devastador 1"]],"descricao":"Faça um ataque corporal contra o alvo. Se acertar, o ataque causa o triplo do dano normal e o alvo precisa vencer um confronto de Resistência (adicione a FN da arma que estiver usando no seu teste) contra você ou ficará Paralisado por um turno.","especial":"","resumo":"Ataque CaC dano*3. For x For+FN: Paralisado 1 turno.","efeito":[]},{"nome":"Golpe do Vento","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Enfeitiçar Arma 1"]],"descricao":"Você é capaz de cortar o ar, enviando uma rajada de vento mágico que corta alvos distantes. Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal contra um alvo dentro da sua linha de visão. Esse ataque causa o dano normal da arma.","especial":"","resumo":"Ataque Cac à distância.","efeito":[]},{"nome":"Golpe Justo","categoria":"Padrão","tipo":"Reação","mana":30,"dificuldade":0, "requisitos":["nivel",10],"descricao":"Sempre que realizar um ataque corporal contra uma criatura, você pode mudar o resultado de um dos dados para 6.","especial":"Essa Habilidade não tem efeito em criaturas que possuam um Dogma.","resumo":"Em ataque CaC substitua o resultado de um dado por 6.","efeito":[]},{"nome":"Golpes Rápidos","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Você pode fazer dois ataques corporais com uma arma que estiver empunhando, desde que esteja empunhando a arma com apenas 1 mão.","especial":"","resumo":"Dois ataques CaC com arma em uma mão.","efeito":[]},{"nome":"Graça Divina","categoria":"Magia","tipo":"Ação","mana":5,"dificuldade":8, "requisitos":[],"descricao":"Desenhando um Selo Místico sobre uma criatura viva, você imbui ela com a graça de sua Divindade. O alvo recebe +1 em todas as suas rolagens. Este Selo Místico dura por 1 minuto.","especial":"","resumo":"Alvo recebe +1 em todas as rolagens por 1 minuto.","efeito":[]},{"nome":"Gregário","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você consegue compreender muito rapidamente as estruturas sociais de uma cultura e seus indivíduos e é capaz de fazer amigos em qualquer lugar. Depois de cinco minutos de conversa, a pessoa com quem você esteja interagindo – e que não seja obviamente hostil a você, como um captor ou um inimigo jurado – torna-se propensa a ajudá-lo. Essa Habilidade geralmente serve para colher informações gerais (apesar de segredos não serem possíveis de conseguir) ou pequenos favores – como ser apresentado a alguém ou conseguir uma cerveja de graça. Você também recebe +2 em testes de seduzir, mentir, detectar mentiras ou qualquer outra interação social.","especial":"","resumo":"Interação Social +2.","efeito":[]},{"nome":"Grito de Guerra 1","categoria":"Padrão","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Você pode dar um grito fervoroso que motiva todos seus aliados. Eles recebem (assim como você) +1 em todas as rolagens até o final da batalha. Além disso, remova todos os efeitos de Medo que estiverem afetando os seus aliados. Você não pode usar esta Habilidade se estiver sob qualquer efeito de Medo. Este é um efeito mental.","especial":"","resumo":"Mental. Aliados: +1 em todas as rolagens, remove medo. Combate.","efeito":[]},{"nome":"Grito de Guerra 2","categoria":"Padrão","tipo":"Ação","mana":15,"dificuldade":0, "requisitos":["nivel",5, "habilidade",["Grito de Guerra 1"]],"descricao":"Você pode dar um grito fervoroso que motiva todos seus aliados. Eles recebem (assim como você) +2 em todas as rolagens até o final da batalha. Além disso, remova todos os efeitos de Medo que estiverem afetando os seus aliados. Você não pode usar esta Habilidade se estiver sob qualquer efeito de Medo.","especial":"","resumo":"Mental. Aliados: +2 em todas as rolagens, remove medo. Combate.","efeito":[]},{"nome":"Grito de Intimidação","categoria":"Padrão","tipo":"Ação","mana":35,"dificuldade":0, "requisitos":["nivel",5, "habilidade",["Grito de Guerra 1"]],"descricao":"Você pode dar um grito para intimidar seus inimigos. Todos os oponentes que estiverem a até 10 metros à sua frente que tiverem uma Determinação menor do que a sua ficam Paralisados por 2 turnos. Esse é um efeito de Medo.","especial":"","resumo":"Medo. Det>Det: Paralisado 2 turnos, 10m à frente.","efeito":[]},{"nome":"Grito Ensurdecedor","categoria":"Padrão","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Você solta um grito tão alto e poderoso que faz com que todos ao redor fiquem atordoados. Todas as criaturas em uma área de 10 metros à sua frente ficam Atordoadas por um número de turnos igual à sua Vontade.","especial":"","resumo":"Atordoa por <a class=\'vontade\'> </a> turnos, 10m à frente.","efeito":[]},{"nome":"Grito Estilhaçador","categoria":"Padrão","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Grito Ensurdecedor"]],"descricao":"Seu agudo é tão poderoso que você pode direcionar um grito capaz de romper vidros, cristais e tímpanos! Tudo e todos em até 10 metros à sua frente sofrem dano igual a 10/Corte. Criaturas com Corpo Amórfico, objetos inanimados e estruturas que sejam atingidas por esse grito sofrem o dobro do dano.","especial":"","resumo":"10/Corte, 10m à frente. Amórfico e objetos recebem dano*2.","efeito":[]},{"nome":"Guarda de Honra","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Guarda-Costas"]],"descricao":"Seu guarda-costas adquiriu muita experiência protegendo você – ou talvez você tenha contratado um combatente mais eficiente. Seu guarda-costas agora será um PDM com metade de seu nível (arredondado para cima) de uma Classe que não seja conjuradora. Você pode criar a ficha do seu guarda-costas ou optar que o Mestre faça isso – Paladino com o Código da Coragem é a opção mais indicada. O guarda-costas é um PDM controlado pelo Mestre, mas ele seguirá suas ordens desde que possa manter você dentro da sua linha de visão. Caso seu guarda-costas morra, seja dispensado, lhe abandone ou de alguma outra forma deixe de servir você, você pode contratar ou atrair um novo guarda-costas usando as mesmas regras listadas. O guarda-costas terá equipamentos adequados à sua Classe que não ultrapassem 200 moedas, mas você pode fornecer equipamentos melhores se tiver condições.","especial":"","resumo":"Guarda-Costas PDM com metade do nível. Confira descrição completa.","efeito":[]},{"nome":"Guarda-Costas","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Séquito"]],"descricao":"Você promoveu um de seus seguidores – ou dispensou um deles para contratar outro – para que ele pudesse oferecer efetivamente alguma proteção para você. Um de seus seguidores passa a ser um PDM de nível 1 de uma Classe que não seja conjuradora. Você pode criar a ficha do seu guarda-costas ou optar que o Mestre faça isso – Paladino com o Código da Coragem é a opção mais indicada. O guarda-costas é um PDM controlado pelo Mestre, mas ele seguirá suas ordens desde que possa manter você dentro da sua linha de visão. Caso seu guarda-costas morra, seja dispensado, lhe abandone ou de alguma outra forma deixe de servir você, você pode contratar ou atrair um novo guarda-costas usando as mesmas regras listadas. O guarda-costas terá equipamentos adequados à sua Classe que não ultrapassem 200 moedas, mas você pode fornecer equipamentos melhores se tiver condições.","especial":"","resumo":"Guarda-Costas PDM nível 1. Confira descrição completa.","efeito":[]},{"nome":"Guardião da Natureza","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10, "habilidade",["Forma Animal 2"]],"descricao":"Sua capacidade de assumir a forma de um animal permite que você se transforme em qualquer Besta dos tipos Mamífero, Ave, Réptil ou Peixe de qualquer tamanho. O custo de Mana e a Dificuldade de qualquer Habilidade relacionada a animais também são reduzidos à metade – Transformar-se em qualquer Besta maior do que 3 metros consome 20 pontos de Mana. Finalmente, todas as habilidades de assumir formas animais passam a ter duração permanente – mas você pode cancelar seus efeitos a qualquer momento.","especial":"","resumo":"Mana e Dif. para hab. \'animal\' *0.5. Transform. duração ilimitada.","efeito":[]},{"nome":"Guerreiro de Aço 1","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você está acostumado a usar armaduras pesadas. Você considera a FN de qualquer armadura com a Característica Pesada como tendo FN-1 para todos os propósitos.","especial":"","resumo":"Armaduras Pesadas tem FN-1.","efeito":["aco1"]},{"nome":"Guerreiro de Aço 2","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Guerreiro de Aço 1"]],"descricao":"Você está extremamente acostumado a usar armaduras pesadas e se sente confortável quando verga uma. Você considera a FN de Qualquer armadura com a Característica Pesada como tendo FN-1 para todos os propósitos. Essa redução se acumula com a redução fornecida por Guerreiro de Aço 1.","especial":"","resumo":"Armaduras Pesadas tem FN-1. Cumulativo.","efeito":["aco2"]},{"nome":"Guia Espiritual","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui um Guia Espiritual que está constantemente com você. Este Guia pode assumir qualquer forma, mas normalmente escolhe a forma de um animal com o qual você tenha uma ligação ou de um de seus ancestrais. Ele se mantém sempre alerta e próximo de você, e irá lhe despertar se algum perigo se aproximar enquanto você estiver dormindo, além de lhe avisar de qualquer perigo imediato, garantir um bônus de +2 em seus testes de Iniciativa. O Guia Espiritual também pode oferecer conselhos e ajuda quando necessário. Quando estiver diante de uma situação que envolva um teste ligado à animais (adestrar, convocar um Companheiro Animal), natureza (rastrear, procurar abrigo) ou algum outro conhecimento que seu Guia poderia ter (como lidar com outros espíritos) você pode meditar por 1 hora em busca de orientação de seu Guia, recebendo +1d6 no teste apropriado.","especial":"","resumo":"Iniciativa +2. Medite por uma hora para receber conselhos (+1d6).","efeito":["iniciativa+",2]}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_habilidadesHK() {
    return '{"habilidade":[{"nome":"Habitante do Deserto","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você descende de um povo que enfrentou os rigores do deserto sem esmorecer. Você é Resistente a Fogo e pode passar até 5 dias sem precisar ingerir água. Além disso, você não é afetado por climas particularmente quentes ou áridos.","especial":"","resumo":"Resiste Fogo e climas quantes/áridos. Sobrevive 5 dias sem água.","efeito":[]},{"nome":"Herança Feérica","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui algumas características comuns aos seus ancestrais feéricos. Você é imune a qualquer efeito mental e efeito de medo além de perceber automaticamente ilusões. Você também ganha +5 Pontos de Mana.","especial":"","resumo":"Imune a efeitos Mentais e de Medo, e Ilusões. Mana +5.","efeito":["mana+",5]},{"nome":"Herbalismo","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Sabedoria Selvagem"]],"descricao":"Você pode rolar testes de Inteligência para criar poções básicas e, enquanto estiver em um ambiente selvagem, você e seus aliados não são afetados por doenças e venenos naturais – seus aliados passam a ser imunes depois de um dia inteiro que estiverem com você, desde que eles aceitem suas dicas do que comer e do que não comer. Além disso, enquanto estiver em terreno natural que possa fornecer ervas, folhas e frutos (qualquer lugar exceto cidades, desertos ou regiões glaciais) você sempre faz testes de primeiros socorros como se tivesse um Kit de Cura à mão.","especial":"","resumo":"Você e aliados não são afetados por venenos naturais. Cura natural.","efeito":[]},{"nome":"Hierofante","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Princípio Natural", "Companheiro Animal 1", "Sabedoria Selvagem"]],"descricao":"Você adquiriu um vínculo poderoso com a natureza e um vasto entendimento de seu funcionamento. Você recebe +2 em seus testes com relação a natureza, animais e magias e o custo de todas as magias que você lançar é diminuído em 5. Além disso, você pode atrair um segundo Companheiro Animal seguindo as mesmas regras descritas em Companheiro Animal 1. Seu segundo Companheiro Animal recebe os benefícios de todas as Habilidades Companheiro Animal que você tiver.","especial":"","resumo":"Conhecimentos Naturais +2. Magias: Dif.-1 Mana-5. +Comp.Animal 1.","efeito":["modificador","dificuldade",[],["Magia"],["Ação"],[],2,"modificador","mana",[],["Magia"],["Ação"],[],5]},{"nome":"Horda Selvagem","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui um magnetismo especial para um tipo de animal. Escolha uma espécie qualquer de Besta do tipo Mamífero, Ave, Réptil ou Peixe com menos de 1 metro (gatos, corvos, sapos ou carpas, por exemplo). Uma quantidade de animais do tipo escolhido igual a duas vezes a sua Vontade estão constantemente te acompanhando e, caso morram, outros aparecerão assim que você estiver em um local onde existam animais daquele tipo. Você pode convencê-los a realizar pequenos favores, mas eles não irão se colocar em perigo por você. Além disso, nenhum animal do tipo escolhido vai atacar você a menos que você o ataque primeiro.","especial":"","resumo":"Seguido por <a class=\'vontade\'> </a>*2 animais pequenos de um tipo.","efeito":[]},{"nome":"Iátrica","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você tem uma afinidade ou preferência pelas poções de cura. Você recebe +2 em seus testes para produzir Elixires e Antídotos e em testes de cuidados médicos.","especial":"","resumo":"Elixir, Antídito, Cuidados Médicos +2.","efeito":[]},{"nome":"Ilusão 1","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":9, "requisitos":[],"descricao":"Desenhando uma Runa Arcana ou Selo Místico no ar, você cria uma ilusão visual de tamanho máximo de uma pessoa ou de um baú grande. A Runa Arcana ou Selo Místico que mantém a ilusão dura até 30 minutos, mas se dissipa se o conjurador perder contato visual com ela.","especial":"","resumo":"Cria ilusão de tamanho médio(pessoa) à visão por 30 minutos.","efeito":[]},{"nome":"Ilusão 2","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":11, "requisitos":["habilidade",["Ilusão 1"]],"descricao":"Desenhando uma Runa Arcana ou Selo Místico no ar, você cria uma ilusão visual de tamanho máximo de um elefante ou uma carruagem. A Runa Arcana ou Selo Místico que mantém a ilusão dura até 30 minutos, mas se dissipa se o conjurador perder contato visual com ela.","especial":"","resumo":"Cria ilusão de tamanho grande(elefante) à visão por 30 minutos.","efeito":[]},{"nome":"Ilusão 3","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":13, "requisitos":["nivel",5,"habilidade",["Ilusão 2"]],"descricao":"Desenhando uma Runa Arcana ou Selo Místico no ar, você cria uma ilusão visual de tamanho máximo de um dragão ancião ou um casarão. A Runa Arcana ou Selo Místico que mantém a ilusão dura até 30 minutos, mas se dissipa se o conjurador perder contato visual com ela.","especial":"","resumo":"Cria ilusão de tamanho gigante(dragão) à visão por 30 minutos.","efeito":[]},{"nome":"Ilusão Eterna","categoria":"Magia","tipo":"Ação","mana":100,"dificuldade":16, "requisitos":["nivel",10,"habilidade",["Ilusão Persistente"]],"descricao":"Desenhando uma Runa Arcana ou Selo Místico sobre uma ilusão, ela passa a ter duração permanente e você não precisa manter contato visual para que ela continue ativa. Além disso, ela não se dissipa sob condições em que isso normalmente aconteceria (como alguém sob efeito de Aparência Ilusória sofrer dano, por exemplo). O conjurador pode dissipar a ilusão a qualquer momento ou adicionar uma condição para que ela se dissipe (uma frase, uma conjunção astral, um prazo, etc.).","especial":"","resumo":"Ilusão permanente até cancelada manualmente ou por condição definida.","efeito":[]},{"nome":"Ilusão Persistente","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":12, "requisitos":["nivel",5],"descricao":"Desenhando uma Runa Arcana ou Selo Místico sobre uma ilusão, você aumenta sua duração em 1 hora para cada 10 Pontos de Mana que gastar e não precisa manter contato visual para que ela continue ativa. A Runa Arcana ou Selo Místico se dissipa assim que seus efeitos são desencadeados, mas o conjurador pode dissipar a ilusão afetada a qualquer momento.","especial":"","resumo":"Ilusão persiste por até uma hora para cada 10 pontos de Mana gasto.","efeito":[]},{"nome":"Ilusão Sonora","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Som Ilusório"]],"descricao":"Você pode acrescentar som a qualquer ilusão que crie. Você controla totalmente os sons que a ilusão irá produzir e pode adicionar múltiplos sons ao mesmo tempo (barulho de passos e vozes enquanto a ilusão de um casal caminha e conversa, ranger de metal, bater de cascos, e relinchos enquanto a ilusão de um guerreiro montado em um cavalo, etc.). A ilusão terá som durante toda a sua duração.","especial":"","resumo":"Adiciona som à ilusão.","efeito":[]},{"nome":"Imparável","categoria":"Característica","tipo":"Reação","mana":20,"dificuldade":0, "requisitos":["von",5,"habilidade",["Fortaleza"]],"descricao":"Derrubar você permanentemente é uma tarefa bem difícil! Uma vez por combate, quando seus Pontos de Vida chegarem à zero, você ignora totalmente o dano que o derrubaria.","especial":"","resumo":"Uma vez por combate ignore um dano que o derrubaria.","efeito":[]},{"nome":"Implacável","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5, "habilidade",["Sem Escapatória"]],"descricao":"Sempre que errar um ataque corporal, o alvo sofre metade do dano normal do ataque (arredondando para baixo).","especial":"","resumo":"Mesmo errando um ataque CaC, alvo sofre metade do dano.","efeito":[]},{"nome":"Improvisação Ladina","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você pode pegar garrafas quebradas, lascas de madeira ou osso, pedaços de vidro ou mesmo de gelo e usar como se fosse uma adaga. Em geral uma adaga improvisada dessa forma se torna inútil depois de um ataque. Você também pode montar ou desarmar armadilhas e abrir fechaduras sem ter os materiais apropriados, desde que possa improvisar gazuas ou ferramentas – com agulhas, galhos, lascas de pedra, pedaços de armas, etc.","especial":"","resumo":"Improvisa adagas e kits de arrombamento com \'qualquer coisa\'.","efeito":[]},{"nome":"Imunidade Espiritual","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Comunhão com Espíritos"]],"descricao":"Você não recebe nenhum dano de criaturas do tipo Espírito e rola +1d6 em todos os testes de Vontade ligados a estas criaturas.","especial":"","resumo":"Imune a danos causados por Espíritos. VON +1d6 contra os mesmos.","efeito":[]},{"nome":"Imunidade Sobrenatural","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu corpo possui uma incrível resistência com maldições. Você é imune a doenças mágicas e maldições, e recebe +1d6 para resistir a doenças naturais e venenos de todas as espécies.","especial":"","resumo":"Imune a doenças mágicas e maldições e +1d6 contra as naturais.","efeito":[]},{"nome":"Incandescer","categoria":"Magia","tipo":"Ação","mana":50,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Inferno"]],"descricao":"Desenhando uma Runa Arcana sobre um objeto ou superfície, você faz com que ele aquece ao ponto de incandescer ou inflamar. Objetos de pedra e metal se tornarão quentes ao ponto de tornarem-se candentes, causando dano igual a <a class=\'fogo\'>20</a>/Fogo em qualquer coisa que tocarem – e produzindo uma quantidade considerável de calor. Metais aquecidos a esse ponto amolecem e podem ser facilmente dobrados ou quebrados. Objetos combustíveis irão se inflamar instantaneamente, e pegarão fogo mesmo que estejam ensopados – a água vai evaporar em segundos antes que eles entrem em combustão. Essa magia pode ser usada em armas, armaduras e vestimentas de criaturas vivas. Note que o objeto alvo se aquece por inteiro. Assim, uma árvore inteira secaria e então irromperia em chamas, e uma imensa sessão de uma caverna poderia subitamente se tornar mortalmente quente. Essa Runa dura um número de turnos igual à sua Inteligência, mas materiais inflamáveis que irrompam em chamas vão queimar enquanto houver combustível disponível, mesmo depois da runa se dissipar.","especial":"","resumo":"Metal/Pedra:<a class=\'fogo\'>20</a>/Fogo ao toque por <a class=\'inteligencia\'> </a> turnos.","efeito":[]},{"nome":"Inferno","categoria":"Magia","tipo":"Ação","mana":40,"dificuldade":13, "requisitos":["nivel",5,"habilidade",["Bola de Fogo"]],"descricao":"Desenhando uma Runa arcana sobre o solo, você faz com que uma área de 4 metros de diâmetro dentro da sua linha de visão entre em combustão enquanto é atingido por uma chuva de brasas e fogo. Todos que tiverem nessa área sofrem dano igual a <a class=\'fogo\'>30</a>/Fogo quando essa magia for lançada e mais <a class=\'fogo\'>30</a>/Fogo no início de cada turno que iniciarem dentro da área. Esta Runa Arcana dura 1 rodada por ponto de Inteligência que você tiver, mas você posse dissipá-la a qualquer momento. Material inflamável na área irrompe em chamas instantaneamente.","especial":"","resumo":"Linha de visão. 4m diâmetro. <a class=\'fogo\'>30</a>/Fogo por <a class=\'inteligencia\'> </a> turnos.","efeito":[]},{"nome":"Inflamar","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":8, "requisitos":[],"descricao":"Desenhando uma Runa Arcana entre você e um objeto ou superfície dentro de sua linha de visão você faz com que ele irrompa em chamas. O custo depende do tamanho da chama criada: criar a chama em uma vela tem custo 0, enquanto uma chama suficiente para acender uma tocha tem custo 5 e fazer uma fogueira de acampamento irromper em chamas imediatamente tem custo 10. Você pode produzir uma explosão de chamas diretamente sobre um item segurado por uma criatura ou na superfície onde ela está, causando dano igual a <a class=\'fogo\'>4</a>/Fogo, por 0 Pontos de Mana, <a class=\'fogo\'>8</a>/Fogo por 5 Pontos de Mana ou <a class=\'fogo\'>12</a>/Fogo por 10 Pontos de Mana. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados, mas material combustível afetado se incendeia automaticamente.","especial":"","resumo":"Inflama objeto à vista. Dano[Mana]: <a class=\'fogo\'>4</a>/Fogo[0] <a class=\'fogo\'>8</a>/Fogo[5] <a class=\'fogo\'>12</a>/Fogo[10].","efeito":[]},{"nome":"Infravisão","categoria":"Magia","tipo":"Ação","mana":5,"dificuldade":9, "requisitos":["habilidade",["Detectar Magia", "Inflamar"]],"descricao":"Você desenha uma Runa Arcana sobre um alvo, que passa a perceber o calor que emana dos objetos e criaturas sobrepondo a sua visão normal. Ele pode enxergar normalmente em locais sem iluminação nenhuma, pode perceber criaturas invisíveis pelo calor (ou frio) que elas emanam e consegue identificar ilusões, já que elas não emanam calor nem frio. Essa Runa Arcana dura 1 hora.","especial":"","resumo":"Alvo enxerga calor por uma hora.","efeito":[]},{"nome":"Inspirar Coragem","categoria":"Característica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Presença Inspiradora"]],"descricao":"Você reforça a determinação de um aliado através de palavras inspiradoras. Aquele aliado recupera imediatamente 20 Pontos de Vida e quaisquer efeitos de Medo que o estiver afetando são removidos. Este efeito não pode ser utilizado em você mesmo.","especial":"","resumo":"Aliado recupera 20 pontos de Vida e tem efeitos de Medo removidos.","efeito":[]},{"nome":"Integridade","categoria":"Característica","tipo":"Reação","mana":10,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Austeridade", "Destemor"]],"descricao":"Sua inflexibilidade moral é tanta, que você não se dá por vencido nem diante da morte certa. Quando um ataque, magia, música ou técnica reduziriam seus Pontos de Vida a ponto de deixá-lo “Por Um Fio”, você ignora totalmente seu dano e quaisquer outros efeitos. Essa Habilidade não tem efeito em venenos, doenças ou fatores ambientais que causem dano.","especial":"","resumo":"Ignora dano e efeitos que o derrubariam, exceto doenças/venenos/ambiente.","efeito":[]},{"nome":"Intelecto Élfico","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu raciocínio é veloz e objetivo. Você tem Inteligência +1 e +5 Pontos de Mana.","especial":"","resumo":"Inteligência +1. Mana +5.","efeito":["mana+",5,"int+",1]},{"nome":"Inteligência Heróica","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você possui uma percepção e uma capacidade de raciocínio extremamente afiadas. Você tem Inteligência +1.","especial":"","resumo":"Inteligência +1.","efeito":["int+",1]},{"nome":"Interferir no Fluxo","categoria":"Característica","tipo":"Reação","mana":30,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Precognição"]],"descricao":"Você vislumbrou vários futuros possíveis e consegue forçar determinados eventos a se tornarem realidade. Sempre que uma ação dentro da sua linha de visão exigir uma rolagem de dados, você pode modificar o resultado daquela rolagem em um grau para melhor ou pior – uma falha crítica se torna uma falha normal, uma falha se torna um sucesso ou um sucesso se torna um sucesso crítico, ou vice-versa. Você não interfere no resultado dos dados, apenas no resultado do teste. Essa Habilidade só pode ser usada uma vez por turno.","especial":"","resumo":"Uma vez por turno modifica um nível de sucesso de uma rolagem.","efeito":[]},{"nome":"Intimidar","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você pode intimidar um oponente que esteja a até 3 metros de você. Role um confronto de Vontade com o alvo. Se tiver sucesso, o alvo é considerado Amedrontado com relação a você por um número de turnos igual à sua Vontade. O alvo responderá qualquer pergunta direta que você fizer a ele enquanto estiver intimidado. Este é um efeito de medo.","especial":"","resumo":"Medo. Intimida alvo até 3m. VONxVON: Amedrontado por <a class=\'vontade\'> </a> turnos.","efeito":[]},{"nome":"Intuição","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["!raca",["Astério ♂","Astério ♀"]],"descricao":"Você possui um instinto afiado e consegue prever perigo de modo quase sobrenatural. Você usa Vontade ao invés de Agilidade para calcular sua Iniciativa e seu bônus básico de Esquiva – Habilidades que oferecem bônus de Esquiva baseados em Agilidade são calculados normalmente. Além disso, você recebe +2 em seus testes de Iniciativa.","especial":"","resumo":"Iniciativa+2. AGI->VON para iniciativa e esquiva base.","efeito":["intuicao","iniciativa+",2]},{"nome":"Investida Acrobática","categoria":"Técnica","tipo":"Ação","mana":15,"dificuldade":0, "requisitos":[],"descricao":"Você pode usar o ambiente para ganhar impulso e desferir um ataque de uma direção inusitada. Enquanto tiver uma mão livre e estiver em um ambiente com mobília e outros obstáculos (como um convés de navio, pátios, feiras ou no interior da maioria das construções) você pode fazer uma manobra de encontrão contra o alvo independente da distância que tiver do oponente. Esse ataque causa +10 de dano e ignora quaisquer bônus de escudo e Esquiva do alvo.","especial":"Você não pode utilizar esta Habilidade se estiver usando uma armadura com a característica Pesada ou se estiver carregando uma carga acima da básica.","resumo":"Mão livre & cenário propício: Encontrão dano+10, ignora bônus de defesa.","efeito":[]},{"nome":"Investida Forte","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Golpe com Escudo"]],"descricao":"Sempre que acertar uma manobra de encontrão usando um escudo, além de causar o dano normal pelo encontrão, o alvo precisa vencer um teste de Resistência (Dificuldade igual à sua Determinação + a FN do escudo que você estiver usando) ou será derrubado. Alvos com o dobro do seu peso não são afetados. Um ataque com um escudo causa dano igual à Força + FN do escudo/Contusão.","especial":"","resumo":"Encontrão com Escudo: FORxFOR+FN: dano FOR+FN/Contusão & derruba.","efeito":[]},{"nome":"Investida Mortal","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Faça uma manobra de encontrão contra um alvo. Esse ataque causa +10 de dano, e se acertar deixa o alvo Atordoado (O personagem tem -1 na Defesa, no Deslocamento e em todos os seus testes) por 1 turno.","especial":"","resumo":"Encontrão dano+10, alvo Atordoado por 1 turno.","efeito":[]},{"nome":"Invisibilidade 1","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":11, "requisitos":[],"descricao":"Desenhando uma Runa Arcana ou Selo Místico sobre uma criatura, você a torna – assim como todas as suas posses – invisível. Essa Runa Arcana ou Selo Místico dura por uma quantidade de minutos igual à Inteligência do conjurador.","especial":"","resumo":"Alvo, e posses, invisíveis por <a class=\'inteligencia\'> </a> minutos.","efeito":[]},{"nome":"Invisibilidade 2","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":13, "requisitos":["nivel",5,"habilidade",["Invisibilidade 1"]],"descricao":"Desenhando uma Runa Arcana sobre uma criatura, você a torna – assim como todas as suas posses – invisível. Essa Runa Arcana ou Selo Místico dura por uma quantidade de horas igual à Inteligência do conjurador.","especial":"","resumo":"Alvo, e posses, invisíveis por <a class=\'inteligencia\'> </a> horas.","efeito":[]},{"nome":"Invisibilidade Natural","categoria":"Característica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Herança Feérica"]],"descricao":"Você possui uma das habilidades mais características das fadas. Você é capaz de se mesclar à vegetação à sua volta, ficando invisível por até uma hora. É preciso estar em uma área com vegetação densa – um bosque, um jardim de topiarias ou uma estufa, por exemplo – e o efeito é cancelado se você deixar a área de vegetação, sofrer algum dano, atacar ou lançar uma magia.","especial":"","resumo":"Invisível por até uma hora se escondido em vegetação.","efeito":[]},{"nome":"Invocação Persistente","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Suas Invocações duram mais e são mais resistentes. Criaturas invocadas por você têm +10 PVs e permanecem invocadas por até 1 hora ao invés da sua duração normal.","especial":"","resumo":"Invocações tem +10PV e permanecem por até uma hora.","efeito":[]},{"nome":"Invocação Prodigiosa","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Manter Invocação"]],"descricao":"Você é extremamente talentoso em realizar magias de Invocação. Todas as suas magias de Invocação têm sua Dificuldade reduzida em 2 e custam 5 Pontos de Mana a menos. Além disso, você pode realizar suas magias de Invocação como ações de turno completo ao invés ações padrão, conjurando aquela magia duas vezes simultaneamente. Você precisa fazer o teste e pagar o custo em mana de cada magia separadamente.","especial":"","resumo":"Invocações: Dif.-2, Mana-5. Duas invocações, de mesmo tipo, por turno.","efeito":["modificador","dificuldade",["Invocar Elemental 1","Invocar Elemental 2","Invocar Elemental 3","Invocar Espírito Animal","Invocar Familiar","Invocar Elemental do Fogo 1","Invocar Elemental do Fogo 2","Invocar Elemental do Gelo 1","Invocar Elemental do Gelo 2","Invocar Golem 1","Invocar Golem 2","Ampliar Invocação","Manter Invocação"],["Magia"],["Ação"],1,"modificador","mana",["Invocar Elemental 1","Invocar Elemental 2","Invocar Elemental 3","Invocar Espírito Animal","Invocar Familiar","Invocar Elemental do Fogo 1","Invocar Elemental do Fogo 2","Invocar Elemental do Gelo 1","Invocar Elemental do Gelo 2","Invocar Golem 1","Invocar Golem 2","Ampliar Invocação","Manter Invocação"],["Magia"],["Ação"],5]},{"nome":"Invocação Versátil","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Invocação Persistente"]],"descricao":"Você pode invocar criaturas nas mais diversas formas. Criaturas invocadas por você podem ter uma Habilidade extra dependendo de sua forma, e seu bônus automático de Defesa é aumentado em 2. Golens e Elementais de Gelo podem ter Chifres Poderosos, Corpo Equino, Montaria, garras ou Braços Extras 2. Elementais de Fogo e Golens de Madeira podem ter Asas Pesadas ou Asas Leves.","especial":"Uma criatura com a Habilidade Montaria precisa ser pelo menos da mesma categoria de tamanho do seu cavaleiro. Assim, a maioria das raças (exceto Metadílios e Goblins) só poderá montar em Golens ou Elementais de categoria de tamanho Média ou maior.","resumo":"Invocações tem habilidade extra e Defesa+2.","efeito":[]},{"nome":"Invocar Elemental 1","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":9, "requisitos":["habilidade",["Congelar", "Inflamar"]],"descricao":"Você conjura um pequeno Elemental de Fogo ou do Gelo desenhando uma runa Elemental no ar. O Elemental obedecerá todos os seus comandos e agirá a partir do turno seguinte, logo depois de você. A runa que mantém o Elemental coeso se dissipa depois de 10 minutos. Veja os dados dos Elementais no Monstrum Codex para mais detalhes.","especial":"","resumo":"Invoca um Elemental do Fogo ou do Gelo Pequeno por 10 min.","efeito":[]},{"nome":"Invocar Elemental 2","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":11, "requisitos":["habilidade",["Invocar Elemental 1"]],"descricao":"Você conjura um Elemental Médio de Fogo ou do Gelo desenhando uma Runa arcana no ar. O Elemental obedecerá todos os seus comandos e agirá a partir do turno seguinte, logo depois de você. A runa que mantém o Elemental coeso se dissipa depois de 10 minutos. Veja os dados dos Elementais no Monstrum Codex para mais detalhes.","especial":"","resumo":"Invoca um Elemental do Fogo ou do Gelo Médio por 10 min.","efeito":[]},{"nome":"Invocar Elemental 3","categoria":"Magia","tipo":"Ação","mana":60,"dificuldade":13, "requisitos":["nivel",5,"habilidade",["Invocar Elemental 2"]],"descricao":"Você conjura um grande Elemental de Fogo ou do Gelo desenhando uma runa Arcana no ar. O Elemental obedecerá todos os seus comandos e agirá a partir do turno seguinte, logo depois de você. A Runa Arcana que mantém o Elemental coeso se dissipa depois de 10 minutos. Veja os dados dos Elementais no Monstrum Codex para mais detalhes.","especial":"","resumo":"Invoca um Elemental do Fogo ou do Gelo Grande por 10 min.","efeito":[]},{"nome":"Invocar Elemental do Fogo 1","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":10, "requisitos":[],"descricao":"Desenhando uma Runa Arcana ou Selo Místico no ar, você pode invocar um elemental do fogo. O elemental age logo depois de você a partir do turno em que for invocado. Um elemental do fogo pequeno custa 15 Pontos de Mana e um elemental do fogo médio custa 30 Pontos de Mana. A runa que mantém o elemental coeso se dissipa depois de 10 minutos ou assim que o elemental for destruído.","especial":"","resumo":"Invoca um Elemental do Fogo por 10min. Mana: 15 Pequeno, 30 Médio.","efeito":[]},{"nome":"Invocar Elemental do Fogo 2","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Invocar Elemental do Fogo 1"]],"descricao":"Desenhando uma Runa Arcana ou Selo Místico no ar, você pode invocar um elemental do fogo. O elemental age logo depois de você a partir do turno em que for invocado. Um elemental do fogo grande custa 50 Pontos de Mana e um elemental do fogo gigante custa 100 Pontos de Mana. A runa que mantém o elemental coeso se dissipa depois de 10 minutos ou assim que o elemental for destruído.","especial":"","resumo":"Invoca um Elemental do Fogo por 10min. Mana: 50 Grande, 100 Gigante.","efeito":[]},{"nome":"Invocar Elemental do Gelo 1","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":10, "requisitos":[],"descricao":"Desenhando uma Runa Arcana ou Selo Místico no ar, você pode invocar um elemental do gelo. O elemental age logo depois de você a partir do turno em que for invocado.Um elemental do gelo pequeno custa 15 Pontos de Mana e um elemental do gelo médio custa 30 Pontos de Mana. A runa que mantém o elemental coeso se dissipa depois de 10 minutos ou assim que o elemental for destruído.","especial":"","resumo":"Invoca um Elemental do Gelo por 10min. Mana: 15 Pequeno, 30 Médio.","efeito":[]},{"nome":"Invocar Elemental do Gelo 2","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Invocar Elemental do Gelo 1"]],"descricao":"Desenhando uma Runa Arcana ou Selo Místico no ar, você pode invocar um elemental do gelo. O elemental age logo depois de você a partir do turno em que for invocado. Um elemental do gelo grande custa 50 Pontos de Mana e um elemental do gelo gigante custa 100 Pontos de Mana. A runa que mantém o elemental coeso se dissipa depois de 10 minutos ou assim que o elemental for destruído.","especial":"","resumo":"Invoca um Elemental do Gelo por 10min. Mana: 50 Grande, 100 Gigante.","efeito":[]},{"nome":"Invocar Espírito Animal","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Espírito Animal", "Contato com Espíritos"]],"descricao":"Você invoca um espírito animal espectral para protegê-lo. Esse espectro tem a forma do seu Espírito Animal, mas os Atributos dele serão todos iguais à sua Vontade. Além das Habilidades normais do animal, todos os Espíritos Animais terão Mente Bloqueada e Corpo Intangível. Seus ataques causam dano igual à Força +2 por Corte, Perfuração ou Esmagamento – o que for mais apropriado, de acordo com os ataques do animal – e recebem os bônus referentes ao seu Espírito Animal. Espíritos Animais têm 30 Pontos de Vida e 30 Pontos de Mana. Espíritos Animais são sempre Bestas do tipo Espírito com o temperamento Servo. Essa magia dura 1 minuto ou até o animal espectral ser destruído.","especial":"Águias Espectrais invocadas por essa magia recebem +1 em seus ataques corporais ao invés do bônus normal.","resumo":"PV,PM:30;Atributos:<a class=\'vontade\'> </a>;Dano For+2; Mente Bloqueada; Corpo Intangível.","efeito":[]},{"nome":"Invocar Espírito de Tinta","categoria":"Característica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Tribal de Proteção"]],"descricao":"Você tem uma tatuagem que representa seu espírito animal. Enquanto esta tatuagem estiver visível, você pode invocar 1 espírito animal a partir dela. Esse espírito tem a forma do animal tatuado, mas os Atributos dele serão todos iguais à sua Vontade. Além das Habilidades apropriadas ao animal, todos os Espíritos Animais têm Mente Bloqueada e Corpo Intangível. Seus ataques causam dano igual à Força +2 por Corte, Perfuração ou Esmagamento – o que for mais apropriado, de acordo com os ataques do animal – e recebem os bônus referentes ao seu Espírito Animal. Espíritos Animais têm 30 Pontos de Vida e 30 Pontos de Mana e são sempre Bestas do tipo Espírito com o temperamento Servo. Essa magia dura 1 minuto ou até o animal espectral ser destruído.","especial":"Se você tiver a Habilidade Espírito Animal (veja o Guia Básico página 169 para detalhes) os seus bônus serão aplicados aos espíritos invocados com esta Habilidade. Espírito Animal: Águia garante um bônus de +1 nos ataques corporais de espíritos invocados, ao invés do bônus normal.","resumo":"PV,PM:30;Atributos:<a class=\'vontade\'> </a>;Dano For+2; Mente Bloqueada; Corpo Intangível.","efeito":[]},{"nome":"Invocar Exército de Tinta","categoria":"Característica","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Invocar Espírito de Tinta"]],"descricao":"Enquanto a tatuagem do seu Espírito Animal estiver à mostra, você pode invocar múltiplos espíritos animais espectrais a partir dela. Você pode invocar múltiplos espíritos de uma só vez usando Espírito de Tinta, mas só pode manter simultaneamente um número de espíritos igual à sua Vontade.","especial":"","resumo":"Pode invocar e manter até <a class=\'vontade\'> </a> Espíritos de Tinta.","efeito":[]},{"nome":"Invocar Familiar","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":10, "requisitos":[],"descricao":"Você conjura um golem ou elemental pequeno (de qualquer tipo) desenhando uma Runa Arcana ou Selo Místico sobre uma gema com valor de pelo menos 400 moedas. Enquanto a gema encantada estiver intacta, o Familiar tem duração permanente. Se o Familiar for destruído, a Runa ou Selo na gema se dissipa, mas a gema pode ser utilizada novamente. Se a gema for destruída ou se a Runa ou Selo for dissipada, o Familiar se dissipa imediatamente. Veja os dados dos Elementais e Golens no Monstrum Codex para mais detalhes.","especial":"","resumo":"Golem ou Elemental Pequeno permanente. Requer gema de 400 moedas.","efeito":[]},{"nome":"Invocar Golem 1","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":12, "requisitos":[],"descricao":"Você desenha uma Runa Arcana ou Selo Místico sobre uma superfície invocando um golem do tipo adequado. O golem age logo depois de você a partir do turno em que for invocado. É possível invocar qualquer tipo de golem com esta Magia desde que haja uma quantidade suficiente de matéria prima adequada. Um golem pequeno custa 20 Pontos de Mana e um golem médio custa 40 Pontos de Mana. A runa que mantém o golem coeso se dissipa depois de 10 minutos ou assim que o golem for destruído.","especial":"","resumo":"Invoca Golem de matéria prima. 10min. Mana: 20 Pequeno, 40 Médio.","efeito":[]},{"nome":"Invocar Golem 2","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":16, "requisitos":["nivel",5,"habilidade",["Invocar Golem 1"]],"descricao":"Você desenha uma Runa Arcana ou Selo Místico sobre uma superfície invocando um golem do tipo adequado. O golem age logo depois de você a partir do turno em que for invocado. É possível invocar qualquer tipo de golem com esta Magia desde que haja uma quantidade suficiente de matéria prima adequada. um golem grande custa 60 Pontos de Mana e um golem gigante custa 120 Pontos de Mana. A runa que mantém o golem coeso se dissipa depois de 10 minutos ou assim que o golem for destruído.","especial":"","resumo":"Invoca Golem de matéria prima. 10min. Mana: 60 Grande, 120 Gigante.","efeito":[]},{"nome":"Isnuu","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",1],"descricao":"Você nasceu com uma grande afinidade com a magia. Sua pele e seus cabelos são de tons esverdeados, e você pode selecionar Habilidades da lista do Feiticeiro como se fossem da sua Classe – desde que preencha os requisitos. Além disso, as dificuldades de todas as Magia são diminuídas em 1 para você.","especial":"Você só pode selecionar essa Habilidade durante a criação do personagem.","resumo":"Dificuldade de Magia -1. Acesso à habilidades de Feiticeiro.","efeito":["modificador","dificuldade",[],["Magia"],["Ação"],[],1,"isnuu"]},{"nome":"Janela Mágica","categoria":"Magia","tipo":"Ação","mana":-1,"dificuldade":12, "requisitos":[],"descricao":"Desenhando um Selo Místico sobre uma superfície, você é capaz de canalizar os efeitos de Clarividência, Psicometria ou Retrocognição, criando uma espécie de janela onde os eventos que o Oráculo perceberia podem ser visualizados por qualquer um ao seu redor. O custo dessa Magia será igual ao custo da Habilidade canalizada. Esse Selo Místico dura 10 minutos, mas se o Selo Místico que estiver sendo observado com Clarividência for dissipado ou o conjurador perder contato com o objeto, superfície ou criatura na qual está usando Psicometria ou Retrocognição, o efeito é cancelado imediatamente.","especial":"","resumo":"\'Janela\' para visualizar os efeitos de Clarividência & Similares. 10min.","efeito":[]},{"nome":"Juiz","categoria":"Característica","tipo":"Ação","mana":25,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Mastim"]],"descricao":"Você é muito bom em extrair a verdade de seus interlocutores. Quando tiver detectado uma mentira, você pode ordenar ao alvo que diga a verdade. O alvo realiza um teste de Vontade (dificuldade igual à sua Determinação) e se falhar ele deve, imediatamente, contar a verdade dentro dos seus conhecimentos (o alvo não pode modificar nenhum fato nem suprimir nenhuma informação que souber). Além disso, o alvo também fica Amedrontado em relação a você por um número de minutos igual à sua Vontade. Este é um efeito mental.","especial":"","resumo":"Mental. Alvo testa VON[<a class=\'determinacao\'> </a>]: Obrigado a dizer a verdade.","efeito":[]},{"nome":"Justiça Final 1","categoria":"Técnica","tipo":"Ação","mana":25,"dificuldade":0, "requisitos":["habilidade",["Código da Justiça"]],"descricao":"Você pode fazer um ataque corporal que, se acertar, causa o dobro do dano normal, ou o triplo do dano normal se a criatura for um demônio, morto-vivo ou espírito.","especial":"","resumo":"Ataque Cac que causa o dano *2, ou *3 vs Demônio,Morto-Vivo,Espírito.","efeito":[]},{"nome":"Justiça Final 2","categoria":"Técnica","tipo":"Ação","mana":50,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Justiça Final 1"]],"descricao":"Você pode fazer um ataque corporal que, se acertar, causa o triplo do dano normal ou o quádruplo se a criatura for um demônio, morto-vivo ou espírito.","especial":"","resumo":"Ataque Cac que causa o dano *3, ou *4 vs Demônio,Morto-Vivo,Espírito.","efeito":[]},{"nome":"Kirituhi","categoria":"Técnica","tipo":"Ação","mana":60,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Tamoko"]],"descricao":"Você é capaz de realizar uma tatuagem em um Humanoide ou Esfinge com os efeitos de qualquer uma de suas Habilidades de Tohunga que não tenham Requisitos. O processo leva um dia inteiro, e você precisa ser capaz de falar em uma língua que o alvo entenda, explicando sobre os significados e propriedades da tatuagem que está produzindo.","especial":"","resumo":"Tatuagem (sem requisitos) em Humanóide ou Esfinge. Requer um dia.","efeito":[]}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_habilidadesLO() {
    return '{"habilidade":[{"nome":"Levitar","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":11, "requisitos":["habilidade",["Telecinésia"]],"descricao":"Desenhando uma Runa Arcana sobre uma criatura, você faz com que ela seja capaz de voar livremente no ar para qualquer direção no seu deslocamento normal. Essa Runa Arcana dura 1 hora, mas se dissipa automaticamente se alvo tocar o solo.","especial":"","resumo":"Alvo é capaz de voar livremente em qualquer direção por 1 hora.","efeito":[]},{"nome":"Língua Afiada","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Eloquente"]],"descricao":"Você possui uma língua ferina e um talento especial para insultar seus adversários. Escolha um inimigo do tipo Humanoide ou Esfinge. Você faz uma série de comentários jocosos ou degradantes sobre ele. Faça um confronto de Vontade contra o alvo. Se você tiver um resultado igual ou maior do que o alvo e se ele for capaz de entendê-lo, ele ataca você em detrimento de qualquer outro alvo, e é considerado Desprevenido para todos os seus aliados – mas não para você. Este é um efeito mental.","especial":"","resumo":"Mental. VONxVON: Alvo Despreparado contra seus aliados.","efeito":[]},{"nome":"Lobo do Mar","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você tem uma reputação por fazer parte de um grupo conhecido de navegadores. Você sempre consegue passagens de graça para o seu grupo de aventureiros, desde que aceitem trabalhar no navio em troca de acomodações. Além disso, graças à reputação do seu grupo, você geralmente tem poucos problemas com as autoridades em cidades de um porto. A maioria das pessoas não vai alertar a guarda por conta de pequenas ofensas ou prejuízos – como não pagar por uma refeição na taverna ou por uma noite em uma estalagem, danos durante uma briga de taverna e coisas semelhantes. Perceba que se você for flagrado pela guarda realizando uma dessas ações, isso ainda lhe trará consequências, muito provavelmente! Além disso, abusar de sua reputação dessa forma pode criar uma reputação ruim para você, o que pode gerar situações inconvenientes – como estabelecimentos se recusando a atendê-lo – ou mesmo chegar a até seus superiores","especial":"","resumo":"Você tem uma reputação como Lobo do Mar.","efeito":[]},{"nome":"Lutar no Convés","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você usa o que tiver a mão para vencer suas lutas. Enquanto tiver uma mão livre e estiver em um ambiente com mobília e outros obstáculos (como um convés de navio, pátios, feiras ou no interior da maioria das construções) você pode usar o ambiente para se proteger e atrapalhar o adversário, recebendo +1 em seus ataques corporais e +2 em Esquiva.","especial":"","resumo":"Mão livre & Ambiente propício: Ataque CaC +1, Esquiva +2.","efeito":["esquiva!","+2*",": em ambiente com obstáculos."]},{"nome":"Luz Mágica","categoria":"Magia","tipo":"Ação","mana":5,"dificuldade":8, "requisitos":[],"descricao":"Desenhando uma Runa Arcana ou Selo Místico sobre um objeto, você imbui ele com uma luz própria. A duração dessa magia depende da intensidade da luz: uma luz fraca como de uma vela dura 6 horas, uma luz moderada semelhante à de uma tocha dura 1 hora, e uma luz intensa como a do sol dura 1 minuto.","especial":"","resumo":"Imbue luz. Vela 6 horas. Tocha 1 hora. Sol 1 minuto.","efeito":[]},{"nome":"Luzes das Fadas","categoria":"Característica","tipo":"Ação","mana":15,"dificuldade":0, "requisitos":["habilidade",["Herança Feérica"]],"descricao":"Você possui uma habilidade comum às fadas. Você pode criar até três pequenos globos de luz que ficam dançando pelo ar. Você pode comandá-los, mas eles não podem se afastar mais que três metros do você. Eles duram uma hora, mas você pode dispersá-los quando desejar. Os globos produzem iluminação igual à de uma tocha, e você pode realizar um ataque à distância para atingir os olhos de um alvo com um dos globos de luz (que se extingue no processo), deixando-o Distraído por 1 turno.","especial":"","resumo":"3 globos de luz (tocha). Ataque a distância Distrai por 1 turno.","efeito":[]},{"nome":"Maestria Elemental","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Resistência Elemental", "Aptidão Elemental"]],"descricao":"Você possui um profundo conhecimento sobre a essência elemental da magia. Sempre que você for alvo de uma magia ou efeito que o deixa Resistente ao Frio, Fogo ou Eletricidade, você fica Imune aquele elemento. Se você já for Resistente a um elemento e receber Resistência a ele através de uma magia, você passa a absorver o elemento (recuperando uma quantidade de Pontos de Vida iguais a qualquer quantidade de dano que sofreria daquele elemento). Além disso, todas as magias e técnicas que você conjura e que causem dano por fogo, frio ou eletricidade causam 5 pontos de dano a mais (esse bônus se acumula com o bônus de Aptidão Elemental).","especial":"","resumo":"Auto. Magia Resistência->Imunidade->Absorver. Dano Fogo/Frio/Elet +5.","efeito":["modificador","descricao+",[],["Técnica","Magia"],["Ação"],["fogo","frio","elet","elem"],5]},{"nome":"Magistrado","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Juiz"]],"descricao":"Você possui uma aura de autoridade que faz com que aqueles ao seu redor se sintam desconfortáveis em confrontá-lo. Você tem Determinação +2 e, toda vez que alguém tentar mentir para você, intimida-lo ou manipulá-lo de qualquer forma e falhar, o alvo fica Amedrontado em relação a você por um número de turnos igual à sua Vontade. Esses efeitos também se aplicam a qualquer tentativa utilizar um efeito mental ou efeito de medo contra você. Este é um efeito mental.","especial":"","resumo":"Det. +2. Quem falhar ao tentar enganá-lo é amedrontado por <a class=\'vontade\'> </a> turnos.","efeito":["determinacao+",2]},{"nome":"Malabarista","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você tem uma ótima coordenação para jogar e pegar objetos no ar. Além de poder realizar malabarismos – mesmo usando objetos perigosos como adagas ou tochas – como entretenimento, você recebe +2 em todas as suas jogadas para arremessar objetos e +1 na Defesa contra ataques à distância. Esse bônus de Defesa conta como Esquiva.","especial":"","resumo":"Malabarismo, Arrremesso +2. Esquiva +1 contra projéteis.","efeito":["esquiva!","+1*",":+1 contra ataques à distância."]},{"nome":"Manter à Distância","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Sempre que um oponente estiver dentro do seu alcance corporal, você pode atacar recuando, anulando os contra-ataques do oponente. Você pode recuar três metros como parte desse ataque, e o oponente não pode utilizar nenhuma Habilidade do tipo Reação contra você nesse turno. Esse recuo não conta como movimentação – assim, você pode recuar três metros como parte desse ataque e ainda utilizar uma Ação de Movimento normalmente.","especial":"Você precisa ter pelo menos 3 metros de espaço atrás de si para poder utilizar essa Habilidade.","resumo":"Ataque CaC e recue até 3m, ignorando contra-ataques.","efeito":[]},{"nome":"Manter a Linha","categoria":"Técnica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você sabe como utilizar o alcance de uma arma de haste com eficiência. Sempre que estiver utilizando uma arma de haste e um oponente que esteja à distância de haste ou além dela se aproximar à distância corpo-a-corpo, você pode imediatamente realizar um ataque corporal normal contra ele.","especial":"","resumo":"Ataque Haste contra alvos que se moverem para o alcance.","efeito":[]},{"nome":"Manter Golem","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Criar Golem"]],"descricao":"Você desenha um Selo Místico sobre um Golem que você tenha criado, com o objetivo de fortalecer sua coesão. Cada vez que você desenhar este Selo Místico sobre o Golem, a duração do Selo que o mantém ativo será duplicada. Você pode desenhar quantos selos desses quiser sobre um Golem, e seus efeitos são cumulativos.","especial":"","resumo":"Duplica a duração de um golem. Cumulativo.","efeito":[]},{"nome":"Manter Invocação","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Invocação Persistente"]],"descricao":"Desenhando uma Runa Arcana ou Selo Místico sobre uma criatura que você tenha invocado, a duração da Runa ou Selo que mantém a invocação é duplicada. Você pode desenhar quantas Runas ou Selos desses quiser sobre uma criatura invocada, e seus efeitos são cumulativos.","especial":"","resumo":"Duplica a duração de uma invocação. Cumulativo.","efeito":[]},{"nome":"Manto Crepitante","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":9, "requisitos":["habilidade",["Eletricidade Estática"]],"descricao":"Você desenha uma Runa Arcana sobre uma criatura, envolvendo-a numa aura elétrica extremamente brilhante. A aura ilumina uma área de 20 metros ao seu redor, tornando-a clara como se fosse dia, de forma que, qualquer um tentando acertar você à distância (com ataques ou magias) fica ofuscado, realizando seus ataques como se fossem Inaptos. Além disso, a aura elétrica causa dano igual a <a class=\'elet\'>10</a>/Eletricidade em qualquer um que tocar em você ou golpeá-lo com ataques corporais. Essa Runa dura 1 minuto, mas pode ser dissipada a qualquer momento pela criatura sobre a qual foi desenhada.","especial":"","resumo":"Alvo. Aura elétrica ilumina 20m e causa <a class=\'elet\'>20</a>/Elet ao toque. 1min.","efeito":[]},{"nome":"Marca da Justiça","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo da Justiça"]],"descricao":"Esta Marca é utilizada com frequência pelos Sacerdotes de Mirah em conjunto com qualquer outra punição a um criminoso. Ela costuma ser usada de forma cerimonial sobre qualquer Irmão da Ordem da Espada de Mirah que inicie uma Cruzada Justa, mas nem sempre é o caso. Desenhando um Selo Místico sobre um alvo, você faz com que ele se torne ciente de qualquer ato injusto que possa cometer. Sempre que o alvo quebrar um dos Dogmas de Mirah, o símbolo dessa divindade brilha em sua testa e ele sentirá dores terríveis, precisando vencer um teste de Vontade (Dificuldade igual à Determinação do conjurador) para não cair inconsciente. Se passar no teste, o alvo ainda pode ir contra o Dogma de Mirah, mas sua dor será visível para qualquer um ao seu redor e ele será considerado Atordoado enquanto estiver cometendo o crime em questão. Esse Selo dura uma quantidade de dias igual à Determinação do conjurador, mas você pode dissipá-lo a qualquer momento.","especial":"","resumo":"Por Determinação dias o alvo sofre dores se violar o dogma de Mirah.","efeito":[]},{"nome":"Marca da Ordem","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo da Justiça"]],"descricao":"Esta Marca é utilizada pelos Sacerdotes de Ahogr para levar seus prisioneiros consigo sem precisar recorrer a grilhões ou jaulas. Desenhando um Selo Místico sobre o alvo, você faz com que ele sinta uma dor terrível ao se afastar de ti – essa distância é igual à Vontade do alvo em metros. A cada turno em que estiver além dessa distância, o símbolo de Ahogr brilhará em sua testa e ele sentirá um calafrio terrível, como se seu espírito quisesse deixar o corpo, precisando vencer um teste de Vontade (Dificuldade igual à Determinação do conjurador) para não cair inconsciente. Se passar no teste, o alvo poderá se afastar, mas estará Enregelado. Esse Selo dura uma quantidade de horas igual à Determinação do conjurador, mas você pode dissipá-lo a qualquer momento.","especial":"","resumo":"Por Determinação dias o alvo sofre calafrios se violar o dogma de Ahogr.","efeito":[]},{"nome":"Marca da Verdade","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo da Sabedoria"]],"descricao":"Esta Marca é amplamente utilizada pela maioria dos Sacerdotes de Sarfion em julgamentos, principalmente entre membros da própria igreja. Desenhando um Selo Místico sobre uma criatura, você faz com que o alvo sinta dores terríveis sempre que faltar com a verdade. Sempre que o alvo quebrar um dos Dogmas de Sarfion, o símbolo dessa divindade brilha em sua testa e ele sentirá dores terríveis, perdendo uma quantidade de Pontos de Vida igual à Determinação do conjurador. Um alvo que perca todos os seus Pontos de Vida dessa forma é considerado automaticamente estabilizado, e recupera 1 Ponto de Vida dentro de 1 minuto. Esse Selo dura uma quantidade de horas igual à Vontade do conjurador, mas você pode dissipá-lo a qualquer momento.","especial":"","resumo":"Por VON horas o alvo sofre Determinação de dano ao mentir.","efeito":[]},{"nome":"Maré de Sorte","categoria":"Característica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["habilidade",["Dogma: Discípulo do Destino"]],"descricao":"Ran lhe sorri com frequência. Sempre que você rolar 2 ou mais dados e todos eles tiverem o mesmo resultado, você pode rolar outro dado. Esse efeito é cumulativo – ou seja, se o novo dado tiver um resultado igual aos anteriores, você pode rolar mais um dado.","especial":"Essa Habilidade não pode ser utilizada se todos os dados tiverem um resultado igual a 1.","resumo":"Role um dado adicional quando conseguir o mesmo número em ambos. Cumulativo.","efeito":[]},{"nome":"Marrada","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você pode desferir um poderoso golpe com seus chifres. Este é um ataque desarmado que causa dano igual à Força +2/Contusão. Caso use esse ataque com uma ação de Encontrão, o alvo precisa vencer um teste de Força (Dificuldade igual à sua Determinação +2) ou será derrubado.","especial":"","resumo":"Chifres: FOR+2/Cont. Encontrão: alvo FOR[DET+2] ou derrubado.","efeito":["+ataque","Marrada","Contusão","CaC",true,2]},{"nome":"Mastim","categoria":"Característica","tipo":"Suporte","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Você está acostumado a lidar com criminosos e raramente se deixa enganar ou amedrontar. Você tem Determinação +2 e recebe +1d6 em todos os Confrontos e testes para resistir a tentativas de persuasão e intimidação, perceber mentiras e resistir a efeitos mentais.","especial":"","resumo":"Resistir Persuasão e Intimidação +1d6. Determinação +2.","efeito":[]},{"nome":"Matador das Cordilheiras","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Caçador das Cordilheiras"]],"descricao":"Você sempre causa +2 pontos de dano em todos os ataques contra Orcs, gigantes e artrópodes (esse bônus se acumula com o bônus de Caçador das Cordilheiras). Além disso, você passa a rola +1d6 em todos os testes relacionados a essa criatura (esse bônus substitui o bônus de Caçador das Cordilheiras)","especial":"","resumo":"Orc, Gigante, Artrópode: +1d6, Dano+2. Cumulativo.","efeito":[]},{"nome":"Matador de [Criatura]","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Caçador de [Criatura]"]],"descricao":"Escolha uma criatura dentre aquelas do tipo que escolheu para Caçador (Goblins, Orcs, Gnolls ou Draconianos se você escolheu Humanóides, por exemplo). Você sempre causa +4 pontos de dano em todos os ataques contra este tipo de criatura (esse bônus se acumula com o bônus de Caçador de [Criatura]). Além disso, você rola +1d6 em todos os testes relacionados a essa criatura (esse bônus se acumula com o bônus de Caçador de [Criatura]).","especial":"","resumo":"Criatura de Caçadaor: +1d6, Dano+4. Cumulativo.","efeito":[]},{"nome":"Matador Sobrenatural","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Sempre que acertar um ataque corporal em criaturas dos tipos Amaldiçoado, Demônio, Espírito e Morto-vivo, some sua Vontade ao dano daquele ataque. Além disso, você recebe +2 em todas as suas rolagens relacionadas a essas criaturas.","especial":"","resumo":"Por <a class=\'vontade\'> </a> horas o alvo sofre Determinação de dano ao mentir.","efeito":[]},{"nome":"Médico de Campo","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você remendou uma boa quantidade de ferimentos tanto durante quanto depois de combates e sabe o que precisa ser consertado primeiro. Logo depois de um combate, você pode realizar um teste de Cuidados Médicos (Dificuldade 12) em qualquer personagem que tenha sofrido dano. Se for bem-sucedido, aquele personagem recupera 5 Pontos de Vida. Você pode usar este efeito apenas uma vez em um personagem a cada vez que ele sofrer dano. Além disso, toda vez que você for bem-sucedido em um teste para remover efeitos de sangramento, venenos ou estabilizar um personagem Por um Fio, aquele personagem recupera 5 Pontos de Vida adicionais além dos efeitos normais do seu teste de Cuidados Médicos. Finalmente, o tempo que você leva para aplicar Cuidados Médicos em um personagem é reduzido para um número de rodadas completas igual à 10 menos sua Inteligência (mínimo de uma rodada completa).","especial":"","resumo":"Cuidados Médicos recuperam +5 PV, requer apenas max(1,10-<a class=\'inteligencia\'> </a>) turnos.","efeito":[]},{"nome":"Melodia da Fúria","categoria":"Música","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Melodia Dançante"]],"descricao":"Você toca um ritmo primitivo, que faz com que todos os Humanoides que o escutem sintam seus instintos mais violentos aflorarem. Todos os Humanoides capazes de escutar essa canção desferem seus ataques com mais selvageria, causando +5 de dano, mas sofrendo um redutor de -2 em sua Defesa enquanto você continuar a tocar essa música. Este é um efeito mental.","especial":"","resumo":"Mental. Ouvintes humanóides recebem Dano+5 e Defesa-2.","efeito":[]},{"nome":"Melodia Dançante","categoria":"Música","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Você toca ritmos empolgantes que fazem com que todos que escutarem esta música sintam uma vontade incontrolável de dançar. Todos os Humanoides que estiverem escutando sua música rolam um confronto de Vontade contra você. Aqueles que tiverem um resultado mais baixo que o seu começarão a dançar incontrolavelmente, realizando todos os seus testes baseados em Agilidade como se fosse Inábil e ficando com Defesa -1 enquanto você continuar a tocar essa Melodia. Este é um efeito mental.","especial":"Personagens usando Dança das Espadas são imunes a esse efeito.","resumo":"Mental. Ouvintes VONxVON/turno: Dança (inábil para AGI e Def-1).","efeito":[]},{"nome":"Melodia do Enjoo","categoria":"Música","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Sua melodia é perfeitamente desconexa e perturbadora. Todas as criaturas vivas que puderem lhe escutar rolam um confronto de Vontade contra você a cada turno em que você continuar tocando. Aqueles que tiverem um resultado mais baixo do que você ficam enjoados, sofrendo um redutor de -1 em sua Defesa e testes de ataque até o final do turno. Qualquer um que obtenha 3 resultados mais baixos que os seus em confrontos para resistir a esse efeito durante um mesmo combate ficarão tão enjoados que vomitarão, ficando Paralisados durante 1 turno.","especial":"","resumo":"Mental. Ouvintes VONxVON/turno: Atq&Def-1. 3 falhas: vômito.","efeito":[]},{"nome":"Melodia do Repouso","categoria":"Música","tipo":"Ação","mana":25,"dificuldade":0, "requisitos":[],"descricao":"Você toca uma série de canções simples e relaxantes, que permitem que todos os que a ouvirem repousem com serenidade e recobrem suas forças. Qualquer um que escute sua canção por pelo menos 10 minutos – mesmo que esteja dormindo – recupera o dobro de Pontos de Mana e de Pontos de Vida devido ao descanso por aquele período. Tocar a Melodia do Repouso é considerado descanso, e os efeitos dessa música também afetam você.","especial":"","resumo":"Dobra a recuperação de Vida e Mana dos ouvintes em repouso.","efeito":[]},{"nome":"Melodia dos Animais","categoria":"Música","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Canção da Sereia"]],"descricao":"Escolha um tipo de Besta (mamífero, réptil ou ave). Todas as criaturas do tipo escolhido que puderem escutar sua música ficarão fascinadas com ela e o seguirão enquanto você continuar a tocar. Os alvos não irão realizar qualquer ação além de seguir você para onde for enquanto você continuar a tocar. Esse efeito é cancelado se o alvo sofrer algum dano enquanto estiver sob efeito dessa Música, mas se você continuar a tocar essa Música o alvo será afetado novamente no começo do seu próximo turno.Este é um efeito mental.","especial":"","resumo":"Mental. Atrai um tipo de mamífero, ave ou réptil.","efeito":[]},{"nome":"Melodia Sonífera","categoria":"Música","tipo":"Ação","mana":15,"dificuldade":0, "requisitos":["habilidade",["Melodia do Repouso"]],"descricao":"Você toca uma melodia lenta e ritmada, que acalma a ponto de fazer quem a escuta cair no sono. Após 3 turnos ouvindo essa Melodia, todos que puderem escutá-la (menos você) rolam um confronto de Vontade contra você. Aqueles que tiverem um resultado menor que o seu caem em um sono profundo que dura 1 hora. Este é um efeito mental.","especial":"","resumo":"Mental. Ouvintes após 3 turnos: VONxVON: sono profundo por 1 hora.","efeito":[]},{"nome":"Mente Disciplinada","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui uma vontade extremamente organizada, acostumada a se concentrar em tarefas complexas. Você tem Determinação +2 e as dificuldades de todas as magias que você realiza são reduzidas em 1.","especial":"","resumo":"Dificuldade de Magias -1. Determinação +2.","efeito":["determinacao+",2,"dificuldade-","nome","",1]},{"nome":"Mente Iluminada","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui uma clareza única de raciocínio. Você tem Vontade +1 e +5 Pontos de Mana.","especial":"","resumo":"Vontade +1. Mana +5.","efeito":["mana+",5,"von+",1]},{"nome":"Mestre da Lança","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Empunhadura Flexível"]],"descricao":"Você sabe exatamente onde – e como – acertar com uma arma de haste com máxima eficiência. Enquanto você estiver usando uma arma de haste para fazer ataques corporais, você adiciona metade de sua Inteligência ao resultado das suas rolagens de ataque. Você também adiciona uma quantidade extra de dano igual ao seu valor de Inteligência em todos os seus danos com armas com a característica haste.","especial":"","resumo":"Ataque Haste: +<a class=\'inteligencia\'> </a>/2, dano +<a class=\'inteligencia\'> </a>.","efeito":[]},{"nome":"Mestre das Adagas 1","categoria":"Técnica","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você se especializou em arremessar armas pequenas de forma eficiente. Você pode arremessar 2 armas com a característica Arremesso e FN 1.","especial":"","resumo":"Pode arremessar 2 armas de Arremesso e FN1.","efeito":[]},{"nome":"Mestre das Adagas 2","categoria":"Técnica","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":["habilidade",["Mestre das Adagas 1"]],"descricao":"Você refinou sua técnica de arremesso de pequenos objetos. Você pode arremessar até 4 armas com a característica Arremesso e FN 1.","especial":"","resumo":"Pode arremessar 4 armas de Arremesso e FN1.","efeito":[]},{"nome":"Mestre das Adagas 3","categoria":"Técnica","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Mestre das Adagas 2"]],"descricao":"Você é um mestre da técnica de arremessar pequenos objetos! Você pode arremessar até 6 armas com a característica Arremesso e FN 1.","especial":"","resumo":"Pode arremessar 6 armas de Arremesso e FN1.","efeito":[]},{"nome":"Mestre das Notas","categoria":"Técnica","tipo":"Reação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Sempre que você fizer um teste que envolva contar histórias, entreter uma plateia, cantar ou tocar instrumento musicais (incluindo Habilidades do tipo Música) você pode rolar novamente 1 dos dados. Você pode escolher com qual dos resultados vai ficar. Você só pode usar esta Habilidade 1 vez por turno.","especial":"","resumo":"Entretenimento: Rerole um dado e fique com o melhor resultado.","efeito":[]},{"nome":"Mestre de Armas 1","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é particularmente eficiente no uso de armas brancas. Sempre que realizar um ataque corporal usando uma arma, adicione 3 ao dano do ataque.","especial":"","resumo":"Dano CaC +3.","efeito":["modificador","dano",[],[],[],["CaC"],3]},{"nome":"Mestre de Armas 2","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você é extremamente eficaz no uso de armas brancas. Sempre que acertar um ataque corporal adicione 3 ao dano do ataque. Esse bônus de dano se acumula com o bônus fornecido por Mestre de armas 1.","especial":"","resumo":"Dano CaC +3. Cumulativo.","efeito":["modificador","dano",[],[],[],["CaC"],3]},{"nome":"Mestre de Armas 3","categoria":"Técnica","tipo":"Ação","mana":50,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Mestre de Armas 2"]],"descricao":"Faça um ataque corporal contra uma criatura. Se o ataque acertar o alvo, ao invés do dano normal da arma, os Pontos de Vida atuais dele são reduzidos à metade. No caso de um sucesso crítico no ataque, o oponente é morto instantaneamente.","especial":"","resumo":"Ataque CaC, reduz Vida do alvo à metade. Mata num crítico.","efeito":[]},{"nome":"Mestre Domador","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você é capaz de domar animais com extrema facilidade. Quando você captura uma criatura do tipo Besta, pode fazer um teste de Vontade com dificuldade igual à soma de todos os Atributos do animal depois que tiver cativo e bem tratado por pelo menos 1 dia inteiro. Se conseguir sucesso no teste, a criatura passa a ser considerada seu Companheiro Animal e a ter o Temperamento Protetor. Se falhar no teste, você pode tentar novamente uma vez por dia. No caso de uma falha crítica no teste, você perde completamente a confiança do animal e não será capaz de domá-lo. Você pode liberar um animal domado dessa forma. Nesse caso, o temperamento da criatura volta ao normal, mas quaisquer bônus que ele receba por suas Habilidades de Companheiro Animal permanecem. Você pode ter, simultaneamente, uma quantidade de Companheiros Animais igual à metade da sua Vontade (arredondada para baixo).","especial":"","resumo":"Você pode ter uma quantidade de Comp.Animais igual <a class=\'vontade\'> </a>/2, arredondado para baixo.","efeito":[]},{"nome":"Mestre Especialista","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10],"descricao":"Sempre que uma Habilidade oferecer um bônus de +1d6 em uma determinada ação, você recebe +2d6 para aquela ação ao invés disso.","especial":"","resumo":"Bônus de +1d6 de habilidade se torna +2d6.","efeito":[]},{"nome":"Mestre Telecinético","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Aporte"]],"descricao":"Você possui um controle profundo sobre Magias dedicados a mover criaturas e objetos. Você pode conjurar Telecinese e Caminhada Mágica (ou qualquer Magia que tenha uma dessas magias como Requisito mesmo que retroativamente) como uma ação de movimento ao invés de uma ação padrão.","especial":"","resumo":"Magias como Telecinese&cia podem ser conjuradas como ação de movimento.","efeito":[]},{"nome":"Militar","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você faz – ou fez – parte da Hoste de Hadorn e recebe auxílio da organização. Você sempre pode contar com um catre em qualquer quartel da Hoste de Hadorn para você e um número de aliados igual à sua Vontade, e recebe primeiros socorros e manutenção do seu equipamento nesses locais sem qualquer custo.","especial":"Assim que adquire essa Habilidade – inclusive durante a criação de personagem – você recebe, gratuitamente, uma Armadura Simples com o brasão da Hoste de Hadorn engastado nela. Essa armadura não pode ser vendida – nem mesmo no mercado negro ela é aceita – mas pode ser devolvida à Ordem. Se devolver a armadura, você recebe 100 peças e perde essa Habilidade, se desligado oficialmente da Hoste de Hadorn – você pode selecionar uma nova Habilidade no lugar desta na próxima vez que subir de nível – efetivamente selecionado duas Habilidades ao invés de uma.","resumo":"Você faz(ou fez) parte da Hoste de Hadorn e recebe auxílio dela.","efeito":[]},{"nome":"Montaria Especial 1","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Código da Cortesia"]],"descricao":"Um animal especial foi atraído pela aura de nobreza que você exala. Ele é extremamente fiel e fará de tudo para protegê-lo. Com assovios e sons você consegue pedir para que ele faça ações simples. Além disso, ele tem 10 Pontos de Vida a mais do que um animal comum de seu tipo. Você pode escolher entre um Cavalo de Guerra, um Pônei de Guerra ou um Camelo de Guerra. Se sua montaria morrer, outro animal do mesmo tipo será atraído em seu lugar assim que você estiver em uma região em que esse tipo de animal seja comum.","especial":"","resumo":"Cavalo de Guerra, um Pônei de Guerra ou Camelo de Guerra com +10 PV.","efeito":[]},{"nome":"Montaria Especial 2","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Montaria Especial 1", "Código da Coragem"]],"descricao":"Sua montaria especial foi tocada pela sua aura de coragem e tornou-se ainda mais ligada a você. Sua montaria é totalmente imune a efeitos mentais e efeitos de Medo, e recebe +10 Pontos de Vida.","especial":"","resumo":"Montaria imune a efeitos Mentais e de Medo, e recebe +10PV.","efeito":[]},{"nome":"Montaria Especial 3","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Montaria Especial 2", "Código da Honestidade"]],"descricao":"Sua montaria desenvolveu um vínculo profundo com você, permitindo que você veja pelos olhos dela apenas se concentrando. Ela também recebe +1 em Força e +1 em Vontade e é capaz de enxergar criaturas invisíveis.","especial":"","resumo":"Pode ver pelos olhos da montaria (FOR+1, VON+1 e vê o invisível).","efeito":[]},{"nome":"Mordida Poderosa","categoria":"Característica","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você pode usar seus dentes para fazer um ataque desarmado. O dano da sua mordida é igual a Força +4/Corte.","especial":"","resumo":"Mordida FOR+4/Corte.","efeito":["+ataque","Mordida","Corte","CaC",true,4]},{"nome":"Motivar","categoria":"Técnica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":["habilidade",["Código da Lealdade"]],"descricao":"Você profere palavras de encorajamento que inspiram seus aliados, recuperando sua moral e vontade. Todos os aliados num raio de 1 metro por ponto de Vontade que você tiver e que puderem lhe ouvir recuperam imediatamente 10 Pontos de Vida e quaisquer efeitos de Medo que os estiver afetando é removido. Estes efeitos não afetam o personagem usando essa Habilidade.","especial":"","resumo":"Aliados em <a class=\'vontade\'> </a> metros recuperam 10PV e tem efeitos de Medo removidos.","efeito":[]},{"nome":"Mover Terra","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":11, "requisitos":["habilidade",["Princípio Natural"]],"descricao":"Você desenha um Selo Místico sobre o solo, fazendo com que ele se mova subitamente sob os pés de seus adversários (todos em uma área de 2 metros de diâmetro dentro de sua área de visão precisam fazer um teste de Agilidade com Dificuldade igual à sua Determinação ou cairão). Você também pode abrir uma passagem através de pedra ou terra. Essa passagem terá aproximadamente 2 metros de diâmetro e uma profundidade igual à sua Vontade em metros. Você pode deixar a passagem aberta, criando um túnel, ou fechá-la atrás de si depois que passar. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Visão. Raio 2m. AGIxDET:Derruba. Abre passagens (temp.) em terra ou pedra.","efeito":[]},{"nome":"Movimento Brusco","categoria":"Característica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["habilidade",["Dançarino do Ar"]],"descricao":"Você realiza um movimento veloz e potente com as suas asas para se deslocar rapidamente e escapar de um golpe iminente. Quando estiver voando e for atingido por um ataque, você pode anunciar que está realizando um movimento brusco, e perder a quantidade de dano que sofreria em Pontos de Mana ao invés de Pontos de Vida. Se estiver no chão, você só pode utilizar esta Habilidade contra ataques à distância. Você só pode usar esta Habilidade uma vez por rodada. Se um ataque causar mais dano do que você tem Pontos de Mana quando utilizar esta Habilidade, o dano excedente causará a perda normal de Pontos de Vida.","especial":"","resumo":"Voo: Escolha receber dano em Mana ao invés de Vida. Chão: Apenas vs projétil.","efeito":[]},{"nome":"Movimentos Evasivos","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Acrobata"]],"descricao":"Você ganha +1 na sua Defesa para cada 2 pontos que tiver em Agilidade. Esta habilidade só funciona se você estiver sem armadura. Esse é um bônus de Esquiva.","especial":"","resumo":"Sem Armadura: Esquiva + AGI/2.","efeito":["esquiva!","+(AGI/2)", ": +(AGI/2) quando sem armadura."]},{"nome":"Nanismo","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["!raca",["Metadílio"]],"descricao":"Você é menor do que a média de sua raça – em média entre 1 e 1,2 metros de altura. Você pode rolar +1d6 quando fizer testes para se esconder, se mover em silêncio ou passar despercebido de qualquer forma. Além disso, seu bônus automático de Defesa é 6 ao invés de 5. No entanto, armas corporais que requerem duas mãos são grandes demais para que você possa usá-las com eficiência, e você precisa usar ambas as mãos para usar qualquer arma corporal com FN 5 ou mais.","especial":"","resumo":"Furtividade +1d6. Defesa 6. Sem armas de duas mãos. FN>=5 requer duas mãos.","efeito":["defesa+",1,"nanismo"]},{"nome":"Nascido nas Montanhas","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você nasceu ou passou grande parte da sua vida em ambientes montanhosos. Você recebe +2 em seus testes ligados à locais rochosos e montanhosos – como escalar rocha (nua ou trabalhada), percepção e sobrevivência em áreas montanhosas, identificar animais dessas regiões, avaliar formações rochosas e pedras brutas ou trabalhadas (incluindo construções de pedra e pedras preciosas) e para trabalhar em pedra – seja artesanato, alvenaria ou joalheria.","especial":"","resumo":"Sobrevivência em Montanha, Trabalhos em Pedra +2.","efeito":[]},{"nome":"Navegador","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você sabe o que é necessário para pilotar um navio com eficiência. Você rola +1d6 em todos os testes ligados a navegação, incluindo ler mapas marítimos, fazer qualquer serviço de convés, escalar cordames, pescar, se localizar no mar e nadar.","especial":"","resumo":"Navegação & Cia +2.","efeito":[]},{"nome":"Nervos de Aço","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você tem um autocontrole invejável e é capaz de se concentrar mesmo quando outros entrariam em desespero. Você tem +20 Pontos de Mana.","especial":"","resumo":"Mana +20.","efeito":["mana+",20]},{"nome":"Nigredo","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você concentrou seus estudos alquímicos na decomposição de elementos e no uso de venenos. Você recebe +2 nos seus testes para produzir venenos e antídotos e também em testes para resistir aos efeitos de venenos de qualquer espécie.","especial":"","resumo":"Produzir Venenos & Antídotos +2. Resistir Venenos +2.","efeito":[]},{"nome":"Nocautear","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Faça um ataque corporal usando um escudo ou uma arma de duas mãos. Se acertar, o alvo sofre apenas metade do dano, mas fica Paralisado por 1 turno.","especial":"","resumo":"Ataque Cac (Escudo|Arma Duas Mãos). Dano/2. Paralisa por 1 turno.","efeito":[]},{"nome":"O Dobro ou Nada","categoria":"Característica","tipo":"Reação","mana":20,"dificuldade":0, "requisitos":["habilidade",["Sorte"]],"descricao":"Você está acostumado à dar chance para sua sorte – às vezes, além do que seria considerado saudável. Quando falhar em um teste, você pode fazer o teste novamente, ignorando completamente o primeiro resultado. No caso de sucesso, além de passar no teste, qualquer efeito numérico proveniente do sucesso (dano causado por um ataque, duração de uma magia, PVs curados com uso de primeiros socorros, etc.) é dobrado. Mas se o teste for uma falha, ela deve ser considerada como uma falha crítica, com todos os seus possíveis efeitos numéricos dobrados. No caso de uma falha crítica nesse teste, o Mestre deve considerar que o fracasso foi uma falha crítica particularmente desastrosa – com efeitos limitados apenas pela sua imaginação sádica. Você só pode usar essa Habilidade uma vez por turno.","especial":"","resumo":"Refaça teste. Sucesso duplica resultado. Falha é crítica.","efeito":[]},{"nome":"Olho da Águia","categoria":"Técnica","tipo":"Reação","mana":10,"dificuldade":0, "requisitos":["nivel",5, "habilidade",["Disparo Certeiro"]],"descricao":"Sempre que você fizer um ataque à distância (incluindo arremessos) você pode rolar novamente 1 dos dados. Você pode escolher com qual dos resultados vai ficar. Você só pode usar esta Habilidade 1 vez por turno.","especial":"","resumo":"Uma vez por turno. Rerole um dado de ataque à distância.","efeito":[]},{"nome":"Olho do Furacão","categoria":"Magia","tipo":"Ação","mana":40,"dificuldade":14, "requisitos":["nivel",5, "habilidade",["Evocar Temporal"]],"descricao":"Desenhando um Selo Místico sobre si mesmo, você cria um poderoso turbilhão de vento em uma área com um diâmetro em metros igual à sua Vontade e uma altura igual à 10 vezes sua Vontade. Essa área tem um olho central com cerca de 2 metros de diâmetro onde não há vento. O furacão se move conforme você se desloca, permanecendo centrado em você. Todos dentro da área do furacão devem fazer um teste de Força (Dificuldade igual à sua Determinação) para não serem arremessados um número de metros igual à sua Vontade, ficando caídos. Vencendo 2 testes consecutivos um personagem consegue chegar ao olho do furacão – mas o conjurador pode se deslocar para tentar engolfar personagens na parede de vento outra vez. O furacão impede a linha de visão através dele. Este Selo Místico dura uma quantidade de turnos igual à Vontade do conjurador.","especial":"","resumo":"Diâmetro:VON, altura:10*VON por VON turnos. FOR[<a class=\'determinacao\'> </a>]: arremessado VON metros. ","efeito":[]},{"nome":"Olhos de Águia","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",1],"descricao":"Você possui olhos naturalmente potentes, com capacidades de percepção únicas. Você pode rolar +1d6 quando fizer testes que envolvam a visão, e consegue distinguir detalhes à uma distância em quilômetros igual à sua Inteligência. Você também consegue ver pobremente na escuridão, sendo capaz de distinguir vultos e formas, mas não detalhes específicos (como cores, inscrições ou fisionomias).","especial":"Você só pode selecionar essa Habilidade durante a criação do personagem.","resumo":"Visão +1d6. Enxerga <a class=\'inteligencia\'> </a> km. Vê na penumbra.","efeito":[]},{"nome":"Onda de Chamas","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Arma Incandescente"]],"descricao":"Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal, contra um alvo dentro da sua linha de visão. Esse ataque produz uma onda flamejante que causa dano igual a <a class=\'fogo\'>10</a>/Fogo. Esse efeito pode ser usado para inflamar objetos combustíveis – mas não faz alvos vivos irromperem em chamas.","especial":"","resumo":"Ataque CaC. Onda Flamejante de <a class=\'fogo\'>10</a>/Fogo. Inflama.","efeito":[]},{"nome":"Onda de Frio","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Arma Gélida"]],"descricao":"Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal, contra um alvo dentro da sua linha de visão. Esse ataque produz uma rajada de ar gélido e partículas de gelo que causa igual a <a class=\'frio\'>10</a>/Frio. Se o alvo for um líquido, ele congela uma área de até 10 metros quadrados, com cerca de 10 centímetros de espessura.","especial":"","resumo":"Ataque CaC. Rajada de Ar Gélido de <a class=\'gelo\'>10</a>/Gelo. Congela.","efeito":[]},{"nome":"Onda de Raios","categoria":"Técnica","tipo":"Ação","mana":15,"dificuldade":0, "requisitos":["habilidade",["Arma Relampejante"]],"descricao":"Faça um ataque corporal com uma arma que esteja marcada com sua Runa pessoal, contra um alvo dentro da sua linha de visão. Esse ataque produz uma descarga elétrica que causa igual a <a class=\'elet\'>10</a>/Eletricidade. Esse ataque ignora qualquer escudo ou armadura com a Característica Pesada e quaisquer bônus de bloqueio do alvo.","especial":"","resumo":"Ataque CaC. Descarga Elétrica de <a class=\'elet\'>10</a>/Elet. Ignora defesa metálica.","efeito":[]},{"nome":"Onda Fantasma","categoria":"Técnica","tipo":"Ação","mana":15,"dificuldade":0, "requisitos":["habilidade",["Ataque Fantasma"]],"descricao":"Faça um ataque corporal contra um alvo que possa ver. Você precisa estar usando uma arma que esteja marcada com sua Runa pessoal. Esse ataque produz uma onda espectral que ignora paredes, portas, armaduras, escudos e quaisquer outros obstáculos inorgânicos. Essa rajada causa 10 de dano (o tipo de dano causado pelo ataque será o mesmo do tipo que a arma usada puder causar normalmente) e afeta criaturas incorpóreas como se elas fossem sólidas.","especial":"","resumo":"Ataque CaC. Onda Espectral de 10/[Arma] que ignora obstáculos e defesas.","efeito":[]},{"nome":"Orbe de Contenção","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Convocar Animais"]],"descricao":"Conjurando um Selo Místico sobre um item esférico com pelo menos 10 cm de diâmetro (um ovo de canidrako ou uma maçã por exemplo) que não tenha nenhum Selo Místico ou Runa Arcana sobre ele, o item passa a ser capaz de absorver qualquer Besta que tenha o temperamento Protetor com relação á você, simplesmente tocando-o. Enquanto estiver dentro da orbe o tempo não passa para o animal (ele não envelhece, não precisa comer ou dormir e não é afetado por efeitos de sangramentos, venenos ou doenças, nem recupera Pontos de Vida e Mana por descanso). Liberar o animal exige que o conjurador destrua o item (geralmente arremessando-o no chão) o que exige uma ação padrão, mas não exige novos testes para conjurar a magia. Esse Selo Místico dura indefinidamente até o item ser destruído.","especial":"","resumo":"Objeto esférico armazena Besta com temperamento Protetor.","efeito":[]}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_habilidadesPR() {
    return '{"habilidade":[{"nome":"Panache","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Língua Afiada"]],"descricao":"Você possui uma bravura petulante e uma confiança inabalável nas suas próprias habilidades. Enquanto não estiver usando armadura, você recebe +1 na Defesa para cada 2 pontos de Vontade. Esse é um bônus de Esquiva.","especial":"","resumo":"Sem Armadura: Esquiva + <a class=\'vontade\'> </a>/2.","efeito":["esquiva!","+(VON/2)", ": +(VON/2) quando sem armadura."]},{"nome":"Parede de Escudos","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você está acostumado a lutar em grupo e usar seu escudo para proteger seus aliados. Enquanto você estiver usando um escudo, todos os aliados adjacentes a você recebem um bônus de +1 na Defesa. Este é um bônus de Bloqueio.","especial":"","resumo":"Com Escudo: Aliados adjacentes recebem Bloqueio +1.","efeito":[]},{"nome":"Parede de Gelo","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":10, "requisitos":["habilidade",["Congelar"]],"descricao":"Desenhando uma runa Arcana no ar, você congela a umidade do ambiente na forma de uma grossa parede de gelo. A parede tem 3 metros de altura por 3 de largura e 1 metro de espessura, e pode ser criada em qualquer ângulo. A parede tem 60 Pontos de Vida, Defesa 10, é Vulnerável ao Fogo e sempre que receber dano por Frio recupera Pontos de Vida ao invés de sofrer dano. Ela pode suportar até 500 quilos de peso sobre ela antes de quebrar. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados, mas o gelo criado é permanente e descongela em velocidade normal.","especial":"","resumo":"3x3x1m³. Vida 60. Def 10. Vulnerável à Fogo. Absorve Frio. Suporta 500kg.","efeito":[]},{"nome":"Passo Leve","categoria":"Técnica","tipo":"Reação","mana":10,"dificuldade":0, "requisitos":["nivel",5, "habilidade",["Furtivo"]],"descricao":"Sempre que você fizer um teste para mover-se em silencio, se esconder ou camuflar ou bater carteiras você pode rolar novamente 1 dos dados. Você pode escolher com qual dos resultados vai ficar. Esta Habilidade só pode ser usada uma vez por turno.","especial":"","resumo":"Uma vez por turno pode rejogar um dado em ações furtivas.","efeito":[]},{"nome":"Patas com Cascos","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui fortes patas munidas de cascos resistentes. Você pode rolar +1d6 quando fizer testes de correr, saltar ou desviar de obstáculos, e seu Deslocamento é aumentado em 1. Além disso, se fizer ataques desarmados com seus cascos, seu dano será Força +2/Contusão.","especial":"","resumo":"Correr,Saltar,Desviar de Obstáculos +1d6. Desloc.+1. Cascos FOR+2/Cont.","efeito":["deslocamento+",1,"+ataque","Cascos","Contusão","CaC",true,2]},{"nome":"Patas Fortes","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui pernas mais fortes do que a maioria dos membros da sua raça. Você pode rolar +1d6 quando fizer testes de corrida, salto, evitar quedas, etc. Além disso, o dano dos seus ataques com cascos é aumentado em +2.","especial":"","resumo":"Correr,Saltat,Evitar Quedas,Desviar de Obstáculos +1d6. Dano Cascos +2.","efeito":["modificador","dano",["Cascos"],[],[],[],2]},{"nome":"Pedra Filosofal","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10, "habilidade",["Alquimia Avançada"]],"descricao":"Você adquiriu um conhecimento tal sobre os fenômenos físicos e químicos, que tornou-se capaz de alterar as características de substâncias inanimada. Além dos seis processos usados na produção de poções, você pode usar um sétimo processo, o Magnum Opus: é um processo através do qual as propriedades de uma substância são transmutadas em outra. Os procedimentos específicos do Magnum Opus são conhecidos apenas por Alquimistas extremamente talentosos, e cuidadosamente mantidos em segredo. Através desse processo, um Alquimista pode transformar até 1 quilo de uma substância em outra, desde que sejam da mesma origem (substâncias de origem animal podem ser transformadas em outras substâncias animais, minerais podem ser transformados em outros minerais e vegetais em outros vegetais) com um procedimento que leva 1 semana. O alquimista precisa verificar o processo diariamente, ou a transformação falhará e os ingredientes serão perdidos, mas nenhum teste é necessário. O ingrediente utilizado precisa ter um custo igual à 10 vezes maior ou menor do que o ingrediente que o Alquimista quer produzir. Essa transformação é permanente, mas pode ser revertida através do mesmo processo.","especial":"","resumo":"Pode transformar uma substância em outra de mesma fonte. Uma semana.","efeito":[]},{"nome":"Pele de Pedra","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Sua pele é composta por uma grossa camada de rocha que o tornam extremamente resistente e pesado. Você recebe +1d6 em todos os seus testes para evitar ser derrubado, resistir à doenças e venenos, empurrar ou segurar peso, mas é considerado Inapto em testes de escalar, saltar, correr ou se mover com agilidade. Você precisa de um turno inteiro para se levantar, ao invés de uma ação de movimento e para você é impossível nadar. Você não possui o sentido do tato, mas não sente desconforto por ambientes com condições climáticas hostis. Seus ataques desarmados causam dano igual a Força +2/Contusão e você tem Defesa +4 (Esse bônus de Defesa conta como Armadura). Além disso, sua pele tem as características de uma armadura Pesada, mas a conformação única da sua pele o impede de usar armaduras, e qualquer roupa precisa ser feita sob medida para você, custando duas vezes mais que o normal.","especial":"","resumo":"Aprox.500kg. Não possui tato. Dano Desarmado +2. Armad.Nat.+4 Pesada.","efeito":["modificador","dano",[],[-1],[],[],2,"armadura_natural",4,true,false]},{"nome":"Pele de Pedra 2","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Sua pele é mais espessa do que a da maioria dos outros Mahoks, seja esta uma característica inata sua ou por você estar apresentando os primeiros sinais de envelhecimento. Você é Resistente à Perfuração e tem +5 Pontos de Vida. Além disso, sua pele adquire também as características de uma armadura Rígida (além da característica Pesada).","especial":"","resumo":"Resiste Perfuração. Vida+5. Armadura Natural Rigida.","efeito":["vida+",5,"armadura_natural",4,true,true]},{"nome":"Perceber Corrupção","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Sexto Sentido"]],"descricao":"Criaturas sobrenaturais não são capazes de esconder sua natureza de você. Sempre que você estiver diante de uma criatura amaldiçoada, um morto-vivo, demônio ou espírito, você é capaz de perceber a natureza sobrenatural daquela criatura imediatamente, mesmo que ela esteja disfarçada, transformada ou sob algum efeito ilusório – incluindo qualquer forma de invisibilidade. Você também é capaz de perceber automaticamente quaisquer mentiras que tais criaturas digam.","especial":"","resumo":"Identifica criaturas sobrenaturais. Imune as suas mentiras.","efeito":[]},{"nome":"Permutação Instantânea","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":-1, "requisitos":["habilidade",["Teleporte 1"]],"descricao":"Desenhando uma Runa Arcana entre você e um alvo, você é teleportado para a posição em que o alvo ocupa ao mesmo tempo em que o alvo é teleportado para o local que você está. Se por algum motivo o alvo ou não couber na área onde você está (e vice-versa), esta magia falha automaticamente. Essa Runa Arcana se dissipa assim que seus efeitos forem desencadeados.","especial":"","resumo":"Troca de posição com alvo por teleporte. Se inviável, falha.","efeito":[]},{"nome":"Pernas do Mar","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você passou muito tempo sobre as ondas e está acostumado com o balanço do mar. Você recebe +2 em todos os seus testes de Força e Agilidade quando estiver em uma embarcação ou dentro d’água.","especial":"","resumo":"Bônus de +2 para Força e Agilidade em embarcações ou água.","efeito":[]},{"nome":"Pernas Vulpinas","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Suas pernas são flexíveis e próprias para saltar, terminando em pés pequenos dotados de solas acolchoadas que permitem que você ande quase sem fazer sons. Você rola +1d6 quando fizer testes para saltar, correr e se mover em silêncio. Além disso, você tem Deslocamento +1 e a distância dos seus saltos é aumentada em 1 metro.","especial":"","resumo":"Saltar, Correr, Furtividade +1d6. Salto +1m. Deslocamento +1.","efeito":["deslocamento+",1]},{"nome":"Persuadir","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Gregário"]],"descricao":"Dando uma ordem direta a um alvo, você o induz a realizá-la antes mesmo que ele seja capaz de racionalizar o que está fazendo. Você escolhe uma criatura que esteja a uma distância em metros igual à sua Vontade e que seja capaz de compreender o que você diz e lhe dá um comando. Aquela criatura precisa passar em um teste de Vontade (Dificuldade igual à sua Determinação) ou realiza o comando imediatamente. O comando deve poder ser realizado como uma Ação Livre ou como uma Ação de Movimento e não pode ter mais do que uma palavra por ponto de Vontade que você tiver (“largue a espada”, “deite no chão”, “corra para longe de mim”). Se o comando disser respeito a ações involuntárias do alvo ou se for contra suas crenças ou sua segurança (“durma”, “se jogue pela janela”, “empurre o Rei do parapeito”) o alvo é automaticamente bem sucedido no teste. O alvo realiza a ação imediatamente, mas não tem efeito depois disso – assim, um alvo que seja comandado a deitar-se no chão pode se levantar no próximo turno, enquanto um alvo comandado para correr para longe pode se aproximar novamente na sua próxima ação. Este é um efeito mental.","especial":"","resumo":"Efeito Mental. Alvo em VON m. VON[<a class=\'determinacao\'> </a>]: comando de até VON palavras.","efeito":[]},{"nome":"Pintura Corporal","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Pinturas corporais são comuns entre os Faunos, utilizadas em rituais ou simplesmente como forma de expressão artística. Você deposita muita fé nos significados tradicionais das pinturas, ao ponto de conseguir se beneficiar dessa convicção quando estiver usando uma pintura.  Sempre que estiver usando uma pintura corporal e que ela esteja completamente à mostra, você recebe um dos benefícios listados. Apenas uma pintura corporal pode ser usada por vez, e perdura até você tomar banho – intencionalmente ou não! - ou dormir. <br/><b>Pintura de Caça:</b> Realizada ao redor dos olhos e nas mãos. Você recebe +1 em seus testes ligados à visão e ataques à distância. Além disso, seus ataques à distância causam +1 de dano. <br/><b>Pintura de Guerra:</b> Realizada nos braços, mãos e peito. Seus ataques corporais causam +2 de dano e você recebe Defesa +1 (Este é um bônus de esquiva). <br/><b>Pintura de Oração:</b> Realizada ao redor da boca e pescoço. Você recebe +2 em todos os seus testes ligados à sua voz e instrumentos musicais de sopro, incluindo interações sociais (como convencer ou mentir) e cantar ou usar instrumentos musicais de sopro (incluindo Habilidades do tipo Música). <br/><b>Pintura Ritual:</b> Realizada no peito e no rosto. Você recebe +1 em todos os seus testes ligados à liguagem corporal (como dançar, seduzir ou detectar mentiras) e Habilidades do tipo Magia.","especial":"A tintura necessária para a pintura é feita com materiais simples, facilmente encontrados na natureza (como folhas ou frutas trituradas, carvão e argila) e geralmente não tem custo, mas o Mestre pode exigir que o personagem gaste meia hora em busca dos materiais necessários e no preparo da tintura. O processo de aplicar a pintura demora cerca de 10 minutos, e exige sucesso num teste de Inteligência (Dificuldade 8) que pode ser realizado por você mesmo ou por alguém em quem você confia.","resumo":"Pinturas de Caça, Guerra, Oração, Ritual. Verifique a descrição completa.","efeito":[]},{"nome":"Poesia dos Bardos","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Através das inúmeras canções e poemas épicos, você conhece muitas histórias e lendas. Você pode rolar +1d6 quando fizer testes referentes à qualquer tipo de conhecimento. Se o conhecimento em questão for considerado perdido, maçante ou técnico para figurar uma canção ou poema, não há como o Bardo conseguir informações sobre o assunto.","especial":"","resumo":"Conhecimento (descrito em canções ou poemas) +1d6.","efeito":[]},{"nome":"Pontífice","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Primaz"]],"descricao":"Você adquiriu uma profunda ligação e um conhecimento extremamente amplo sobre a magia e seu fluxo das Divindades para o mundo material. Você rola +2 em todos os seus testes envolvendo magias (incluindo conjurá-las), todas as suas magias de Cura recuperam 5 Pontos de Vida a mais e o custo de todas as Habilidades do tipo Magia que você lançar é diminuído em 5. Além disso todos os Selos Místicos que você desenhar duram o dobro do tempo normal.","especial":"","resumo":"Magias:Teste+2, Cura+5, Custo-5. Duração de Selos Místicos dupliacada.","efeito":["modificador","dificuldade",[],["Magia"],["Ação"],[],2,"modificador","mana",[],["Magia"],["Ação"],[],5,"modificador","descricao+",[],["Magia"],["Ação"],["cura"],5]},{"nome":"Porta Oculta","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Sala Oculta"]],"descricao":"Desenhando uma Runa Arcana sobre uma porta, você cria um acesso permanente para a sua Sala Oculta. A porta em que você desenhar esta Runa aparece numa das paredes da sua Sala Oculta, e sempre que você abrir a porta por dentro da Sala Oculta, você sairá pela porta marcada. Assim que a porta for fechada, no entanto, ela não levará mais para a Sala Oculta – ou seja, ela serve para sair da Sala Oculta em um lugar fixo, mas não serve de entrada de emergência. Você pode ter um número de Portas Ocultas igual à sua Inteligência. Essa Runa Arcana é perene.","especial":"","resumo":"Runa sobre porta conecta-a a sua Sala Oculta, tornando-se uma saída dela.","efeito":[]},{"nome":"Portal","categoria":"Magia","tipo":"Ação","mana":60,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Caminhada Mágica"]],"descricao":"Desenhando um Selo Místico no ar, ele se torna uma passagem (com o tamanho aproximado de uma porta) até um local onde haja outro Selo da sua divindade (pode ser uma igreja que você conheça, ou algum lugar onde você tenha escrito um Selo da sua divindade previamente). A distância entre os dois pontos é irrelevante. Este Selo Místico dura 1 minuto, mas você pode dissipá-lo à qualquer momento.","especial":"","resumo":"Abre um portal para um local com o símbolo de sua divindade. Até 1 min.","efeito":[]},{"nome":"Posição Distinta","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Graças à função que exerce as pessoas ao seu redor estão acostumadas a tê-lo em alta estima. Você é bem-vindo em praticamente qualquer círculo social, e as pessoas assumem que você tem todo o direito de estar ali. Aldeões, camponeses e serviçais sempre se esforçarão ao máximo para agradá-lo e nobres o tratarão como igual. Além disso, sua posição lhe concede alguns benefícios materiais. Você possui uma vestimenta adequada ao seu cargo e um distintivo de sua posição. Finalmente, depois que tiver comprado seus itens iniciais, você pode selecionar um desses itens e ele será considerado de qualidade superior sem qualquer custo adicional.","especial":"","resumo":"Um item iniciais é de qualidade alta, além dos benefícios sociais.","efeito":[]},{"nome":"Potência","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é mais forte e resistente do que a maioria dos indivíduos da sua raça. Você tem Força +1 e +5 Pontos de Vida.","especial":"","resumo":"Força +1. Vida +5.","efeito":["vida+",5,"for+",1]},{"nome":"Precisão","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Disparo Certeiro"]],"descricao":"Você confia mais em uma pontaria bem feita do que em força bruta quando arremessa armas ou dispara com arcos. Quando fizer ataques à distância você pode usar Inteligência ou Agilidade ao invés de Força para calcular o dano de armas de distância e de arremesso.","especial":"","resumo":"Dano de ataques à distância usa INT ou AGI ao invés de FOR.","efeito":["precisão"]},{"nome":"Precognição","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Psicometria","Retrocognição"]],"descricao":"Fechando os olhos e concentrando-se por 1 hora, você visualiza eventos que podem acontecer. As informações obtidas são vagas e não fazem sentido até que os eventos vislumbrados comecem a se desenrolar de fato. Durante um período em dias igual à sua Vontade depois de ter usado essa Habilidade, você recebe um bônus de +1d6 em 1 rolagem qualquer – você sabe o que vai acontecer e consegue reagir com eficiência. Somente depois que tiver usado esse bônus ou que a duração do efeito tenha passado você pode usar esta Habilidade novamente.","especial":"","resumo":"Após meditação, recebe +1d6 num teste em <a class=\'vontade\'> </a> dias. Não cumulativo.","efeito":[]},{"nome":"Presença Confiante","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Farda"]],"descricao":"Você possui tanta confiança em sua posição – e compreende que ela gera respeito naqueles ao seu redor – que é capaz de trajá-la como uma armadura! Sempre que estiver utilizando uma vestimenta adequada ao seu posto você recebe +1 na Defesa para cada 2 pontos de Vontade. Esse é um bônus de Esquiva.","especial":"","resumo":"Com roupa adequada ao posto: Esquiva + <a class=\'vontade\'> </a>/2","efeito":["esquiva!","+(VON/2)",": +(VON/2) com vestimenta adequada."]},{"nome":"Presença Inspiradora","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você inspira confiança em seus aliados com sua mera presença. Todos os seus aliados, mas não você, recebem Determinação +2 e +1 em todos os seus testes enquanto você estiver dentro do seu alcance de visão. Esses benefícios deixam de ter efeito se você ficar desacordado por qualquer motivo.","especial":"","resumo":"Aliados recebem Determinação+2 e +1 em todos os testes vendo você.","efeito":[]},{"nome":"Presença Real","categoria":"Característica","tipo":"Suporte","mana":5,"dificuldade":0, "requisitos":[],"descricao":"Você é capaz de uma comunicação rudimentar – dentro das capacidades do animal – com qualquer Besta do tipo insectóide ou aracnídeos, e é capaz de dar comandos simples que serão obedecidos prontamente, dentro das capacidades da criatura. Você também é automaticamente bem sucedido em testes de Força para resistir quando for afetado por qualquer Habilidade do tipo Característica de todas as criaturas dos tipos Aracnídeo e Insectóide. Além disso, todas as suas Habilidades que envolvam criaturas do tipo Besta (Companheiro Animal, Convocar animais, Forma Animal e guardião da Natureza) passam a incluir criaturas dos tipos Aracnídeo e Insectóide.","especial":"","resumo":"Insetos e Aracnídeos: Comunicação, Resistência, Extra em habilidades.","efeito":[]},{"nome":"Prever Posição","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Vigília"]],"descricao":"Você aprendeu a perceber os indícios de alvos camuflados ou invisíveis – pequenos deslocamentos de folhas e poeira, cores e brilhos inadequados, sons (ou a falta deles) em lugares errados. Se você sabe que um alvo invisível ou camuflado existe, você pode fazer ataques à distância e testes de visão contra este alvo, mas realizará esses testes como se fosse Inapto. Além disso, você consegue prever os movimentos erráticos de alvos particularmente velozes, e não se deixa enganar por eles. Ignore sempre os bônus de Esquiva da Defesa do alvo.","especial":"","resumo":"Inapto contra alvos invisíveis. Ignore bônus de Esquiva dos alvos.","efeito":[]},{"nome":"Primaz","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Asceta"]],"descricao":"Você acumulou um grande conhecimento sobre os desígnios das divindades. Você rola +1 em todos os seus testes envolvendo magias (incluindo conjurá-las) e conhecimento (esse bônus se acumula com os bônus de Asceta). Além disso, o custo de todas as Habilidades do tipo Magia que você lançar é diminuído em 5.","especial":"","resumo":"Magias: Conjuração e Conhecimento +1, Cura+5, Custo-5.","efeito":["modificador","dificuldade",[],["Magia"],["Ação"],[],1,"modificador","mana",[],["Magia"],["Ação"],[],5]},{"nome":"Primeira Marca","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você tatuou uma marca pessoal que lhe concede um poderoso senso de propósito. Enquanto esta tatuagem estiver visível você tem +10 Pontos de Vida OU +10 Pontos de Mana (essa escolha é feita quando você seleciona essa Habilidade e não pode ser mudada mais tarde). Além disso, seus ataques desarmados são considerados armas marcadas com sua Runa Pessoal para todos os propósitos.","especial":"","resumo":"Tatuagem visível: +10 pontos de Vida ou Mana.","efeito":["primeira_marca"]},{"nome":"Princípio Natural","categoria":"Magia","tipo":"Ação","mana":0,"dificuldade":8, "requisitos":[],"descricao":"Você desenha um Selo Místico no ar que se transforma em uma pequena quantidade de terra, água ou ar. Um punhado de terra pode ser usado para nutrir uma pequena planta, uma porção de água pode ser usada para matar a sede de uma pessoa e uma porção de ar criado desse modo permite que uma criatura respire normalmente por até 10 minutos debaixo d’água. Essa magia pode ser conjurada na forma de uma rajada mágica. Uma rajada de água pode apagar uma chama do tamanho de uma fogueira de acampamento, uma rajada de ar derruba ou espalha objetos leves e pequenos e uma rajada de pedras causa dano igual a 8/ Contusão. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados e qualquer quantidade de terra, água ou ar criada são permanentes.","especial":"","resumo":"Materializa água, terra ou ar para usos diversos.","efeito":[]},{"nome":"Prisão de Gelo","categoria":"Magia","tipo":"Ação","mana":50,"dificuldade":13, "requisitos":["nivel",5,"habilidade",["Parede de Gelo"]],"descricao":"Desenhando uma runa arcana sobre uma criatura ou objeto você cria um imenso bloco de gelo ao redor dele. O alvo pode ter um peso máximo igual a 100 vezes sua Inteligência em quilos. Uma criatura presa dentro do bloco é considerada Paralisada, sofre dano igual a <a class=\'frio\'>10</a>/Frio no começo de cada um de seus turnos e só pode ser alvo de efeitos mentais. O bloco tem 60 Pontos de Vida, Defesa 10, é Vulnerável a Fogo e sempre que receber dano por Frio recupera Pontos de Vida ao invés de sofrer dano. Ataques de Eletricidade causam dano normal ao bloco, mas também causa a mesma quantidade de dano na criatura presa dentro dele. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados, mas o gelo criado é permanente e descongela em velocidade normal.","especial":"","resumo":"Alvo de até 100*<a class=\'inteligencia\'> </a>kg preso em bloco (60PV, Def10), <a class=\'frio\'>10</a>/Frio por turno.","efeito":[]},{"nome":"Proteção Mística","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Toque Místico"]],"descricao":"Desenhando um Selo Divino sobre uma criatura viva, você à deixa imune a todos os efeitos mentais, efeitos de Medo, e Ilusões. Este Selo dura uma quantidade de horas igual à Vontade do conjurador.","especial":"","resumo":"Imuniza alvo contra Ilusões e efeitos Mentais e de Medo por <a class=\'vontade\'> </a> horas.","efeito":[]},{"nome":"Psicometria","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Fechando os olhos e tocando um objeto ou superfície, você é capaz de ver e ouvir os eventos relevantes que aconteceram ao redor dele. Apenas acontecimentos intensos ou constantes deixam marcas perceptíveis, e impressões mais recentes tendem a desbotar as mais antigas. O Oráculo recebe impressões mais recentes primeiro, sobrepostas à impressões mais antigas, sem nenhuma informação de tempo relativo (quando o evento ocorreu ou o tempo decorrido entre uma impressão e outra). Essa Habilidade demora tanto tempo quanto os eventos impressos no objeto ou superfície duraram, já que eles são percebidos em tempo real. Raramente um item consegue reter mais do que 1 hora de impressões, e se acontecimentos relevantes mais longos tiverem ocorrido ao redor do item eles geralmente estarão fragmentadas na forma de cenas curtas. Depois de ver todas as impressões de um item, o Oráculo pode revê-las em qualquer ordem que desejar.","especial":"","resumo":"Obtém \'impressões\' de eventos relevantes gravadas em objetos.","efeito":[]},{"nome":"Punho de Pedra","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Mover Terra"]],"descricao":"Você desenha um Selo Místico sobre o solo (ou em uma estrutura de pedra como Paredes de alvenaria, estátuas de pedra e tetos de cavernas), fazendo com que uma coluna se projete violentamente da estrutura. Um alvo dessa magia sofre dano igual à <a class=\'cont\'>30</a>/Contusão e precisa vencer um teste de Força (dificuldade igual à Determinação do conjurador) para não ser derrubado. A coluna tem cerca de 1 metro de diâmetro e uma extensão em metros igual à Vontade do conjurador. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados, mas a coluna de pedra é permanente.","especial":"","resumo":"Coluna de pedra projetada causa <a class=\'cont\'>30</a>/Contusão. FOR[<a class=\'determinacao\'> </a>]: Derruba.","efeito":[]},{"nome":"Purgar","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Curar Ferimentos 1"]],"descricao":"Desenhando um Selo Místico sobre uma criatura, objeto ou superfície, você os purifica de impurezas mundanas. Qualquer veneno ou agente infeccioso de origem natural afetado por essa magia se torna água pura e límpida, incluindo substâncias que estiverem em alimentos ou bebidas. Qualquer criatura afetada é imediatamente curada de qualquer veneno, doença, infecção de origem natural e também de quaisquer efeitos de sangramento. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Purifica impurezas mundanas.","efeito":[]},{"nome":"Quebrar a Defesa Sombria","categoria":"Técnica","tipo":"Reação","mana":10,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você é capaz de atravessar as defesas sobrenaturais de seus alvos. Sempre que causar dano em um alvo, você pode ignorar quaisquer Resistências à Dano que aquela criatura possua – se o alvo tiver Imunidade à Dano, considere que ela tem apenas Resistência àquele tipo de dano. Além disso, seus acertos críticos causam dano dobrado mesmo em criaturas imunes a danos críticos – como mortos-vivos com a Habilidade Corpo Vazio.","especial":"","resumo":"Ignora Resistência à Dano. Sempre pode causar dano crítico.","efeito":[]},{"nome":"Quebrar os Grilhões","categoria":"Magia","tipo":"Ação","mana":15,"dificuldade":12, "requisitos":["habilidade",["Dogma: Discípulo da Liberdade"]],"descricao":"Desenhando um Selo Místico entre você e uma criatura, você imediatamente liberta o alvo de qualquer efeito que o esteja restringindo. Esta Magia imediatamente dissipa qualquer Runa ou Selo cujos efeitos restrinjam a movimentação do alvo – como Entrelaçar ou Eletricidade Estática, por exemplo. Essa Magia também pode ser usada para libertar alvos de amarras mundanas, soltando cordas, abrindo grilhões, afrouxando os braços de um captor ou destrancando e abrindo portas. A Magia afeta todo e qualquer objeto ou criatura que está restringindo o alvo – assim, se o alvo estiver em uma cela, a Magia abrirá a porta da cela, libertando quaisquer outras pessoas em seu interior. Finalmente, esta Magia elimina imediatamente as condições Amedrontado, Atordoado, Cego, Distraído, Enregelado, Indefeso e Paralisado do alvo, independente da origem dessas condições. Esse Selo Místico se dissipa assim que seus efeitos forem desencadeados.","especial":"","resumo":"Liberta alvos de amarras, grilhões e prisões mágicas e mundanas.","efeito":[]},{"nome":"Raça Florestal","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você se sente confortável e renovado quando está sob a proteção da vegetação. Quando estiver dentro de uma floresta, bosque ou selva você recebe +2 em todos os seus testes.","especial":"","resumo":"Quando em floresta, bosque ou selva: +2 em todos os testes.","efeito":[]},{"nome":"Raça Subterrânea","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você está acostumado aos ambientes subterrâneos e se sente confortável neles. Quando estiver dentro de cavernas ou em ambientes subterrâneos, você ganha +1 em todos os testes. Você também consegue enxergar na completa escuridão, mas nessas condições não consegue distinguir cores.","especial":"","resumo":"Quando em cavernas ou subterrâneos: +2 em todos os testes.","efeito":[]},{"nome":"Rajada de Água","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Princípio Natural"]],"descricao":"Você desenha um Selo Místico no ar de onde uma massa de água jorra em um poderoso jato. Um alvo dentro de sua linha de visão sofre dano igual a <a class=\'cont\'>6</a>/Contusão e precisa vencer uma rolagem de Força (Dificuldade igual à Determinação do conjurador) para não cair. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados mas qualquer quantidade de água criada é permanente.","especial":"","resumo":"Jato de água <a class=\'cont\'>6</a>/Contusão. FOR[<a class=\'determinacao\'> </a>]: Derruba.","efeito":[]},{"nome":"Rajada de Espinhos","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":10, "requisitos":["habilidade",["Sabedoria Selvagem"]],"descricao":"Desenhando um Selo Místico em um item de madeira você faz com que ele desenvolva espinhos longos e afiados que se projetam na direção de um oponente dentro da sua linha de visão, causando dano igual à <a class=\'perf\'>10</a>/Perfuração. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Projeta espinhos de madeira <a class=\'perf\'>10</a>/Perfuração.","efeito":[]},{"nome":"Rajada de Gelo","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":12, "requisitos":["habilidade",["Congelar"]],"descricao":"Desenhando uma Runa arcana no ar você projeta a partir dela uma rajada de energia mágica que causa dano igual a <a class=\'frio\'>20</a>/Frio em um alvo dentro da sua linha de visão. Se o alvo for uma criatura viva, ele fica Enregelado por 1 turno. Se a magia tiver como alvo um objeto inanimado, ela congela até 100 litros ou 100 quilos de material. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados, mas o gelo criado é permanente e descongela em velocidade normal.","especial":"","resumo":"Rajada <a class=\'frio\'>20</a>/Frio, enregela 1 turno. Congela 1000l ou 100kg.","efeito":[]},{"nome":"Rajada Elemental","categoria":"Magia","tipo":"Ação","mana":0,"dificuldade":8, "requisitos":[],"descricao":"Desenhando uma runa Arcana no ar você pode disparar uma rajada de energia elemental em qualquer alvo que possa ver. Essa magia causa <a class=\'elem\'>8</a> pontos de dano elemental (Fogo, Frio ou Eletricidade) escolhido no momento que o conjurador lança a magia. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Rajada elemental <a class=\'elem\'>8</a>/Fogo, Gelo ou Elet.","efeito":[]},{"nome":"Recursos","categoria":"Característica","tipo":"Especial","mana":0,"dificuldade":0, "requisitos":["nivel",1,"!raca",["Hamelin"]],"descricao":"Você possui (ou possuía) um pequeno negócio ou vem de uma família nobre. Você começa o jogo com o dobro das moedas inicias.","especial":"Esta habilidade só pode ser escolhida durante a criação do Personagem.","resumo":"Inicia com o dobre de moedas.","efeito":["moedas",400]},{"nome":"Relâmpago 1","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":10, "requisitos":["habilidade",["Eletricidade Estática"]],"descricao":"A partir de uma Runa Arcana que desenha no ar você dispara uma faísca elétrica contra um alvo dentro de seu campo de visão. O alvo sofre um dano igual a <a class=\'elet\'>20</a>/Eletricidade e fica Atordoado por 2 rodadas. Alvos usando armaduras de metal sofrem o dobro do redutor (-2 na Defesa, no Deslocamento e em todos os seus testes). A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Alvo no campo de visão <a class=\'elet\'>20</a>/Elet e 2 turnos Atordoado. Dano *2 em metal.","efeito":[]},{"nome":"Relâmpago 2","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":12, "requisitos":["nivel",5,"habilidade",["Relâmpago 1"]],"descricao":"Você projeta uma poderosa rajada de energia elétrica em um alvo dentro de seu campo de visão a partir de uma runa Arcana que você desenha no ar. O alvo sofre um dano igual a <a class=\'elet\'>40</a>/Eletricidade, e precisa fazer um teste de Força com dificuldade igual a sua Determinação ou ficará Paralisado por 1 turno. Alvos usando armaduras de metal realizam esse teste como se fossem Inaptos. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Alvo em visão <a class=\'elet\'>40</a>/Elet. FOR[<a class=\'determinacao\'> </a>], inapto com metal:Atordoado 1 turno.","efeito":[]},{"nome":"Reposicionar","categoria":"Técnica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":[],"descricao":"Verificando a melhor disposição de seus aliados em campo, você dá ordens para que eles se posicionem melhor. Um número de aliados igual à sua Vontade pode, imediatamente, realizar uma Ação de Movimento. Nenhuma criatura pode usar Habilidades do tipo Reação contra estes aliados durante essa movimentação. Utilizar esta Habilidade requer uma Ação de Rodada Completa, e você não pode se beneficiar dos efeitos de Habilidade.","especial":"","resumo":"Até <a class=\'vontade\'> </a> aliados realizam ação de movimento. Sem reações.","efeito":[]},{"nome":"Resistência Elemental","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":9, "requisitos":[],"descricao":"Desenhando uma Runa Arcana sobre uma criatura ou objeto, você confere Resistência ao Fogo, Frio ou Eletricidade a ele. Essa Runa Arcana dura por 1 minuto.","especial":"","resumo":"Alvo recebe Resistência à Fogo, Frio ou Eletricidade por 1 minuto.","efeito":[]},{"nome":"Restaurar Convicção","categoria":"Característica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Inspirar Coragem"]],"descricao":"Você revigora o foco de um aliado através de palavras inspiradoras. Um aliado que possa lhe ouvir e que esteja a uma distância em metros igual à sua Vontade imediatamente recupera metade dos Pontos de Mana que tiver gastado e/ou perdido em seu último turno – se o alvo não tiver gastado e/ou perdido Pontos de Mana no último turno dele, esse efeito não pode ser usado naquele aliado. Este efeito não pode ser utilizado em você mesmo.","especial":"","resumo":"Aliado até <a class=\'vontade\'> </a> metros recupera metade da Mana usada em último turno.","efeito":[]},{"nome":"Retalhar","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Corte Arterial"]],"descricao":"Sempre que você rolar um Sucesso Crítico em um ataque corporal usando uma arma que cause dano por Corte ou Perfuração, o dano será multiplicado por 3 ao invés de 2. Este é um efeito de sangramento.","especial":"","resumo":"Sangramento. Crítico por Corte e Perfuração causa dano triplo.","efeito":[]},{"nome":"Retesar Eficiente","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui uma técnica eficiente em retesar arcos e bestas. Quando estiver usando uma besta ou prodd de qualquer tipo, você ignora a Característica Carregar dessas armas. Quando estiver usando um arco ou funda de qualquer tipo, o dano de seus ataques à distância é aumentado em +2.","especial":"","resumo":"Ignora Carregar de bestas e prodds. Dano de arco e funda +2.","efeito":["modificador","dano",["Arco","Funda"],[],[],[],2]},{"nome":"Retrocognição","categoria":"Técnica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Fechando os olhos e tocando uma criatura, você consegue ver e ouvir os eventos vividos por ela. Apesar da memória da criatura em questão ser essencial, a maioria dos acontecimentos importantes (do ponto de vista da criatura) tendem a se manter relativamente intactos em sua memória. Os eventos são vistos em tempo real e na ordem inversa em que ocorreram, mas se a criatura estiver relembrando um evento específico, essa memória será o que o Oráculo irá ver. Se o alvo quiser bloquear uma determinada memória, o Oráculo precisa ter um sucesso em um teste de Vontade (dificuldade igual à Determinação do alvo) para acessá-la. Se falhar em acessar uma determinada memória, o efeito dessa Habilidade cessa imediatamente. Este é um efeito mental.","especial":"","resumo":"Efeito Mental. Acessa memórias do alvo, requer VON[<a class=\'determinacao\'> </a>] caso alvo resista.","efeito":[]},{"nome":"Ripostar","categoria":"Técnica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Ataque Redirecionado"]],"descricao":"Você está sempre atento à guarda do oponente, esperando uma falha para contra-atacar de modo oportuno. Sempre que um oponente fizer um ataque contra você e errar, você pode imediatamente fazer um ataque normal contra aquele oponente.","especial":"","resumo":"Contra-ataca um inimigo que errar um ataque.","efeito":[]},{"nome":"Robustez","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui uma constituição vigorosa para os padrões da sua raça. Você tem +5 Pontos de vida e rola +1d6 em testes de Força para resistir à fadiga, venenos e doenças.","especial":"","resumo":"Resistir à fadiga, venenos e doenças +1d6. Vida +5.","efeito":["vida+",5]},{"nome":"Rugido de Ahogr","categoria":"Característica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Você aprendeu a canalizar a fúria de Ahogr em um poderoso rugido. Todos os oponentes que estiverem a até 10 metros à sua frente devem fazer um teste de Vontade (Dificuldade igual à sua Determinação). Aqueles que falharem no teste ficam Amedrontados e Atordoados por 1 turno. Um oponente só é afetado por esta habilidade uma vez por combate. Este é um efeito de Medo.","especial":"","resumo":"Todos 10m à frente: VON[<a class=\'determinacao\'> </a>]: Amedrontado & Atordoado por 1 turno. Medo.","efeito":[]},{"nome":"Rugido do Alfa","categoria":"Técnica","tipo":"Ação","mana":40,"dificuldade":0, "requisitos":["habilidade",["Rugido do Predador"]],"descricao":"Você emite um rugido capaz de abalar até o mais valente dos predadores. Todos os oponentes que estiverem a até 10 metros à sua frente que tiverem uma Determinação menor do que a sua ficam Paralisados por 1 turno. Um oponente só é afetado por esta habilidade uma vez por combate. Este é um efeito de Medo.","especial":"","resumo":"Todos 10m à frente: VON[<a class=\'determinacao\'> </a>]: Paralisado por 1 turno. Medo.","efeito":[]},{"nome":"Rugido do Predador","categoria":"Técnica","tipo":"Ação","mana":25,"dificuldade":0, "requisitos":[],"descricao":"Você emite um rugido amedrontador. Todos os oponentes que estiverem a até 10 metros à sua frente que tiverem uma Determinação menor do que a sua ficam Amedrontados por 1 turno. Um oponente só é afetado por esta habilidade uma vez por combate. Este é um efeito de Medo.","especial":"","resumo":"Todos 10m à frente: VON[<a class=\'determinacao\'> </a>]: Amedrontado por 1 turno. Medo.","efeito":[]},{"nome":"Runa de Localização","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":10, "requisitos":[],"descricao":"Você pode desenhar uma Runa Arcana em um item com a Característica Registro. Esta Runa fica ligada ao local geográfico em que você se encontra quando a conjura, e se torna um “atalho mágico” para o local. Você pode conjurar uma magia locomoção (Teleporte, Portal, etc.) sobre esta Runa, indo para o local onde ela foi desenhada. A magia de locomoção conjurada sobre essa Runa custa metade dos Pontos de Mana normais para ser conjurada. Essa Runa Arcana é permanente, mas, se a superfície onde ela foi escrita for danificada o efeito se perde.","especial":"","resumo":"Cria \'atalho mágico\' entre local e objeto Registro, para teleportes.","efeito":[]}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function json_habilidadesSZ() {
    return '{"habilidade":[{"nome":"Sabedoria Selvagem","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você passou muito tempo em ambientes selvagens e dedicou muito tempo ao estudo da natureza em todas as suas formas. Você rola +1d6 em testes que envolvam a natureza como forragear, rastrear, encontrar abrigo, identificar ervas, etc.","especial":"","resumo":"Forragear, Rastrear, Encontrar abrigo, Identificar ervas, etc. +1d6.","efeito":[]},{"nome":"Sabedoria Sobrenatural","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você recebe +1d6 em seus testes de conhecimento sobre maldições, criaturas dos tipos Amaldiçoado, Demônio, Espírito e Morto-vivo. Esse bônus também se aplica a testes para perceber e rastrear essas criaturas.","especial":"","resumo":"Conhecimento sobre maldições e criaturas sobrenaturais +1d6.","efeito":[]},{"nome":"Sala Oculta","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":16, "requisitos":["nivel",5],"descricao":"Desenhado uma Runa Arcana no ar, você cria um portal que o levará para uma pequena sala de 10 metros de profundidade, 10 metros de largura e 10 metros de altura. As paredes são indestrutíveis, brancas e lisas como vidro. Este é um plano paralelo exclusivamente seu, e você pode utilizá-lo como quiser, usando-o como depósito, biblioteca ou laboratório, por exemplo – mas terá que adquirir o que quiser que esteja dentro dele. O portal permanecerá aberto enquanto você quiser, e você pode fechá-lo à vontade quando estiver dentro da sala – ele sempre se abrirá no último local onde você abriu ele pela última vez. A sala possui ar ilimitado, e a luz dentro dela é sempre semelhante à de um dia nublado, mas você pode usar outras fontes de luz – como lampiões ou tochas – para torná-la total ou parcialmente melhor iluminada. Essa Runa Arcana é perene enquanto o portal estiver aberto. Se você estiver dentro da sala e o portal estiver fechado, a Runa continuará ativa, mas estará dentro da sala – e, portanto não pode ser detectada pelo lado de fora.","especial":"","resumo":"Abre um portal para sua Sala Oculta (10x10x10m³, luz \'nublada\').","efeito":[]},{"nome":"Seguir em Frente","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Sua vontade o mantém lutando mesmo quando outros já teriam caído. Sempre que você estiver Por um Fio, você se mantém consciente, e pode fazer uma ação padrão por turno. Você é considerado Atordoado até conseguir recuperar pelo menos 1 Ponto de Vida, e ainda precisará receber primeiros socorros – ou passar em um teste de Vontade – para não morrer depois de uma quantidade de minutos igual à sua Vontade – e você ainda morrerá se sofrer qualquer dano enquanto estiver nessa condição.","especial":"","resumo":"Mantém consciente, e Inapto para tudo, enquanto Por um Fio.","efeito":[]},{"nome":"Sem Escapatória","categoria":"Técnica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["habilidade",["Combate Tático"]],"descricao":"Se um oponente que está adjacente a você tentar se afastar ou se levantar, você pode imediatamente fazer um ataque corporal normal contra ele. Se acertar, além de sofrer o dano normal pelo ataque, o oponente não poderá se deslocar neste turno.","especial":"","resumo":"Oponente tentou se afastar/levantar: Ataque CaC que impede movimento.","efeito":[]},{"nome":"Semelhança Cadavérica","categoria":"Padrão","tipo":"Ação","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seu corpo é capaz de baixar o batimento cardíaco, respirar muito lentamente e ficar de olhos abertos por até 1 hora. Você pode se manter nesse estado por uma quantidade de horas igual à sua Vontade – mas pode cancelar esse efeito a qualquer momento. Quando esse efeito terminar, você fica Atordoado por 1 minuto. Enquanto estiver nesse estado, será impossível para alguém perceber que você está vivo – mas você continua percebendo tudo à sua volta normalmente, apesar de não poder se mover. Você também recebe +1d6 em seus testes de camuflagem nesse estado, devido à sua imobilidade.","especial":"","resumo":"Mantém-se em estado cadavérico, mas consciente, por até <a class=\'vontade\'> </a> horas.","efeito":[]},{"nome":"Senhor das Lâminas","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",10,"habilidade",["Touché"]],"descricao":"Sempre que for realizar um teste de ataque corpo-a-corpo usando uma arma que cause dano por corte ou perfuração, você pode rolar +1d6.","especial":"","resumo":"Ataque CaC Corte ou Perfuração +1d6.","efeito":[]},{"nome":"Sentido de Alerta","categoria":"Padrão","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Sentidos de Caçador"]],"descricao":"Seus sentidos são sobrenaturalmente afiados e seu sono é extremamente leve. Você nunca é considerado Surpreso ou Desprevenido e recebe +2 em suas rolagens de Iniciativa. Além disso, se você estiver dormindo ou desacordado, você desperta imediatamente se for atacado, rolando sua Iniciativa – e se tiver um resultado maior do que o do atacante, pode agir antes dele.","especial":"","resumo":"Nunca Surpreso ou Desprevenido. Iniciativa +2. Sono leve.","efeito":["iniciativa+",2]},{"nome":"Sentidos Apurados","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["!raca",["Mahok"]],"descricao":"Você possui sentidos treinados e extremamente apurados e aprendeu a confiar instintivamente no que eles captam. Você recebe +2 em todos os testes de para perceber, procurar, observar, ouvir ou usar seus cinco sentidos e também em testes de Iniciativa.","especial":"","resumo":"Percepção +2. Iniciativa +2.","efeito":["iniciativa+",2]},{"nome":"Sentidos de Caçador","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui uma audição aguçada e uma visão treinada. Você rola +1d6 em todos os seus testes de Inteligência para perceber e rastrear alvos.","especial":"","resumo":"Ouvir, Perceber e Rastrear +1d6.","efeito":[]},{"nome":"Séquito","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui um séquito composto por um número de PDMs de nível 0 igual à sua Vontade. Esses seguidores devem exercer funções distintas e que não sejam combativas – eles podem acompanhar o grupo em aventuras oferecendo suporte e realizando serviços para o grupo, mas não entrarão em masmorras ou ruínas para auxiliar o grupo em combates, a menos que sejam forçados a isso. Perceba que seguidores descontentes podem simplesmente abandonar você se o considerarem tirânico ou despótico – e podem até mesmo traí-lo ou roubá-lo! Caso algum seguidor seu morra, seja dispensado, lhe abandone ou de alguma outra forma deixe de servir você, você pode contratar novos ou atrair novos seguidores até um máximo de igual à sua Vontade. Seguidores têm roupas e equipamentos comuns para sua função, mas você pode fornecer equipamentos melhores se tiver condições. Seguidores comuns incluem aias, pajens, cartógrafos, cozinheiros, apotecários, mensageiros, menestréis, clérigos, curandeiros, médicos e secretários.","especial":"","resumo":"Séquito de PDM nível 0 igual sua Vontade.","efeito":[]},{"nome":"Sexto Sentido","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você é capaz de sentir a presença de qualquer criatura dos tipos Amaldiçoado, Demônio, Espírito ou Morto-vivo que se aproxime de você a uma distância em metros igual à sua Determinação.","especial":"","resumo":"Percebe criaturas sobrenaturais em Determinação metros.","efeito":[]},{"nome":"Soldar Magia","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":14, "requisitos":["nivel",5],"descricao":"Desenhando uma Runa Arcana sobre um item, você faz com que os efeitos de uma outra Magia realizada sobre ele, cujos efeitos afetem o próprio personagem, fique armazenada naquele item. O efeito da Magia armazenada no item pode ser desencadeado por seu portador como uma ação livre. Habilidades e itens que alterem propriedades de uma Magia não tem efeitos sobre uma Magia conjurada a partir do item. Esta Runa Arcana dura indefinidamente (mas pode ser dissipada a qualquer momento pelo conjurador) se dissipando quando os efeitos da magia armazenada no item forem desencadeados. Enquanto uma Magia estiver armazenada no item, os Pontos de Mana usados para conjurar Soldar Magia não podem ser recuperados.","especial":"","resumo":"Armazena a próxima magia lançada sobre um item. Mana Presa.","efeito":[]},{"nome":"Som Ilusório","categoria":"Magia","tipo":"Ação","mana":0,"dificuldade":8, "requisitos":[],"descricao":"Desenhando uma Runa Arcana ou Selo Místico no ar, você cria um som vindo de um lugar que possa ver. Você pode criar múltiplos sons ao mesmo tempo e os controla totalmente, mas eles não podem ter intensidade maior que a capacidade da voz humana. A Runa Arcana ou Selo Místico que mantém o som dura até 30 minutos, mas se dissipa se o conjurador perder contato visual com o local de onde o som se origina.","especial":"","resumo":"Cria sons ilusórios no campo de visão por 30 minutos.","efeito":[]},{"nome":"Sopro de Fogo","categoria":"Característica","tipo":"Ação","mana":30,"dificuldade":0, "requisitos":["von",5,"habilidade",["Chamas Internas 1"]],"descricao":"Você é capaz de externar o calor do seu corpo na forma de potentes labaredas. Todos que estiverem numa área até 3 metros a sua frente sofrem dano igual à <a class=\'fogo\'>20</a>/Fogo.","especial":"","resumo":"Externa fogo até 3m à frente causando <a class=\'fogo\'>20</a>/Fogo.","efeito":[]},{"nome":"Sopro Gélido","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Congelar"]],"descricao":"Desenhando uma Runa Arcana à sua frente você faz com que ela exale uma nuvem de frio intenso que cobre uma área com um diâmetro em metros igual à sua Vontade. Todas as criaturas vivas dentro dessa área sofrem dano igual a <a class=\'frio\'>10</a>/Frio e ficam Enregelados. Criaturas dos tipos construto, morto-vivo e réptil sofrem o dobro de dano e ficam paralisadas por 1 turno antes de ficarem enregeladas. Objetos inanimados dentro da área se congelam. Essa Runa Arcana se dissipa assim que seus efeitos forem desencadeados, mas o gelo criado é permanente e descongela em velocidade normal depois que a Runa se dissipar.","especial":"","resumo":"Nuvem de frio intenso, <a class=\'vontade\'> </a> metros. <a class=\'frio\'>10</a>/Frio por turno e Enregela.","efeito":[]},{"nome":"Sorte","categoria":"Característica","tipo":"Reação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Você está acostumado a contar com a sorte – e ela costuma lhe sorrir. Você pode rolar novamente um dado cujo resultado seja 1. Você só pode usar essa Habilidade uma vez por turno.","especial":"","resumo":"Uma vez por turno, rejogue um dado com resultado 1.","efeito":[]},{"nome":"Tamanho Pequeno","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você tem uma estatura baixa, o que torna difícil lhe atingir ou detectar. Você pode rolar +1d6 quando fizer testes de Furtividade. Além disso, seu bônus automático de Defesa é 6 ao invés de 5. No entanto, para você armas corporais que requerem duas mãos são grandes demais para serem usadas com eficiência, e você precisa de ambas as mãos para usar qualquer arma com FN 5 ou mais.","especial":"","resumo":"Furtividade +1d6. Defesa 6. Sem armas de duas mãos. FN>=5 requer duas mãos.","efeito":["defesa+",1,"nanismo"]},{"nome":"Tamoko","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você ostenta uma tatuagem que o imbuí de um poderoso senso pessoal. Escolha um Atributo. Enquanto esta tatuagem estiver visível, você tem +1 naquele Atributo (essa escolha é feita quando você seleciona essa Habilidade e não pode ser mudada mais tarde). Você só pode receber o beneficio dessa tatuagem uma vez.","especial":"","resumo":"Tatuagem visível: Atributo +1.","efeito":["atributo+"]},{"nome":"Táticas de Batalha","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Discutindo táticas militares básicas com seus aliados ao longo de suas jornadas, você permite que eles fiquem mais bem preparados para entrarem em combate. Todos os seus aliados, incluindo você, recebem um bônus de +2 em seus testes de Iniciativa enquanto você estiver dentro do seu alcance de visão. Eles também recebem +2 na sua Defesa quando estiverem Surpresos ou Desprevenidos (esse bônus de Defesa pode ser tanto de Bloqueio quanto de Esquiva, à escolha do jogador que recebe o bônus), e podem utilizar suas Habilidades de Reação normalmente quando estiverem Cegos ou Distraídos.","especial":"","resumo":"Inic.+2 para o grupo, e Def+2 se Surpresos/Desprevenidos.","efeito":["iniciativa+",2]},{"nome":"Táticas de Guerrilha","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você recebeu treinamento militar padrão dos Metadílios, e recebe +1 em todos os seus testes que envolvam armas de distância, rastreamento e armadilhas.","especial":"","resumo":"Armas de distância, rastreamento e armadilhas +1","efeito":["modificador","ataque",[],[],[],["M","L"],1]},{"nome":"Tatuar Efeito","categoria":"Característica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Tatuar Magia"]],"descricao":"Quando conjurar sobre si mesmo uma Magia que tenha tatuado em sua pele, a conjuração é realizada como uma ação livre. Você não pode usar conjurar outras Magias em turnos em que utilizar esta Habilidade nem pode utilizar esta Habilidade em turnos que já tiver conjurado uma Magia.","especial":"","resumo":"Conjura uma magia sobre si mesmo que tenha tatuado como ação livre.","efeito":[]},{"nome":"Tatuar Magia","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Detectar Magia"]],"descricao":"Você é capaz de tatuar magias em sua pele, como se ela tivesse a característica Registro. Quando conjurar uma Magia registrada em sua pele, reduza a dificuldade daquela Magia em 1 e reduz seu Custo de Mana em 5. Em todos os outros aspectos, as regras referentes à magias lançadas a partir de um item com a característica registro se aplicam normalmente.","especial":"","resumo":"Sua pele funciona como Registro. Estas magias tem Dif-1 e Custo-5.","efeito":[]},{"nome":"Tatuar Objeto","categoria":"Característica","tipo":"Ação","mana":5,"dificuldade":0, "requisitos":["habilidade",["Tribal de Poder"]],"descricao":"Você transformou um item em uma marca permanente em seu corpo, e é capaz de conjura-lo a partir dessa marca. Você funde o item escolhido à sua pele na forma de uma tatuagem. A tatuagem ocupa uma área equivalente ao tamanho natural do objeto – portanto é impossível fundir objetos maiores do que o personagem – e precisa estar toda à mostra para que o item possa ser conjurado. O objeto permanece conjurado por tanto tempo quanto o personagem quiser, mas se passar 1 dia sem contato direto com o personagem ou for destruído, ele volta a ser uma tatuagem. O custo dessa Habilidade deve ser pago quando o item é conjurado e quando for transformado em uma tatuagem (incluindo se ele for destruído ou ficar mais de um dia longe do personagem).","especial":"","resumo":"Tatuagem armazena um item. Mana para retirar e guardar.","efeito":[]},{"nome":"Telecinésia","categoria":"Magia","tipo":"Ação","mana":10,"dificuldade":-1, "requisitos":[],"descricao":"Desenhando uma Runa Arcana entre você e um objeto ou criatura dentro de sua linha de visão, você pode mover o alvo através de uma energia mágica invisível. O alvo pode ser movido à vontade em qualquer direção, e até mesmo ser erguido no ar, mas apenas de forma lenta (1 metro por turno no máximo). A dificuldade será igual ao peso do alvo dividido por 5 (arredondado para baixo). Se estiver usando essa magia sobre si próprio, diminua a sua Vontade da Dificuldade final. A dificuldade mínima dessa magia será sempre 8, independente do peso do alvo ou da Vontade do Conjurador. Essa Runa Arcana dura por tanto tempo quanto você estiver concentrado nela, mas se o alvo for uma criatura, ela pode cancelar os efeitos dessa Runa no início do seu turno se vencer um teste de Força com dificuldade igual à Determinação do conjurador.","especial":"","resumo":"Move alvo. Dif:max(8,peso/5). Si próprio Dif-VON. Resistir FOR[DET].","efeito":[]},{"nome":"Teleportar Objeto","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":10, "requisitos":[],"descricao":"Desenhando uma Runa Arcana sobre um objeto, você pode teleportá-lo para um local que conheça. O local de destino pode ser uma localização geográfica (“Sobre a escrivaninha do meu quarto”, por exemplo), um recipiente capaz de conter o objeto e que tenha sua Runa Pessoal gravada nele (“para dentro da minha mochila”) ou até um aliado (“para a mão do Guerreiro”). Se teleportar o objeto para dentro de um objeto marcado com sua Runa Pessoal ou para um aliado, você não precisa saber onde o local de destino está. O objeto afetado pode ter uma FN máxima igual à Inteligência do conjurador. Essa Runa Arcana se dissipa assim que seus efeitos forem desencadeados.","especial":"","resumo":"Teleporta item de FN até <a class=\'inteligencia\'> </a> para lugar marcado ou imaginado.","efeito":[]},{"nome":"Teleporte 1","categoria":"Magia","tipo":"Ação","mana":30,"dificuldade":12, "requisitos":["habilidade",["Levitar"]],"descricao":"Desenhando uma Runa Arcana sobre si mesmo enquanto fita um local você se teleporta de onde está para o ponto que está olhando. Você pode levar alguém com você se puder tocar o alvo e ele concordar (ou estiver inconsciente). Some +2 na dificuldade da magia para cada pessoa além de você. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Teleporte para local em campo de visão. Dif+2 por acompanhante.","efeito":[]},{"nome":"Teleporte 2","categoria":"Magia","tipo":"Ação","mana":50,"dificuldade":14, "requisitos":["nivel",5,"habilidade",["Teleporte 1"]],"descricao":"Desenhando uma runa arcana sobre si mesmo enquanto se concentra em um local qualquer que já tenha visitado pelo menos uma vez, você se teleportar imediatamente para o local pretendido. Você pode levar alguém com você se puder tocar o alvo e ele concordar (ou estiver inconsciente). Some +2 na dificuldade da magia para cada pessoa além de você. A Runa Arcana se dissipa imediatamente depois que seus efeitos são desencadeados.","especial":"","resumo":"Teleporte para lugar marcado ou imaginado. Dif+2 por acompanhante.","efeito":[]},{"nome":"Tempestade de Gelo","categoria":"Magia","tipo":"Ação","mana":40,"dificuldade":13, "requisitos":["nivel",5,"habilidade",["Rajada de Gelo"]],"descricao":"Desenhando uma runa Arcana sobre o solo você pode evocar uma tempestade de gelo em uma área circular de 10 metros de diâmetro que você possa ver. Uma chuva de pedaços finos e afiados de gelo cai sobre a área. Todos que estiverem na área escolhida sofrerão dano igual a <a class=\'cort\'>10</a>/Corte + <a class=\'frio\'>10</a>/Frio quando essa magia for lançada. A cada turno em começar dentro da área de efeito um personagem sofre dano igual a <a class=\'cort\'>10</a>/Corte + <a class=\'frio\'>10</a>/Frio e fica Enregelado por 1 rodada. A Runa Arcana dura 1 rodada por ponto de Inteligência que você tiver, mas você pode dissipá-la a qualquer momento.","especial":"","resumo":"Campo de visão, área de 10m. <a class=\'cort\'>10</a>/Corte + <a class=\'frio\'>10</a>/Frio enregela, <a class=\'inteligencia\'> </a> turnos.","efeito":[]},{"nome":"Tempestade de Lâminas","categoria":"Técnica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Golpes Rápidos"]],"descricao":"Sempre que acertar um ataque corporal você pode fazer 1 ataque normal extra com a mesma arma. Esse efeito só pode ser usado 1 vez por turno com cada arma que você estiver usando.","especial":"","resumo":"Faça um ataque extra normal com a mesma arma.","efeito":[]},{"nome":"Teólogo","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Conhecimento Arcano"]],"descricao":"Você é capaz de interpretar perfeitamente os significados por trás de magias místicas contidas em qualquer missal. Sempre que conseguir estudar uma Magia Mística contida em um item com a característica Registro, você será capaz de conjurar aquela Magia sem qualquer penalidade. Além disso, se você puder atender aos requisitos daquela Magia, você pode aprendê-la como se ela estivesse na lista de Habilidades da sua Classe.","especial":"","resumo":"Aprende e conjura Magias Místicas sem penalidades, se cumprir requisitos.","efeito":[]},{"nome":"Toque Místico","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":10, "requisitos":[],"descricao":"Desenhando um Selo Místico sobre uma criatura viva você a infunde com inspiração momentânea. Se o alvo usar uma Habilidade com Custo de Mana igual ou menor a 30, ele não gasta nenhum Ponto de Mana. Essa magia não tem efeito em Habilidades com Custo de Mana maiores do que 30 e não pode ser usada sobre você mesmo. Este Selo Místico dura até o final do próximo turno do alvo, mas se ele gastar Pontos de Mana antes disso, o Selo se dissipa imediatamente.","especial":"","resumo":"Alvo pode usar uma Habilidade com custo de Mana<=30 gratuitamente.","efeito":[]},{"nome":"Touché","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":[],"descricao":"Faça um ataque corporal com uma arma que estiver empunhando com apenas 1 mão, rolando +1d6 no teste.","especial":"","resumo":"Ataque CaC com arma de uma mão +1d6.","efeito":[]},{"nome":"Toxicólogo","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Nigredo"]],"descricao":"Você é um especialista na fabricação, aplicação e cura de venenos. Você recebe +1d6 em rolagens para produzir venenos e antídotos, e venenos produzidos por você tem sua dificuldade para serem resistidos aumentada em +4.","especial":"","resumo":"Produzir Venenos e Antídotos +1d6. Dificuldade p/ resistir +4.","efeito":[]},{"nome":"Transpor","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["habilidade",["Defesa Agressiva"]],"descricao":"Você sabe encontrar os espaços deixados pelo escudo do adversário. Ignore sempre o bônus de Bloqueio da Defesa do oponente.","especial":"","resumo":"Ignore sempre o bônus de Bloqueio da Defesa do oponente.","efeito":[]},{"nome":"Trapaceiro Impecável","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Eloquente"]],"descricao":"Você está acostumado a enganar e mentir, e seu raciocínio se tornou tão condicionado a extrapolar situações rapidamente que até ler (ou mesmo dominar) sua mente é mais difícil! Sua Inteligência é considerada o dobro em Confrontos para tentar esconder ou dissimular a verdade e para calcular sua Determinação contra efeitos mentais – exceto os de medo.","especial":"","resumo":"Considere sua INT como o dobro para mentir e resistir efeitos mentais.","efeito":[]},{"nome":"Tribal de Poder","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você tatuou um tribal que lhe confere resistência e tenacidade em combate. Enquanto esta tatuagem estiver visível, você tem +2 em suas rolagens de ataques corporais e não precisa estar usando armaduras ou armas para bloquear. Além disso, seus ataques desarmados causam +2 de dano. Você só pode receber o beneficio dessa tatuagem uma vez.","especial":"","resumo":"Ataque CaC +2. Dano desarmado +2. Bloqueio desarmado.","efeito":["modificador","ataque",[],[],[],["CaC"],2,"modificador","dano",[],[-1],[],[],2]},{"nome":"Tribal de Proteção","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você tatuou um tribal que lhe confere proteção física ou espiritual. Escolha entre Bloqueio, Esquiva ou Determinação. Enquanto esta tatuagem estiver visível, você tem +2 naquela defesa (essa escolha é feita quando você seleciona essa Habilidade e não pode ser mudada mais tarde). Você só pode receber o beneficio dessa tatuagem uma vez.","especial":"","resumo":"Bloqueio, Esquiva ou Determinação +2.","efeito":["bloqueio!","+2*",": +2 em Bloqueio, Esquiva OU Determinação.","esquiva!","+2*",": +2 em Bloqueio, Esquiva OU Determinação.","determinacao!","+2*",": +2 em Bloqueio, Esquiva OU Determinação."]},{"nome":"Truque Sujo","categoria":"Técnica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Evasão"]],"descricao":"Quando estiver em distância corporal do oponente e ele estiver te vendo, faça um Confronto de Inteligência contra o alvo. Se você tiver um resultado igual ou maior do que o do oponente nesse teste, você realiza um truque sujo (joga areia nos olhos do oponente, joga um pano em seu rosto, enrola uma corda em suas pernas, etc.) fazendo com que o alvo fique confuso ou desequilibrado, não podendo realizar nenhuma ação no próximo turno, e sendo considerado Desprevenido por 1turno.","especial":"","resumo":"INTxINT:alvo fica confuso ou desequilibrado, Desprevenid por 1 turno.","efeito":[]},{"nome":"Turbilhão","categoria":"Magia","tipo":"Ação","mana":25,"dificuldade":12, "requisitos":["habilidade",["Rajada de Água"]],"descricao":"Desenhando um Selo Místico sobre você mesmo e em seguida realizando um rápido movimento circular com as mãos você dispara poderosas rajadas de água. Todas as criaturas a até 10 metros de você sofrem um dano igual à <a class=\'cont\'>6</a>/Contusão e precisam vencer um teste de Força (Dificuldade igual à sua Determinação) para não serem arremessados um número de metros igual à sua Vontade e ficando caídos. O Selo Místico se dissipa imediatamente depois que seus efeitos são desencadeados e qualquer quantidade de água criada é permanente.","especial":"","resumo":"Dispara rajadas de água <a class=\'cont\'>6</a>/Cont. FOR[DET]:Caído 1 turno.","efeito":[]},{"nome":"Ulfhednar","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["von",4,"habilidade",["Fúria Bestial"]],"descricao":"O Lobo considerou você um guerreiro digno, e ele lhe imbuirá de sua selvageria quando você evocar a Fúria Bestial, desferindo ataques muito mais violentos. O bônus de Força de Fúria Bestial passa a ser +4 e seus ataques desarmados causam +2 de dano. Você não pode estar usando armadura ou escudos para que essa Habilidade tenha efeito – já que o Lobo despreza a defesa em detrimento do ataque.","especial":"Se você tiver um Espírito Animal que não seja o Lobo, você não pode possuir esta Habilidade. Se você possuir esta Habilidade, você só pode escolher o Lobo como seu Espírito Animal.","resumo":"Fúria Bestial: FOR+4, dano desarmado +2. Sem armadura ou escudo.","efeito":[]},{"nome":"Um Bom Conselho 1","categoria":"Característica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":[],"descricao":"Você incentiva um aliado com palavras de encorajamento sobre as aptidões dele. Aquele aliado recebe +1 em todas as suas rolagens e Determinação +1 por 1 hora.","especial":"","resumo":"Aliado recebe +1 em todas as rolagem e Determinação +1 por 1 hora.","efeito":[]},{"nome":"Um Bom Conselho 2","categoria":"Característica","tipo":"Ação","mana":40,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Um Bom Conselho 1"]],"descricao":"Você incentiva um aliado exultando suas capacidades de modo excepcional. Aquele aliado recebe +2 em todas as suas rolagens e Determinação +2 por 1 hora.","especial":"","resumo":"Aliado recebe +2 em todas as rolagem e Determinação +2 por 1 hora.","efeito":[]},{"nome":"Valor da Vitória","categoria":"Característica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Cada vez que você derrota um oponente (isso inclui se ele se render ou fugir após a batalha) você recupera 5 pontos de vida e 5 pontos de mana.","especial":"","resumo":"Recupera 5 pontos de Vida e Mana para cada oponente derrotado.","efeito":[]},{"nome":"Vantagem Animal 1","categoria":"Característica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Forma Animal 1"]],"descricao":"Você pode transformar uma pequena parte do seu corpo para que ela assuma uma característica animal, lhe conferindo uma Habilidade temporária. Você pode transformar seus olhos para captar mais luz como uma coruja, recebendo Visão no Escuro, tornar suas unhas em garras de um tigre e receber Garras ou modificar seu nariz para que se pareça com o de um lobo, recebendo Faro, por exemplo. Apenas pequenas modificações são possíveis, e as possibilidades devem ser discutidas com o Mestre. Esse efeito dura 1 hora, mas você pode cancelá-lo quando quiser.","especial":"","resumo":"Transforma pequena parte do corpo em animal por 1 hora.","efeito":[]},{"nome":"Vantagem Animal 2","categoria":"Característica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Vantagem Animal 1"]],"descricao":"Você pode transformar uma parte do seu corpo para que ela assuma uma característica animal, lhe conferindo uma Habilidade temporária. Você pode transformar seus braços em asas de grifo, recebendo Asas Pesadas, transformar sua cabeça para a de um lobo atroz e receber Mordida Poderosa ou desenvolver guelras como as de um tubarão, recebendo Anfíbio, por exemplo. Quaisquer modificações são possíveis, mas as possibilidades devem ser discutidas com o Mestre. Esse efeito dura 10 minutos, mas você pode cancelá-lo a qualquer momento.","especial":"","resumo":"Transforma parte do corpo em animal por 10 minutos.","efeito":[]},{"nome":"Velocidade","categoria":"Magia","tipo":"Ação","mana":20,"dificuldade":11, "requisitos":["habilidade",["Caminhada Mágica"]],"descricao":"Desenhando um Selo Místico sobre uma criatura viva você aumenta a velocidade dela, deixando-a com o dobro do Deslocamento e de ações. Este Selo Místico se dissipa no final do próximo turno do alvo.","especial":"","resumo":"Dobra deslocamento e quantidade de ações de alvo no próximo turno.","efeito":[]},{"nome":"Venefício","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Herbalismo"]],"descricao":"Você é um especialista na fabricação, aplicação e cura de venenos. Você pode produzir qualquer veneno ou antídoto avançado.","especial":"Se você tiver alguma Habilidade do tipo Magia que cause dano por Perfuração ou Corte em um alvo, ela também aplicam um efeito de veneno potente (O alvo perde 5 Pontos de Vida por turno) além do dano normal. Esse veneno é considerado mágico e permanece ativo por uma quantidade de turnos igual à sua Vontade ou até ser curado.","resumo":"Você pode produzir qualquer veneno ou antídoto avançado.","efeito":[]},{"nome":"Vigília","categoria":"técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você está sempre atento e preparado para qualquer coisa. Você rola +1d6 em seus testes de percepção e de iniciativa.","especial":"","resumo":"Percepção e Iniciativa +1d6.","efeito":["iniciativa+d",1]},{"nome":"Vigor do Deserto","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você não só se adaptou como se fortaleceu no calor escaldante do deserto. Você é Imune ao Fogo e não precisa beber líquidos para se hidratar – você retira umidade suficiente dos alimentos e nunca precisa ingerir água.","especial":"","resumo":"Você é Imune ao Fogo e não precisa beber líquidos para se hidratar.","efeito":[]},{"nome":"Vigor Nórdico","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você nasceu em uma região gelada, e os rigores climáticos de Eishelm tornaram você vigoroso e resiliente. Você é Resistente à Frio e não é afetado nem por efeitos de climas gelados nem por efeitos provenientes de danos por Frio (como Enregelamento).","especial":"","resumo":"Resistente a Frio e Enregelamento.","efeito":[]},{"nome":"Virar o Jogo","categoria":"Técnica","tipo":"Reação","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Contra-Carga"]],"descricao":"Se um oponente não for paralisado por sua Contra-Carga, você recebe um bônus de Defesa igual à sua Inteligência contra o ataque de encontrão (este é um bônus de esquiva ou bloqueio, à escolha do jogador). Além disso, se esse ataque de encontrão errar, você pode imediatamente utilizar Manter à Distância como uma Reação contra o oponente.","especial":"","resumo":"Se Contra-Carga falhar, Def+<a class=\'inteligencia\'> </a> contra Encontrão. Se errar, Manter a Distância.","efeito":[]},{"nome":"Virtuoso","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Mestre das Notas"]],"descricao":"Você treinou exaustivamente até se tornar um mestre no uso de instrumentos musicais. Você rola +1d6 em todos os testes envolvendo tocar instrumentos musicais (incluindo Habilidades do tipo Música).","especial":"","resumo":"Instrumentos Musicais +1d6.","efeito":[]},{"nome":"Visão Auditiva","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Seus ouvidos são tão treinados e sensíveis que você não precisa usar seus olhos para se localizar. Você consegue perceber o tamanho e a localização aproximada dos objetos ao seu redor usando apenas a audição, e só é considerado cego se, além da sua visão, sua audição também for anulada de alguma forma. Quando estiver se guiando apenas pela audição você não é capaz de distinguir detalhes específicos (como cores, inscrições ou fisionomias). Você também pode rolar +1d6 quando fizer testes que envolvam a audição.","especial":"","resumo":"Audição +1d6. Cego apenas se também surdo.","efeito":[]},{"nome":"Voador Exímio","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["for",3],"descricao":"Você praticou voos de longa duração, tendo passado muito tempo no ar, adquirindo uma resistência e habilidade incomum de voo. Você pode voar continuamente por até seis horas antes de precisar parar para descansar suas asas, e recebe Defesa +1 enquanto estiver voando (este é um Bônus de Esquiva).","especial":"","resumo":"Pode voar por até 6 horas. Esquiva +1 enquanto voar.","efeito":["esquiva!","+1 voo", ": +1 quando em voo."]},{"nome":"Vocalista","categoria":"Técnica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Grito"]],"descricao":"Você treinou sua voz para se tornar mais potente e límpida e sua dicção mais clara e segura. Você recebe +2 em todos os testes que envolvam a fala – como mentir, seduzir, barganhar ou cantar (incluindo Canções, mas não Melodias) – e na sua Determinação para determinar se os alvos de seus Gritos e Rugidos são afetados por seus efeitos. Além disso, seus Gritos e Rugidos têm a área de efeito dobrada.","especial":"","resumo":"Fala +2. Dobra área de Gritos e Rugidos.","efeito":[]},{"nome":"Vontade da Lei","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui uma mentalidade tão rigidamente ordeira que é muito difícil manipulá-lo ou fazê-lo mudar de idéia. Você recebe +2 em todos os testes e confrontos para resistir a tentativas de manipulação, intimidação, efeitos mentais e efeitos de medo. Além disso, você tem Determinação +2.","especial":"","resumo":"Resistir efeitos Mentais e Medos +2. Determinação +2.","efeito":["determinacao+",2]},{"nome":"Vontade de Ferro","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Você não se entrega com facilidade e é muito difícil derrubar você em combate. Você tem +20 Pontos de vida.","especial":"","resumo":"Vida +20.","efeito":["vida+",20]},{"nome":"Vontade Heróica","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Sua determinação e auto-confiança são quase inabaláveis. Você tem Vontade +1.","especial":"","resumo":"Vontade +1.","efeito":["von+",1]},{"nome":"Vontade Inabalável","categoria":"Característica","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":["nivel",5],"descricao":"Sempre que você for alvo de qualquer Habilidade que o fizer perder Pontos de Mana, você nega todos os efeitos daquela Habilidade, automaticamente. Além disso, você gasta 5 Pontos de Mana a menos para usar qualquer Habilidade – até um custo mínimo de 5 Pontos de Mana","especial":"","resumo":"Custo de Mana -5 para habilidades.","efeito":["modificador","mana",[],[],[],[],5]},{"nome":"Vontade Sobrenatural","categoria":"Padrão","tipo":"Suporte","mana":0,"dificuldade":0, "requisitos":[],"descricao":"Você possui uma incrível resistência a efeitos sobrenaturais e influência mental. Você recebe +1d6 em todos os seus Confrontos contra criaturas dos tipos Amaldiçoado, Demônio, Espírito e Morto-vivo e em qualquer teste para resistir a qualquer efeito desse tipo de criatura. Além disso, você tem Determinação +2.","especial":"","resumo":"Resistência contra criaturas sobrenaturais +1d6. Determinação +2.","efeito":["determinacao+",2]},{"nome":"Voz de Comando 1","categoria":"Característica","tipo":"Ação","mana":10,"dificuldade":0, "requisitos":["habilidade",["Presença Inspiradora"]],"descricao":"Você está acostumado a dar ordens – e ser obedecido! Você ordena um aliado a fazer uma ação, e ele imediatamente realiza aquela ação. O alvo pode resistir, se desejar, com um teste de Vontade (dificuldade igual à sua Determinação). Essa deve ser uma ação simples – o alvo não pode usar nenhuma Habilidade do tipo Ação quando realizá-la.","especial":"","resumo":"VON[<a class=\'determinacao\'> </a>]: Alvo obedece instrução simples.","efeito":[]},{"nome":"Voz de Comando 2","categoria":"Característica","tipo":"Ação","mana":20,"dificuldade":0, "requisitos":["nivel",5,"habilidade",["Voz de Comando 1"]],"descricao":"Suas ordens sempre são obedecidas com eficiência! Você ordena um aliado a fazer uma ação, e ele imediatamente realiza aquela ação com um bônus de +1d6. Se a ação for de movimento, o aliado não poderá ser alvo de Reações durante essa ação. O alvo pode resistir, se desejar, com um teste de Vontade (dificuldade igual à sua Determinação). Essa deve ser uma ação simples – o alvo não pode usar nenhuma Habilidade do tipo Ação quando realiza-la.","especial":"","resumo":"VON[<a class=\'determinacao\'> </a>]: Alvo obedece instrução simples com +1d6.","efeito":[]}]}';
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
