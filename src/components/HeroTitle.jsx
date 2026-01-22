import TypingAnimation from './TypingAnimation'

function HeroTitle() {
    return (
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">CODE AI</span>
            <TypingAnimation text=" 2026" className="text-white" speed={120} delay={300} />
        </h1>
    )
}

export default HeroTitle
