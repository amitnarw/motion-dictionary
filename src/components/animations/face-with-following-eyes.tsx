
"use client";

import { FollowingEyes } from "./following-eyes";


export function FaceWithFollowingEyes() {
    return (
        <div className="relative w-48 h-32 bg-card/80 rounded-full shadow-lg flex items-center justify-center p-4 border-2 border-border/20">
            {/* Nose */}
            <div 
                className="absolute w-4 h-8 bg-card/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 rounded-full shadow-inner"
            ></div>

            <div className="relative w-full flex items-center justify-center mt-[-1rem]">
                <FollowingEyes />
            </div>
            
            {/* Mouth */}
            <div 
                className="absolute w-16 h-8 bg-muted/30 bottom-4 rounded-b-full shadow-inner"
            ></div>
        </div>
    )
}
