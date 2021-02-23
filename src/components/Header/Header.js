import React from 'react';
import logo from './IconeTwitch.svg';
import loupe from './IconeSearch.svg';
import menuIco from './IconeMenu.svg';
import {Link} from "react-router-dom";

function Header()
{
    return (
        <div>
            <nav className="headerTop">
                <ul className="listeMenu">
                    <li className="liensNav">
                        <Link className="lien" to="/"><img src={logo} alt="logo twitch" className="logo"/></Link>

                    </li>
                    <li className="liensNav">
                        <Link className="lien" to="/">Top games</Link>

                    </li>
                    <li className="liensNav">
                        <Link className="lien" to="/top-streams">Top streams</Link>

                    </li>
                    <li className="liensNav">
                        <form action="" className="formSubmit">
                            <input type="text" className="inputRecherche"/>
                            <button type="submit">
                                <img src={loupe} alt="loupe" className="logoLoupe"/>
                            </button>
                        </form>
                    </li>
                </ul>
            </nav>

            <div className="menuResBtn">
                <img src={menuIco} alt="icone menu responsive" className="menuIco"/>
            </div>
        </div>
    );
}

export default Header
