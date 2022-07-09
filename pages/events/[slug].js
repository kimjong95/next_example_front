import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import styles from "@/styles/Event.module.css";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function MyEvents({ evt }) {
  const router = useRouter();

  const deleteEvent = (e) => {
    console.log(e);
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={960} height={600} />
          </div>
        )}
        <h3>Performers :</h3>
        <p>{evt.performers}</p>
        <h3>Description :</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href={`/events`}>
          <a className={styles.back}> Back</a>
        </Link>
      </div>
    </Layout>
  );
}

// getStaticProps는 동적인 곳에서 사용불가능하기 때문에 정적으로 생성할 경로들을 미리 지정해두어야함
// 동적으로 들어오는 paths에 대하여 미리 지정된 정적페이지들을 렌더링
// getStaticProps와는 사용할 수 있지만 getServerSideProps와는 사용할 수 없음
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps 는 빌드시에 반환된 props를 통해서 페이지를 렌더링함
// 동적인 페이지에서는 정적으로 빌드타임에 요청할 수 없음
// 서버에서만 실행되며 클라이언트에서는 실행되지않음
// 빌드시 고정되는 값으로 빌드 후 변경 불가능
// static data를 위한 fetching
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  };
}

// 빌드와 상관없이 매 요청마다 데이터를 서버로부터 가저옴
// ssr을 위한 dataFetching
// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();
//   return {
//     props: {
//       evt: events[0],
//     },
//     revalidate: 1,
//   };
// }
