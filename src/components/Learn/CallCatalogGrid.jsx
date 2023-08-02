import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import { Box,Button, Grid, IconButton } from '@mui/material'
import Image from 'next/image'
import React, { useRef,useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import SO1 from '../../../public/audio/FO-S01.mp3'
import SO2 from '../../../public/audio/FO-S02.mp3'
import SO3 from '../../../public/audio/FO-S03.mp3'
import SO4 from '../../../public/audio/FO-S04.mp3'
import SO5 from '../../../public/audio/FO-S05.mp3'
import SO6 from '../../../public/audio/FO-S06.mp3'
import OrcaSound from '../../../public/images/learn/orcasound.png'

const CallCatalogGrid = () => {
  const audioFiles = [{ SO1 }, { SO2 }, { SO3 }, { SO4 }, { SO5 }, { SO6 }]

  const audioRefs = useRef([])
  const [isPlaying, setIsPlaying] = useState(
    new Array(audioFiles.length).fill(false)
  )

  const handlePlayPause = (index) => {
    const newIsPlaying = [...isPlaying]
    newIsPlaying[index] = !newIsPlaying[index]
    setIsPlaying(newIsPlaying)

    const audioRef = audioRefs.current[index]
    if (audioRef) {
      const playPromise = newIsPlaying[index]
        ? audioRef.play()
        : Promise.resolve()
      if (playPromise !== undefined && typeof playPromise.then === 'function') {
        playPromise
          .then(() => {
            // Audio started playing successfully
          })
          .catch((error) => {
            // Handle the error if audio playback was interrupted
            console.error('Audio playback error:', error)
          })
      }
    }
  }
  console.log('audioFiles:', audioFiles)
  console.log('audioRefs:', audioRefs)
  console.log('isPlaying:', isPlaying)

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
          {audioFiles.map((audioFile, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Image
                src={OrcaSound}
                alt={`Orca Call ${index}`}
                style={{ width: '100%' }}
              />
              <audio ref={(audio) => (audioRefs.current[index] = audio)}>
                <source src={audioFile} type="audio/mpeg" />
              </audio>
              <IconButton onClick={() => handlePlayPause(index)}>
                {isPlaying[index] ? (
                  <PauseCircleIcon fontSize="large" />
                ) : (
                  <PlayCircleIcon fontSize="large" />
                )}
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
