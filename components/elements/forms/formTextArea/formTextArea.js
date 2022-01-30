import styles from './formTextArea.module.scss'

export default function FormTextarea({ textareaLabel, ...rest }) {
    const { name } = rest;
  
    return (
      <div className={styles.textarea}>
        <label htmlFor={name}>{textareaLabel || name}</label>
        <textarea id={name} {...rest} />
      </div>
    );
}