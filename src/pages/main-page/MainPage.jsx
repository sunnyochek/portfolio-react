import {Header} from '../../components/Header/Header'
import {IndexButton} from '../../components/IndexButton/IndexButton'
import { MainLayout } from '../../components/MainLayout/MainLayout'
export const MainPage = () => {
    return <MainLayout>
        <Header />
        <nav>
            <IndexButton href="#" text="Portfolio"/>
            <IndexButton href="#" text="Cards"/>
         </nav>
    </MainLayout>
}
