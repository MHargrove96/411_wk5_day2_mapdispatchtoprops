import { connect } from 'react-redux'

import AddCar from '../components/AddCar'
import { addCar } from '../redux/action'

const mapDispatchToProps = (dispatch) => {
    return {
        AddCar: (car) => dispatch(addCar(car))
    }
}

export default connect(null, mapDispatchToProps)(AddCar)