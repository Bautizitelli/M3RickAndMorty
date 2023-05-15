import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav({onSearch, logout}){
    return(
        <div className={styles.container}>
            <button className={styles.button} onClick={logout}>Logout</button>
            <NavLink className={styles.link} to="/about"><span>About</span></NavLink>
            <NavLink className={styles.link} to="/home"><span>Home</span></NavLink>
            <NavLink className={styles.link} to='/favorites'><span>Favorites</span></NavLink>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}