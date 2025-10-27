import Image from "next/image";


interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  className?: string;
  hasPlayIcon?: boolean;
}

export default function ProjectCard({ title, category, imageSrc, className = "", hasPlayIcon = false }: ProjectCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Project Image */}
      <div className="relative h-[236px] w-[420px] rounded-[5px] shadow-[0px_127px_36px_0px_rgba(0,0,0,0),0px_81px_33px_0px_rgba(0,0,0,0.03),0px_46px_28px_0px_rgba(0,0,0,0.1),0px_20px_20px_0px_rgba(0,0,0,0.17),0px_5px_11px_0px_rgba(0,0,0,0.2)]">
        <Image fill  
          alt={title} 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5px] size-full" 
          src={imageSrc}
          layout="fill"
          objectFit="cover" 
        />
        
        {/* Play Icon Overlay */}
        {hasPlayIcon && (
          <div className="absolute inset-[5.84%_4.08%_85.42%_90.94%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
              <path d="M10.4756 0C14.1832 0.000296173 17.1895 3.00621 17.1895 6.71387V8.61816H18.0938C19.6713 8.61841 20.9502 9.897 20.9502 11.4746V22.9023C20.95 24.4798 19.6712 25.7585 18.0938 25.7588H2.85645C1.27901 25.7585 0.000219513 24.4798 0 22.9023V11.4746C1.98284e-05 9.897 1.27889 8.61841 2.85645 8.61816H3.76172V6.71387C3.76172 3.00602 6.76774 1.64705e-06 10.4756 0ZM10.4756 14.8076C9.16077 14.8076 8.09473 15.8737 8.09473 17.1885C8.09481 18.5032 9.16082 19.5693 10.4756 19.5693C11.7902 19.5691 12.8554 18.5031 12.8555 17.1885C12.8555 15.8738 11.7902 14.8078 10.4756 14.8076ZM10.4756 2C7.87231 2 5.76172 4.11059 5.76172 6.71387V8.61816H15.1895V6.71387C15.1895 4.11078 13.0786 2.0003 10.4756 2Z" fill="white" fillOpacity="0.5" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Project Title */}
      <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic text-[#d9d9d9] text-[20px] text-nowrap top-[256px] uppercase">
        <p className="leading-[normal] whitespace-pre">{title}</p>
      </div>
      
      {/* Project Category */}
      <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic text-[20px] text-[rgba(127,127,127,0.8)] text-nowrap top-[281px] uppercase">
        <p className="leading-[normal] whitespace-pre">{category}</p>
      </div>
    </div>
  );
}