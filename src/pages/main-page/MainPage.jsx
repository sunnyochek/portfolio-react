import {Header} from '../../components/Header/Header'
import {IndexButton} from '../../components/IndexButton/IndexButton'
import { MainLayout } from '../../components/MainLayout/MainLayout'
import styles from './MainPage.module.css'

export const MainPage = () => {
    return <MainLayout>
        <main>
        <Header />
            <nav>
                <IndexButton href="#" label="Portfolio"/>
                <IndexButton href="#" label="Cards"/>
            </nav>
        </main>
        {/* <footer>AAA</footer> */}


    </MainLayout>
}
