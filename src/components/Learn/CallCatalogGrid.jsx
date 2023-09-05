import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import { Box, Button, Grid, IconButton } from '@mui/material'
import Image from 'next/image'
import useSound from 'use-sound'

import SO1 from '../../../public/audio/FO-S01.mp3'
import SO2 from '../../../public/audio/FO-S02.mp3'
import SO3 from '../../../public/audio/FO-S03.mp3'
import SO4 from '../../../public/audio/FO-S04.mp3'
import SO5 from '../../../public/audio/FO-S05.mp3'
import SO6 from '../../../public/audio/FO-S06.mp3'
import OrcaSound from '../../../public/images/learn/orcasound.png'

const CallCatalogGrid = () => {
  const [playS01] = useSound(SO1)
  const [playS02] = useSound(SO2)
  const [playS03] = useSound(SO3)
  const [playS04] = useSound(SO4)
  const [playS05] = useSound(SO5)
  const [playS06] = useSound(SO6)

  const playArray = [playS01, playS02, playS03, playS04, playS05, playS06]

  return (
    <div>
      <Box
        sx={{
          borderRadius: '33px',
          bgcolor: '#ffff',
          my: '50px',
          py: '50px',
          px: '90px',
          textAlign: 'center',
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 12 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {playArray.map((play, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Image
                src={OrcaSound}
                alt={`Orca Call ${index}`}
                style={{ width: '100%' }}
              />

              <IconButton onClick={play}>
                <PlayCircleIcon fontSize="large" />
              </IconButton>
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          sx={{
            borderRadius: '30px',
            mt: 10,
            py: 2,
            px: 5,
          }}
        >
          Access Call Catalog
        </Button>
      </Box>
    </div>
  )
}

export default CallCatalogGrid
