import './App.css'
import FirstVisitHandler from './components/home/FirstVisitHandler'
import { Box } from '@mui/material'

function App() {

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', fontFamily: 'Proxima-Nova', color: 'typography.main'}}>
      <FirstVisitHandler/>
    </Box>
  )
}

export default App
