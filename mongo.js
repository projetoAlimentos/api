use AlimentosDB;

db.createCollection('Materia');

db.Materia.insert({
    'nome' : '',
    'descricao' : '',
    'modulos' : [],
    'responsaveis' : []
});

db.createCollection('Modulo');

db.Modulo.insert({
    'nome' : '',
    'descricao' : '',
    'topicos' : [],
    'ativo' : false
});

db.createCollection('Questoes');

db.Questoes.insert({
    'dificuldade' : 1,
    'descricao' : '',
    'dica' : '',
    'respostas' : [],
    'ativo' : true
});

db.createCollection('Respostas');

db.Respostas.insert({
    'descricao' : '',
    'imagem' : '',
    'correta' : false
});

db.createCollection('Topico');

db.Topico.insert({
    'nome' : '',
    'descricao' : '',
    'ativo' : true,
    'dificuldade' : 1,
    'questoes' : []
});

db.createCollection('Usuario');

db.Usuario.insert({
    'nome' : '',
    'login' : '',
    'email' : '',
    'senha' : '',
    'imagem' : '',
    'papel' : []
});