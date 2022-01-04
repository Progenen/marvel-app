import spinner from '../../images/spinner.gif';

const Spinner = () => {
    return (
        <img src={spinner} alt="loading" style={{margin: 'auto', display: 'flex', width: '120px', height: '120px'}}/>
    )
}

export default Spinner;