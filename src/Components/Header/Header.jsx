import s from './Header.module.css'


const Header = () =>{

    return(

    <header className={s.header}>
      <div className={s.container}>
        <img src='https://api.freelogodesign.org/assets/thumb/logo/8027670_400.png?t=637885647830000000' alt="Logo" />
      </div>
    </header> 

  );

}

export default Header