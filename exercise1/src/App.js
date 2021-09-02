import './App.css';

const Header = () => {
  return (
    <header>
      <div className='headerContent'>
        <div className='logo'><p>KÄRSÄMÄEN KUULUMISET</p></div>
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
        <Banner title='PÄIVÄN TIMANTTI:' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'></Banner>
        <Banner title='PÄIVÄN TIMANTTI:' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'></Banner>
        <Banner title='MAINOS:' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' isAd='true'></Banner>
      </div>
      <Main></Main>
      <Sidebar></Sidebar>
    </div>
  )
}

const Banner = ({title, text, isAd}) => {

  const className = isAd ? 'banner ad': 'banner'

  return (
    <div className={className}><b>{title}</b>{text}</div>
  )
}

const Main = () => {
  return (
    <main>
      <article>
        <h1>Aihealueotsikko</h1>
        <img src='https://picsum.photos/600/250'></img>
        <h2>Otsikko</h2>
      </article>
    </main>
  )
}

const Sidebar = () => {

  const sections = [
    {
      id: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 1,
      text: 'Esimerkkijuttu'
    },
    {
      id: 2,
      text: 'Esimerkkijuttu 2 Electric Boogaloo'
    },
  ]

  return (
    <aside>
      <h3>Luetuimmat</h3>
      {sections.map( 
        section => <SidebarSection key={section.id} section={section}></SidebarSection>
      )}
    </aside>
  )
}

const SidebarSection = ({section}) => {

  console.log(section.id)

  return (
    <section>
    <div className='sidebarNumber'> {section.id + 1}
    </div>
    <div className='sidebarContent'> {section.text}
    </div>
  </section>
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
