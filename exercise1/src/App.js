import './App.css';

const Header = () => {
  return (
    <header>
      <div className='headerContent'>
        <div className='logo'><p>HELSINGIN SANOMAT</p></div>
        <Navigation></Navigation>
        <HeaderButton text='Tilaa' id='order'></HeaderButton>
        <HeaderButton text='Kirjaudu'></HeaderButton>
        <HeaderButton text='Valikko'></HeaderButton>
      </div>
    </header>
  )
}

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><a href=''>Etusivu</a></li>
        <li><a href=''>Uutiset</a></li>
        <li><a href=''>Lehdet</a></li>
        <li><a href=''>Asiakaspalvelu</a></li>
      </ul>
    </nav>
  )
}

const HeaderButton = ({text, id}) => {
  return (
    <button className='headerButton' id={id}>{text}</button>
  )
}

const Layout = () => {
  return (
    <div id='canvas'>
      <div id='bannerContainer'>
        <Banner title='PÄIVÄN TIMANTTI:'></Banner>
        <Banner title='PÄIVÄN TIMANTTI:'></Banner>
        <Banner title='MAINOS:'></Banner>
      </div>
    </div>
  )
}

const Banner = ({title}) => {
  return (
    <div className='banner'><b>{title}</b></div>
  )
}


function App() {
  return (
    <>
      <Header></Header>
      <Layout></Layout>

    </>
  );
}

export default App;
