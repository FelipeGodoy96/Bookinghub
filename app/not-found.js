import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#383B58] flex grow justify-center items-center w-full">
      <section className="not-found flex flex-col max-w-4xl w-full bg-white rounded-xl shadow-md text-center gap-8 px-2 p-2 max-h-96 md:max-h-auto m-4">
        <h1 className="text-2xl md:text-6xl font-bold">Oops...</h1>
        <h2 className="text-[#1DBEB4] text-4xl md:text-8xl font-bold">Erro 404</h2>
        <p className="text-2xl md:text-3xl font-semibold">
          A página que você estava procurando não foi encontrada.
        </p>

        <div>
          <Link href="/">
            Voltar para a{" "}
            <strong className="btn btn-primary md:p-0.5">página inicial</strong>
          </Link>
        </div>
      </section>
    </div>
  );
}
