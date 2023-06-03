import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts/"+id, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            accusantium molestiae perspiciatis enim excepturi libero id tenetur
            nulla sint consequatur itaque quae corporis obcaecati, vitae culpa
            fuga voluptates voluptate ipsam.
          </p>
          <div className={styles.author}>
            <Image
              src="/illustration.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/illustration.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          aliquid commodi voluptatem magni maxime quam reprehenderit quo fugiat
          quae, cum eligendi corporis fuga temporibus possimus nobis, provident
          repellendus debitis rem.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sit aspernatur laudantium, nulla quisquam numquam necessitatibus laborum velit deleniti quidem dolorum? Sed enim ratione, eveniet magnam repellat saepe optio error.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos ipsam necessitatibus. Eligendi non repudiandae illum, quidem temporibus voluptates ab facere ipsam commodi quam. Quidem quibusdam nam nulla voluptatem praesentium.
        </p>
      </div>
    </div>
  );
};
export default BlogPost;
