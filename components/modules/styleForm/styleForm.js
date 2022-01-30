import { useState } from 'react'
import FormTextarea from "../../elements/forms/formTextArea/formTextArea"
import styles from './styleForm.module.scss'
import {makePretty, makeUgly} from '../../../lib/styleHelper'

export default function StyleForm() {
    const [uglyStyle, setUglyStyle] = useState('Layers<Layer1<argument1, transition<argument1, argument2>>, Layer2<argument1, argument2, argument3>>');
    const [prettyStyle, setPrettyStyle] = useState('');
    
    const makeStylePretty = event => {
        event.preventDefault();
        let prettyStyle = makePretty(uglyStyle);
        setPrettyStyle(prettyStyle);
    }

    const makeStyleUgly = event => {
        event.preventDefault();
        let uglyStyle = makeUgly(prettyStyle);
        setUglyStyle(uglyStyle);
    }
  
    return (
        <form onSubmit={makeStylePretty} className={styles.styleForm}>
            <FormTextarea textareaLabel={"Ugly String:"} wrap="off" onChange={(e) => setUglyStyle(e.target.value)} value={uglyStyle}></FormTextarea>
            <button type="button" onClick={makeStylePretty}>Make Pretty</button>
            <FormTextarea textareaLabel={"Pretty String:"} wrap="off" onChange={(e) => setPrettyStyle(e.target.value)} value={prettyStyle}></FormTextarea>
            <button type="button" onClick={makeStyleUgly}>Make Ugly</button>
        </form>
    );
}