import photogrid from './photo-grid.png';
function Hero(){
    return(
        <div className="hero">
            <img src={photogrid} alt="grid" className=" photogrid" />
            <h1 className='header1'>Online Experiences</h1>
            <p className='para1'>Join unique interactive activities led by one-of-a-kind hosts all without leaving home.</p>
        </div>
    )
}
export default Hero;