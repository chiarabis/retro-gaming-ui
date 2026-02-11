// const modals = [
//     { 
//         link: 'about',
//         content: {
//             main: (
//                 <div style={{margin: '1rem'}}>
//                     <div style={{ width: 'fit-content', margin: '0 auto' }}>
//                         <img src="./download1.gif" style={{ objectFit: 'fill', borderRadius: '10px' }} />
//                     </div>
//                     <p style={{ margin: '0.75rem 0', textAlign: 'center'}}>Welcome!</p>
//                     <p style={{ margin: 0, textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat expedita omnis alias?</p>
//                     <p style={{ margin: 0, textAlign: 'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam unde ipsam illo, neque distinctio incidunt exercitationem libero expedita.</p>
//                 </div>
//             ),
//             footer: (
//                 <>
//                     <a style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer', }}>Recent Games</a>
//                     <a style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer', }}>Contact</a>
//                 </>
//             )    
//         }
// ]


type ModalItem = {
  name: string;
  content: React.ReactNode;
};


export const modals: ModalItem[] = [
    { 
        name: 'About', 
        content: (
            <>
                <div style={{margin: '1rem'}}>
                    <div style={{ width: 'fit-content', margin: '0 auto' }}>
                        <img src="./download1.gif" style={{ objectFit: 'fill', borderRadius: '10px' }} />
                    </div>
                    <p style={{ margin: '0.75rem 0', textAlign: 'center'}}>Welcome!</p>
                    <p style={{ margin: 0, textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat expedita omnis alias?</p>
                    <p style={{ margin: 0, textAlign: 'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam unde ipsam illo, neque distinctio incidunt exercitationem libero expedita.</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
                    <a style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer', }}>Recent Games</a>
                    <a style={{ margin: 0, textDecoration: 'none', color: '#0f172b', cursor: 'pointer', }}>Contact</a>
                </div>
            </>
        )
    },
  { 
    name: 'Pokemon cards', 
    content: (
        <>
            <div style={{margin: '1rem'}}>
                hdvbchsd
            </div>
        </>
    )
  },
  { 
    name: 'Counter', 
    content: (
      <div>
        <p>dwedfew</p>
        <p>eww</p>
      </div>
    )
  },
  { 
    name: 'Contact', 
    content: (
        <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem', gap: '1rem'}}>
            <div>
                {/* <div style={{ width: 'fit-content', margin: '0 auto' }}>
                    <img src="./download2.jpg" style={{ objectFit: 'fill', borderRadius: '10px' }} />
                </div> */}
                <p style={{ margin: '0 0 0.75rem 0', textAlign: 'start'}}>Contact me</p>
                <p style={{ margin: 0, textAlign: 'justify'}}>email@gmail.kz</p>
                <p style={{ margin: 0, textAlign: 'justify'}}>+39 12345678</p>
            </div>
            <div style={{ float: 'right', alignSelf: 'end', transition: 'transform 0.2s', animation: 'bounce 1s infinite ease-in-out' }}>
                <img src="./laibdwee.png" style={{ width: '40px' }} />
            </div>
        </div>
    )
  },
];


export default function Modal({
    closeWindow,
    children,
}: {
    closeWindow: () => void;
    children?: React.ReactNode;
}) {

    return (
            <div style={{ backgroundColor: '#fffdfd', width: 'fit-content', height: 'fit-content', position: 'absolute', left: '50%', 
            transform: 'translate(-50%, 50%)', zIndex: '9999' }}>
                <div style={{ display: 'flex', justifyContent: 'end', borderBottom: '2px solid #0f172b' }}
                onDrag={(e) => console.log('drag', e)} draggable={true}>
                    <button onClick={() => console.log('minimize')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M2 3h20v18H2zm18 16V7H4v12zM8 12h8v2H8z"/>
                        </svg>
                    </button>

                    <button type="button" onClick={closeWindow} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                            <path fill="#0f172b" 
                        d="M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"/>
                        </svg>
                    </button>

                    
                    
                    
                </div>       
                {children}        
            </div>
    );
}