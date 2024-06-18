startButton = document.getElementById("start");
yesButton = document.getElementById("yes")
noButton = document.getElementById("no")
quote = document.getElementById("quote")
result = document.getElementById("result")
score1 = document.getElementById("score1")
score2 = document.getElementById("score2")

yesButton.style.display = "none"
noButton.style.display = "none"
score = 0
highScore = 0

quoteList = ["If you win, you need not have to explain...If you lose, you should not be there to explain!", "mungo mungo mungo mungo mungo", "i love mungos... i mean mangos......", "'Instruction in world history in the so-called high schools is even today in a very sorry condition. Few teachers understand that the study of history can never be to learn historical dates and events by heart and recite them by rote; that what matters is not whether the child knows exactly when this battle or that was fought, when a general was born, or even when a monarch (usually a very insignificant one) came into the crown of his forefathers. No, by the living God, this is very unimportant. To 'learn' history means to seek and find the forces which are the causes leading to those effects which we subsequently perceive as historical events.'", "'Obstacles do not exist to be surrendered to, but only to be broken.'", "'Humanitarianism is the expression of stupidity and cowardice.'", "'The great strength of the totalitarian state is that it forces those who fear it to imitate it.'", "'A single death is a tragedy; a million deaths is a statistic.'", "'Death is the solution to all problems. No man - no problem.'", 
"'It is difficult for me to imagine what 'personal liberty' is enjoyed by an unemployed person, who goes about hungry, and cannot find employment.\n\nReal liberty can exist only where exploitation has been abolished, where there is no oppression of some by others, where there is no unemployment and poverty, where a man is not haunted by the fear of being tomorrow deprived of work, of home and of bread. Only in such a society is real, and not paper, personal and every other liberty possible.' \n― Joseph Stalin", "music's a good thing, it calm the beast in the man. ", "'Advance towards socialism cannot but cause the exploiting elements to resist the advance, and the resistance of the exploiters cannot but lead to the inevitable sharpening of the class struggle.'", "'Women hold up half the sky.'", "'An army of the people is invincible!'\n― Mao Zedong, Quotations from Chairman Mao Tse-Tung", "'The struggle of the Black people in the United States for emancipation is a component part of the general struggle of al the people of the world against U.S. imperialism, a component part of the contemporary world revolution. I call on the workers, peasants, and revolutionary intellectuals of all countries and all who are willing to fight against U.S. imperialism to take action and extend strong support to the struggle of the Black people in the United States! People of the whole world, unite still more closely and launch a sustained and vigorous offensive against our common enemy, U.S. imperialism, and its accomplices! It can be said with certainty that the complete collapse of colonialism, imperialism, and all systems of exploitation, and the complete emancipation of all the oppressed peoples and nations of the world are not far off.'", "'You can't be a revolutionary if you don't eat chilies.'", "'Communism is not love. Communism is a hammer which we use to crush the enemy.'", "'战略上藐视敌人，战术上重视敌人'", "'Sikap yang harus kita ambil terhadap diri kita sendiri adalah 'belajar dengan tak puas-puasny', dan terhadap orang lain 'mengajar dengan tak jemu-jemunya'.'", "'Es absolutamente imposible que vosotros, tan poca gente, logréis remover montañas tan grandes.» El Viejo Tonto respondió: «Después que yo muera, seguirán mis hijos; cuando ellos mueran, quedarán mis nietos, y luego sus hijos y los hijos de sus hijos, y así indefinidamente. Aunque son muy altas, estas montañas no crecen y cada pedazo que les sacamos las hace más pequeñas. ¿Por qué no vamos a poder removerlas?» Después de refutar la idea errónea del Viejo Sabio, siguió cavando día tras día, sin cejar en su decisión. Dios, conmovido ante esto, envió a la tierra dos ángeles, que se llevaron a cuestas ambas montañas. Hoy, sobre el pueblo chino pesan dos grandes montañas, una se llama imperialismo y la otra, feudalismo. El Partido Comunista de China hace tiempo que decidió eliminarlas. Debemos perseverar en nuestra decisión y trabajar sin cesar; también nosotros conmoveremos a Dios. Nuestro Dios no es otro que las masas populares de China. Si ellas se alzan y cavan junto con nosotros, ¿por qué no vamos a poder eliminar esas montañas? «El Viejo Tonto que removió las montañas» (11 de junio'", "'Democracy is beautiful in theory; in practice it is a fallacy. You in America will see that some day.\nEvery anarchist is a baffled dictator.\nThe truth is that men are tired of liberty.\nSocialism is a fraud, a comedy, a phantom, a blackmail.\nIt's good to trust others but, not to do so is much better.\nWar alone brings up to their highest tension all human energies and imposes the stamp of nobility upon the peoples who have the courage to make it.\nFascism is a religious concept.\nLet us have a dagger between our teeth, a bomb in our hands, and an infinite scorn in our hearts.\nThe League is very well when sparrows shout, but no good at all when eagles fall out.\nWe become strong, I feel, when we have no friends upon whom to lean, or to look to for moral guidance.'", "with great mungo comes great responsibility", "mungo mungo mungo!!!!", "mungo isnt a racist", "mungo said this", "and this", "join model UN pleaseeeee!!!! ;(", "once in a blue mungo", "a mango a day keeps the mungo away", "BLANK QUOTE", "its a mungo eat mungo world - and i'm top mungo", "you wont like me when im mangry"]

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getNewQuote() {
  quote.textContent = quoteList[Math.floor(getRandomArbitrary(0,quoteList.length))]
  }

function start() {
  startButton.style.display = "none"
  yesButton.style.display = "inline"
  noButton.style.display = "inline"
  getNewQuote()
  }
  
startButton.onclick = start

function doIt(){
  if (Math.floor(getRandomArbitrary(0, 2)) == 1){
      score++
      if (score > highScore){
        highScore = score
      }
      text = "that's right!!"
    }
  else {
    score = 0
    text = "wrongo!"
    }
  result.textContent = text
  score1.textContent = `score = ${score}`
  score2.textContent = `highscore = ${highScore}`
  getNewQuote()
  }
  
yesButton.onclick = doIt
noButton.onclick = doIt