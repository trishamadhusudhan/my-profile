import './Footer.css'

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className='site-footer'>
            <p>
        &copy;{year} Rakesh K R. Built with React🌐
    </p>
        </footer>
    )
}
export default Footer; // We must export it so App.jsx can use it ! 