import styles from "../validatorcomponents/prof.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const conditionError = meta.touched && meta.error;
  return (
    <>
      <div className={conditionError ? styles.areabox : ""}>
        <textarea {...input} {...props} className />
      </div>
      {conditionError && <div className={styles.errorSpan}> {meta.error}</div>}
    </>
  );
};

export const Input = ({ input, meta, ...props }) => {
  console.log(meta);

  return (
    <>
      <div>
        <input placeholder={props.placeholder} {...input} />
      </div>
      {meta.error && <span className={styles.red}>MistaKE!</span>}
    </>
  );
};
