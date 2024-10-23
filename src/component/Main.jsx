import styles from './Main.module.css'
const Main=()=>{
    return(
        <>
        <section className={styles.tittel}>
            <input type="text" placeholder="عنوان" className={styles.note}/>
            <input type="text" placeholder="یادداشت ..."className={styles.note}/>
            <button className={styles.btn}>افزودن</button>
        </section>
        <section className={styles.notes}>
            <div></div>
        </section>
        </>
    )
}
export default Main;