'use client';

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useUsernameStore } from "@/store";

export default function Header() {
  const globalUsername = useUsernameStore((state) => state.globalUsername)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={"/"}>
          <Image
            src={"/assets/cats.svg"}
            alt="Cats"
            width={56}
            height={44}
            priority
          />
        </Link>
        <h4>Olá { globalUsername }</h4>
        <section style={{ display: 'flex' }}>
          <Link href={"/gato"}>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Link>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className={styles.login}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <Link href={"/conta"}>
              <MenuItem onClick={handleClose}>
                Minha conta 
              </MenuItem>
            </Link>
            <Link href={"/login"}>
              <MenuItem onClick={handleClose}>
                Sair
              </MenuItem>
            </Link>
          </Menu>
        </section>
        
      </nav>
    </header>
  );
}
