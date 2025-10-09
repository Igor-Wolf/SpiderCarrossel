import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./page.module.scss"
import { GET } from "./api/heroes/route";

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await GET();

  if (!res.ok) {
    throw new Error("Failed to request heroes list");
  }

  return res.json();
}

export default async function Home() {
  const heroes = await getHeroesData()
  

  return (
    <main className={styles.main}>
    
    <HeroesList heroes={heroes.data}></HeroesList>

  </main>
  );
}
