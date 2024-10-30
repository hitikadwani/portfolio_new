"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Badge } from "@/components/badge";
import { Card, CardHeader } from "@/components/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { title } from "process";
import React from "react";
import { useState } from "react";

interface EducationCardProps {
    logoUrl: string;
    href?: string;
    school: string;
    degree: string;
    start: string;
    end: string;
    altText: string; 
    period: string;
    description: string
}

export const EducationCard =({
    logoUrl,
    href,
    school,
    degree,
    start,
    end,
    altText,
    period,
    description
}: EducationCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if(description) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    }
        return (
            <Link href={href || ""} className="block cursor-pointer" onClick={handleClick}>
                <Card className="flex">
                    <div className="flex-none">
                        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
                            <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
                            <AvatarFallback>{altText[0]}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex-grow ml-4 items-center flex-col group">
                      <CardHeader>
                      <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                        {school}
                        
                        <ChevronRightIcon
                            className={cn(
                                "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                            )}
                            onClick={() => window.open(href, '_blank')}
                        />
                        </h3>
                        <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                          {period}
                        </div>
                      </div>
                      {degree && <div className="font-sans text-xs">{degree}</div>}
                      </CardHeader>
                      {description && (
                        <motion.div initial={{ opacity: 0, height: 0}}
                        animate={{
                            opacity: isExpanded ? 1 : 0,
                            height: isExpanded ? "auto" : 0
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-2 text-xs sm:text-sm" >
                            {description}
                        </motion.div>
                      )}
                    </div>
                </Card>
            </Link>
    )
    
}