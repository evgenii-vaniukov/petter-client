import { SearchProvider } from "./context/search_context";
import { SearchPage } from "./pages/search_page";

export function Search({ pets }) {
  return (
    <SearchProvider>
      <SearchPage pets={pets} />
    </SearchProvider>
  );
}
