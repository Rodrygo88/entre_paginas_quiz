import Nav from "./components/Nav";
import Pergunta from "./components/Pergunta";
import Resposta from "./components/Resposta";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

import audio_acertou from "./assets/acertou.mp3";
import audio_errou from "./assets/errou.mp3";

function App() {
  const [perguntaAtual, setPerguntaAtual] = useState(null);
  const [ativarOpcoes, SetAtivarOpcoes] = useState(true);

  const [acertou, SetAcertou] = useState("escolhendo");

  const [estilos, setEstilos] = useState([
    "opcoes",
    "opcoes",
    "opcoes",
    "opcoes",
  ]);

  useEffect(() => {
    fetch("/data/perguntas.json")
      .then((res) => res.json())
      .then((data) => {
        const sorteada = data[Math.floor(Math.random() * data.length)];
        setPerguntaAtual(sorteada);
      });
  }, []);

  function resultado(indice) {
    let novos_estilos = [...estilos];

    if (perguntaAtual.opcoes[indice] === perguntaAtual.resposta) {
      novos_estilos[indice] = "opcao_certa";
      SetAcertou("acertou");
      const som_acertou = new Audio(audio_acertou);
      som_acertou.play();

      for (let i = 0; i < novos_estilos.length; i++) {
        if (i != indice) {
          novos_estilos[i] = "opcao_errada";
        }
      }
    } else {
      for (let i = 0; i < novos_estilos.length; i++) {
        if (perguntaAtual.opcoes[i] === perguntaAtual.resposta) {
          novos_estilos[i] = "opcao_certa";
        } else if (i === indice) {
          novos_estilos[i] = "escolha_errada";
        } else {
          novos_estilos[i] = "opcao_errada";
        }
      }
      SetAcertou("errou");
      const som_errou = new Audio(audio_errou);
      som_errou.play();
    }
    SetAtivarOpcoes(false);
    setEstilos(novos_estilos);
  }

  return (
    <>
      <div className={styles.main}>
        <Nav />
        <Pergunta
          texto_tipo={perguntaAtual?.tipo}
          texto_pergunta={perguntaAtual?.pergunta}
        />
        <Resposta
          op1={perguntaAtual?.opcoes[0]}
          op2={perguntaAtual?.opcoes[1]}
          op3={perguntaAtual?.opcoes[2]}
          op4={perguntaAtual?.opcoes[3]}
          estilos={estilos}
          resultado_func={ativarOpcoes ? resultado : null}
          resultado={acertou}
        />

        <p className={styles.info}>
          Em desenvolvimento por Rodrigo Silva © 2026
        </p>
      </div>
    </>
  );
}

export default App;
