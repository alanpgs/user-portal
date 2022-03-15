import "./footer.scss";

function CommonFooter() {
    const date_ = new Date().getFullYear();
    return (
        <footer>
            <div className="container">
                <div className="footer_content">
                    <p>
                        UserPortal All Right Reserved &copy; {date_}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default CommonFooter;