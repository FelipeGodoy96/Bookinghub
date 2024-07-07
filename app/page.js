"use client"

import Searchbar from "@/features/common/modules/Searchbar";
import CategoryCard from "@/features/common/modules/CategoryCard";

export default function Home() {

  
  return (
    <>
      <Searchbar />
        <section className="categories mt-2 md:my-4 lg:my-8 px-2 flex flex-col gap-2 py-2 md:px-8 lg:px-12">
          <h1 className="categories_title font-semibold text-xl md:text-2xl text-slate-500">
            Buscar por tipo de acomodação
          </h1>
          <CategoryCard />
        </section>
    </>
  );
}
