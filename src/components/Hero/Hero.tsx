
import Background from './Background'
import BadgeScroll from './BadgeScroll'
import BadgeStatus from './BadgeStatus'
import HeroButtons from './HeroButtons'
import HeroContent from './HeroContent'
import HeroStack from './HeroStack'

const Hero = () => {
  return (
    <section className='ml-68 mt-24'>
        <Background />
        <BadgeStatus />
        <HeroContent />
        <HeroButtons />
        <HeroStack />
        <BadgeScroll />
    </section>
  )
}

export default Hero