import styles from "./Resposta.module.css";

function Resposta({ estilos, resultado_func, op1, op2, op3, op4, resultado }) {
  return (
    <section className={styles.section_respostas}>
      {resultado === "escolhendo" ? (
        <h2 className={styles.resultado}>-- ALTERNATIVAS --</h2>
      ) : resultado === "acertou" ? (
        <h2 className={styles.resultado_certo}>VOCÊ ACERTOU, parabéns!</h2>
      ) : resultado === "errou" ? (
        <h2 className={styles.resultado_errado}>VOCÊ ERROU, infelizmente...</h2>
      ) : null}

      <button className={styles[estilos[0]]} onClick={() => resultado_func(0)}>
        {op1}
      </button>
      <button className={styles[estilos[1]]} onClick={() => resultado_func(1)}>
        {op2}
      </button>
      <button className={styles[estilos[2]]} onClick={() => resultado_func(2)}>
        {op3}
      </button>
      <button className={styles[estilos[3]]} onClick={() => resultado_func(3)}>
        {op4}
      </button>
    </section>
  );
}

export default Resposta;
