import styles from "./Pergunta.module.css";

function Pergunta({ texto_tipo, texto_pergunta }) {
  return (
    <section className={styles.section_perguntas}>
      <h2 className={styles.texto_tipo}>{texto_tipo}</h2>

      <p className={styles.texto_pergunta}> {texto_pergunta} </p>
    </section>
  );
}

export default Pergunta;
