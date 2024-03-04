import { Avatar } from "@mui/material";

const MyAccount = () => {

    return (
        <div>

            <Avatar></Avatar>
            
                

        </div>

    );

}
export default MyAccount;

// {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const sidebarRef = useRef(null);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event: any) => {
//             if (sidebarRef.current && !sidebarRef.current?.contains(event.target)) {
//                 setIsSidebarOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <div className='mt-6 ml-6 flex flex-col md:flex-row items-center relative'>

//             <button className=' flex justify-center items-center rounded-full p-1 ml-32 mr-0 md:mr-9 mb-3 md:mb-0 bg-violet-700' onClick={toggleSidebar}>
//                 <Favicon favicon={UserIcon.src} className="w-8 h-8 justify-center items-center" />
//             </button>
//             <div className={sidebar fixed z-10 right-20  opacity-100 bg-gradient-to-b from-pink-200 to-violet-300  shadow-md p-4 w-72 bottom-0 top-10 mt-0 rounded-3xl transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full invisible opacity-0'} bottom-36 h-[92%]} ref={sidebarRef}>
//                 <Popup/>
//             </div>

//         </div>
//     );
// };
