
const NAVBAR = [{
    deco: true,
    title: "",
    href: "/#"
},{
    deco: false,
    title: "home",
    href: "/#"
},{
    deco: true,
    title: "",
    href: "/#"
},{
    deco: false,
    title: "cv",
    href: "/#"
},{
    deco: true,
    title: "",
    href: "/#"
},{
    deco: false,
    title: "github",
    href: "/#"
},{
    deco: true,
    title: "",
    href: "/#"
},{
    deco: false,
    title: "contact",
    href: "#contact"
},{
    deco: true,
    title: "",
    href: "/#"
},];

function Navbar(){

    return (
        <div className="navbar-container">
            <ul>
                {NAVBAR.map(item => {
                    let itemClassName = "navbar-item";
                    if(item.deco){
                        itemClassName = "navbar-deco";
                    }
                    return (
                        <div className={itemClassName}>
                            <li><a href={item.href}>{item.title}</a></li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default Navbar;
