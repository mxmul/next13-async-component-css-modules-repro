import styles from "./styles.module.css";

export default async function Page() {
  // Artificially slow the page so we can see the loading state
  await new Promise<void>((res) => setTimeout(() => res(), 1000));

  return <h2 className={styles.red}>hello world!</h2>;
}
