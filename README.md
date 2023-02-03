(new Date().tolocaleTimeString()) //retorna a hora
(new Date().tolocaleDateString()) //retorna a data

new Date().getHours() //retorna a hora do momento

const cancelar=(obj)=>{
return obj.preventDefault()}
<a href="#" target="_blank" onClick={(e)=>cancelar(e)}></a>

<input name="nome" value={nome} onChange={(e)=>setNome(e.target.value)}/> //pega cada coisa digitada

