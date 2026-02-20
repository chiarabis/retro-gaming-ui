import { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import { modals } from '../Modal/Modal';
import CatWindow from "../CatWindow/CatWindow";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const folders = [
    { name: 'About', icon: '/rxrsxrta.png' },
    { name: 'Pokemon cards', icon: '/rxrsxrta.png' },
    { name: 'Music Player', icon: '/rxrsxrta.png' },
    { name: 'Pixel Icons', icon: '/rxrsxrta.png' },
    // { name: 'Storybook', icon: '/rxrsxrta.png' },
    { name: 'Contact', icon: '/rxrsxrta.png' },
]







export default function Home() {
    const ref = useRef<HTMLDivElement | null>(null);


    //stati che permettono UNA modale alla volta
    // const [openFolder, setOpenFolder] = useState<string | null>(null);
    // const [openModal, setOpenModal] = useState<boolean>(false);

    //stati che permettono MULTIPLE modali contemporanee (tipo finestre desktop)
    const [openModals, setOpenModals] = useState<string[]>([]);


    
    const [hoveredFolder, setHoveredFolder] = useState<string | null>(null);

    // const handleFolderClick = (folderName: string) => {
    //     if (openFolder === folderName) {
    //     setOpenFolder(null);
    //     setOpenModal(false);
    // } else {
    //     setOpenFolder(folderName);
    //     setOpenModal(true);
    // }
    // };

    //gestione modali multiple
    const handleFolderClick = (folderName: string) => {
        setOpenModals(prev => {
            if (prev.includes(folderName)) {
                return prev.filter(name => name !== folderName);
            } else {
                return [...prev, folderName];
            }
        });
    };


    //cliccando fuori dalla modale, questa si chiude
    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //       if (ref.current && !ref.current.contains(event.target as Node)) {
    //         setOpenFolder(null);
    //         setOpenModal(false);
    //       }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => document.removeEventListener("mousedown", handleClickOutside);
    // }, []);

    // const closeWindow = () => {
    //     setOpenFolder(null);
    //     setOpenModal(false);
    // }

    const closeWindow = (name: string) => {
        setOpenModals(prev => prev.filter(n => n !== name));
    };


    const handleOpenModal = (name: string) => {
        setOpenModals(prev => {
            if (prev.includes(name)) {
                return prev.filter(n => n !== name);
            } else {
                return [...prev, name];
            }
        });
    };

    

    return (
        <>
            <Navbar
                gridColor="rgba(255, 255, 255, 0.5)"
                gap={6}
                fontSize={2}
                links={[
                    { name: "Home", href: "#" },
                    { name: "Contact", href: "" },
                ]}
                textColor="#0f172b"
                backgroundColor="transparent"
                justify="center"
            />

            <div style={{ width: '100%', height: '100%'}}>
                <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(3, 1fr)', placeItems: "start", width: '50%', margin: '0 3rem' }}>

                {folders.map((folder, index) => (
                    <div
                        key={index}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}
                        onClick={() => handleFolderClick(folder.name)}
                        onMouseEnter={() => setHoveredFolder(folder.name)}
                        onMouseLeave={() => setHoveredFolder(null)}
                        ref={ref}
                        >
                        <img
                        // src={openFolder === folder.name || hoveredFolder === folder.name ? "./srwffram.png" : folder.icon}
                        // alt={folder.name}
                        src={openModals.includes(folder.name) || hoveredFolder === folder.name ? "./srwffram.png": folder.icon}
                        alt={folder.name}
                        />

                        <p style={{ fontFamily: 'VT323', margin: 0 }}>{folder.name}</p>
                    </div>
                ))}

                </div>

            </div>

            
            
            {/* {openModal && openFolder && (
                <Modal closeWindow={closeWindow}>
                    {modals.find(m => m.name === openFolder)?.content}
                </Modal>
            )} */}

            {/**modali multiple */}
            {openModals.map(folderName => {
                const modalData = modals.find(m => m.name === folderName);

                if (!modalData) return null;

                return (
                    <Modal
                    key={folderName}
                    closeWindow={() => closeWindow(folderName)}
                    modalName={folderName}
                    >
                    {modalData.content}
                    </Modal>
                );
            })}



            <Footer handleOpenModal={handleOpenModal}/>

        </>
    );
}