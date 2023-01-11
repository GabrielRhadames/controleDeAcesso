function entrar() {
  let inputNome = prompt('Digite o seu Nome:')

  let inputIdade = prompt('Digite o sua Idade:')

  if (inputNome === '' || inputIdade === '') {
    alert('Preencha os campos corretamente!')
    return
  }else if (inputNome === null || inputIdade === null){
    alert('Preencha os campos corretamente!')
    return
  }else if (inputNome === null || inputIdade === undefined){
    alert('Preencha os campos corretamente!')
    return
  }

  let idade = parseInt(inputIdade)

  let maiorOuMenor

  if (idade >= 18) {
    maiorOuMenor = 'maior'
  } else if (idade < 18) {
    maiorOuMenor = 'menor'
  }

  let mensagemPersonalizada = 'Entrada liberada, acesse a bilheteria para a compra do ingresso. Você não faz parte da nossa lista seleta de selebridades com credencias especiais!'

  if (inputNome === 'Thomas Anderson' || inputNome === 'thomas anderson'|| inputNome === 'Thomas anderson' || inputNome === 'Thomas Anderson '|| inputNome === 'thomas Anderson') {
    mensagemPersonalizada = 'Você é o escolhido, Neo! Tudo é a Matrix!'
    document.getElementsByTagName("body")[0].style = 'background-image:url("./img/Thomas Anderson.jpg")'
  } else if (inputNome === 'Harry Potter' || inputNome === 'harry potter' || inputNome === 'Harry potter' || inputNome === 'Harry Potter '|| inputNome === 'harry Potter' || inputNome === 'Harry potter ') {
    mensagemPersonalizada = 'Você é um bruxo, pode desaparatar pra onde quiser'
    document.getElementsByTagName("body")[0].style = 'background-image:url("./img/harry-potter..jpg")'
  } else if (inputNome === 'Fiona' || inputNome === 'fiona' || inputNome === 'fiona ' || inputNome === 'Fiona ') {
    mensagemPersonalizada = 'Princesas não deveriam ficar em filas, acesso liberado!'
    document.getElementsByTagName("body")[0].style = 'background-image:url("./img/Fiona.jpg")'
  } else if (inputNome === 'Mulher Maravilha' || inputNome === 'mulher maravilha' || inputNome === 'Mulher maravilha' || inputNome === 'Mulher Maravilha ' || inputNome === 'mulher maravilha ' || inputNome === 'Mulher maravilha ') {
    mensagemPersonalizada = 'O laço da verdade me obriga a ser sincero, acesso liberado!'
    document.getElementsByTagName("body")[0].style = 'background-image:url("./img/wonder-woman.jpg")'
  } else if (inputNome === 'Homem Aranha' || inputNome === 'homem aranha' || inputNome === 'Homem aranha '|| inputNome === 'Homem aranha' || inputNome === 'Homem Aranha ' || inputNome === 'homem aranha '|| inputNome === 'homem Aranha '|| inputNome === 'Homem-Aranha'|| inputNome === 'Homem-Aranha ') {
    mensagemPersonalizada = 'Nosso heroi cabeça de teia tem acesso liberado!'
    document.getElementsByTagName("body")[0].style = 'background-image:url("./img/Homem-Aranha.jpg")'
  } else if (inputNome === 'Mellina' || inputNome === 'Mellina ' || inputNome === 'mellina' || inputNome === 'mellina ' || inputNome === 'Mell' || inputNome === 'Mell ') {
    mensagemPersonalizada = 'Pode fazer pose, pode? Fofura!!"'
    document.getElementsByTagName("body")[0].style = 'background-image:url("./img/Mell.jpg")'
  } else if (inputNome === 'Bolsolula' || inputNome === 'bolsolula' || inputNome === 'bolsolula ' || inputNome === 'Bolsolula ') {
    mensagemPersonalizada = 'Acesso liberado, "TÁ OK!?"'
    document.getElementsByTagName("body")[0].style = 'background-image:url("./img/Bolsolula.jpg")'
  } else if (inputNome === 'Lulanaro' || inputNome === 'lulanaro' || inputNome === 'Lulanaro ' || inputNome === 'lulanaro ') {
    mensagemPersonalizada = 'Acesso liberado, "COMPANHEIRO!"'
    document.getElementsByTagName("body")[0].style = 'background-image:url("./img/Lulanaro.jpg")'
  }



  
  let saudacao = `Olá ${inputNome}, você é ${maiorOuMenor} de idade!`

  if (idade <= 17){
    mensagemPersonalizada = 'Infelizmente a entrada é restrita para maiores de idade!'
  }else if (idade > 61){
    mensagemPersonalizada = 'Entrada liberada. Você é idoso, tem direito a meia entrada!'
  }
  
  document.querySelector('#saudacao').innerHTML = saudacao
  document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
 

  
  /*document.querySelector('#saudacao').style.color = "rgb(195, 249, 0)"*/
  document.querySelector('#saudacao').style.cssText='color: rgb(5, 223, 239); text-shadow: 5px 5px 5px rgb(215, 41, 195);'

  
  document.querySelector('#mensagemPersonalizada').style.cssText='color: rgb(250, 242, 249); text-shadow: 5px 5px 5px rgb(3, 16, 255);'
  

 
 
  
  
}
