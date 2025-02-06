import Image from "next/image";

interface CardWithFormProps {
  title: string;
  description?: string;
  image: string;
  link: string;
}

export function CardWithForm({ title, description, image, link }: CardWithFormProps) {
  return (
    <a className="group" href={`${ link ? link : '#'}`}>
      <div className="w-full rounded-xl overflow-hidden">
        <Image src={image} alt={title} width={700} height={275} className="w-full h-48 object-cover transition-transform duration-300 sm:group-hover:scale-105"/>
      </div>
      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight py-4">{title}</h2>
        <p className="text-slate-400">{description}</p>
        <p className="relative inline-block text-green-400 font-medium cursor-pointer">
          Show it →
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-green-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </p>
      </div>
    </a>
  )
}

// <a class="custom-link group space-y-6" 
//   href="projects/bookmarked-android" data-astro-cid-vigk46vr="true" data-astro-cid-lv35k6iu="" style="">
//   <div class="blur-load h-fit w-fit bg-cover bg-center rounded-lg overflow-clip image-loaded" data-astro-cid-3pavphya="" style="--bg-image: url(/_astro/project_bookmarked_android.uiO2eS7__Z1zVJNc.webp);">
//     <img src="/_astro/project_bookmarked_android.uiO2eS7__2vP9Mp.webp" alt="Bookmarked Android: A Simple Viewer for My Bookmarked Content" data-astro-cid-vigk46vr="true" data-astro-cid-3pavphya="true" width="1920" height="1440" loading="lazy" decoding="async" class="object-cover object-center h-[inherit] max-h-[inherit] rounded-[inherit] aspect-[1.75] transition-all duration-800 group-hover:scale-105">
//   </div>  
//   <script type="module" data-astro-exec="">document.addEventListener("astro:page-load",()=>{document.querySelectorAll(".blur-load").forEach(e=>{const a=e.querySelector("img");function d(){e.classList.add("image-loaded")}if(a?.complete)return d();a?.addEventListener("load",d)})});</script> 
//   <div class="flex flex-col gap-4" data-astro-cid-vigk46vr="" style="--offsetEnd: 24px;"> 
//     <p data-astro-cid-vigk46vr="" style="--offsetEnd: 24px;">2024</p> <!-- should we use heading here? --> 
//     <h4 class="font-display text-xl font-semibold !leading-[1.25] max-sm:text-lg" data-astro-cid-vigk46vr="" style="--offsetEnd: 24px;"> 
//       Bookmarked Android: A Simple Viewer for My Bookmarked Content 
//     </h4> 
//     <p class="text-sm text-zinc-400" data-astro-cid-vigk46vr="" style="--offsetEnd: 24px;"> Built with Jetpack Compose, it aims to offer an improved reading experience on my laggy phone. </p> 
//     <span class="link-hover-animation group-hover:link-hovered-animation w-fit text-sm text-emerald-400" data-astro-cid-vigk46vr="" style="--offsetEnd: 24px;">
//       Read more
//       <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="ml-1 inline-block transition-all duration-300 group-hover:ml-2" data-astro-cid-vigk46vr="true">
//         <path fill="currentColor" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z">
//         </path>
//       </svg>
//     </span>
//   </div> 
// </a>