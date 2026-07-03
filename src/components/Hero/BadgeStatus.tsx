
const BadgeStatus = () => {
  return (
    <>
        <div className="BadgeStatus inline-flex rounded-full items-center ml-3 px-4 py-2 gap-4 border border-blue-500/40 bg-[#0B1220]/90shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-sm">
            
            <div className="relative flex h-2.5 w-2.5">
                {/* Bolinha que pulsa */}
                <span className="absolute inline-flex h-full w-full animate-ping     rounded-full bg-green-400 opacity-75"></span>

                {/* Bolinha fixa */}
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>
            </div>

            <span className="text-xs text-blue-200 font-medium" >Disponível para projetos</span>
        </div>
    </>
  )
}

export default BadgeStatus