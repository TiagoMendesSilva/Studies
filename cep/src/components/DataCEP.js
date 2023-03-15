export default function DataCEP(props){

    const cepData = props.cepData
    const keys = Object.keys(cepData)

    return <>
        {
            keys.map(key => (
                <span key={key}><b> {key}: </b> {cepData[key]} </span>
            ))
        }
    </>
}