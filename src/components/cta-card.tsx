import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: React.ReactNode;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc,
      imageAlt,
      title,
      subtitle,
      description,
      buttonText,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-xl border bg-card text-card-foreground shadow-lg",
          "flex flex-col md:flex-row w-full md:min-h-[350px] lg:min-h-[400px]",
          className
        )}
        {...props}
      >
        <div className="md:w-1/2 lg:w-2/5 w-full h-56 md:h-[350px] lg:h-[400px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="md:w-1/2 lg:w-3/5 w-full p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
          <div>
            {title && (
              <p className="text-sm font-semibold text-primary mb-1">{title}</p>
            )}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              {subtitle}
            </h2>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
              {description}
            </p>
            <div className="mt-6 md:mt-8 lg:mt-10">
              <button
                onClick={onButtonClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-lg bg-[#2a2b76] text-white font-semibold text-sm md:text-base hover:bg-[#1f1f5c] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
CtaCard.displayName = "CtaCard";

export { CtaCard };
