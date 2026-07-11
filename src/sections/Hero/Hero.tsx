import BadgeScroll from '../../components/Bagde/BadgeScroll'
import BadgeStatus from '../../components/Bagde/BadgeStatus'
import HeroButtons from './HeroButtons'
import HeroContent from './HeroContent'
import HeroStack from './HeroStack'

const Hero = () => {
  return (
    <header className="mt-24 px-6 md:px-10 lg:ml-68 lg:px-0">
        <BadgeStatus />
        <HeroContent />
        <HeroButtons />
        <HeroStack />
        <BadgeScroll />
    </header>
  )
}

export default Hero