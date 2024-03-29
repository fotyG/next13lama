import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/Button/Button"

export const metadata = {
  title: "Contact Page",
  description: "This is the description of the contact page",
};

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea className={styles.textArea} cols="30" rows="10" placeholder="message"></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}
export default Contact