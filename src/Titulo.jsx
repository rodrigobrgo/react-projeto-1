import { useState } from "react";

function Titulo({ nome, paragrafo, cor }) {
    const [texto, setTexto] = useState("Outro título da página")
    const [inputText, setInputText] = useState("")
    const [mudarCor, setMudarCor] = useState("")

    function clicou() {
        setTexto(inputText)
    }

    const soma = 10 + 10;
    const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png";

    return (
        <div>
            <h1 style={{ color: cor }}>Olá eu sou o {nome ? nome : "Fulano"} e a soma da const é {soma}</h1>
            <h2 style={{ color: mudarCor }}>{texto ? texto : "Nada informado"}</h2>
            <p><button onClick={() => { setTexto("Mudei o texto e a cor"), setMudarCor("green") }}>Mudar</button></p>

            <p><input value={inputText} onChange={(e) => { setInputText(e.target.value) }} type="text" /></p>
            <p><button onClick={clicou}>Processa Input</button></p>

            <img src={urlImg} width={50} />
            {
                paragrafo ?
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic dolore doloribus quod, dicta nesciunt impedit dignissimos tempore laboriosam accusamus vel. Autem quaerat enim a maiores natus quasi libero repudiandae!</p>
                    :
                    <p></p>
            }
            <hr />
        </div >
    )
}

export default Titulo