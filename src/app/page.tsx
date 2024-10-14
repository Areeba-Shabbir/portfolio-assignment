
// import Header from "@/app/components/header";
// import{ Footer} from"@/app/components/footer";


// export default function Home() {
//   return (
//     <div className="portfolio">
//       <Header />
//       <Footer/>
//           <h1>Hi,</h1>
//           <h2>I'M AREEBA SHABBIR</h2>
//           <p>a developer specializing in building interactive web applications using modern frameworks like Next.js.</p>
//         </div>
//   );
// }


import Header from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <div className="portfolio">
      <Header />
      <div className="content">
        <h1>Hi,</h1>
        <h2>I'M AREEBA SHABBIR</h2>
        <p>
          A developer specializing in building interactive web applications using modern frameworks like Next.js.
        </p>
      </div>
      <Footer />
    </div>
  );
}



