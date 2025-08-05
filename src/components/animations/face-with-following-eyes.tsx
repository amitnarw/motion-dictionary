
"use client";

import { FollowingEyes } from "./following-eyes";


export function FaceWithFollowingEyes() {
    return (
        <div className="relative w-48 h-32 bg-card/80 rounded-full shadow-lg flex items-center justify-center p-4 border-2 border-border/20">
            <div 
                className="absolute w-24 h-4 bg-card/60 top-8 rounded-full shadow-inner" 
                style={{ transform: 'rotate(-5deg)' }}
            ></div>
            <div 
                className="absolute w-20 h-3 bg-card/60 top-10 left-10 rounded-full shadow-inner"
                style={{ transform: 'rotate(-10deg)' }}
            ></div>
             <div className="relative w-full flex items-center justify-center mt-2">
                <FollowingEyes />
            </div>
             <div 
                className="absolute w-12 h-2 bg-muted/50 bottom-8 rounded-full"
            ></div>
        </div>
    )
}

