import { ReactNode } from "react";
interface ContentSectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}
export function ContentSection({
  id,
  title,
  children,
  className = ""
}: ContentSectionProps) {
  return <section id={id} className={`mb-16 ${className}`}>
      {title}
      <div className="text-foreground/90 space-y-4 leading-relaxed">
        {children}
      </div>
    </section>;
}