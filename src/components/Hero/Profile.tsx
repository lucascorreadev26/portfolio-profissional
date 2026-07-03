import perfilPortifolio from '../../assets/perfilPortifolio.png'
import Button from '../Button/Button'



const Profile = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-80 h-80">

      <div>
        {/* Fumaça */}
        <div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl animate-smoke" />

        {/* Foto */}
        <img
          src={perfilPortifolio}
          alt="Imagem de Perfil do Desenvolvedor Lucas Correa"
          className="relative z-10 w-80 rounded-full animate-profile-flip"
        />
      </div>



    </div>

  )
}

export default Profile