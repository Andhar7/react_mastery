
import { useState } from 'react'
import './App.css'
import {SearchBar} from "./components/SearchBar.tsx";

function App() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)
    const handleSearch = async (city: string) => {

        setIsLoading(true);
        setError(null);
        console.log('city', city);

    }

  return (
    <div>
      <div>

          {/* Search Bar */}
          <div>
              <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          </div>

      </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
