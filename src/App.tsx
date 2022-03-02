import { useCallback, useState } from 'react'

import { SideBar } from './components/SideBar'
import { Content } from './components/Content'

import './styles/global.scss'

import './styles/sidebar.scss'
import './styles/content.scss'

export const App: React.FC = () => {
  const [selectedGenreId, setSelectedGenreId] = useState(1)

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}
