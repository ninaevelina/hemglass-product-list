"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchProps {
  placeholder: string;
  onSearch?: (searchTerm: string) => void;
}

export default function Search({ placeholder, onSearch }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);

    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Sök
      </label>
      <input
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        type="search"
      />
    </div>
  );
}
