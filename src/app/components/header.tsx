// import Link from "next/link"

// export default function Header (){
//     return(
//         <div className= "header">
//         <ul className = "header-buttons">
//             <Link href={"/"}>
//          <li>Portfolio</li>
//          </Link>
//          <Link href={"/about-us"}>
//           <li>About us</li>
//           </Link>
//           <Link href={"/contact-us"}>
//           <li>Contact us</li>
//           </Link>
//         </ul>
//       </div>  
//     )
// }

import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-buttons">
        <li>
          <Link href="/">Portfolio</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact us</Link>
          
        </li>
      </ul>
    </div>
    
  );
}
