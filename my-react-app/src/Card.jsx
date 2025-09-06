import spider from './assets/spider.jpg'
function Card() {
    return(
        <div className="card">
            <img src={spider} className="card-image" alt="Profile picture" />
            <h2 className='card-title'>Smruti-77</h2>
            <p className='card-text'>I make ZYoutube video and play video games</p>
        </div>
    );
}

export default Card