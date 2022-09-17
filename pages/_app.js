import '../styles/globals.css'
import Navbar from '@/layout/navbar';
import Notify from '../components/notify';
import StartUp from 'components/startup';
import { DataProvider } from '../store/GlobalState';
import Modal from 'components/modal';

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return (
      <DataProvider >
        <StartUp>
          {
            Component.getLayout(<Component {...pageProps} />)
          }
        </StartUp>
      </DataProvider>
    )
  }
  return (
    <>
      <DataProvider>
        <StartUp>
          <Navbar />
          <Notify />
          <Modal />
          <Component {...pageProps} />
        </StartUp>
      </DataProvider>
    </>
  )
}

export default MyApp
