import Header from'../components/index.jsx'

function Home(){
    return(
        <div className="app">
            <Header/>
        <header>
         <img className='logo-imagem' src='./src/assets/design-do-logotipo.png' alt='imagem'></img>
         </header>
         <div className='container-msg'>
           <img className='logo2' src='./src/assets/makes2.gif' alt='imagem'></img>
             <p className='texto'>
                Está cansada da mesma make TODO dia? A gente te entende. 
                Por isso, nessa semana criamos uma promoção especial para produtos que vão dar um up no seu visual do dia a dia.
             Entre rímel ou lápis, o que você prefere?
              Pare o que você está fazendo e 
             venha agora mesmo aproveitar nossos descontos especiais para itens arrasadores!
                </p>
                <h2> Qual é a maquiagem que mais te faz FELIZ? 
             Conheça a nossa loja e comprove por si mesma a felicidade em formato de MAQUIAGEM.</h2>
            </div>
            <div className='container-msg'>
           <img className='logo2' src='./src/assets/makes.gif' alt='imagem'></img>
             <p className='texto'>
             O segredo da maquiagem é revelar o que há de mais belo em você. Dê mais destaque aos seus traços marcantes e encante todo mundo.
           O look perfeito só fica completo com uma maquiagem à altura. 
          Maquie-se e desperte o poder que há em você. </p>
    
            </div>
         </div>
        
    
    )
}

export default Home