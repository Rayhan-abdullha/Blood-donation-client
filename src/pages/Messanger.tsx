import SecondaryLayout from '../layout/SecondaryLayout'
import bg from '../assets/banner/header-bg.jpg'
const Messanger = () => {
    return (
        <SecondaryLayout bgImg={bg} title='Message Admin'>
            <form action="">
                <input type="textarea" />
            </form>
        </SecondaryLayout>
    )
}

export default Messanger