# Cronômentro pomodoro

⏱️ Pomodoro Timer
⚙️ Funcionamento

O cronômetro inicia com 25 minutos e realiza a contagem regressiva de minutos e segundos a cada segundo utilizando setInterval.

Ao clicar em Start ▶️ pela primeira vez, o tempo é inicializado e a contagem é iniciada.

Caso o usuário pause ⏸️ o cronômetro, o intervalo é interrompido sem perder o tempo atual.

Ao clicar novamente em Start ▶️, o sistema verifica se o cronômetro já foi iniciado anteriormente e, se positivo, recupera do HTML os valores atuais de minutos e segundos para retomar a contagem do ponto exato onde foi pausado.

O código impede a criação de múltiplos intervalos simultâneos, garantindo que apenas um setInterval esteja ativo durante a execução.

Quando os segundos chegam a zero, o sistema decrementa os minutos e reinicia os segundos em 59.
Quando minutos e segundos chegam a zero ⏳, a contagem é finalizada, o intervalo é encerrado e o cronômetro é resetado 🔄 para o valor inicial.

🕹️ Controles disponíveis

Start ▶️: inicia ou retoma a contagem

Parar ⏸️: pausa o cronômetro

Resetar 🔄: encerra a contagem e redefine o tempo inicial

💻 Tecnologias

HTML

CSS

JavaScript (Vanilla JS)