import {useState} from 'react'
import {
  MainContainer,
  LockImage,
  LockParagraph,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)
  console.log('ok')
  const image = isLock
    ? `https://assets.ccbp.in/frontend/hooks/lock-img.png`
    : `https://assets.ccbp.in/frontend/hooks/unlock-img.png`

  const lockMsg = isLock ? 'Locked' : 'Unlocked'

  const buttonText = isLock ? 'Unlock' : 'Lock'

  const altText = isLock ? 'lock' : 'unlock'

  const changeLockStatus = () => setLock(prevState => !prevState)

  return (
    <MainContainer>
      <LockImage src={image} alt={altText} />
      <LockParagraph>Your Device is {lockMsg}</LockParagraph>
      <LockButton onClick={changeLockStatus}>{buttonText}</LockButton>
    </MainContainer>
  )
}

export default Unlock
