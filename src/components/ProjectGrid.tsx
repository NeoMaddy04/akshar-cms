"use client";

import React, { useState } from "react";
import type { Project } from "@prisma/client";

interface ProjectGridProps {
  projects: Project[] | { id: string, title: string, category: string, description: string, imageUrl: string }[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "New Build", "Interior", "Renovation", "Architecture"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Helper to determine dynamic classes based on index (to match the asymmetric grid)
  const getCardClasses = (index: number) => {
    switch (index % 4) {
      case 0: return "md:col-span-8"; // Large
      case 1: return "md:col-span-4 md:mt-12"; // Vertical
      case 2: return "md:col-span-6 md:-mt-12"; // Small Wide
      case 3: return "md:col-span-6"; // Small Wide
      default: return "md:col-span-6";
    }
  };

  const getAspect = (index: number) => {
    switch (index % 4) {
      case 0: return "aspect-[16/9]";
      case 1: return "aspect-[4/5]";
      case 2: return "aspect-[4/3]";
      case 3: return "aspect-[4/3]";
      default: return "aspect-video";
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 border font-label-md text-xs uppercase tracking-wider transition-all duration-300 ${
              activeFilter === filter
                ? "bg-[#12181C] text-white border-[#12181C]"
                : "bg-transparent text-[#6F767E] border-slate-200 hover:border-[#12181C] hover:text-[#12181C]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative min-h-[600px]">
        {filteredProjects.map((project, idx) => (
          <div key={project.id} className={`${getCardClasses(idx)} group cursor-pointer transition-all duration-500`}>
            <div className={`relative overflow-hidden ${getAspect(idx)} mb-6 border border-outline-variant/10 rounded-sm`}>
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={project.title}
                src={project.imageUrl}
              />
              <div className="absolute top-6 left-6">
                <span className="bg-[#12181c] text-[#F7F9FF] font-label-md text-xs px-4 py-2 uppercase tracking-widest rounded-sm">
                  {project.category}
                </span>
              </div>
            </div>
            <h4 className="font-headline-md text-headline-md text-primary group-hover:text-[#755A25] transition-colors">
              {project.title}
            </h4>
            <p className="font-label-md text-label-md text-secondary uppercase tracking-wider mt-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
