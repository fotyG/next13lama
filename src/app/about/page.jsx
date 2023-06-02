import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            facere, expedita quasi, explicabo veniam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit ratione in! Ipsam quidem repudiandae iste necessitatibus odio consequuntur et est dolore quisquam. Quaerat quam corrupti fugit expedita nostrum? Porro!<br />
            <br /> delectus sequi nam quam velit facilis enim sapiente beatae
            earum culpa? Eum labore esse et itaque.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
            distinctio vitae? Vero laborum commodi sunt voluptatibus repellat
            totam accusamus id, tempora suscipit fugiat nihil quasi dolorem
            rerum? Ut, possimus est. <br />
            <br />- Creative bla bla <br />- Dynamic bla bla <br />- Fast and
            Handy Mobile Apps
          </p>
          <Button
            url="/contact"
            text="Contact"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
