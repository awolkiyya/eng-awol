interface Props {
    title: string;
    children: React.ReactNode;
  }
  
  export default function Section({ title, children }: Props) {
    return (
      <section className="flex flex-col md:flex-row gap-10 w-full max-w-6xl mx-auto mt-28">
  
        {/* Title */}
        <div className="md:w-48 shrink-0">
          <p className="text-xl md:text-lg font-medium text-center md:text-left">
            {title}
          </p>
        </div>
  
        {/* Content */}
        <div className="flex-1 w-full">
          {children}
        </div>
  
      </section>
    );
  }
  