"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "./search.scss";

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

  // TODO: Add fix for search input and params not being cleared on page reload if input hasn't been cleared before reload

  return (
    <div className="search-container">
      <label
        htmlFor="search"
        className="search-container__label-visually-hidden"
      >
        Sök
      </label>
      <input
        id="search"
        aria-label={placeholder}
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        type="search"
        className="search-container__input"
      />
    </div>
  );
}
