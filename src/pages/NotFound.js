import image from '../images/404.png'

const NotFound=()=>{
    return(
        <div className='container-notfound'>
            <img src={image} loading="lazy" alt="notfound"></img>
        </div>
    )
}
export default NotFound;
