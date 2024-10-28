function Footer(){
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
    <footer className="footer">
            <div className="order">
             {isOpen && (
                <>
                <p>We are open, Come visit us or order online.</p>
                <button className="btn">Order Now</button>
                </>
        )}               
            </div>
    </footer>
        )
}

export default Footer;