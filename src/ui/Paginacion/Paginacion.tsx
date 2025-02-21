import { useRouter } from "next/navigation";

interface PaginacionProps {
  page: number;
  totalPages: number;
  categoria: string | null;
}

export default function Paginacion({ page, totalPages, categoria }: PaginacionProps) {
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("page", newPage.toString());
    if (categoria) {
      queryParams.set("genero", categoria);
    }
    if (queryParams.get("page") === "1") {
      queryParams.delete("page");
    }
    router.push(`/?${queryParams.toString()}`);
  }

  return (
    <div className="flex justify-center items-center gap-2 my-4">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page <= 1}
        style={{ marginRight: "10px", opacity: page <= 1 ? 0.5 : 1 }}
        className={page <= 1 ? "cursor-not-allowed" : "cursor-pointer"}
      >
        <svg className="size-10" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
      </button>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page >= totalPages}
        style={{ marginLeft: "10px", opacity: page >= totalPages ? 0.5 : 1 }}
        className={page >= totalPages ? "cursor-not-allowed" : "cursor-pointer"}
      >
        <svg className="size-10" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
      </button>
    </div>
  )
}